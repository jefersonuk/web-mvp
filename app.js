const sourceBook = {
  title: "Noções do Grego Bíblico",
  subtitle: "Gramática fundamental",
  authors: ["Lourenço Stelio Rega", "Johannes Bergmann"],
  edition: "Vida Nova, 2004",
};

const vocabularyBundle = window.VOCABULARY_DATA || {
  source: { title: "Vocabulário indisponível", totalCards: 0 },
  cards: [],
};

const vocabularyCards = Array.isArray(vocabularyBundle.cards)
  ? vocabularyBundle.cards
  : [];

function createStudyCard({
  id,
  lesson,
  term,
  gloss,
  frequency = "",
  meta = "",
  pageLabel = "",
  lemma = "",
  lemmaGloss = "",
}) {
  return {
    id,
    lesson,
    term,
    gloss,
    frequency,
    meta,
    pageLabel,
    lemma,
    lemmaGloss,
    displayTerm: frequency ? `${term} (${frequency})` : term,
    page: lesson ? `Lição ${lesson}` : "",
  };
}

const aoristLesson16Cards = [
  createStudyCard({
    id: "aorist16-apethanon",
    lesson: 16,
    term: "ἀπέθανον",
    gloss: "2º aoristo do indicativo ativo de ἀποθνῄσκω: eu morri",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "ἀποθνῄσκω",
    lemmaGloss: "eu morro",
  }),
  createStudyCard({
    id: "aorist16-ebalon",
    lesson: 16,
    term: "ἔβαλον",
    gloss: "2º aoristo do indicativo ativo de βάλλω: eu lancei / joguei",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "βάλλω",
    lemmaGloss: "eu lanço",
  }),
  createStudyCard({
    id: "aorist16-egenomen",
    lesson: 16,
    term: "ἐγενόμην",
    gloss: "2º aoristo do indicativo ativo de γίνομαι: eu me tornei / aconteceu",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "γίνομαι",
    lemmaGloss: "eu me torno / aconteço",
  }),
  createStudyCard({
    id: "aorist16-eidon",
    lesson: 16,
    term: "εἶδον, εἶδα",
    gloss: "2º aoristo do indicativo ativo de ὁράω: eu vi",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "ὁράω",
    lemmaGloss: "eu vejo",
  }),
  createStudyCard({
    id: "aorist16-eipon",
    lesson: 16,
    term: "εἶπον, εἶπα",
    gloss: "2º aoristo do indicativo ativo de λέγω: eu disse",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "λέγω",
    lemmaGloss: "eu digo / falo",
  }),
  createStudyCard({
    id: "aorist16-elabon",
    lesson: 16,
    term: "ἔλαβον",
    gloss: "2º aoristo do indicativo ativo de λαμβάνω: eu tomei / recebi",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "λαμβάνω",
    lemmaGloss: "eu tomo / recebo",
  }),
  createStudyCard({
    id: "aorist16-elipon",
    lesson: 16,
    term: "ἔλιπον",
    gloss: "2º aoristo do indicativo ativo de λείπω: eu deixei / abandonei",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "λείπω",
    lemmaGloss: "eu deixo / abandono",
  }),
  createStudyCard({
    id: "aorist16-eschon",
    lesson: 16,
    term: "ἔσχον",
    gloss: "2º aoristo do indicativo ativo de ἔχω: eu tive",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "ἔχω",
    lemmaGloss: "eu tenho",
  }),
  createStudyCard({
    id: "aorist16-heuron",
    lesson: 16,
    term: "εὗρον",
    gloss: "2º aoristo do indicativo ativo de εὑρίσκω: eu achei / encontrei",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "εὑρίσκω",
    lemmaGloss: "eu acho / encontro",
  }),
  createStudyCard({
    id: "aorist16-ephagon",
    lesson: 16,
    term: "ἔφαγον",
    gloss: "2º aoristo do indicativo ativo de ἐσθίω: eu comi",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "ἐσθίω",
    lemmaGloss: "eu como",
  }),
  createStudyCard({
    id: "aorist16-elthon",
    lesson: 16,
    term: "ἦλθον",
    gloss: "2º aoristo do indicativo ativo de ἔρχομαι: eu vim / fui",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "ἔρχομαι",
    lemmaGloss: "eu vou / venho",
  }),
  createStudyCard({
    id: "aorist16-parelabon",
    lesson: 16,
    term: "παρέλαβον",
    gloss: "2º aoristo do indicativo ativo de παραλαμβάνω: eu recebi / tomei comigo",
    meta: "Lição 16 | Forma do 2º aoristo",
    pageLabel: "Origem: Apêndice E do livro-base, §16",
    lemma: "παραλαμβάνω",
    lemmaGloss: "eu recebo / tomo comigo",
  }),
];

