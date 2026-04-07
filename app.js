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
      "Próximo bloco do livro após o recorte do Módulo 1, começando no presente do subjuntivo.",
    unlockThreshold: 6,
    note: "Em breve: vogal temática alongada e flexão do subjuntivo.",
    lessons: [],
  },
  {
    id: "module-3",
    order: 3,
    title: "Lição 7 | Futuro do Indicativo",
    subtitle: "Ativo e médio",
    description:
      "O curso seguirá do recorte inicial para o estudo do futuro do indicativo.",
    unlockThreshold: 9,
    note: "Em breve: sigma temporal e leitura do futuro.",
    lessons: [],
  },
  {
    id: "module-4",
    order: 4,
    title: "Lição 8 | Substantivos: Introdução",
    subtitle: "Entrada no sistema nominal",
    description:
      "Depois do primeiro bloco verbal, a trilha seguirá para o sistema nominal.",
    unlockThreshold: 12,
    note: "Em breve: gênero, número, caso e visão geral dos substantivos.",
    lessons: [],
  },
  {
    id: "module-5",
    order: 5,
    title: "Lição 9 | Segunda Declinação",
    subtitle: "Temas em -o",
    description:
      "O próximo desenvolvimento nominal começa pela segunda declinação.",
    unlockThreshold: 15,
    note: "Em breve: paradigmas e leitura de substantivos em -o.",
    lessons: [],
  },
  {
    id: "module-6",
    order: 6,
    title: "Lição 10 | Primeira Declinação",
    subtitle: "Temas em -a",
    description:
      "A sequência do curso continuará com a primeira declinação.",
    unlockThreshold: 18,
    note: "Em breve: formas nominais em -a e suas leituras.",
    lessons: [],
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

const STORAGE_KEY = "grego-game-progress-v3";

const defaultProgress = {
  level: 1,
  xp: 0,
  answered: 0,
  correct: 0,
  unlockedLessons: [
    "module-1-alpha",
    "module-7-aorist-second",
    "module-7-aorist-first-vocab",
  ],
  completedLessons: [],
  currentLessonId: "module-1-alpha",
  lessonChallengeIndex: 0,
  masteredCardIds: [],
  currentCardId: vocabularyCards[0]?.id || null,
  vocabDeckId: "full",
  vocabSearch: "",
  vocabFilter: "all",
};

const refs = {
  currentLevel: document.querySelector("#current-level"),
  currentRank: document.querySelector("#current-rank"),
  xpTotal: document.querySelector("#xp-total"),
  accuracyRate: document.querySelector("#accuracy-rate"),
  cardsMastered: document.querySelector("#cards-mastered"),
  cardsMasteredMeta: document.querySelector("#cards-mastered-meta"),
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
  vocabDeckSelect: document.querySelector("#vocab-deck-select"),
  vocabSearch: document.querySelector("#vocab-search"),
  filterChips: Array.from(document.querySelectorAll(".filter-chip")),
  flashcard: document.querySelector("#flashcard"),
  vocabTerm: document.querySelector("#vocab-term"),
  vocabPosition: document.querySelector("#vocab-position"),
  vocabFrequency: document.querySelector("#vocab-frequency"),
  vocabGloss: document.querySelector("#vocab-gloss"),
  vocabPage: document.querySelector("#vocab-page"),
  revealCardButton: document.querySelector("#reveal-card-button"),
  toggleMasteredButton: document.querySelector("#toggle-mastered-button"),
  nextCardButton: document.querySelector("#next-card-button"),
  randomCardButton: document.querySelector("#random-card-button"),
  vocabResultsCount: document.querySelector("#vocab-results-count"),
  vocabResults: document.querySelector("#vocab-results"),
};

const state = loadProgress();
let interactionLocked = false;
let isCardRevealed = false;

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
  isCardRevealed = false;
  saveProgress();
  render();
});

refs.vocabDeckSelect.addEventListener("change", (event) => {
  state.vocabDeckId = event.target.value || "full";
  state.currentCardId = getActiveVocabularyCards()[0]?.id || null;
  isCardRevealed = false;
  renderStats();
  renderVocabulary();
  saveProgress();
});

refs.vocabSearch.addEventListener("input", (event) => {
  state.vocabSearch = event.target.value.trim();
  isCardRevealed = false;
  renderVocabulary();
  saveProgress();
});

refs.filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    state.vocabFilter = chip.dataset.filter || "all";
    isCardRevealed = false;
    renderVocabulary();
    saveProgress();
  });
});

refs.revealCardButton.addEventListener("click", () => {
  isCardRevealed = !isCardRevealed;
  renderVocabulary();
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
  isCardRevealed = false;
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

  isCardRevealed = false;
  renderVocabulary();
  saveProgress();
});

syncCurrentLesson();
syncCurrentCard(getFilteredCards());
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

