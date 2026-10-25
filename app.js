import {
  topics as sourceTopics,
  civitasCategories as sourceCivitasCategories,
  articles as sourceArticles,
  glossary as sourceGlossary,
  countries as sourceCountries,
  ideologies as sourceIdeologies,
  events as sourceEvents,
  sources as sourceSources,
  relationships as sourceRelationships,
  learningNodes as sourceLearningNodes,
  learningPaths as sourceLearningPaths,
  learningCheck as sourceLearningCheck,
} from "./data.js";

import {
  TIMELINE_DATASET_VERSION,
  TIMELINE_LAST_VERIFIED_AT,
  timelinePeriods as sourceTimelinePeriods,
  timelineRegions as sourceTimelineRegions,
  timelineCategories as sourceTimelineCategories,
  timelineSources as sourceTimelineSources,
  timelineEntities as sourceTimelineEntities,
  timelineCountryDirectory as sourceTimelineCountryDirectory,
  timelineEvents as sourceTimelineEvents,
  timelineCoverage as sourceTimelineCoverage,
} from "./timeline-data.js";

const englishCopy = {
  topics: {
    foundations: { title: "Political Foundations", description: "Power, the state, sovereignty, authority, and legitimacy." },
    theory: { title: "Political Theory", description: "Intellectual traditions and debates about liberty, equality, and justice." },
    ideologies: { title: "Ideologies", description: "Political traditions and their internal differences." },
    institutions: { title: "Constitutions & Institutions", description: "Legislative, executive, and judicial institutions, plus mechanisms that check power." },
    elections: { title: "Elections & Representation", description: "Electoral systems, parties, voters, and accountability." },
    comparative: { title: "Comparative Politics", description: "How countries design and operate different political systems." },
    international: { title: "International Relations", description: "International order, multilateral organizations, diplomacy, and international law." },
    history: { title: "Political History", description: "Historical turning points, documents, and institutional change." },
    vietnam: { title: "Politics of Vietnam", description: "Vietnam’s constitutional framework, state institutions, and development context." },
    methods: { title: "Research & Evidence", description: "Primary sources, comparative data, and ways to assess political claims." },
  },
  articles: {
    democracy: {
      title: "Democracy", slug: "democracy", readTime: "7 min read",
      summary: "A set of principles and institutions for organizing public power, in which participation, political competition, and accountability are central.",
      content: [
        { heading: "Concept", paragraphs: ["Democracy is not simply the holding of elections. In political research, the term commonly includes rules governing who can participate in collective decision-making, how competition for power takes place, and how officeholders are held accountable to the public."] },
        { heading: "Comparative approach", paragraphs: ["Democratic models differ in institutional design—from parliamentary to presidential arrangements, and from centralized to federal systems. Assessing a system therefore calls for examining political rights, electoral procedures, rule of law, freedom of information, and the capacity of institutions that check power together.", "Comparative indicators can be useful for research, but they do not replace attention to each case’s historical context, constitution, and scholarly debates."] },
      ],
    },
    sovereignty: {
      title: "Sovereignty", slug: "sovereignty", readTime: "6 min read",
      summary: "The supreme capacity of a political community to organize public authority for itself and to relate to external actors.",
      content: [
        { heading: "Two dimensions", paragraphs: ["Sovereignty is commonly discussed in two dimensions: supreme authority within a territory and independence in relations with other states. The concept does not mean that power is unlimited; in many states, constitutions, laws, and international commitments constrain the exercise of power."] },
        { heading: "In practice", paragraphs: ["In practice, sovereignty is connected to borders, international legal status, jurisdiction, and governing capacity. Globalization, international organizations, and agreements also foreground questions about how power can be shared or coordinated without necessarily eliminating the state."] },
      ],
    },
    "political-legitimacy": {
      title: "Political Legitimacy", slug: "political-legitimacy", readTime: "6 min read",
      summary: "The reasons public authority is regarded as justified in being obeyed, supported, or accepted.",
      content: [
        { heading: "Concept", paragraphs: ["Legitimacy is distinct from coercive capacity. A government may enforce decisions, yet legitimacy asks which principles, procedures, or outcomes justify that authority."] },
        { heading: "Ways of explaining it", paragraphs: ["Theories commonly invoke consent, law, tradition, governing effectiveness, human rights, and participation. These standards can conflict, or carry different weight across political traditions, so they should be presented as arguments in debate rather than as a single measure."] },
      ],
    },
    constitutionalism: {
      title: "Constitutionalism", slug: "constitutionalism", readTime: "8 min read",
      summary: "The view that public authority should be established, allocated, and limited by fundamental rules with higher legal force.",
      content: [
        { heading: "Focus", paragraphs: ["Constitutionalism concerns more than the existence of a written constitution. Its focus is how authority is allocated, limited, and checked, and how rights and procedures are secured in practice."] },
        { heading: "Design and comparison", paragraphs: ["Constitutional design may include amendment rules, relationships among state institutions, constitutional review, and protection of fundamental rights. Countries choose different models; comparison is useful when texts are situated in each setting’s constitutional history and operating mechanisms."] },
      ],
    },
    "separation-of-powers": {
      title: "Separation of Powers & Checks on Power", slug: "separation-of-powers", readTime: "7 min read",
      summary: "A principle for organizing public authority to prevent unchecked concentration of power through allocated functions and countervailing mechanisms.",
      content: [
        { heading: "Allocation of functions", paragraphs: ["Separation of powers is commonly associated with three functions: making law, executing law, and adjudicating. In practice, constitutional systems do not replicate a single model; some draw sharper functional distinctions, whereas others emphasize collective responsibility or parliamentary relationships."] },
        { heading: "Checks and balances", paragraphs: ["Checks on power may operate through legislative procedures, vetoes, oversight, courts, audits, the media, and independent institutions. Their effectiveness depends on legal rules, organizational capacity, and political context."] },
      ],
    },
    "proportional-representation": {
      title: "Proportional Representation", slug: "proportional-representation", readTime: "7 min read",
      summary: "A family of electoral systems that allocates seats to make the share of seats closer to the share of votes won by parties or lists.",
      content: [
        { heading: "Variants", paragraphs: ["Proportional representation is a family of systems, not a single formula. Open lists, closed lists, electoral thresholds, and district magnitude can all affect outcomes and the relationship between voters and representatives."] },
        { heading: "Debate", paragraphs: ["Supporters often emphasize proportionality and opportunities to represent different viewpoints. Critics may focus on party fragmentation or coalition formation. Effects should be assessed through the specific design, not a system label alone."] },
      ],
    },
    authoritarianism: {
      title: "Authoritarianism", slug: "authoritarianism", readTime: "8 min read",
      summary: "A term in comparative politics for regimes that substantially restrict political competition or independent participation, with many real-world variations.",
      content: [
        { heading: "Conceptual distinction", paragraphs: ["In comparative research, authoritarianism is commonly distinguished from democracy by the degree of meaningful political competition, opposition rights, and civic space. Actual regimes may nevertheless contain electoral, party, or legal institutions that play different roles."] },
        { heading: "Methodological note", paragraphs: ["Regime classification always has methodological limits. Researchers should make their criteria, time period, and data sources explicit rather than substitute a single label for analysis."] },
      ],
    },
    liberalism: {
      title: "Liberalism", slug: "liberalism", readTime: "8 min read",
      summary: "A family of traditions that emphasizes individual rights, liberty, rule of law, and limits on public power; its strands differ in important ways.",
      content: [
        { heading: "A diverse tradition", paragraphs: ["Liberalism is not a unified position on every economic or social issue. Classical, social, and egalitarian strands may differ over the state’s role, welfare, and how to address inequality."] },
        { heading: "Common ground and differences", paragraphs: ["Common ground often includes the importance of individual rights, equality before the law, and limits on arbitrary power. When comparing ideologies, separate core principles from interpretations specific to a time or country."] },
      ],
    },
    "united-nations": {
      title: "United Nations", slug: "united-nations", readTime: "7 min read",
      summary: "An intergovernmental organization founded in 1945 under the UN Charter to maintain peace, promote cooperation, and develop friendly relations.",
      content: [
        { heading: "Organization and authority", paragraphs: ["The United Nations includes the principal organs named in the Charter, together with a system of programmes, funds, and specialized agencies. Authority and decision-making vary by organ, so the organization should not be treated as a world government."] },
        { heading: "Principles", paragraphs: ["The Charter sets out principles of sovereign equality, peaceful settlement of disputes, and international cooperation. Their interpretation, implementation, and limits remain continuing subjects of law and international relations."] },
      ],
    },
    "vietnam-constitutional-framework": {
      title: "Vietnam’s Constitutional Framework", slug: "vietnam-constitutional-framework", readTime: "8 min read",
      summary: "A neutral introduction to the 2013 Constitution and the roles of state institutions identified in the text.",
      content: [
        { heading: "Scope", paragraphs: ["The 2013 Constitution is the document with the highest legal force in Vietnam’s legal system. It sets out principles concerning the political system, human and citizen rights, the organization of state institutions, national defence, foreign affairs, and constitutional amendment procedures."] },
        { heading: "Reading sources", paragraphs: ["To understand a particular institution, read the relevant provisions, implementing legislation, and current official sources directly. This overview does not replace legal advice or an authoritative interpretation."] },
      ],
    },
    "what-is-politics": {
      title: "What Is Politics?", slug: "what-is-politics", readTime: "5 min read",
      summary: "An entry point for thinking about how people make collective decisions, allocate resources, and work through disagreement in shared life.",
      content: [
        { heading: "What it includes", paragraphs: ["Politics does not happen only in parliaments, parties, or elections. In a broad sense, it concerns how a community handles matters it must decide together: who has a voice, what is prioritized, and which rules are considered fair."] },
        { heading: "A lens for beginning", paragraphs: ["Three questions can offer a start: what is the shared problem, who can influence the decision, and how is that decision explained or checked? They do not supply a single answer, but they help separate description, evidence, and value judgments as you read further."] },
      ],
    },
    "political-power": {
      title: "Political Power", slug: "political-power", readTime: "6 min read",
      summary: "The capacity to shape collective decisions, set rules, or affect how resources and opportunities are distributed in society.",
      content: [
        { heading: "More than commands", paragraphs: ["Political power can appear through law, institutions, resources, information, recognized authority, or the capacity to organize others. Looking only at formal titles is therefore rarely enough to understand who can influence a public decision."] },
        { heading: "The question of limits", paragraphs: ["Studying power often goes with questions of legitimacy, accountability, and checks. An institution may be designed to allocate authority, but how it works also depends on rules, context, and the people participating in it."] },
      ],
    },
    "public-policy": {
      title: "What Is Public Policy?", slug: "public-policy", readTime: "6 min read",
      summary: "The choices, actions, and sometimes inaction of public authorities in response to shared problems.",
      content: [
        { heading: "From problem to choice", paragraphs: ["Public policy often begins with how a problem is recognized and placed on an agenda. Options can differ in their aims, costs, affected groups, and measures of success. There is no single formula for turning a social problem into good policy."] },
        { heading: "Reading policy in context", paragraphs: ["When reading a policy, ask which problem is being defined, what evidence is being used, who participates in the choice, where resources come from, and which results will be followed. These questions help distinguish a policy description from a political evaluation of it."] },
      ],
    },
  },
  glossary: {
    authority: { term: "Authority", english: "Authority", definition: "Recognized entitlement to make decisions or require compliance within a defined scope." },
    state: { term: "State", english: "State", definition: "A set of institutions holding public authority over a defined territory and population; scholars define the term in different ways." },
    regime: { term: "Political Regime", english: "Political regime", definition: "The rules and patterns through which political power is acquired, exercised, and transferred." },
    "rule-of-law": { term: "Rule of Law", english: "Rule of law", definition: "The principle that public authority and individuals are governed by published laws that are applied consistently and can be independently reviewed." },
    constitution: { term: "Constitution", english: "Constitution", definition: "A document or set of fundamental rules governing public authority, rights and duties, and basic political procedures." },
    "judicial-review": { term: "Judicial Review", english: "Judicial review", definition: "A mechanism for assessing whether laws or exercises of public authority conform to the constitution; its specific form differs across countries." },
    "electoral-threshold": { term: "Electoral Threshold", english: "Electoral threshold", definition: "The minimum vote share a party or list may need to win seats in some electoral systems." },
    representation: { term: "Political Representation", english: "Political representation", definition: "A relationship in which a person or organization acts, speaks, or decides on behalf of a group of people or voters." },
    "civil-society": { term: "Civil Society", english: "Civil society", definition: "The sphere of associations, groups, and collective activity between private life, the market, and the state; its conceptual boundaries vary across research traditions." },
    federalism: { term: "Federalism", english: "Federalism", definition: "A form of state organization in which constitutional authority is divided between a federal level and constituent units." },
    "unitary-state": { term: "Unitary State", english: "Unitary state", definition: "A form of state organization in which constitutional sovereignty is concentrated at the national level, even where substantial administrative decentralization exists." },
    multilateralism: { term: "Multilateralism", english: "Multilateralism", definition: "An approach to international cooperation through rules, forums, and agreements among multiple states." },
  },
  countries: {
    vietnam: {
      name: "Vietnam", slug: "vietnam", region: "Southeast Asia", form: "Socialist republic", system: "Unitary state",
      overview: "The 2013 Constitution sets out principles for the organization of the state, human and citizen rights, and the roles of central institutions.",
      politicalSystem: "Socialist republic; unitary state",
      governmentStructure: "The 2013 Constitution sets out the National Assembly, the President, the Government, the People’s Court system, and other institutions.",
      legislature: "National Assembly", constitution: "2013 Constitution",
      note: "This profile describes the constitutional framework only and does not list current officeholders.",
    },
    "united-states": {
      name: "United States", slug: "united-states", region: "North America", form: "Federal republic", system: "Presidential system",
      overview: "The federal Constitution separates legislative, executive, and judicial functions; states retain authority within a federal arrangement.",
      politicalSystem: "Federal republic with a presidential system",
      governmentStructure: "The federal Constitution separates legislative, executive, and judicial powers; states retain authority within a federal arrangement.",
      legislature: "Congress, comprising the Senate and House of Representatives", constitution: "Constitution of the United States, signed in 1787",
      note: "The profile presents constitutional structure and is not tied to current officeholders.",
    },
    germany: {
      name: "Germany", slug: "germany", region: "Europe", form: "Federal republic", system: "Parliamentary system",
      overview: "The Basic Law establishes a federal state, a federal parliament, and relations between the Federation and the Länder.",
      politicalSystem: "Federal republic with a parliamentary system",
      governmentStructure: "The Basic Law establishes a federal state, a federal parliament, and relations between the Federation and the Länder.",
      legislature: "Bundestag and Bundesrat", constitution: "Basic Law of 1949",
      note: "Institution names are kept in their customary form to support source lookup.",
    },
    japan: {
      name: "Japan", slug: "japan", region: "East Asia", form: "Constitutional monarchy", system: "Parliamentary government",
      overview: "The Constitution identifies the Emperor as the symbol of the State, the National Diet as the highest organ of state power, and the Cabinet as exercising executive power.",
      politicalSystem: "Constitutional monarchy with parliamentary government",
      governmentStructure: "The Constitution identifies the Emperor as the symbol of the State, the National Diet as the highest organ of state power, and the Cabinet as exercising executive power.",
      legislature: "National Diet, comprising the House of Representatives and House of Councillors", constitution: "Constitution of Japan, effective 1947",
      note: "The description is based on the officially published constitutional text.",
    },
    india: {
      name: "India", slug: "india", region: "South Asia", form: "Federal democratic republic", system: "Parliamentary system",
      overview: "The Constitution establishes a federation, allocates some powers between the Union and states, and sets out legislative, executive, and judicial institutions.",
      politicalSystem: "Federal democratic republic with a parliamentary system",
      governmentStructure: "The Constitution establishes a federation, allocates some powers between the Union and states, and sets out legislative, executive, and judicial institutions.",
      legislature: "Parliament, comprising the Lok Sabha and Rajya Sabha", constitution: "Constitution of India, effective 1950",
      note: "This profile does not include information about current officeholders.",
    },
  },
  ideologies: {
    liberalism: {
      name: "Liberalism", slug: "liberalism",
      summary: "A family of ideas that foregrounds individual rights, the rule of law, and limits on power; strands differ in their social and economic policies.",
      dimensions: {
        liberty: "Emphasizes individual rights and freedoms, interpreted differently across its strands.",
        equality: "Often stresses equality before the law; some strands focus on equality of opportunity or social equality.",
        state: "Prioritizes limiting and constraining public power; the appropriate role of the state varies by strand.",
        economy: "Includes views from free markets to regulation intended to widen opportunity.",
        property: "Usually treats property rights as important, though the scope of protection varies.",
        democracy: "Commonly associated with representative government, rule of law, and political rights.",
        internationalism: "Some strands support international cooperation; their degree and rationale differ.",
        history: "Its modern origins are linked to debates about rights, law, and representative government.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    conservatism: {
      name: "Conservatism", slug: "conservatism",
      summary: "A family of ideas that commonly emphasizes tradition, order, institutional continuity, and caution about rapid change; it has many national variants.",
      dimensions: {
        liberty: "Commonly discusses liberty in relation to responsibility, order, and tradition.",
        equality: "Approaches are not uniform; many strands are cautious about rapid equalizing projects.",
        state: "Emphasizes stable institutions; the role of the state varies by strand.",
        economy: "Includes views ranging from markets to protectionist or communitarian policies.",
        property: "Many traditions treat property as an important social institution.",
        democracy: "May support representative institutions while emphasizing gradual reform.",
        internationalism: "Ranges from cautious cooperation to an emphasis on national interest.",
        history: "Values historical continuity and accumulated experience.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    socialism: {
      name: "Socialism", slug: "socialism",
      summary: "A family of ideas that emphasizes social equality and collective influence over economic life; it differs in methods and in the desired scope of the state.",
      dimensions: {
        liberty: "Interprets liberty in relation to material conditions and economic power; strands differ.",
        equality: "Places particular emphasis on reducing inequality and/or advancing social equality.",
        state: "Includes debates from welfare states and public ownership to forms of self-government.",
        economy: "Often asks how economic life can be subject to democratic or social control.",
        property: "Strands differ over private, public, cooperative, or mixed ownership.",
        democracy: "Many strands connect their aims with expanding political and/or economic democracy.",
        internationalism: "Includes traditions of international cooperation and solidarity, with differing interpretations.",
        history: "Diverse currents range from utopian and Marxist socialism to social democracy.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    nationalism: {
      name: "Nationalism", slug: "nationalism",
      summary: "A family of ideas that sees the nation as an important political or moral community; understandings of membership, self-determination, and international relations vary widely.",
      dimensions: {
        liberty: "Views of individual liberty vary with civic, cultural, or ethnic understandings of the nation.",
        equality: "Some forms emphasize civic equality, while others differ considerably.",
        state: "Commonly treats the nation-state or self-determination as important.",
        economy: "Does not prescribe one economic policy.",
        property: "Does not prescribe a single position on property.",
        democracy: "Can combine with democracy, anti-colonial politics, or other political forms.",
        internationalism: "Often prioritizes self-determination and national interest without necessarily excluding international cooperation.",
        history: "Connected to nation formation, empire, colonialism, and national liberation.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
    "green-politics": {
      name: "Green Politics", slug: "green-politics",
      summary: "A family of ideas connecting environmental protection with intergenerational justice, sustainability, participatory democracy, and questions about development models.",
      dimensions: {
        liberty: "Often connects liberty with ecological conditions, participation, and intergenerational responsibility.",
        equality: "Commonly addresses environmental justice and the distribution of risks and benefits.",
        state: "Views differ on regulation, decentralization, and the role of communities.",
        economy: "Often critiques unsustainable development models and advances varied alternatives.",
        property: "Includes debates about commons, land-use rights, and environmental responsibility.",
        democracy: "Many strands emphasize participation and transparency in environmental decision-making.",
        internationalism: "Often attends to the cross-border nature of climate crises and to international cooperation.",
        history: "Developed alongside environmental movements and debates about sustainable development.",
      },
      dimensionNote: "These descriptions support initial exploration; they do not replace intellectual history, primary texts, or differences among strands.",
    },
  },
  events: {
    "magna-carta": { title: "Magna Carta Sealed", summary: "A medieval English charter frequently cited in the history of limiting power; its significance has changed across periods.", region: "Western Europe", tags: ["constitution", "rule of law", "England"], type: "Document" },
    "peace-of-westphalia": { title: "Peace of Westphalia", summary: "A set of treaties ending conflicts in Europe, often used as a reference point in debates about international order and sovereignty.", region: "Central Europe", tags: ["sovereignty", "international relations", "peace treaty"], type: "Treaty" },
    "us-constitution-signed": { title: "U.S. Constitution Signed", summary: "The federal constitutional text that established the foundations of United States institutions and can be amended through constitutional procedures.", region: "North America", tags: ["constitution", "federalism", "separation of powers"], type: "Constitution" },
    "declaration-rights-man-citizen": { title: "French Declaration of the Rights of Man and of the Citizen", summary: "A document of the French Revolution of 1789 that greatly influenced debates about rights, law, and citizenship.", region: "Western Europe", tags: ["human rights", "citizenship", "French Revolution"], type: "Declaration" },
    "un-charter-signed": { title: "UN Charter Signed", summary: "The Charter established the United Nations and its basic framework of principles.", region: "Global", tags: ["United Nations", "multilateralism", "peace"], type: "International instrument" },
    "udhr-adopted": { title: "Universal Declaration of Human Rights Adopted", summary: "The United Nations General Assembly adopted a document setting out fundamental rights and freedoms.", region: "Global", tags: ["human rights", "United Nations", "declaration"], type: "Declaration" },
    "berlin-wall-fall": { title: "Berlin Wall Opens", summary: "A symbolic milestone in the political changes in Europe at the end of the Cold War.", region: "Europe", tags: ["Cold War", "Germany", "political transition"], type: "Event" },
    "vietnam-constitution-2013": { title: "Vietnam’s 2013 Constitution Adopted", summary: "Vietnam’s current constitutional text was adopted by the National Assembly in 2013.", region: "Southeast Asia", tags: ["Vietnam", "constitution", "institutions"], type: "Constitution" },
  },
  sourceKinds: {
    "Văn kiện quốc tế": "International instrument",
    "Nguồn sơ cấp": "Primary source",
    "Tài liệu học thuật": "Scholarly reference",
    "Sổ tay nghiên cứu": "Research handbook",
    "Dữ liệu nghiên cứu": "Research data",
    "Cơ sở dữ liệu hiến pháp": "Constitutional database",
    "Văn bản pháp lý": "Legal text",
    "Tài liệu lưu trữ": "Archival document",
    "Văn kiện lịch sử": "Historical document",
    "Văn bản hiến pháp": "Constitutional text",
  },
  sources: {
    "vietnam-constitution": { publisher: "Government Portal of Vietnam" },
  },
  relationshipLabels: {
    "giải thích": "explains",
    "chứa": "contains",
    "được bảo đảm bởi": "is supported by",
    "có thể sử dụng": "may use",
    "thường bao gồm": "commonly includes",
    "liên hệ với": "relates to",
    "gắn với": "is associated with",
    "có thể có": "may include",
    "được thiết lập bởi": "is established by",
    "bối cảnh tranh luận": "context for debate about",
    "gợi mở": "raises questions about",
    "khung hiến định": "constitutional framework",
    "ví dụ hiến định": "constitutional example",
    "ví dụ tổ chức nhà nước": "example of state organization",
    "hồ sơ so sánh": "comparative profile",
    "được giới thiệu trong": "is introduced in",
    "thường nhấn mạnh": "commonly emphasizes",
    "thường bàn về": "commonly discusses",
    "liên hệ toàn cầu": "global connection",
    "được so sánh với": "is compared with",
  },
};

const localizeRecords = (records, copy = {}) => records.map((record) => ({ ...record, ...(copy[record.id] || {}) }));

function collectionsForLanguage(language) {
  const collator = new Intl.Collator(language, { sensitivity: "base" });
  const topicTitles = new Map(sourceTopics.map((topic) => [topic.id, topic.title]));

  if (language === "vi") {
    const topics = sourceTopics.map((record) => ({ ...record }));
    return {
      topics,
      articles: sourceArticles
        .map((record) => ({ ...record, domain: topicTitles.get(record.domain) || record.domain }))
        .sort((a, b) => collator.compare(a.title, b.title)),
      glossary: sourceGlossary
        .map((record) => ({ ...record, aliases: [record.english].filter(Boolean) }))
        .sort((a, b) => collator.compare(a.term, b.term)),
      countries: sourceCountries
        .map((record) => ({ ...record }))
        .sort((a, b) => collator.compare(a.region, b.region) || collator.compare(a.name, b.name)),
      ideologies: sourceIdeologies.map((record) => ({ ...record })),
      events: sourceEvents.map((record) => ({ ...record })).sort((a, b) => String(a.date).localeCompare(String(b.date), "vi")),
      sources: sourceSources
        .map((record) => ({ ...record }))
        .sort((a, b) => collator.compare(a.kind, b.kind) || Number(b.year || 0) - Number(a.year || 0) || collator.compare(a.title, b.title)),
      relationships: sourceRelationships.map((record) => ({ ...record })),
      fullTaxonomy: sourceTopics.map((topic) => topic.title),
    };
  }

  const topics = localizeRecords(sourceTopics, englishCopy.topics);
  return {
    topics,
    articles: localizeRecords(sourceArticles, englishCopy.articles)
      .map((record) => ({ ...record, domain: englishCopy.topics[record.domain]?.title || record.domain }))
      .sort((a, b) => collator.compare(a.title, b.title)),
    glossary: sourceGlossary.map((record) => ({
      ...record,
      ...(englishCopy.glossary[record.id] || {}),
      aliases: [record.term, record.english].filter(Boolean),
      english: "",
    })).sort((a, b) => collator.compare(a.term, b.term)),
    countries: localizeRecords(sourceCountries, englishCopy.countries)
      .sort((a, b) => collator.compare(a.region, b.region) || collator.compare(a.name, b.name)),
    ideologies: localizeRecords(sourceIdeologies, englishCopy.ideologies),
    events: localizeRecords(sourceEvents, englishCopy.events).sort((a, b) => String(a.date).localeCompare(String(b.date), "en")),
    sources: sourceSources.map((record) => ({
      ...record,
      ...(englishCopy.sources[record.id] || {}),
      kind: englishCopy.sourceKinds[record.kind] || record.kind,
    })).sort((a, b) => collator.compare(a.kind, b.kind) || Number(b.year || 0) - Number(a.year || 0) || collator.compare(a.title, b.title)),
    relationships: sourceRelationships.map((record) => ({
      ...record,
      label: englishCopy.relationshipLabels[record.label] || record.label,
    })),
    fullTaxonomy: sourceTopics.map((topic) => englishCopy.topics[topic.id]?.title || topic.title),
  };
}

let currentLanguage = "vi";
try {
  const savedLanguage = localStorage.getItem("politicore-language");
  if (["en", "vi"].includes(savedLanguage)) currentLanguage = savedLanguage;
} catch {
  // Language persistence is optional when storage is unavailable.
}

let currentTheme = "light";
try {
  const savedTheme = localStorage.getItem("politicore-theme");
  if (["light", "dark"].includes(savedTheme)) {
    currentTheme = savedTheme;
  } else if (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches) {
    currentTheme = "dark";
  }
} catch {
  // The appearance toggle still works when storage is unavailable.
}

let { topics, articles, glossary, countries, ideologies, events, sources, relationships, fullTaxonomy } = collectionsForLanguage(currentLanguage);
const app = document.querySelector("#app");
const civitasCategories = sourceCivitasCategories.map((category) => ({
  ...category,
  domainIds: [...new Set(category.domainIds || [])],
  articleIds: [...new Set(category.articleIds || [])],
}));
const timelinePeriods = sourceTimelinePeriods.map((item) => ({ ...item }));
const timelineRegions = sourceTimelineRegions.map((item) => ({ ...item }));
const timelineCategories = sourceTimelineCategories.map((item) => ({ ...item }));
const timelineSources = sourceTimelineSources.map((item) => ({ ...item }));
const timelineEntities = sourceTimelineEntities.map((item) => ({ ...item }));
const timelineCountryDirectory = sourceTimelineCountryDirectory.map((item) => ({ ...item }));
const timelineEvents = sourceTimelineEvents.map((item) => ({ ...item }));
const timelineCoverage = { ...sourceTimelineCoverage };
const learningNodes = sourceLearningNodes.map((node) => ({
  ...node,
  prerequisiteIds: [...new Set(node.prerequisiteIds || [])],
}));
const learningPaths = sourceLearningPaths.map((path) => ({ ...path, nodeIds: [...new Set(path.nodeIds || [])] }));
const learningCheck = sourceLearningCheck.map((item) => ({ ...item }));
const LEARNING_PROGRESS_KEY = "civitas-learning-progress-v1";
const LEGACY_LEARNING_PROGRESS_KEY = "politicore-learning-progress-v1";
const BOOKMARKS_KEY = "civitas-bookmarks-v1";
const LEARNING_STATUSES = new Set(["not_started", "read", "learning", "mastered", "review", "skipped"]);

const learningProfiles = [
  {
    id: "new",
    label: "Tôi chưa biết gì về chính trị",
    labelEn: "I am new to politics",
    description: "Bắt đầu bằng các khái niệm nền tảng và không cần làm khảo sát ngay.",
    descriptionEn: "Start with core concepts; no assessment is required.",
    pathId: "start",
  },
  {
    id: "basic",
    label: "Tôi đã có kiến thức cơ bản",
    labelEn: "I already know the basics",
    description: "Kiểm tra nhanh kiến thức nền rồi đi vào nhánh bạn quan tâm.",
    descriptionEn: "Take a quick check, then move into a branch you care about.",
    pathId: "institutions",
  },
  {
    id: "uneven",
    label: "Kiến thức của tôi chưa đồng đều",
    labelEn: "My knowledge is uneven",
    description: "Đánh dấu phần đã nắm và để hệ thống chỉ ra các nền tảng còn thiếu.",
    descriptionEn: "Mark what you know and surface the foundations you may be missing.",
    pathId: "start",
  },
  {
    id: "focus",
    label: "Tôi muốn học một lĩnh vực cụ thể",
    labelEn: "I want to study one field",
    description: "Chọn nhánh; bài viết luôn mở tự do, kể cả khi còn nền tảng gợi ý.",
    descriptionEn: "Choose a branch; articles always remain open even with suggested foundations.",
    pathId: "elections",
  },
  {
    id: "analysis",
    label: "Tôi muốn rèn phân tích chính sách / nghiên cứu",
    labelEn: "I want to build analysis skills",
    description: "Đi từ khái niệm và thiết chế đến cách đọc nguồn, tiêu chí và giới hạn.",
    descriptionEn: "Move from concepts and institutions to reading sources, criteria, and limitations.",
    pathId: "institutions",
  },
  {
    id: "self",
    label: "Tôi tự xây lộ trình",
    labelEn: "I will build my own path",
    description: "Tự chọn nhánh và trạng thái học; hệ thống chỉ đưa ra gợi ý minh bạch.",
    descriptionEn: "Choose branches and learning states yourself; the system only gives transparent suggestions.",
    pathId: "start",
  },
];

function emptyLearningProgress() {
  return {
    version: 2,
    profile: { entryMode: "new", activePathId: "start", selfAssessedIds: [] },
    nodes: {},
    readArticles: {},
    checks: {},
    updatedAt: null,
  };
}

function hasLearningNode(id) {
  return learningNodes.some((node) => node.id === id);
}

function normalizeLearningProgress(raw) {
  const clean = emptyLearningProgress();
  if (!raw || typeof raw !== "object") return clean;
  const profile = raw.profile && typeof raw.profile === "object" ? raw.profile : {};
  clean.profile.entryMode = learningProfiles.some((item) => item.id === profile.entryMode) ? profile.entryMode : clean.profile.entryMode;
  clean.profile.activePathId = learningPaths.some((item) => item.id === profile.activePathId) ? profile.activePathId : clean.profile.activePathId;
  clean.profile.selfAssessedIds = Array.isArray(profile.selfAssessedIds) ? profile.selfAssessedIds.filter(hasLearningNode) : [];

  if (raw.nodes && typeof raw.nodes === "object") {
    Object.entries(raw.nodes).forEach(([nodeId, entry]) => {
      if (!hasLearningNode(nodeId) || !entry || typeof entry !== "object" || !LEARNING_STATUSES.has(entry.status)) return;
      clean.nodes[nodeId] = {
        status: entry.status,
        updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : null,
      };
    });
  }

  if (raw.readArticles && typeof raw.readArticles === "object") {
    Object.entries(raw.readArticles).forEach(([articleId, updatedAt]) => {
      if (!sourceArticles.some((article) => article.id === articleId) || typeof updatedAt !== "string") return;
      clean.readArticles[articleId] = updatedAt;
    });
  }

  if (raw.checks && typeof raw.checks === "object") {
    Object.entries(raw.checks).forEach(([checkId, entry]) => {
      const check = learningCheck.find((item) => item.id === checkId);
      if (!check || !entry || typeof entry !== "object") return;
      clean.checks[checkId] = {
        attempts: Number.isFinite(entry.attempts) ? Math.max(0, entry.attempts) : 0,
        selectedIndex: Number.isInteger(entry.selectedIndex) ? entry.selectedIndex : null,
        correct: typeof entry.correct === "boolean" ? entry.correct : null,
        attemptedAt: typeof entry.attemptedAt === "string" ? entry.attemptedAt : null,
      };
    });
  }

  clean.updatedAt = typeof raw.updatedAt === "string" ? raw.updatedAt : null;
  return clean;
}

function loadLearningProgress() {
  try {
    const saved = localStorage.getItem(LEARNING_PROGRESS_KEY) || localStorage.getItem(LEGACY_LEARNING_PROGRESS_KEY);
    return normalizeLearningProgress(JSON.parse(saved || "null"));
  } catch {
    return emptyLearningProgress();
  }
}

let learningProgress = loadLearningProgress();

function saveLearningProgress() {
  learningProgress.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(learningProgress));
    return true;
  } catch {
    return false;
  }
}

function learningNodeProgress(nodeId) {
  return learningProgress.nodes[nodeId] || { status: "not_started", updatedAt: null };
}

function learningStatus(nodeId) {
  return learningNodeProgress(nodeId).status;
}

function setLearningStatus(nodeId, status) {
  if (!hasLearningNode(nodeId) || !LEARNING_STATUSES.has(status)) return false;
  if (status === "not_started") {
    delete learningProgress.nodes[nodeId];
  } else {
    learningProgress.nodes[nodeId] = { status, updatedAt: new Date().toISOString() };
  }
  return saveLearningProgress();
}

function isArticleRead(articleId) {
  return Boolean(learningProgress.readArticles[articleId] || learningStatus(articleId) === "read");
}

function setArticleRead(articleId, read = true) {
  if (!sourceArticles.some((article) => article.id === articleId)) return false;
  if (read) learningProgress.readArticles[articleId] = new Date().toISOString();
  else delete learningProgress.readArticles[articleId];
  return saveLearningProgress();
}

function loadBookmarks() {
  try {
    const raw = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
    return new Set(Array.isArray(raw) ? raw.filter((id) => sourceArticles.some((article) => article.id === id)) : []);
  } catch {
    return new Set();
  }
}

let bookmarkedArticleIds = loadBookmarks();

function isBookmarked(articleId) {
  return bookmarkedArticleIds.has(articleId);
}

function saveBookmarks() {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...bookmarkedArticleIds]));
    return true;
  } catch {
    return false;
  }
}