const aoristLesson17Cards = [
  createStudyCard({
    id: "aorist17-akoloutheo",
    lesson: 17,
    term: "ἀκολουθέω",
    frequency: "90",
    gloss: "eu sigo, acompanho",
    meta: "Lição 17 | Frequência no NT: 90",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-basileuo",
    lesson: 17,
    term: "βασιλεύω",
    frequency: "21",
    gloss: "eu reino; sou ou me torno rei",
    meta: "Lição 17 | Frequência no NT: 21",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-diakoneo",
    lesson: 17,
    term: "διακονέω",
    frequency: "37",
    gloss: "eu sirvo; cuido de",
    meta: "Lição 17 | Frequência no NT: 37",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-dokeo",
    lesson: 17,
    term: "δοκέω",
    frequency: "63",
    gloss: "eu penso; considero; parece-me",
    meta: "Lição 17 | Frequência no NT: 63",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-exo",
    lesson: 17,
    term: "ἔξω",
    frequency: "63",
    gloss: "fora; defora; com genitivo: fora de",
    meta: "Lição 17 | Frequência no NT: 63",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-eperotao",
    lesson: 17,
    term: "ἐπερωτάω",
    frequency: "56",
    gloss: "eu pergunto",
    meta: "Lição 17 | Frequência no NT: 56",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-eulogeo",
    lesson: 17,
    term: "εὐλογέω",
    frequency: "44",
    gloss: "eu louvo; agradeço; bendigo; abençoo",
    meta: "Lição 17 | Frequência no NT: 44",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-ede",
    lesson: 17,
    term: "ἤδη",
    frequency: "61",
    gloss: "já; agora; finalmente",
    meta: "Lição 17 | Frequência no NT: 61",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-theoreo",
    lesson: 17,
    term: "θεωρέω",
    frequency: "58",
    gloss: "eu contemplo; vejo",
    meta: "Lição 17 | Frequência no NT: 58",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-katalyo",
    lesson: 17,
    term: "καταλύω",
    frequency: "17",
    gloss: "eu destruo; revogo",
    meta: "Lição 17 | Frequência no NT: 17",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-katoikeo",
    lesson: 17,
    term: "κατοικέω",
    frequency: "44",
    gloss: "eu habito; moro",
    meta: "Lição 17 | Frequência no NT: 44",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-krateo",
    lesson: 17,
    term: "κρατέω",
    frequency: "47",
    gloss: "eu me apodero de; seguro; agarro",
    meta: "Lição 17 | Frequência no NT: 47",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-nomizo",
    lesson: 17,
    term: "νομίζω",
    frequency: "15",
    gloss: "eu considero; penso; suponho",
    meta: "Lição 17 | Frequência no NT: 15",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-oikodomeo",
    lesson: 17,
    term: "οἰκοδομέω",
    frequency: "40",
    gloss: "eu construo; reconstruo; edifico",
    meta: "Lição 17 | Frequência no NT: 40",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-hoti",
    lesson: 17,
    term: "ὅτι",
    frequency: "1297",
    gloss: "que; de modo que; pois; porque; visto que",
    meta: "Lição 17 | Frequência no NT: 1297",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-parakaleo",
    lesson: 17,
    term: "παρακαλέω",
    frequency: "109",
    gloss: "eu chamo; exorto; conforto; encorajo; animo",
    meta: "Lição 17 | Frequência no NT: 109",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-peripateo",
    lesson: 17,
    term: "περιπατέω",
    frequency: "95",
    gloss: "eu ando; vivo; me comporto",
    meta: "Lição 17 | Frequência no NT: 95",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-stauroo",
    lesson: 17,
    term: "σταυρόω",
    frequency: "46",
    gloss: "eu crucifico",
    meta: "Lição 17 | Frequência no NT: 46",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
  createStudyCard({
    id: "aorist17-phileo",
    lesson: 17,
    term: "φιλέω",
    frequency: "25",
    gloss: "eu amo",
    meta: "Lição 17 | Frequência no NT: 25",
    pageLabel: "Origem: Apêndice E do livro-base, §17",
  }),
];

const vocabularyDecks = [
  {
    id: "full",
    label: "Deck completo",
    cards: vocabularyCards,
  },
  {
    id: "aorist-16",
    label: "Lição 16 | 2º aoristo",
    cards: aoristLesson16Cards,
  },
  {
    id: "aorist-17",
    label: "Lição 17 | vocabulário",
    cards: aoristLesson17Cards,
  },
  {
    id: "aorist-16-17",
    label: "Lições 16-17 | bloco do aoristo",
    cards: [...aoristLesson16Cards, ...aoristLesson17Cards],
  },
];

function buildVocabularyOptions(cards, currentIndex, mapAnswer) {
  const answer = mapAnswer(cards[currentIndex]);
  const distractors = [];

  for (let index = 0; index < cards.length; index += 1) {
    if (index === currentIndex) {
      continue;
    }

    const option = mapAnswer(cards[index]);
    if (!distractors.includes(option) && option !== answer) {
      distractors.push(option);
    }

    if (distractors.length === 3) {
      break;
    }
  }

  return [answer, ...distractors];
}

function buildSecondAoristChallenges(cards) {
  return cards.map((card, index) => {
    const answer = `${card.lemma} | ${card.lemmaGloss}`;

    return {
      type: "gloss",
      promptLabel: "Qual é o verbo-base desta forma de 2º aoristo?",
      promptSymbol: card.term,
      promptHint: "Associe a forma aorística ao presente lexical correspondente.",
      options: buildVocabularyOptions(
        cards,
        index,
        (optionCard) => `${optionCard.lemma} | ${optionCard.lemmaGloss}`
      ),
      answer,
      insight: `${card.term} remete ao verbo ${card.lemma}, cujo sentido básico é “${card.lemmaGloss}”.`,
    };
  });
}

function buildAoristVocabularyChallenges(cards) {
  return cards.map((card, index) => ({
    type: "gloss",
    promptLabel: "Qual é a glosa principal deste vocábulo do bloco do aoristo?",
    promptSymbol: card.term,
    promptHint: "Identifique o significado mais direto usado no módulo suplementar.",
    options: buildVocabularyOptions(cards, index, (optionCard) => optionCard.gloss),
    answer: card.gloss,
    insight: `${card.term} entra no vocabulário da lição ${card.lesson} com a glosa “${card.gloss}”.`,
  }));
}

function createBilingualChoice(greek, translation) {
  return `${greek} | ${translation}`;
}

const module2Lessons = [
  {
    id: "module-2-subjunctive-formation",
    title: "Lição 6 | Oficina do Subjuntivo",
    objective:
      "Reconhecer a formação do presente do subjuntivo e distinguir suas terminações ativas e médio-passivas.",
    explanation:
      "A lição 6 mostra que o segredo do subjuntivo não é decorar uma tabela isolada, mas enxergar a vogal temática alongada e como ela reorganiza as terminações do presente.",
    keyPoints: [
      "A característica formal do presente do subjuntivo é a vogal temática alongada: ο/ε passam a ω/η.",
      "No presente do subjuntivo, a voz ativa e a voz médio-passiva conservam a lógica do presente, mas com vogais alongadas.",
      "A terceira pessoa do plural ativa aparece como -ωσι(ν), resultado de contração.",
      "O verbo εἰμί forma o subjuntivo com ὦ, ᾖς, ᾖ, ὦμεν, ἦτε, ὦσι(ν).",
    ],
    xpReward: 55,
    challenges: [
      {
        type: "concept",
        promptLabel: "Qual é a pista formal mais importante para reconhecer o presente do subjuntivo?",
        promptSymbol: "Subjuntivo presente",
        promptHint:
          "O livro insiste que a chave está na vogal temática, não numa tabela decorada às cegas.",
        options: [
          "Alongar a vogal temática do presente do indicativo",
          "Trocar sempre o radical do verbo",
          "Usar as terminações secundárias do imperfeito",
          "Acrescentar um sigma temporal ao verbo",
        ],
        answer: "Alongar a vogal temática do presente do indicativo",
        insight:
          "No subjuntivo presente, o núcleo visual é a vogal temática alongada: formas com ω e η substituem o padrão mais curto do indicativo.",
        coaching:
          "Quando vir λύητε, λύωμεν ou λύωνται, procure primeiro η/ω. Essa pista vem antes da identificação de pessoa e voz.",
      },
      {
        type: "concept",
        promptLabel: "Qual sequência traz as terminações do presente do subjuntivo ativo?",
        promptSymbol: "λύω",
        promptHint:
          "Compare com o presente do indicativo ativo e observe apenas o alongamento.",
        options: [
          "-ω, -ῃς, -ῃ, -ωμεν, -ητε, -ωσι(ν)",
          "-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται",
          "-ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)",
          "-σαι, -σῃς, -σῃ, -σωμεν, -σητε, -σωσι(ν)",
        ],
        answer: "-ω, -ῃς, -ῃ, -ωμεν, -ητε, -ωσι(ν)",
        insight:
          "A série ativa do subjuntivo preserva a lógica do presente, mas troca as vogais temáticas curtas por formas alongadas.",
        coaching:
          "A 1a pessoa singular permanece em -ω; o resto da tabela deixa a pista mais visível: -ῃς, -ῃ, -ωμεν, -ητε, -ωσι(ν).",
      },
      {
        type: "concept",
        promptLabel: "Qual sequência corresponde ao presente do subjuntivo médio/passivo?",
        promptSymbol: "λύομαι",
        promptHint:
          "No presente, média e passiva continuam com a mesma forma; a diferença é de sentido.",
        options: [
          "-ωμαι, -ῃ, -ηται, -ωμεθα, -ησθε, -ωνται",
          "-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται",
          "-μην, -σο, -το, -μεθα, -σθε, -ντο",
          "-θην, -θης, -θη, -θημεν, -θητε, -θησαν",
        ],
        answer: "-ωμαι, -ῃ, -ηται, -ωμεθα, -ησθε, -ωνται",
        insight:
          "A voz médio-passiva do presente do subjuntivo mantém a fusão formal entre média e passiva, agora com vogal temática alongada.",
        coaching:
          "Se aparecer -ωμαι, -ηται ou -ωνται, leia primeiro a morfologia; depois o contexto decide se o valor é médio ou passivo.",
      },
      {
        type: "declension",
        promptLabel: "Qual forma é a 3a pessoa do plural do presente do subjuntivo ativo de λύω?",
        promptSymbol: "λύω",
        promptHint:
          "O livro explica que a forma final nasce de contração vocálica.",
        options: ["λύουσι(ν)", "λύωσι(ν)", "λύησι(ν)", "λύσουσι(ν)"],
        answer: "λύωσι(ν)",
        insight:
          "λύωσι(ν) resulta da contração das vogais que convergem para a forma -ωσι(ν), marca importante da 3a pessoa plural ativa no subjuntivo.",
        coaching:
          "Não confunda com o presente do indicativo λύουσι(ν). No subjuntivo, o alongamento reaparece dentro da contração.",
      },
      {
        type: "declension",
        promptLabel: "Qual forma corresponde à 1a pessoa do singular do presente do subjuntivo de εἰμί?",
        promptSymbol: "εἰμί",
        promptHint:
          "É uma forma curtíssima, mas muito frequente e importante.",
        options: ["ὦ", "εἰμί", "ἔσομαι", "ἐστίν"],
        answer: "ὦ",
        insight:
          "ὦ é a forma do presente do subjuntivo de εἰμί na 1a pessoa singular: “que eu seja”.",
        coaching:
          "Vale memorizar a série inteira em bloco: ὦ, ᾖς, ᾖ, ὦμεν, ἦτε, ὦσι(ν).",
      },
    ],
  },
  {
    id: "module-2-subjunctive-uses",
    title: "Lição 6 | Usos do Subjuntivo",
    objective:
      "Identificar os usos mais importantes do subjuntivo no NT: propósito, exortação, proibição, deliberação e negação enfática.",
    explanation:
      "Depois de formar o subjuntivo, o livro ensina a lê-lo em contexto. A pergunta deixa de ser apenas “que forma é esta?” e passa a ser “que função ela desempenha na frase?”.",
    keyPoints: [
      "ἵνα ou ὅπως com subjuntivo normalmente introduzem propósito ou finalidade.",
      "A 1a pessoa do plural no subjuntivo pode expressar exortação: “façamos”, “andemos”, “alegremo-nos”.",
      "μὴ com aoristo do subjuntivo é uma maneira comum de expressar proibição.",
      "οὐ μὴ com aoristo do subjuntivo ou futuro do indicativo produz negação enfática de evento futuro.",
    ],
    xpReward: 60,
    challenges: [
      {
        type: "concept",
        promptLabel: "Que valor ἵνα + subjuntivo costuma introduzir?",
        promptSymbol: "ἵνα",
        promptHint:
          "Pense nas orações finais mostradas pelo livro.",
        options: [
          "Propósito ou finalidade",
          "Causa retrospectiva",
          "Condição irreal",
          "Discurso indireto livre",
        ],
        answer: "Propósito ou finalidade",
        insight:
          "Com frequência, ἵνα introduz uma oração final: ela mostra para quê algo foi feito ou escrito.",
        coaching:
          "Sempre que enxergar ἵνα + subjuntivo, experimente mentalmente a pergunta “com que objetivo?”.",
      },
      {
        type: "concept",
        promptLabel: "Na 1a pessoa do plural, o subjuntivo frequentemente comunica que ideia?",
        promptSymbol: "χαίρωμεν",
        promptHint:
          "O livro usa esse padrão para exortações como “alegremo-nos”.",
        options: [
          "Exortação ou convite",
          "Descrição histórica neutra",
          "Narração de hábito passado",
          "Resultado consumado",
        ],
        answer: "Exortação ou convite",
        insight:
          "A 1a pessoa plural no subjuntivo convida o grupo a agir: “façamos”, “andemos”, “alegremo-nos”.",
        coaching:
          "Se a forma estiver na 1a plural e o contexto soar convocativo, suspeite de exortação antes de qualquer outra leitura.",
      },
      {
        type: "concept",
        promptLabel: "Que construção o livro destaca para expressar proibição?",
        promptSymbol: "μὴ + ...",
        promptHint:
          "A resposta combina a partícula negativa com um tempo verbal específico.",
        options: [
          "μὴ + aoristo do subjuntivo",
          "οὐ + presente do indicativo",
          "μή + particípio presente",
          "οὐ μή + infinitivo",
        ],
        answer: "μὴ + aoristo do subjuntivo",
        insight:
          "μὴ com aoristo do subjuntivo é uma forma recorrente de proibição no grego do NT.",
        coaching:
          "Quando aparecer μή antes de uma forma aorística subjuntiva, leia como bloqueio de uma ação: “não faças”, “não abandoneis”.",
      },
      {
        type: "concept",
        promptLabel: "O que expressa uma pergunta deliberativa como Τί οὖν ποιήσωμεν;",
        promptSymbol: "Τί οὖν ποιήσωμεν;",
        promptHint:
          "O falante não está narrando; está ponderando um caminho.",
        options: [
          "Dúvida ou deliberação",
          "Afirmação enfática",
          "Relato de ação concluída",
          "Proibição categórica",
        ],
        answer: "Dúvida ou deliberação",
        insight:
          "Em perguntas deliberativas, o subjuntivo põe o falante diante de possibilidades: “que faremos?”",
        coaching:
          "Leia essas perguntas como raciocínio em andamento. O subjuntivo aqui não informa um fato; ele abre uma decisão.",
      },
      {
        type: "concept",
        promptLabel: "Que força tem a construção οὐ μὴ + subjuntivo/a futuro?",
        promptSymbol: "οὐ μὴ παρέλθωσιν",
        promptHint:
          "O livro a chama de forma enfática ou categórica.",
        options: [
          "Negação enfática de um evento futuro",
          "Possibilidade remota",
          "Exortação indireta",
          "Condição improvável",
        ],
        answer: "Negação enfática de um evento futuro",
        insight:
          "οὐ μή reforça ao máximo a negação: “jamais”, “de modo nenhum”, “nunca”.",
        coaching:
          "Quando ler οὐ μή, suba o volume da negação na sua mente. O texto não está apenas negando; está fechando a possibilidade.",
      },
    ],
  },
];

const module3Lessons = [
  {
    id: "module-3-future-formation",
    title: "Lição 7 | Radar do Futuro",
    objective:
      "Reconhecer a formação básica do futuro do indicativo ativo e médio e as mudanças provocadas pelo sigma temporal.",
    explanation:
      "A lição 7 ensina que o futuro do indicativo nasce a partir do presente, com o acréscimo de sigma entre o radical e a vogal temática. O desafio passa a ser observar como esse sigma mexe com o radical.",
    keyPoints: [
      "O futuro do indicativo usa as terminações do presente, acrescentando σ entre o radical e a vogal temática.",
      "No futuro, as vozes média e passiva deixam de compartilhar a mesma forma.",
      "Labiais + σ costumam produzir ψ; guturais + σ, ξ; dentais + σ perdem a dental.",
      "Muitos verbos exigem observar a raiz real, não apenas a forma superficial do presente.",
    ],
    xpReward: 60,
    challenges: [
      {
        type: "concept",
        promptLabel: "Qual é a característica distintiva mais básica do futuro do indicativo?",
        promptSymbol: "Futuro do indicativo",
        promptHint:
          "O livro a coloca entre o radical e a vogal temática.",
        options: [
          "O acréscimo de σ depois do radical",
          "O alongamento da vogal temática",
          "A perda de todas as desinências pessoais",
          "O uso obrigatório do infinitivo",
        ],
        answer: "O acréscimo de σ depois do radical",
        insight:
          "O futuro do indicativo se forma, em regra, com o sigma temporal inserido entre o radical e a vogal temática.",
        coaching:
          "Antes de interpretar uma forma como futuro, procure o sigma temporal. Ele é o primeiro alarme visual dessa lição.",
      },
      {
        type: "concept",
        promptLabel: "Qual sequência expressa o futuro do indicativo ativo?",
        promptSymbol: "λύσω",
        promptHint:
          "As terminações são as do presente do indicativo ativo, agora acompanhadas do sigma temporal.",
        options: [
          "-σω, -σεις, -σει, -σομεν, -σετε, -σουσι(ν)",
          "-ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)",
          "-σομαι, -σῃ, -σεται, -σομεθα, -σεσθε, -σονται",
          "-θην, -θης, -θη, -θημεν, -θητε, -θησαν",
        ],
        answer: "-σω, -σεις, -σει, -σομεν, -σετε, -σουσι(ν)",
        insight:
          "O futuro ativo preserva o esqueleto do presente ativo, mas agora com o sigma temporal à vista.",
        coaching:
          "Se você já domina o presente ativo, o futuro ativo fica muito mais leve: acrescente σ e releia a série completa.",
      },
      {
        type: "concept",
        promptLabel: "Qual sequência corresponde ao futuro do indicativo médio?",
        promptSymbol: "λύσομαι",
        promptHint:
          "Nesta lição o livro separa o futuro médio do futuro passivo.",
        options: [
          "-σομαι, -σῃ, -σεται, -σόμεθα, -σεσθε, -σονται",
          "-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται",
          "-ωμαι, -ῃ, -ηται, -ωμεθα, -ησθε, -ωνται",
          "-θησομαι, -θήσῃ, -θήσεται, -θησόμεθα, -θήσεσθε, -θήσονται",
        ],
        answer: "-σομαι, -σῃ, -σεται, -σόμεθα, -σεσθε, -σονται",
        insight:
          "No futuro médio, a marca de futuro continua presente, mas a série de terminações já não coincide com a voz passiva.",
        coaching:
          "Uma boa pergunta de triagem é: a forma termina como médio (-σομαι, -σεται) ou como futuro passivo em -θησ-?",
      },
      {
        type: "concept",
        promptLabel: "Qual resultado normalmente nasce de labial + σ?",
        promptSymbol: "π, β, φ + σ",
        promptHint:
          "O livro resume isso numa pequena tabela de contrações.",
        options: ["ψ", "ξ", "σ", "τ"],
        answer: "ψ",
        insight:
          "Radicais terminados em labial costumam contrair com sigma em ψ, como em βλέπω → βλέψω.",
        coaching:
          "Veja a dupla inteira: labial vira ψ, gutural vira ξ, dental deixa o sigma aparecer sozinho.",
      },
      {
        type: "declension",
        promptLabel: "Que futuro se forma a partir de βλέπω?",
        promptSymbol: "βλέπω",
        promptHint:
          "O radical termina em labial, então o sigma temporal não fica intacto.",
        options: ["βλέψω", "βλέξω", "βλέσω", "βλέπωσι"],
        answer: "βλέψω",
        insight:
          "Com radical terminado em labial, o sigma temporal produz ψ: βλέπω → βλέψω.",
        coaching:
          "Treine o olhar para o último som do radical. Muitas vezes o futuro se decide ali, não no começo da palavra.",
      },
    ],
  },
  {
    id: "module-3-future-special-patterns",
    title: "Lição 7 | Futuro com Contrações",
    objective:
      "Ler futuros com radicais vocálicos e líquidos, reconhecer o futuro de εἰμί e perceber a construção perifrástica com μέλλω.",
    explanation:
      "Depois da regra básica, o livro mostra os pontos em que o futuro exige mais atenção: verbos contraídos, radicais líquidos e o futuro irregular de εἰμί.",
    keyPoints: [
      "Radicais terminados em α, ε ou ο alongam a vogal antes do sigma temporal.",
      "Radicais líquidos costumam inserir -εσ- e depois contrair, como μένω → μενῶ.",
      "O futuro de εἰμί forma-se com ἔσομαι, ἔσῃ, ἔσται, etc.",
      "μέλλω + infinitivo presente produz uma construção perifrástica de futuro.",
    ],
    xpReward: 65,
    challenges: [
      {
        type: "declension",
        promptLabel: "Qual futuro se forma a partir de ζάω?",
        promptSymbol: "ζάω",
        promptHint:
          "O α do radical não permanece curto diante do sigma temporal.",
        options: ["ζήσω", "ζάσω", "ζώσω", "ζέσω"],
        answer: "ζήσω",
        insight:
          "Em radicais vocálicos desse tipo, α + σ alonga-se, produzindo ζήσω.",
        coaching:
          "Nos verbos contraídos, tente imaginar primeiro a vogal do radical e só depois pergunte como ela reage ao sigma.",
      },
      {
        type: "declension",
        promptLabel: "Qual futuro o livro usa para ilustrar os radicais líquidos?",
        promptSymbol: "μένω",
        promptHint:
          "Há inserção de -εσ- e depois contração.",
        options: ["μενῶ", "μενήσω", "μένσω", "μενώσω"],
        answer: "μενῶ",
        insight:
          "μένω forma o futuro μενῶ: o grupo -εσ- sofre redução e depois as vogais se contraem.",
        coaching:
          "Em líquidos, nem sempre o sigma fica aparente. Por isso vale memorizar as formas canônicas mais frequentes.",
      },
      {
        type: "concept",
        promptLabel: "Qual afirmação está correta sobre o futuro e as vozes média e passiva?",
        promptSymbol: "Vozes no futuro",
        promptHint:
          "Compare isso com o presente, em que as formas ainda coincidiam.",
        options: [
          "No futuro, média e passiva já não têm a mesma forma",
          "No futuro, média e passiva continuam formalmente idênticas",
          "No futuro, só existe voz ativa",
          "No futuro, a voz média usa o mesmo paradigma do aoristo",
        ],
        answer: "No futuro, média e passiva já não têm a mesma forma",
        insight:
          "Essa é uma virada importante em relação ao presente: no futuro, a distinção entre média e passiva fica morfologicamente mais nítida.",
        coaching:
          "Se você carregar para o futuro a regra do presente, vai errar. Esta lição existe justamente para quebrar essa automatização indevida.",
      },
      {
        type: "declension",
        promptLabel: "Qual é a 1a pessoa do singular do futuro de εἰμί?",
        promptSymbol: "εἰμί",
        promptHint:
          "O livro apresenta essa forma como irregular e indispensável.",
        options: ["ἔσομαι", "ὦ", "ἐστί", "εἰμί"],
        answer: "ἔσομαι",
        insight:
          "ἔσομαι é o futuro de εἰμί na 1a pessoa do singular: “eu serei”.",
        coaching:
          "Guarde εἰμί em três blocos separados: presente irregular, subjuntivo próprio e futuro com ἐσ-/ἔσ-.",
      },
      {
        type: "concept",
        promptLabel: "Que ideia transmite a construção μέλλω + infinitivo presente?",
        promptSymbol: "μέλλω + infinitivo",
        promptHint:
          "O livro a compara ao nosso “vou + infinitivo”.",
        options: [
          "Formação perifrástica de futuro",
          "Perfeito resultativo",
          "Imperativo enfático",
          "Particípio causal",
        ],
        answer: "Formação perifrástica de futuro",
        insight:
          "μέλλω + infinitivo presente comunica futuro de modo perifrástico, algo como “vou sofrer”, “estou para fazer”.",
        coaching:
          "Ao ler μέλλω, pergunte logo se o infinitivo ao lado está funcionando como complemento verbal de futuro iminente.",
      },
    ],
  },
];

const module4Lessons = [
  {
    id: "module-4-nouns-intro",
    title: "Lição 8 | Mapa dos Casos",
    objective:
      "Compreender por que os substantivos se flexionam e como os casos expressam função sintática no grego.",
    explanation:
      "Na lição 8, o livro transfere o foco do sistema verbal para o nominal. Aqui a grande descoberta é que a terminação do substantivo não é enfeite: ela mostra a função da palavra na frase.",
    keyPoints: [
      "Os substantivos se flexionam para indicar sua função na oração.",
      "O livro trabalha oito casos em termos de função, embora muitas formas coincidam.",
      "Nominativo, genitivo, ablativo, locativo, instrumental, dativo, acusativo e vocativo ajudam a ler relação, movimento e interesse na frase.",
      "A leitura morfológica precisa sempre desembocar em leitura sintática.",
    ],
    xpReward: 60,
    challenges: [
      {
        type: "concept",
        promptLabel: "Que caso normalmente indica o sujeito da oração?",
        promptSymbol: "Sujeito",
        promptHint:
          "É o caso que responde com mais frequência à pergunta “quem é que...?”.",
        options: ["Nominativo", "Genitivo", "Acusativo", "Vocativo"],
        answer: "Nominativo",
        insight:
          "No grego, o nominativo é o caso do sujeito e também pode aparecer como atributo do sujeito.",
        coaching:
          "Se a palavra estiver carregando a ação principal como sujeito, comece a investigação pelo nominativo.",
      },
      {
        type: "concept",
        promptLabel: "Que caso normalmente comunica posse, definição ou especificação?",
        promptSymbol: "“de...”",
        promptHint:
          "Pense no valor de expressões como “o reino de Deus”.",
        options: ["Genitivo", "Locativo", "Instrumental", "Acusativo"],
        answer: "Genitivo",
        insight:
          "O genitivo costuma responder a perguntas como “de quem?” ou “de que tipo?”, marcando posse ou especificação.",
        coaching:
          "Quando a tradução pedir um “de” qualificativo ou possessivo, o genitivo deve entrar imediatamente no radar.",
      },
      {
        type: "concept",
        promptLabel: "Que caso o livro associa à ideia de origem, procedência ou separação?",
        promptSymbol: "“de onde?”",
        promptHint:
          "Não é o mesmo “de” do genitivo possessivo.",
        options: ["Ablativo", "Nominativo", "Vocativo", "Dativo"],
        answer: "Ablativo",
        insight:
          "O ablativo descreve saída, procedência ou separação: ele responde melhor à pergunta “de onde?”.",
        coaching:
          "Uma boa triagem é perguntar: esse “de” aponta posse ou aponta origem? Se aponta origem, pense em ablativo.",
      },
      {
        type: "concept",
        promptLabel: "Que caso marca posição ou lugar onde algo acontece?",
        promptSymbol: "“onde?”",
        promptHint:
          "O livro o ilustra com expressões de localização.",
        options: ["Locativo", "Instrumental", "Acusativo", "Vocativo"],
        answer: "Locativo",
        insight:
          "O locativo aponta o lugar onde uma ação se dá: “no mundo”, “na casa”, “na cidade”.",
        coaching:
          "Se a palavra estiver pousada num lugar, não andando para ele nem saindo dele, o locativo é o primeiro candidato.",
      },
      {
        type: "concept",
        promptLabel: "Que caso indica meio, instrumento ou associação?",
        promptSymbol: "“com quê?” / “com quem?”",
        promptHint:
          "O livro usa exemplos com olhos, sangue e companhia.",
        options: ["Instrumental", "Genitivo", "Nominativo", "Vocativo"],
        answer: "Instrumental",
        insight:
          "O instrumental mostra por meio de quê algo acontece, ou com quem alguém age ou caminha.",
        coaching:
          "Quando a frase soar como “com”, “por meio de”, “mediante”, suspeite de instrumental antes de simplificar tudo como dativo.",
      },
    ],
  },
  {
    id: "module-4-article-and-groups",
    title: "Lição 8 | Artigo e Agrupamentos",
    objective:
      "Ler o artigo grego como ferramenta de identificação de gênero, número e caso, e perceber por que oito casos aparecem em cinco formas.",
    explanation:
      "A segunda parte da lição 8 organiza a leitura do sistema nominal. O aluno aprende que muitas formas se repetem, mas suas funções precisam ser lidas pelo contexto.",
    keyPoints: [
      "O livro prefere falar em oito casos por função, embora o grego koiné apresente apenas cinco formas distintas.",
      "Genitivo e ablativo compartilham forma; locativo, instrumental e dativo também.",
      "O artigo grego é ὁ, ἡ, τό e concorda com o substantivo em gênero, número e caso.",
      "O artigo torna o substantivo definido; o grego não possui artigo indefinido próprio.",
    ],
    xpReward: 65,
    challenges: [
      {
        type: "concept",
        promptLabel: "Por que o livro fala em oito casos, mesmo reconhecendo apenas cinco formas?",
        promptSymbol: "Casos e formas",
        promptHint:
          "A resposta distingue função sintática de forma morfológica.",
        options: [
          "Porque a função dos casos é mais ampla que a quantidade de formas disponíveis",
          "Porque cada substantivo tem oito terminações visíveis no singular",
          "Porque o artigo grego cria casos adicionais",
          "Porque o dual conta como três casos separados",
        ],
        answer: "Porque a função dos casos é mais ampla que a quantidade de formas disponíveis",
        insight:
          "O livro prefere manter as funções distintas, ainda que várias delas apareçam fundidas na mesma forma morfológica.",
        coaching:
          "Esse ponto é crucial para a exegese: a forma pode coincidir, mas a função só se decide pela relação com o contexto.",
      },
      {
        type: "concept",
        promptLabel: "Que grupo de casos compartilha a mesma forma no grego koiné?",
        promptSymbol: "Agrupamento de formas",
        promptHint:
          "Há um grupo de dois casos e outro de três.",
        options: [
          "Genitivo/ablativo e locativo/instrumental/dativo",
          "Nominativo/vocativo e acusativo/dativo",
          "Genitivo/acusativo e ablativo/vocativo",
          "Locativo/nominativo e instrumental/genitivo",
        ],
        answer: "Genitivo/ablativo e locativo/instrumental/dativo",
        insight:
          "Esses agrupamentos explicam por que o aluno precisa aprender não só formas, mas também funções.",
        coaching:
          "Quando vir uma forma ambígua, não conclua depressa. Pergunte que papel ela exerce na frase: posse, origem, lugar, meio ou interesse?",
      },
      {
        type: "declension",
        promptLabel: "Qual sequência traz os artigos gregos no nominativo singular?",
        promptSymbol: "Artigo",
        promptHint:
          "É o trio básico masculino, feminino e neutro.",
        options: ["ὁ, ἡ, τό", "τοῦ, τῆς, τοῦ", "οἱ, αἱ, τά", "τόν, τήν, τό"],
        answer: "ὁ, ἡ, τό",
        insight:
          "ὁ, ἡ, τό são as formas fundamentais do artigo grego no nominativo singular.",
        coaching:
          "Vale memorizar o artigo como paradigma, não como lista solta. Ele será sua bússola de gênero e caso ao longo de toda a leitura.",
      },
      {
        type: "concept",
        promptLabel: "O que o artigo faz com o substantivo no grego?",
        promptSymbol: "Função do artigo",
        promptHint:
          "A resposta está ligada à definição e identificação.",
        options: [
          "Torna o substantivo definido",
          "Cria automaticamente o plural",
          "Transforma o verbo em substantivo",
          "Substitui a preposição",
        ],
        answer: "Torna o substantivo definido",
        insight:
          "O artigo identifica e individualiza o substantivo; por isso o livro o trata como peça chave da leitura nominal.",
        coaching:
          "Se houver artigo, a leitura indefinida normalmente sai de cena. O substantivo já vem marcado como definido.",
      },
      {
        type: "concept",
        promptLabel: "Qual afirmação está correta sobre o artigo indefinido no grego?",
        promptSymbol: "Artigo indefinido",
        promptHint:
          "Compare com o português “um/uma”.",
        options: [
          "O grego não possui artigo indefinido próprio",
          "O artigo indefinido é τις em todas as situações",
          "O artigo indefinido é sempre ἕν",
          "Todo substantivo sem artigo fica automaticamente indefinido",
        ],
        answer: "O grego não possui artigo indefinido próprio",
        insight:
          "O grego não tem artigo indefinido específico; o contexto é que decide se a melhor tradução pede artigo indefinido ou não.",
        coaching:
          "Ausência de artigo não significa, por si só, “um/uma”. Primeiro leia a função da palavra na frase.",
      },
    ],
  },
];

const module5Lessons = [
  {
    id: "module-5-second-declension-core",
    title: "Lição 9 | Segunda Declinação em Ação",
    objective:
      "Dominar o padrão da segunda declinação em substantivos masculinos e femininos, com atenção ao artigo, às terminações e ao vocativo.",
    explanation:
      "A lição 9 começa pelos temas em -ο. O livro mostra que a melhor forma de fixação é comparar paradigma, artigo e função sintática ao mesmo tempo.",
    keyPoints: [
      "Na segunda declinação, substantivos masculinos em -ος e femininos como ὁδός compartilham as mesmas terminações nominais, mudando o artigo.",
      "O vocativo singular masculino em -ος normalmente passa a -ε.",
      "As formas em -οις sinalizam o bloco locativo/instrumental/dativo plural.",
      "O artigo ajuda a distinguir nominativo e vocativo quando a forma nominal poderia confundir.",
    ],
    xpReward: 70,
    challenges: [
      {
        type: "declension",
        promptLabel: "Que forma diz “às palavras”?",
        promptSymbol: "λόγος",
        promptHint:
          "Procure a desinência do bloco locativo/instrumental/dativo plural.",
        options: [
          createBilingualChoice("τοῖς λόγοις", "às palavras"),
          createBilingualChoice("τῶν λόγων", "das palavras"),
          createBilingualChoice("τοὺς λόγους", "as palavras"),
          createBilingualChoice("οἱ λόγοι", "as palavras"),
        ],
        answer: createBilingualChoice("τοῖς λόγοις", "às palavras"),
        insight:
          "λόγοις termina em -οις, desinência típica do bloco locativo/instrumental/dativo plural da 2a declinação; aqui o contexto “às” pede leitura dativa.",
        coaching:
          "Ao ver -οις, pense primeiro em L.I.D. plural. O contexto é que vai dizer se a melhor tradução é “em”, “com” ou “a/para”.",
      },
      {
        type: "declension",
        promptLabel: "Qual é o vocativo singular de λόγος?",
        promptSymbol: "λόγος",
        promptHint:
          "O livro trata o vocativo como caso próprio de invocação.",
        options: [
          createBilingualChoice("λόγε", "palavra!"),
          createBilingualChoice("λόγος", "palavra!"),
          createBilingualChoice("λόγον", "palavra!"),
          createBilingualChoice("λόγου", "palavra!"),
        ],
        answer: createBilingualChoice("λόγε", "palavra!"),
        insight:
          "Na 2a declinação masculina, o vocativo singular em -ος normalmente muda para -ε: λόγος → λόγε.",
        coaching:
          "Essa é uma mudança pequena, mas muito importante. Vocativo não é nominativo com entonação diferente; ele tem forma própria.",
      },
      {
        type: "concept",
        promptLabel: "Qual afirmação resume corretamente a 2a declinação feminina do livro?",
        promptSymbol: "ἡ ὁδός",
        promptHint:
          "Pense no que muda e no que não muda em relação aos masculinos.",
        options: [
          "As terminações nominais acompanham a 2a declinação; o artigo é que muda para o feminino",
          "A 2a declinação feminina usa as terminações da 1a declinação",
          "Substantivos femininos não flexionam artigo",
          "O feminino da 2a declinação não possui plural",
        ],
        answer:
          "As terminações nominais acompanham a 2a declinação; o artigo é que muda para o feminino",
        insight:
          "ὁδός mostra exatamente isso: a estrutura da 2a declinação permanece, mas o artigo feminino orienta a concordância.",
        coaching:
          "Se a forma nominal parecer masculina, não conclua antes de olhar o artigo. Na leitura real, ele frequentemente resolve o gênero.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “dos caminhos”?",
        promptSymbol: "ὁδός",
        promptHint:
          "Você precisa do genitivo/ablativo plural com artigo feminino.",
        options: [
          createBilingualChoice("τῶν ὁδῶν", "dos caminhos"),
          createBilingualChoice("ταῖς ὁδοῖς", "aos caminhos"),
          createBilingualChoice("τὰς ὁδούς", "os caminhos"),
          createBilingualChoice("αἱ ὁδοί", "os caminhos"),
        ],
        answer: createBilingualChoice("τῶν ὁδῶν", "dos caminhos"),
        insight:
          "τῶν ὁδῶν reúne artigo plural e terminação -ων, o bloco próprio de genitivo/ablativo plural da 2a declinação.",
        coaching:
          "A combinação artigo + final -ων é uma âncora excelente. Sempre suspeite de G.A. plural quando ela aparecer.",
      },
      {
        type: "concept",
        promptLabel: "Que diagnóstico morfológico melhor descreve τῇ ὁδῷ?",
        promptSymbol: "τῇ ὁδῷ",
        promptHint:
          "O livro lembra que três funções compartilham a mesma forma.",
        options: [
          "Locativo/instrumental/dativo singular feminino",
          "Genitivo/ablativo singular feminino",
          "Nominativo singular feminino",
          "Acusativo plural feminino",
        ],
        answer: "Locativo/instrumental/dativo singular feminino",
        insight:
          "A forma -ῳ com artigo feminino dativo/locativo/instrumental aponta para o bloco L.I.D. singular. Só o contexto define qual função está em jogo.",
        coaching:
          "Quando uma forma pertencer ao bloco L.I.D., não tente decidir o valor só pela terminação. Leia a relação sintática na frase.",
      },
    ],
  },
  {
    id: "module-5-second-declension-neuters",
    title: "Lição 9 | Neutros da Segunda Declinação",
    objective:
      "Ler corretamente os neutros em -ον e memorizar a regra crucial de nominativo, acusativo e vocativo.",
    explanation:
      "O livro destaca os neutros como um bloco que precisa ser treinado separadamente. A grande regra aqui é morfológica e sintática ao mesmo tempo.",
    keyPoints: [
      "Nos neutros, nominativo, acusativo e vocativo têm a mesma forma, tanto no singular quanto no plural.",
      "Os demais casos seguem o desenho geral da segunda declinação.",
      "O artigo neutro ajuda a detectar o gênero, mesmo quando a tradução portuguesa segue outro gênero.",
      "O plural neutro em -α é uma marca visual forte e precisa virar reflexo.",
    ],
    xpReward: 75,
    challenges: [
      {
        type: "concept",
        promptLabel: "Qual regra é indispensável para ler os neutros da 2a declinação?",
        promptSymbol: "Neutros em -ον",
        promptHint:
          "É a regra mais repetida quando se ensina esse grupo.",
        options: [
          "Nominativo, acusativo e vocativo têm a mesma forma",
          "Todo neutro usa artigo feminino no plural",
          "O genitivo singular termina sempre em -ας",
          "O vocativo neutro sempre termina em -ε",
        ],
        answer: "Nominativo, acusativo e vocativo têm a mesma forma",
        insight:
          "Essa coincidência formal é o coração da leitura dos neutros: ela vale no singular e no plural.",
        coaching:
          "Se você esquecer essa regra, vai forçar distinções que o texto não faz. Neutro precisa ser lido como sistema, não como exceção isolada.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “os trabalhos”?",
        promptSymbol: "ἔργον",
        promptHint:
          "Você precisa do nominativo/acusativo plural neutro.",
        options: [
          createBilingualChoice("τὰ ἔργα", "os trabalhos"),
          createBilingualChoice("τοὺς ἔργους", "os trabalhos"),
          createBilingualChoice("τῶν ἔργων", "dos trabalhos"),
          createBilingualChoice("τοῖς ἔργοις", "aos trabalhos"),
        ],
        answer: createBilingualChoice("τὰ ἔργα", "os trabalhos"),
        insight:
          "O plural neutro em -α, acompanhado por τά, é uma assinatura da 2a declinação neutra.",
        coaching:
          "Treine o olho para o par τά ... -α. Ele aparece com frequência e costuma ser uma leitura muito rápida no texto.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “do livro”?",
        promptSymbol: "βιβλίον",
        promptHint:
          "Você precisa do genitivo/ablativo singular neutro.",
        options: [
          createBilingualChoice("τοῦ βιβλίου", "do livro"),
          createBilingualChoice("τῷ βιβλίῳ", "ao livro"),
          createBilingualChoice("τὰ βιβλία", "os livros"),
          createBilingualChoice("τό βιβλίον", "o livro"),
        ],
        answer: createBilingualChoice("τοῦ βιβλίου", "do livro"),
        insight:
          "No singular neutro da 2a declinação, o genitivo/ablativo usa -ου, assim como nos masculinos.",
        coaching:
          "Não deixe o gênero neutro te distrair: fora do bloco nom./ac./voc., muitas terminações continuam próximas das masculinas.",
      },
      {
        type: "concept",
        promptLabel: "Que diagnóstico morfológico descreve ἔργα?",
        promptSymbol: "ἔργα",
        promptHint:
          "Aqui a forma sozinha não fecha a função sintática.",
        options: [
          "Nominativo, acusativo ou vocativo plural neutro",
          "Genitivo/ablativo plural neutro",
          "Locativo/instrumental/dativo singular neutro",
          "Acusativo singular masculino",
        ],
        answer: "Nominativo, acusativo ou vocativo plural neutro",
        insight:
          "Por ser neutro plural, ἔργα mantém a coincidência entre nominativo, acusativo e vocativo.",
        coaching:
          "Esse é um ótimo exemplo de por que morfologia e sintaxe precisam caminhar juntas. A forma delimita um campo; a frase escolhe a função.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “ao templo”?",
        promptSymbol: "ἱερόν",
        promptHint:
          "Procure o bloco locativo/instrumental/dativo singular neutro.",
        options: [
          createBilingualChoice("τῷ ἱερῷ", "ao templo"),
          createBilingualChoice("τοῦ ἱεροῦ", "do templo"),
          createBilingualChoice("τὰ ἱερά", "os templos"),
          createBilingualChoice("τό ἱερόν", "o templo"),
        ],
        answer: createBilingualChoice("τῷ ἱερῷ", "ao templo"),
        insight:
          "A terminação -ῳ marca o bloco L.I.D. singular; com a tradução “ao”, a leitura dativa é a mais natural.",
        coaching:
          "Em formas com -ῳ, leia sempre em duas etapas: primeiro reconheça L.I.D.; depois deixe o contexto resolver a preposição portuguesa.",
      },
    ],
  },
  {
    id: "module-5-second-declension-puzzle",
    title: "Lição 9 | Forja das Declinações",
    objective:
      "Treinar a segunda declinação como se o aluno estivesse montando um paradigma vivo: forma, caso, número, gênero e função.",
    explanation:
      "Este puzzle transforma o paradigma em oficina. Cada peça correta reforça a lógica visual da declinação e força a leitura didática da resposta.",
    keyPoints: [
      "Paradigmas precisam ser lidos horizontalmente e verticalmente: caso, número e gênero se cruzam.",
      "No masculino da 2a declinação, o vocativo singular merece atenção especial.",
      "No neutro, o plural em -α deve se tornar reflexo imediato.",
      "O artigo elimina ambiguidades importantes, especialmente entre nominativo e vocativo.",
    ],
    xpReward: 85,
    challenges: [
      {
        type: "declension",
        promptLabel: "Que peça fecha o genitivo/ablativo plural de λόγος?",
        promptSymbol: "λόγος",
        promptHint:
          "Você quer a forma sem artigo que completa o paradigma.",
        options: ["λόγων", "λόγοις", "λόγους", "λόγε"],
        answer: "λόγων",
        insight:
          "λόγων traz a terminação -ων, bloco clássico do genitivo/ablativo plural na 2a declinação.",
        coaching:
          "A terminação -ων é uma âncora muito forte. Treine vê-la como um selo de plural genitivo/ablativo.",
      },
      {
        type: "declension",
        promptLabel: "Que peça fecha o nominativo/acusativo plural de ἔργον?",
        promptSymbol: "ἔργον",
        promptHint:
          "Lembre da regra de ouro dos neutros.",
        options: ["ἔργα", "ἔργοι", "ἔργους", "ἔργων"],
        answer: "ἔργα",
        insight:
          "ἔργα é a forma do plural neutro para nominativo, acusativo e vocativo.",
        coaching:
          "Se o substantivo for neutro e o alvo for nom./ac./voc. plural, pense primeiro em -α.",
      },
      {
        type: "declension",
        promptLabel: "Que peça fecha o acusativo plural de ὁδός?",
        promptSymbol: "ὁδός",
        promptHint:
          "A forma precisa permanecer fiel à 2a declinação, mas com artigo feminino se houver contexto.",
        options: ["ὁδούς", "ὁδοῖς", "ὁδῶν", "ὁδοί"],
        answer: "ὁδούς",
        insight:
          "No acusativo plural da 2a declinação, a terminação -ους aparece tanto em masculinos quanto em femininos desse padrão.",
        coaching:
          "Não dependa só do gênero para prever a terminação. Na 2a declinação, o artigo muda mais do que a forma nominal em si.",
      },
      {
        type: "concept",
        promptLabel: "Que diagnóstico morfológico melhor descreve τῷ λόγῳ?",
        promptSymbol: "τῷ λόγῳ",
        promptHint:
          "A forma resolve número e gênero, mas ainda deixa um trio funcional aberto.",
        options: [
          "Locativo/instrumental/dativo singular masculino",
          "Genitivo/ablativo singular masculino",
          "Nominativo singular masculino",
          "Acusativo plural masculino",
        ],
        answer: "Locativo/instrumental/dativo singular masculino",
        insight:
          "A terminação -ῳ com artigo masculino singular identifica o bloco L.I.D. singular da 2a declinação.",
        coaching:
          "Leia o artigo junto com o final da palavra. Separar artigo e substantivo atrasa muito a leitura real do texto.",
      },
      {
        type: "concept",
        promptLabel: "Por que οἱ λόγοι deve ser lido como nominativo plural, e não como vocativo plural?",
        promptSymbol: "οἱ λόγοι",
        promptHint:
          "A resposta está no papel do artigo.",
        options: [
          "Porque o vocativo não usa artigo",
          "Porque o artigo sempre cria dativo",
          "Porque λόγοι só existe no singular",
          "Porque o plural elimina o vocativo",
        ],
        answer: "Porque o vocativo não usa artigo",
        insight:
          "A forma λόγοι pode coincidir, mas o artigo οἱ fecha a leitura como nominativo plural.",
        coaching:
          "Este é um excelente exemplo de exegese morfológica: às vezes a chave não está na palavra principal, mas no artigo que a acompanha.",
      },
    ],
  },
];

const module6Lessons = [
  {
    id: "module-6-first-declension-feminines",
    title: "Lição 10 | Primeira Declinação Feminina",
    objective:
      "Distinguir os grupos em -α e -η na primeira declinação feminina e ler suas mudanças no singular com segurança.",
    explanation:
      "A lição 10 organiza a primeira declinação em grupos. O ponto decisivo é perceber quando o alfa permanece e quando ele cede lugar ao eta nas formas do singular.",
    keyPoints: [
      "Quando α é precedido por ε, ι ou ρ, ele tende a permanecer no singular.",
      "Quando α não é precedido por ε, ι ou ρ, genitivo/ablativo e locativo/instrumental/dativo singular costumam mostrar η.",
      "Substantivos em -η mantêm η em todo o singular.",
      "O plural da 1a declinação é muito estável e ajuda a consolidar o paradigma.",
    ],
    xpReward: 80,
    challenges: [
      {
        type: "concept",
        promptLabel: "Quando o α tende a permanecer nas formas do singular da 1a declinação?",
        promptSymbol: "α na 1a declinação",
        promptHint:
          "O livro destaca três letras que mudam o comportamento da vogal.",
        options: [
          "Quando é precedido por ε, ι ou ρ",
          "Quando é precedido por σ ou τ",
          "Quando a palavra é neutra",
          "Quando o artigo está ausente",
        ],
        answer: "Quando é precedido por ε, ι ou ρ",
        insight:
          "Esse é o critério que explica formas como σοφία e evita confundir seus casos do singular com os de γλῶσσα.",
        coaching:
          "Sempre olhe para a letra imediatamente antes do α final. Muitas decisões da 1a declinação começam exatamente aí.",
      },
      {
        type: "concept",
        promptLabel: "O que normalmente acontece com o α de γλῶσσα no G.A. e no L.I.D. singular?",
        promptSymbol: "γλῶσσα",
        promptHint:
          "Aqui o α não é precedido por ε, ι ou ρ.",
        options: [
          "Ele costuma passar a η",
          "Ele sempre desaparece",
          "Ele vira ω em todas as formas",
          "Ele só muda no plural",
        ],
        answer: "Ele costuma passar a η",
        insight:
          "Por isso temos formas como γλώσσης e γλώσσῃ, em vez de manter α nessas posições do singular.",
        coaching:
          "Compare pares como σοφία e γλῶσσα. O contraste entre elas ajuda mais do que decorar cada tabela isoladamente.",
      },
      {
        type: "concept",
        promptLabel: "Que afirmação descreve corretamente substantivos como ἀγάπη?",
        promptSymbol: "ἀγάπη",
        promptHint:
          "O nominativo já entrega o grupo a que a palavra pertence.",
        options: [
          "O η permanece em todas as formas do singular",
          "O η sempre vira α no genitivo",
          "São masculinos por terminarem em η",
          "Perdem o artigo no plural",
        ],
        answer: "O η permanece em todas as formas do singular",
        insight:
          "Substantivos em -η mantêm esse traço ao longo do singular, o que dá bastante estabilidade ao paradigma.",
        coaching:
          "Quando o nominativo já termina em -η, use isso como guia: a família inteira do singular tende a preservar essa base.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “da sabedoria”?",
        promptSymbol: "σοφία",
        promptHint:
          "Aqui o α é precedido por ι, então a regra de permanência entra em ação.",
        options: [
          createBilingualChoice("τῆς σοφίας", "da sabedoria"),
          createBilingualChoice("τῇ σοφίᾳ", "à sabedoria"),
          createBilingualChoice("τὰς σοφίας", "as sabedorias"),
          createBilingualChoice("τῆς σοφήης", "da sabedoria"),
        ],
        answer: createBilingualChoice("τῆς σοφίας", "da sabedoria"),
        insight:
          "Em σοφία, o α permanece no genitivo singular por estar precedido por ι: por isso a forma correta é σοφίας.",
        coaching:
          "Quando a regra do ε/ι/ρ estiver valendo, não “corrija” o paradigma para η por hábito. Esse é um dos erros mais comuns no início.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “na língua”?",
        promptSymbol: "γλῶσσα",
        promptHint:
          "Você precisa do bloco locativo/instrumental/dativo singular.",
        options: [
          createBilingualChoice("τῇ γλώσσῃ", "na língua"),
          createBilingualChoice("τῆς γλώσσης", "da língua"),
          createBilingualChoice("τὴν γλῶσσαν", "a língua"),
          createBilingualChoice("ταῖς γλώσσαις", "nas línguas"),
        ],
        answer: createBilingualChoice("τῇ γλώσσῃ", "na língua"),
        insight:
          "γλώσσῃ mostra justamente a mudança para η no singular, combinada com a marca do bloco L.I.D.",
        coaching:
          "Em 1a declinação feminina, as formas do singular costumam se esclarecer melhor quando você lê artigo e desinência juntos.",
      },
    ],
  },
  {
    id: "module-6-first-declension-masculines",
    title: "Lição 10 | Masculinos em -ας e -ης",
    objective:
      "Ler os masculinos da primeira declinação com atenção ao artigo masculino, ao genitivo em -ου e ao vocativo próprio.",
    explanation:
      "A primeira declinação não é só feminina. O livro separa os masculinos em -ας e -ης para mostrar que o aluno precisa ler forma e gênero em conjunto, sem automatismos.",
    keyPoints: [
      "Substantivos em -ας e -ης da 1a declinação são masculinos e usam artigo masculino.",
      "O genitivo singular desses masculinos segue o padrão em -ου.",
      "O plural acompanha o resto da 1a declinação.",
      "O vocativo singular merece atenção especial, como em προφῆτα e νεανία.",
    ],
    xpReward: 85,
    challenges: [
      {
        type: "concept",
        promptLabel: "Qual afirmação descreve corretamente os masculinos da 1a declinação?",
        promptSymbol: "προφήτης / νεανίας",
        promptHint:
          "O final do nominativo não muda o gênero desses substantivos.",
        options: [
          "Eles são masculinos e usam artigo masculino, embora pertençam à 1a declinação",
          "Eles são neutros por terminarem em -ης ou -ας",
          "Eles flexionam exatamente como a 2a declinação em todos os casos",
          "Eles não possuem vocativo singular",
        ],
        answer:
          "Eles são masculinos e usam artigo masculino, embora pertençam à 1a declinação",
        insight:
          "Esse bloco quebra o reflexo de associar a 1a declinação apenas ao feminino. Aqui, gênero e declinação precisam ser distinguidos com clareza.",
        coaching:
          "Nunca confunda declinação com gênero. A declinação organiza formas; o gênero é outra informação, frequentemente revelada pelo artigo.",
      },
      {
        type: "concept",
        promptLabel: "Que terminação o genitivo singular dos masculinos da 1a declinação normalmente apresenta?",
        promptSymbol: "μαθητής / προφήτης",
        promptHint:
          "O livro compara esse ponto à 2a declinação masculina.",
        options: ["-ου", "-ης", "-ων", "-οις"],
        answer: "-ου",
        insight:
          "Formas como μαθητοῦ e προφήτου mostram que o genitivo singular desses masculinos segue o desenho em -ου.",
        coaching:
          "Esse é um ponto excelente para comparação entre paradigmas. O aluno aprende melhor quando vê semelhanças estruturais entre declinações.",
      },
      {
        type: "declension",
        promptLabel: "Qual é o vocativo singular de προφήτης?",
        promptSymbol: "προφήτης",
        promptHint:
          "O vocativo precisa ser lido como caso próprio, não como cópia do nominativo.",
        options: [
          createBilingualChoice("προφῆτα", "profeta!"),
          createBilingualChoice("προφήτης", "profeta!"),
          createBilingualChoice("προφήτου", "profeta!"),
          createBilingualChoice("προφήτην", "profeta!"),
        ],
        answer: createBilingualChoice("προφῆτα", "profeta!"),
        insight:
          "No singular, προφήτης faz vocativo προφῆτα, marcando a invocação com forma própria.",
        coaching:
          "Vocativo é excelente treino de atenção morfológica. Ele costuma punir leituras apressadas que ignoram pequenas mudanças finais.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “do discípulo”?",
        promptSymbol: "μαθητής",
        promptHint:
          "Você precisa do genitivo/ablativo singular com artigo masculino.",
        options: [
          createBilingualChoice("τοῦ μαθητοῦ", "do discípulo"),
          createBilingualChoice("τῷ μαθητῇ", "ao discípulo"),
          createBilingualChoice("τὸν μαθητήν", "o discípulo"),
          createBilingualChoice("οἱ μαθηταί", "os discípulos"),
        ],
        answer: createBilingualChoice("τοῦ μαθητοῦ", "do discípulo"),
        insight:
          "μαθητής segue o padrão masculino da 1a declinação no nominativo, mas o genitivo singular aparece em -ου: μαθητοῦ.",
        coaching:
          "Sempre compare nominativo e genitivo. Essa dupla revela muito da estrutura interna do substantivo.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “ao jovem”?",
        promptSymbol: "νεανίας",
        promptHint:
          "Procure o bloco locativo/instrumental/dativo singular com artigo masculino.",
        options: [
          createBilingualChoice("τῷ νεανίᾳ", "ao jovem"),
          createBilingualChoice("τοῦ νεανίου", "do jovem"),
          createBilingualChoice("τὸν νεανίαν", "o jovem"),
          createBilingualChoice("οἱ νεανίαι", "os jovens"),
        ],
        answer: createBilingualChoice("τῷ νεανίᾳ", "ao jovem"),
        insight:
          "τῷ νεανίᾳ marca o bloco L.I.D. singular do masculino em -ας, e o contexto “ao” pede leitura dativa.",
        coaching:
          "Esse é um bom lembrete de que o artigo masculino não impede a presença de finais próprios da 1a declinação.",
      },
    ],
  },
  {
    id: "module-6-first-declension-puzzle",
    title: "Lição 10 | Ateliê das Formas",
    objective:
      "Fixar a primeira declinação por meio de puzzles que cruzam grupo vocálico, caso, número, gênero e função sintática.",
    explanation:
      "O ateliê fecha o bloco nominal inicial do curso. Aqui o aluno já não responde só por memória curta: ele precisa justificar mentalmente por que escolheu cada peça.",
    keyPoints: [
      "A 1a declinação exige atenção ao grupo do nominativo: -α com permanência, -α com mudança para η, -η estável, e masculinos em -ας/-ης.",
      "O artigo continua sendo um aliado decisivo para gênero e caso.",
      "O plural da 1a declinação é muito regular e pode servir de ponto de apoio.",
      "Correção didática significa sempre perguntar: qual regra guiou minha leitura?",
    ],
    xpReward: 95,
    challenges: [
      {
        type: "declension",
        promptLabel: "Que peça fecha o genitivo/ablativo singular de γλῶσσα?",
        promptSymbol: "γλῶσσα",
        promptHint:
          "Aqui o α muda no singular porque não vem depois de ε, ι ou ρ.",
        options: ["γλώσσης", "γλωσσίας", "γλῶσσας", "γλώσσαις"],
        answer: "γλώσσης",
        insight:
          "γλῶσσα pertence ao grupo em que α passa a η nas formas fortes do singular, daí γλώσσης.",
        coaching:
          "Sempre verifique a letra anterior ao α final. Essa pequena observação evita muitos erros de paradigma.",
      },
      {
        type: "declension",
        promptLabel: "Que peça fecha o bloco L.I.D. singular de σοφία?",
        promptSymbol: "σοφία",
        promptHint:
          "Aqui o α permanece porque está precedido por ι.",
        options: ["σοφίᾳ", "σοφήῃ", "σοφίας", "σοφίαις"],
        answer: "σοφίᾳ",
        insight:
          "Em σοφία, o α não migra para η nesse ponto do singular; por isso a forma correta é σοφίᾳ.",
        coaching:
          "Compare sempre σοφία com γλῶσσα. Esse contraste é uma das melhores formas de internalizar a regra do ε/ι/ρ.",
      },
      {
        type: "concept",
        promptLabel: "Que diagnóstico morfológico melhor descreve τοῖς προφήταις?",
        promptSymbol: "τοῖς προφήταις",
        promptHint:
          "Você precisa ler artigo e final juntos.",
        options: [
          "Locativo/instrumental/dativo plural masculino",
          "Genitivo/ablativo plural masculino",
          "Nominativo plural masculino",
          "Acusativo singular masculino",
        ],
        answer: "Locativo/instrumental/dativo plural masculino",
        insight:
          "A combinação artigo masculino plural + final -αις identifica o bloco L.I.D. plural na 1a declinação masculina.",
        coaching:
          "Mesmo em plurais mais longos, tente localizar primeiro o bloco funcional. Depois disso, a tradução fica muito mais segura.",
      },
      {
        type: "declension",
        promptLabel: "Que forma diz “o discípulo” no acusativo singular?",
        promptSymbol: "μαθητής",
        promptHint:
          "Você precisa da forma completa com artigo.",
        options: [
          createBilingualChoice("τὸν μαθητήν", "o discípulo"),
          createBilingualChoice("τοῦ μαθητοῦ", "do discípulo"),
          createBilingualChoice("τῷ μαθητῇ", "ao discípulo"),
          createBilingualChoice("οἱ μαθηταί", "os discípulos"),
        ],
        answer: createBilingualChoice("τὸν μαθητήν", "o discípulo"),
        insight:
          "No acusativo singular, μαθητής forma μαθητήν e recebe o artigo masculino correspondente: τὸν μαθητήν.",
        coaching:
          "Treine a sequência nominativo → genitivo → acusativo. Ela costuma revelar rapidamente se você realmente domina o paradigma.",
      },
      {
        type: "concept",
        promptLabel: "Qual regra ajuda a distinguir rapidamente σοφία de γλῶσσα no singular?",
        promptSymbol: "σοφία / γλῶσσα",
        promptHint:
          "A resposta não depende do significado, mas da letra antes do α.",
        options: [
          "Depois de ε, ι ou ρ o α tende a permanecer; fora disso, costuma passar a η em certas formas do singular",
          "Toda palavra em -α muda obrigatoriamente para η em todos os casos",
          "Toda palavra em -α permanece invariável no singular",
          "A distinção depende apenas de o substantivo ter artigo ou não",
        ],
        answer:
          "Depois de ε, ι ou ρ o α tende a permanecer; fora disso, costuma passar a η em certas formas do singular",
        insight:
          "Essa é a observação estrutural mais útil da 1a declinação feminina: ela organiza o paradigma antes mesmo de você decorar cada forma isolada.",
        coaching:
          "Boa morfologia começa com boas perguntas. Antes de declinar, pergunte: o α final vem depois de quê?",
      },
    ],
  },
];

const DECLENSION_CASES = [
  {
    id: "nom",
    abbr: "Nom.",
    label: "Nominativo",
    directGloss: "quem? o quê? (sujeito)",
    functionHint: "Normalmente marca sujeito ou predicativo do sujeito.",
  },
  {
    id: "gen",
    abbr: "Gen.",
    label: "Genitivo",
    directGloss: "de / da / dos / das",
    functionHint: "Costuma marcar posse, especificação ou qualificação.",
  },
  {
    id: "abl",
    abbr: "Abl.",
    label: "Ablativo",
    directGloss: "de (origem, saída)",
    functionHint: "Costuma marcar origem, procedência ou separação.",
  },
  {
    id: "loc",
    abbr: "Loc.",
    label: "Locativo",
    directGloss: "em / no / na",
    functionHint: "Costuma marcar localização: onde algo ocorre.",
  },
  {
    id: "ins",
    abbr: "Ins.",
    label: "Instrumental",
    directGloss: "com / por meio de",
    functionHint: "Costuma marcar meio, instrumento ou associação.",
  },
  {
    id: "dat",
    abbr: "Dat.",
    label: "Dativo",
    directGloss: "a / para",
    functionHint: "Costuma marcar interesse pessoal: a/para quem.",
  },
  {
    id: "ac",
    abbr: "Ac.",
    label: "Acusativo",
    directGloss: "quem? o quê? (obj. dir.)",
    functionHint: "Costuma marcar objeto direto ou alvo da ação.",
  },
  {
    id: "voc",
    abbr: "Voc.",
    label: "Vocativo",
    directGloss: "ó! (chamado)",
    functionHint: "Marca invocação ou chamado direto.",
  },
];

const DECLENSION_GENDERS = [
  { id: "masc", label: "Masculino", short: "Masc." },
  { id: "fem", label: "Feminino", short: "Fem." },
  { id: "neut", label: "Neutro", short: "Neutro" },
];

const DECLENSION_NUMBERS = [
  { id: "singular", label: "Singular" },
  { id: "plural", label: "Plural" },
];

function createDeclensionRow(
  caseId,
  singularMasc,
  singularFem,
  singularNeut,
  pluralMasc,
  pluralFem,
  pluralNeut,
  glosses = null
) {
  return {
    caseId,
    singular: {
      masc: singularMasc,
      fem: singularFem,
      neut: singularNeut,
    },
    plural: {
      masc: pluralMasc,
      fem: pluralFem,
      neut: pluralNeut,
    },
    glosses,
  };
}

function createDeclensionGlossRow(
  singularMasc,
  singularFem,
  singularNeut,
  pluralMasc,
  pluralFem,
  pluralNeut
) {
  return {
    singular: {
      masc: singularMasc,
      fem: singularFem,
      neut: singularNeut,
    },
    plural: {
      masc: pluralMasc,
      fem: pluralFem,
      neut: pluralNeut,
    },
  };
}

const declensionCharts = [
  {
    id: "article",
    label: "Artigo grego (ὁ, ἡ, τό)",
    note: "Quadro do artigo definido com os oito casos funcionais.",
    rows: [
      createDeclensionRow("nom", "ὁ", "ἡ", "τό", "οἱ", "αἱ", "τά"),
      createDeclensionRow("gen", "τοῦ", "τῆς", "τοῦ", "τῶν", "τῶν", "τῶν"),
      createDeclensionRow("abl", "τοῦ", "τῆς", "τοῦ", "τῶν", "τῶν", "τῶν"),
      createDeclensionRow("loc", "τῷ", "τῇ", "τῷ", "τοῖς", "ταῖς", "τοῖς"),
      createDeclensionRow("ins", "τῷ", "τῇ", "τῷ", "τοῖς", "ταῖς", "τοῖς"),
      createDeclensionRow("dat", "τῷ", "τῇ", "τῷ", "τοῖς", "ταῖς", "τοῖς"),
      createDeclensionRow("ac", "τόν", "τήν", "τό", "τούς", "τάς", "τά"),
      createDeclensionRow("voc", null, null, null, null, null, null),
    ],
  },
  {
    id: "second-declension",
    label: "2ª Declinação (λόγος, ὁδός, ἔργον)",
    note: "Paradigma comparado: masc., fem. e neutro em temas de 2ª declinação.",
    rows: [
      createDeclensionRow("nom", "λόγος", "ὁδός", "ἔργον", "λόγοι", "ὁδοί", "ἔργα"),
      createDeclensionRow("gen", "λόγου", "ὁδοῦ", "ἔργου", "λόγων", "ὁδῶν", "ἔργων"),
      createDeclensionRow("abl", "λόγου", "ὁδοῦ", "ἔργου", "λόγων", "ὁδῶν", "ἔργων"),
      createDeclensionRow("loc", "λόγῳ", "ὁδῷ", "ἔργῳ", "λόγοις", "ὁδοῖς", "ἔργοις"),
      createDeclensionRow("ins", "λόγῳ", "ὁδῷ", "ἔργῳ", "λόγοις", "ὁδοῖς", "ἔργοις"),
      createDeclensionRow("dat", "λόγῳ", "ὁδῷ", "ἔργῳ", "λόγοις", "ὁδοῖς", "ἔργοις"),
      createDeclensionRow("ac", "λόγον", "ὁδόν", "ἔργον", "λόγους", "ὁδούς", "ἔργα"),
      createDeclensionRow("voc", "λόγε", "ὁδέ", "ἔργον", "λόγοι", "ὁδοί", "ἔργα"),
    ],
  },
  {
    id: "first-declension-alpha-kept",
    label: "1ª Declinação Fem. (σοφία)",
    note: "Grupo em -α precedido por ε, ι ou ρ: o alfa tende a permanecer no singular.",
    rows: [
      createDeclensionRow("nom", null, "σοφία", null, null, "σοφίαι", null),
      createDeclensionRow("gen", null, "σοφίας", null, null, "σοφιῶν", null),
      createDeclensionRow("abl", null, "σοφίας", null, null, "σοφιῶν", null),
      createDeclensionRow("loc", null, "σοφίᾳ", null, null, "σοφίαις", null),
      createDeclensionRow("ins", null, "σοφίᾳ", null, null, "σοφίαις", null),
      createDeclensionRow("dat", null, "σοφίᾳ", null, null, "σοφίαις", null),
      createDeclensionRow("ac", null, "σοφίαν", null, null, "σοφίας", null),
      createDeclensionRow("voc", null, "σοφία", null, null, "σοφίαι", null),
    ],
  },
  {
    id: "first-declension-alpha-shift",
    label: "1ª Declinação Fem. (γλῶσσα)",
    note: "Grupo em -α sem ε/ι/ρ antes do alfa: no singular, α passa para η em formas centrais.",
    rows: [
      createDeclensionRow("nom", null, "γλῶσσα", null, null, "γλῶσσαι", null),
      createDeclensionRow("gen", null, "γλώσσης", null, null, "γλωσσῶν", null),
      createDeclensionRow("abl", null, "γλώσσης", null, null, "γλωσσῶν", null),
      createDeclensionRow("loc", null, "γλώσσῃ", null, null, "γλώσσαις", null),
      createDeclensionRow("ins", null, "γλώσσῃ", null, null, "γλώσσαις", null),
      createDeclensionRow("dat", null, "γλώσσῃ", null, null, "γλώσσαις", null),
      createDeclensionRow("ac", null, "γλῶσσαν", null, null, "γλώσσας", null),
      createDeclensionRow("voc", null, "γλῶσσα", null, null, "γλῶσσαι", null),
    ],
  },
  {
    id: "first-declension-eta",
    label: "1ª Declinação Fem. (ἀγάπη)",
    note: "Grupo em -η: o eta permanece ao longo do singular.",
    rows: [
      createDeclensionRow("nom", null, "ἀγάπη", null, null, "ἀγάπαι", null),
      createDeclensionRow("gen", null, "ἀγάπης", null, null, "ἀγαπῶν", null),
      createDeclensionRow("abl", null, "ἀγάπης", null, null, "ἀγαπῶν", null),
      createDeclensionRow("loc", null, "ἀγάπῃ", null, null, "ἀγάπαις", null),
      createDeclensionRow("ins", null, "ἀγάπῃ", null, null, "ἀγάπαις", null),
      createDeclensionRow("dat", null, "ἀγάπῃ", null, null, "ἀγάπαις", null),
      createDeclensionRow("ac", null, "ἀγάπην", null, null, "ἀγάπας", null),
      createDeclensionRow("voc", null, "ἀγάπη", null, null, "ἀγάπαι", null),
    ],
  },
  {
    id: "first-declension-masc-as",
    label: "1ª Declinação Masc. (νεανίας)",
    note: "Masculinos em -ας: artigo masculino e genitivo singular em -ου.",
    rows: [
      createDeclensionRow("nom", "νεανίας", null, null, "νεανίαι", null, null),
      createDeclensionRow("gen", "νεανίου", null, null, "νεανιῶν", null, null),
      createDeclensionRow("abl", "νεανίου", null, null, "νεανιῶν", null, null),
      createDeclensionRow("loc", "νεανίᾳ", null, null, "νεανίαις", null, null),
      createDeclensionRow("ins", "νεανίᾳ", null, null, "νεανίαις", null, null),
      createDeclensionRow("dat", "νεανίᾳ", null, null, "νεανίαις", null, null),
      createDeclensionRow("ac", "νεανίαν", null, null, "νεανίας", null, null),
      createDeclensionRow("voc", "νεανία", null, null, "νεανίαι", null, null),
    ],
  },
  {
    id: "first-declension-masc-es",
    label: "1ª Declinação Masc. (προφήτης)",
    note: "Masculinos em -ης: artigo masculino e vocativo singular próprio.",
    rows: [
      createDeclensionRow("nom", "προφήτης", null, null, "προφῆται", null, null),
      createDeclensionRow("gen", "προφήτου", null, null, "προφητῶν", null, null),
      createDeclensionRow("abl", "προφήτου", null, null, "προφητῶν", null, null),
      createDeclensionRow("loc", "προφήτῃ", null, null, "προφήταις", null, null),
      createDeclensionRow("ins", "προφήτῃ", null, null, "προφήταις", null, null),
      createDeclensionRow("dat", "προφήτῃ", null, null, "προφήταις", null, null),
      createDeclensionRow("ac", "προφήτην", null, null, "προφήτας", null, null),
      createDeclensionRow("voc", "προφῆτα", null, null, "προφῆται", null, null),
    ],
  },
  {
    id: "demonstrative-near",
    label: "Pronome demonstrativo (οὗτος, αὕτη, τοῦτο)",
    note: "Quadro completo de proximidade da aula 27.",
    rows: [
      createDeclensionRow(
        "nom",
        "οὗτος",
        "αὕτη",
        "τοῦτο",
        "οὗτοι",
        "αὗται",
        "ταῦτα",
        createDeclensionGlossRow("este", "esta", "isto", "estes", "estas", "estas coisas")
      ),
      createDeclensionRow(
        "gen",
        "τούτου",
        "ταύτης",
        "τούτου",
        "τούτων",
        "τούτων",
        "τούτων",
        createDeclensionGlossRow(
          "deste",
          "desta",
          "disto",
          "destes",
          "destas",
          "destas coisas"
        )
      ),
      createDeclensionRow(
        "abl",
        "τούτου",
        "ταύτης",
        "τούτου",
        "τούτων",
        "τούτων",
        "τούτων",
        createDeclensionGlossRow(
          "deste (origem)",
          "desta (origem)",
          "disto (origem)",
          "destes (origem)",
          "destas (origem)",
          "destas coisas (origem)"
        )
      ),
      createDeclensionRow(
        "loc",
        "τούτῳ",
        "ταύτῃ",
        "τούτῳ",
        "τούτοις",
        "ταύταις",
        "τούτοις",
        createDeclensionGlossRow(
          "neste",
          "nesta",
          "nisto",
          "nestes",
          "nestas",
          "nestas coisas"
        )
      ),
      createDeclensionRow(
        "ins",
        "τούτῳ",
        "ταύτῃ",
        "τούτῳ",
        "τούτοις",
        "ταύταις",
        "τούτοις",
        createDeclensionGlossRow(
          "com este",
          "com esta",
          "com isto",
          "com estes",
          "com estas",
          "com estas coisas"
        )
      ),
      createDeclensionRow(
        "dat",
        "τούτῳ",
        "ταύτῃ",
        "τούτῳ",
        "τούτοις",
        "ταύταις",
        "τούτοις",
        createDeclensionGlossRow("a este", "a esta", "a isto", "a estes", "a estas", "a estas coisas")
      ),
      createDeclensionRow(
        "ac",
        "τοῦτον",
        "ταύτην",
        "τοῦτο",
        "τούτους",
        "ταύτας",
        "ταῦτα",
        createDeclensionGlossRow(
          "este (obj.)",
          "esta (obj.)",
          "isto (obj.)",
          "estes (obj.)",
          "estas (obj.)",
          "estas coisas (obj.)"
        )
      ),
      createDeclensionRow("voc", null, null, null, null, null, null),
    ],
  },
  {
    id: "demonstrative-far",
    label: "Pronome demonstrativo (ἐκεῖνος, ἐκείνη, ἐκεῖνο)",
    note: "Quadro completo de distância da aula 28.",
    rows: [
      createDeclensionRow(
        "nom",
        "ἐκεῖνος",
        "ἐκείνη",
        "ἐκεῖνο",
        "ἐκεῖνοι",
        "ἐκεῖναι",
        "ἐκεῖνα",
        createDeclensionGlossRow(
          "aquele",
          "aquela",
          "aquilo",
          "aqueles",
          "aquelas",
          "aquelas coisas"
        )
      ),
      createDeclensionRow(
        "gen",
        "ἐκείνου",
        "ἐκείνης",
        "ἐκείνου",
        "ἐκείνων",
        "ἐκείνων",
        "ἐκείνων",
        createDeclensionGlossRow(
          "daquele",
          "daquela",
          "daquilo",
          "daqueles",
          "daquelas",
          "daquelas coisas"
        )
      ),
      createDeclensionRow(
        "abl",
        "ἐκείνου",
        "ἐκείνης",
        "ἐκείνου",
        "ἐκείνων",
        "ἐκείνων",
        "ἐκείνων",
        createDeclensionGlossRow(
          "daquele (origem)",
          "daquela (origem)",
          "daquilo (origem)",
          "daqueles (origem)",
          "daquelas (origem)",
          "daquelas coisas (origem)"
        )
      ),
      createDeclensionRow(
        "loc",
        "ἐκείνῳ",
        "ἐκείνῃ",
        "ἐκείνῳ",
        "ἐκείνοις",
        "ἐκείναις",
        "ἐκείνοις",
        createDeclensionGlossRow(
          "naquele",
          "naquela",
          "naquilo",
          "naqueles",
          "naquelas",
          "naquelas coisas"
        )
      ),
      createDeclensionRow(
        "ins",
        "ἐκείνῳ",
        "ἐκείνῃ",
        "ἐκείνῳ",
        "ἐκείνοις",
        "ἐκείναις",
        "ἐκείνοις",
        createDeclensionGlossRow(
          "com aquele",
          "com aquela",
          "com aquilo",
          "com aqueles",
          "com aquelas",
          "com aquelas coisas"
        )
      ),
      createDeclensionRow(
        "dat",
        "ἐκείνῳ",
        "ἐκείνῃ",
        "ἐκείνῳ",
        "ἐκείνοις",
        "ἐκείναις",
        "ἐκείνοις",
        createDeclensionGlossRow(
          "àquele",
          "àquela",
          "àquilo",
          "àqueles",
          "àquelas",
          "àquelas coisas"
        )
      ),
      createDeclensionRow(
        "ac",
        "ἐκεῖνον",
        "ἐκείνην",
        "ἐκεῖνο",
        "ἐκείνους",
        "ἐκείνας",
        "ἐκεῖνα",
        createDeclensionGlossRow(
          "aquele (obj.)",
          "aquela (obj.)",
          "aquilo (obj.)",
          "aqueles (obj.)",
          "aquelas (obj.)",
          "aquelas coisas (obj.)"
        )
      ),
      createDeclensionRow("voc", null, null, null, null, null, null),
    ],
  },
  {
    id: "present-active-participle",
    label: "Particípio presente ativo (λύων, λύουσα, λῦον)",
    note: "Quadro completo do particípio presente ativo da aula 31.",
    rows: [
      createDeclensionRow("nom", "λύων", "λύουσα", "λῦον", "λύοντες", "λύουσαι", "λύοντα"),
      createDeclensionRow("gen", "λύοντος", "λυούσης", "λύοντος", "λυόντων", "λυουσῶν", "λυόντων"),
      createDeclensionRow("abl", "λύοντος", "λυούσης", "λύοντος", "λυόντων", "λυουσῶν", "λυόντων"),
      createDeclensionRow("loc", "λύοντι", "λυούσῃ", "λύοντι", "λύουσι", "λυούσαις", "λύουσι"),
      createDeclensionRow("ins", "λύοντι", "λυούσῃ", "λύοντι", "λύουσι", "λυούσαις", "λύουσι"),
      createDeclensionRow("dat", "λύοντι", "λυούσῃ", "λύοντι", "λύουσι", "λυούσαις", "λύουσι"),
      createDeclensionRow("ac", "λύοντα", "λύουσαν", "λῦον", "λύοντας", "λυούσας", "λύοντα"),
      createDeclensionRow("voc", null, null, null, null, null, null),
    ],
  },
  {
    id: "indefinite-pronoun",
    label: "Pronome indefinido (τις, τι)",
    note: "Quadro completo do pronome indefinido da aula 32.",
    rows: [
      createDeclensionRow("nom", "τις", "τις", "τι", "τινές", "τινές", "τινά"),
      createDeclensionRow("gen", "τινός", "τινός", "τινός", "τινῶν", "τινῶν", "τινῶν"),
      createDeclensionRow("abl", "τινός", "τινός", "τινός", "τινῶν", "τινῶν", "τινῶν"),
      createDeclensionRow("loc", "τινί", "τινί", "τινί", "τισί(ν)", "τισί(ν)", "τισί(ν)"),
      createDeclensionRow("ins", "τινί", "τινί", "τινί", "τισί(ν)", "τισί(ν)", "τισί(ν)"),
      createDeclensionRow("dat", "τινί", "τινί", "τινί", "τισί(ν)", "τισί(ν)", "τισί(ν)"),
      createDeclensionRow("ac", "τινά", "τινά", "τι", "τινάς", "τινάς", "τινά"),
      createDeclensionRow("voc", null, null, null, null, null, null),
    ],
  },
];

function createIntensiveQuestion({
  id,
  lessonKey,
  lessonLabel,
  topicLabel,
  promptLabel,
  promptSymbol,
  promptHint,
  options,
  answer,
  insight,
  coaching,
}) {
  return {
    id,
    lessonKey,
    lessonLabel,
    topicLabel,
    promptLabel,
    promptSymbol,
    promptHint,
    options,
    answer,
    insight,
    coaching,
  };
}

const intensiveTopics = [
  { id: "all", label: "Todas as aulas (27-32)" },
  { id: "a27", label: "Aula 27 | οὗτος, αὕτη, τοῦτο" },
  { id: "a28", label: "Aula 28 | ἐκεῖνος, ἐκείνη, ἐκεῖνο" },
  { id: "a29", label: "Aula 29 | Aoristo do indicativo ativo" },
  { id: "a30", label: "Aula 30 | Preposições" },
  { id: "a31", label: "Aula 31 | Presente do particípio ativo" },
  { id: "a32", label: "Aula 32 | Pronomes indefinidos" },
];

const intensiveQuestionBank = [
  createIntensiveQuestion({
    id: "a27-1",
    lessonKey: "a27",
    lessonLabel: "Aula 27",
    topicLabel: "Pronomes demonstrativos de proximidade",
    promptLabel: "Que série demonstrativa aponta para o que está perto ou foi mencionado por último?",
    promptSymbol: "Pronomes demonstrativos",
    promptHint: "Base: aula 27.",
    options: [
      "οὗτος | αὕτη | τοῦτο",
      "ἐκεῖνος | ἐκείνη | ἐκεῖνο",
      "τις | τι",
      "ὅς | ἥ | ὅ",
    ],
    answer: "οὗτος | αὕτη | τοῦτο",
    insight:
      "Na aula 27, essa série foi apresentada como demonstrativo de proximidade e retomada imediata.",
    coaching:
      "Quando o referente está perto no discurso, comece por οὗτος/αὕτη/τοῦτο.",
  }),
  createIntensiveQuestion({
    id: "a27-2",
    lessonKey: "a27",
    lessonLabel: "Aula 27",
    topicLabel: "Declinação do demonstrativo próximo",
    promptLabel: "Qual é o nominativo plural neutro de οὗτος?",
    promptSymbol: "Nom. Pl. Neutro",
    promptHint: "Consulte a tabela da aula 27.",
    options: ["ταῦτα", "τοῦτα", "τούτοις", "τούτων"],
    answer: "ταῦτα",
    insight:
      "No plural neutro nominativo/acusativo, a forma é ταῦτα.",
    coaching:
      "Nos neutros, nom. e ac. costumam coincidir; isso ajuda a fixar ταῦτα.",
  }),
  createIntensiveQuestion({
    id: "a27-3",
    lessonKey: "a27",
    lessonLabel: "Aula 27",
    topicLabel: "Declinação do demonstrativo próximo",
    promptLabel: "Qual é o genitivo singular feminino de αὕτη?",
    promptSymbol: "Gen. Sg. Fem.",
    promptHint: "A forma está na coluna feminina singular da aula 27.",
    options: ["ταύτης", "ταύτῃ", "ταύτην", "ταύτας"],
    answer: "ταύτης",
    insight:
      "A forma correta do genitivo singular feminino é ταύτης.",
    coaching:
      "Genitivo feminino singular em -ης aparece com frequência nesse paradigma.",
  }),
  createIntensiveQuestion({
    id: "a27-4",
    lessonKey: "a27",
    lessonLabel: "Aula 27",
    topicLabel: "Declinação do demonstrativo próximo",
    promptLabel: "Qual é o dativo plural masculino de οὗτος?",
    promptSymbol: "Dat. Pl. Masc.",
    promptHint: "Observe as formas com -οις.",
    options: ["τούτοις", "τούτους", "τούτων", "οὗτοι"],
    answer: "τούτοις",
    insight:
      "No dativo plural masculino, a forma é τούτοις.",
    coaching:
      "No plural masculino, o final -οις é um sinal forte de dativo/locativo/instrumental.",
  }),
  createIntensiveQuestion({
    id: "a27-5",
    lessonKey: "a27",
    lessonLabel: "Aula 27",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: Οὗτός ἐστιν ὁ βασιλεὺς τῶν Ἰουδαίων.",
    promptSymbol: "Lc 23.38",
    promptHint: "Base de exercício da aula 27.",
    options: [
      "Este é o rei dos judeus.",
      "Aquele é o rei de Israel.",
      "Isto é a luz dos homens.",
      "Este era o rei de Davi.",
    ],
    answer: "Este é o rei dos judeus.",
    insight:
      "A aula traz essa tradução como modelo: “Este é o rei dos judeus.”",
    coaching:
      "Em frases copulativas com οὗτος ἐστιν, comece traduzindo “este é...”.",
  }),
  createIntensiveQuestion({
    id: "a27-6",
    lessonKey: "a27",
    lessonLabel: "Aula 27",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: Τοῦτο τὸ αἷμα τῆς διαθήκης.",
    promptSymbol: "Hb 9.20",
    promptHint: "Exercício da aula 27.",
    options: [
      "Isto é o sangue da aliança.",
      "Este é o caminho da verdade.",
      "Aquele é o sinal da promessa.",
      "Isto era o sangue dos profetas.",
    ],
    answer: "Isto é o sangue da aliança.",
    insight:
      "A tradução-modelo da aula 27 foi “Isto [é] o sangue da aliança.”",
    coaching:
      "Quando τοῦτο introduz um nome neutro, o português tende a pedir “isto”.",
  }),
  createIntensiveQuestion({
    id: "a28-1",
    lessonKey: "a28",
    lessonLabel: "Aula 28",
    topicLabel: "Pronomes demonstrativos de distância",
    promptLabel: "Que série demonstrativa aponta para o que está longe, distante ou ausente?",
    promptSymbol: "Pronomes demonstrativos",
    promptHint: "Base: aula 28.",
    options: [
      "ἐκεῖνος | ἐκείνη | ἐκεῖνο",
      "οὗτος | αὕτη | τοῦτο",
      "τις | τι",
      "αὐτός | αὐτή | αὐτό",
    ],
    answer: "ἐκεῖνος | ἐκείνη | ἐκεῖνο",
    insight:
      "A aula 28 apresenta essa série como demonstrativo de distância.",
    coaching:
      "Se a ideia for “aquele/aquela/aquilo”, pense primeiro em ἐκεῖνος.",
  }),
  createIntensiveQuestion({
    id: "a28-2",
    lessonKey: "a28",
    lessonLabel: "Aula 28",
    topicLabel: "Declinação do demonstrativo distante",
    promptLabel: "Qual é o nominativo plural feminino de ἐκεῖνος?",
    promptSymbol: "Nom. Pl. Fem.",
    promptHint: "Coluna feminina plural da aula 28.",
    options: ["ἐκεῖναι", "ἐκείνας", "ἐκείνων", "ἐκείνοις"],
    answer: "ἐκεῖναι",
    insight:
      "No nominativo plural feminino, a forma é ἐκεῖναι.",
    coaching:
      "No feminino plural, diferencie ἐκεῖναι (nom.) de ἐκείνας (ac.).",
  }),
  createIntensiveQuestion({
    id: "a28-3",
    lessonKey: "a28",
    lessonLabel: "Aula 28",
    topicLabel: "Declinação do demonstrativo distante",
    promptLabel: "Qual é o acusativo plural masculino de ἐκεῖνος?",
    promptSymbol: "Ac. Pl. Masc.",
    promptHint: "Procure a forma em -ους.",
    options: ["ἐκείνους", "ἐκεῖνοι", "ἐκείνων", "ἐκεῖνα"],
    answer: "ἐκείνους",
    insight:
      "No acusativo plural masculino, a forma correta é ἐκείνους.",
    coaching:
      "No masc. plural, -ους costuma marcar acusativo.",
  }),
  createIntensiveQuestion({
    id: "a28-4",
    lessonKey: "a28",
    lessonLabel: "Aula 28",
    topicLabel: "Declinação do demonstrativo distante",
    promptLabel: "Qual é o dativo singular feminino de ἐκείνη?",
    promptSymbol: "Dat. Sg. Fem.",
    promptHint: "Observe a terminação feminina singular com iota subscrito.",
    options: ["ἐκείνῃ", "ἐκείνης", "ἐκείνην", "ἐκείνη"],
    answer: "ἐκείνῃ",
    insight:
      "A forma dativa singular feminina é ἐκείνῃ.",
    coaching:
      "No feminino singular, o dativo costuma aparecer com eta + iota subscrito.",
  }),
  createIntensiveQuestion({
    id: "a28-5",
    lessonKey: "a28",
    lessonLabel: "Aula 28",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: οὐκ ἧν ἐκεῖνος τὸ φῶς.",
    promptSymbol: "Jo 1.8",
    promptHint: "Exercício da aula 28.",
    options: [
      "Não era aquele (ele) a luz.",
      "Este era a luz do mundo.",
      "Aquilo foi a luz dos homens.",
      "Não era esta a verdade.",
    ],
    answer: "Não era aquele (ele) a luz.",
    insight:
      "A tradução-modelo mostrada na aula foi “Não era aquele (ele) a luz.”",
    coaching:
      "No contexto joanino, ἐκεῖνος retoma uma pessoa previamente mencionada.",
  }),
  createIntensiveQuestion({
    id: "a28-6",
    lessonKey: "a28",
    lessonLabel: "Aula 28",
    topicLabel: "Tradução de expressão",
    promptLabel: "Como traduzir ἐν ἐκείνῃ τῇ ὥρᾳ?",
    promptSymbol: "Mt 18.1",
    promptHint: "A expressão aparece no exercício final da aula.",
    options: [
      "Naquela hora.",
      "Nessa mesma casa.",
      "Naquele templo.",
      "Com aquela voz.",
    ],
    answer: "Naquela hora.",
    insight:
      "Aula 28: “ἐν ἐκείνῃ τῇ ὥρᾳ” foi traduzido como “Naquela hora.”",
    coaching:
      "Com ἐν + dativo, a leitura mais comum é locativa: “em/na...”.",
  }),
  createIntensiveQuestion({
    id: "a29-1",
    lessonKey: "a29",
    lessonLabel: "Aula 29",
    topicLabel: "Aoristo do indicativo ativo",
    promptLabel: "No paradigma mostrado de εὑρίσκω, qual é a forma da 1a pessoa singular no aoristo ativo?",
    promptSymbol: "Aoristo ativo",
    promptHint: "Tabela da aula 29.",
    options: ["εὗρον", "εὗρες", "εὗρε", "εὗρομεν"],
    answer: "εὗρον",
    insight:
      "No quadro apresentado, 1a singular de εὑρίσκω no aoristo ativo é εὗρον.",
    coaching:
      "Memorize em bloco: εὗρον, εὗρες, εὗρε(ν), εὗρομεν, εὗρετε, εὗρον.",
  }),
  createIntensiveQuestion({
    id: "a29-2",
    lessonKey: "a29",
    lessonLabel: "Aula 29",
    topicLabel: "Aoristo do indicativo ativo",
    promptLabel: "No mesmo paradigma, qual forma corresponde à 2a pessoa plural?",
    promptSymbol: "Aoristo ativo",
    promptHint: "Observe a linha da 2a plural.",
    options: ["εὗρετε", "εὗρομεν", "εὗρον", "εὗρες"],
    answer: "εὗρετε",
    insight:
      "A forma da 2a pessoa plural é εὗρετε.",
    coaching:
      "No aoristo sigmático regular, -τε aparece como pista útil para 2a plural.",
  }),
  createIntensiveQuestion({
    id: "a29-3",
    lessonKey: "a29",
    lessonLabel: "Aula 29",
    topicLabel: "Aoristo do indicativo ativo",
    promptLabel: "Que forma do paradigma pode representar tanto 1a singular quanto 3a plural?",
    promptSymbol: "Ambiguidade formal",
    promptHint: "A tabela da aula mostra repetição da forma.",
    options: ["εὗρον", "εὗρετε", "εὗρες", "εὗρε(ν)"],
    answer: "εὗρον",
    insight:
      "No quadro da aula, εὗρον aparece para 1a singular e também para 3a plural.",
    coaching:
      "Quando a forma coincidir, use o contexto sintático para decidir pessoa e número.",
  }),
  createIntensiveQuestion({
    id: "a29-4",
    lessonKey: "a29",
    lessonLabel: "Aula 29",
    topicLabel: "Leitura em Apocalipse 20",
    promptLabel: "Na sequência de Apocalipse 20.2-3, qual forma significa “e lançou”?",
    promptSymbol: "καὶ ... αὐτὸν εἰς τὴν ἄβυσσον",
    promptHint: "Leitura principal da aula.",
    options: ["ἔβαλεν", "ἐκράτησεν", "ἔδησεν", "ἔκλεισεν"],
    answer: "ἔβαλεν",
    insight:
      "A leitura da aula destaca ἔβαλεν com o sentido de “lançou”.",
    coaching:
      "Em narrativas, agrupe os aoristos em cadeia para captar a progressão dos eventos.",
  }),
  createIntensiveQuestion({
    id: "a29-5",
    lessonKey: "a29",
    lessonLabel: "Aula 29",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: ἐν τῷ ἱερῷ μαθητής εὗρε Ἰησοῦν.",
    promptSymbol: "Exercício da aula 29",
    promptHint: "Considere a ordem grega da frase.",
    options: [
      "No templo, um discípulo encontrou Jesus.",
      "No templo, Jesus encontrou um discípulo.",
      "Um discípulo no templo era Jesus.",
      "No templo, os discípulos aprenderam Jesus.",
    ],
    answer: "No templo, um discípulo encontrou Jesus.",
    insight:
      "Essa foi a tradução verificada na própria aula 29.",
    coaching:
      "Comece pelo verbo (εὗρε), depois localize sujeito e objeto pelo caso.",
  }),
  createIntensiveQuestion({
    id: "a29-6",
    lessonKey: "a29",
    lessonLabel: "Aula 29",
    topicLabel: "Aspecto verbal",
    promptLabel: "Na abordagem da aula, o aoristo narrativo normalmente apresenta a ação como:",
    promptSymbol: "Aspecto do aoristo",
    promptHint: "Ligado ao modo de enxergar a ação no texto.",
    options: [
      "Evento pontual/global na narrativa",
      "Ação progressiva contínua",
      "Estado resultante permanente",
      "Ordem imperativa",
    ],
    answer: "Evento pontual/global na narrativa",
    insight:
      "A aula trabalha o aoristo em contexto narrativo, marcando eventos completos na linha do relato.",
    coaching:
      "Leia o aoristo em bloco narrativo: ele tende a avançar a história por eventos.",
  }),
  createIntensiveQuestion({
    id: "a30-1",
    lessonKey: "a30",
    lessonLabel: "Aula 30",
    topicLabel: "Preposições e casos",
    promptLabel: "Segundo a aula, o significado da preposição depende principalmente de quê?",
    promptSymbol: "Preposição",
    promptHint: "Veja o conceito apresentado no slide principal.",
    options: [
      "Do caso que ela acompanha (genitivo, acusativo ou dativo)",
      "Do tempo verbal principal da oração",
      "Do gênero do sujeito apenas",
      "Da posição do acento agudo",
    ],
    answer: "Do caso que ela acompanha (genitivo, acusativo ou dativo)",
    insight:
      "A aula enfatiza que a regência de caso é central para determinar o valor da preposição.",
    coaching:
      "Antes de traduzir a preposição, identifique o caso do termo regido.",
  }),
  createIntensiveQuestion({
    id: "a30-2",
    lessonKey: "a30",
    lessonLabel: "Aula 30",
    topicLabel: "Preposições com dativo",
    promptLabel: "Qual preposição foi listada especificamente com dativo e traduzida como “com”?",
    promptSymbol: "Preposições + dativo",
    promptHint: "Quadro da aula 30.",
    options: ["σύν", "εἰς", "ἀνά", "ἐκ"],
    answer: "σύν",
    insight:
      "No quadro com dativo, σύν aparece com o valor de companhia: “com”.",
    coaching:
      "σύν + dativo é associação direta; use isso como gatilho rápido de leitura.",
  }),
  createIntensiveQuestion({
    id: "a30-3",
    lessonKey: "a30",
    lessonLabel: "Aula 30",
    topicLabel: "Preposições com acusativo",
    promptLabel: "Qual preposição da aula 30 foi apresentada com acusativo no sentido de movimento para dentro?",
    promptSymbol: "Preposições + acusativo",
    promptHint: "Procure a entrada com “para (dentro)”.",
    options: ["εἰς", "ἐν", "ἀπό", "πρό"],
    answer: "εἰς",
    insight:
      "No quadro das preposições com acusativo, εἰς foi explicitamente ligada a “para (dentro)”.",
    coaching:
      "Quando houver ideia de entrada/direção para dentro, εἰς com acusativo costuma ser o padrão.",
  }),
  createIntensiveQuestion({
    id: "a30-4",
    lessonKey: "a30",
    lessonLabel: "Aula 30",
    topicLabel: "Preposições com genitivo",
    promptLabel: "Qual preposição foi listada com genitivo no sentido de “de (de dentro para fora)”?",
    promptSymbol: "Preposições + genitivo",
    promptHint: "Entrada destacada no quadro genitivo.",
    options: ["ἐκ", "ἐπί", "πρός", "κατά"],
    answer: "ἐκ",
    insight:
      "A aula apresenta ἐκ com genitivo para a ideia de saída: “de dentro para fora”.",
    coaching:
      "Leia ἐκ como movimento de origem/saída, frequentemente ligado ao ablativo/genitivo.",
  }),
  createIntensiveQuestion({
    id: "a30-5",
    lessonKey: "a30",
    lessonLabel: "Aula 30",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: ἀναβαίνω πρὸς τὸν πατέρα μου.",
    promptSymbol: "Jo 20.17",
    promptHint: "Exercício da aula 30.",
    options: [
      "Subo para o meu pai.",
      "Venho do meu pai.",
      "Permaneço com o meu pai.",
      "Falo sobre o meu pai.",
    ],
    answer: "Subo para o meu pai.",
    insight:
      "Na correção da aula 30, a frase foi traduzida exatamente assim.",
    coaching:
      "πρός + acusativo tende a marcar direção para alguém/algo.",
  }),
  createIntensiveQuestion({
    id: "a30-6",
    lessonKey: "a30",
    lessonLabel: "Aula 30",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: ὁ κριτὴς πρὸ τῶν θυρῶν.",
    promptSymbol: "Tg 5.9",
    promptHint: "Exercício da aula 30.",
    options: [
      "O juiz está diante das portas.",
      "O juiz vai para as portas.",
      "O juiz vem das portas.",
      "O juiz com as portas.",
    ],
    answer: "O juiz está diante das portas.",
    insight:
      "A correção da aula 30 traz “O juiz [está] diante das portas.”",
    coaching:
      "πρό com genitivo costuma marcar anterioridade ou posição “diante de”.",
  }),
  createIntensiveQuestion({
    id: "a31-1",
    lessonKey: "a31",
    lessonLabel: "Aula 31",
    topicLabel: "Particípio: natureza",
    promptLabel: "Segundo a aula, o particípio combina quais duas dimensões?",
    promptSymbol: "Particípio",
    promptHint: "Veja o slide de introdução do particípio.",
    options: [
      "Características nominais e verbais",
      "Somente função adverbial",
      "Somente flexão verbal",
      "Somente função preposicional",
    ],
    answer: "Características nominais e verbais",
    insight:
      "A aula 31 enfatiza o caráter verbo-nominal do particípio.",
    coaching:
      "Analise particípios em duas etapas: forma verbal + função sintática nominal.",
  }),
  createIntensiveQuestion({
    id: "a31-2",
    lessonKey: "a31",
    lessonLabel: "Aula 31",
    topicLabel: "Declinação do particípio presente ativo",
    promptLabel: "Qual é o nominativo singular masculino do particípio presente ativo de λύω?",
    promptSymbol: "Nom. Sg. Masc.",
    promptHint: "Tabela central da aula 31.",
    options: ["λύων", "λύοντα", "λύοντος", "λύοντι"],
    answer: "λύων",
    insight:
      "No nominativo singular masculino, a forma é λύων.",
    coaching:
      "No masc. singular do particípio presente ativo, a forma-base costuma terminar em -ων.",
  }),
  createIntensiveQuestion({
    id: "a31-3",
    lessonKey: "a31",
    lessonLabel: "Aula 31",
    topicLabel: "Declinação do particípio presente ativo",
    promptLabel: "Qual é o acusativo plural feminino do particípio presente ativo de λύω?",
    promptSymbol: "Ac. Pl. Fem.",
    promptHint: "Linha do acusativo na tabela da aula.",
    options: ["λυούσας", "λύουσαι", "λυουσῶν", "λυούσαις"],
    answer: "λυούσας",
    insight:
      "No acusativo plural feminino, a forma correta é λυούσας.",
    coaching:
      "No feminino plural, compare -αι (nom.), -ας (ac.), -ῶν (gen.), -αις (dat.).",
  }),
  createIntensiveQuestion({
    id: "a31-4",
    lessonKey: "a31",
    lessonLabel: "Aula 31",
    topicLabel: "Declinação do particípio presente ativo",
    promptLabel: "Qual é o genitivo singular neutro do particípio presente ativo de λύω?",
    promptSymbol: "Gen. Sg. Neutro",
    promptHint: "Observe que masc. e neutro compartilham formas em várias células.",
    options: ["λύοντος", "λυούσης", "λύοντι", "λῦον"],
    answer: "λύοντος",
    insight:
      "No genitivo singular, masc. e neutro aparecem como λύοντος.",
    coaching:
      "No particípio presente ativo, masc./neutro têm paralelos fortes; use isso para acelerar a leitura.",
  }),
  createIntensiveQuestion({
    id: "a31-5",
    lessonKey: "a31",
    lessonLabel: "Aula 31",
    topicLabel: "Declinação do particípio presente ativo",
    promptLabel: "Qual é o dativo plural neutro do particípio presente ativo de λύω?",
    promptSymbol: "Dat. Pl. Neutro",
    promptHint: "Linha do dativo plural na tabela.",
    options: ["λύουσι", "λυούσαις", "λυόντων", "λύοντα"],
    answer: "λύουσι",
    insight:
      "No dativo plural neutro (e também masculino), a forma é λύουσι.",
    coaching:
      "Lembre que masc. e neutro plural no dativo convergem em -ουσι.",
  }),
  createIntensiveQuestion({
    id: "a31-6",
    lessonKey: "a31",
    lessonLabel: "Aula 31",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: δουλεύων τῷ κυρίῳ.",
    promptSymbol: "At 20.19",
    promptHint: "Exercício da aula 31.",
    options: [
      "Servindo ao Senhor.",
      "Ele servirá ao Senhor.",
      "Servi o Senhor.",
      "Com o Senhor servimos.",
    ],
    answer: "Servindo ao Senhor.",
    insight:
      "A correção da aula 31 trouxe a leitura participial “Servindo ao Senhor.”",
    coaching:
      "Particípio presente ativo costuma soar bem em português com gerúndio em contexto de ação simultânea.",
  }),
  createIntensiveQuestion({
    id: "a32-1",
    lessonKey: "a32",
    lessonLabel: "Aula 32",
    topicLabel: "Pronomes indefinidos",
    promptLabel: "Que série foi trabalhada na aula 32 como pronome indefinido?",
    promptSymbol: "Pronomes indefinidos",
    promptHint: "Base: aula 32.",
    options: ["τις | τι", "οὗτος | αὕτη | τοῦτο", "ἐκεῖνος | ἐκείνη | ἐκεῖνο", "ὅδε | ἥδε | τόδε"],
    answer: "τις | τι",
    insight:
      "A aula 32 apresenta τις/τι como núcleo dos pronomes indefinidos.",
    coaching:
      "Sem acento forte contrastivo, τις/τι costuma trazer valor de “alguém/alguma coisa”.",
  }),
  createIntensiveQuestion({
    id: "a32-2",
    lessonKey: "a32",
    lessonLabel: "Aula 32",
    topicLabel: "Uso sintático",
    promptLabel: "Segundo a aula, τις/τι é usado como qualificador ou em que tipo de oração?",
    promptSymbol: "Uso de τις/τι",
    promptHint: "Veja o slide de conceito.",
    options: [
      "Orações condicionais",
      "Orações finais apenas",
      "Somente discursos diretos",
      "Somente perguntas retóricas",
    ],
    answer: "Orações condicionais",
    insight:
      "A aula cita explicitamente o uso em construções condicionais como ἐάν τις ἁμάρτῃ.",
    coaching:
      "Quando você vir εἴ/ἐάν + τις, espere estrutura condicional.",
  }),
  createIntensiveQuestion({
    id: "a32-3",
    lessonKey: "a32",
    lessonLabel: "Aula 32",
    topicLabel: "Declinação de τις/τι",
    promptLabel: "Qual é o nominativo singular masculino/feminino de τις/τι?",
    promptSymbol: "Nom. Sg. Masc./Fem.",
    promptHint: "Quadro da aula 32.",
    options: ["τις", "τινά", "τινός", "τι"],
    answer: "τις",
    insight:
      "No singular masc./fem., o nominativo é τις.",
    coaching:
      "No singular, diferencie bem τις (masc/fem) e τι (neutro).",
  }),
  createIntensiveQuestion({
    id: "a32-4",
    lessonKey: "a32",
    lessonLabel: "Aula 32",
    topicLabel: "Declinação de τις/τι",
    promptLabel: "Qual é o nominativo singular neutro de τις/τι?",
    promptSymbol: "Nom. Sg. Neutro",
    promptHint: "Coluna neutra singular da tabela.",
    options: ["τι", "τις", "τινά", "τινί"],
    answer: "τι",
    insight:
      "No neutro singular nominativo (e acusativo), a forma é τι.",
    coaching:
      "No neutro, a forma curta τι é extremamente frequente.",
  }),
  createIntensiveQuestion({
    id: "a32-5",
    lessonKey: "a32",
    lessonLabel: "Aula 32",
    topicLabel: "Declinação de τις/τι",
    promptLabel: "Qual é o dativo plural comum de τις/τι?",
    promptSymbol: "Dat. Pl.",
    promptHint: "Observe o final em -σι(ν).",
    options: ["τισί(ν)", "τινῶν", "τινάς", "τινές"],
    answer: "τισί(ν)",
    insight:
      "No dativo plural (masc./fem. e neutro), a forma apresentada é τισί(ν).",
    coaching:
      "No plural indefinido, -σι(ν) é um bom alerta para dativo.",
  }),
  createIntensiveQuestion({
    id: "a32-6",
    lessonKey: "a32",
    lessonLabel: "Aula 32",
    topicLabel: "Tradução de sentença",
    promptLabel: "Traduza: ὥστε εἴ τις ἐν Χριστῷ, καινὴ κτίσις.",
    promptSymbol: "2Co 5.17",
    promptHint: "Exercício final da aula 32.",
    options: [
      "De modo que se alguém está em Cristo, é nova criação.",
      "Portanto, aquele que está em Cristo será santo.",
      "Assim, estes em Cristo são os discípulos.",
      "De modo que se isto em Cristo, então justiça.",
    ],
    answer: "De modo que se alguém está em Cristo, é nova criação.",
    insight:
      "A correção da aula 32 segue essa linha: “se alguém em Cristo, nova criação”.",
    coaching:
      "Em εἴ τις, preserve o valor indefinido-condicional: “se alguém...”.",
  }),
];

const course = [
  {
    id: "module-1",
    order: 1,
    title: "Módulo 1 | Páginas 11-44",
    subtitle: "Do alfabeto ao presente do indicativo",
    description:
      "Módulo construído diretamente a partir das páginas 11 a 44 do livro-base, cobrindo alfabeto, sinais gráficos, introdução aos verbos e o presente do indicativo.",
    unlockThreshold: 0,
    note: "Recorte-base: lições 2 a 5 do livro, com deck completo de vocabulário disponível em paralelo.",
    lessons: [
      {
        id: "module-1-alpha",
        title: "O alfabeto grego",
        objective:
          "Reconhecer as letras do alfabeto grego, seus nomes básicos e algumas relações fundamentais entre forma e som.",
        explanation:
          "As páginas 11 a 16 apresentam as 24 letras do alfabeto grego, seus nomes, transliterações e observações iniciais de pronúncia para fins didáticos.",
        keyPoints: [
          "No período koiné, o alfabeto grego possui 24 letras.",
          "O livro apresenta maiúsculas, minúsculas, nome da letra, transliteração e som aproximado.",
          "A forma ς é usada apenas no fim de palavra; σ aparece no início e no meio.",
          "Algumas observações de pronúncia são dadas apenas para fins didáticos, especialmente em contexto introdutório.",
        ],
        xpReward: 30,
        challenges: [
          {
            type: "concept",
            promptLabel: "Quantas letras tem o alfabeto grego apresentado no módulo?",
            promptSymbol: "Alfabeto grego",
            promptHint:
              "A resposta aparece logo na abertura da seção O Alfabeto.",
            options: [
              "24",
              "22",
              "26",
              "28",
            ],
            answer: "24",
            insight:
              "O livro afirma explicitamente que, no período koiné, o alfabeto grego possuía 24 letras.",
          },
          {
            type: "letter-name",
            promptLabel: "Qual é o nome desta letra?",
            promptSymbol: "Β β",
            promptHint: "É a segunda letra do alfabeto grego.",
            options: ["beta", "delta", "eta", "kappa"],
            answer: "beta",
            insight:
              "Β β corresponde a beta, a segunda letra do alfabeto.",
          },
          {
            type: "letter-name",
            promptLabel: "Qual é o nome desta letra?",
            promptSymbol: "Ω ω",
            promptHint:
              "É a última letra do alfabeto grego.",
            options: [
              "ômega",
              "ômicron",
              "eta",
              "upsilon",
            ],
            answer: "ômega",
            insight:
              "Ω ω é ômega, tradicionalmente contrastada com o ômicron.",
          },
          {
            type: "concept",
            promptLabel: "Que forma de sigma se usa exclusivamente no final de palavra?",
            promptSymbol: "Sigma final",
            promptHint:
              "O livro distingue explicitamente a forma final da forma usada no início e no meio.",
            options: [
              "ς",
              "σ",
              "ξ",
              "ψ",
            ],
            answer: "ς",
            insight:
              "A forma ς é reservada ao fim da palavra, enquanto σ aparece no início e no meio.",
          },
          {
            type: "concept",
            promptLabel: "Qual transliteração introdutória o livro associa à letra θ?",
            promptSymbol: "Θ θ",
            promptHint: "A comparação de pronúncia é feita com o inglês thing.",
            options: ["th", "ph", "ch", "ps"],
            answer: "th",
            insight:
              "Theta é transliterada como th no esquema introdutório adotado no livro.",
          },
        ],
      },
      {
        id: "module-1-vowels",
        title: "Vogais, ditongos e consoantes",
        objective:
          "Distinguir vogais breves e longas, reconhecer os ditongos principais e identificar divisões básicas das consoantes.",
        explanation:
          "Ainda na seção do alfabeto, o livro introduz vogais, ditongos, iota subscrito/adscrito e as categorias centrais das consoantes gregas.",
        keyPoints: [
          "As vogais ε e ο são sempre breves; η e ω são sempre longas; α, ι e υ podem ser breves ou longas.",
          "O livro apresenta oito ditongos principais no grego introdutório.",
          "Depois de vogal longa, o iota pode aparecer subscrito ou adscrito sem ser pronunciado.",
          "As consoantes são organizadas em mudas, líquidas e sibilantes.",
        ],
        xpReward: 35,
        challenges: [
          {
            type: "concept",
            promptLabel: "Quais vogais são sempre breves segundo o livro?",
            promptSymbol: "Vogais breves",
            promptHint:
              "Procure o quadro que separa sempre breves, sempre longas e breves ou longas.",
            options: [
              "ε e ο",
              "η e ω",
              "α e υ",
              "ι e ω",
            ],
            answer: "ε e ο",
            insight:
              "O livro coloca ε e ο na classe das vogais sempre breves.",
          },
          {
            type: "concept",
            promptLabel: "Quais vogais são sempre longas?",
            promptSymbol: "Vogais longas",
            promptHint:
              "É o par alongado em relação a ε e ο.",
            options: [
              "η e ω",
              "ε e ο",
              "α e ι",
              "υ e ο",
            ],
            answer: "η e ω",
            insight:
              "O livro observa ainda que η e ω são formas alongadas de ε e ο.",
          },
          {
            type: "concept",
            promptLabel: "O que é o iota subscrito?",
            promptSymbol: "ᾳ, ῃ, ῳ",
            promptHint:
              "Pense no que acontece com o iota depois de uma vogal longa.",
            options: [
              "Um iota escrito debaixo de vogal longa e não pronunciado",
              "Uma vogal breve acrescentada ao final da palavra",
              "Um acento que substitui o agudo",
              "Uma forma especial de sigma",
            ],
            answer: "Um iota escrito debaixo de vogal longa e não pronunciado",
            insight:
              "O livro explica que, após vogal longa, o iota não se pronuncia e pode aparecer subscrito ou adscrito.",
          },
          {
            type: "concept",
            promptLabel: "Em ἄγγελος, que som o γ assume diante de gutural, conforme a observação do livro?",
            promptSymbol: "γ antes de γ, κ, χ",
            promptHint:
              "A regra é dada como dica de pronúncia.",
            options: [
              "Som de n",
              "Som de l",
              "Som de b",
              "Som de s",
            ],
            answer: "Som de n",
            insight:
              "O livro observa que γ antes de gutural soa como n, por isso ἄγγελος é lido aproximadamente ánguelos.",
          },
          {
            type: "concept",
            promptLabel: "A que grupo pertencem λ, μ, ν e ρ?",
            promptSymbol: "Classificação das consoantes",
            promptHint: "O livro apresenta três grandes grupos de consoantes.",
            options: ["Líquidas", "Sibilantes", "Mudas", "Ditongos"],
            answer: "Líquidas",
            insight:
              "λ, μ, ν e ρ formam o grupo das líquidas na classificação apresentada pelo livro.",
          },
        ],
      },
      {
        id: "module-1-syllables",
        title: "Sílabas e acentos",
        objective:
          "Entender como o livro explica divisão silábica e o funcionamento básico dos acentos no grego.",
        explanation:
          "As páginas 17 a 20 mostram como contar sílabas, reconhecer sílabas longas e breves e localizar os acentos agudo, grave e circunflexo.",
        keyPoints: [
          "Uma palavra grega tem tantas sílabas quantas vogais ou ditongos possuir.",
          "Uma sílaba longa contém vogal longa ou ditongo; uma sílaba breve contém vogal breve.",
          "O acento agudo pode cair em uma das três últimas sílabas; o grave só aparece na última.",
          "O circunflexo só aparece em sílaba longa e apenas na última ou penúltima.",
        ],
        xpReward: 40,
        challenges: [
          {
            type: "concept",
            promptLabel: "Quantas sílabas há em λόγοις, conforme o exemplo do livro?",
            promptSymbol: "λόγοις",
            promptHint:
              "O próprio texto explica isso ao observar uma vogal e um ditongo.",
            options: ["2", "1", "3", "4"],
            answer: "2",
            insight:
              "λόγοις tem duas sílabas porque contém uma vogal simples e um ditongo.",
          },
          {
            type: "concept",
            promptLabel: "Onde o acento agudo pode cair?",
            promptSymbol: "Acento agudo",
            promptHint:
              "O livro fala de sua influência máxima sobre três sílabas.",
            options: [
              "Em uma das três últimas sílabas",
              "Somente na última sílaba",
              "Somente na penúltima sílaba",
              "Em qualquer sílaba da palavra",
            ],
            answer: "Em uma das três últimas sílabas",
            insight:
              "O agudo pode cair na última, penúltima ou antepenúltima sílaba, respeitando as regras de quantidade silábica.",
          },
          {
            type: "concept",
            promptLabel: "Onde o acento grave pode aparecer?",
            promptSymbol: "Acento grave",
            promptHint:
              "Ele substitui o agudo final em contexto específico.",
            options: [
              "Somente na última sílaba",
              "Somente na penúltima sílaba",
              "Na última ou na penúltima",
              "Em qualquer sílaba longa",
            ],
            answer: "Somente na última sílaba",
            insight:
              "O grave só ocorre na última sílaba, normalmente quando uma palavra oxítona é seguida por outra sem pontuação.",
          },
          {
            type: "concept",
            promptLabel: "Em que tipo de sílaba o circunflexo pode aparecer?",
            promptSymbol: "Acento circunflexo",
            promptHint:
              "O livro impõe uma restrição ligada à quantidade vocálica.",
            options: [
              "Somente em sílaba longa",
              "Somente em sílaba breve",
              "Somente em monossílabos",
              "Somente em ditongos finais",
            ],
            answer: "Somente em sílaba longa",
            insight:
              "O circunflexo exige sílaba longa e só pode aparecer na última ou penúltima sílaba.",
          },
          {
            type: "concept",
            promptLabel: "O que acontece com o acento agudo final quando a palavra é seguida por outra palavra, sem pontuação?",
            promptSymbol: "Agudo final",
            promptHint:
              "O livro dá um nome específico ao acento que o substitui.",
            options: [
              "Transforma-se em grave",
              "Transforma-se em circunflexo",
              "Desaparece sempre",
              "Move-se para a penúltima",
            ],
            answer: "Transforma-se em grave",
            insight:
              "O agudo final cede lugar ao grave quando a palavra vem seguida de outra, sem pausa de pontuação.",
          },
        ],
      },
      {
        id: "module-1-signs",
        title: "Aspiração, trema e pontuação",
        objective:
          "Reconhecer os sinais gráficos complementares que afetam leitura, transliteração e segmentação.",
        explanation:
          "As páginas 21 a 24 tratam de aspiração, trema, apóstrofo, crase, coronis e sinais de pontuação gregos.",
        keyPoints: [
          "Toda palavra iniciada por vogal ou ditongo recebe aspiração.",
          "A aspiração áspera é transliterada com h; a branda não altera a transliteração.",
          "O trema marca que duas vogais juntas não formam ditongo.",
          "O ponto-e-vírgula grego corresponde ao ponto de interrogação em português.",
        ],
        xpReward: 40,
        challenges: [
          {
            type: "concept",
            promptLabel: "O que a aspiração áspera acrescenta na transliteração?",
            promptSymbol: "Aspiração áspera",
            promptHint:
              "O livro a compara ao som de h em algumas línguas modernas.",
            options: ["h", "s", "w", "n"],
            answer: "h",
            insight:
              "Na transliteração introdutória, a aspiração áspera é representada por h.",
          },
          {
            type: "concept",
            promptLabel: "Quando uma palavra começa com υ ou ρ, que aspiração ela leva?",
            promptSymbol: "υ / ρ iniciais",
            promptHint:
              "O livro afirma isso como regra direta.",
            options: [
              "Aspiração áspera",
              "Aspiração branda",
              "Nenhuma aspiração",
              "Trema obrigatório",
            ],
            answer: "Aspiração áspera",
            insight:
              "Segundo o livro, υ e ρ no início de palavra sempre levam aspiração áspera.",
          },
          {
            type: "concept",
            promptLabel: "Para que serve o trema no grego?",
            promptSymbol: "Trema",
            promptHint:
              "Ele impede que duas vogais sejam lidas como uma só unidade sonora.",
            options: [
              "Para indicar que duas vogais não formam ditongo",
              "Para marcar sílaba longa",
              "Para substituir a aspiração",
              "Para indicar voz média",
            ],
            answer: "Para indicar que duas vogais não formam ditongo",
            insight:
              "O trema marca leitura separada de vogais contíguas, como nos exemplos do livro.",
          },
          {
            type: "concept",
            promptLabel: "O que o apóstrofo normalmente sinaliza?",
            promptSymbol: "Apóstrofo",
            promptHint:
              "Pense na queda de uma vogal final breve antes de outra vogal.",
            options: [
              "Supressão de vogal final breve diante de vogal inicial",
              "Mudança de acento grave em agudo",
              "Início de ditongo impróprio",
              "Plural neutro de substantivos",
            ],
            answer: "Supressão de vogal final breve diante de vogal inicial",
            insight:
              "O apóstrofo marca elisão quando uma vogal final breve cai diante de outra vogal.",
          },
          {
            type: "concept",
            promptLabel: "A que sinal do português equivale o ponto-e-vírgula grego (;)?",
            promptSymbol: ";",
            promptHint:
              "No grego, esse valor não é o mesmo do português.",
            options: [
              "Ponto de interrogação",
              "Ponto final",
              "Ponto-e-vírgula",
              "Dois-pontos",
            ],
            answer: "Ponto de interrogação",
            insight:
              "O livro resume que o ponto-e-vírgula grego equivale ao nosso ponto de interrogação.",
          },
        ],
      },
      {
        id: "module-1-verbs-intro",
        title: "Verbos: introdução",
        objective:
          "Entender as categorias básicas do verbo grego antes de entrar na flexão do presente do indicativo.",
        explanation:
          "As páginas 25 a 34 explicam tempo, aspecto, modo, voz, pessoa, número, composição do verbo e as conjugações em -ω e -μι.",
        keyPoints: [
          "No grego, o tempo verbal expressa primariamente aspecto, e apenas secundariamente tempo cronológico no indicativo.",
          "Os aspectos centrais descritos são durativo, pontilear e resultante.",
          "Os modos principais apresentados são indicativo, subjuntivo, imperativo e optativo.",
          "O verbo é citado no léxico pela primeira pessoa do singular do presente do indicativo ativo.",
        ],
        xpReward: 45,
        challenges: [
          {
            type: "concept",
            promptLabel: "Qual é a função principal do tempo verbal grego segundo o livro?",
            promptSymbol: "Tempo verbal",
            promptHint:
              "A resposta envolve o modo como a ação é vista, não apenas quando ocorre.",
            options: [
              "Expressar o aspecto da ação",
              "Indicar somente passado, presente ou futuro",
              "Marcar o gênero do sujeito",
              "Substituir o pronome pessoal",
            ],
            answer: "Expressar o aspecto da ação",
            insight:
              "O livro insiste que o tempo verbal grego responde antes de tudo ao 'como?' da ação, isto é, ao seu aspecto.",
          },
          {
            type: "concept",
            promptLabel: "Que aspecto o presente verbal normalmente expressa?",
            promptSymbol: "Presente",
            promptHint:
              "Pense em uma ação em andamento, ainda não concluída.",
            options: [
              "Durativo ou linear",
              "Pontilear",
              "Resultante",
              "Terminativo",
            ],
            answer: "Durativo ou linear",
            insight:
              "O presente é descrito como ação contínua, em progresso, durativa ou linear.",
          },
          {
            type: "concept",
            promptLabel: "Que aspecto o aoristo expressa na apresentação introdutória?",
            promptSymbol: "Aoristo",
            promptHint:
              "O livro o descreve sem especificar duração interna da ação.",
            options: [
              "Pontilear",
              "Durativo",
              "Resultante",
              "Habitual contínuo",
            ],
            answer: "Pontilear",
            insight:
              "O aoristo é apresentado como ação simples, vista como um todo, sem especificação da duração.",
          },
          {
            type: "concept",
            promptLabel: "Como o livro descreve o perfeito em termos de aspecto?",
            promptSymbol: "Perfeito",
            promptHint:
              "A resposta combina ação passada e estado atual.",
            options: [
              "Resultante",
              "Somente durativo",
              "Somente futuro",
              "Somente pontilear",
            ],
            answer: "Resultante",
            insight:
              "O perfeito expressa um estado atual como resultado de uma ação concluída anteriormente.",
          },
          {
            type: "concept",
            promptLabel: "Em que forma o verbo costuma aparecer no léxico grego introdutório?",
            promptSymbol: "Forma lexical",
            promptHint:
              "Não é o infinitivo, como no português.",
            options: [
              "Primeira pessoa do singular do presente do indicativo ativo",
              "Infinitivo do presente ativo",
              "Terceira pessoa do singular do aoristo",
              "Particípio presente nominativo",
            ],
            answer: "Primeira pessoa do singular do presente do indicativo ativo",
            insight:
              "O livro contrasta isso com o português e usa λέγω como exemplo de forma lexical.",
          },
          {
            type: "concept",
            promptLabel: "Quais são as duas conjugações básicas destacadas no grego koiné?",
            promptSymbol: "Conjugações",
            promptHint:
              "A divisão é feita pela terminação da primeira pessoa singular.",
            options: [
              "Conjugação em -ω e conjugação em -μι",
              "Conjugação ativa e passiva",
              "Conjugação breve e longa",
              "Conjugação nominal e verbal",
            ],
            answer: "Conjugação em -ω e conjugação em -μι",
            insight:
              "O livro apresenta a conjugação em -ω como a mais frequente no NT, e a em -μι como a outra grande classe.",
          },
        ],
      },
      {
        id: "module-1-present-indicative",
        title: "Presente do indicativo",
        objective:
          "Reconhecer o significado básico e as terminações principais do presente do indicativo ativo, médio e passivo.",
        explanation:
          "As páginas 35 a 44 introduzem o presente do indicativo, o vocabulário inicial do bloco verbal e as flexões básicas das vozes ativa, média e passiva.",
        keyPoints: [
          "O presente do indicativo mantém o valor durativo e, no indicativo, pode também localizar a ação no presente.",
          "As terminações ativas do presente são um núcleo indispensável para o restante do curso.",
          "No presente, as terminações da voz média e da voz passiva são iguais.",
          "O verbo εἰμί tem flexão própria e precisa ser memorizado.",
        ],
        xpReward: 50,
        challenges: [
          {
            type: "concept",
            promptLabel: "Qual destas sequências traz as terminações primárias do presente do indicativo ativo?",
            promptSymbol: "Ativo",
            promptHint:
              "Pense na flexão de λέγω apresentada pelo livro.",
            options: [
              "-ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)",
              "-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται",
              "-σα, -σας, -σε, -σαμεν, -σατε, -σαν",
              "-μι, -ς, -σι, -μεν, -τε, -ασι",
            ],
            answer: "-ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)",
            insight:
              "Essas são as terminações primárias da voz ativa no presente do indicativo e devem ser memorizadas.",
          },
          {
            type: "concept",
            promptLabel: "Qual destas sequências traz as terminações do presente do indicativo médio/passivo?",
            promptSymbol: "Médio/Passivo",
            promptHint:
              "O livro ressalta que, no presente, as duas vozes compartilham a mesma flexão formal.",
            options: [
              "-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται",
              "-ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)",
              "-θην, -θης, -θη, -θημεν, -θητε, -θησαν",
              "-μην, -σο, -το, -μεθα, -σθε, -ντο",
            ],
            answer: "-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται",
            insight:
              "No presente do indicativo, média e passiva usam a mesma série de terminações; a diferença aparece no sentido.",
          },
          {
            type: "concept",
            promptLabel: "Qual é a terminação do infinitivo presente ativo?",
            promptSymbol: "Infinitivo ativo",
            promptHint:
              "O livro mostra isso na flexão de λέγω.",
            options: ["-ειν", "-εσθαι", "-σαι", "-μεν"],
            answer: "-ειν",
            insight:
              "O infinitivo presente ativo termina em -ειν, como em λέγειν.",
          },
          {
            type: "concept",
            promptLabel: "Qual é a terminação do infinitivo presente médio/passivo?",
            promptSymbol: "Infinitivo médio/passivo",
            promptHint:
              "O exemplo com λύω ajuda a lembrar isso.",
            options: ["-εσθαι", "-ειν", "-ναι", "-ουσιν"],
            answer: "-εσθαι",
            insight:
              "O infinitivo presente médio/passivo termina em -εσθαι, como em λύεσθαι.",
          },
          {
            type: "concept",
            promptLabel: "Qual forma corresponde à terceira pessoa do singular de εἰμί no presente do indicativo?",
            promptSymbol: "εἰμί",
            promptHint:
              "É a forma usada para 'ele/ela é'.",
            options: ["ἐστίν", "εἰμί", "ἐστέ", "εἰσί(ν)"],
            answer: "ἐστίν",
            insight:
              "ἐστίν é a terceira pessoa singular do presente do indicativo de εἰμί.",
          },
          {
            type: "gloss",
            promptLabel: "Qual glosa corresponde melhor ao vocábulo λέγω?",
            promptSymbol: "λέγω",
            promptHint:
              "É um dos verbos-base do vocabulário introdutório do presente do indicativo.",
            options: [
              "eu digo, falo",
              "eu escrevo",
              "eu recebo",
              "eu salvo",
            ],
            answer: "eu digo, falo",
            insight:
              "λέγω aparece como verbo-base da lição e seu reconhecimento será recorrente ao longo do curso.",
          },
        ],
      },
    ],
  },
  {
    id: "module-2",
    order: 2,
    title: "Lição 6 | Presente do Subjuntivo",
    subtitle: "Ativo, médio e passivo",
    description:
      "Bloco jogável sobre formação, flexão e usos do presente do subjuntivo, com foco em leitura contextual e não só em tabela.",
    unlockThreshold: 0,
    note: "Implementado: vogal temática alongada, subjuntivo de εἰμί, ἵνα + subjuntivo e usos especiais.",
    lessons: module2Lessons,
  },
  {
    id: "module-3",
    order: 3,
    title: "Lição 7 | Futuro do Indicativo",
    subtitle: "Ativo e médio",
    description:
      "Módulo dedicado ao sigma temporal, às contrações do futuro e à leitura de formas regulares e irregulares.",
    unlockThreshold: 0,
    note: "Implementado: futuro ativo e médio, verbos contraídos, radicais líquidos, futuro de εἰμί e μέλλω + infinitivo.",
    lessons: module3Lessons,
  },
  {
    id: "module-4",
    order: 4,
    title: "Lição 8 | Substantivos: Introdução",
    subtitle: "Entrada no sistema nominal",
    description:
      "Entrada estruturada no sistema nominal: casos, artigo, número, gênero e a lógica das funções sintáticas.",
    unlockThreshold: 0,
    note: "Implementado: mapa dos casos, agrupamento funcional em oito casos e o artigo como bússola morfológica.",
    lessons: module4Lessons,
  },
  {
    id: "module-5",
    order: 5,
    title: "Lição 9 | Segunda Declinação",
    subtitle: "Temas em -o",
    description:
      "Primeiro grande laboratório de declinação do app, com paradigmas vivos, leitura de casos e puzzles morfológicos.",
    unlockThreshold: 0,
    note: "Implementado: masculinos, femininos e neutros da 2a declinação, com puzzles de forma, caso, número e função.",
    lessons: module5Lessons,
  },
  {
    id: "module-6",
    order: 6,
    title: "Lição 10 | Primeira Declinação",
    subtitle: "Temas em -a",
    description:
      "Segundo grande laboratório nominal do curso, agora com grupos em -α, -η e masculinos da 1a declinação.",
    unlockThreshold: 0,
    note: "Implementado: grupos femininos, masculinos em -ας/-ης e puzzles didáticos de contraste morfológico.",
    lessons: module6Lessons,
  },
  {
    id: "module-7",
    order: 7,
    title: "Módulo Extra | Vocabulário do Aoristo",
    subtitle: "Lições 16 e 17",
    description:
      "Bloco suplementar para memorizar o vocabulário e as formas mais importantes associadas ao aoristo nas lições 16 e 17.",
    unlockThreshold: 0,
    note: "Suplementar: este módulo pode ser aberto a qualquer momento e também aparece no seletor de cartões.",
    lessons: [
      {
        id: "module-7-aorist-second",
        title: "Lição 16 | Formas-chave do 2º aoristo",
        objective:
          "Reconhecer as formas frequentes do 2º aoristo e ligá-las ao verbo lexical que está por trás delas.",
        explanation:
          "A lição 16 introduz o 2º aoristo e exige memorização ativa de formas muito frequentes do Novo Testamento. Aqui, o foco é associar a forma aorística ao verbo-base.",
        keyPoints: [
          "O 2º aoristo costuma usar radical diferente do presente lexical.",
          "A melhor fixação vem da associação entre forma irregular, verbo-base e sentido principal.",
          "As formas deste módulo foram extraídas do apêndice E do livro-base, marcadas em §16.",
        ],
        xpReward: 70,
        challenges: buildSecondAoristChallenges(aoristLesson16Cards),
      },
      {
        id: "module-7-aorist-first-vocab",
        title: "Lição 17 | Vocabulário do bloco do aoristo",
        objective:
          "Fixar o vocabulário novo que acompanha a lição 17 e reforça o bloco de ensino do aoristo.",
        explanation:
          "A lição 17 expande o estudo do aoristo e acrescenta vocabulário importante para leitura contínua do NT. Este módulo suplementar trabalha exatamente as entradas marcadas no apêndice como §17.",
        keyPoints: [
          "O vocabulário da lição 17 mistura verbos, partículas, advérbios e conectivos muito frequentes.",
          "A memorização deste bloco ajuda a leitura das formas do aoristo em contexto real.",
          "A mesma coleção está disponível no painel de cartões, isolada das demais entradas do curso.",
        ],
        xpReward: 90,
        challenges: buildAoristVocabularyChallenges(aoristLesson17Cards),
      },
    ],
  },
];

const ALL_LESSON_IDS = course.flatMap((module) =>
  module.lessons.map((lesson) => lesson.id)
);

const STORAGE_KEY = "grego-game-progress-v3";

const defaultProgress = {
  level: 1,
  xp: 0,
  answered: 0,
  correct: 0,
  unlockedLessons: ALL_LESSON_IDS,
  completedLessons: [],
  currentLessonId: "module-1-alpha",
  lessonChallengeIndex: 0,
  masteredCardIds: [],
  currentCardId: vocabularyCards[0]?.id || null,
  vocabDeckId: "full",
  vocabSearch: "",
  vocabFilter: "all",
  declensionChartId: declensionCharts[0]?.id || "article",
  declensionTrainerMode: "form",
  declensionAnswered: 0,
  declensionCorrect: 0,
  declensionStreak: 0,
  declensionBestStreak: 0,
  studyMode: "journey",
  intensiveTopicId: "all",
  intensiveAnswered: 0,
  intensiveCorrect: 0,
  intensiveStreak: 0,
  intensiveBestStreak: 0,
  intensiveCurrentQuestionId: intensiveQuestionBank[0]?.id || null,
};

const refs = {
  currentLevel: document.querySelector("#current-level"),
  currentRank: document.querySelector("#current-rank"),
  xpTotal: document.querySelector("#xp-total"),
  accuracyRate: document.querySelector("#accuracy-rate"),
  cardsMastered: document.querySelector("#cards-mastered"),
  cardsMasteredMeta: document.querySelector("#cards-mastered-meta"),
  tabJourneyButton: document.querySelector("#tab-journey-button"),
  tabIntensiveButton: document.querySelector("#tab-intensive-button"),
  modeTabButtons: Array.from(document.querySelectorAll(".mode-tab")),
  paneContents: Array.from(document.querySelectorAll(".pane-content")),
  modulePath: document.querySelector("#module-path"),
  lessonTitle: document.querySelector("#lesson-title"),
  lessonModule: document.querySelector("#lesson-module"),
  lessonProgress: document.querySelector("#lesson-progress"),
  lessonObjective: document.querySelector("#lesson-objective"),
  lessonExplanation: document.querySelector("#lesson-explanation"),
  lessonKeyPoints: document.querySelector("#lesson-key-points"),
  challengeCounter: document.querySelector("#challenge-counter"),
  promptPanel: document.querySelector("#prompt-panel"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  nextButton: document.querySelector("#next-button"),
  resumeButton: document.querySelector("#resume-button"),
  resetButton: document.querySelector("#reset-button"),
  declensionChartSelect: document.querySelector("#declension-chart-select"),
  declensionModeSelect: document.querySelector("#declension-mode-select"),
  declensionAccuracy: document.querySelector("#declension-accuracy"),
  declensionStreak: document.querySelector("#declension-streak"),
  declensionBestStreak: document.querySelector("#declension-best-streak"),
  declensionBoardTitle: document.querySelector("#declension-board-title"),
  declensionBoardNote: document.querySelector("#declension-board-note"),
  declensionTableWrap: document.querySelector("#declension-table-wrap"),
  declensionCaseGuide: document.querySelector("#declension-case-guide"),
  declensionCounter: document.querySelector("#declension-counter"),
  declensionPrompt: document.querySelector("#declension-prompt"),
  declensionChoices: document.querySelector("#declension-choices"),
  declensionFeedback: document.querySelector("#declension-feedback"),
  declensionNextButton: document.querySelector("#declension-next-button"),
  vocabDeckSelect: document.querySelector("#vocab-deck-select"),
  vocabSearch: document.querySelector("#vocab-search"),
  filterChips: Array.from(document.querySelectorAll(".filter-chip")),
  flashcard: document.querySelector("#flashcard"),
  vocabChoices: document.querySelector("#vocab-choices"),
  vocabFeedback: document.querySelector("#vocab-feedback"),
  vocabTerm: document.querySelector("#vocab-term"),
  vocabPosition: document.querySelector("#vocab-position"),
  vocabFrequency: document.querySelector("#vocab-frequency"),
  vocabGloss: document.querySelector("#vocab-gloss"),
  vocabPage: document.querySelector("#vocab-page"),
  toggleMasteredButton: document.querySelector("#toggle-mastered-button"),
  nextCardButton: document.querySelector("#next-card-button"),
  randomCardButton: document.querySelector("#random-card-button"),
  vocabResultsCount: document.querySelector("#vocab-results-count"),
  vocabResults: document.querySelector("#vocab-results"),
  intensiveTopicSelect: document.querySelector("#intensive-topic-select"),
  intensiveAnswered: document.querySelector("#intensive-answered"),
  intensiveAccuracy: document.querySelector("#intensive-accuracy"),
  intensiveStreak: document.querySelector("#intensive-streak"),
  intensiveBestStreak: document.querySelector("#intensive-best-streak"),
  intensiveLessonChip: document.querySelector("#intensive-lesson-chip"),
  intensivePromptPanel: document.querySelector("#intensive-prompt-panel"),
  intensiveChoices: document.querySelector("#intensive-choices"),
  intensiveFeedback: document.querySelector("#intensive-feedback"),
  intensiveNextButton: document.querySelector("#intensive-next-button"),
  intensiveRandomButton: document.querySelector("#intensive-random-button"),
  intensiveResetButton: document.querySelector("#intensive-reset-button"),
};

const state = loadProgress();
let interactionLocked = false;
let isCardRevealed = false;
let vocabChallengeKey = "";
let vocabChoiceOptions = [];
let vocabChoiceLocked = false;
let vocabSelectedOption = null;
let vocabWasCorrect = null;
let declensionChallenge = null;
let declensionChoiceLocked = false;
let declensionSelectedOption = null;
let declensionWasCorrect = null;
let intensiveChoiceLocked = false;
let intensiveSelectedOption = null;
let intensiveWasCorrect = null;

document.title = `GREGO | ${sourceBook.title}`;

refs.nextButton.addEventListener("click", handleNextChallenge);
refs.resumeButton.addEventListener("click", () => {
  syncCurrentLesson();
  render();
  refs.lessonTitle.scrollIntoView({ behavior: "smooth", block: "start" });
});

refs.resetButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Deseja apagar o progresso das lições e do vocabulário deste módulo?"
  );

  if (!confirmed) {
    return;
  }

  Object.assign(state, clone(defaultProgress));
  interactionLocked = false;
  resetVocabularyChallengeState();
  resetDeclensionTrainerState(true);
  resetIntensiveState();
  saveProgress();
  render();
});