function getVocabularyDeckById(deckId) {
  return vocabularyDecks.find((deck) => deck.id === deckId) || vocabularyDecks[0];
}

function getActiveVocabularyDeck() {
  return getVocabularyDeckById(state?.vocabDeckId || "full");
}

function getActiveVocabularyCards() {
  return getActiveVocabularyDeck().cards;
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
  renderVocabulary();
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
      : challenge.type === "gloss" || challenge.type === "transliteration"
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
    button.className = shouldUseGreekFont(option)
      ? "choice-button greek-text"
      : "choice-button";
    button.type = "button";
    button.textContent = option;
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

    if (button.textContent === challenge.answer) {
      button.classList.add("is-correct");
    } else if (button.textContent === option) {
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
    refs.feedback.innerHTML = `<strong>Correto.</strong> ${challenge.insight}`;
  } else {
    const answerClass = shouldUseGreekFont(challenge.answer) ? " class=\"greek-text\"" : "";
    refs.feedback.classList.add("feedback--error");
    refs.feedback.innerHTML = `<strong>Quase.</strong> A resposta correta é <strong${answerClass}>${challenge.answer}</strong>. ${challenge.insight}`;
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
  const query = state.vocabSearch.toLowerCase();
  const activeCards = getActiveVocabularyCards();

  return activeCards.filter((card) => {
    const matchesSearch =
      !query ||
      card.term.toLowerCase().includes(query) ||
      card.gloss.toLowerCase().includes(query) ||
      card.displayTerm.toLowerCase().includes(query);

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
    refs.revealCardButton.disabled = true;
    refs.toggleMasteredButton.disabled = true;
    refs.nextCardButton.disabled = true;
    refs.randomCardButton.disabled = true;
    refs.vocabResults.innerHTML =
      '<div class="results-empty">Nenhum cartão corresponde ao filtro atual.</div>';
    return;
  }

  const currentIndex = filteredCards.findIndex((card) => card.id === currentCard.id);
  const isMastered = state.masteredCardIds.includes(currentCard.id);

  refs.vocabTerm.textContent = currentCard.term;
  refs.vocabTerm.classList.toggle("greek-text", shouldUseGreekFont(currentCard.term));
  refs.vocabPosition.textContent = `${currentIndex + 1} de ${filteredCards.length}`;
  refs.vocabFrequency.textContent = currentCard.meta
    ? currentCard.meta
    : currentCard.frequency
      ? `Frequência no NT: ${currentCard.frequency}`
      : "Frequência não informada no cartão";
  refs.vocabGloss.textContent = isCardRevealed
    ? currentCard.gloss
    : "Revele o sentido para conferir a glosa deste cartão.";
  refs.vocabPage.textContent = currentCard.pageLabel
    ? currentCard.pageLabel
    : `Página do deck: ${currentCard.page}`;
  refs.flashcard.classList.toggle("is-revealed", isCardRevealed);
  refs.revealCardButton.disabled = false;
  refs.toggleMasteredButton.disabled = false;
  refs.nextCardButton.disabled = filteredCards.length <= 1;
  refs.randomCardButton.disabled = filteredCards.length <= 1;
  refs.revealCardButton.textContent = isCardRevealed
    ? "Ocultar sentido"
    : "Revelar sentido";
  refs.toggleMasteredButton.textContent = isMastered
    ? "Mover para revisão"
    : "Marcar como dominado";

  const resultCards = getVisibleResultCards(filteredCards, currentIndex);
  refs.vocabResults.innerHTML = resultCards
    .map((card) => {
      const masteredLabel = state.masteredCardIds.includes(card.id)
        ? "Dominado"
        : "Em revisão";
      const activeClass = card.id === currentCard.id ? " is-active" : "";
      const greekTermClass = shouldUseGreekFont(card.displayTerm) ? " greek-text" : "";

      return `
        <button class="result-item${activeClass}" type="button" data-card-id="${card.id}">
          <span class="result-item__meta">${masteredLabel}</span>
          <span class="result-item__term${greekTermClass}">${card.displayTerm}</span>
          <span class="result-item__gloss">${truncate(card.gloss, 96)}</span>
        </button>
      `;
    })
    .join("");

  refs.vocabResults
    .querySelectorAll("[data-card-id]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        state.currentCardId = button.dataset.cardId;
        isCardRevealed = false;
        renderVocabulary();
        saveProgress();
      })
    );
}

function getVisibleResultCards(filteredCards, currentIndex) {
  if (!filteredCards.length) {
    return [];
  }

  if (state.vocabSearch) {
    return filteredCards.slice(0, 18);
  }

  const visible = [];
  const total = Math.min(filteredCards.length, 18);

  for (let offset = 0; offset < total; offset += 1) {
    visible.push(filteredCards[(currentIndex + offset) % filteredCards.length]);
  }

  return visible;
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
