# GREGO

MVP inicial de um game web para estudo progressivo de grego koiné, desde a alfabetização até a exegese do Novo Testamento.

## Livro-base

O projeto passa a usar como referência principal o livro `Noções do Grego Bíblico: gramática fundamental`, de Lourenço Stelio Rega e Johannes Bergmann.

- arquivo local: `NOÇÕES DO GREGO BÍBLICO.pdf`
- vocabulário em cartões: `VocabulariocartoesNocoesdoGrego-Johannes.pdf`
- mapeamento curricular inicial: `CURRICULO.md`

## O que já existe

- App web estático sem dependências de build
- Interface inicial com identidade visual própria
- Progresso salvo em `localStorage`
- Trilha pedagógica reorganizada para seguir as lições do livro
- Módulo 1 jogável, baseado nas páginas 11 a 44 do livro
- Deck completo de vocabulário importado dos cartões em PDF
- Área de estudo com busca, filtros e marcação de domínio dos cartões

## Como abrir

Como o ambiente atual não possui `node`, o projeto foi estruturado para rodar diretamente no navegador.

1. Abra o arquivo `index.html` em um navegador.
2. O progresso ficará salvo localmente no navegador usado.

Se preferir servir localmente:

```bash
python3 -m http.server 4173
```

Depois, abra `http://localhost:4173`.

## Estrutura

- `index.html`: estrutura principal da interface
- `styles.css`: identidade visual e responsividade
- `app.js`: conteúdo, lógica de progressão e estado local
- `vocabulary-data.js`: deck gerado a partir do PDF de cartões
- `CURRICULO.md`: macroestrutura do game baseada no livro
- `scripts/extract_vocab_cards.py`: gerador do deck de vocabulário

## Rota pedagógica prevista

1. Módulo 1 | páginas 11 a 44
2. Lição 6 | Presente do Subjuntivo
3. Lição 7 | Futuro do Indicativo
4. Lição 8 | Substantivos: Introdução
5. Lição 9 | Segunda Declinação
6. Lição 10 | Primeira Declinação

## Próximos passos sugeridos

- Alimentar os próximos módulos diretamente a partir das próximas lições do livro
- Adicionar exercícios de parsing morfológico
- Criar leitura guiada de versos reais do Novo Testamento
- Incluir sistema de revisão espaçada
- Preparar deploy em GitHub Pages

## Regenerar o deck de vocabulário

Se o PDF de cartões for atualizado, gere novamente `vocabulary-data.js` com:

```bash
python3 scripts/extract_vocab_cards.py
```

## GitHub

Como ponto de partida para o repositório:

```bash
git add .
git commit -m "feat: bootstrap MVP do game de grego koine"
```

Depois disso, basta conectar o repositório local a um remoto do GitHub e publicar.