refs.vocabDeckSelect.addEventListener("change", (event) => {
  state.vocabDeckId = event.target.value || "full";
  state.currentCardId = getActiveVocabularyCards()[0]?.id || null;
  resetVocabularyChallengeState();
  renderStats();
  renderVocabulary();
  saveProgress();
});

refs.vocabSearch.addEventListener("input", (event) => {
  state.vocabSearch = event.target.value.trim();
  resetVocabularyChallengeState();
  renderVocabulary();
  saveProgress();
});

refs.filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.vocabFilter = chip.dataset.filter || "all";
    resetVocabularyChallengeState();
    renderVocabulary();
    saveProgress();
  });
});

refs.declensionChartSelect?.addEventListener("change", (event) => {
  state.declensionChartId = getDeclensionChartById(event.target.value || "").id;
  resetDeclensionTrainerState(true);
  renderDeclensionLab();
  saveProgress();
});

refs.declensionModeSelect?.addEventListener("change", (event) => {
  const nextMode = event.target.value === "identify" ? "identify" : "form";
  state.declensionTrainerMode = nextMode;
  resetDeclensionTrainerState(true);
  renderDeclensionLab();
  saveProgress();
});

refs.declensionNextButton?.addEventListener("click", () => {
  resetDeclensionTrainerState(true);
  renderDeclensionLab();
  saveProgress();
});