function toggleBookmark(articleId) {
  if (!sourceArticles.some((article) => article.id === articleId)) return false;
  if (bookmarkedArticleIds.has(articleId)) bookmarkedArticleIds.delete(articleId);
  else bookmarkedArticleIds.add(articleId);
  return saveBookmarks();
}

function selectLearningProfile(profileId) {
  const profile = learningProfiles.find((item) => item.id === profileId);
  if (!profile) return false;
  learningProgress.profile.entryMode = profile.id;
  learningProgress.profile.activePathId = profile.pathId;
  return saveLearningProgress();
}

const state = {
  searchOpen: false,
  query: "",
  searchType: "all",
  glossaryLetter: "all",
  countryRegion: "all",
  timelineRegion: "all",
  timelineTag: "all",
  compareLeft: ideologies[0]?.slug || "",
  compareRight: ideologies[1]?.slug || ideologies[0]?.slug || "",
  learningMap: { x: 0, y: 0, scale: 1 },
  roadmapGoalOpen: false,
  suppressLandingIntro: false,
};
let languageRenderTimer;
let themeTransitionTimer;
const LANGUAGE_SWITCH_DURATION = 340;

function sourceRecordId(reference, sourceRecords, translations = {}) {
  return sourceRecords.find((record) => (
    record.id === reference
    || record.slug === reference
    || translations[record.id]?.slug === reference
  ))?.id;
}

function currentRecordByReference(reference, currentRecords, sourceRecords, translations = {}) {
  const id = sourceRecordId(reference, sourceRecords, translations);
  return currentRecords.find((record) => record.id === id || record.slug === reference);
}

function updateDocumentLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "vi"
    ? "civitas. — một thư viện nhỏ về chính trị"
    : "civitas. — a little library of politics";
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = currentLanguage === "vi"
      ? "Civitas — một thư viện nhỏ, ấm áp để khám phá chính trị, con người và cách thế giới vận hành."
      : "Civitas — a cozy little library for exploring politics, people, and how the world works.";
  }
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = currentLanguage === "vi" ? "Bỏ qua điều hướng" : "Skip to content";
}

function updateDocumentTheme() {
  const root = document.documentElement;
  root.dataset.theme = currentTheme;
  root.style.colorScheme = currentTheme;
}

function themeToggleLabel() {
  if (currentLanguage === "vi") {
    return currentTheme === "dark" ? "Chuyển sang nền sáng" : "Chuyển sang nền tối";
  }
  return currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function changeTheme(theme) {
  if (!["light", "dark"].includes(theme) || theme === currentTheme) return;

  currentTheme = theme;
  document.documentElement.classList.add("theme-transition");
  updateDocumentTheme();

  try {
    localStorage.setItem("politicore-theme", currentTheme);
  } catch {
    // The theme is still applied for the current session.
  }

  window.clearTimeout(themeTransitionTimer);
  themeTransitionTimer = window.setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, prefersReducedMotion() ? 0 : 460);
}

function toggleTheme() {
  changeTheme(currentTheme === "dark" ? "light" : "dark");
}

function changeLanguage(language) {
  if (!["en", "vi"].includes(language) || language === currentLanguage) return;

  const selectedLeftId = sourceRecordId(state.compareLeft, sourceIdeologies, englishCopy.ideologies);
  const selectedRightId = sourceRecordId(state.compareRight, sourceIdeologies, englishCopy.ideologies);
  ({ topics, articles, glossary, countries, ideologies, events, sources, relationships, fullTaxonomy } = collectionsForLanguage(language));
  currentLanguage = language;
  state.compareLeft = ideologies.find((item) => item.id === selectedLeftId)?.slug || ideologies[0]?.slug || "";
  state.compareRight = ideologies.find((item) => item.id === selectedRightId)?.slug || ideologies[1]?.slug || ideologies[0]?.slug || "";
  state.glossaryLetter = "all";
  updateDocumentLanguage();

  try {
    localStorage.setItem("politicore-language", currentLanguage);
  } catch {
    // The toggle still works when storage is unavailable.
  }
}

updateDocumentTheme();
updateDocumentLanguage();

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const uiText = {
  "THƯ VIỆN THAM CHIẾU · BẢN DEMO CÓ NGUỒN": "REFERENCE LIBRARY · SOURCED DEMO",
  "Phi đảng phái · Ưu tiên bằng chứng &amp; ngữ cảnh": "Non-partisan · Evidence and context first",
  "PolitiCore — trang chủ": "PolitiCore — home",
  "Điều hướng chính": "Primary navigation",
  "Điều hướng di động": "Mobile navigation",
  "Điều hướng chân trang": "Footer navigation",
  "Chọn ngôn ngữ": "Choose language",
  "Tiếng Anh": "English",
  "Tiếng Việt": "Vietnamese",
  "Mở tìm kiếm": "Open search",
  "Mở menu": "Open menu",
  "Tìm kiếm": "Search",
  "Khám phá": "Explore",
  "Bách khoa": "Encyclopedia",
  "Thuật ngữ": "Glossary",
  "Quốc gia": "Countries",
  "So sánh": "Compare",
  "Dòng thời gian": "Timeline",
  "Nguồn tư liệu": "Sources",
  "Về PolitiCore": "About PolitiCore",
  "Hồ sơ quốc gia": "Country profiles",
  "Thư viện nguồn": "Source library",
  "Nguyên tắc biên tập": "Editorial principles",
  "Một cấu trúc tham chiếu để kết nối khái niệm, thể chế, lịch sử và bằng chứng — không phải một dòng tin tức hay lời kêu gọi chính trị.": "A reference framework connecting concepts, institutions, history, and evidence—not a news feed or a political call to action.",
  "Dữ liệu minh hoạ có liên kết nguồn gốc · Không thay thế nghiên cứu chuyên môn": "Illustrative data linked to original sources · Not a substitute for specialist research",
  "Đã biên tập": "Reviewed",
  "Cập nhật": "Updated",
  "Bản đồ các khái niệm chính trị liên kết": "Map of connected political concepts",
  "Quyền lực nằm ở trung tâm và kết nối với nhà nước, pháp quyền, đại diện, chủ quyền, hiến pháp và tham gia chính trị.": "Power sits at the centre, connected to the state, legitimacy, representation, sovereignty, and constitutionalism.",
  "Tính chính danh": "Legitimacy",
  "Đại diện": "Representation",
  "Chủ quyền": "Sovereignty",
  "Hiến pháp": "Constitution",
  "Nhà nước": "State",
  "Quyền lực": "Power",
  "Bách khoa tri thức chính trị": "Political knowledge encyclopedia",
  "Hiểu chính trị<br />qua những <em>mối liên hệ.</em>": "Understand politics<br />through <em>relationships.</em>",
  "Khám phá khái niệm, thể chế, lịch sử và các nguồn tư liệu — từ một câu hỏi rộng đến một chi tiết cần kiểm chứng.": "Explore concepts, institutions, history, and source materials—from a broad question to a detail worth checking.",
  "Bạn muốn hiểu điều gì về chính trị?": "What would you like to understand about politics?",
  "Tìm trong PolitiCore": "Search PolitiCore",
  "Tìm hiểu": "Explore",
  "Gợi ý tìm kiếm": "Suggested searches",
  "Bắt đầu với": "Start with",
  "Dân chủ": "Democracy",
  "Phân quyền": "Separation of Powers",
  "Chủ nghĩa tự do": "Liberalism",
  "Phạm vi thư viện": "Library scope",
  "miền tri thức<br />có thể mở rộng": "expandable knowledge<br />domains",
  "mục tham chiếu<br />được liên kết": "linked reference<br />entries",
  "nguồn chính &amp;<br />học thuật": "primary &amp;<br />academic sources",
  "Bản đồ tri thức trực quan": "Visual knowledge map",
  "Bản đồ tri thức · Mẫu liên kết": "Knowledge map · connection sample",
  "chọn một nút để mở mục liên quan": "select a node to open a related entry",
  "Chính trị được hiểu rõ hơn khi các ý tưởng, thiết chế và bối cảnh lịch sử được đặt trong cùng một khung tham chiếu.": "Politics becomes clearer when ideas, institutions, and historical context are placed in one reference frame.",
  "Khám phá theo miền": "Explore by domain",
  "Một câu hỏi có thể mở ra cả một hệ thống.": "One question can open up an entire system.",
  "Bắt đầu từ điểm bạn cần — rồi lần theo các kết nối sang lý thuyết, lịch sử, quốc gia, tư liệu và tranh luận học thuật.": "Start where you need to, then follow connections to theory, history, countries, sources, and scholarly debate.",
  "Khám phá mục": "Explore entries",
  "Xem toàn bộ taxonomy": "View the full taxonomy",
  "Một khái niệm chính trị cần được đọc trong bối cảnh thể chế, lịch sử và các tranh luận về thực hành.": "A political concept best read through institutional, historical, and practical debate.",
  "Đọc mục tham chiếu": "Read the reference entry",
  "Tri thức có kết nối": "Connected knowledge",
  "Đừng chỉ đọc một khái niệm. Hãy nhìn cấu trúc quanh nó.": "Do not read one concept in isolation. See the structure around it.",
  "Mỗi mối quan hệ trong bản demo đều xuất phát từ dữ liệu cùng với các mục tham chiếu liên quan.": "Every relationship in this demo is grounded in data and related reference entries.",
  "Các khái niệm liên quan tới dân chủ": "Concepts related to democracy",
  "Chính danh": "Legitimacy",
  "Lịch sử có ngữ cảnh": "History in context",
  "Dòng thời gian không chỉ là danh sách ngày tháng.": "A timeline is more than a list of dates.",
  "Điểm vào để xem sự kiện, văn bản và thiết chế đã được kết nối như thế nào trong từng bối cảnh.": "An entry point for seeing how events, texts, and institutions connect in context.",
  "Mở dòng thời gian": "Open timeline",
  "Hồ sơ quốc gia": "Country profiles",
  "Đọc hệ thống chính trị trong bối cảnh riêng của mỗi nơi.": "Read each political system in its own context.",
  "Duyệt thư mục quốc gia": "Browse country directory",
  "So sánh có tiêu chí": "Criteria-based comparison",
  "Các hệ tư tưởng không phải những nhãn cố định.": "Ideologies are not fixed labels.",
  "Đặt các truyền thống tư tưởng cạnh nhau theo từng chiều phân tích, đồng thời giữ lại tính đa dạng và những giới hạn của so sánh.": "Place intellectual traditions side by side across analytical dimensions while preserving their diversity and the limits of comparison.",
  "Mở công cụ so sánh": "Open comparison tool",
  "Mở bảng so sánh hệ tư tưởng": "Open ideology comparison table",
  "Chiều xem xét": "Dimension",
  "Truyền thống A": "Tradition A",
  "Truyền thống B": "Tradition B",
  "Vai trò của nhà nước": "Role of the state",
  "diễn giải theo dòng": "interpreted in context",
  "Tổ chức kinh tế": "Economic organization",
  "không giản lược": "not reduced to a spectrum",
  "Các trường phái nội bộ": "Internal schools",
  "có ghi chú": "with notes",
  "Nguồn &amp; văn bản": "Sources &amp; texts",
  "Tranh luận tốt bắt đầu bằng nguồn có thể truy lại.": "Good arguments begin with traceable sources.",
  "Phân biệt tài liệu gốc với diễn giải học thuật, hiển thị rõ xuất xứ và lối dẫn về văn bản.": "Distinguish primary materials from scholarly interpretation, and show provenance with a path back to the text.",
  "Vào thư viện nguồn": "Open source library",
  "Hồ sơ tham chiếu": "Reference profile",
  "Nguồn tham chiếu": "Reference source",
  "Thư viện tham chiếu": "Reference library",
  "Bách khoa chính trị": "Political encyclopedia",
  "Một cấu trúc phân cấp để bắt đầu từ miền kiến thức, đi vào chủ đề, rồi mở các mục tham chiếu có nguồn.": "A hierarchical structure that starts with a knowledge domain, moves into a topic, then opens sourced reference entries.",
  "mục trong bộ dữ liệu demo": "entries in the demo dataset",
  "Lọc theo miền": "Filter by domain",
  "Tất cả": "All",
  "Taxonomy bách khoa": "Encyclopedia taxonomy",
  "10 miền tri thức": "10 knowledge domains",
  "Chưa có mục phù hợp": "No matching entries",
  "Hãy thử một miền khác hoặc quay lại danh mục đầy đủ.": "Try another domain or return to the full directory.",
  "Tham chiếu": "Reference",
  "Đọc →": "Read →",
  "Mục tham chiếu": "Reference entry",
  "Sao chép liên kết": "Copy link",
  "Trích dẫn mục này": "Cite this entry",
  "Định nghĩa ngắn": "Short definition",
  "Mở rộng từ đây": "Explore from here",
  "Khám phá thêm mục trong bách khoa": "Explore more entries in the encyclopedia",
  "Nguồn &amp; ghi chú": "Sources &amp; notes",
  "Mục demo này chưa được gắn nguồn chi tiết. Hãy xem thư viện nguồn để kiểm tra dữ liệu có sẵn.": "This demo entry has no detailed sources attached yet. Open the source library to review available material.",
  "Trong mục này": "On this page",
  "Thông tin biên tập": "Editorial information",
  "Trạng thái": "Status",
  "Chế độ dữ liệu": "Data mode",
  "Tham chiếu demo": "Demo reference",
  "Góc nhìn tham chiếu": "Reference perspective",
  "Phạm vi và cách dùng": "Scope and use",
  "Mục tham chiếu này được thiết kế để định hướng khái niệm, dẫn đến các nguồn có thể kiểm tra và mở ra những liên hệ phù hợp.": "This reference entry is designed to orient the concept, lead to checkable sources, and open relevant connections.",
  "Bối cảnh và tranh luận": "Context and debate",
  "Trong khoa học chính trị, cùng một thuật ngữ có thể được dùng theo nhiều truyền thống nghiên cứu. Vì vậy, định nghĩa nên được đọc cùng phạm vi, tiêu chí và bối cảnh lịch sử của nó.": "In political science, the same term can be used across several research traditions. Read a definition alongside its scope, criteria, and historical context.",
  "Các mối liên hệ": "Connections",
  "Khái niệm này liên quan đến những mục khác trong thư viện, giúp người đọc so sánh cơ chế, thiết chế và cách diễn giải thay vì coi nó như một nhãn độc lập.": "This concept links to other entries in the library, helping readers compare mechanisms, institutions, and interpretations rather than treating it as a standalone label.",
  "Sơ đồ minh hoạ: các nhánh quyền lực": "Illustration: branches of government",
  "Lăng kính đọc mục tham chiếu": "Reference-entry reading lens",
  "Lập pháp": "Legislative",
  "làm luật &amp; giám sát": "makes laws &amp; oversees",
  "Hành pháp": "Executive",
  "thi hành &amp; quản trị": "implements &amp; governs",
  "Tư pháp": "Judicial",
  "xét xử &amp; giải thích luật": "adjudicates &amp; interprets law",
  "Khái niệm": "Concept",
  "định nghĩa &amp; phạm vi": "definition &amp; scope",
  "Bối cảnh": "Context",
  "lịch sử &amp; thể chế": "history &amp; institutions",
  "văn bản &amp; nghiên cứu": "texts &amp; research",
  "Minh hoạ cấu trúc đọc trong bản demo; không thay thế mô tả pháp lý hoặc dữ liệu thực chứng chi tiết.": "A reading-structure illustration for this demo; it does not replace detailed legal description or empirical evidence.",
  "Thuật ngữ chính trị": "Political terms",
  "Từ điển khái niệm": "Concept glossary",
  "Định nghĩa ngắn để định hướng, cùng thuật ngữ tiếng Anh và đường dẫn sang các mục tham chiếu sâu hơn.": "Short definitions for orientation, with related terms and links to deeper reference entries.",
  "Tìm thuật ngữ...": "Search terms…",
  "Tìm thuật ngữ": "Search terms",
  "Tìm": "Search",
  "thuật ngữ trong bản demo": "terms in the demo",
  "Duyệt theo chữ cái": "Browse by letter",
  "Không tìm thấy thuật ngữ": "No terms found",
  "Thử thay đổi từ khoá hoặc duyệt theo chữ cái.": "Try a different keyword or browse by letter.",
  "Hồ sơ so sánh": "Comparative profiles",
  "Quốc gia &amp; hệ thống": "Countries &amp; systems",
  "Các hồ sơ được tổ chức theo bối cảnh, cấu trúc chính thức và đường dẫn về nguồn — không dùng nhãn phân loại như những kết luận tuyệt đối.": "Profiles organized by context, formal structure, and paths to sources—without treating classifications as absolute conclusions.",
  "hồ sơ trong dữ liệu demo": "profiles in demo data",
  "Lọc theo khu vực": "Filter by region",
  "Tất cả khu vực": "All regions",
  "Xem hồ sơ": "View profile",
  "Nguồn có dẫn": "Sourced material",
  "Không có hồ sơ ở khu vực này": "No profiles in this region",
  "Hãy quay lại xem tất cả hồ sơ demo.": "Return to view all demo profiles.",
  "Hồ sơ quốc gia": "Country profile",
  "Hồ sơ tham chiếu theo bối cảnh hiến pháp, thể chế và nguồn tư liệu.": "A reference profile organized around constitutional context, institutions, and source materials.",
  "HỒ SƠ DEMO": "DEMO PROFILE",
  "Mô tả hình thức hiến pháp được ghi ở mức tham chiếu.": "A constitutional form described for reference purposes.",
  "Đọc hồ sơ này như thế nào": "How to read this profile",
  "Mục này tổ chức một điểm vào về cấu trúc chính thức, bối cảnh lịch sử và nguồn tài liệu có thể kiểm tra.": "This entry provides a starting point for formal structures, historical context, and checkable source material.",
  "Giới hạn dữ liệu": "Data limits",
  "Hồ sơ demo không nêu chức danh đương nhiệm, số liệu hoặc phân loại gây tranh cãi nếu chưa có quá trình xác minh theo thời điểm. Hãy mở nguồn gốc để kiểm tra ngữ cảnh và phiên bản mới nhất.": "This demo profile does not state current officeholders, figures, or disputed classifications without time-specific verification. Open the original sources to check context and the latest version.",
  "Khung tham chiếu": "Reference frame",
  "Trong PolitiCore, mô tả về một quốc gia tách biệt giữa cấu trúc pháp lý chính thức, thực hành chính trị và các diễn giải học thuật. Một nhãn hệ thống không tự giải thích đầy đủ cách quyền lực vận hành trong từng thời kỳ.": "In PolitiCore, a country description distinguishes formal legal structure, political practice, and scholarly interpretation. A system label alone cannot fully explain how power operates in any period.",
  "Các lối vào hồ sơ": "Profile entry points",
  "Văn bản nền tảng": "Foundational texts",
  "hiến pháp &amp; tài liệu gốc": "constitutions &amp; primary documents",
  "Thiết chế": "Institutions",
  "cơ quan &amp; thẩm quyền": "bodies &amp; powers",
  "Lịch sử": "History",
  "thay đổi &amp; bối cảnh": "change &amp; context",
  "Khung tổ chức thông tin; không phải đánh giá hay xếp hạng quốc gia.": "An information-organizing frame, not a country assessment or ranking.",
  "Nguồn gắn với hồ sơ": "Sources attached to this profile",
  "Chưa có nguồn được gắn trực tiếp trong bản demo.": "No sources are directly attached in this demo.",
  "Đọc tiếp": "Continue reading",
  "Khám phá mục liên quan": "Explore related entries",
  "Tóm tắt hồ sơ": "Profile summary",
  "Khu vực": "Region",
  "Hình thức": "Form",
  "Khung hệ thống": "System framework",
  "Cần xem nguồn": "See sources",
  "Tình trạng xác minh": "Verification status",
  "Chế độ": "Mode",
  "Demo có nguồn": "Sourced demo",
  "Đương nhiệm": "Current officeholders",
  "Không hiển thị": "Not shown",
  "Tự do &amp; bình đẳng": "Liberty &amp; equality",
  "Tài sản &amp; phân phối": "Property &amp; distribution",
  "Dân chủ &amp; thẩm quyền": "Democracy &amp; authority",
  "Quốc gia &amp; quốc tế": "Nation &amp; internationalism",
  "Phát triển &amp; đa dạng nội bộ": "Development &amp; internal diversity",
  "Công cụ tham chiếu": "Reference tool",
  "So sánh hệ tư tưởng": "Compare ideologies",
  "Đặt hai truyền thống cạnh nhau theo các chiều phân tích rõ ràng. Mỗi ô là một mô tả khái quát có giới hạn, không phải thước đo hoặc phổ chính trị tuyệt đối.": "Place two traditions side by side across clear analytical dimensions. Each cell is a bounded general description, not a measure or an absolute political spectrum.",
  "Truyền thống thứ nhất": "First tradition",
  "Truyền thống thứ hai": "Second tradition",
  "Cập nhật bảng": "Update table",
  "Phương pháp: so sánh dựa trên mô tả của các mục demo và phải được đọc cùng nguồn, thời kỳ cùng sự đa dạng nội bộ của từng truyền thống.": "Method: this comparison draws on the demo entries and should be read with sources, historical periods, and the internal diversity of each tradition.",
  "Chiều phân tích": "Analytical dimension",
  "Tóm tắt": "Summary",
  "Cần xem mục chi tiết.": "See the detailed entry.",
  "Đọc từng truyền thống trong bối cảnh riêng": "Read each tradition in its own context",
  "Mục thứ nhất": "First entry",
  "Mục thứ hai": "Second entry",
  "Hệ tư tưởng": "Ideologies",
  "MỤC THAM CHIẾU · ĐA DẠNG NỘI BỘ": "REFERENCE ENTRY · INTERNAL DIVERSITY",
  "Một hệ tư tưởng là một truyền thống có lịch sử, văn bản, biến thể và những tranh luận nội bộ — không chỉ là một vị trí trên trục đơn giản.": "An ideology is a tradition with history, texts, variants, and internal debate—not merely a position on a simple axis.",
  "Những chiều tham chiếu": "Reference dimensions",
  "Ghi chú về cách đọc": "Reading note",
  "So sánh trong PolitiCore dùng các tiêu chí minh bạch để định hướng, nhưng không thay thế việc đọc nguồn gốc hay các nghiên cứu về trường phái, địa điểm và thời kỳ cụ thể.": "PolitiCore uses transparent criteria to orient comparison, but they do not replace reading primary sources or research on particular schools, places, and periods.",
  "Nguồn liên quan": "Related sources",
  "Chưa có nguồn được gắn trong demo.": "No sources are attached in this demo.",
  "Đi tới công cụ": "Go to tool",
  "So sánh hai hệ tư tưởng": "Compare two ideologies",
  "Lịch sử &amp; bối cảnh": "History &amp; context",
  "Lọc các sự kiện mẫu theo khu vực và chủ đề. Từng điểm trên dòng thời gian dẫn về bối cảnh, nguồn hoặc mục liên quan thay vì chỉ gợi ý quan hệ nhân quả từ thứ tự thời gian.": "Filter sample events by region and topic. Each point leads to context, sources, or related entries rather than implying causation from chronological order alone.",
  "Mọi khu vực": "All regions",
  "Mọi chủ đề": "All topics",
  "Kết quả": "Results",
  "sự kiện": "events",
  "Bối cảnh toàn cầu": "Global context",
  "Không có sự kiện phù hợp": "No matching events",
  "Thử bỏ bớt bộ lọc để xem thêm mốc thời gian.": "Remove a filter to see more milestones.",
  "Xuất xứ &amp; bằng chứng": "Provenance &amp; evidence",
  "Nơi phân biệt tài liệu gốc với nguồn thứ cấp, đồng thời dẫn trở lại trang xuất bản hoặc kho lưu trữ công khai.": "A place to distinguish primary material from secondary sources, with links back to publisher pages or public archives.",
  "nguồn trong bộ dữ liệu demo": "sources in the demo dataset",
  "Đọc nguyên tắc biên tập": "Read editorial principles",
  "Mở nguồn gốc để xem toàn văn và thông tin xuất bản.": "Open the original source to view full text and publication information.",
  "Kho lưu trữ": "Archive",
  "↗ Mở nguồn": "↗ Open source",
  "Bài tham chiếu": "Reference entry",
  "Sự kiện": "Event",
  "Nguồn": "Source",
  "Mục": "Entry",
  "Khám phá tri thức": "Explore knowledge",
  "Tìm theo tiêu đề, khái niệm, mô tả, khu vực hoặc nhãn trong bộ dữ liệu demo.": "Search titles, concepts, descriptions, regions, or tags in the demo dataset.",
  "Ví dụ: dân chủ, chủ quyền, Việt Nam...": "For example: democracy, sovereignty, Vietnam…",
  "Từ khoá tìm kiếm": "Search keywords",
  "kết quả cho": "results for",
  "Nhập từ khoá để bắt đầu": "Enter keywords to begin",
  "Bài viết": "Reference entries",
  "Chưa có kết quả phù hợp": "No matching results",
  "Thử một từ khoá ngắn hơn hoặc chuyển sang tìm tất cả loại mục.": "Try a shorter keyword or search all entry types.",
  "Bắt đầu với một câu hỏi": "Start with a question",
  "Ví dụ: “chủ quyền”, “hệ thống nghị viện” hoặc “tính chính danh”.": "For example: “sovereignty”, “parliamentary system”, or “legitimacy”.",
  "Có thể truy nguồn": "Traceable",
  "Những khẳng định quan trọng cần dẫn về văn bản gốc hoặc tài liệu học thuật có thể kiểm tra, thay vì chỉ xuất hiện như một kết luận vô danh.": "Important claims should lead to primary texts or checkable scholarly sources, rather than appearing as anonymous conclusions.",
  "Có bối cảnh": "Contextual",
  "Khái niệm, thể chế và sự kiện được trình bày cùng thời kỳ, phạm vi và giới hạn — đặc biệt khi việc phân loại còn có tranh luận.": "Concepts, institutions, and events are presented with their period, scope, and limits—especially where classification is debated.",
  "Không đảng phái": "Non-partisan",
  "PolitiCore không được thiết kế như nơi cổ động. Sự cân bằng nằm ở cách trình bày bằng chứng và các bất đồng học thuật một cách trung thực.": "PolitiCore is not designed for advocacy. Balance comes from presenting evidence and scholarly disagreement honestly.",
  "Có thể mở rộng": "Extensible",
  "Bản demo dùng dữ liệu địa phương có cấu trúc để mô phỏng cách một hệ thống nội dung, nguồn và quan hệ có thể lớn dần mà không phải thiết kế lại.": "This demo uses structured local data to show how a content, source, and relationship system can grow without being redesigned.",
  "Về sản phẩm": "About the product",
  "Tri thức là sản phẩm.": "Knowledge is a product.",
  "PolitiCore là một mẫu giao diện cho bách khoa chính trị có cấu trúc, lấy việc tra cứu, so sánh và lần theo nguồn làm trải nghiệm cốt lõi.": "PolitiCore is an interface prototype for a structured political encyclopedia, centred on lookup, comparison, and following sources.",
  "Đây là bản demo chạy cục bộ. Những mục có sẵn được gắn nhãn dữ liệu demo, không giả định tích hợp cơ sở dữ liệu trực tuyến hoặc tình trạng chính trị theo thời gian thực.": "This is a local demo. Available entries are labelled as demo data; it does not assume a live online database or real-time political status.",
  "Tiếp tục khám phá": "Keep exploring",
  "Không tìm thấy": "Not found",
  "Mục này chưa có trong bản demo.": "This entry is not in the demo yet.",
  "Hãy quay lại thư viện để tiếp tục từ một khái niệm, quốc gia hoặc nguồn tư liệu khác.": "Return to the library and continue from another concept, country, or source.",
  "Về trang khám phá": "Back to Explore",
  "Đóng tìm kiếm": "Close search",
  "Tìm khái niệm, quốc gia, nguồn...": "Search concepts, countries, sources…",
  "Chưa có kết quả khớp. Thử một từ khoá ngắn hơn hoặc mở trang tìm kiếm để xem toàn bộ.": "No matching results. Try a shorter keyword or open the search page to see everything.",
  "Gợi ý: Dân chủ · Chủ quyền · Hiến pháp · Việt Nam · Đại diện": "Try: Democracy · Sovereignty · Constitution · Vietnam · Representation",
  "Đã sao chép liên kết mục tham chiếu.": "Reference-entry link copied.",
  "Không thể sao chép tự động. Bạn có thể sao chép URL trên thanh địa chỉ.": "Could not copy automatically. Copy the URL from the address bar instead.",
  "Trích dẫn gợi ý: PolitiCore, mục tham chiếu demo, truy cập 10.10.2026.": "Suggested citation: PolitiCore, demo reference entry, accessed 10 Oct 2026.",
};

