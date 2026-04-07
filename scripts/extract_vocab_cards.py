#!/usr/bin/env python3

import json
import re
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Optional


ROOT = Path(__file__).resolve().parent.parent
PDF_PATH = ROOT / "VocabulariocartoesNocoesdoGrego-Johannes.pdf"
OUTPUT_PATH = ROOT / "vocabulary-data.js"
XHTML_NS = {"x": "http://www.w3.org/1999/xhtml"}

# These entries break across columns in the PDF layout and need a manual fix.
SPECIAL_OVERRIDES = {
    (14, "right", 0): {
        "term": "aÖ gioj, -i/a, -on",
        "frequency": "233",
        "gloss": "santo; consagrado, separado para Deus",
    },
    (21, "left", 0): {
        "term": "w(j",
        "frequency": "503",
        "gloss": (
            "partíc. comparativa: como, assim como; conj.: como; temporal: "
            "quando; resultado: de modo que; propósito: a fim de que; "
            "c. numerais: cerca de"
        ),
    },
    (22, "right", 2): {
        "term": "paralamba/nw",
        "frequency": "50",
        "gloss": "eu tomo, levo comigo; recebo; aceito",
    },
    (33, "right", 1): {
        "term": "r(h=ma, -atoj, to/",
        "frequency": "68",
        "gloss": "palavra (escrita ou falada); coisa",
    },
    (41, "right", 3): {
        "term": "pi/stij, -ewj, h(",
        "frequency": "243",
        "gloss": "fidelidade, lealdade; confiança, fé; crença",
    },
    (60, "right", 2): {
        "term": "me/gistoj, -h, -on",
        "frequency": "1",
        "gloss": "superl. de me/gaj: o maior; grandíssimo; extremamente grande (2Pe 1.4)",
    },
}


def extract_layout_xhtml() -> str:
    return subprocess.check_output(
        ["pdftotext", "-bbox-layout", str(PDF_PATH), "-"],
        cwd=ROOT,
    ).decode("utf-8", "replace")


def text_from_block(block: ET.Element) -> str:
    lines = []

    for line in block.findall("x:line", XHTML_NS):
        words = [word.text or "" for word in line.findall("x:word", XHTML_NS)]
        text = " ".join(words).strip()
        if text:
            lines.append(text)

    return " ".join(lines).strip()


def normalize_text(value: str) -> str:
    value = re.sub(r"\s+", " ", value).strip()
    return value.replace(" ;", ";").replace(" ,", ",")


def parse_frequency(term: str) -> tuple[str, Optional[str]]:
    match = re.search(r"\(([\d./]+)\)\s*$", term)
    if not match:
        return normalize_text(term), None

    cleaned_term = normalize_text(term[: match.start()])
    return cleaned_term, match.group(1)


def build_entries() -> list[dict]:
    root = ET.fromstring(extract_layout_xhtml())
    entries = []

    for page_number, page in enumerate(root.findall(".//x:page", XHTML_NS), start=1):
        blocks = []

        for block in page.findall(".//x:block", XHTML_NS):
            x = float(block.attrib["xMin"])
            y = float(block.attrib["yMin"])

            # Skip headers and footer artifacts.
            if y < 60:
                continue

            text = text_from_block(block)
            if not text:
                continue

            blocks.append({"x": x, "y": y, "text": normalize_text(text)})

        for side_name, head_range, gloss_range in (
            ("left", (0, 200), (200, 420)),
            ("right", (420, 600), (600, 9999)),
        ):
            head_blocks = [
                block
                for block in blocks
                if head_range[0] <= block["x"] < head_range[1]
            ]
            head_blocks.sort(key=lambda item: item["y"])

            clusters = []
            for block in head_blocks:
                if not clusters or block["y"] - clusters[-1][-1]["y"] > 45:
                    clusters.append([block])
                else:
                    clusters[-1].append(block)

            gloss_blocks = [
                block
                for block in blocks
                if gloss_range[0] <= block["x"] < gloss_range[1]
            ]

            for row_index, cluster in enumerate(clusters):
                cluster_y = sum(block["y"] for block in cluster) / len(cluster)
                linked_gloss = []
                for block in gloss_blocks:
                    nearest_cluster = min(
                        range(len(clusters)),
                        key=lambda index: abs(
                            (
                                sum(item["y"] for item in clusters[index])
                                / len(clusters[index])
                            )
                            - block["y"]
                        ),
                    )
                    if nearest_cluster == row_index:
                        linked_gloss.append(block)

                linked_gloss.sort(key=lambda item: (item["y"], item["x"]))

                head_text = normalize_text(
                    " ".join(block["text"] for block in sorted(cluster, key=lambda item: (item["y"], item["x"])))
                )
                gloss_text = normalize_text(" ".join(block["text"] for block in linked_gloss))

                override = SPECIAL_OVERRIDES.get((page_number, side_name, row_index))
                if override:
                    entries.append(
                        {
                            "id": f"p{page_number}-{side_name}-{row_index}",
                            "page": page_number,
                            "side": side_name,
                            "rowIndex": row_index,
                            "term": override["term"],
                            "frequency": override["frequency"],
                            "gloss": override["gloss"],
                            "displayTerm": (
                                f"{override['term']} ({override['frequency']})"
                                if override["frequency"]
                                else override["term"]
                            ),
                        }
                    )
                    continue

                if not head_text or not gloss_text:
                    continue

                term, frequency = parse_frequency(head_text)
                entries.append(
                    {
                        "id": f"p{page_number}-{side_name}-{row_index}",
                        "page": page_number,
                        "side": side_name,
                        "rowIndex": row_index,
                        "term": term,
                        "frequency": frequency,
                        "gloss": gloss_text,
                        "displayTerm": head_text,
                    }
                )

    entries.sort(
        key=lambda item: (
            item["page"],
            item["rowIndex"],
            0 if item["side"] == "left" else 1,
        )
    )
    return entries


def to_javascript(entries: list[dict]) -> str:
    payload = {
        "source": {
            "title": "Vocabulário em Cartões - Noções do Grego Bíblico",
            "pdf": PDF_PATH.name,
            "totalCards": len(entries),
        },
        "cards": entries,
    }

    return "window.VOCABULARY_DATA = " + json.dumps(
        payload,
        ensure_ascii=False,
        indent=2,
    ) + ";\n"


def main() -> None:
    entries = build_entries()
    OUTPUT_PATH.write_text(to_javascript(entries), encoding="utf-8")
    print(f"Gerado {OUTPUT_PATH.name} com {len(entries)} cartões.")


if __name__ == "__main__":
    main()