refs.toggleMasteredButton.addEventListener("click", () => {
  const filteredCards = getFilteredCards();
  const currentCard = getCurrentCard(filteredCards);

  if (!currentCard) {
    return;
  }

  const isMastered = state.masteredCardIds.includes(currentCard.id);

  if (isMastered) {
    state.masteredCardIds = state.masteredCardIds.filter((id) => id !== currentCard.id);
  } else {
    state.masteredCardIds = [...state.masteredCardIds, currentCard.id];
  }

  renderStats();
  renderVocabulary();
  saveProgress();
});

refs.nextCardButton.addEventListener("click", () => {
  const filteredCards = getFilteredCards();

  if (!filteredCards.length) {
    return;
  }

  const currentIndex = filteredCards.findIndex((card) => card.id === state.currentCardId);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % filteredCards.length : 0;
  state.currentCardId = filteredCards[nextIndex].id;
  resetVocabularyChallengeState();
  renderVocabulary();
  saveProgress();
});

refs.randomCardButton.addEventListener("click", () => {
  const filteredCards = getFilteredCards();

  if (!filteredCards.length) {
    return;
  }

  if (filteredCards.length === 1) {
    state.currentCardId = filteredCards[0].id;
  } else {
    let randomCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
    while (randomCard.id === state.currentCardId) {
      randomCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
    }
    state.currentCardId = randomCard.id;
  }

  resetVocabularyChallengeState();
  renderVocabulary();
  saveProgress();
});