const uiTextEntries = Object.entries(uiText).sort(([a], [b]) => b.length - a.length);

function translateUiText(value = "") {
  if (currentLanguage === "vi") return String(value);
  return uiTextEntries.reduce((result, [vietnamese, english]) => result.replaceAll(vietnamese, english), String(value));
}

function routeFor(record) {
  if (!record) return "home";
  if (record.type === "article") return `article/${record.slug}`;
  if (record.type === "country") return `country/${record.slug}`;
  if (record.type === "ideology") return `ideology/${record.slug}`;
  if (record.type === "glossary") return `glossary?term=${encodeURIComponent(record.term)}`;
  if (record.type === "timeline-event") return `timeline/event/${record.slug}`;
  if (record.type === "timeline-entity") return `timeline/entity/${record.id}`;
  if (record.type === "event") return "timeline";
  if (record.type === "source") return "sources";
  return "home";
}

function navigate(path) {
  location.hash = `#${path}`;
}

function getRoute() {
  const hash = location.hash.replace(/^#\/?/, "") || "home";
  const [path, queryString = ""] = hash.split("?");
  return {
    path: path || "home",
    params: new URLSearchParams(queryString),
  };
}

function icon(name, size = 18) {
  const attrs = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
  const icons = {
    search: `<svg ${attrs}><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4.4 4.4"></path></svg>`,
    sun: `<svg ${attrs}><circle cx="12" cy="12" r="3.7"></circle><path d="M12 2.6v2.1M12 19.3v2.1M21.4 12h-2.1M4.7 12H2.6M18.65 5.35l-1.48 1.48M6.83 17.17l-1.48 1.48M18.65 18.65l-1.48-1.48M6.83 6.83 5.35 5.35"></path></svg>`,
    moon: `<svg ${attrs}><path d="M20.6 14.6A8.6 8.6 0 0 1 9.4 3.4a8.6 8.6 0 1 0 11.2 11.2Z"></path></svg>`,
    menu: `<svg ${attrs}><path d="M4 7h16M4 12h16M4 17h16"></path></svg>`,
    close: `<svg ${attrs}><path d="m6 6 12 12M18 6 6 18"></path></svg>`,
    arrow: `<svg ${attrs}><path d="M5 12h13"></path><path d="m13 6 6 6-6 6"></path></svg>`,
    book: `<svg ${attrs}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"></path><path d="M4 5.5v14"></path></svg>`,
    network: `<svg ${attrs}><circle cx="6" cy="6" r="2.3"></circle><circle cx="18" cy="7" r="2.3"></circle><circle cx="12" cy="18" r="2.3"></circle><path d="m7.9 7.3 7.9-.7M7.3 7.9l3.5 8M16.9 8.8l-3.4 7"></path></svg>`,
    external: `<svg ${attrs}><path d="M14 4h6v6"></path><path d="M20 4 10 14"></path><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"></path></svg>`,
    copy: `<svg ${attrs}><rect x="8" y="8" width="12" height="12" rx="1"></rect><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"></path></svg>`,
    bookmark: `<svg ${attrs}><path d="M6 4.7A1.7 1.7 0 0 1 7.7 3h8.6A1.7 1.7 0 0 1 18 4.7V21l-6-3.7L6 21V4.7Z"></path></svg>`,
    check: `<svg ${attrs}><path d="m5 12 4.2 4.2L19.5 6"></path></svg>`,
    compass: `<svg ${attrs}><circle cx="12" cy="12" r="8.5"></circle><path d="m14.8 9.2-2 4.7-4.6 1.9 2-4.6 4.6-2Z"></path></svg>`,
    spark: `<svg ${attrs}><path d="m12 3 1.55 5.45L19 10l-5.45 1.55L12 17l-1.55-5.45L5 10l5.45-1.55L12 3Z"></path><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"></path></svg>`,
    landmark: `<svg ${attrs}><path d="M3 20h18M5 18h14M4 9h16L12 4 4 9ZM7 10v7M12 10v7M17 10v7"></path></svg>`,
    leaf: `<svg ${attrs}><path d="M20 4C11 4.5 5.5 8.5 5.5 15.2A4.8 4.8 0 0 0 10.3 20C17 20 19.5 12.3 20 4Z"></path><path d="M4 20c3.4-4.4 7.1-7.2 12-9.4"></path></svg>`,
    globe: `<svg ${attrs}><circle cx="12" cy="12" r="8.5"></circle><path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5C9.9 18.2 8.8 15.4 8.8 12S9.9 5.8 12 3.5Z"></path></svg>`,
    clock: `<svg ${attrs}><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3.5 2.2"></path></svg>`,
  };
  return icons[name] || "";
}

function statusLine(record) {
  const update = record?.updated || record?.lastReviewed || "10.10.2026";
  return `<div class="card-meta"><span class="pill">Đã biên tập</span><span>Cập nhật ${escapeHtml(update)}</span></div>`;
}

function topicName(topic) {
  return topic?.name || topic?.title || "";
}

function topicKey(topic) {
  return topic?.id || topic?.slug || topicName(topic);
}

function articleByReference(reference) {
  return currentRecordByReference(reference, articles, sourceArticles, englishCopy.articles);
}

function articlePath(reference, fallback = articles[0]?.slug || "") {
  return articleByReference(reference)?.slug || fallback;
}

function bilingualText(vietnamese, english) {
  return currentLanguage === "en" ? english : vietnamese;
}

function civitasCategoryTitle(category) {
  return currentLanguage === "en" ? (category?.titleEn || category?.title || "") : (category?.title || "");
}

function civitasCategoryDescription(category) {
  return currentLanguage === "en" ? (category?.descriptionEn || category?.description || "") : (category?.description || "");
}

function sourceArticleById(articleId) {
  return sourceArticles.find((article) => article.id === articleId);
}

function civitasCategoryForArticle(article) {
  const sourceArticle = sourceArticleById(article?.id);
  const domainId = sourceArticle?.domain;
  return civitasCategories.find((category) => category.articleIds.includes(article?.id))
    || civitasCategories.find((category) => category.domainIds.includes(domainId))
    || civitasCategories[0];
}

function articleCategoryLabel(article) {
  return civitasCategoryTitle(civitasCategoryForArticle(article));
}

function learningNodeById(nodeId) {
  return learningNodes.find((node) => node.id === nodeId);
}

function learningPathById(pathId) {
  return learningPaths.find((path) => path.id === pathId);
}

function articleForLearningNode(node) {
  return node ? articleByReference(node.articleId) : undefined;
}

function learningNodeTitle(node) {
  return articleForLearningNode(node)?.title || node?.articleId || "";
}

function learningNodeRoute(node) {
  const article = articleForLearningNode(node);
  return `#article/${encodeURIComponent(article?.slug || node?.articleId || "")}`;
}

function learningRoute(pathId, nodeId = "") {
  const params = new URLSearchParams();
  if (pathId) params.set("path", pathId);
  if (nodeId) params.set("node", nodeId);
  return `roadmap${params.size ? `?${params.toString()}` : ""}`;
}

function mapRoute(categoryId = "all", nodeId = "", mode = "overview", query = "") {
  const params = new URLSearchParams();
  if (categoryId && categoryId !== "all") params.set("category", categoryId);
  if (nodeId) params.set("node", nodeId);
  if (mode && mode !== "overview") params.set("mode", mode);
  if (query) params.set("q", query);
  return `map${params.size ? `?${params.toString()}` : ""}`;
}

function learningTrackMeta(track) {
  const tracks = {
    foundations: ["Nền tảng", "Foundations"],
    institutions: ["Thể chế", "Institutions"],
    elections: ["Bầu cử", "Elections"],
    comparative: ["So sánh", "Comparative politics"],
    ideologies: ["Tư tưởng", "Ideologies"],
    international: ["Quốc tế", "International"],
    vietnam: ["Việt Nam", "Vietnam"],
    policy: ["Chính sách công", "Public policy"],
  };
  const [vietnamese, english] = tracks[track] || ["Khám phá", "Explore"];
  return bilingualText(vietnamese, english);
}

function learningLevel(node) {
  return currentLanguage === "en" ? (node?.levelEn || node?.level || "") : (node?.level || "");
}

function learningGoal(node) {
  return currentLanguage === "en" ? (node?.learningGoalEn || node?.learningGoal || "") : (node?.learningGoal || "");
}

function learningPathTitle(path) {
  return currentLanguage === "en" ? (path?.titleEn || path?.title || "") : (path?.title || "");
}

function learningPathDescription(path) {
  return currentLanguage === "en" ? (path?.descriptionEn || path?.description || "") : (path?.description || "");
}

function learningStatusLabel(status) {
  const labels = {
    not_started: ["Chưa học", "Not started"],
    read: ["Đã đọc", "Read"],
    learning: ["Đang học", "Learning"],
    mastered: ["Đã nắm vững", "Mastered"],
    review: ["Cần ôn tập", "Needs review"],
    skipped: ["Bỏ qua lúc này", "Skipped for now"],
  };
  const [vietnamese, english] = labels[status] || labels.not_started;
  return bilingualText(vietnamese, english);
}

function learningStatusSymbol(status) {
  return {
    not_started: "○",
    read: "◌",
    learning: "◐",
    mastered: "✓",
    review: "↺",
    skipped: "—",
  }[status] || "○";
}

function learningPrerequisites(node) {
  return (node?.prerequisiteIds || []).map(learningNodeById).filter(Boolean);
}

function prerequisiteSatisfied(nodeId) {
  return learningStatus(nodeId) === "mastered";
}

function missingPrerequisites(node) {
  return learningPrerequisites(node).filter((item) => !prerequisiteSatisfied(item.id));
}

function pathNodeIdsWithPrerequisites(pathId) {
  const path = learningPathById(pathId);
  const selected = new Set();
  const visit = (nodeId) => {
    if (selected.has(nodeId)) return;
    const node = learningNodeById(nodeId);
    if (!node) return;
    selected.add(nodeId);
    learningPrerequisites(node).forEach((prerequisite) => visit(prerequisite.id));
  };
  (path?.nodeIds || learningNodes.map((node) => node.id)).forEach(visit);
  return selected;
}

function recommendedLearningNodes(pathId) {
  const included = pathNodeIdsWithPrerequisites(pathId);
  const candidates = learningNodes.filter((node) => included.has(node.id) && !["mastered", "skipped"].includes(learningStatus(node.id)));
  return candidates.sort((left, right) => {
    const leftStatus = learningStatus(left.id);
    const rightStatus = learningStatus(right.id);
    const leftPriority = leftStatus === "review" ? -2 : leftStatus === "learning" ? -1 : 0;
    const rightPriority = rightStatus === "review" ? -2 : rightStatus === "learning" ? -1 : 0;
    if (leftPriority !== rightPriority) return leftPriority - rightPriority;
    const missingDifference = missingPrerequisites(left).length - missingPrerequisites(right).length;
    if (missingDifference) return missingDifference;
    return learningNodeTitle(left).localeCompare(learningNodeTitle(right), currentLanguage);
  });
}

function learningProgressCounts() {
  const counts = { read: 0, learning: 0, mastered: 0, review: 0 };
  learningNodes.forEach((node) => {
    const status = learningStatus(node.id);
    if (Object.hasOwn(counts, status)) counts[status] += 1;
  });
  return counts;
}

function validateLearningGraph() {
  const errors = [];
  const nodeIds = new Set(learningNodes.map((node) => node.id));

  learningNodes.forEach((node) => {
    if (!articleByReference(node.articleId)) errors.push(`missing article: ${node.articleId}`);
    (node.prerequisiteIds || []).forEach((id) => {
      if (!nodeIds.has(id)) errors.push(`missing prerequisite: ${node.id} → ${id}`);
    });
  });

  const visiting = new Set();
  const visited = new Set();
  const visit = (nodeId) => {
    if (visiting.has(nodeId)) {
      errors.push(`prerequisite cycle at: ${nodeId}`);
      return;
    }
    if (visited.has(nodeId)) return;
    visiting.add(nodeId);
    learningPrerequisites(learningNodeById(nodeId)).forEach((node) => visit(node.id));
    visiting.delete(nodeId);
    visited.add(nodeId);
  };
  learningNodes.forEach((node) => visit(node.id));
  return errors;
}

const learningGraphIssues = validateLearningGraph();
if (learningGraphIssues.length) console.warn("PolitiCore learning graph validation:", learningGraphIssues);

function header(activeRoute) {
  const nav = [
    ["home", bilingualText("Khám phá", "Explore")],
    ["encyclopedia", bilingualText("Bách khoa", "Encyclopedia")],
    ["timeline", bilingualText("Timeline lịch sử", "History timeline")],
    ["map", bilingualText("Bản đồ", "Map")],
    ["roadmap", bilingualText("Lộ trình", "Roadmap")],
  ];
  const normalized = activeRoute.startsWith("article")
    ? "encyclopedia"
    : activeRoute.startsWith("timeline/")
      ? "timeline"
      : activeRoute === "learning"
        ? "roadmap"
        : activeRoute;
  const isLanding = normalized === "home";

  return `
    <header class="site-header civitas-header ${isLanding ? "is-landing" : ""}">
      <div class="header-inner">
        <a class="brand civitas-brand" href="#home" aria-label="Civitas — ${bilingualText("trang chủ", "home")}">
          <span class="brand-mark" aria-hidden="true">${icon("book", 16)}</span>
          <span class="brand-lockup"><span class="brand-name">civitas.</span><small>${bilingualText("một thư viện nhỏ về chính trị", "a little library of politics")}</small></span>
        </a>
        <nav class="main-nav civitas-nav" aria-label="${bilingualText("Điều hướng chính", "Primary navigation")}">
          ${nav.map(([route, label]) => `<a href="#${route}" class="${normalized === route ? "active" : ""}" ${normalized === route ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="saved-trigger" href="#encyclopedia?saved=1" aria-label="${bilingualText("Bài đã lưu", "Saved articles")}">
            ${icon("bookmark", 17)}<span>${bilingualText("Đã lưu", "Saved")}</span>${bookmarkedArticleIds.size ? `<b>${bookmarkedArticleIds.size}</b>` : ""}
          </a>
          <button class="search-trigger civitas-search-trigger" type="button" data-action="open-search" aria-label="${bilingualText("Mở tìm kiếm", "Open search")}">
            ${icon("search", 17)}<span>${bilingualText("Tìm", "Search")}</span>
          </button>
          <div class="language-switch is-${currentLanguage}" role="group" aria-label="${bilingualText("Chọn ngôn ngữ", "Choose language")}">
            <button class="${currentLanguage === "en" ? "active" : ""}" type="button" data-language="en" aria-label="Tiếng Anh" aria-pressed="${currentLanguage === "en"}">EN</button>
            <button class="${currentLanguage === "vi" ? "active" : ""}" type="button" data-language="vi" aria-label="Tiếng Việt" aria-pressed="${currentLanguage === "vi"}">VI</button>
          </div>
          <button class="theme-toggle ${currentTheme === "dark" ? "is-dark" : ""}" type="button" data-action="toggle-theme" aria-pressed="${currentTheme === "dark"}" aria-label="${themeToggleLabel()}" title="${themeToggleLabel()}">
            <span class="theme-toggle-thumb" aria-hidden="true">
              <span class="theme-toggle-glyph theme-toggle-sun">${icon("sun", 14)}</span>
              <span class="theme-toggle-glyph theme-toggle-moon">${icon("moon", 14)}</span>
            </span>
          </button>
          <button class="icon-button menu-button" type="button" data-action="toggle-menu" aria-label="${bilingualText("Mở menu khám phá", "Open explore menu")}">
            ${icon("menu", 19)}<span class="landing-menu-label">${bilingualText("Khám phá", "Explore")}</span>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Điều hướng di động" hidden>
      ${nav.map(([route, label]) => `<a href="#${route}" ${normalized === route ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      <a href="#encyclopedia?saved=1">${bilingualText("Bài đã lưu", "Saved articles")}</a>
      <a href="#about">${bilingualText("Về Civitas", "About Civitas")}</a>
    </nav>
  `;
}

function footer() {
  return `
    <footer class="site-footer civitas-footer">
      <div class="footer-inner">
        <div>
          <a class="footer-brand" href="#home"><span class="brand-mark" aria-hidden="true">${icon("book", 15)}</span><span>civitas.</span></a>
          <p class="footer-copy">${bilingualText("Một góc nhỏ để đọc về chính trị, con người và cách thế giới vận hành — chậm rãi, có ngữ cảnh và có đường dẫn để kiểm tra.", "A small place to read about politics, people, and how the world works—slowly, in context, with paths to verify.")}</p>
        </div>
        <nav class="footer-nav" aria-label="Điều hướng chân trang">
          <a href="#encyclopedia">${bilingualText("Bách khoa", "Encyclopedia")}</a>
          <a href="#timeline">${bilingualText("Timeline lịch sử", "History timeline")}</a>
          <a href="#map">${bilingualText("Bản đồ tri thức", "Knowledge map")}</a>
          <a href="#roadmap">${bilingualText("Lộ trình", "Roadmap")}</a>
          <a href="#sources">${bilingualText("Nguồn tư liệu", "Sources")}</a>
          <a href="#about">${bilingualText("Nguyên tắc biên tập", "Editorial notes")}</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>CIVITAS · LOCAL LIBRARY DEMO</span>
        <span>${bilingualText("Nội dung mẫu cần biên tập trước khi xuất bản · Không thay thế nghiên cứu chuyên môn", "Sample content requires editorial review before publication · Not a substitute for specialist research")}</span>
      </div>
    </footer>
  `;
}

function atlasSvg() {
  return `
    <svg class="atlas-canvas" viewBox="0 0 520 480" role="img" aria-labelledby="atlas-title atlas-desc">
      <title id="atlas-title">Bản đồ các khái niệm chính trị liên kết</title>
      <desc id="atlas-desc">Quyền lực nằm ở trung tâm và kết nối với nhà nước, pháp quyền, đại diện, chủ quyền, hiến pháp và tham gia chính trị.</desc>
      <g>
        <line class="atlas-line" x1="254" y1="226" x2="109" y2="137"></line>
        <line class="atlas-line" x1="254" y1="226" x2="399" y2="119"></line>
        <line class="atlas-line" x1="254" y1="226" x2="405" y2="342"></line>
        <line class="atlas-line" x1="254" y1="226" x2="122" y2="363"></line>
        <line class="atlas-line" x1="254" y1="226" x2="246" y2="75"></line>
        <line class="atlas-line faint" x1="109" y1="137" x2="246" y2="75"></line>
        <line class="atlas-line faint" x1="399" y1="119" x2="405" y2="342"></line>
        <line class="atlas-line faint" x1="122" y1="363" x2="405" y2="342"></line>
        <line class="atlas-line faint" x1="109" y1="137" x2="122" y2="363"></line>
        <line class="atlas-line faint" x1="246" y1="75" x2="399" y2="119"></line>
      </g>
      <a href="#article/dan-chu" class="atlas-node main">
        <circle cx="254" cy="226" r="12"></circle>
        <text class="node-label" x="254" y="254" text-anchor="middle">Quyền lực</text>
      </a>
      <a href="#article/chu-quyen" class="atlas-node">
        <circle cx="109" cy="137" r="6"></circle>
        <text class="node-label" x="109" y="119" text-anchor="middle">Nhà nước</text>
      </a>
      <a href="#article/tinh-chinh-danh-chinh-tri" class="atlas-node">
        <circle cx="399" cy="119" r="6"></circle>
        <text class="node-label" x="399" y="100" text-anchor="middle">Tính chính danh</text>
      </a>
      <a href="#article/dai-dien-theo-ty-le" class="atlas-node">
        <circle cx="405" cy="342" r="6"></circle>
        <text class="node-label" x="405" y="367" text-anchor="middle">Đại diện</text>
      </a>
      <a href="#article/chu-quyen" class="atlas-node">
        <circle cx="122" cy="363" r="6"></circle>
        <text class="node-label" x="122" y="389" text-anchor="middle">Chủ quyền</text>
      </a>
      <a href="#article/chu-nghia-hien-phap" class="atlas-node">
        <circle cx="246" cy="75" r="6"></circle>
        <text class="node-label" x="246" y="55" text-anchor="middle">Hiến pháp</text>
      </a>
    </svg>
  `;
}

function renderLegacyHome() {
  const feature = articles.find((item) => item.id === "democracy") || articles[0];
  const homeTopics = topics.slice(0, 6);
  const homeEvents = events.slice(0, 4);
  const homeCountries = countries.slice(0, 4);
  const homeSources = sources.slice(0, 4);

  return `
    <section class="hero">
      <div class="page-width hero-grid">
        <div>
          <p class="eyebrow">Bách khoa tri thức chính trị</p>
          <h1>Hiểu chính trị<br />qua những <em>mối liên hệ.</em></h1>
          <p class="hero-intro">Khám phá khái niệm, thể chế, lịch sử và các nguồn tư liệu — từ một câu hỏi rộng đến một chi tiết cần kiểm chứng.</p>
          <form class="main-search" data-search-form>
            <span class="search-icon" aria-hidden="true">${icon("search", 20)}</span>
            <input name="query" autocomplete="off" placeholder="Bạn muốn hiểu điều gì về chính trị?" aria-label="Tìm trong PolitiCore" />
            <button type="submit">Tìm hiểu</button>
          </form>
          <div class="suggested-searches" aria-label="Gợi ý tìm kiếm">
            <span class="suggested-label">Bắt đầu với</span>
            ${["Dân chủ", "Chủ quyền", "Phân quyền", "Chủ nghĩa tự do", "Tính chính danh"].map((term) => `<button class="search-chip" type="button" data-search-term="${term}">${term}</button>`).join("")}
          </div>
          <div class="hero-learning-links">
            <a class="hero-learning-primary" href="#learning?path=start">${bilingualText("Xây dựng lộ trình học của tôi", "Build my learning path")} <span aria-hidden="true">→</span></a>
            <a class="hero-learning-secondary" href="#learning">${bilingualText("Khám phá bản đồ kiến thức", "Explore the knowledge map")}</a>
          </div>
          <div class="hero-proof" aria-label="Phạm vi thư viện">
            <div class="proof-item"><span class="proof-value">${topics.length}</span><span class="proof-label">miền tri thức<br />có thể mở rộng</span></div>
            <div class="proof-item"><span class="proof-value">${articles.length}</span><span class="proof-label">mục tham chiếu<br />được liên kết</span></div>
            <div class="proof-item"><span class="proof-value">${sources.length}</span><span class="proof-label">nguồn chính &amp;<br />học thuật</span></div>
          </div>
        </div>
        <section class="atlas-panel" aria-label="Bản đồ tri thức trực quan">
          <span class="atlas-label">Bản đồ tri thức · Mẫu liên kết</span>
          ${atlasSvg()}
          <div class="atlas-legend"><span class="legend-dot"></span><span>chọn một nút để mở mục liên quan</span></div>
          <p class="atlas-caption">Chính trị được hiểu rõ hơn khi các ý tưởng, thiết chế và bối cảnh lịch sử được đặt trong cùng một khung tham chiếu.</p>
        </section>
      </div>
    </section>

    <section class="page-section border-top">
      <div class="page-width topic-editorial-grid">
        <div>
          <p class="section-kicker">Khám phá theo miền</p>
          <h2 class="section-heading">Một câu hỏi có thể mở ra cả một hệ thống.</h2>
          <p class="section-description">Bắt đầu từ điểm bạn cần — rồi lần theo các kết nối sang lý thuyết, lịch sử, quốc gia, tư liệu và tranh luận học thuật.</p>
          <div class="topic-list" style="margin-top:30px">
            ${homeTopics.map((topic, index) => `
              <button class="topic-row" type="button" data-route="encyclopedia?domain=${encodeURIComponent(topicKey(topic))}">
                <span class="topic-number">${String(index + 1).padStart(2, "0")}</span>
                <span class="topic-name">${escapeHtml(topicName(topic))}</span>
                <span class="topic-count">${topic.count || "Khám phá mục"}</span>
                <span class="topic-arrow">→</span>
              </button>
            `).join("")}
          </div>
          <a class="text-link" style="margin-top:23px" href="#encyclopedia">Xem toàn bộ taxonomy</a>
        </div>
        <article class="feature-paper">
          ${statusLine(feature)}
          <h3>${escapeHtml(feature?.title || "Dân chủ")}</h3>
          <p>${escapeHtml(feature?.summary || "Một khái niệm chính trị cần được đọc trong bối cảnh thể chế, lịch sử và các tranh luận về thực hành.")}</p>
          <a class="article-link" href="#article/${feature?.slug || "democracy"}">Đọc mục tham chiếu</a>
        </article>
      </div>
    </section>

    <section class="connection-strip">
      <div class="connection-strip-inner">
        <div>
          <p class="section-kicker">Tri thức có kết nối</p>
          <h2 class="section-heading">Đừng chỉ đọc một khái niệm. Hãy nhìn cấu trúc quanh nó.</h2>
          <p class="section-description">Mỗi mối quan hệ trong bản demo đều xuất phát từ dữ liệu cùng với các mục tham chiếu liên quan.</p>
        </div>
        <div class="connection-map" aria-label="Các khái niệm liên quan tới dân chủ">
          <svg viewBox="0 0 560 175" role="img" aria-hidden="true">
            <g fill="none" stroke="rgba(230,209,168,.5)" stroke-width="1">
              <path d="M280 85 L120 35 M280 85 L440 34 M280 85 L452 138 M280 85 L98 137"></path>
              <path d="M120 35 L98 137 M440 34 L452 138"></path>
            </g>
            <circle cx="280" cy="85" r="7" fill="#b98538"></circle>
            <circle cx="120" cy="35" r="4" fill="#f7f4ed"></circle>
            <circle cx="440" cy="34" r="4" fill="#f7f4ed"></circle>
            <circle cx="452" cy="138" r="4" fill="#f7f4ed"></circle>
            <circle cx="98" cy="137" r="4" fill="#f7f4ed"></circle>
          </svg>
          <a class="concept-tag central" href="#article/dan-chu" style="left:calc(50% - 48px);top:70px">Dân chủ</a>
          <a class="concept-tag" href="#article/dai-dien-theo-ty-le" style="left:5%;top:8px">Đại diện</a>
          <a class="concept-tag" href="#article/tinh-chinh-danh-chinh-tri" style="right:4%;top:8px">Chính danh</a>
          <a class="concept-tag" href="#article/chu-nghia-hien-phap" style="right:2%;bottom:7px">Hiến pháp</a>
          <a class="concept-tag" href="#article/chu-quyen" style="left:1%;bottom:7px">Chủ quyền</a>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-width timeline-grid">
        <div class="timeline-intro">
          <p class="section-kicker">Lịch sử có ngữ cảnh</p>
          <h2 class="section-heading">Dòng thời gian không chỉ là danh sách ngày tháng.</h2>
          <p class="section-description">Điểm vào để xem sự kiện, văn bản và thiết chế đã được kết nối như thế nào trong từng bối cảnh.</p>
          <a class="text-link" style="margin-top:22px" href="#timeline">Mở dòng thời gian</a>
        </div>
        <div class="timeline-list">
          ${homeEvents.map((event) => `
            <article class="timeline-item">
              <div class="timeline-year">${escapeHtml(event.year)}</div>
              <div class="timeline-content">
                <h3>${escapeHtml(event.title)}</h3>
                <p>${escapeHtml(event.summary)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="page-section border-top">
      <div class="page-width">
        <div class="section-header">
          <div>
            <p class="section-kicker">Hồ sơ quốc gia</p>
            <h2 class="section-heading">Đọc hệ thống chính trị trong bối cảnh riêng của mỗi nơi.</h2>
          </div>
          <a class="text-link" href="#countries">Duyệt thư mục quốc gia</a>
        </div>
        <div class="directory-panel">
          <div class="country-grid">
            ${homeCountries.map((country) => countryCard(country)).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="page-width compare-callout">
      <div>
        <p class="section-kicker">So sánh có tiêu chí</p>
        <h2 class="section-heading">Các hệ tư tưởng không phải những nhãn cố định.</h2>
        <p class="section-description">Đặt các truyền thống tư tưởng cạnh nhau theo từng chiều phân tích, đồng thời giữ lại tính đa dạng và những giới hạn của so sánh.</p>
        <a class="text-link" href="#compare">Mở công cụ so sánh</a>
      </div>
      <a href="#compare" class="mini-matrix" aria-label="Mở bảng so sánh hệ tư tưởng">
        <div class="mini-matrix-row header"><span>Chiều xem xét</span><span>Truyền thống A</span><span>Truyền thống B</span></div>
        <div class="mini-matrix-row"><strong>Vai trò của nhà nước</strong><span><i class="matrix-mark"></i>diễn giải theo dòng</span><span><i class="matrix-mark alt"></i>diễn giải theo dòng</span></div>
        <div class="mini-matrix-row"><strong>Tổ chức kinh tế</strong><span><i class="matrix-mark"></i>không giản lược</span><span><i class="matrix-mark alt"></i>không giản lược</span></div>
        <div class="mini-matrix-row"><strong>Các trường phái nội bộ</strong><span><i class="matrix-mark"></i>có ghi chú</span><span><i class="matrix-mark alt"></i>có ghi chú</span></div>
      </a>
    </section>

    <section class="source-band">
      <div class="page-width source-layout">
        <div>
          <p class="section-kicker">Nguồn &amp; văn bản</p>
          <h2 class="section-heading">Tranh luận tốt bắt đầu bằng nguồn có thể truy lại.</h2>
          <p class="section-description">Phân biệt tài liệu gốc với diễn giải học thuật, hiển thị rõ xuất xứ và lối dẫn về văn bản.</p>
          <a class="text-link" style="margin-top:22px" href="#sources">Vào thư viện nguồn</a>
        </div>
        <div class="source-list">
          ${homeSources.map((source) => sourceRow(source)).join("")}
        </div>
      </div>
    </section>
  `;
}

function civitasMapPreview() {
  const nodes = [
    { id: "what-is-politics", label: bilingualText("Chính trị", "Politics"), x: 50, y: 50, main: true },
    { id: "political-power", label: bilingualText("Quyền lực", "Power"), x: 19, y: 26 },
    { id: "sovereignty", label: bilingualText("Chủ quyền", "Sovereignty"), x: 77, y: 22 },
    { id: "constitutionalism", label: bilingualText("Hiến pháp", "Constitution"), x: 83, y: 71 },
    { id: "democracy", label: bilingualText("Dân chủ", "Democracy"), x: 19, y: 75 },
    { id: "public-policy", label: bilingualText("Chính sách", "Policy"), x: 49, y: 88 },
  ];
  return `
    <div class="civitas-map-preview" aria-label="${bilingualText("Xem trước bản đồ tri thức", "Knowledge map preview")}">
      <svg viewBox="0 0 560 330" aria-hidden="true">
        <path d="M280 154 106 79M280 154 431 68M280 154 458 234M280 154 106 249M280 154 280 289M106 79 106 249M431 68 458 234M106 249 280 289"></path>
      </svg>
      ${nodes.map((node) => `<a href="#article/${articlePath(node.id)}" class="civitas-preview-node ${node.main ? "is-main" : ""}" style="--x:${node.x}%;--y:${node.y}%"><span></span>${escapeHtml(node.label)}</a>`).join("")}
    </div>
  `;
}

function homeSearchMatches(query) {
  const normalized = String(query || "").trim();
  if (!normalized) return "";
  const results = searchRecords(normalized, "article").slice(0, 5);
  return results.length
    ? `<div class="home-search-results-list">${results.map((record) => `
      <a href="#article/${escapeHtml(record.slug)}"><span class="home-search-category">${escapeHtml(articleCategoryLabel(record))}</span><strong>${escapeHtml(record.title)}</strong><small>${escapeHtml(record.summary)}</small><i aria-hidden="true">→</i></a>
    `).join("")}</div>`
    : `<div class="home-search-empty">${bilingualText("Chưa tìm thấy mục phù hợp. Thử một khái niệm ngắn hơn.", "No matching entry yet. Try a shorter concept.")}</div>`;
}

function renderHome() {
  const feature = articleByReference("what-is-politics") || articles[0];
  const portals = [
    ["01", "encyclopedia", bilingualText("Bách khoa", "Encyclopedia"), bilingualText("Khái niệm, thể chế và các ghi chú để lần theo.", "Concepts, institutions, and notes to follow."), icon("book", 18)],
    ["02", "timeline", bilingualText("Timeline lịch sử", "History timeline"), bilingualText("Đi qua thế giới từ dấu vết đầu tiên đến hiện tại.", "Move through the world from its earliest evidence to the present."), icon("clock", 18)],
    ["03", "map", bilingualText("Bản đồ tri thức", "Knowledge map"), bilingualText("Nhìn ý tưởng cạnh nhau, rồi chọn đường đi riêng.", "See ideas beside each other, then choose your own path."), icon("network", 18)],
    ["04", "roadmap", bilingualText("Lộ trình học", "Learning roadmap"), bilingualText("Một lộ trình gợi ý, không có cánh cửa nào bị khóa.", "A suggested path, with no locked doors."), icon("compass", 18)],
  ];
  return `
    <div class="civitas-home civitas-home--landing">
      <section class="civitas-landing">
        <div class="civitas-landing-backdrop" aria-hidden="true"></div>
        <div class="civitas-landing-grain" aria-hidden="true"></div>
        <div class="civitas-landing-atlas" aria-hidden="true">
          <svg viewBox="0 0 1280 820" preserveAspectRatio="xMidYMid slice">
            <g class="landing-atlas-motion">
              <g class="landing-atlas-grid"><path d="M-40 188C224 80 419 111 614 270s363 181 706 64M-18 582C214 450 433 483 605 620s424 138 700-76M326-44C236 201 288 362 468 456s183 223 83 433M1027-30c-93 229-46 400 111 520s104 246-9 375"></path><circle cx="618" cy="274" r="127"></circle><circle cx="618" cy="274" r="276"></circle><circle cx="618" cy="274" r="405"></circle></g>
              <g class="landing-atlas-lines"><line x1="142" y1="618" x2="618" y2="274"></line><line x1="618" y1="274" x2="1089" y2="561"></line><line x1="618" y1="274" x2="912" y2="118"></line><line x1="618" y1="274" x2="360" y2="143"></line></g>
              <g class="landing-atlas-nodes"><circle cx="618" cy="274" r="7"></circle><circle cx="142" cy="618" r="4"></circle><circle cx="1089" cy="561" r="4"></circle><circle cx="912" cy="118" r="4"></circle><circle cx="360" cy="143" r="4"></circle></g>
              <g class="landing-atlas-signals">
                <circle r="3.1"><animateMotion dur="22s" begin="-8s" repeatCount="indefinite" path="M142 618 L618 274"></animateMotion><animate attributeName="opacity" dur="22s" begin="-8s" values="0;1;1;0" keyTimes="0;.08;.9;1" repeatCount="indefinite"></animate></circle>
                <circle r="2.8"><animateMotion dur="18s" begin="-3s" repeatCount="indefinite" path="M618 274 L1089 561"></animateMotion><animate attributeName="opacity" dur="18s" begin="-3s" values="0;1;1;0" keyTimes="0;.08;.9;1" repeatCount="indefinite"></animate></circle>
                <circle r="3"><animateMotion dur="25s" begin="-14s" repeatCount="indefinite" path="M912 118 L618 274"></animateMotion><animate attributeName="opacity" dur="25s" begin="-14s" values="0;1;1;0" keyTimes="0;.08;.9;1" repeatCount="indefinite"></animate></circle>
                <circle r="2.7"><animateMotion dur="20s" begin="-11s" repeatCount="indefinite" path="M618 274 L360 143"></animateMotion><animate attributeName="opacity" dur="20s" begin="-11s" values="0;1;1;0" keyTimes="0;.08;.9;1" repeatCount="indefinite"></animate></circle>
              </g>
            </g>
          </svg>
          <span class="landing-atlas-label label-one">${bilingualText("khoảng 300.000 năm trước", "c. 300,000 BP")}</span><span class="landing-atlas-label label-two">CIVITAS / 01</span><span class="landing-atlas-label label-three">${bilingualText("THẾ GIỚI CHUNG", "THE COMMON WORLD")}</span>
        </div>
        <div class="page-width civitas-landing-shell">
          <div class="civitas-landing-copy">
            <p class="civitas-landing-kicker">${bilingualText("MỘT THƯ VIỆN NHỎ VỀ THẾ GIỚI CHUNG", "A LITTLE LIBRARY FOR OUR COMMON WORLD")}</p>
            <h1 class="civitas-landing-title"><span>civitas</span><i>.</i></h1>
            <p class="civitas-landing-statement">${bilingualText("Đọc chậm về quyền lực, lịch sử và những câu chuyện định hình đời sống chung.", "A slow read on power, history, and the stories that shape our common life.")}</p>
            <a class="civitas-landing-entry" href="#article/${feature.slug}"><span>${bilingualText("Mở một ghi chú để bắt đầu", "Open one note to begin")}</span><i>↗</i></a>
          </div>
          <nav class="civitas-portal" aria-label="${bilingualText("Các lối vào thư viện", "Library entrances")}">
            <p>${bilingualText("CHỌN MỘT LỐI VÀO", "CHOOSE AN ENTRANCE")}</p>
            ${portals.map(([index, route, title, description, glyph]) => `<a class="civitas-portal-link" href="#${route}"><span class="civitas-portal-index">${index}</span><span class="civitas-portal-glyph">${glyph}</span><span class="civitas-portal-text"><strong>${escapeHtml(title)}</strong><small>${escapeHtml(description)}</small></span><i>→</i></a>`).join("")}
          </nav>
          <div class="civitas-landing-footer"><span>${bilingualText("Đọc theo ngữ cảnh · theo dấu nguồn · tự chọn đường", "Read in context · follow sources · choose your path")}</span><a href="#timeline/coverage">${timelineEvents.length} ${bilingualText("hồ sơ lịch sử đang được mở rộng", "history records being expanded")} ↗</a></div>
        </div>
      </section>
    </div>
  `;
}

function countryCard(country) {
  return `
    <a class="country-card" href="#country/${country.slug}">
      <span class="country-region">${escapeHtml(country.region)}</span>
      <h3>${escapeHtml(country.name)}</h3>
      <p class="country-sub">${escapeHtml(country.form || country.system || country.overview || "Hồ sơ tham chiếu")}</p>
      <span class="country-arrow">→</span>
    </a>
  `;
}

function sourceRow(source) {
  return `
    <a class="source-row" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
      <span class="source-type">${escapeHtml(source.kind || source.type || "Nguồn")}</span>
      <span class="source-name">${escapeHtml(source.title)}<span class="source-year">${escapeHtml(source.publisher || source.author || "Nguồn tham chiếu")}</span></span>
      <span aria-hidden="true">↗</span>
    </a>
  `;
}

function pageHero(kicker, title, lede, crumbs = []) {
  return `
    <section class="page-hero">
      <div class="page-width">
        ${crumbs.length ? `<nav class="bread-crumbs" aria-label="Breadcrumb">${crumbs.map((item, index) => item.href ? `<a href="${item.href}">${escapeHtml(item.label)}</a><span>/</span>` : `<span>${escapeHtml(item.label)}</span>`).join("")}</nav>` : ""}
        <p class="eyebrow">${escapeHtml(kicker)}</p>
        <h1 class="display-title">${escapeHtml(title)}</h1>
        <p class="page-lede">${escapeHtml(lede)}</p>
      </div>
    </section>
  `;
}

function renderLegacyEncyclopedia(params) {
  const selected = params.get("domain") || "all";
  const matchingTopics = selected === "all"
    ? topics
    : topics.filter((topic) => [topicKey(topic), topicName(topic)].includes(selected));
  const domainNames = matchingTopics.map((topic) => topicName(topic));
  const records = selected === "all"
    ? articles
    : articles.filter((article) => domainNames.includes(article.domain) || article.topicId === selected || article.domainId === selected || article.domain === selected);

  return `
    ${pageHero("Thư viện tham chiếu", "Bách khoa chính trị", "Một cấu trúc phân cấp để bắt đầu từ miền kiến thức, đi vào chủ đề, rồi mở các mục tham chiếu có nguồn.")}
    <div class="page-width">
      <div class="tool-bar">
        <span class="result-count">${records.length} mục trong bộ dữ liệu demo</span>
        <div class="filter-group" aria-label="Lọc theo miền">
          <button class="filter-button ${selected === "all" ? "active" : ""}" data-route="encyclopedia">Tất cả</button>
          ${topics.slice(0, 5).map((topic) => `<button class="filter-button ${selected === topicKey(topic) ? "active" : ""}" data-route="encyclopedia?domain=${encodeURIComponent(topicKey(topic))}">${escapeHtml(topic.shortName || topicName(topic))}</button>`).join("")}
        </div>
      </div>
      <div class="content-grid">
        <aside class="side-panel" aria-label="Taxonomy bách khoa">
          <p class="side-panel-heading">10 miền tri thức</p>
          ${fullTaxonomy.map((name, index) => `<a class="taxonomy-link ${domainNames.includes(name) ? "active" : ""}" href="#encyclopedia">${escapeHtml(name)}<small>${String(index + 1).padStart(2, "0")}</small></a>`).join("")}
        </aside>
        <section>
          <div class="article-tiles">
            ${records.length ? records.map(articleTile).join("") : emptyState("Chưa có mục phù hợp", "Hãy thử một miền khác hoặc quay lại danh mục đầy đủ.")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderLegacyArticleTile(article) {
  return `
    <a class="article-tile" href="#article/${article.slug}">
      ${statusLine(article)}
      <h3>${escapeHtml(article.title)}</h3>
      <p class="article-tile-summary">${escapeHtml(article.summary)}</p>
      <div class="tile-bottom"><span>${escapeHtml(article.domain || "Tham chiếu")}</span><span>Đọc →</span></div>
    </a>
  `;
}

function emptyState(title, description) {
  return `<div class="empty-state"><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p></div>`;
}

function learningNodeForArticle(articleId) {
  return learningNodes.find((node) => node.articleId === articleId);
}

function articleLevel(article) {
  const node = learningNodeForArticle(article?.id);
  return node ? learningLevel(node) : bilingualText("Khám phá", "Explore");
}

function encyclopediaRoute({ category = "all", level = "all", saved = false, query = "" } = {}) {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (level !== "all") params.set("level", level);
  if (saved) params.set("saved", "1");
  if (query) params.set("q", query);
  return `encyclopedia${params.size ? `?${params.toString()}` : ""}`;
}

function renderEncyclopedia(params) {
  const selectedCategory = civitasCategories.some((category) => category.id === params.get("category")) ? params.get("category") : "all";
  const selectedLevel = ["all", "intro", "intermediate"].includes(params.get("level")) ? params.get("level") : "all";
  const showSaved = params.get("saved") === "1";
  const query = (params.get("q") || "").trim();
  const normalizedQuery = query.toLocaleLowerCase(currentLanguage);
  const records = articles.filter((article) => {
    const category = civitasCategoryForArticle(article);
    const node = learningNodeForArticle(article.id);
    const level = node?.level === "Trung cấp" ? "intermediate" : "intro";
    const text = [article.title, article.summary, articleCategoryLabel(article)].join(" ").toLocaleLowerCase(currentLanguage);
    return (selectedCategory === "all" || category.id === selectedCategory)
      && (selectedLevel === "all" || level === selectedLevel)
      && (!showSaved || isBookmarked(article.id))
      && (!normalizedQuery || text.includes(normalizedQuery));
  });

  return `
    <section class="civitas-page-heading">
      <div class="page-width"><nav class="civitas-breadcrumb" aria-label="Breadcrumb"><a href="#home">${bilingualText("Khám phá", "Explore")}</a><span>/</span><span>${bilingualText("Bách khoa", "Encyclopedia")}</span></nav><p class="civitas-eyebrow">THE LITTLE LIBRARY</p><h1>${bilingualText("Bách khoa toàn thư", "The encyclopedia")}</h1><p>${bilingualText("Đọc tự do, theo một câu hỏi, một chủ đề hoặc bất kỳ điểm vào nào phù hợp với bạn.", "Read freely—through a question, a topic, or any entry point that fits you.")}</p></div>
    </section>
    <section class="page-width civitas-encyclopedia">
      <form class="civitas-library-search" data-encyclopedia-search>
        ${icon("search", 19)}<input name="query" value="${escapeHtml(query)}" autocomplete="off" placeholder="${bilingualText("Tìm bài viết trong thư viện...", "Search the library...")}" aria-label="${bilingualText("Tìm bài viết", "Search articles")}" /><button type="submit">${bilingualText("Tìm", "Search")}</button>
      </form>
      <div class="civitas-library-layout">
        <aside class="civitas-library-sidebar" aria-label="${bilingualText("Bộ lọc bách khoa", "Encyclopedia filters")}">
          <div class="civitas-filter-group"><span>${bilingualText("Chủ đề", "Topics")}</span>
            <button class="${selectedCategory === "all" ? "active" : ""}" type="button" data-route="${encyclopediaRoute({ level: selectedLevel, saved: showSaved, query })}">${bilingualText("Tất cả bài viết", "All articles")}<small>${articles.length}</small></button>
            ${civitasCategories.map((category) => `<button class="${selectedCategory === category.id ? "active" : ""}" type="button" data-route="${encyclopediaRoute({ category: category.id, level: selectedLevel, saved: showSaved, query })}">${escapeHtml(civitasCategoryTitle(category))}<small>${articles.filter((article) => civitasCategoryForArticle(article).id === category.id).length}</small></button>`).join("")}
          </div>
          <div class="civitas-filter-group"><span>${bilingualText("Trình độ", "Level")}
            <button class="${selectedLevel === "all" ? "active" : ""}" type="button" data-route="${encyclopediaRoute({ category: selectedCategory, saved: showSaved, query })}">${bilingualText("Mọi trình độ", "All levels")}</button>
            <button class="${selectedLevel === "intro" ? "active" : ""}" type="button" data-route="${encyclopediaRoute({ category: selectedCategory, level: "intro", saved: showSaved, query })}">${bilingualText("Nhập môn", "Introductory")}</button>
            <button class="${selectedLevel === "intermediate" ? "active" : ""}" type="button" data-route="${encyclopediaRoute({ category: selectedCategory, level: "intermediate", saved: showSaved, query })}">${bilingualText("Trung cấp", "Intermediate")}</button>
          </div>
          <button class="civitas-saved-filter ${showSaved ? "active" : ""}" type="button" data-route="${encyclopediaRoute({ category: selectedCategory, level: selectedLevel, saved: !showSaved, query })}">${icon("bookmark", 15)} ${showSaved ? bilingualText("Đang xem bài đã lưu", "Viewing saved") : bilingualText("Chỉ xem bài đã lưu", "Saved only")}</button>
          ${(selectedCategory !== "all" || selectedLevel !== "all" || showSaved || query) ? `<a class="civitas-clear-filter" href="#encyclopedia">${bilingualText("Xóa bộ lọc", "Clear filters")}</a>` : ""}
        </aside>
        <section class="civitas-library-results">
          <div class="civitas-library-result-head"><p>${showSaved ? bilingualText("Bài bạn đã lưu", "Your saved articles") : bilingualText("Những điều đang chờ được khám phá", "Ideas waiting to be explored")}</p><span>${records.length} ${bilingualText("bài viết", "articles")}</span></div>
          <div class="civitas-article-grid">
            ${records.length ? records.map(articleTile).join("") : `<div class="civitas-empty-library"><span>${icon("book", 26)}</span><h2>${showSaved ? bilingualText("Chưa có bài nào được lưu", "No saved articles yet") : bilingualText("Chưa thấy bài phù hợp", "No matching article yet")}</h2><p>${showSaved ? bilingualText("Dùng biểu tượng đánh dấu bên cạnh bài viết để lưu lại điều bạn muốn đọc sau.", "Use the bookmark beside an article to save something for later.") : bilingualText("Thử bỏ bớt bộ lọc hoặc tìm một từ khóa khác.", "Try removing a filter or searching for another word.")}</p>${showSaved ? `<a class="civitas-button quiet" href="#encyclopedia">${bilingualText("Khám phá thư viện", "Explore the library")}</a>` : ""}</div>`}
          </div>
        </section>
      </div>
    </section>
  `;
}

function articleTile(article) {
  const category = civitasCategoryForArticle(article);
  const saved = isBookmarked(article.id);
  const read = isArticleRead(article.id);
  return `
    <article class="civitas-article-card ${read ? "is-read" : ""}">
      <div class="civitas-article-card-top"><span>${escapeHtml(civitasCategoryTitle(category))}</span><button class="civitas-bookmark-button ${saved ? "is-saved" : ""}" type="button" data-bookmark="${escapeHtml(article.id)}" aria-label="${saved ? bilingualText("Bỏ lưu bài viết", "Remove saved article") : bilingualText("Lưu bài viết", "Save article")}" aria-pressed="${saved}">${icon("bookmark", 17)}</button></div>
      <a href="#article/${encodeURIComponent(article.slug)}"><h3>${escapeHtml(article.title)}</h3><p>${escapeHtml(article.summary)}</p></a>
      <div class="civitas-article-card-bottom"><span>${escapeHtml(article.readTime || bilingualText("6 phút đọc", "6 min read"))}</span><span>${read ? `${icon("check", 14)} ${bilingualText("Đã đọc", "Read")}` : escapeHtml(articleLevel(article))}</span></div>
    </article>
  `;
}

function renderArticleLearningPanel(article) {
  const node = learningNodeById(article.id);
  if (!node) return "";
  const prerequisites = learningPrerequisites(node);

  return `
    <section class="article-learning-panel" aria-label="${bilingualText("Theo dõi học tập", "Learning progress")}">
      <div class="article-learning-copy">
        <span class="article-learning-kicker">${bilingualText("Lộ trình học tùy chọn", "Optional learning path")}</span>
        <strong>${escapeHtml(learningLevel(node))} · ${escapeHtml(learningGoal(node))}</strong>
        <p>${prerequisites.length
          ? bilingualText("Nền tảng được gợi ý: ", "Suggested foundations: ") + prerequisites.map((item) => learningNodeTitle(item)).join(" · ")
          : bilingualText("Đây là một điểm vào; bạn có thể bắt đầu trực tiếp từ bài này.", "This is an entry point; you can begin directly with this article.")}</p>
      </div>
      <div class="article-learning-actions">
        ${renderLearningStatusControls(node, true)}
        <a href="#${learningRoute(learningProgress.profile.activePathId, node.id)}">${bilingualText("Mở bản đồ học", "Open learning map")} →</a>
      </div>
    </section>
  `;
}

function renderLegacyArticle(slug) {
  const article = currentRecordByReference(slug, articles, sourceArticles, englishCopy.articles);
  if (!article) return renderNotFound();
  const content = normalizedContent(article);
  const related = article.related || article.relatedSlugs || relationships
    .filter((relation) => relation.sourceId === article.id || relation.targetId === article.id)
    .map((relation) => relation.sourceId === article.id ? relation.targetId : relation.sourceId);
  const relatedArticles = related
    .map((id) => articles.find((item) => item.id === id || item.slug === id))
    .filter(Boolean)
    .slice(0, 4);
  const articleSources = (article.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);

  return `
    ${pageHero(article.domain || "Mục tham chiếu", article.title, article.summary, [{ label: "Bách khoa", href: "#encyclopedia" }, { label: article.domain || "Mục tham chiếu" }, { label: article.title }])}
    <div class="page-width article-layout">
      <article class="article-main">
        <header class="article-header">
          <p class="article-domain">${escapeHtml(article.domain || "Bách khoa chính trị")} · ${escapeHtml(article.readTime || "7 phút đọc")}</p>
          <h1 class="article-title">${escapeHtml(article.title)}</h1>
          <p class="article-dek">${escapeHtml(article.dek || article.summary)}</p>
          <div class="article-actions">
            <button class="small-action" type="button" data-action="copy-link">${icon("copy", 14)} Sao chép liên kết</button>
            <button class="small-action" type="button" data-action="cite-article">${icon("book", 14)} Trích dẫn mục này</button>
          </div>
          ${renderArticleLearningPanel(article)}
        </header>
        <div class="article-body">
          <p class="lead">${escapeHtml(article.intro || article.summary)}</p>
          <div class="definition-box"><strong>Định nghĩa ngắn</strong><p>${escapeHtml(article.definition || article.summary)}</p></div>
          ${content.map((section, index) => `
            <section id="section-${index + 1}">
              <h2>${escapeHtml(section.heading)}</h2>
              ${section.paragraphs.map((paragraph, paragraphIndex) => `<p>${escapeHtml(paragraph)}${paragraphIndex === 0 && articleSources.length ? `<sup class="citation">[${Math.min(index + 1, articleSources.length)}]</sup>` : ""}</p>`).join("")}
            </section>
            ${index === 0 ? articleFigure(article) : ""}
          `).join("")}

          <section class="related-panel">
            <h2>Mở rộng từ đây</h2>
            <div class="related-list">
              ${relatedArticles.length ? relatedArticles.map((relatedArticle) => `<a href="#article/${relatedArticle.slug}"><span>${escapeHtml(relatedArticle.title)}</span><span>→</span></a>`).join("") : `<a href="#encyclopedia"><span>Khám phá thêm mục trong bách khoa</span><span>→</span></a>`}
            </div>
          </section>

          <section class="references" id="references">
            <h2>Nguồn &amp; ghi chú</h2>
            ${articleSources.length ? articleSources.map((source, index) => `
              <div class="reference-item"><span class="reference-number">${index + 1}</span><span><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a> · ${escapeHtml(source.publisher || source.author || source.kind || "Nguồn tham chiếu")}</span></div>
            `).join("") : `<p class="article-tile-summary">Mục demo này chưa được gắn nguồn chi tiết. Hãy xem thư viện nguồn để kiểm tra dữ liệu có sẵn.</p>`}
          </section>
        </div>
      </article>
      <aside class="article-aside">
        <section class="aside-box">
          <h3>Trong mục này</h3>
          ${content.map((section, index) => `<a class="toc-link" href="#section-${index + 1}">${String(index + 1).padStart(2, "0")}. ${escapeHtml(section.heading)}</a>`).join("")}
          <a class="toc-link" href="#references">Nguồn &amp; ghi chú</a>
        </section>
        <section class="aside-box">
          <h3>Thông tin biên tập</h3>
          <div class="aside-fact"><span>Trạng thái</span><strong>Đã biên tập</strong></div>
          <div class="aside-fact"><span>Cập nhật</span><strong>${escapeHtml(article.updated || article.lastReviewed || "10.10.2026")}</strong></div>
          <div class="aside-fact"><span>Chế độ dữ liệu</span><strong>Tham chiếu demo</strong></div>
        </section>
      </aside>
    </div>
  `;
}

function normalizedContent(article) {
  if (Array.isArray(article.content) && article.content.length) {
    return article.content.map((section) => {
      if (typeof section === "string") return { heading: "Góc nhìn tham chiếu", paragraphs: [section] };
      return {
        heading: section.heading || section.title || "Góc nhìn tham chiếu",
        paragraphs: Array.isArray(section.paragraphs) ? section.paragraphs : [section.body || section.text || article.summary],
      };
    });
  }
  return [
    { heading: "Phạm vi và cách dùng", paragraphs: [article.summary, "Mục tham chiếu này được thiết kế để định hướng khái niệm, dẫn đến các nguồn có thể kiểm tra và mở ra những liên hệ phù hợp."] },
    { heading: "Bối cảnh và tranh luận", paragraphs: ["Trong khoa học chính trị, cùng một thuật ngữ có thể được dùng theo nhiều truyền thống nghiên cứu. Vì vậy, định nghĩa nên được đọc cùng phạm vi, tiêu chí và bối cảnh lịch sử của nó."] },
    { heading: "Các mối liên hệ", paragraphs: ["Khái niệm này liên quan đến những mục khác trong thư viện, giúp người đọc so sánh cơ chế, thiết chế và cách diễn giải thay vì coi nó như một nhãn độc lập."] },
  ];
}

function articleFigure(article) {
  const isSeparation = article.id === "separation-of-powers" || article.title.toLowerCase().includes("phân quyền");
  return `
    <figure class="article-figure">
      <strong class="figure-title">${isSeparation ? "Sơ đồ minh hoạ: các nhánh quyền lực" : "Lăng kính đọc mục tham chiếu"}</strong>
      ${isSeparation
        ? `<div class="power-diagram"><div class="power-node">Lập pháp<small>làm luật &amp; giám sát</small></div><div class="power-node">Hành pháp<small>thi hành &amp; quản trị</small></div><div class="power-node">Tư pháp<small>xét xử &amp; giải thích luật</small></div></div>`
        : `<div class="power-diagram"><div class="power-node">Khái niệm<small>định nghĩa &amp; phạm vi</small></div><div class="power-node">Bối cảnh<small>lịch sử &amp; thể chế</small></div><div class="power-node">Nguồn<small>văn bản &amp; nghiên cứu</small></div></div>`}
      <figcaption>Minh hoạ cấu trúc đọc trong bản demo; không thay thế mô tả pháp lý hoặc dữ liệu thực chứng chi tiết.</figcaption>
    </figure>
  `;
}

function relatedArticlesFor(article) {
  const ids = new Set(article?.related || article?.relatedSlugs || []);
  relationships.forEach((relation) => {
    const source = String(relation.source || relation.sourceId || "").replace(/^article:/, "");
    const target = String(relation.target || relation.targetId || "").replace(/^article:/, "");
    if (source === article?.id && target && sourceArticles.some((item) => item.id === target)) ids.add(target);
    if (target === article?.id && source && sourceArticles.some((item) => item.id === source)) ids.add(source);
  });
  return [...ids]
    .map((id) => articleByReference(id))
    .filter((item) => item && item.id !== article?.id)
    .slice(0, 4);
}

function renderArticle(slug) {
  const article = currentRecordByReference(slug, articles, sourceArticles, englishCopy.articles);
  if (!article) return renderNotFound();
  const content = normalizedContent(article);
  const relatedArticles = relatedArticlesFor(article);
  const articleSources = (article.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  const node = learningNodeForArticle(article.id);
  const isRead = isArticleRead(article.id);
  const saved = isBookmarked(article.id);

  return `
    <section class="civitas-article-page">
      <div class="page-width">
        <nav class="civitas-breadcrumb civitas-article-breadcrumb" aria-label="Breadcrumb"><a href="#home">${bilingualText("Khám phá", "Explore")}</a><span>/</span><a href="#encyclopedia">${bilingualText("Bách khoa", "Encyclopedia")}</a><span>/</span><span>${escapeHtml(article.title)}</span></nav>
        <div class="civitas-article-layout">
          <aside class="civitas-article-toc">
            <p>${bilingualText("TRONG BÀI NÀY", "IN THIS ARTICLE")}</p>
            <nav>${content.map((section, index) => `<button type="button" data-scroll-target="article-section-${index + 1}"><i>${String(index + 1).padStart(2, "0")}</i>${escapeHtml(section.heading)}</button>`).join("")}<button type="button" data-scroll-target="article-references"><i>↗</i>${bilingualText("Nguồn đọc", "Reading list")}</button></nav>
          </aside>
          <article class="civitas-article-main">
            <header>
              <p class="civitas-article-category">${escapeHtml(articleCategoryLabel(article))}</p>
              <h1>${escapeHtml(article.title)}</h1>
              <p class="civitas-article-dek">${escapeHtml(article.dek || article.summary)}</p>
              <div class="civitas-article-meta"><span>${escapeHtml(article.readTime || bilingualText("6 phút đọc", "6 min read"))}</span><span>${escapeHtml(articleLevel(article))}</span>${article.updated ? `<span>${bilingualText("Cập nhật", "Updated")} ${escapeHtml(article.updated)}</span>` : ""}</div>
              <div class="civitas-article-actions">
                <button class="civitas-button ${isRead ? "quiet is-active" : "forest"}" type="button" data-article-read="${escapeHtml(article.id)}" data-read-value="${isRead ? "false" : "true"}">${icon("check", 16)} ${isRead ? bilingualText("Đã đọc", "Read") : bilingualText("Đánh dấu đã đọc", "Mark as read")}</button>
                <button class="civitas-button quiet ${saved ? "is-active" : ""}" type="button" data-bookmark="${escapeHtml(article.id)}" aria-pressed="${saved}">${icon("bookmark", 16)} ${saved ? bilingualText("Đã lưu", "Saved") : bilingualText("Lưu bài", "Save article")}</button>
              </div>
            </header>
            <div class="civitas-article-body">
              <p class="civitas-article-lead">${escapeHtml(article.intro || article.summary)}</p>
              ${content.map((section, index) => `
                <section id="article-section-${index + 1}"><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph, paragraphIndex) => `<p>${escapeHtml(paragraph)}${paragraphIndex === 0 && articleSources.length ? `<sup>[${Math.min(index + 1, articleSources.length)}]</sup>` : ""}</p>`).join("")}</section>
                ${index === 0 ? articleFigure(article) : ""}
              `).join("")}
              <aside class="civitas-reading-note"><span>${icon("spark", 18)}</span><div><strong>${bilingualText("Đọc chậm một nhịp", "Pause for a moment")}</strong><p>${bilingualText("Khái niệm chính trị thường có nhiều cách dùng. Hãy để ý phạm vi, bối cảnh và nguồn của mỗi nhận định.", "Political concepts often have more than one use. Notice the scope, context, and source behind each claim.")}</p></div></aside>
              <section class="civitas-article-references" id="article-references"><p class="civitas-eyebrow">READING LIST</p><h2>${bilingualText("Nguồn & ghi chú", "Sources & notes")}</h2>${articleSources.length ? articleSources.map((source, index) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer"><b>${String(index + 1).padStart(2, "0")}</b><span>${escapeHtml(source.title)}<small>${escapeHtml(source.publisher || source.author || source.kind || "Reference")}</small></span><i>↗</i></a>`).join("") : `<p class="civitas-demo-note">${bilingualText("Mục nội dung mẫu này chưa có danh mục nguồn riêng; cần biên tập và bổ sung trước khi xuất bản.", "This sample entry does not yet have its own reading list; it needs editorial review before publication.")}</p>`}</section>
            </div>
          </article>
          <aside class="civitas-article-side">
            <section><p class="civitas-aside-label">${bilingualText("ĐỌC TIẾP", "KEEP EXPLORING")}</p><h2>${bilingualText("Liên hệ gần", "Related ideas")}</h2>${relatedArticles.length ? `<div class="civitas-related-list">${relatedArticles.map((item) => `<a href="#article/${item.slug}"><span>${escapeHtml(articleCategoryLabel(item))}</span><strong>${escapeHtml(item.title)}</strong><i>→</i></a>`).join("")}</div>` : `<p>${bilingualText("Mục này sẽ có thêm liên hệ khi thư viện được biên tập mở rộng.", "This entry will gain more links as the library is edited and expanded.")}</p>`}</section>
            ${node ? `<section class="civitas-article-learning"><p class="civitas-aside-label">${bilingualText("LỘ TRÌNH CỦA BẠN", "YOUR ROADMAP")}</p><h2>${escapeHtml(learningGoal(node))}</h2><p>${bilingualText("Bạn có thể chọn trạng thái riêng; điều này không khóa bất kỳ bài viết nào.", "Choose your own status; it never locks any article.")}</p>${renderLearningStatusControls(node, true)}<a href="#${learningRoute(learningProgress.profile.activePathId, node.id)}">${bilingualText("Xem trong lộ trình", "View in roadmap")} →</a></section><section class="civitas-article-check"><p class="civitas-aside-label">${bilingualText("TỰ KIỂM TRA", "SELF-CHECK")}</p>${renderLearningCheck(node)}</section>` : ""}
          </aside>
        </div>
      </div>
    </section>
  `;
}

function renderGlossary(params) {
  const query = (params.get("q") || params.get("term") || "").trim().toLocaleLowerCase(currentLanguage);
  const letter = params.get("letter") || state.glossaryLetter;
  const records = glossary.filter((item) => {
    const term = (item.term || item.title || "").toLocaleLowerCase(currentLanguage);
    const definition = (item.definition || item.summary || "").toLocaleLowerCase(currentLanguage);
    const aliases = (item.aliases || []).join(" ").toLocaleLowerCase(currentLanguage);
    const matchQuery = !query || term.includes(query) || definition.includes(query) || aliases.includes(query);
    const matchLetter = letter === "all" || term.startsWith(letter.toLocaleLowerCase(currentLanguage));
    return matchQuery && matchLetter;
  });
  const grouped = records.reduce((groups, item) => {
    const first = (item.term || item.title || "?").charAt(0).toUpperCase();
    groups[first] ||= [];
    groups[first].push(item);
    return groups;
  }, {});
  const alphabet = [...new Set(glossary.map((item) => (item.term || item.title || "?").charAt(0).toUpperCase()))]
    .sort((a, b) => a.localeCompare(b, currentLanguage));

  return `
    ${pageHero("Thuật ngữ chính trị", "Từ điển khái niệm", "Định nghĩa ngắn để định hướng, cùng thuật ngữ tiếng Anh và đường dẫn sang các mục tham chiếu sâu hơn.")}
    <div class="page-width">
      <div class="tool-bar">
        <form class="filter-group" data-glossary-search>
          <input class="filter-select" name="term" value="${escapeHtml(params.get("q") || params.get("term") || "")}" placeholder="Tìm thuật ngữ..." aria-label="Tìm thuật ngữ" />
          <button class="filter-button" type="submit">Tìm</button>
        </form>
        <span class="result-count">${records.length} thuật ngữ trong bản demo</span>
      </div>
      <nav class="alpha-nav" aria-label="Duyệt theo chữ cái">
        <button class="${letter === "all" ? "active" : ""}" data-route="glossary">Tất</button>
        ${alphabet.map((char) => `<button class="${letter === char ? "active" : ""}" data-route="glossary?letter=${encodeURIComponent(char)}">${char}</button>`).join("")}
      </nav>
      <section class="glossary-list">
        ${Object.keys(grouped).length ? Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b, currentLanguage)).map(([char, items]) => `
          <section class="glossary-group">
            <div class="glossary-letter">${char}</div>
            <div class="glossary-entries">
              ${items.map((item) => `
                <a class="glossary-entry" href="#article/${articlePath(item.articleSlug || item.related?.[0])}">
                  <div class="glossary-term">${escapeHtml(item.term || item.title)}${item.english || item.translation ? `<span>${escapeHtml(item.english || item.translation)}</span>` : ""}</div>
                  <p class="glossary-definition">${escapeHtml(item.definition || item.summary)}</p>
                </a>
              `).join("")}
            </div>
          </section>
        `).join("") : emptyState("Không tìm thấy thuật ngữ", "Thử thay đổi từ khoá hoặc duyệt theo chữ cái.")}
      </section>
    </div>
  `;
}

function renderCountries(params) {
  const region = params.get("region") || "all";
  const visible = region === "all" ? countries : countries.filter((country) => country.region === region);
  const regions = [...new Set(countries.map((country) => country.region))];

  return `
    ${pageHero("Hồ sơ so sánh", "Quốc gia &amp; hệ thống", "Các hồ sơ được tổ chức theo bối cảnh, cấu trúc chính thức và đường dẫn về nguồn — không dùng nhãn phân loại như những kết luận tuyệt đối.")}
    <div class="page-width">
      <div class="tool-bar">
        <span class="result-count">${visible.length} hồ sơ trong dữ liệu demo</span>
        <div class="filter-group" aria-label="Lọc theo khu vực">
          <button class="filter-button ${region === "all" ? "active" : ""}" data-route="countries">Tất cả khu vực</button>
          ${regions.map((item) => `<button class="filter-button ${region === item ? "active" : ""}" data-route="countries?region=${encodeURIComponent(item)}">${escapeHtml(item)}</button>`).join("")}
        </div>
      </div>
      <section class="country-directory">
        ${visible.length ? visible.map((country) => `
          <a class="country-card" href="#country/${country.slug}">
            <span class="country-region">${escapeHtml(country.region)}</span>
            <h3>${escapeHtml(country.name)}</h3>
            <p class="country-sub">${escapeHtml(country.overview || country.form || country.system || "Hồ sơ tham chiếu")}</p>
            <div class="country-metadata"><span>${escapeHtml(country.form || "Xem hồ sơ")}</span><span>${escapeHtml(country.system || "Nguồn có dẫn")}</span></div>
            <span class="country-arrow">→</span>
          </a>
        `).join("") : emptyState("Không có hồ sơ ở khu vực này", "Hãy quay lại xem tất cả hồ sơ demo.")}
      </section>
    </div>
  `;
}

function renderCountry(slug) {
  const country = currentRecordByReference(slug, countries, sourceCountries, englishCopy.countries);
  if (!country) return renderNotFound();
  const countrySources = (country.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  const related = articles.filter((article) => (article.tags || []).some((tag) => String(tag).toLowerCase().includes(String(country.name).toLowerCase()))).slice(0, 3);

  return `
    ${pageHero(country.region || "Hồ sơ quốc gia", country.name, country.overview || country.summary || "Hồ sơ tham chiếu theo bối cảnh hiến pháp, thể chế và nguồn tư liệu.", [{ label: "Quốc gia", href: "#countries" }, { label: country.name }])}
    <div class="page-width article-layout">
      <article class="article-main">
        <header class="article-header">
          <p class="article-domain">${escapeHtml(country.region || "Hồ sơ quốc gia")} · HỒ SƠ DEMO</p>
          <h1 class="article-title">${escapeHtml(country.name)}</h1>
          <p class="article-dek">${escapeHtml(country.form || "Mô tả hình thức hiến pháp được ghi ở mức tham chiếu.")} ${country.system ? `· ${escapeHtml(country.system)}` : ""}</p>
        </header>
        <div class="article-body">
          <h2>Đọc hồ sơ này như thế nào</h2>
          <p class="lead">${escapeHtml(country.overview || "Mục này tổ chức một điểm vào về cấu trúc chính thức, bối cảnh lịch sử và nguồn tài liệu có thể kiểm tra.")}</p>
          <div class="definition-box"><strong>Giới hạn dữ liệu</strong><p>Hồ sơ demo không nêu chức danh đương nhiệm, số liệu hoặc phân loại gây tranh cãi nếu chưa có quá trình xác minh theo thời điểm. Hãy mở nguồn gốc để kiểm tra ngữ cảnh và phiên bản mới nhất.</p></div>
          <h2>Khung tham chiếu</h2>
          <p>Trong PolitiCore, mô tả về một quốc gia tách biệt giữa cấu trúc pháp lý chính thức, thực hành chính trị và các diễn giải học thuật. Một nhãn hệ thống không tự giải thích đầy đủ cách quyền lực vận hành trong từng thời kỳ.</p>
          <figure class="article-figure">
            <strong class="figure-title">Các lối vào hồ sơ</strong>
            <div class="power-diagram"><div class="power-node">Văn bản nền tảng<small>hiến pháp &amp; tài liệu gốc</small></div><div class="power-node">Thiết chế<small>cơ quan &amp; thẩm quyền</small></div><div class="power-node">Lịch sử<small>thay đổi &amp; bối cảnh</small></div></div>
            <figcaption>Khung tổ chức thông tin; không phải đánh giá hay xếp hạng quốc gia.</figcaption>
          </figure>
          <section class="references">
            <h2>Nguồn gắn với hồ sơ</h2>
            ${countrySources.length ? countrySources.map((source, index) => `<div class="reference-item"><span class="reference-number">${index + 1}</span><span><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a> · ${escapeHtml(source.publisher || source.author || "Nguồn tham chiếu")}</span></div>`).join("") : `<p class="article-tile-summary">Chưa có nguồn được gắn trực tiếp trong bản demo.</p>`}
          </section>
          <section class="related-panel">
            <h2>Đọc tiếp</h2>
            <div class="related-list">${related.length ? related.map((article) => `<a href="#article/${article.slug}"><span>${escapeHtml(article.title)}</span><span>→</span></a>`).join("") : `<a href="#encyclopedia"><span>Khám phá mục liên quan</span><span>→</span></a>`}</div>
          </section>
        </div>
      </article>
      <aside class="article-aside">
        <section class="aside-box">
          <h3>Tóm tắt hồ sơ</h3>
          <div class="aside-fact"><span>Khu vực</span><strong>${escapeHtml(country.region || "—")}</strong></div>
          <div class="aside-fact"><span>Hình thức</span><strong>${escapeHtml(country.form || "—")}</strong></div>
          <div class="aside-fact"><span>Khung hệ thống</span><strong>${escapeHtml(country.system || "Cần xem nguồn")}</strong></div>
        </section>
        <section class="aside-box">
          <h3>Tình trạng xác minh</h3>
          <div class="aside-fact"><span>Chế độ</span><strong>Demo có nguồn</strong></div>
          <div class="aside-fact"><span>Đương nhiệm</span><strong>Không hiển thị</strong></div>
          <div class="aside-fact"><span>Cập nhật</span><strong>${escapeHtml(country.updated || "10.10.2026")}</strong></div>
        </section>
      </aside>
    </div>
  `;
}

function renderCompare() {
  const first = ideologies.find((item) => item.slug === state.compareLeft) || ideologies[0];
  const second = ideologies.find((item) => item.slug === state.compareRight) || ideologies[1] || ideologies[0];
  const dimensions = [
    ["liberty", "Tự do &amp; bình đẳng"],
    ["state", "Vai trò của nhà nước"],
    ["economy", "Tổ chức kinh tế"],
    ["property", "Tài sản &amp; phân phối"],
    ["democracy", "Dân chủ &amp; thẩm quyền"],
    ["internationalism", "Quốc gia &amp; quốc tế"],
    ["history", "Phát triển &amp; đa dạng nội bộ"],
  ];
  return `
    ${pageHero("Công cụ tham chiếu", "So sánh hệ tư tưởng", "Đặt hai truyền thống cạnh nhau theo các chiều phân tích rõ ràng. Mỗi ô là một mô tả khái quát có giới hạn, không phải thước đo hoặc phổ chính trị tuyệt đối.")}
    <section class="page-width compare-page">
      <form class="compare-controls" data-compare-form>
        <label><span class="control-label">Truyền thống thứ nhất</span><select name="left">${ideologyOptions(first?.slug).join("")}</select></label>
        <label><span class="control-label">Truyền thống thứ hai</span><select name="right">${ideologyOptions(second?.slug).join("")}</select></label>
        <button class="button-primary" type="submit">Cập nhật bảng</button>
      </form>
      <p class="comparison-note">Phương pháp: so sánh dựa trên mô tả của các mục demo và phải được đọc cùng nguồn, thời kỳ cùng sự đa dạng nội bộ của từng truyền thống.</p>
      <div class="comparison-table-wrap">
        <table class="comparison-table">
          <thead><tr><th>Chiều phân tích</th><th>${escapeHtml(first?.name || "—")}</th><th>${escapeHtml(second?.name || "—")}</th></tr></thead>
          <tbody>
            <tr><th>Tóm tắt</th><td>${escapeHtml(first?.summary || "—")}</td><td>${escapeHtml(second?.summary || "—")}</td></tr>
            ${dimensions.map(([key, label]) => `<tr><th>${label}</th><td>${escapeHtml(first?.dimensions?.[key] || "Cần xem mục chi tiết.")}</td><td>${escapeHtml(second?.dimensions?.[key] || "Cần xem mục chi tiết.")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
      <section class="related-panel">
        <h2>Đọc từng truyền thống trong bối cảnh riêng</h2>
        <div class="related-list"><a href="#ideology/${first?.slug}"><span>${escapeHtml(first?.name || "Mục thứ nhất")}</span><span>→</span></a><a href="#ideology/${second?.slug}"><span>${escapeHtml(second?.name || "Mục thứ hai")}</span><span>→</span></a></div>
      </section>
    </section>
  `;
}

function ideologyOptions(selected) {
  return ideologies.map((item) => `<option value="${item.slug}" ${selected === item.slug ? "selected" : ""}>${escapeHtml(item.name)}</option>`);
}

function renderIdeology(slug) {
  const ideology = currentRecordByReference(slug, ideologies, sourceIdeologies, englishCopy.ideologies);
  if (!ideology) return renderNotFound();
  const dimensionRows = Object.entries(ideology.dimensions || {});
  const sourceRecords = (ideology.sourceIds || []).map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  return `
    ${pageHero("Hệ tư tưởng", ideology.name, ideology.summary, [{ label: "So sánh", href: "#compare" }, { label: ideology.name }])}
    <div class="page-width article-layout">
      <article class="article-main">
        <header class="article-header">
          <p class="article-domain">MỤC THAM CHIẾU · ĐA DẠNG NỘI BỘ</p>
          <h1 class="article-title">${escapeHtml(ideology.name)}</h1>
          <p class="article-dek">${escapeHtml(ideology.summary)}</p>
        </header>
        <div class="article-body">
          <p class="lead">Một hệ tư tưởng là một truyền thống có lịch sử, văn bản, biến thể và những tranh luận nội bộ — không chỉ là một vị trí trên trục đơn giản.</p>
          <h2>Những chiều tham chiếu</h2>
          <div class="related-list">
            ${dimensionRows.map(([key, value]) => `<div class="related-list"><span style="padding:15px;background:var(--white);font-family:var(--font-serif)">${escapeHtml(key)}</span><span style="padding:15px;background:var(--white);font-family:var(--font-serif);color:var(--ink-soft)">${escapeHtml(value)}</span></div>`).join("")}
          </div>
          <h2>Ghi chú về cách đọc</h2>
          <p>So sánh trong PolitiCore dùng các tiêu chí minh bạch để định hướng, nhưng không thay thế việc đọc nguồn gốc hay các nghiên cứu về trường phái, địa điểm và thời kỳ cụ thể.</p>
          <section class="references"><h2>Nguồn liên quan</h2>${sourceRecords.map((source, index) => `<div class="reference-item"><span class="reference-number">${index + 1}</span><span><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a></span></div>`).join("") || `<p class="article-tile-summary">Chưa có nguồn được gắn trong demo.</p>`}</section>
        </div>
      </article>
      <aside class="article-aside"><section class="aside-box"><h3>Đi tới công cụ</h3><a class="toc-link" href="#compare">So sánh hai hệ tư tưởng</a><a class="toc-link" href="#sources">Mở thư viện nguồn</a></section></aside>
    </div>
  `;
}

function timelineText(value) {
  if (!value || typeof value !== "object") return String(value || "");
  return value[currentLanguage] || value.vi || value.en || "";
}

function timelinePeriodById(id) {
  return timelinePeriods.find((item) => item.id === id);
}

function timelineRegionById(id) {
  return timelineRegions.find((item) => item.id === id);
}

function timelineCategoryById(id) {
  return timelineCategories.find((item) => item.id === id);
}

function timelineEntityById(id) {
  return timelineEntities.find((item) => item.id === id);
}

function timelineCountryById(id) {
  return timelineCountryDirectory.find((item) => item.id === id);
}

function timelineEventBySlug(slug) {
  return timelineEvents.find((item) => item.slug === slug || item.id === slug);
}

function timelineSourceById(id) {
  return timelineSources.find((item) => item.id === id);
}

function timelineRegionTitle(id) {
  return timelineText(timelineRegionById(id)?.title) || id;
}

function timelineCategoryTitle(id) {
  return timelineText(timelineCategoryById(id)?.title) || id;
}

function timelineEntityTitle(id) {
  return timelineText(timelineEntityById(id)?.names) || timelineText(timelineCountryById(id)?.names) || id;
}

function formatHistoricalYear(year) {
  const value = Number(year);
  if (!Number.isFinite(value)) return bilingualText("Không xác định", "Undated");
  const absolute = Math.abs(value).toLocaleString(currentLanguage === "vi" ? "vi-VN" : "en-US");
  if (value <= -100000) return currentLanguage === "vi" ? `khoảng ${absolute} năm trước` : `c. ${absolute} BP`;
  if (value < 0) return currentLanguage === "vi" ? `${absolute} TCN` : `${absolute} BCE`;
  return currentLanguage === "vi" ? `${absolute} CN` : `${absolute} CE`;
}

function formatExactTimelineDate(isoDate) {
  const match = /^(\d{4,})-(\d{2})-(\d{2})$/.exec(String(isoDate || ""));
  if (!match) return "";
  const [, rawYear, rawMonth, rawDay] = match;
  const month = Number(rawMonth);
  const day = Number(rawDay);
  if (month < 1 || month > 12 || day < 1 || day > 31) return "";
  const year = Number(rawYear).toLocaleString(currentLanguage === "vi" ? "vi-VN" : "en-US");
  if (currentLanguage === "vi") return `${day} tháng ${month} năm ${year}`;
  const englishMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${day} ${englishMonths[month - 1]} ${year}`;
}

function formatTimelineDate(item) {
  const precise = item.datePrecision === "day" ? formatExactTimelineDate(item.startDate) : "";
  if (precise) return precise;
  const start = formatHistoricalYear(item.startYear);
  const end = Number.isFinite(item.endYear) ? formatHistoricalYear(item.endYear) : "";
  if (end && end !== start) return `${start} — ${end}`;
  if (item.datePrecision === "approximate") return currentLanguage === "vi" ? `Khoảng ${start.replace(/^khoảng\s*/i, "")}` : `c. ${start.replace(/^c\.\s*/i, "")}`;
  return start;
}

function timelinePrecisionLabel(item) {
  const labels = {
    day: ["ngày đã xác định", "dated day"],
    year: ["năm đã xác định", "known year"],
    range: ["khoảng thời gian", "date range"],
    approximate: ["niên đại xấp xỉ", "approximate date"],
    period: ["niên đại theo thời kỳ", "period dating"],
  };
  const [vi, en] = labels[item.datePrecision] || ["niên đại cần kiểm tra", "date needs review"];
  return bilingualText(vi, en);
}

function timelineConfidenceLabel(item) {
  const labels = {
    high: ["có nguồn trực tiếp", "directly sourced"],
    medium: ["có mức độ bất định", "some uncertainty"],
    disputed: ["còn tranh luận", "disputed"],
  };
  const [vi, en] = labels[item.dateConfidence] || labels.medium;
  return bilingualText(vi, en);
}

function timelineEventSearchText(item) {
  const entityText = (item.historicalEntities || []).map(timelineEntityTitle);
  const countryText = (item.modernGeographicalAssociations || []).map(timelineEntityTitle);
  const categoryText = (item.eventCategories || []).map(timelineCategoryTitle);
  return [
    timelineText(item.title), item.title?.vi, item.title?.en, item.originalTitle,
    timelineText(item.summary), item.summary?.vi, item.summary?.en,
    ...(item.aliases || []),
    ...entityText, ...countryText, ...categoryText,
    ...(item.locations || []), ...(item.people || []), ...(item.organizations || []),
  ].filter(Boolean).join(" ");
}

function isTimelineUncertain(item) {
  return ["range", "approximate", "period"].includes(item.datePrecision) || item.dateConfidence !== "high" || (item.scholarlyDisputes || []).length > 0;
}

function timelineRoute(filters = {}) {
  const params = new URLSearchParams();
  const defaults = { q: "", period: "all", region: "all", country: "all", entity: "all", category: "all", actor: "all", evidence: "all", approximate: "0", start: "", end: "", zoom: "period", page: "1", selected: "" };
  Object.entries({ ...defaults, ...filters }).forEach(([key, rawValue]) => {
    const value = String(rawValue ?? "");
    if (!value || value === defaults[key]) return;
    params.set(key, value);
  });
  return `timeline${params.size ? `?${params.toString()}` : ""}`;
}

function normalizeTimelineFilters(params, entityId = "") {
  const valid = (items, value) => value === "all" || items.some((item) => item.id === value);
  const raw = {
    q: (params.get("q") || "").trim(),
    period: params.get("period") || "all",
    region: params.get("region") || "all",
    country: params.get("country") || "all",
    entity: entityId || params.get("entity") || "all",
    category: params.get("category") || "all",
    actor: params.get("actor") || "all",
    evidence: params.get("evidence") || "all",
    approximate: params.get("approximate") === "1" ? "1" : "0",
    start: params.get("start") || "",
    end: params.get("end") || "",
    zoom: params.get("zoom") || "period",
    page: Math.max(1, Number.parseInt(params.get("page") || "1", 10) || 1),
    selected: params.get("selected") || "",
  };
  raw.period = valid(timelinePeriods, raw.period) ? raw.period : "all";
  raw.region = valid(timelineRegions, raw.region) ? raw.region : "all";
  raw.country = valid(timelineCountryDirectory, raw.country) ? raw.country : "all";
  raw.entity = valid(timelineEntities, raw.entity) ? raw.entity : "all";
  raw.category = valid(timelineCategories, raw.category) ? raw.category : "all";
  raw.zoom = ["period", "century", "decade", "year"].includes(raw.zoom) ? raw.zoom : "period";
  raw.evidence = ["all", "source-backed", "needs-review"].includes(raw.evidence) ? raw.evidence : "all";
  raw.start = /^-?\d+$/.test(raw.start) ? raw.start : "";
  raw.end = /^-?\d+$/.test(raw.end) ? raw.end : "";
  return raw;
}

function filterTimelineEvents(filters) {
  const query = filters.q.toLocaleLowerCase(currentLanguage);
  const start = filters.start ? Number(filters.start) : null;
  const end = filters.end ? Number(filters.end) : null;
  return timelineEvents.filter((item) => {
    const endsAt = Number.isFinite(item.endYear) ? item.endYear : item.startYear;
    if (filters.period !== "all" && item.historicalPeriod !== filters.period) return false;
    if (filters.region !== "all" && !(item.regions || []).includes(filters.region)) return false;
    if (filters.country !== "all" && !(item.modernGeographicalAssociations || []).includes(filters.country)) return false;
    if (filters.entity !== "all" && !(item.historicalEntities || []).includes(filters.entity)) return false;
    if (filters.category !== "all" && !(item.eventCategories || []).includes(filters.category)) return false;
    if (filters.actor !== "all" && ![...(item.people || []), ...(item.organizations || [])].includes(filters.actor)) return false;
    if (filters.evidence === "source-backed" && item.verificationStatus !== "source-backed") return false;
    if (filters.evidence === "needs-review" && item.verificationStatus === "source-backed") return false;
    if (filters.approximate === "1" && !isTimelineUncertain(item)) return false;
    if (start !== null && endsAt < start) return false;
    if (end !== null && item.startYear > end) return false;
    if (query && !timelineEventSearchText(item).toLocaleLowerCase(currentLanguage).includes(query)) return false;
    return true;
  }).sort((left, right) => left.startYear - right.startYear || left.slug.localeCompare(right.slug));
}

function timelineGroupLabel(item, zoom) {
  if (zoom === "period") return timelineText(timelinePeriodById(item.historicalPeriod)?.title) || bilingualText("Chưa phân kỳ", "Unperiodized");
  if (zoom === "year") return formatHistoricalYear(item.startYear);
  const bce = item.startYear < 0;
  const absolute = Math.abs(item.startYear);
  const groupSize = zoom === "decade" ? 10 : 100;
  const group = bce ? Math.ceil(absolute / groupSize) * groupSize : Math.floor(item.startYear / groupSize) * groupSize;
  if (zoom === "decade") return bce ? `${group}–${Math.max(1, group - 9)} ${bilingualText("TCN", "BCE")}` : `${group}s ${bilingualText("CN", "CE")}`;
  const century = bce ? Math.ceil(absolute / 100) : Math.floor((item.startYear - 1) / 100) + 1;
  return bilingualText(`Thế kỷ ${century} ${bce ? "TCN" : "CN"}`, `${century}${bce ? "th century BCE" : "th century CE"}`);
}

function timelineActors() {
  return [...new Set(timelineEvents.flatMap((item) => [...(item.people || []), ...(item.organizations || [])]))].sort((left, right) => left.localeCompare(right, currentLanguage));
}

function timelineStatusText(status) {
  return {
    researched: bilingualText("Đã nghiên cứu", "Researched"),
    "partially-covered": bilingualText("Mới phủ một phần", "Partially covered"),
    "sparse-documentation": bilingualText("Tư liệu thưa", "Sparse documentation"),
    "not-yet-researched": bilingualText("Chưa nghiên cứu", "Not yet researched"),
    "needs-review": bilingualText("Cần kiểm tra nguồn", "Needs source verification"),
    "source-backed": bilingualText("Có nguồn", "Source-backed"),
  }[status] || status;
}

function timelineEventCard(item, filters) {
  const primaryEntity = item.historicalEntities?.[0] || item.modernGeographicalAssociations?.[0];
  const dateNote = isTimelineUncertain(item) ? `<span class="civitas-timeline-date-note">${bilingualText("≈ / có tranh luận", "≈ / interpretive note")}</span>` : "";
  return `
    <article class="civitas-timeline-card">
      <div class="civitas-timeline-card-date"><span>${escapeHtml(formatTimelineDate(item))}</span>${dateNote}</div>
      <div class="civitas-timeline-card-body">
        <div class="civitas-timeline-card-context">${primaryEntity ? `<a href="#timeline/entity/${encodeURIComponent(primaryEntity)}">${escapeHtml(timelineEntityTitle(primaryEntity))}</a>` : ""}${item.regions?.length ? `<span>${escapeHtml(item.regions.slice(0, 2).map(timelineRegionTitle).join(" · "))}</span>` : ""}</div>
        <h3><a href="#timeline/event/${encodeURIComponent(item.slug)}">${escapeHtml(timelineText(item.title))}</a></h3>
        <p>${escapeHtml(timelineText(item.summary))}</p>
        <div class="civitas-timeline-tags">${(item.eventCategories || []).slice(0, 2).map((category) => `<span>${escapeHtml(timelineCategoryTitle(category))}</span>`).join("")}</div>
      </div>
      <button class="civitas-timeline-quick-view" type="button" data-route="${timelineRoute({ ...filters, selected: item.id, page: filters.page })}" aria-label="${bilingualText("Xem tóm tắt", "Preview event")}">↗</button>
    </article>
  `;
}

function timelineDetailPanel(item, total) {
  if (!item) {
    return `
      <aside class="civitas-timeline-detail civitas-timeline-detail-empty">
        <span class="civitas-detail-mark">${icon("clock", 20)}</span>
        <p class="civitas-eyebrow">${bilingualText("CÁCH ĐỌC", "HOW TO READ")}</p>
        <h2>${bilingualText("Đi chậm qua các mốc.", "Move slowly through the record.")}</h2>
        <p>${bilingualText(`Hiện có ${total} mốc phù hợp. Chọn biểu tượng ↗ để xem nhanh, hoặc mở một mốc để đọc hồ sơ và nguồn.`, `${total} records match. Use ↗ for a quick view, or open an event for its record and sources.`)}</p>
      </aside>
    `;
  }
  const entities = [...(item.historicalEntities || []), ...(item.modernGeographicalAssociations || [])].slice(0, 5);
  return `
    <aside class="civitas-timeline-detail">
      <p class="civitas-eyebrow">${escapeHtml(formatTimelineDate(item))}</p>
      <h2>${escapeHtml(timelineText(item.title))}</h2>
      <p>${escapeHtml(timelineText(item.summary))}</p>
      <div class="civitas-timeline-detail-meta"><span>${escapeHtml(timelineConfidenceLabel(item))}</span><span>${item.sourceReferences.length} ${bilingualText("nguồn", "sources")}</span></div>
      ${entities.length ? `<div class="civitas-timeline-detail-links">${entities.map((id) => `<a href="#timeline/entity/${encodeURIComponent(id)}">${escapeHtml(timelineEntityTitle(id))} <span>→</span></a>`).join("")}</div>` : ""}
      <a class="civitas-button forest" href="#timeline/event/${encodeURIComponent(item.slug)}">${bilingualText("Mở hồ sơ sự kiện", "Open event record")} <span>→</span></a>
    </aside>
  `;
}

function renderTimeline(params, context = {}) {
  const filters = normalizeTimelineFilters(params, context.entityId || "");
  const visible = filterTimelineEvents(filters);
  const pageSize = 12;
  const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
  const page = Math.min(filters.page, pageCount);
  const pageItems = visible.slice((page - 1) * pageSize, page * pageSize);
  const selected = visible.find((item) => item.id === filters.selected) || null;
  const grouped = pageItems.reduce((groups, item) => {
    const key = timelineGroupLabel(item, filters.zoom);
    (groups.get(key) || groups.set(key, []).get(key)).push(item);
    return groups;
  }, new Map());
  const contextEntity = context.entityId ? timelineEntityById(context.entityId) : null;
  const title = contextEntity
    ? timelineEntityTitle(contextEntity.id)
    : bilingualText("Lịch sử của thế giới, qua từng thời đại.", "The history of the world, through its many eras.");
  const lede = contextEntity
    ? timelineText(contextEntity.overview)
    : bilingualText("Khám phá các nền văn minh, quốc gia, sự kiện và bước ngoặt đã định hình thế giới — từ những xã hội đầu tiên đến hiện tại.", "Explore civilizations, countries, events, and turning points that shaped the world—from early societies to the present.");
  const actors = timelineActors();
  const currentFilters = { ...filters, page };

  return `
    <section class="civitas-timeline-hero">
      <div class="page-width">
        <nav class="civitas-breadcrumb" aria-label="Breadcrumb"><a href="#home">Civitas</a><span>/</span><a href="#timeline">${bilingualText("Timeline lịch sử", "History timeline")}</a>${contextEntity ? `<span>/</span><span>${escapeHtml(timelineEntityTitle(contextEntity.id))}</span>` : ""}</nav>
        <p class="civitas-eyebrow">${contextEntity ? escapeHtml(timelineText(contextEntity.type).replaceAll("-", " ")) : "GLOBAL HISTORY ARCHIVE"}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(lede)}</p>
        <form class="civitas-timeline-search" data-timeline-search>
          ${icon("search", 20)}<input name="q" value="${escapeHtml(filters.q)}" autocomplete="off" placeholder="${bilingualText("Tìm sự kiện, quốc gia, triều đại, nhân vật...", "Search events, countries, dynasties, people...")}" />
          <button type="submit">${bilingualText("Tìm trong timeline", "Search timeline")}</button>
        </form>
        <div class="civitas-timeline-archive-note"><span>${timelineEvents.length} ${bilingualText("hồ sơ lưu trữ", "archive records")}</span><span>${timelineCoverage.importSummary?.sourceBackedRecordCount || timelineEvents.filter((item) => item.verificationStatus === "source-backed").length} ${bilingualText("có nguồn trực tiếp", "source-backed")}</span><span>${bilingualText("kiểm tra lần cuối", "last verified")} ${TIMELINE_LAST_VERIFIED_AT}</span><a href="#timeline/coverage">${bilingualText("Xem phạm vi & khoảng trống", "View scope & gaps")} →</a></div>
      </div>
    </section>

    <section class="page-width civitas-timeline-overview" aria-label="${bilingualText("Tổng quan thời gian", "Timeline overview")}">
      <div class="civitas-timeline-overview-top"><div><p class="civitas-eyebrow">${bilingualText("TỔNG QUAN", "OVERVIEW")}</p><h2>${bilingualText("Dải tư liệu hiện có", "The available record")}</h2></div><a href="#timeline" class="civitas-reset-link">${bilingualText("Xóa bộ lọc", "Clear filters")} ↺</a></div>
      <div class="civitas-period-rail">${timelinePeriods.map((period) => {
        const count = visible.filter((item) => item.historicalPeriod === period.id).length;
        return `<a href="#${timelineRoute({ ...currentFilters, period: filters.period === period.id ? "all" : period.id, page: 1 })}" class="${filters.period === period.id ? "is-active" : ""}" style="--period-grow:${Math.max(1, Math.log2(count + 1)).toFixed(2)}"><span>${escapeHtml(timelineText(period.title))}</span><small>${count}</small></a>`;
      }).join("")}</div>
      <div class="civitas-timeline-scale-controls"><span>${bilingualText("Mức phóng đại", "Scale")}</span>${[["period", bilingualText("Thời kỳ", "Periods")], ["century", bilingualText("Thế kỷ", "Centuries")], ["decade", bilingualText("Thập kỷ", "Decades")], ["year", bilingualText("Năm", "Years")]].map(([zoom, label]) => `<a href="#${timelineRoute({ ...currentFilters, zoom, page: 1 })}" class="${filters.zoom === zoom ? "is-active" : ""}">${label}</a>`).join("")}</div>
    </section>

    <section class="page-width civitas-timeline-layout">
      <aside class="civitas-timeline-filters">
        <form data-timeline-filter>
          <div class="civitas-filter-title"><p class="civitas-eyebrow">${bilingualText("BỘ LỌC", "FILTERS")}</p><a href="#timeline">${bilingualText("Đặt lại", "Reset")}</a></div>
          <label><span>${bilingualText("Thời kỳ", "Period")}</span><select name="period"><option value="all">${bilingualText("Tất cả thời kỳ", "All periods")}</option>${timelinePeriods.map((item) => `<option value="${item.id}" ${filters.period === item.id ? "selected" : ""}>${escapeHtml(timelineText(item.title))}</option>`).join("")}</select></label>
          <div class="civitas-filter-date-grid"><label><span>${bilingualText("Từ năm", "From year")}</span><input name="start" type="number" value="${escapeHtml(filters.start)}" placeholder="-3000" /></label><label><span>${bilingualText("Đến năm", "To year")}</span><input name="end" type="number" value="${escapeHtml(filters.end)}" placeholder="2025" /></label></div>
          <label><span>${bilingualText("Khu vực", "Region")}</span><select name="region"><option value="all">${bilingualText("Mọi khu vực", "All regions")}</option>${timelineRegions.map((item) => `<option value="${item.id}" ${filters.region === item.id ? "selected" : ""}>${escapeHtml(timelineText(item.title))}</option>`).join("")}</select></label>
          <label><span>${bilingualText("Quốc gia / lãnh thổ hiện nay", "Current country / territory")}</span><select name="country"><option value="all">${bilingualText("Tất cả", "All")}</option>${timelineCountryDirectory.map((item) => `<option value="${item.id}" ${filters.country === item.id ? "selected" : ""}>${escapeHtml(timelineText(item.names))}</option>`).join("")}</select></label>
          <label><span>${bilingualText("Thực thể lịch sử", "Historical entity")}</span><select name="entity"><option value="all">${bilingualText("Tất cả", "All")}</option>${timelineEntities.map((item) => `<option value="${item.id}" ${filters.entity === item.id ? "selected" : ""}>${escapeHtml(timelineEntityTitle(item.id))}</option>`).join("")}</select></label>
          <label><span>${bilingualText("Loại sự kiện", "Event category")}</span><select name="category"><option value="all">${bilingualText("Mọi loại", "All categories")}</option>${timelineCategories.map((item) => `<option value="${item.id}" ${filters.category === item.id ? "selected" : ""}>${escapeHtml(timelineText(item.title))}</option>`).join("")}</select></label>
          <label><span>${bilingualText("Người / tổ chức", "Person / organization")}</span><select name="actor"><option value="all">${bilingualText("Tất cả", "All")}</option>${actors.map((item) => `<option value="${escapeHtml(item)}" ${filters.actor === item ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>
          <label><span>${bilingualText("Trạng thái nguồn", "Evidence status")}</span><select name="evidence"><option value="all">${bilingualText("Mọi trạng thái", "All statuses")}</option><option value="source-backed" ${filters.evidence === "source-backed" ? "selected" : ""}>${bilingualText("Có nguồn trực tiếp", "Source-backed")}</option><option value="needs-review" ${filters.evidence === "needs-review" ? "selected" : ""}>${bilingualText("Cần kiểm tra thêm", "Needs review")}</option></select></label>
          <label class="civitas-check-filter"><input name="approximate" type="checkbox" value="1" ${filters.approximate === "1" ? "checked" : ""}/><span>${bilingualText("Chỉ mốc xấp xỉ / còn tranh luận", "Only approximate / disputed dates")}</span></label>
          <input type="hidden" name="q" value="${escapeHtml(filters.q)}" /><input type="hidden" name="zoom" value="${escapeHtml(filters.zoom)}" />
        </form>
      </aside>

      <div class="civitas-timeline-stream">
        <div class="civitas-timeline-stream-top"><span>${visible.length} ${bilingualText("mốc phù hợp", "matching records")}</span><span>${bilingualText("trang", "page")} ${page}/${pageCount}</span></div>
        ${pageItems.length ? [...grouped.entries()].map(([group, items]) => `<section class="civitas-timeline-group"><h2>${escapeHtml(group)}</h2>${items.map((item) => timelineEventCard(item, currentFilters)).join("")}</section>`).join("") : `<div class="civitas-timeline-empty"><span>${icon("search", 22)}</span><h2>${bilingualText("Chưa có mốc nào khớp bộ lọc.", "No records match these filters.")}</h2><p>${bilingualText("Kho tư liệu này vẫn có các khoảng trống nghiên cứu. Hãy thử bỏ bớt điều kiện hoặc xem bảng phạm vi nghiên cứu.", "This archive still has research gaps. Try fewer filters or view the coverage audit.")}</p><a href="#timeline">${bilingualText("Xóa bộ lọc", "Clear filters")}</a></div>`}
        ${pageCount > 1 ? `<nav class="civitas-timeline-pagination" aria-label="${bilingualText("Phân trang timeline", "Timeline pagination")}"><a class="${page === 1 ? "is-disabled" : ""}" href="#${timelineRoute({ ...currentFilters, page: Math.max(1, page - 1) })}">← ${bilingualText("Sớm hơn", "Earlier")}</a><span>${page} / ${pageCount}</span><a class="${page === pageCount ? "is-disabled" : ""}" href="#${timelineRoute({ ...currentFilters, page: Math.min(pageCount, page + 1) })}">${bilingualText("Muộn hơn", "Later")} →</a></nav>` : ""}
      </div>
      ${timelineDetailPanel(selected, visible.length)}
    </section>
  `;
}

function timelineEventSources(item) {
  return item.sourceReferences.map(timelineSourceById).filter(Boolean).map((source) => `
    <a class="civitas-event-source" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
      <span>${escapeHtml(source.sourceType || bilingualText("Nguồn", "Source"))}</span><strong>${escapeHtml(source.title)}</strong><small>${escapeHtml(source.institution)} · ${bilingualText("đã kiểm tra", "accessed")} ${escapeHtml(source.accessedAt || "")}</small><i>↗</i>
    </a>
  `).join("");
}

function timelineEventNarrative(item, key, titleVi, titleEn, fallbackVi, fallbackEn) {
  const copy = timelineText(item[key]) || bilingualText(fallbackVi, fallbackEn);
  return `<section><h2>${bilingualText(titleVi, titleEn)}</h2><p>${escapeHtml(copy)}</p></section>`;
}

function renderTimelineEvent(slug) {
  const item = timelineEventBySlug(slug);
  if (!item) return renderNotFound();
  const period = timelinePeriodById(item.historicalPeriod);
  const relatedIds = [...new Set([...(item.relatedEvents || []), ...timelineEvents.filter((candidate) => candidate.id !== item.id && candidate.historicalPeriod === item.historicalPeriod).slice(0, 2).map((candidate) => candidate.id)])];
  const related = relatedIds.map((id) => timelineEvents.find((candidate) => candidate.id === id)).filter(Boolean).slice(0, 4);
  const entityIds = [...new Set([...(item.historicalEntities || []), ...(item.modernGeographicalAssociations || [])])];
  const hasClaimsNote = item.verificationStatus !== "source-backed" || isTimelineUncertain(item);

  return `
    <section class="civitas-event-hero"><div class="page-width"><nav class="civitas-breadcrumb" aria-label="Breadcrumb"><a href="#home">Civitas</a><span>/</span><a href="#timeline">${bilingualText("Timeline lịch sử", "History timeline")}</a><span>/</span><span>${escapeHtml(formatTimelineDate(item))}</span></nav><p class="civitas-eyebrow">${escapeHtml(timelineText(period?.title))}</p><p class="civitas-event-date">${escapeHtml(formatTimelineDate(item))}</p><h1>${escapeHtml(timelineText(item.title))}</h1><p>${escapeHtml(timelineText(item.summary))}</p><div class="civitas-event-hero-meta"><span>${escapeHtml(timelinePrecisionLabel(item))}</span><span>${escapeHtml(timelineConfidenceLabel(item))}</span><span class="civitas-verification-status ${escapeHtml(item.verificationStatus)}">${escapeHtml(timelineStatusText(item.verificationStatus))}</span><span>${item.sourceReferences.length} ${bilingualText("nguồn", "sources")}</span></div></div></section>
    <section class="page-width civitas-event-layout">
      <aside class="civitas-event-rail"><a href="#timeline?period=${encodeURIComponent(item.historicalPeriod)}">${escapeHtml(timelineText(period?.title))} →</a>${entityIds.map((id) => `<a href="#timeline/entity/${encodeURIComponent(id)}">${escapeHtml(timelineEntityTitle(id))} →</a>`).join("")}</aside>
      <article class="civitas-event-record">
        <section class="civitas-event-facts"><div><span>${bilingualText("Bối cảnh địa lý", "Geographical context")}</span><p>${escapeHtml((item.regions || []).map(timelineRegionTitle).join(" · ") || bilingualText("Không xác định", "Not specified"))}</p></div><div><span>${bilingualText("Địa điểm", "Location")}</span><p>${escapeHtml((item.locations || []).join(" · ") || bilingualText("Không gán một địa điểm duy nhất", "Not assigned to one location"))}</p></div><div><span>${bilingualText("Thực thể lịch sử", "Historical entity")}</span><p>${escapeHtml((item.historicalEntities || []).map(timelineEntityTitle).join(" · ") || bilingualText("Không áp dụng", "Not applicable"))}</p></div></section>
        ${timelineEventNarrative(item, "background", "Bối cảnh", "Historical context", "Hồ sơ khởi đầu này chỉ nêu những bối cảnh được nguồn gắn trực tiếp; các chi tiết chưa có nguồn chuyên ngành sẽ không được suy diễn thêm.", "This starter record only states context attached directly to its sources; details without specialist support are not inferred.")}
        ${timelineEventNarrative(item, "causes", "Nguyên nhân & nền tảng", "Causes & background", "Các nguyên nhân lịch sử thường có nhiều tầng và có thể được các học giả diễn giải khác nhau. Hãy xem nguồn để phân biệt bằng chứng với cách diễn giải.", "Historical causes often have several layers and may be interpreted differently by scholars. Consult the sources to distinguish evidence from interpretation.")}
        ${timelineEventNarrative(item, "developments", "Diễn biến", "What happened", "Phần tóm tắt ở đầu hồ sơ ghi lại phạm vi đã được xác minh của mốc này; hồ sơ sẽ được mở rộng khi có nghiên cứu và nguồn phù hợp.", "The summary at the top records the verified scope of this entry; this record can expand when appropriate research and sources are added.")}
        ${timelineEventNarrative(item, "consequences", "Hệ quả", "Consequences", "Tác động dài hạn không được giản lược thành một đường nguyên nhân duy nhất. Các liên hệ dưới đây là đường dẫn nghiên cứu, không phải khẳng định tất định.", "Long-term effects are not reduced to a single causal line. The links below are research paths, not deterministic claims.")}
        ${(item.people?.length || item.organizations?.length) ? `<section><h2>${bilingualText("Nhân vật & tổ chức", "People & organizations")}</h2><div class="civitas-entity-chips">${[...(item.people || []), ...(item.organizations || [])].map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div></section>` : ""}
        ${hasClaimsNote ? `<aside class="civitas-event-caution"><span>≈</span><div><strong>${bilingualText("Ghi chú về mức độ chắc chắn", "Note on certainty")}</strong><p>${escapeHtml((item.scholarlyDisputes || []).join(" ") || bilingualText("Niên đại hoặc cách diễn giải của hồ sơ này có giới hạn. Civitas ghi rõ giới hạn thay vì làm chúng có vẻ chính xác hơn thực tế.", "This record has limits of date or interpretation. Civitas names those limits rather than making them look more precise than they are."))}</p></div></aside>` : ""}
        <section class="civitas-event-sources"><div><p class="civitas-eyebrow">${bilingualText("NGUỒN & KIỂM CHỨNG", "SOURCES & VERIFICATION")}</p><h2>${bilingualText("Nguồn có thể mở", "Usable sources")}</h2><p>${bilingualText(`Kiểm tra lần cuối: ${item.lastVerifiedAt}. Nguồn được gắn như bằng chứng hoặc đường dẫn nghiên cứu; nhãn trạng thái cho biết tuyên bố trung tâm đã được đối chiếu ở cấp hồ sơ hay chưa.`, `Last verified: ${item.lastVerifiedAt}. Sources are linked as evidence or research pathways; the status label says whether the central claim has been checked record by record.`)}</p></div>${timelineEventSources(item)}</section>
      </article>
      <aside class="civitas-event-related"><p class="civitas-eyebrow">${bilingualText("ĐỌC TIẾP", "CONTINUE READING")}</p>${related.map((relatedItem) => `<a href="#timeline/event/${encodeURIComponent(relatedItem.slug)}"><span>${escapeHtml(formatTimelineDate(relatedItem))}</span><strong>${escapeHtml(timelineText(relatedItem.title))}</strong><i>→</i></a>`).join("") || `<p>${bilingualText("Chưa có liên kết sự kiện khác trong bộ khởi đầu.", "No other event links in the starter set yet.")}</p>`}</aside>
    </section>
  `;
}

function renderTimelineEntity(entityId) {
  const entity = timelineEntityById(entityId);
  if (!entity) return renderNotFound();
  return renderTimeline(new URLSearchParams(`entity=${encodeURIComponent(entity.id)}`), { entityId: entity.id });
}

function renderTimelineCoverage() {
  const statusForPeriod = (id) => timelineCoverage.periodStatus?.find((item) => item.periodId === id)?.status || "not-yet-researched";
  const statusForRegion = (id) => timelineCoverage.regionalStatus?.find((item) => item.regionId === id)?.status || "not-yet-researched";
  const importSummary = timelineCoverage.importSummary || {};
  return `
    <section class="civitas-coverage-hero"><div class="page-width"><nav class="civitas-breadcrumb" aria-label="Breadcrumb"><a href="#home">Civitas</a><span>/</span><a href="#timeline">${bilingualText("Timeline lịch sử", "History timeline")}</a><span>/</span><span>${bilingualText("Phạm vi", "Coverage")}</span></nav><p class="civitas-eyebrow">EDITORIAL COVERAGE AUDIT</p><h1>${bilingualText("Nhìn thấy cả những khoảng trống.", "Make the gaps visible, too.")}</h1><p>${escapeHtml(timelineText(timelineCoverage.datasetScope))}</p><div><span>${timelineEvents.length} ${bilingualText("hồ sơ", "records")}</span><span>${importSummary.sourceBackedRecordCount || 0} ${bilingualText("có nguồn trực tiếp", "source-backed")}</span><span>${importSummary.importedRecordCount || 0} ${bilingualText("mốc từ batch nghiên cứu", "research-batch records")}</span><span>${timelineEntities.length} ${bilingualText("thực thể", "entities")}</span><span>${timelineCountryDirectory.length} ${bilingualText("quốc gia / lãnh thổ trong danh mục", "countries / territories in directory")}</span><span>${bilingualText("kiểm tra", "verified")} ${TIMELINE_LAST_VERIFIED_AT}</span></div></div></section>
    <section class="page-width civitas-coverage-page"><p class="civitas-coverage-note">${escapeHtml(timelineText(timelineCoverage.notes))}</p><div class="civitas-coverage-grid"><section><h2>${bilingualText("Theo thời kỳ", "By period")}</h2>${timelinePeriods.map((item) => `<a href="#timeline?period=${encodeURIComponent(item.id)}"><span>${escapeHtml(timelineText(item.title))}</span><b class="coverage-status ${statusForPeriod(item.id)}">${escapeHtml(timelineStatusText(statusForPeriod(item.id)))}</b><i>→</i></a>`).join("")}</section><section><h2>${bilingualText("Theo khu vực", "By region")}</h2>${timelineRegions.map((item) => `<a href="#timeline?region=${encodeURIComponent(item.id)}"><span>${escapeHtml(timelineText(item.title))}</span><b class="coverage-status ${statusForRegion(item.id)}">${escapeHtml(timelineStatusText(statusForRegion(item.id)))}</b><i>→</i></a>`).join("")}</section></div><section class="civitas-country-directory"><div><p class="civitas-eyebrow">${bilingualText("DANH MỤC LÃNH THỔ", "COUNTRY & TERRITORY DIRECTORY")}</p><h2>${bilingualText("Trạng thái trong kho tư liệu hiện tại", "Status in the current archive")}</h2></div><div class="civitas-country-directory-grid">${timelineCountryDirectory.map((item) => `<a href="#timeline?country=${encodeURIComponent(item.id)}"><span>${escapeHtml(timelineText(item.names))}</span><small>${escapeHtml(timelineRegionTitle(item.region))}</small><b class="coverage-status ${item.coverageStatus}">${escapeHtml(timelineStatusText(item.coverageStatus))}</b></a>`).join("")}</div></section></section>
  `;
}

function learningProfileLabel(profile) {
  return currentLanguage === "en" ? (profile?.labelEn || profile?.label || "") : (profile?.label || "");
}

function learningProfileDescription(profile) {
  return currentLanguage === "en" ? (profile?.descriptionEn || profile?.description || "") : (profile?.description || "");
}

function learningCheckPrompt(check) {
  return currentLanguage === "en" ? (check?.promptEn || check?.prompt || "") : (check?.prompt || "");
}

function learningCheckChoices(check) {
  return currentLanguage === "en" ? (check?.choicesEn || check?.choices || []) : (check?.choices || []);
}

function learningCheckExplanation(check) {
  return currentLanguage === "en" ? (check?.explanationEn || check?.explanation || "") : (check?.explanation || "");
}

function setLearningPath(pathId) {
  if (!learningPaths.some((path) => path.id === pathId)) return false;
  learningProgress.profile.activePathId = pathId;
  return saveLearningProgress();
}

function recordLearningCheck(checkId, selectedIndex) {
  const check = learningCheck.find((item) => item.id === checkId);
  if (!check || !Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= (check.choices || []).length) return false;
  const previous = learningProgress.checks[checkId] || { attempts: 0 };
  learningProgress.checks[checkId] = {
    attempts: Math.max(0, Number(previous.attempts) || 0) + 1,
    selectedIndex,
    correct: selectedIndex === check.answer,
    attemptedAt: new Date().toISOString(),
  };
  return saveLearningProgress();
}

function learningRecommendationReason(node, path) {
  const status = learningStatus(node.id);
  const missing = missingPrerequisites(node);
  if (status === "review") return bilingualText("Bạn đã đánh dấu mục này cần ôn lại.", "You marked this entry for review.");
  if (status === "learning") return bilingualText("Bạn đang học mục này.", "You are currently studying this entry.");
  if (!learningPrerequisites(node).length) return bilingualText("Đây là một điểm vào phù hợp cho nhánh này.", "This is a suitable entry point for this branch.");
  if (missing.length) {
    return bilingualText(
      "Bạn vẫn có thể mở bài ngay; nên xem trước " + missing.map(learningNodeTitle).join(", ") + ".",
      "You can open this article now; consider reviewing " + missing.map(learningNodeTitle).join(", ") + " first.",
    );
  }
  return bilingualText(
    "Các nền tảng gợi ý cho " + learningPathTitle(path).toLowerCase() + " đã được đánh dấu.",
    "The suggested foundations for " + learningPathTitle(path).toLowerCase() + " are marked.",
  );
}

function learningMapPoint(nodeId) {
  const points = {
    "what-is-politics": [95, 360],
    "political-power": [265, 190],
    democracy: [335, 420],
    sovereignty: [145, 565],
    "political-legitimacy": [525, 485],
    constitutionalism: [500, 620],
    "separation-of-powers": [770, 610],
    "proportional-representation": [570, 230],
    authoritarianism: [795, 345],
    liberalism: [850, 130],
    "united-nations": [760, 485],
    "vietnam-constitutional-framework": [965, 620],
    "public-policy": [710, 260],
  };
  const [x, y] = points[nodeId] || [520, 340];
  return { x, y };
}

function renderLearningMap(pathId, selectedNodeId) {
  const visibleNodeIds = pathNodeIdsWithPrerequisites(pathId);
  const mapTransform = `translate(${state.learningMap.x}px, ${state.learningMap.y}px) scale(${state.learningMap.scale})`;
  const edges = learningNodes.flatMap((node) => learningPrerequisites(node).map((prerequisite) => {
    const start = learningMapPoint(prerequisite.id);
    const end = learningMapPoint(node.id);
    const visible = visibleNodeIds.has(prerequisite.id) && visibleNodeIds.has(node.id);
    return `<line class="learning-map-edge ${visible ? "is-visible" : "is-muted"}" x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}"></line>`;
  })).join("");

  return `
    <section class="learning-map-panel" aria-labelledby="learning-map-title">
      <div class="learning-map-toolbar">
        <div>
          <p class="section-kicker">${bilingualText("Bản đồ tương tác", "Interactive map")}</p>
          <h2 id="learning-map-title">${bilingualText("Khám phá các nền tảng được gợi ý", "Explore suggested foundations")}</h2>
        </div>
        <div class="learning-map-controls" role="group" aria-label="${bilingualText("Điều khiển bản đồ", "Map controls")}">
          <button type="button" data-action="learning-zoom" data-delta="-0.15" aria-label="${bilingualText("Thu nhỏ bản đồ", "Zoom out")}">−</button>
          <button type="button" data-action="learning-map-reset">${bilingualText("Căn giữa", "Reset")}</button>
          <button type="button" data-action="learning-zoom" data-delta="0.15" aria-label="${bilingualText("Phóng to bản đồ", "Zoom in")}">+</button>
        </div>
      </div>
      <p class="learning-map-hint">${bilingualText("Kéo vùng trống để di chuyển. Dùng + / − để phóng to hoặc thu nhỏ. Chọn một nút để xem chi tiết.", "Drag empty space to move. Use + / − to zoom. Select a node to see details.")}</p>
      <div class="learning-map-viewport" data-learning-map-viewport tabindex="0" aria-label="${bilingualText("Bản đồ kiến thức học tập", "Learning knowledge map")}">
        <div class="learning-map-canvas" data-learning-map-canvas style="transform:${escapeHtml(mapTransform)}">
          <svg class="learning-map-edges" viewBox="0 0 1040 680" aria-hidden="true">${edges}</svg>
          ${learningNodes.map((node) => {
            const point = learningMapPoint(node.id);
            const status = learningStatus(node.id);
            const isSelected = node.id === selectedNodeId;
            const isIncluded = visibleNodeIds.has(node.id);
            return `
              <button
                class="learning-map-node status-${escapeHtml(status)} ${isSelected ? "is-selected" : ""} ${isIncluded ? "is-included" : "is-muted"}"
                type="button"
                data-learning-node="${escapeHtml(node.id)}"
                aria-pressed="${isSelected}"
                aria-label="${escapeHtml(learningNodeTitle(node) + " · " + learningStatusLabel(status))}"
                style="--node-x:${point.x}px;--node-y:${point.y}px"
              >
                <span class="learning-map-node-status" aria-hidden="true">${learningStatusSymbol(status)}</span>
                <span class="learning-map-node-title">${escapeHtml(learningNodeTitle(node))}</span>
                <span class="learning-map-node-meta">${escapeHtml(learningTrackMeta(node.track))}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      <div class="learning-map-legend" aria-label="${bilingualText("Chú giải trạng thái", "Status legend")}">
        ${["not_started", "learning", "mastered", "review"].map((status) => `<span class="status-${status}"><i aria-hidden="true">${learningStatusSymbol(status)}</i>${learningStatusLabel(status)}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderLearningStatusControls(node, compact = false) {
  const status = learningStatus(node.id);
  const statuses = ["read", "learning", "mastered", "review"];
  return `
    <div class="learning-status-actions ${compact ? "is-compact" : ""}" role="group" aria-label="${bilingualText("Cập nhật tiến độ", "Update learning progress")}">
      ${statuses.map((value) => `
        <button class="${status === value ? "active" : ""}" type="button" data-learning-status="${value}" data-learning-node-id="${escapeHtml(node.id)}" aria-pressed="${status === value}">
          <span aria-hidden="true">${learningStatusSymbol(value)}</span>${learningStatusLabel(value)}
        </button>
      `).join("")}
      ${status !== "not_started" ? `<button class="learning-status-clear" type="button" data-learning-status="not_started" data-learning-node-id="${escapeHtml(node.id)}">${bilingualText("Bỏ đánh dấu", "Clear")}</button>` : ""}
    </div>
  `;
}

function renderLearningCheck(node) {
  const check = learningCheck.find((item) => item.nodeId === node.id);
  if (!check) {
    return `<p class="learning-check-empty">${bilingualText("Mục này chưa có câu hỏi ôn tập trong dữ liệu demo. Bạn vẫn có thể tự đổi trạng thái học.", "This entry has no review question in the demo data yet. You can still set your own learning status.")}</p>`;
  }

  const previous = learningProgress.checks[check.id];
  const choices = learningCheckChoices(check);
  const result = previous?.attemptedAt ? `
    <div class="learning-check-result ${previous.correct ? "is-correct" : "is-incorrect"}" role="status">
      <strong>${previous.correct ? bilingualText("Đúng hướng.", "On the right track.") : bilingualText("Chưa đúng; hãy xem lại lời giải.", "Not quite; review the explanation.")}</strong>
      <span>${escapeHtml(learningCheckExplanation(check))}</span>
      <small>${bilingualText("Kết quả này không tự động đánh dấu “đã nắm vững”.", "This result does not automatically mark the entry as mastered.")}</small>
    </div>
  ` : "";

  return `
    <form class="learning-check" data-learning-check data-check-id="${escapeHtml(check.id)}">
      <fieldset>
        <legend>${escapeHtml(learningCheckPrompt(check))}</legend>
        <div class="learning-check-options">
          ${choices.map((choice, index) => `
            <label>
              <input type="radio" name="answer" value="${index}" ${previous?.selectedIndex === index ? "checked" : ""} required />
              <span>${escapeHtml(choice)}</span>
            </label>
          `).join("")}
        </div>
        <button class="button-primary" type="submit">${previous?.attemptedAt ? bilingualText("Kiểm tra lại", "Check again") : bilingualText("Kiểm tra câu trả lời", "Check answer")}</button>
      </fieldset>
      ${result}
    </form>
  `;
}

function renderLearningDetail(node, activePath) {
  const article = articleForLearningNode(node);
  const prerequisites = learningPrerequisites(node);
  const missing = missingPrerequisites(node);
  const sourceCount = article?.sourceIds?.length || 0;

  return `
    <aside class="learning-detail" aria-live="polite">
      <div class="learning-detail-header">
        <span class="learning-track">${escapeHtml(learningTrackMeta(node.track))}</span>
        <span class="learning-status-chip status-${escapeHtml(learningStatus(node.id))}">${learningStatusSymbol(learningStatus(node.id))} ${escapeHtml(learningStatusLabel(learningStatus(node.id)))}</span>
      </div>
      <h2>${escapeHtml(learningNodeTitle(node))}</h2>
      <p class="learning-detail-level">${escapeHtml(learningLevel(node))} · ${sourceCount} ${bilingualText("nguồn được gắn", "linked sources")}</p>
      <p class="learning-detail-goal">${escapeHtml(learningGoal(node))}</p>
      <a class="learning-open-article" href="${learningNodeRoute(node)}">${bilingualText("Mở bài viết đầy đủ", "Open full article")} <span aria-hidden="true">→</span></a>

      <section class="learning-detail-section">
        <h3>${bilingualText("Nền tảng được gợi ý", "Suggested foundations")}</h3>
        <p>${prerequisites.length
          ? bilingualText("Những mục này hỗ trợ việc đọc sâu hơn, nhưng không khóa bài viết.", "These entries support deeper reading; they never lock the article.")
          : bilingualText("Đây là một điểm vào, chưa có kiến thức nền được gợi ý trong bản demo.", "This is an entry point with no suggested foundation in the demo.")}</p>
        ${prerequisites.length ? `<div class="learning-prerequisite-list">${prerequisites.map((item) => `
          <button type="button" data-learning-node="${escapeHtml(item.id)}" class="${prerequisiteSatisfied(item.id) ? "is-satisfied" : ""}">
            <span aria-hidden="true">${learningStatusSymbol(learningStatus(item.id))}</span>
            <span>${escapeHtml(learningNodeTitle(item))}</span>
            <small>${prerequisiteSatisfied(item.id) ? bilingualText("đã đáp ứng", "met") : bilingualText("nên xem trước", "suggested first")}</small>
          </button>
        `).join("")}</div>` : ""}
        ${missing.length ? `<p class="learning-detail-note">${bilingualText("Còn " + missing.length + " nền tảng được gợi ý. Bạn có thể học theo bất kỳ thứ tự nào.", missing.length + " suggested foundation" + (missing.length > 1 ? "s" : "") + " remain. You may study in any order.")}</p>` : ""}
      </section>

      <section class="learning-detail-section">
        <h3>${bilingualText("Tiến độ của bạn", "Your progress")}</h3>
        <p>${bilingualText("Đã đọc và đã nắm vững là hai trạng thái khác nhau. Bạn luôn có thể chỉnh lại.", "Read and mastered are separate states. You can change either at any time.")}</p>
        ${renderLearningStatusControls(node)}
        <button class="learning-skip-button ${learningStatus(node.id) === "skipped" ? "active" : ""}" type="button" data-learning-status="${learningStatus(node.id) === "skipped" ? "not_started" : "skipped"}" data-learning-node-id="${escapeHtml(node.id)}">
          ${learningStatus(node.id) === "skipped" ? bilingualText("Đưa lại vào gợi ý", "Return to suggestions") : bilingualText("Bỏ qua mục này lúc này", "Skip this for now")}
        </button>
      </section>

      <section class="learning-detail-section learning-detail-check">
        <h3>${bilingualText("Tự kiểm tra ngắn", "Quick self-check")}</h3>
        ${renderLearningCheck(node)}
      </section>

      <p class="learning-rule-note">${escapeHtml(learningRecommendationReason(node, activePath))}</p>
    </aside>
  `;
}

function renderLegacyLearningRoadmap(params) {
  const requestedPathId = params.get("path");
  const activePathId = requestedPathId === "all"
    ? "all"
    : (learningPaths.some((path) => path.id === requestedPathId) ? requestedPathId : learningProgress.profile.activePathId);
  const activePath = activePathId === "all"
    ? {
      id: "all",
      title: "Toàn bộ bản đồ",
      titleEn: "Whole map",
      description: "Hiển thị tất cả các mục và quan hệ tiên quyết trong bộ dữ liệu demo.",
      descriptionEn: "Shows all entries and suggested prerequisite relationships in the demo data.",
      nodeIds: learningNodes.map((node) => node.id),
    }
    : (learningPathById(activePathId) || learningPaths[0]);
  const recommended = recommendedLearningNodes(activePath.id);
  const selectedCandidate = params.get("node");
  const selectedNode = learningNodeById(selectedCandidate)
    || recommended[0]
    || learningNodes.find((node) => pathNodeIdsWithPrerequisites(activePath.id).has(node.id))
    || learningNodes[0];
  const counts = learningProgressCounts();
  const activeProfile = learningProfiles.find((profile) => profile.id === learningProgress.profile.entryMode) || learningProfiles[0];

  return `
    ${pageHero(
      bilingualText("Học theo cách của bạn", "Learn your way"),
      bilingualText("Lộ trình học tập", "Learning roadmap"),
      bilingualText("Đây là công cụ tùy chọn: mọi bài viết vẫn luôn mở tự do. Bản đồ chỉ cho thấy các nền tảng được gợi ý và lý do đề xuất.", "This is optional: every article always remains open. The map only shows suggested foundations and why an entry is recommended."),
      [{ label: bilingualText("Khám phá", "Explore"), href: "#home" }, { label: bilingualText("Lộ trình học", "Learning roadmap") }],
    )}
    <section class="page-width learning-page">
      <div class="learning-summary" aria-label="${bilingualText("Tổng quan tiến độ", "Progress overview")}">
        <div><span>${counts.read}</span><small>${bilingualText("đã đọc", "read")}</small></div>
        <div><span>${counts.learning}</span><small>${bilingualText("đang học", "learning")}</small></div>
        <div><span>${counts.mastered}</span><small>${bilingualText("đã nắm vững", "mastered")}</small></div>
        <div><span>${counts.review}</span><small>${bilingualText("cần ôn", "review")}</small></div>
        <div class="learning-summary-note"><strong>${bilingualText("Lưu trên thiết bị này", "Saved on this device")}</strong><span>${bilingualText("Không cần tài khoản; dữ liệu không đồng bộ giữa các thiết bị.", "No account required; data does not sync across devices.")}</span></div>
      </div>

      <section class="learning-onboarding" aria-labelledby="learning-start-title">
        <div>
          <p class="section-kicker">${bilingualText("Bắt đầu tùy chọn", "Optional starting point")}</p>
          <h2 id="learning-start-title">${bilingualText("Bạn muốn bắt đầu ở đâu?", "Where would you like to start?")}</h2>
          <p>${bilingualText("Chọn một mô tả gần đúng, hoặc bỏ qua hoàn toàn và tự dùng bản đồ. Đây không phải bài kiểm tra đầu vào.", "Choose the closest description, or skip it and use the map yourself. This is not an entrance test.")}</p>
        </div>
        <div class="learning-profile-grid">
          ${learningProfiles.map((profile) => `
            <button class="learning-profile ${activeProfile.id === profile.id ? "active" : ""}" type="button" data-learning-profile="${escapeHtml(profile.id)}" aria-pressed="${activeProfile.id === profile.id}">
              <strong>${escapeHtml(learningProfileLabel(profile))}</strong>
              <span>${escapeHtml(learningProfileDescription(profile))}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="learning-branch-section" aria-labelledby="learning-branches-title">
        <div class="learning-branch-heading">
          <div>
            <p class="section-kicker">${bilingualText("Chọn nhánh", "Choose a branch")}</p>
            <h2 id="learning-branches-title">${escapeHtml(learningPathTitle(activePath))}</h2>
            <p>${escapeHtml(learningPathDescription(activePath))}</p>
          </div>
          <button class="learning-reset-progress" type="button" data-action="clear-learning-progress">${bilingualText("Xóa tiến độ trên thiết bị này", "Clear progress on this device")}</button>
        </div>
        <div class="learning-path-grid" role="list">
          <button class="learning-path-card ${activePath.id === "all" ? "active" : ""}" type="button" data-learning-path="all" aria-pressed="${activePath.id === "all"}">
            <span>${bilingualText("Toàn bộ", "All")}</span><strong>${bilingualText("Xem cả bản đồ", "View the whole map")}</strong>
          </button>
          ${learningPaths.map((path) => `
            <button class="learning-path-card ${activePath.id === path.id ? "active" : ""}" type="button" data-learning-path="${escapeHtml(path.id)}" aria-pressed="${activePath.id === path.id}">
              <span>${escapeHtml(path.nodeIds.length)} ${bilingualText("mục chính", "core entries")}</span>
              <strong>${escapeHtml(learningPathTitle(path))}</strong>
              <small>${escapeHtml(learningPathDescription(path))}</small>
            </button>
          `).join("")}
        </div>
      </section>

      <div class="learning-workspace">
        ${renderLearningMap(activePath.id, selectedNode.id)}
        ${renderLearningDetail(selectedNode, activePath)}
      </div>

      <section class="learning-recommendations" aria-labelledby="learning-recommendations-title">
        <div class="section-header">
          <div>
            <p class="section-kicker">${bilingualText("Gợi ý có lý do", "Reasoned suggestions")}</p>
            <h2 id="learning-recommendations-title" class="section-heading">${bilingualText("Nên học tiếp", "What to explore next")}</h2>
          </div>
          <span class="result-count">${recommended.length} ${bilingualText("mục khả dụng", "available entries")}</span>
        </div>
        <div class="learning-recommendation-grid">
          ${recommended.length ? recommended.slice(0, 6).map((node, index) => {
            const article = articleForLearningNode(node);
            const missing = missingPrerequisites(node);
            return `
              <article class="learning-recommendation">
                <span class="learning-recommendation-number">${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div class="learning-recommendation-meta"><span>${escapeHtml(learningTrackMeta(node.track))}</span><span class="status-${escapeHtml(learningStatus(node.id))}">${learningStatusSymbol(learningStatus(node.id))} ${escapeHtml(learningStatusLabel(learningStatus(node.id)))}</span></div>
                  <h3>${escapeHtml(learningNodeTitle(node))}</h3>
                  <p>${escapeHtml(learningRecommendationReason(node, activePath))}</p>
                  ${missing.length ? `<small>${bilingualText("Nền tảng gợi ý:", "Suggested foundations:")} ${escapeHtml(missing.map(learningNodeTitle).join(" · "))}</small>` : ""}
                  <div class="learning-recommendation-actions">
                    <button type="button" data-learning-node="${escapeHtml(node.id)}">${bilingualText("Xem trong bản đồ", "View in map")}</button>
                    <a href="#article/${encodeURIComponent(article?.slug || node.articleId)}">${bilingualText("Mở bài viết", "Open article")} →</a>
                  </div>
                </div>
              </article>
            `;
          }).join("") : `<div class="empty-state"><h2>${bilingualText("Bạn đã đánh dấu xong nhánh này.", "You have marked this branch complete.")}</h2><p>${bilingualText("Bạn có thể mở lại một mục, chọn nhánh khác hoặc xem toàn bộ bản đồ.", "You can reopen an entry, choose another branch, or view the whole map.")}</p></div>`}
        </div>
      </section>
    </section>
  `;
}

function mapFocusSet(categoryId, mode, selectedNodeId) {
  const categoryMatches = new Set(learningNodes
    .filter((node) => categoryId === "all" || civitasCategoryForArticle(articleForLearningNode(node)).id === categoryId)
    .map((node) => node.id));
  if (mode === "field") return categoryMatches;
  if (mode === "prerequisites" && selectedNodeId) {
    const focus = new Set([selectedNodeId]);
    const addPrerequisites = (node) => learningPrerequisites(node).forEach((prerequisite) => {
      if (!focus.has(prerequisite.id)) {
        focus.add(prerequisite.id);
        addPrerequisites(prerequisite);
      }
    });
    const selected = learningNodeById(selectedNodeId);
    if (selected) addPrerequisites(selected);
    return focus;
  }
  return new Set(learningNodes.map((node) => node.id));
}

function renderKnowledgeMap(params) {
  const categoryId = civitasCategories.some((category) => category.id === params.get("category")) ? params.get("category") : "all";
  const mode = ["overview", "prerequisites", "field"].includes(params.get("mode")) ? params.get("mode") : "overview";
  const query = (params.get("q") || "").trim();
  const matchingNodes = learningNodes.filter((node) => {
    const article = articleForLearningNode(node);
    const matchCategory = categoryId === "all" || civitasCategoryForArticle(article).id === categoryId;
    const text = [learningNodeTitle(node), learningGoal(node), articleCategoryLabel(article)].join(" ").toLocaleLowerCase(currentLanguage);
    return matchCategory && (!query || text.includes(query.toLocaleLowerCase(currentLanguage)));
  });
  const selectedNode = learningNodeById(params.get("node")) || matchingNodes[0] || learningNodes[0];
  const focusNodeIds = mapFocusSet(categoryId, mode, selectedNode.id);
  const transform = `translate(${state.learningMap.x}px, ${state.learningMap.y}px) scale(${state.learningMap.scale})`;
  const edges = learningNodes.flatMap((node) => learningPrerequisites(node).map((prerequisite) => {
    const start = learningMapPoint(prerequisite.id);
    const end = learningMapPoint(node.id);
    const inFocus = focusNodeIds.has(prerequisite.id) && focusNodeIds.has(node.id);
    return `<line class="civitas-map-edge ${inFocus ? "is-focus" : ""}" x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}"></line>`;
  })).join("");
  const selectedArticle = articleForLearningNode(selectedNode);
  const selectedPrerequisites = learningPrerequisites(selectedNode);
  const selectedRelated = relatedArticlesFor(selectedArticle);

  return `
    <section class="civitas-page-heading civitas-map-heading"><div class="page-width"><nav class="civitas-breadcrumb" aria-label="Breadcrumb"><a href="#home">${bilingualText("Khám phá", "Explore")}</a><span>/</span><span>${bilingualText("Bản đồ tri thức", "Knowledge map")}</span></nav><p class="civitas-eyebrow">A MAP, NOT A MAZE</p><h1>${bilingualText("Bản đồ tri thức", "The knowledge map")}</h1><p>${bilingualText("Một bức tranh nhỏ về những ý tưởng liên hệ với nhau. Đường nối là gợi ý để đọc sâu hơn, không phải rào cản.", "A small picture of ideas in relation. Lines suggest deeper reading; they are never barriers.")}</p></div></section>
    <section class="page-width civitas-map-page">
      <form class="civitas-map-search" data-map-search>${icon("search", 18)}<input name="query" value="${escapeHtml(query)}" autocomplete="off" placeholder="${bilingualText("Tìm một nút trên bản đồ...", "Find a concept on the map...")}" /><button type="submit">${bilingualText("Tìm", "Find")}</button></form>
      <div class="civitas-map-view-switch" role="group" aria-label="${bilingualText("Chế độ xem bản đồ", "Map viewing mode")}">
        ${[["overview", bilingualText("Toàn cảnh", "Overview")], ["prerequisites", bilingualText("Nền tảng", "Prerequisites")], ["field", bilingualText("Theo lĩnh vực", "By field")]].map(([value, label]) => `<button type="button" class="${mode === value ? "active" : ""}" data-route="${mapRoute(categoryId, selectedNode.id, value, query)}" aria-pressed="${mode === value}">${label}</button>`).join("")}
      </div>
      <div class="civitas-map-layout">
        <aside class="civitas-map-sidebar"><p>${bilingualText("LĨNH VỰC", "FIELDS")}</p><button class="${categoryId === "all" ? "active" : ""}" type="button" data-route="${mapRoute("all", selectedNode.id, mode, query)}">${bilingualText("Toàn bộ bản đồ", "Whole map")}<small>${learningNodes.length}</small></button>${civitasCategories.map((category) => `<button class="${categoryId === category.id ? "active" : ""}" type="button" data-route="${mapRoute(category.id, "", "field", query)}"><span>${icon(category.icon, 15)}</span>${escapeHtml(civitasCategoryTitle(category))}<small>${learningNodes.filter((node) => civitasCategoryForArticle(articleForLearningNode(node)).id === category.id).length}</small></button>`).join("")}<button class="civitas-map-reset" type="button" data-action="learning-map-reset">${bilingualText("Đặt lại vị trí", "Reset view")}</button></aside>
        <section class="civitas-map-canvas-panel" aria-label="${bilingualText("Bản đồ tương tác", "Interactive knowledge map")}">
          <div class="civitas-map-canvas-toolbar"><span>${bilingualText("Kéo vùng trống để di chuyển", "Drag empty space to move")}</span><div><button type="button" data-action="learning-zoom" data-delta="-0.15" aria-label="${bilingualText("Thu nhỏ", "Zoom out")}">−</button><button type="button" data-action="learning-zoom" data-delta="0.15" aria-label="${bilingualText("Phóng to", "Zoom in")}">+</button></div></div>
          <div class="civitas-map-viewport learning-map-viewport" data-learning-map-viewport tabindex="0" aria-label="${bilingualText("Bản đồ kiến thức", "Knowledge map")}"><div class="civitas-map-canvas learning-map-canvas" data-learning-map-canvas style="transform:${escapeHtml(transform)}"><svg viewBox="0 0 1040 680" aria-hidden="true">${edges}</svg>${learningNodes.map((node) => {
            const point = learningMapPoint(node.id);
            const article = articleForLearningNode(node);
            const active = node.id === selectedNode.id;
            const muted = !focusNodeIds.has(node.id);
            return `<button class="civitas-map-node ${active ? "is-selected" : ""} ${muted ? "is-muted" : ""} status-${escapeHtml(learningStatus(node.id))}" type="button" data-map-node="${escapeHtml(node.id)}" aria-pressed="${active}" style="--node-x:${point.x}px;--node-y:${point.y}px"><span class="civitas-map-node-dot" aria-hidden="true">${learningStatusSymbol(learningStatus(node.id))}</span><strong>${escapeHtml(learningNodeTitle(node))}</strong><small>${escapeHtml(articleCategoryLabel(article))}</small></button>`;
          }).join("")}</div></div>
          <div class="civitas-map-mobile-list"><p>${bilingualText("Danh sách thay thế", "Text alternative")}</p>${matchingNodes.map((node) => `<button type="button" data-map-node="${escapeHtml(node.id)}">${escapeHtml(learningNodeTitle(node))}<span>${escapeHtml(articleCategoryLabel(articleForLearningNode(node)))}</span></button>`).join("")}</div>
        </section>
        <aside class="civitas-map-detail" aria-live="polite"><p class="civitas-aside-label">${escapeHtml(articleCategoryLabel(selectedArticle))}</p><h2>${escapeHtml(learningNodeTitle(selectedNode))}</h2><p>${escapeHtml(selectedArticle?.summary || learningGoal(selectedNode))}</p><div class="civitas-map-detail-status"><span>${escapeHtml(learningLevel(selectedNode))}</span><span class="status-${escapeHtml(learningStatus(selectedNode.id))}">${learningStatusSymbol(learningStatus(selectedNode.id))} ${escapeHtml(learningStatusLabel(learningStatus(selectedNode.id)))}</span></div><a class="civitas-button forest" href="${learningNodeRoute(selectedNode)}">${bilingualText("Đọc bài viết", "Read article")} <span aria-hidden="true">→</span></a><section><h3>${bilingualText("Nền tảng gợi ý", "Suggested foundations")}</h3>${selectedPrerequisites.length ? `<div class="civitas-map-detail-links">${selectedPrerequisites.map((node) => `<button type="button" data-map-node="${escapeHtml(node.id)}">${escapeHtml(learningNodeTitle(node))}<i>→</i></button>`).join("")}</div>` : `<p>${bilingualText("Đây là một điểm vào tốt; chưa có nền tảng nào được gợi ý.", "This is a good entry point; no foundation is suggested.")}</p>`}</section><section><h3>${bilingualText("Trạng thái của bạn", "Your status")}</h3>${renderLearningStatusControls(selectedNode, true)}</section>${selectedRelated.length ? `<section><h3>${bilingualText("Có liên quan", "Related")}</h3><div class="civitas-map-detail-links">${selectedRelated.map((article) => `<a href="#article/${article.slug}">${escapeHtml(article.title)}<i>→</i></a>`).join("")}</div></section>` : ""}</aside>
      </div>
    </section>
  `;
}

function roadmapStageCards(nodes) {
  if (!nodes.length) return "";
  return `<div class="civitas-roadmap-card-list">${nodes.map((node) => {
    const article = articleForLearningNode(node);
    const status = learningStatus(node.id);
    return `<article class="civitas-roadmap-card status-${escapeHtml(status)}"><div><span>${escapeHtml(articleCategoryLabel(article))}</span><h3>${escapeHtml(learningNodeTitle(node))}</h3><p>${escapeHtml(article?.summary || learningGoal(node))}</p><small>${escapeHtml(article?.readTime || "")}</small></div><div class="civitas-roadmap-card-actions"><span>${learningStatusSymbol(status)} ${escapeHtml(learningStatusLabel(status))}</span><a href="${learningNodeRoute(node)}">${bilingualText("Mở bài", "Open")}</a><button type="button" data-map-node="${escapeHtml(node.id)}">${bilingualText("Xem trên bản đồ", "View on map")}</button></div></article>`;
  }).join("")}</div>`;
}

function renderLearningRoadmap(params) {
  const requestedPath = params.get("path");
  const activePath = learningPathById(requestedPath) || learningPathById(learningProgress.profile.activePathId) || learningPaths[0];
  const activeNodesSet = pathNodeIdsWithPrerequisites(activePath.id);
  const activeNodes = learningNodes.filter((node) => activeNodesSet.has(node.id));
  const foundationNodes = activeNodes.filter((node) => node.track === "foundations");
  const branchNodes = activeNodes.filter((node) => node.track !== "foundations" && node.id !== "public-policy");
  const applicationNodes = activeNodes.filter((node) => node.id === "public-policy");
  const stages = [
    { number: "01", title: bilingualText("Nền tảng cần thiết", "Useful foundations"), description: bilingualText("Những khái niệm giúp bạn có ngôn ngữ chung trước khi đi sâu hơn.", "Concepts that build shared language before you go further."), nodes: foundationNodes },
    { number: "02", title: learningPathTitle(activePath), description: learningPathDescription(activePath), nodes: branchNodes.length ? branchNodes : activeNodes.filter((node) => !foundationNodes.includes(node)) },
    { number: "03", title: bilingualText("Phân tích & ứng dụng", "Analysis & application"), description: bilingualText("Một góc để nối điều bạn vừa đọc với câu hỏi chính sách và đời sống công.", "A place to connect what you read to public policy and shared life."), nodes: applicationNodes.length ? applicationNodes : activeNodes.filter((node) => node.id === "political-legitimacy") },
  ].filter((stage, index) => stage.nodes.length || index < 2);
  const recommended = recommendedLearningNodes(activePath.id)[0];
  const counts = learningProgressCounts();
  const readCount = Object.keys(learningProgress.readArticles || {}).length;
  const pickerOpen = state.roadmapGoalOpen || learningProgress.profile.entryMode === "new";

  return `
    <section class="civitas-page-heading civitas-roadmap-heading"><div class="page-width"><nav class="civitas-breadcrumb" aria-label="Breadcrumb"><a href="#home">${bilingualText("Khám phá", "Explore")}</a><span>/</span><span>${bilingualText("Lộ trình", "Roadmap")}</span></nav><p class="civitas-eyebrow">A PATH THAT BENDS</p><h1>${bilingualText("Lộ trình của tôi", "My learning roadmap")}</h1><p>${bilingualText("Không cần học lại những gì bạn đã biết. Hãy chọn nơi bạn muốn bắt đầu.", "You do not have to relearn what you already know. Choose where you want to begin.")}</p></div></section>
    <section class="page-width civitas-roadmap-page">
      <div class="civitas-roadmap-goal-picker ${pickerOpen ? "is-open" : ""}" ${pickerOpen ? "" : "hidden"}>
        <div><p class="civitas-eyebrow">${bilingualText("CHỌN MỘT HƯỚNG", "CHOOSE A DIRECTION")}</p><h2>${bilingualText("Hôm nay bạn muốn hiểu điều gì hơn?", "What would you like to understand better today?")}</h2><p>${bilingualText("Đây chỉ là điểm bắt đầu. Bạn có thể đổi bất cứ lúc nào và luôn tự mở bài khác.", "This is only a starting point. You can change it anytime and always open another article yourself.")}</p></div>
        <div class="civitas-roadmap-goals">${learningPaths.map((path) => `<button type="button" data-learning-path="${escapeHtml(path.id)}" class="${activePath.id === path.id ? "active" : ""}"><span>${escapeHtml(learningPathTitle(path))}</span><small>${escapeHtml(learningPathDescription(path))}</small><i>→</i></button>`).join("")}<button type="button" data-learning-profile="self"><span>${bilingualText("Tôi tự chọn", "I will choose myself")}</span><small>${bilingualText("Dùng bản đồ và các trạng thái theo cách của riêng bạn.", "Use the map and your own learning states.")}</small><i>→</i></button></div>
      </div>
      <div class="civitas-roadmap-layout">
        <aside class="civitas-roadmap-sidebar"><p class="civitas-aside-label">${bilingualText("MỤC TIÊU HIỆN TẠI", "CURRENT DIRECTION")}</p><h2>${escapeHtml(learningPathTitle(activePath))}</h2><p>${escapeHtml(learningPathDescription(activePath))}</p><button class="civitas-text-button" type="button" data-action="toggle-roadmap-goals">${bilingualText("Sửa mục tiêu", "Change direction")}</button><a class="civitas-map-link" href="#map">${icon("network", 17)} ${bilingualText("Xem toàn bộ bản đồ", "See the full map")}</a><div class="civitas-roadmap-legend"><span>${learningStatusSymbol("not_started")} ${bilingualText("Chưa học", "Not started")}</span><span>${learningStatusSymbol("learning")} ${bilingualText("Đang học", "Learning")}</span><span>${learningStatusSymbol("mastered")} ${bilingualText("Đã nắm vững", "Mastered")}</span></div><button class="civitas-progress-clear" type="button" data-action="clear-learning-progress">${bilingualText("Xóa tiến độ trên thiết bị", "Clear device progress")}</button></aside>
        <div class="civitas-roadmap-main"><section class="civitas-roadmap-summary"><div><span>${counts.mastered}</span><small>${bilingualText("đã nắm vững", "mastered")}</small></div><div><span>${counts.learning}</span><small>${bilingualText("đang học", "learning")}</small></div><div><span>${recommended ? 1 : 0}</span><small>${bilingualText("đề xuất tiếp", "next suggestion")}</small></div><div><span>${readCount}</span><small>${bilingualText("bài đã đọc", "articles read")}</small></div></section><section class="civitas-roadmap-stages"><div class="civitas-section-heading"><div><p class="civitas-eyebrow">YOUR CHAPTERS</p><h2>${bilingualText("Những chặng có thể đi theo", "Chapters you can follow")}</h2></div><p>${bilingualText("Đây là các nhóm gợi ý, không phải một chương trình bắt buộc.", "These are suggested groups, not a required curriculum.")}</p></div>${stages.map((stage) => `<section class="civitas-roadmap-stage"><div class="civitas-roadmap-stage-heading"><span>${stage.number}</span><div><h3>${escapeHtml(stage.title)}</h3><p>${escapeHtml(stage.description)}</p></div></div>${roadmapStageCards(stage.nodes)}</section>`).join("")}</section>${recommended ? `<section class="civitas-next-suggestion"><div><p class="civitas-eyebrow">ONE SMALL NEXT STEP</p><h2>${escapeHtml(learningNodeTitle(recommended))}</h2><p>${escapeHtml(learningRecommendationReason(recommended, activePath))}</p><small>${escapeHtml(learningGoal(recommended))}</small></div><div><a class="civitas-button forest" href="${learningNodeRoute(recommended)}">${bilingualText("Mở bài viết", "Open article")} <span aria-hidden="true">→</span></a><button type="button" data-map-node="${escapeHtml(recommended.id)}">${bilingualText("Xem trên bản đồ", "See on map")}</button></div></section>` : ""}</div>
      </div>
    </section>
  `;
}

function renderSources() {
  return `
    ${pageHero("Xuất xứ &amp; bằng chứng", "Thư viện nguồn", "Nơi phân biệt tài liệu gốc với nguồn thứ cấp, đồng thời dẫn trở lại trang xuất bản hoặc kho lưu trữ công khai.")}
    <section class="page-width sources-page">
      <div class="tool-bar"><span class="result-count">${sources.length} nguồn trong bộ dữ liệu demo</span><a class="text-link" href="#about">Đọc nguyên tắc biên tập</a></div>
      <div class="source-library">
        ${sources.map((source) => `
          <a class="source-card" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
            <div class="card-meta"><span class="pill">${escapeHtml(source.kind || source.type || "Nguồn")}</span><span>${escapeHtml(source.year || "Tham chiếu")}</span></div>
            <h3>${escapeHtml(source.title)}</h3>
            <p>${escapeHtml(source.description || source.publisher || source.author || "Mở nguồn gốc để xem toàn văn và thông tin xuất bản.")}</p>
            <div class="source-card-footer"><span>${escapeHtml(source.publisher || source.author || "Kho lưu trữ")}</span><span>↗ Mở nguồn</span></div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function collectSearchRecords() {
  return [
    ...articles.map((item) => ({ ...item, type: "article", label: "Bài tham chiếu", text: [item.title, item.summary, item.domain, ...(item.tags || [])].join(" ") })),
    ...glossary.map((item) => ({ ...item, type: "glossary", title: item.term || item.title, summary: item.definition || item.summary, text: [item.term || item.title, item.english || "", ...(item.aliases || []), item.definition || item.summary || ""].join(" ") })),
    ...countries.map((item) => ({ ...item, type: "country", title: item.name, summary: item.overview || item.form || item.system, text: [item.name, item.region, item.form || "", item.system || "", item.overview || ""].join(" ") })),
    ...ideologies.map((item) => ({ ...item, type: "ideology", title: item.name, summary: item.summary, text: [item.name, item.summary, ...Object.values(item.dimensions || {})].join(" ") })),
    ...events.map((item) => ({ ...item, type: "event", title: item.title, summary: item.summary, text: [item.title, item.summary, item.region || "", ...(item.tags || [])].join(" ") })),
    ...timelineEvents.map((item) => ({
      ...item,
      type: "timeline-event",
      title: timelineText(item.title),
      summary: timelineText(item.summary),
      text: timelineEventSearchText(item),
    })),
    ...timelineEntities.map((item) => ({
      ...item,
      type: "timeline-entity",
      title: timelineText(item.names),
      summary: timelineText(item.overview),
      text: [timelineText(item.names), item.names?.vi, item.names?.en, ...(item.aliases || []), timelineText(item.overview), ...(item.regions || []).map(timelineRegionTitle), ...(item.modernAssociations || []).map(timelineEntityTitle)].filter(Boolean).join(" "),
    })),
    ...sources.map((item) => ({ ...item, type: "source", summary: item.description || item.publisher || item.author, text: [item.title, item.publisher || "", item.author || "", item.description || ""].join(" ") })),
  ];
}

function searchRecords(query, type = "all") {
  const normalized = query.trim().toLocaleLowerCase(currentLanguage);
  if (!normalized) return [];
  const tokens = normalized.split(/\s+/).filter(Boolean);
  return collectSearchRecords()
    .filter((record) => type === "all" || record.type === type)
    .map((record) => {
      const haystack = (record.text || "").toLocaleLowerCase(currentLanguage);
      const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
      return { ...record, score };
    })
    .filter((record) => record.score === tokens.length)
    .sort((a, b) => b.score - a.score || String(a.title).localeCompare(String(b.title), currentLanguage));
}

function highlight(value, query) {
  const safe = escapeHtml(value || "");
  const term = String(query || "").trim();
  if (!term) return safe;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

function searchLabel(type) {
  return {
    article: bilingualText("Bài tham chiếu", "Article"),
    glossary: bilingualText("Thuật ngữ", "Glossary"),
    country: bilingualText("Quốc gia", "Country"),
    ideology: bilingualText("Hệ tư tưởng", "Ideology"),
    event: bilingualText("Sự kiện", "Event"),
    "timeline-event": bilingualText("Sự kiện lịch sử", "History event"),
    "timeline-entity": bilingualText("Thực thể lịch sử", "Historical entity"),
    source: bilingualText("Nguồn", "Source"),
  }[type] || bilingualText("Mục", "Record");
}

function renderSearch(params) {
  const query = params.get("q") || "";
  const type = params.get("type") || "all";
  const records = searchRecords(query, type);
  return `
    ${pageHero("Khám phá tri thức", "Tìm trong PolitiCore", "Tìm theo tiêu đề, khái niệm, mô tả, khu vực hoặc nhãn trong bộ dữ liệu demo.")}
    <section class="page-width search-page">
      <form class="search-page-bar" data-search-page-form>
        <input name="query" value="${escapeHtml(query)}" autocomplete="off" placeholder="Ví dụ: dân chủ, chủ quyền, Việt Nam..." aria-label="Từ khoá tìm kiếm" />
        <button type="submit">Tìm kiếm</button>
      </form>
      <div class="tool-bar">
        <span class="result-count">${query ? `${records.length} kết quả cho “${escapeHtml(query)}”` : "Nhập từ khoá để bắt đầu"}</span>
        <div class="filter-group">
          ${[["all", bilingualText("Tất cả", "All")], ["article", bilingualText("Bài viết", "Articles")], ["glossary", bilingualText("Thuật ngữ", "Glossary")], ["country", bilingualText("Quốc gia", "Countries")], ["ideology", bilingualText("Hệ tư tưởng", "Ideologies")], ["timeline-event", bilingualText("Sự kiện lịch sử", "History events")], ["timeline-entity", bilingualText("Thực thể", "Entities")], ["source", bilingualText("Nguồn", "Sources")]].map(([value, label]) => `<button class="filter-button ${type === value ? "active" : ""}" data-route="search?q=${encodeURIComponent(query)}&type=${value}">${label}</button>`).join("")}
        </div>
      </div>
      <div class="search-results">
        ${query ? (records.length ? records.map((record) => `
          <a class="search-result" href="#${routeFor(record)}">
            <span class="result-type">${searchLabel(record.type)}</span>
            <span><h2>${highlight(record.title || record.term, query)}</h2><p>${highlight(record.summary || record.definition || "", query)}</p></span>
            <span class="search-result-arrow">→</span>
          </a>
        `).join("") : emptyState("Chưa có kết quả phù hợp", "Thử một từ khoá ngắn hơn hoặc chuyển sang tìm tất cả loại mục.")) : emptyState("Bắt đầu với một câu hỏi", "Ví dụ: “chủ quyền”, “hệ thống nghị viện” hoặc “tính chính danh”.")}
      </div>
    </section>
  `;
}

function renderAbout() {
  const principles = [
    ["01", "Có thể truy nguồn", "Những khẳng định quan trọng cần dẫn về văn bản gốc hoặc tài liệu học thuật có thể kiểm tra, thay vì chỉ xuất hiện như một kết luận vô danh."],
    ["02", "Có bối cảnh", "Khái niệm, thể chế và sự kiện được trình bày cùng thời kỳ, phạm vi và giới hạn — đặc biệt khi việc phân loại còn có tranh luận."],
    ["03", "Không đảng phái", "PolitiCore không được thiết kế như nơi cổ động. Sự cân bằng nằm ở cách trình bày bằng chứng và các bất đồng học thuật một cách trung thực."],
    ["04", "Có thể mở rộng", "Bản demo dùng dữ liệu địa phương có cấu trúc để mô phỏng cách một hệ thống nội dung, nguồn và quan hệ có thể lớn dần mà không phải thiết kế lại."],
  ];
  return `
    ${pageHero("Về sản phẩm", "Tri thức là sản phẩm.", "PolitiCore là một mẫu giao diện cho bách khoa chính trị có cấu trúc, lấy việc tra cứu, so sánh và lần theo nguồn làm trải nghiệm cốt lõi.")}
    <section class="page-width about-page">
      <p class="page-lede" style="margin-top:0">Đây là bản demo chạy cục bộ. Những mục có sẵn được gắn nhãn dữ liệu demo, không giả định tích hợp cơ sở dữ liệu trực tuyến hoặc tình trạng chính trị theo thời gian thực.</p>
      <div class="principles-grid">${principles.map(([number, title, description]) => `<article class="principle"><span class="principle-number">${number}</span><h2>${title}</h2><p>${description}</p></article>`).join("")}</div>
      <section class="related-panel"><h2>Tiếp tục khám phá</h2><div class="related-list"><a href="#sources"><span>Thư viện nguồn</span><span>→</span></a><a href="#encyclopedia"><span>Taxonomy bách khoa</span><span>→</span></a></div></section>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="page-hero"><div class="page-width"><p class="eyebrow">Không tìm thấy</p><h1 class="display-title">Mục này chưa có trong bản demo.</h1><p class="page-lede">Hãy quay lại thư viện để tiếp tục từ một khái niệm, quốc gia hoặc nguồn tư liệu khác.</p><a class="text-link" style="margin-top:23px" href="#home">Về trang khám phá</a></div></section>
  `;
}

function renderSearchDialog() {
  if (!state.searchOpen) return "";
  const records = searchRecords(state.query).slice(0, 7);
  return `
    <div class="search-overlay" data-action="close-search">
      <section class="search-dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm PolitiCore" onclick="event.stopPropagation()">
        <form class="dialog-search" data-dialog-search>
          <span class="dialog-search-icon" aria-hidden="true">${icon("search", 20)}</span>
          <input id="dialog-search-input" name="query" value="${escapeHtml(state.query)}" autocomplete="off" placeholder="Tìm khái niệm, quốc gia, nguồn..." />
          <button class="dialog-close" type="button" data-action="close-search" aria-label="Đóng tìm kiếm">${icon("close", 18)}</button>
        </form>
        <div class="dialog-results">
          ${state.query ? (records.length ? records.map((record) => `
            <a class="dialog-result" href="#${routeFor(record)}" data-action="close-search">
              <span class="dialog-result-type">${searchLabel(record.type)}</span>
              <span><strong>${escapeHtml(record.title || record.term)}</strong><span>${escapeHtml(record.summary || record.definition || "")}</span></span>
            </a>
          `).join("") : `<div class="dialog-help">Chưa có kết quả khớp. Thử một từ khoá ngắn hơn hoặc mở trang tìm kiếm để xem toàn bộ.</div>`) : `<div class="dialog-help">Gợi ý: Dân chủ · Chủ quyền · Hiến pháp · Việt Nam · Đại diện</div>`}
        </div>
      </section>
    </div>
  `;
}

function renderApp({ scroll = false } = {}) {
  const { path, params } = getRoute();
  let content = "";
  if (path === "home") content = renderHome();
  else if (path === "encyclopedia" || path === "topics") content = renderEncyclopedia(params);
  else if (path.startsWith("article/")) content = renderArticle(decodeURIComponent(path.slice("article/".length)));
  else if (path === "glossary") content = renderGlossary(params);
  else if (path === "countries") content = renderCountries(params);
  else if (path.startsWith("country/")) content = renderCountry(decodeURIComponent(path.slice("country/".length)));
  else if (path === "compare" || path === "compare/ideologies" || path === "ideologies") content = renderCompare();
  else if (path.startsWith("ideology/")) content = renderIdeology(decodeURIComponent(path.slice("ideology/".length)));
  else if (path.startsWith("timeline/event/")) content = renderTimelineEvent(decodeURIComponent(path.slice("timeline/event/".length)));
  else if (path.startsWith("timeline/entity/")) content = renderTimelineEntity(decodeURIComponent(path.slice("timeline/entity/".length)));
  else if (path === "timeline/coverage") content = renderTimelineCoverage();
  else if (path === "timeline") content = renderTimeline(params);
  else if (path === "map") content = renderKnowledgeMap(params);
  else if (path === "roadmap" || path === "learning") content = renderLearningRoadmap(params);
  else if (path === "sources") content = renderSources();
  else if (path === "search") content = renderSearch(params);
  else if (path === "about" || path === "editorial-policy") content = renderAbout();
  else content = renderNotFound();

  const routeClass = String(path || "home").split("/")[0].replace(/[^a-z0-9-]/gi, "") || "home";
  const isLandingRoute = path === "home";
  const suppressLandingIntro = state.suppressLandingIntro && isLandingRoute;
  state.suppressLandingIntro = false;
  app.innerHTML = translateUiText(`<div class="app-shell app-route-${routeClass}${suppressLandingIntro ? " is-language-refresh" : ""}">${header(path)}<main id="main" class="page">${content}</main>${isLandingRoute ? "" : footer()}${renderSearchDialog()}</div>`);
  bindEvents();
  if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
  if (state.searchOpen) setTimeout(() => document.querySelector("#dialog-search-input")?.focus(), 0);
}

function showToast(message) {
  const oldToast = document.querySelector(".toast");
  oldToast?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.role = "status";
  toast.textContent = translateUiText(message);
  document.body.append(toast);
  setTimeout(() => toast.remove(), 3200);
}

function updateLearningMapTransform() {
  const canvas = document.querySelector("[data-learning-map-canvas]");
  if (!canvas) return;
  canvas.style.transform = "translate(" + state.learningMap.x + "px, " + state.learningMap.y + "px) scale(" + state.learningMap.scale + ")";
}

function bindLearningMapInteractions() {
  const viewport = document.querySelector("[data-learning-map-viewport]");
  if (!viewport) return;
  let drag = null;

  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest?.(".learning-map-node, .civitas-map-node")) return;
    drag = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      mapX: state.learningMap.x,
      mapY: state.learningMap.y,
    };
    viewport.setPointerCapture?.(event.pointerId);
    viewport.classList.add("is-dragging");
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    state.learningMap.x = drag.mapX + event.clientX - drag.x;
    state.learningMap.y = drag.mapY + event.clientY - drag.y;
    updateLearningMapTransform();
  });

  const endDrag = (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    viewport.releasePointerCapture?.(event.pointerId);
    viewport.classList.remove("is-dragging");
    drag = null;
  };

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((node) => {
    node.addEventListener("click", () => navigate(node.dataset.route));
  });

  document.querySelectorAll("[data-learning-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      const profile = learningProfiles.find((item) => item.id === button.dataset.learningProfile);
      if (!profile) return;
      selectLearningProfile(profile.id);
      state.roadmapGoalOpen = false;
      navigate(learningRoute(profile.pathId));
    });
  });

  document.querySelectorAll("[data-learning-path]").forEach((button) => {
    button.addEventListener("click", () => {
      const pathId = button.dataset.learningPath;
      if (pathId !== "all") setLearningPath(pathId);
      state.roadmapGoalOpen = false;
      navigate(learningRoute(pathId));
    });
  });

  document.querySelectorAll("[data-learning-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const nodeId = button.dataset.learningNode;
      if (!hasLearningNode(nodeId)) return;
      const current = getRoute();
      const requestedPathId = current.path === "learning" || current.path === "roadmap" ? current.params.get("path") : "";
      const pathId = requestedPathId === "all" || learningPaths.some((path) => path.id === requestedPathId)
        ? requestedPathId
        : learningProgress.profile.activePathId;
      navigate(learningRoute(pathId, nodeId));
    });
  });

  document.querySelectorAll("[data-map-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const nodeId = button.dataset.mapNode;
      if (!hasLearningNode(nodeId)) return;
      const current = getRoute();
      if (current.path === "map") {
        navigate(mapRoute(current.params.get("category") || "all", nodeId, current.params.get("mode") || "overview", current.params.get("q") || ""));
      } else {
        navigate(mapRoute("all", nodeId));
      }
    });
  });

  document.querySelectorAll("[data-bookmark]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!toggleBookmark(button.dataset.bookmark)) {
        showToast(bilingualText("Không thể lưu bài viết trên thiết bị này.", "Could not save this article on this device."));
        return;
      }
      renderApp();
      showToast(isBookmarked(button.dataset.bookmark)
        ? bilingualText("Đã lưu bài viết.", "Article saved.")
        : bilingualText("Đã bỏ lưu bài viết.", "Article removed from saved."));
    });
  });

  document.querySelectorAll("[data-article-read]").forEach((button) => {
    button.addEventListener("click", () => {
      const read = button.dataset.readValue === "true";
      if (!setArticleRead(button.dataset.articleRead, read)) {
        showToast(bilingualText("Không thể cập nhật trạng thái đọc trên thiết bị này.", "Could not update reading status on this device."));
        return;
      }
      renderApp();
      showToast(read ? bilingualText("Đã đánh dấu đã đọc.", "Marked as read.") : bilingualText("Đã bỏ trạng thái đã đọc.", "Marked as unread."));
    });
  });

  document.querySelectorAll("[data-learning-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const nodeId = button.dataset.learningNodeId;
      const status = button.dataset.learningStatus;
      if (!setLearningStatus(nodeId, status)) {
        showToast(bilingualText("Không thể lưu tiến độ trên thiết bị này.", "Could not save progress on this device."));
        return;
      }
      renderApp();
      showToast(bilingualText("Đã cập nhật tiến độ học.", "Learning progress updated."));
    });
  });

  document.querySelectorAll("[data-learning-check]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const checkId = form.dataset.checkId;
      const value = new FormData(form).get("answer");
      if (typeof value !== "string" || !recordLearningCheck(checkId, Number(value))) {
        showToast(bilingualText("Hãy chọn một câu trả lời trước.", "Choose an answer first."));
        return;
      }
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='learning-zoom']").forEach((button) => {
    button.addEventListener("click", () => {
      const delta = Number(button.dataset.delta);
      if (!Number.isFinite(delta)) return;
      state.learningMap.scale = Math.min(1.55, Math.max(0.66, Number((state.learningMap.scale + delta).toFixed(2))));
      updateLearningMapTransform();
    });
  });

  document.querySelectorAll("[data-action='learning-map-reset']").forEach((button) => {
    button.addEventListener("click", () => {
      state.learningMap = { x: 0, y: 0, scale: 1 };
      updateLearningMapTransform();
    });
  });

  document.querySelectorAll("[data-action='clear-learning-progress']").forEach((button) => {
    button.addEventListener("click", () => {
      const confirmed = window.confirm(bilingualText(
        "Xóa toàn bộ tiến độ học đã lưu trên trình duyệt này?",
        "Clear all learning progress saved in this browser?",
      ));
      if (!confirmed) return;
      learningProgress = emptyLearningProgress();
      try {
        localStorage.removeItem(LEARNING_PROGRESS_KEY);
        localStorage.removeItem(LEGACY_LEARNING_PROGRESS_KEY);
      } catch {}
      renderApp();
      showToast(bilingualText("Đã xóa tiến độ học trên thiết bị này.", "Learning progress cleared on this device."));
    });
  });

  document.querySelectorAll("[data-action='toggle-roadmap-goals']").forEach((button) => {
    button.addEventListener("click", () => {
      state.roadmapGoalOpen = !state.roadmapGoalOpen;
      renderApp();
    });
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (language === currentLanguage) return;

      changeLanguage(language);
      const switcher = button.closest(".language-switch");
      const refreshLanding = getRoute().path === "home";
      const render = () => {
        if (refreshLanding) state.suppressLandingIntro = true;
        renderApp();
      };

      if (!switcher || prefersReducedMotion()) {
        render();
        return;
      }

      switcher.classList.remove("is-en", "is-vi");
      switcher.classList.add(`is-${language}`, "is-language-animating");
      switcher.querySelectorAll("[data-language]").forEach((languageButton) => {
        const active = languageButton.dataset.language === language;
        languageButton.classList.toggle("active", active);
        languageButton.setAttribute("aria-pressed", String(active));
      });
      window.clearTimeout(languageRenderTimer);
      // Allow the pill to reach its destination before the app is rebuilt.
      // Replacing the header sooner would cancel its transform mid-flight.
      languageRenderTimer = window.setTimeout(render, LANGUAGE_SWITCH_DURATION + 34);
    });
  });

  document.querySelectorAll("[data-action='toggle-theme']").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTheme();
      const dark = currentTheme === "dark";
      button.classList.toggle("is-dark", dark);
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", themeToggleLabel());
      button.title = themeToggleLabel();
    });
  });

  document.querySelectorAll(".taxonomy-link").forEach((node) => {
    const title = node.childNodes[0]?.textContent?.trim();
    const topic = topics.find((item) => topicName(item) === title);
    if (!topic) return;
    const route = "encyclopedia?domain=" + encodeURIComponent(topicKey(topic));
    node.href = "#" + route;
    node.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(route);
    });
  });

  document.querySelectorAll("[data-search-term]").forEach((button) => {
    button.addEventListener("click", () => navigate(`search?q=${encodeURIComponent(button.dataset.searchTerm)}`));
  });

  document.querySelectorAll("[data-action='open-search']").forEach((button) => {
    button.addEventListener("click", () => {
      state.searchOpen = true;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='close-search']").forEach((button) => {
    button.addEventListener("click", () => {
      state.searchOpen = false;
      renderApp();
    });
  });

  document.querySelectorAll("[data-action='toggle-menu']").forEach((button) => {
    button.addEventListener("click", () => {
      const nav = document.querySelector("#mobile-nav");
      nav.hidden = !nav.hidden;
    });
  });

  document.querySelectorAll("[data-action='copy-link']").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        showToast("Đã sao chép liên kết mục tham chiếu.");
      } catch {
        showToast("Không thể sao chép tự động. Bạn có thể sao chép URL trên thanh địa chỉ.");
      }
    });
  });

  document.querySelectorAll("[data-action='cite-article']").forEach((button) => {
    button.addEventListener("click", () => showToast("Trích dẫn gợi ý: PolitiCore, mục tham chiếu demo, truy cập 10.10.2026."));
  });

  document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("query")?.trim();
      if (query) navigate(`search?q=${encodeURIComponent(query)}`);
    });
  });

  document.querySelectorAll("[data-home-search-form]").forEach((form) => {
    const input = form.querySelector("input[name='query']");
    const resultBox = document.querySelector("[data-home-search-results]");
    input?.addEventListener("input", () => {
      if (resultBox) resultBox.innerHTML = homeSearchMatches(input.value);
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("query")?.trim() || "";
      navigate(encyclopediaRoute({ query }));
    });
  });

  document.querySelectorAll("[data-encyclopedia-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const current = getRoute();
      const query = new FormData(form).get("query")?.trim() || "";
      navigate(encyclopediaRoute({
        category: current.params.get("category") || "all",
        level: current.params.get("level") || "all",
        saved: current.params.get("saved") === "1",
        query,
      }));
    });
  });

  document.querySelectorAll("[data-map-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const current = getRoute();
      const query = new FormData(form).get("query")?.trim() || "";
      navigate(mapRoute(current.params.get("category") || "all", current.params.get("node") || "", current.params.get("mode") || "overview", query));
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-search-page-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("query")?.trim() || "";
      navigate(`search?q=${encodeURIComponent(query)}`);
    });
  });

  document.querySelectorAll("[data-glossary-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = new FormData(form).get("term")?.trim() || "";
      navigate(`glossary?q=${encodeURIComponent(query)}`);
    });
  });

  document.querySelectorAll("[data-compare-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      state.compareLeft = formData.get("left");
      state.compareRight = formData.get("right");
      renderApp();
    });
  });

  document.querySelectorAll("[data-timeline-filter]").forEach((form) => {
    form.addEventListener("change", () => {
      const formData = new FormData(form);
      navigate(timelineRoute({
        q: formData.get("q") || "",
        period: formData.get("period") || "all",
        region: formData.get("region") || "all",
        country: formData.get("country") || "all",
        entity: formData.get("entity") || "all",
        category: formData.get("category") || "all",
        actor: formData.get("actor") || "all",
        evidence: formData.get("evidence") || "all",
        approximate: formData.get("approximate") === "1" ? "1" : "0",
        start: formData.get("start") || "",
        end: formData.get("end") || "",
        zoom: formData.get("zoom") || "period",
        page: 1,
        selected: "",
      }));
    });
  });

  document.querySelectorAll("[data-timeline-search]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const current = getRoute();
      const filters = normalizeTimelineFilters(current.params);
      navigate(timelineRoute({ ...filters, q: new FormData(form).get("q")?.trim() || "", page: 1, selected: "" }));
    });
  });

  const dialogForm = document.querySelector("[data-dialog-search]");
  if (dialogForm) {
    const input = dialogForm.querySelector("input");
    input.addEventListener("input", () => {
      state.query = input.value;
      const cursor = input.selectionStart;
      renderApp();
      requestAnimationFrame(() => {
        const nextInput = document.querySelector("#dialog-search-input");
        nextInput?.setSelectionRange(cursor, cursor);
      });
    });
    dialogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (state.query.trim()) {
        state.searchOpen = false;
        navigate(`search?q=${encodeURIComponent(state.query.trim())}`);
      }
    });
  }
  bindLearningMapInteractions();
}

window.addEventListener("hashchange", () => {
  state.searchOpen = false;
  renderApp({ scroll: true });
});

window.addEventListener("keydown", (event) => {
  const activeElement = document.activeElement;
  const isTyping = activeElement?.tagName === "INPUT" || activeElement?.tagName === "TEXTAREA" || activeElement?.tagName === "SELECT";
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    state.searchOpen = true;
    renderApp();
  }
  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    state.searchOpen = true;
    renderApp();
  }
  if (event.key === "Escape" && state.searchOpen) {
    state.searchOpen = false;
    renderApp();
  }
});

renderApp();