refs.tabJourneyButton?.addEventListener("click", () => {
  state.studyMode = "journey";
  renderStudyMode();
  saveProgress();
});

refs.tabIntensiveButton?.addEventListener("click", () => {
  state.studyMode = "intensive";
  renderStudyMode();
  renderIntensive();
  saveProgress();
});

refs.intensiveTopicSelect?.addEventListener("change", (event) => {
  state.intensiveTopicId = getIntensiveTopicById(event.target.value || "all").id;
  const scopedQuestions = getIntensiveQuestionsByTopic(state.intensiveTopicId);
  state.intensiveCurrentQuestionId = scopedQuestions[0]?.id || null;
  resetIntensiveState();
  renderIntensive();
  saveProgress();
});

refs.intensiveNextButton?.addEventListener("click", () => {
  goToNextIntensiveQuestion({ random: false });
});

refs.intensiveRandomButton?.addEventListener("click", () => {
  goToNextIntensiveQuestion({ random: true });
});

refs.intensiveResetButton?.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Deseja zerar apenas o desempenho do Intensivo para Prova?"
  );

  if (!confirmed) {
    return;
  }

  state.intensiveAnswered = 0;
  state.intensiveCorrect = 0;
  state.intensiveStreak = 0;
  state.intensiveBestStreak = 0;
  const scopedQuestions = getIntensiveQuestionsByTopic(state.intensiveTopicId);
  state.intensiveCurrentQuestionId = scopedQuestions[0]?.id || null;
  resetIntensiveState();
  renderIntensive();
  saveProgress();
});

syncCurrentLesson();
syncCurrentCard(getFilteredCards());
syncCurrentIntensiveQuestion();
render();

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createSeedFromString(value) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash) || 1;
}

function createSeededRandom(seedValue) {
  let seed = seedValue >>> 0;

  return () => {
    seed += 0x6d2b79f5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getOrderedOptions(challenge, lesson, challengeIndex) {
  const options = [...challenge.options];
  const wrongOptions = options.filter((option) => option !== challenge.answer);
  const correctIndexSeed = createSeedFromString(
    `${lesson.id}:${challengeIndex}:${challenge.answer}`
  );
  const wrongOptionsSeed = createSeedFromString(
    `${lesson.id}:${challengeIndex}:${challenge.promptLabel}:wrongs`
  );
  const random = createSeededRandom(wrongOptionsSeed);
  const shuffledWrongOptions = [...wrongOptions];

  for (let index = shuffledWrongOptions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffledWrongOptions[index], shuffledWrongOptions[swapIndex]] = [
      shuffledWrongOptions[swapIndex],
      shuffledWrongOptions[index],
    ];
  }

  const correctIndex = correctIndexSeed % options.length;
  const orderedOptions = [];
  let wrongOptionIndex = 0;

  for (let index = 0; index < options.length; index += 1) {
    if (index === correctIndex) {
      orderedOptions.push(challenge.answer);
    } else {
      orderedOptions.push(shuffledWrongOptions[wrongOptionIndex]);
      wrongOptionIndex += 1;
    }
  }

  return orderedOptions;
}

function shouldUseGreekFont(value) {
  const text = String(value || "");
  return /[\u0370-\u03ff\u1f00-\u1fff]/u.test(text) || /[()/=+|\\ö]/u.test(text);
}

function splitChoiceLabel(value) {
  const text = String(value || "");

  if (!text.includes("|")) {
    return null;
  }

  const segments = text.split("|").map((segment) => segment.trim()).filter(Boolean);

  if (segments.length !== 2) {
    return null;
  }

  const [greek, translation] = segments;

  if (!greek || !translation) {
    return null;
  }

  if (shouldUseGreekFont(translation)) {
    return null;
  }

  return { greek, translation };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function getChoiceLabelMarkup(value) {
  const splitLabel = splitChoiceLabel(value);

  if (splitLabel) {
    return `
      <span class="choice-button__content">
        <span class="choice-button__greek greek-text">${escapeHtml(splitLabel.greek)}</span>
        <span class="choice-button__translation">${escapeHtml(splitLabel.translation)}</span>
      </span>
    `;
  }

  if (shouldUseGreekFont(value)) {
    return `<span class="choice-button__greek greek-text">${escapeHtml(value)}</span>`;
  }

  return `<span class="choice-button__translation">${escapeHtml(value)}</span>`;
}

function getChallengeCoachingMarkup(challenge) {
  if (!challenge?.coaching) {
    return "";
  }

  return `<span class="feedback-coach"><strong>Como reconhecer:</strong> ${escapeHtml(
    challenge.coaching
  )}</span>`;
}

function normalizeForSearch(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("ς", "σ")
    .replace(/[’'`´]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeOcrBetaCode(value) {
  let text = String(value || "")
    .replaceAll("ö", ")/")
    .replaceAll("Ö", "(/")
    .replaceAll("ü", ")=")
    .replaceAll("Ü", "(=");

  let previous = "";

  while (previous !== text) {
    previous = text;
    text = text.replace(/([A-Za-z*()/=+|])\s+([A-Za-z*])/g, "$1$2");
  }

  return text;
}

function betaCodeToGreekBase(value) {
  const source = normalizeOcrBetaCode(value)
    .toLowerCase()
    .replace(/[*()/\\=|+[\]{}<>.,;:!?_-]/g, "");
  const map = {
    a: "α",
    b: "β",
    g: "γ",
    d: "δ",
    e: "ε",
    z: "ζ",
    h: "η",
    q: "θ",
    i: "ι",
    k: "κ",
    l: "λ",
    m: "μ",
    n: "ν",
    c: "ξ",
    o: "ο",
    p: "π",
    r: "ρ",
    s: "σ",
    t: "τ",
    u: "υ",
    f: "φ",
    x: "χ",
    y: "ψ",
    w: "ω",
  };

  return source
    .split("")
    .map((character) => (character === "j" ? "ς" : map[character] || character))
    .join("");
}

function convertBetaCodeToken(token) {
  const letterMap = {
    a: "α",
    b: "β",
    g: "γ",
    d: "δ",
    e: "ε",
    z: "ζ",
    h: "η",
    q: "θ",
    i: "ι",
    k: "κ",
    l: "λ",
    m: "μ",
    n: "ν",
    c: "ξ",
    o: "ο",
    p: "π",
    r: "ρ",
    s: "σ",
    t: "τ",
    u: "υ",
    f: "φ",
    x: "χ",
    y: "ψ",
    w: "ω",
    j: "σ",
  };
  const diacriticMap = {
    ")": "\u0313",
    "(": "\u0314",
    "/": "\u0301",
    "\\": "\u0300",
    "=": "\u0342",
    "+": "\u0308",
    "|": "\u0345",
  };
  let output = "";
  let uppercasePending = false;

  for (let index = 0; index < token.length; index += 1) {
    const character = token[index];

    if (character === "*") {
      uppercasePending = true;
      continue;
    }

    const lowerCharacter = character.toLowerCase();

    if (!letterMap[lowerCharacter]) {
      output += character;
      continue;
    }

    let baseLetter = letterMap[lowerCharacter];
    const hasNextLetter = /[A-Za-z]/.test(token.slice(index + 1));

    if ((lowerCharacter === "s" || lowerCharacter === "j") && !uppercasePending) {
      baseLetter = hasNextLetter ? "σ" : "ς";
    }

    if (uppercasePending) {
      baseLetter = baseLetter.toUpperCase();
      uppercasePending = false;
    }

    let marks = "";
    while (index + 1 < token.length && diacriticMap[token[index + 1]]) {
      marks += diacriticMap[token[index + 1]];
      index += 1;
    }

    output += `${baseLetter}${marks}`;
  }

  return output.normalize("NFC");
}

function convertBetaCodeToGreek(value) {
  const text = String(value || "");

  if (!text) {
    return text;
  }

  if (/[\u0370-\u03ff\u1f00-\u1fff]/u.test(text)) {
    return text;
  }

  const normalized = normalizeOcrBetaCode(text);

  return normalized.replace(/[*A-Za-z()/=+|]+/g, (token) => {
    if (!/[A-Za-z]/.test(token)) {
      return token;
    }

    return convertBetaCodeToken(token);
  });
}

function getCardDisplayTerm(card) {
  return convertBetaCodeToGreek(card.term);
}

function getCardDisplayTermWithFrequency(card) {
  const baseTerm = getCardDisplayTerm(card);
  return card.frequency ? `${baseTerm} (${card.frequency})` : baseTerm;
}

function getSearchableCardValues(card) {
  return [
    card.term,
    card.displayTerm,
    card.gloss,
    card.lemma,
    card.lemmaGloss,
    convertBetaCodeToGreek(card.term),
    convertBetaCodeToGreek(card.displayTerm),
    convertBetaCodeToGreek(card.lemma),
    betaCodeToGreekBase(card.term),
    betaCodeToGreekBase(card.displayTerm),
    betaCodeToGreekBase(card.lemma),
  ]
    .filter(Boolean)
    .map((value) => normalizeForSearch(value));
}

function resetVocabularyChallengeState() {
  isCardRevealed = false;
  vocabChallengeKey = "";
  vocabChoiceOptions = [];
  vocabChoiceLocked = false;
  vocabSelectedOption = null;
  vocabWasCorrect = null;
}

function getVocabularyDeckById(deckId) {
  return vocabularyDecks.find((deck) => deck.id === deckId) || vocabularyDecks[0];
}

function getActiveVocabularyDeck() {
  return getVocabularyDeckById(state?.vocabDeckId || "full");
}

function getActiveVocabularyCards() {
  return getActiveVocabularyDeck().cards;
}

function getVocabularyChoiceOptions(currentCard) {
  const activeCards = getActiveVocabularyCards();
  const correctAnswer = currentCard.gloss;
  const distractorPool = activeCards.filter(
    (card) =>
      card.id !== currentCard.id &&
      normalizeForSearch(card.gloss) !== normalizeForSearch(correctAnswer)
  );
  const distractorSeed = createSeedFromString(
    `${getActiveVocabularyDeck().id}:${currentCard.id}:distractors`
  );
  const distractorRandom = createSeededRandom(distractorSeed);
  const shuffledPool = [...distractorPool];

  for (let index = shuffledPool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(distractorRandom() * (index + 1));
    [shuffledPool[index], shuffledPool[swapIndex]] = [
      shuffledPool[swapIndex],
      shuffledPool[index],
    ];
  }

  const distractors = [];

  shuffledPool.forEach((card) => {
    if (distractors.length >= 3) {
      return;
    }

    if (!distractors.includes(card.gloss)) {
      distractors.push(card.gloss);
    }
  });

  const options = [correctAnswer, ...distractors];
  const answerIndexSeed = createSeedFromString(
    `${getActiveVocabularyDeck().id}:${currentCard.id}:answer-index`
  );
  const correctIndex = answerIndexSeed % options.length;
  const orderedOptions = [];
  let distractorIndex = 0;

  for (let index = 0; index < options.length; index += 1) {
    if (index === correctIndex) {
      orderedOptions.push(correctAnswer);
    } else {
      orderedOptions.push(distractors[distractorIndex]);
      distractorIndex += 1;
    }
  }

  return orderedOptions;
}

function ensureVocabularyChallenge(currentCard) {
  const challengeKey = `${getActiveVocabularyDeck().id}:${currentCard.id}`;

  if (vocabChallengeKey === challengeKey) {
    return;
  }

  vocabChallengeKey = challengeKey;
  vocabChoiceOptions = getVocabularyChoiceOptions(currentCard);
  vocabChoiceLocked = false;
  vocabSelectedOption = null;
  vocabWasCorrect = null;
  isCardRevealed = false;
}

function handleVocabularyChoice(option, currentCard) {
  if (vocabChoiceLocked) {
    return;
  }

  vocabChoiceLocked = true;
  vocabSelectedOption = option;
  vocabWasCorrect = option === currentCard.gloss;
  isCardRevealed = true;
  renderVocabulary();
  saveProgress();
}

function getDeclensionCaseMeta(caseId) {
  return (
    DECLENSION_CASES.find((caseMeta) => caseMeta.id === caseId) ||
    DECLENSION_CASES[0]
  );
}

function getDeclensionChartById(chartId) {
  return (
    declensionCharts.find((chart) => chart.id === chartId) || declensionCharts[0]
  );
}

function getActiveDeclensionChart() {
  return getDeclensionChartById(state?.declensionChartId || declensionCharts[0].id);
}

function getDeclensionEntries(chart) {
  const entries = [];

  chart.rows.forEach((row) => {
    const caseMeta = getDeclensionCaseMeta(row.caseId);

    DECLENSION_NUMBERS.forEach((numberMeta) => {
      DECLENSION_GENDERS.forEach((genderMeta) => {
        const form = row[numberMeta.id][genderMeta.id];

        if (!form) {
          return;
        }

        entries.push({
          form,
          caseId: row.caseId,
          caseMeta,
          numberId: numberMeta.id,
          numberLabel: numberMeta.label,
          genderId: genderMeta.id,
          genderLabel: genderMeta.label,
          genderShort: genderMeta.short,
        });
      });
    });
  });

  return entries;
}

function formatDeclensionAnalysis(entry) {
  return `${entry.caseMeta.label} • ${entry.numberLabel} • ${entry.genderLabel}`;
}

function getUniqueFormEntries(entries) {
  const formCounts = new Map();
  entries.forEach((entry) => {
    formCounts.set(entry.form, (formCounts.get(entry.form) || 0) + 1);
  });

  return entries.filter((entry) => formCounts.get(entry.form) === 1);
}

function shuffleArray(values) {
  const copy = [...values];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function buildChallengeOptions(answer, distractors) {
  const uniqueDistractors = Array.from(new Set(distractors)).filter(
    (option) => option !== answer
  );
  const pickedDistractors = shuffleArray(uniqueDistractors).slice(0, 3);
  return shuffleArray([answer, ...pickedDistractors]);
}

function createDeclensionChallenge() {
  const chart = getActiveDeclensionChart();
  const entries = getDeclensionEntries(chart);
  const mode = state.declensionTrainerMode === "identify" ? "identify" : "form";

  if (!entries.length) {
    return null;
  }

  if (mode === "identify") {
    const identifyPool = getUniqueFormEntries(entries);
    const pool = identifyPool.length ? identifyPool : entries;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    const answer = formatDeclensionAnalysis(entry);
    const distractors = entries
      .map((candidate) => formatDeclensionAnalysis(candidate))
      .filter((candidate) => candidate !== answer);

    return {
      chartId: chart.id,
      mode,
      entry,
      answer,
      options: buildChallengeOptions(answer, distractors),
      promptLabel: "Qual análise morfológica melhor descreve esta forma?",
      promptSymbol: entry.form,
      promptHint:
        "Leia a forma no quadro e identifique caso, número e gênero com precisão.",
    };
  }

  const entry = entries[Math.floor(Math.random() * entries.length)];
  const answer = entry.form;
  const distractors = entries.map((candidate) => candidate.form).filter(
    (candidate) => candidate !== answer
  );

  return {
    chartId: chart.id,
    mode,
    entry,
    answer,
    options: buildChallengeOptions(answer, distractors),
    promptLabel: "Selecione a forma correta para esta célula do quadro.",
    promptSymbol: `${entry.caseMeta.abbr} • ${entry.numberLabel} • ${entry.genderShort}`,
    promptHint:
      "Comece pela linha do caso, depois confirme a coluna de número e gênero.",
  };
}

function getDeclensionInsight(challenge) {
  const entry = challenge.entry;

  if (challenge.mode === "identify") {
    return `${entry.form} corresponde a ${formatDeclensionAnalysis(entry)}. ${entry.caseMeta.functionHint}`;
  }

  return `${entry.form} ocupa a célula ${entry.caseMeta.label} ${entry.numberLabel.toLowerCase()} ${entry.genderLabel.toLowerCase()}. ${entry.caseMeta.functionHint}`;
}

function resetDeclensionTrainerState(forceNewChallenge = false) {
  if (forceNewChallenge || !declensionChallenge) {
    declensionChallenge = createDeclensionChallenge();
  }

  declensionChoiceLocked = false;
  declensionSelectedOption = null;
  declensionWasCorrect = null;
}

function handleDeclensionChoice(option) {
  if (!declensionChallenge || declensionChoiceLocked) {
    return;
  }

  declensionChoiceLocked = true;
  declensionSelectedOption = option;
  declensionWasCorrect = option === declensionChallenge.answer;

  state.declensionAnswered += 1;

  if (declensionWasCorrect) {
    state.declensionCorrect += 1;
    state.declensionStreak += 1;
    state.declensionBestStreak = Math.max(
      state.declensionBestStreak,
      state.declensionStreak
    );
  } else {
    state.declensionStreak = 0;
  }

  renderDeclensionLab();
  saveProgress();
}

function renderDeclensionTable(chart) {
  const headTop = `
    <tr>
      <th rowspan="2">Casos</th>
      <th colspan="3">Singular</th>
      <th colspan="3">Plural</th>
    </tr>
  `;

  const headBottom = `
    <tr>
      <th>Masc.</th>
      <th>Fem.</th>
      <th>Neutro</th>
      <th>Masc.</th>
      <th>Fem.</th>
      <th>Neutro</th>
    </tr>
  `;

  const body = chart.rows
    .map((row) => {
      const caseMeta = getDeclensionCaseMeta(row.caseId);
      const cellValues = [
        {
          form: row.singular.masc,
          gloss: row.glosses?.singular?.masc || "",
        },
        {
          form: row.singular.fem,
          gloss: row.glosses?.singular?.fem || "",
        },
        {
          form: row.singular.neut,
          gloss: row.glosses?.singular?.neut || "",
        },
        {
          form: row.plural.masc,
          gloss: row.glosses?.plural?.masc || "",
        },
        {
          form: row.plural.fem,
          gloss: row.glosses?.plural?.fem || "",
        },
        {
          form: row.plural.neut,
          gloss: row.glosses?.plural?.neut || "",
        },
      ];

      const cells = cellValues
        .map((cell) => {
          if (!cell.form) {
            return '<td class="declension-empty">—</td>';
          }

          const displayForm = convertBetaCodeToGreek(cell.form);
          const formClass = shouldUseGreekFont(displayForm)
            ? "declension-cell__greek greek-text"
            : "declension-cell__greek";
          const glossMarkup = cell.gloss
            ? `<span class="declension-cell__translation">${escapeHtml(cell.gloss)}</span>`
            : "";

          return `
            <td class="declension-cell">
              <span class="${formClass}">${escapeHtml(displayForm)}</span>
              ${glossMarkup}
            </td>
          `;
        })
        .join("");

      return `
        <tr>
          <th scope="row">
            <span class="declension-case-cell__abbr">${caseMeta.abbr}</span>
            <span class="declension-case-cell__gloss">${caseMeta.directGloss}</span>
          </th>
          ${cells}
        </tr>
      `;
    })
    .join("");

  return `
    <table class="declension-table">
      <thead>
        ${headTop}
        ${headBottom}
      </thead>
      <tbody>
        ${body}
      </tbody>
    </table>
  `;
}

function renderDeclensionCaseGuide() {
  refs.declensionCaseGuide.innerHTML = DECLENSION_CASES.map(
    (caseMeta) => `
      <div class="declension-case-guide__item">
        <span class="declension-case-guide__tag">${caseMeta.abbr}</span>
        <span><strong>${caseMeta.label} (${caseMeta.directGloss}):</strong> ${caseMeta.functionHint}</span>
      </div>
    `
  ).join("");
}

function renderDeclensionLab() {
  if (!refs.declensionTableWrap) {
    return;
  }

  const chart = getActiveDeclensionChart();

  refs.declensionChartSelect.innerHTML = declensionCharts
    .map((declensionChart) => {
      return `<option value="${declensionChart.id}">${declensionChart.label}</option>`;
    })
    .join("");
  refs.declensionChartSelect.value = chart.id;
  refs.declensionModeSelect.value =
    state.declensionTrainerMode === "identify" ? "identify" : "form";

  refs.declensionBoardTitle.textContent = chart.label;
  refs.declensionBoardNote.textContent = chart.note;
  refs.declensionTableWrap.innerHTML = renderDeclensionTable(chart);
  renderDeclensionCaseGuide();

  const accuracy = state.declensionAnswered
    ? Math.round((state.declensionCorrect / state.declensionAnswered) * 100)
    : 0;

  refs.declensionAccuracy.textContent = `Precisão ${accuracy}%`;
  refs.declensionStreak.textContent = `Sequência ${state.declensionStreak}`;
  refs.declensionBestStreak.textContent = `Melhor ${state.declensionBestStreak}`;
  refs.declensionCounter.textContent = `${state.declensionAnswered} tentativas`;

  const trainerMode = state.declensionTrainerMode === "identify" ? "identify" : "form";
  if (
    !declensionChallenge ||
    declensionChallenge.chartId !== chart.id ||
    declensionChallenge.mode !== trainerMode
  ) {
    resetDeclensionTrainerState(true);
  }

  if (!declensionChallenge) {
    refs.declensionPrompt.innerHTML =
      '<p class="prompt-panel__concept">Sem dados disponíveis para o treino.</p>';
    refs.declensionChoices.innerHTML = "";
    refs.declensionFeedback.className = "feedback";
    refs.declensionFeedback.textContent =
      "Selecione outro quadro para continuar o treino.";
    return;
  }

  const promptClass = shouldUseGreekFont(declensionChallenge.promptSymbol)
    ? "prompt-panel__word greek-text"
    : "prompt-panel__concept";

  refs.declensionPrompt.innerHTML = `
    <p class="prompt-panel__label">${declensionChallenge.promptLabel}</p>
    <p class="${promptClass}">${escapeHtml(declensionChallenge.promptSymbol)}</p>
    <p class="prompt-panel__hint">${declensionChallenge.promptHint}</p>
  `;

  refs.declensionChoices.innerHTML = declensionChallenge.options
    .map((option) => {
      const isCorrect = declensionChoiceLocked && option === declensionChallenge.answer;
      const isWrong =
        declensionChoiceLocked &&
        option === declensionSelectedOption &&
        !declensionWasCorrect;
      const buttonClass = [
        "choice-button",
        isCorrect ? "is-correct" : "",
        isWrong ? "is-wrong" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${buttonClass}" type="button" data-declension-option="${escapeHtml(
          option
        )}" ${declensionChoiceLocked ? "disabled" : ""}>
          ${getChoiceLabelMarkup(option)}
        </button>
      `;
    })
    .join("");

  refs.declensionChoices
    .querySelectorAll("[data-declension-option]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        handleDeclensionChoice(button.dataset.declensionOption)
      )
    );

  refs.declensionFeedback.className = "feedback";

  if (declensionChoiceLocked) {
    refs.declensionFeedback.classList.add(
      declensionWasCorrect ? "feedback--success" : "feedback--error"
    );
    refs.declensionFeedback.innerHTML = declensionWasCorrect
      ? `<strong>Correto.</strong> ${getDeclensionInsight(declensionChallenge)}`
      : `<strong>Quase.</strong> A resposta correta é <strong class="feedback-answer">${getChoiceLabelMarkup(
          declensionChallenge.answer
        )}</strong>. ${getDeclensionInsight(declensionChallenge)}`;
  } else {
    refs.declensionFeedback.textContent =
      "Escolha uma opção para receber correção didática.";
  }
}

function resetIntensiveState() {
  intensiveChoiceLocked = false;
  intensiveSelectedOption = null;
  intensiveWasCorrect = null;
}

function getIntensiveTopicById(topicId) {
  return intensiveTopics.find((topic) => topic.id === topicId) || intensiveTopics[0];
}

function getIntensiveQuestionById(questionId) {
  return intensiveQuestionBank.find((question) => question.id === questionId) || null;
}

function getIntensiveQuestionsByTopic(topicId = state.intensiveTopicId) {
  const normalizedTopicId = getIntensiveTopicById(topicId).id;

  if (normalizedTopicId === "all") {
    return intensiveQuestionBank;
  }

  return intensiveQuestionBank.filter(
    (question) => question.lessonKey === normalizedTopicId
  );
}

function syncCurrentIntensiveQuestion() {
  state.intensiveTopicId = getIntensiveTopicById(state.intensiveTopicId).id;
  const scopedQuestions = getIntensiveQuestionsByTopic(state.intensiveTopicId);

  if (!scopedQuestions.length) {
    state.intensiveCurrentQuestionId = null;
    return null;
  }

  const hasQuestion = scopedQuestions.some(
    (question) => question.id === state.intensiveCurrentQuestionId
  );

  if (!hasQuestion) {
    state.intensiveCurrentQuestionId = scopedQuestions[0].id;
  }

  return (
    scopedQuestions.find((question) => question.id === state.intensiveCurrentQuestionId) ||
    scopedQuestions[0]
  );
}

function getCurrentIntensiveQuestion() {
  return syncCurrentIntensiveQuestion();
}

function getOrderedIntensiveOptions(question) {
  const wrongOptions = question.options.filter((option) => option !== question.answer);
  const correctIndexSeed = createSeedFromString(
    `intensive:${question.id}:${question.answer}`
  );
  const wrongOptionsSeed = createSeedFromString(`intensive:${question.id}:wrongs`);
  const random = createSeededRandom(wrongOptionsSeed);
  const shuffledWrongOptions = [...wrongOptions];

  for (let index = shuffledWrongOptions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffledWrongOptions[index], shuffledWrongOptions[swapIndex]] = [
      shuffledWrongOptions[swapIndex],
      shuffledWrongOptions[index],
    ];
  }

  const correctIndex = correctIndexSeed % question.options.length;
  const orderedOptions = [];
  let wrongOptionIndex = 0;

  for (let index = 0; index < question.options.length; index += 1) {
    if (index === correctIndex) {
      orderedOptions.push(question.answer);
    } else {
      orderedOptions.push(shuffledWrongOptions[wrongOptionIndex]);
      wrongOptionIndex += 1;
    }
  }

  return orderedOptions;
}

function pickNextIntensiveQuestionId(random = false) {
  const scopedQuestions = getIntensiveQuestionsByTopic(state.intensiveTopicId);

  if (!scopedQuestions.length) {
    return null;
  }

  if (scopedQuestions.length === 1) {
    return scopedQuestions[0].id;
  }

  const currentIndex = scopedQuestions.findIndex(
    (question) => question.id === state.intensiveCurrentQuestionId
  );
  const normalizedCurrentIndex = currentIndex >= 0 ? currentIndex : 0;

  if (random) {
    let randomQuestion =
      scopedQuestions[Math.floor(Math.random() * scopedQuestions.length)];

    while (randomQuestion.id === scopedQuestions[normalizedCurrentIndex].id) {
      randomQuestion = scopedQuestions[Math.floor(Math.random() * scopedQuestions.length)];
    }

    return randomQuestion.id;
  }

  const nextIndex = (normalizedCurrentIndex + 1) % scopedQuestions.length;
  return scopedQuestions[nextIndex].id;
}

function goToNextIntensiveQuestion({ random = false } = {}) {
  const nextQuestionId = pickNextIntensiveQuestionId(random);

  if (!nextQuestionId) {
    return;
  }

  state.intensiveCurrentQuestionId = nextQuestionId;
  resetIntensiveState();
  renderIntensive();
  saveProgress();
}

function handleIntensiveChoice(option, question) {
  if (intensiveChoiceLocked || !question) {
    return;
  }

  intensiveChoiceLocked = true;
  intensiveSelectedOption = option;
  intensiveWasCorrect = option === question.answer;

  state.intensiveAnswered += 1;

  if (intensiveWasCorrect) {
    state.intensiveCorrect += 1;
    state.intensiveStreak += 1;
    state.intensiveBestStreak = Math.max(
      state.intensiveBestStreak,
      state.intensiveStreak
    );
  } else {
    state.intensiveStreak = 0;
  }

  renderIntensive();
  saveProgress();
}

function renderStudyMode() {
  const mode = state.studyMode === "intensive" ? "intensive" : "journey";
  state.studyMode = mode;

  refs.modeTabButtons.forEach((button) => {
    button.classList.toggle("mode-tab--active", button.dataset.mode === mode);
  });

  refs.paneContents.forEach((pane) => {
    const paneMode = pane.dataset.pane === "intensive" ? "intensive" : "journey";
    pane.classList.toggle("pane-content--hidden", paneMode !== mode);
  });
}

function renderIntensive() {
  if (!refs.intensiveTopicSelect) {
    return;
  }

  const scopedTopic = getIntensiveTopicById(state.intensiveTopicId);
  state.intensiveTopicId = scopedTopic.id;

  refs.intensiveTopicSelect.innerHTML = intensiveTopics
    .map((topic) => `<option value="${topic.id}">${topic.label}</option>`)
    .join("");
  refs.intensiveTopicSelect.value = scopedTopic.id;

  const accuracy = state.intensiveAnswered
    ? Math.round((state.intensiveCorrect / state.intensiveAnswered) * 100)
    : 0;

  refs.intensiveAnswered.textContent = `${state.intensiveAnswered} questões`;
  refs.intensiveAccuracy.textContent = `Precisão ${accuracy}%`;
  refs.intensiveStreak.textContent = `Sequência ${state.intensiveStreak}`;
  refs.intensiveBestStreak.textContent = `Melhor ${state.intensiveBestStreak}`;

  const question = getCurrentIntensiveQuestion();

  if (!question) {
    refs.intensiveLessonChip.textContent = "Sem questões";
    refs.intensivePromptPanel.innerHTML =
      '<p class="prompt-panel__concept">Não há perguntas disponíveis para este recorte.</p>';
    refs.intensiveChoices.innerHTML = "";
    refs.intensiveFeedback.className = "feedback";
    refs.intensiveFeedback.textContent = "Escolha outro recorte para continuar.";
    refs.intensiveNextButton.disabled = true;
    refs.intensiveRandomButton.disabled = true;
    return;
  }

  refs.intensiveNextButton.disabled = false;
  refs.intensiveRandomButton.disabled = false;
  refs.intensiveLessonChip.textContent = `${question.lessonLabel} • ${question.topicLabel}`;

  const displaySymbol = convertBetaCodeToGreek(question.promptSymbol);
  const symbolClass = shouldUseGreekFont(displaySymbol)
    ? "prompt-panel__word greek-text"
    : "prompt-panel__concept";

  refs.intensivePromptPanel.innerHTML = `
    <p class="prompt-panel__label">${question.promptLabel}</p>
    <p class="${symbolClass}">${escapeHtml(displaySymbol)}</p>
    <p class="prompt-panel__hint">${question.promptHint}</p>
  `;

  const orderedOptions = getOrderedIntensiveOptions(question);

  refs.intensiveChoices.innerHTML = orderedOptions
    .map((option) => {
      const isCorrect = intensiveChoiceLocked && option === question.answer;
      const isWrong = intensiveChoiceLocked && option === intensiveSelectedOption && !intensiveWasCorrect;
      const buttonClass = [
        "choice-button",
        isCorrect ? "is-correct" : "",
        isWrong ? "is-wrong" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${buttonClass}" type="button" data-intensive-option="${escapeHtml(
          option
        )}" ${intensiveChoiceLocked ? "disabled" : ""}>
          ${getChoiceLabelMarkup(option)}
        </button>
      `;
    })
    .join("");

  refs.intensiveChoices
    .querySelectorAll("[data-intensive-option]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        handleIntensiveChoice(button.dataset.intensiveOption, question);
      })
    );

  refs.intensiveFeedback.className = "feedback";

  if (intensiveChoiceLocked) {
    refs.intensiveFeedback.classList.add(
      intensiveWasCorrect ? "feedback--success" : "feedback--error"
    );
    refs.intensiveFeedback.innerHTML = intensiveWasCorrect
      ? `<strong>Correto.</strong> ${question.insight}${getChallengeCoachingMarkup(
          question
        )}`
      : `<strong>Quase.</strong> A resposta correta é <strong class="feedback-answer">${getChoiceLabelMarkup(
          question.answer
        )}</strong>. ${question.insight}${getChallengeCoachingMarkup(question)}`;
  } else {
    refs.intensiveFeedback.textContent =
      "Escolha uma opção para receber correção e reforço didático.";
  }
}

function loadProgress() {
  const saved = window.localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return clone(defaultProgress);
  }

  try {
    const parsed = JSON.parse(saved);
    const mergedUnlockedLessons = Array.from(
      new Set([
        ...clone(defaultProgress.unlockedLessons),
        ...(Array.isArray(parsed.unlockedLessons) ? parsed.unlockedLessons : []),
      ])
    );
    const intensiveTopicId = getIntensiveTopicById(parsed.intensiveTopicId || "all").id;
    const scopedIntensiveQuestions = getIntensiveQuestionsByTopic(intensiveTopicId);
    const intensiveCurrentQuestionId = scopedIntensiveQuestions.some(
      (question) => question.id === parsed.intensiveCurrentQuestionId
    )
      ? parsed.intensiveCurrentQuestionId
      : scopedIntensiveQuestions[0]?.id || null;
    const intensiveAnswered = Number.isFinite(parsed.intensiveAnswered)
      ? Math.max(0, parsed.intensiveAnswered)
      : 0;
    const intensiveCorrect = Number.isFinite(parsed.intensiveCorrect)
      ? Math.max(0, Math.min(parsed.intensiveCorrect, intensiveAnswered))
      : 0;

    return {
      ...clone(defaultProgress),
      ...parsed,
      unlockedLessons: mergedUnlockedLessons,
      completedLessons: Array.isArray(parsed.completedLessons)
        ? parsed.completedLessons
        : [],
      masteredCardIds: Array.isArray(parsed.masteredCardIds)
        ? parsed.masteredCardIds
        : [],
      vocabDeckId: getVocabularyDeckById(parsed.vocabDeckId || "full").id,
      declensionChartId: getDeclensionChartById(
        parsed.declensionChartId || defaultProgress.declensionChartId
      ).id,
      declensionTrainerMode:
        parsed.declensionTrainerMode === "identify" ? "identify" : "form",
      declensionAnswered: Number.isFinite(parsed.declensionAnswered)
        ? Math.max(0, parsed.declensionAnswered)
        : 0,
      declensionCorrect: Number.isFinite(parsed.declensionCorrect)
        ? Math.max(0, parsed.declensionCorrect)
        : 0,
      declensionStreak: Number.isFinite(parsed.declensionStreak)
        ? Math.max(0, parsed.declensionStreak)
        : 0,
      declensionBestStreak: Number.isFinite(parsed.declensionBestStreak)
        ? Math.max(0, parsed.declensionBestStreak)
        : 0,
      studyMode: parsed.studyMode === "intensive" ? "intensive" : "journey",
      intensiveTopicId,
      intensiveAnswered,
      intensiveCorrect,
      intensiveStreak: Number.isFinite(parsed.intensiveStreak)
        ? Math.max(0, parsed.intensiveStreak)
        : 0,
      intensiveBestStreak: Number.isFinite(parsed.intensiveBestStreak)
        ? Math.max(0, parsed.intensiveBestStreak)
        : 0,
      intensiveCurrentQuestionId,
    };
  } catch (error) {
    return clone(defaultProgress);
  }
}

function saveProgress() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAllLessons() {
  return course.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title,
      moduleOrder: module.order,
    }))
  );
}

function getLessonById(lessonId) {
  return getAllLessons().find((lesson) => lesson.id === lessonId);
}

function getCurrentLesson() {
  return getLessonById(state.currentLessonId) || getLessonById("module-1-alpha");
}

function syncCurrentLesson() {
  if (!state.unlockedLessons.includes(state.currentLessonId)) {
    state.currentLessonId = state.unlockedLessons[0] || "module-1-alpha";
    state.lessonChallengeIndex = 0;
  }

  const lesson = getCurrentLesson();
  if (state.lessonChallengeIndex >= lesson.challenges.length) {
    state.lessonChallengeIndex = lesson.challenges.length - 1;
  }
}

function syncCurrentCard(filteredCards) {
  if (!filteredCards.length) {
    state.currentCardId = null;
    return null;
  }

  const exists = filteredCards.some((card) => card.id === state.currentCardId);
  if (!exists) {
    state.currentCardId = filteredCards[0].id;
  }

  return filteredCards.find((card) => card.id === state.currentCardId) || filteredCards[0];
}

function render() {
  renderStats();
  renderModules();
  renderLesson();
  renderDeclensionLab();
  renderVocabulary();
  renderIntensive();
  renderStudyMode();
  saveProgress();
}

function renderStats() {
  const accuracy = state.answered
    ? Math.round((state.correct / state.answered) * 100)
    : 0;
  const activeDeck = getActiveVocabularyDeck();
  const activeDeckCards = activeDeck.cards;
  const masteredCards = activeDeckCards.filter((card) =>
    state.masteredCardIds.includes(card.id)
  ).length;

  refs.currentLevel.textContent = state.level;
  refs.currentRank.textContent = getRankLabel(state.level);
  refs.xpTotal.textContent = state.xp;
  refs.accuracyRate.textContent = `${accuracy}%`;
  refs.cardsMastered.textContent = masteredCards;
  refs.cardsMasteredMeta.textContent = `${masteredCards} de ${activeDeckCards.length} cartões em ${activeDeck.label}`;
}

function renderModules() {
  const completedCount = state.completedLessons.length;

  refs.modulePath.innerHTML = course
    .map((module) => {
      const isUnlocked = completedCount >= module.unlockThreshold;
      const isActive = module.lessons.some((lesson) => lesson.id === state.currentLessonId);
      const completedLessonsInModule = module.lessons.filter((lesson) =>
        state.completedLessons.includes(lesson.id)
      ).length;

      const emptyUnlocked = isUnlocked && module.lessons.length === 0;
      const statusLabel = isActive
        ? "Ativo"
        : emptyUnlocked
          ? "Em breve"
          : isUnlocked
            ? "Disponível"
            : "Bloqueado";
      const statusClass =
        isActive || (isUnlocked && !emptyUnlocked) ? "" : " status-pill--locked";
      const isInteractive = isUnlocked && module.lessons.length > 0;
      const cardClass = isActive
        ? "module-card module-card--active"
        : `module-card${isUnlocked ? "" : " module-card--locked"}`;
      const interactiveClass = isInteractive ? " module-card--interactive" : "";
      const dataAttribute = isInteractive ? ` data-module-id="${module.id}"` : "";

      const progressText = module.lessons.length
        ? `${completedLessonsInModule}/${module.lessons.length} missões concluídas`
        : "Conteúdo em preparação";

      return `
        <article class="${cardClass}${interactiveClass}"${dataAttribute}>
          <div class="module-card__top">
            <div>
              <p class="eyebrow">Módulo ${module.order}</p>
              <h3 class="module-card__title">${module.title}</h3>
            </div>
            <span class="status-pill${statusClass}">${statusLabel}</span>
          </div>
          <p class="module-card__description">${module.subtitle}</p>
          <p class="module-card__progress">${module.description}</p>
          <p class="module-card__progress">${progressText}</p>
          <p class="module-card__progress">${module.note}</p>
        </article>
      `;
    })
    .join("");

  refs.modulePath.querySelectorAll("[data-module-id]").forEach((card) => {
    card.addEventListener("click", () => {
      openModule(card.dataset.moduleId);
    });
  });
}

function openModule(moduleId) {
  const module = course.find((courseModule) => courseModule.id === moduleId);

  if (!module || !module.lessons.length) {
    return;
  }

  const firstLesson = module.lessons[0];

  if (!state.unlockedLessons.includes(firstLesson.id)) {
    state.unlockedLessons = [...state.unlockedLessons, firstLesson.id];
  }

  state.currentLessonId = firstLesson.id;
  state.lessonChallengeIndex = 0;
  render();
  saveProgress();
  refs.lessonTitle.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderLesson() {
  const lesson = getCurrentLesson();
  const challenge = lesson.challenges[state.lessonChallengeIndex];
  const orderedOptions = getOrderedOptions(
    challenge,
    lesson,
    state.lessonChallengeIndex
  );
  const isCourseFinished =
    state.completedLessons.length === getAllLessons().length &&
    state.completedLessons.includes(lesson.id);

  refs.lessonTitle.textContent = lesson.title;
  refs.lessonModule.textContent = lesson.moduleTitle;
  refs.lessonProgress.textContent = `${state.lessonChallengeIndex + 1} de ${
    lesson.challenges.length
  } desafios`;
  refs.lessonObjective.textContent = lesson.objective;
  refs.lessonExplanation.textContent = lesson.explanation;
  refs.challengeCounter.textContent = `Questão ${state.lessonChallengeIndex + 1}`;
  refs.nextButton.disabled = true;
  refs.nextButton.textContent = isCourseFinished ? "Percurso concluído" : "Próximo desafio";
  refs.feedback.className = "feedback";
  refs.feedback.textContent = isCourseFinished
    ? "O percurso implementado até agora foi concluído. Você pode revisar as missões e continuar estudando pelos cartões."
    : "Escolha uma opção para receber correção e uma explicação curta.";
  interactionLocked = false;

  refs.lessonKeyPoints.innerHTML = lesson.keyPoints
    .map((point) => `<div class="key-point">${point}</div>`)
    .join("");

  const promptClass =
    challenge.type === "concept"
      ? "prompt-panel__concept"
      : challenge.type === "gloss" ||
          challenge.type === "transliteration" ||
          challenge.type === "declension"
        ? "prompt-panel__word"
        : "prompt-panel__symbol";
  const promptGreekClass = shouldUseGreekFont(challenge.promptSymbol)
    ? " greek-text"
    : "";

  refs.promptPanel.innerHTML = `
    <p class="prompt-panel__label">${challenge.promptLabel}</p>
    <p class="${promptClass}${promptGreekClass}">${challenge.promptSymbol}</p>
    <p class="prompt-panel__hint">${challenge.promptHint}</p>
  `;

  refs.choices.innerHTML = "";
  orderedOptions.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.dataset.optionValue = option;
    button.innerHTML = getChoiceLabelMarkup(option);
    button.addEventListener("click", () => handleAnswer(option, challenge, lesson));
    refs.choices.appendChild(button);
  });
}

function handleAnswer(option, challenge, lesson) {
  if (interactionLocked) {
    return;
  }

  interactionLocked = true;

  const choiceButtons = Array.from(refs.choices.querySelectorAll("button"));
  const isCorrect = option === challenge.answer;
  const isLessonAlreadyCompleted = state.completedLessons.includes(lesson.id);

  state.answered += 1;

  choiceButtons.forEach((button) => {
    button.disabled = true;

    if (button.dataset.optionValue === challenge.answer) {
      button.classList.add("is-correct");
    } else if (button.dataset.optionValue === option) {
      button.classList.add("is-wrong");
    }
  });

  if (isCorrect) {
    state.correct += 1;

    if (!isLessonAlreadyCompleted) {
      state.xp += 5;
      recalculateLevel();
    }

    refs.feedback.classList.add("feedback--success");
    refs.feedback.innerHTML = `<strong>Correto.</strong> ${challenge.insight}${getChallengeCoachingMarkup(
      challenge
    )}`;
  } else {
    refs.feedback.classList.add("feedback--error");
    refs.feedback.innerHTML = `<strong>Quase.</strong> A resposta correta é <strong class="feedback-answer">${getChoiceLabelMarkup(
      challenge.answer
    )}</strong>. ${challenge.insight}${getChallengeCoachingMarkup(challenge)}`;
  }

  refs.nextButton.disabled = false;
  renderStats();
  saveProgress();
}

function handleNextChallenge() {
  const lesson = getCurrentLesson();
  const isLastChallenge =
    state.lessonChallengeIndex >= lesson.challenges.length - 1;

  if (!isLastChallenge) {
    state.lessonChallengeIndex += 1;
    renderLesson();
    saveProgress();
    return;
  }

  completeLesson(lesson);
  render();
}

function completeLesson(lesson) {
  if (!state.completedLessons.includes(lesson.id)) {
    state.completedLessons = [...state.completedLessons, lesson.id];
    state.xp += lesson.xpReward;
  }

  recalculateLevel();

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((item) => item.id === lesson.id);
  const nextLesson = allLessons[currentIndex + 1];

  if (nextLesson && !state.unlockedLessons.includes(nextLesson.id)) {
    state.unlockedLessons = [...state.unlockedLessons, nextLesson.id];
  }

  if (nextLesson) {
    state.currentLessonId = nextLesson.id;
    state.lessonChallengeIndex = 0;
  } else {
    state.currentLessonId = lesson.id;
    state.lessonChallengeIndex = lesson.challenges.length - 1;
  }
}

function recalculateLevel() {
  state.level = Math.max(1, Math.floor(state.xp / 60) + 1);
}

function getFilteredCards() {
  const query = normalizeForSearch(state.vocabSearch);
  const activeCards = getActiveVocabularyCards();

  return activeCards.filter((card) => {
    const matchesSearch =
      !query ||
      getSearchableCardValues(card).some((value) => value.includes(query));

    const isMastered = state.masteredCardIds.includes(card.id);
    const matchesFilter =
      state.vocabFilter === "all" ||
      (state.vocabFilter === "review" && !isMastered) ||
      (state.vocabFilter === "mastered" && isMastered);

    return matchesSearch && matchesFilter;
  });
}

function getCurrentCard(filteredCards) {
  if (!filteredCards.length) {
    return null;
  }

  return filteredCards.find((card) => card.id === state.currentCardId) || filteredCards[0];
}

function renderVocabulary() {
  refs.vocabDeckSelect.innerHTML = vocabularyDecks
    .map(
      (deck) => `<option value="${deck.id}">${deck.label}</option>`
    )
    .join("");
  refs.vocabDeckSelect.value = getActiveVocabularyDeck().id;
  refs.vocabSearch.value = state.vocabSearch;
  refs.filterChips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === state.vocabFilter);
  });

  const filteredCards = getFilteredCards();
  const currentCard = syncCurrentCard(filteredCards);

  refs.vocabResultsCount.textContent = `${filteredCards.length} cartões`;

  if (!currentCard) {
    refs.vocabTerm.textContent = "Nenhum cartão nesta busca";
    refs.vocabTerm.classList.remove("greek-text");
    refs.vocabPosition.textContent = "0 de 0";
    refs.vocabFrequency.textContent = "";
    refs.vocabGloss.textContent =
      "Ajuste a busca ou o filtro para voltar a exibir cartões do vocabulário.";
    refs.vocabPage.textContent = "";
    refs.flashcard.classList.remove("is-revealed");
    refs.vocabChoices.innerHTML = "";
    refs.vocabFeedback.className = "feedback";
    refs.vocabFeedback.textContent =
      "Não há cartões disponíveis com o filtro atual.";
    refs.toggleMasteredButton.disabled = true;
    refs.nextCardButton.disabled = true;
    refs.randomCardButton.disabled = true;
    refs.vocabResults.innerHTML =
      '<div class="results-empty">Nenhum cartão corresponde ao filtro atual.</div>';
    return;
  }

  ensureVocabularyChallenge(currentCard);

  const currentIndex = filteredCards.findIndex((card) => card.id === currentCard.id);
  const isMastered = state.masteredCardIds.includes(currentCard.id);
  const displayedCurrentTerm = getCardDisplayTerm(currentCard);

  refs.vocabTerm.textContent = displayedCurrentTerm;
  refs.vocabTerm.classList.toggle("greek-text", shouldUseGreekFont(displayedCurrentTerm));
  refs.vocabPosition.textContent = `${currentIndex + 1} de ${filteredCards.length}`;
  refs.vocabFrequency.textContent = currentCard.meta
    ? currentCard.meta
    : currentCard.frequency
      ? `Frequência no NT: ${currentCard.frequency}`
      : "Frequência não informada no cartão";
  refs.vocabGloss.textContent = isCardRevealed
    ? currentCard.gloss
    : "Escolha a tradução correta nas quatro opções abaixo para revelar o sentido.";
  refs.vocabPage.textContent = currentCard.pageLabel
    ? currentCard.pageLabel
    : `Página do deck: ${currentCard.page}`;
  refs.flashcard.classList.toggle("is-revealed", isCardRevealed);
  refs.toggleMasteredButton.disabled = false;
  refs.nextCardButton.disabled = filteredCards.length <= 1;
  refs.randomCardButton.disabled = filteredCards.length <= 1;
  refs.toggleMasteredButton.textContent = isMastered
    ? "Mover para revisão"
    : "Marcar como dominado";

  refs.vocabChoices.innerHTML = vocabChoiceOptions
    .map((option) => {
      const isCorrect = vocabChoiceLocked && option === currentCard.gloss;
      const isWrong = vocabChoiceLocked && option === vocabSelectedOption && !vocabWasCorrect;
      const buttonClass = [
        "choice-button",
        "choice-button--vocab",
        isCorrect ? "is-correct" : "",
        isWrong ? "is-wrong" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <button class="${buttonClass}" type="button" data-vocab-option="${escapeHtml(option)}" ${
          vocabChoiceLocked ? "disabled" : ""
        }>
          <span class="choice-button__translation">${escapeHtml(option)}</span>
        </button>
      `;
    })
    .join("");

  refs.vocabChoices
    .querySelectorAll("[data-vocab-option]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        handleVocabularyChoice(button.dataset.vocabOption, currentCard);
      })
    );

  refs.vocabFeedback.className = "feedback";

  if (vocabChoiceLocked) {
    refs.vocabFeedback.classList.add(
      vocabWasCorrect ? "feedback--success" : "feedback--error"
    );
    refs.vocabFeedback.innerHTML = vocabWasCorrect
      ? `<strong>Correto.</strong> ${displayedCurrentTerm} significa “${currentCard.gloss}”.`
      : `<strong>Quase.</strong> A glosa principal de ${displayedCurrentTerm} é “${currentCard.gloss}”.`;
  } else {
    refs.vocabFeedback.textContent =
      "Marque a tradução correta para virar o card e confirmar o sentido.";
  }

  renderVocabularyResults(filteredCards, currentCard, currentIndex);
}

function renderVocabularyResults(filteredCards, currentCard, currentIndex) {
  if (!state.vocabSearch) {
    refs.vocabResults.innerHTML =
      '<div class="results-empty">A lista fica oculta durante o treino para não antecipar respostas. Use a busca para localizar um termo espec\u00edfico em grego ou em portugu\u00eas.</div>';
    return;
  }

  const resultCards = filteredCards.slice(0, 18);

  refs.vocabResults.innerHTML = resultCards
    .map((card) => {
      const masteredLabel = state.masteredCardIds.includes(card.id)
        ? "Dominado"
        : "Em revisão";
      const activeClass = card.id === currentCard.id ? " is-active" : "";
      const displayedTerm = getCardDisplayTermWithFrequency(card);
      const greekTermClass = shouldUseGreekFont(displayedTerm) ? " greek-text" : "";
      const hint = card.pageLabel
        ? card.pageLabel
        : card.frequency
          ? `Frequência no NT: ${card.frequency}`
          : "Clique para abrir este cartão";

      return `
        <button class="result-item${activeClass}" type="button" data-card-id="${card.id}">
          <span class="result-item__meta">${masteredLabel}</span>
          <span class="result-item__term${greekTermClass}">${escapeHtml(displayedTerm)}</span>
          <span class="result-item__hint">${escapeHtml(truncate(hint, 88))}</span>
        </button>
      `;
    })
    .join("");

  refs.vocabResults
    .querySelectorAll("[data-card-id]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        state.currentCardId = button.dataset.cardId;
        resetVocabularyChallengeState();
        renderVocabulary();
        saveProgress();
      })
    );
}

function truncate(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1)}…`;
}

function getRankLabel(level) {
  if (level <= 2) {
    return "Leitor introdutório";
  }

  if (level <= 4) {
    return "Explorador do koiné";
  }

  if (level <= 6) {
    return "Leitor histórico";
  }

  if (level <= 8) {
    return "Analista do texto";
  }

  return "Exegeta em formação";
}
