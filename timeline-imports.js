import { timelineResearchBatches, timelineResearchCandidates } from "./timeline-research-candidates.js";

// Published imports are derived from the candidate layer instead of being
// copied by hand into the public timeline. Stable candidate IDs make rerunning
// the selection deterministic and allow the validator to detect duplicates.
const TIMELINE_IMPORT_ACCESSED_AT = "2026-10-25";
const createTimelineImportSource = (id, title, institution, sourceType, url, supports, publishedAt = null) => ({
  id,
  title,
  institution,
  sourceType,
  url,
  publishedAt,
  accessedAt: TIMELINE_IMPORT_ACCESSED_AT,
  supports,
  claimsSupported: [],
});

export const timelineImportedSources = [
  createTimelineImportSource("unesco-gobekli-tepe", "Göbekli Tepe", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/1572/", "Chronology, monumental architecture, and stated archaeological uncertainty at Göbekli Tepe."),
  createTimelineImportSource("unesco-silk-roads-changan-tianshan", "Silk Roads: the Routes Network of Chang'an-Tianshan Corridor", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/1442", "Development of the Chang'an–Tianshan corridor and its trade, religious, and knowledge exchanges."),
  createTimelineImportSource("british-museum-cyrus-cylinder", "The Cyrus Cylinder", "The British Museum", "Museum collection record", "https://www.britishmuseum.org/collection/image/262895001", "The Cylinder's Babylonian text, 539 BCE conquest context, and temple-restoration reference."),
  createTimelineImportSource("unesco-chavin", "Chavin (Archaeological Site)", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/330", "Chavín's broad chronology and ceremonial-pilgrimage significance."),
  createTimelineImportSource("unesco-mahendraparvata", "Phnom Kulen: Archaeological Site / Ancient Site of Mahendraparvata", "UNESCO World Heritage Centre", "Tentative-list archaeological record", "https://whc.unesco.org/fr/listesindicatives/6460", "UNESCO-cited inscription context for Jayavarman II and Mahendraparvata."),
  createTimelineImportSource("unesco-bagan", "Bagan", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/1588/", "Bagan Period chronology, regional capital status, and Buddhist cultural landscape."),
  createTimelineImportSource("nps-cahokia", "Midwest Region's Only World Heritage Site...and a Promise of More to Come", "U.S. National Park Service", "Federal public-history research", "https://home.nps.gov/articles/midwest-region-s-only-world-heritage-site-and-a-promise-of-more-to-come.htm", "Cahokia's 700–1400 occupation and 1050–1200 zenith as a Mississippian centre."),
  createTimelineImportSource("unesco-kilwa", "Ruins of Kilwa Kisiwani and Ruins of Songo Mnara", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/144/", "Kilwa chronology, Swahili urban history, and Indian Ocean trade connections."),
  createTimelineImportSource("unesco-nan-madol", "Nan Madol: Ceremonial Centre of Eastern Micronesia", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/1503", "1200–1500 chronology and Saudeleur ceremonial, social, and religious context."),
  createTimelineImportSource("met-mansa-musa-hajj", "Western and Central Sudan, 1000–1400 A.D.", "The Metropolitan Museum of Art", "Museum research reference", "https://www.metmuseum.org/ru/toah/ht/07/afu.html", "Mansa Musa's 1324–1325 pilgrimage and Mali's cross-regional connections."),
  createTimelineImportSource("unesco-machu-picchu", "Historic Sanctuary of Machu Picchu", "UNESCO World Heritage Centre", "World Heritage record", "https://whc.unesco.org/en/list/274/", "Fifteenth-century construction, sixteenth-century abandonment, and unresolved questions about Machu Picchu's role."),
  createTimelineImportSource("nps-pueblo-revolt", "Pueblo of Acoma National Register documentation", "U.S. National Park Service", "Federal archival documentation", "https://npgallery.nps.gov/NRHP/GetAsset/9fe09039-cc7b-46eb-9826-a894349f0c95", "The 10 August 1680 beginning of the Pueblo Revolt and subsequent events at Santa Fe."),
  createTimelineImportSource("anri-indonesia-proclamation", "Merekam Jejak Awal Arsip Kepresidenan Indonesia…", "Arsip Nasional Republik Indonesia", "National archive record", "https://pusdipres.anri.go.id/kontribusi-masyarakat/pameran-arsip-jaringan-kepresidenan/detail/merekam-jejak-awal-arsip-kepresidenan-indonesia-melalui-khazanah-arsip-jogja-documenten-1945-1949", "Place, participants, and date of the Indonesian independence proclamation."),
  createTimelineImportSource("un-resolution-181", "Future government of Palestine, A/RES/181(II)", "United Nations Digital Library", "Primary UN resolution", "https://digitallibrary.un.org/record/667160?ln=en&v=%5B%27pdf%27%5D", "The adoption date and proposed terms of UN General Assembly Resolution 181 (II).", 1947),
  createTimelineImportSource("scio-prc-founding", "The Founding Ceremony of the People's Republic of China", "State Council Information Office of the People's Republic of China", "Official institutional history", "https://english.scio.gov.cn/m/featured/chinakeywords/2022-07/13/content_78321957.htm", "The 1 October 1949 founding ceremony of the Central People's Government."),
  createTimelineImportSource("mfat-samoa-independence", "MFAT 75: Apia", "New Zealand Ministry of Foreign Affairs and Trade", "Government institutional history", "https://www.mfat.govt.nz/en/about-us/mfat75/75-our-story/apia", "Samoa's 1 January 1962 independence after New Zealand administration."),
  createTimelineImportSource("nara-voting-rights-act", "Voting Rights Act (1965)", "U.S. National Archives", "Primary-source archive", "https://www.archives.gov/milestone-documents/voting-rights-act", "The 6 August 1965 signing and the Act's ban on discriminatory voting practices.", 1965),
  createTimelineImportSource("naa-1967-referendum", "The 1967 referendum", "National Archives of Australia", "National archive research", "https://www.naa.gov.au/explore-collection/first-australians/other-resources-about-first-australians/1967-referendum", "The 27 May 1967 referendum, result, constitutional amendment, and limits of its direct effect."),
  createTimelineImportSource("asean-founding", "The Founding of ASEAN", "ASEAN Secretariat", "Official institutional history", "https://asean.org/the-founding-of-asean/", "The five signatories and the 8 August 1967 Bangkok Declaration."),
  createTimelineImportSource("caricom-chaguaramas", "Treaty Establishing the Caribbean Community", "CARICOM", "Treaty text and institutional record", "https://caricom.org/treaties/treaty-establishing-the-caribbean-community/", "Signatories, 4 July 1973 signature, 1 August 1973 entry into force, and stated cooperation goals.", 1973),
  createTimelineImportSource("un-treaty-rarotonga", "South Pacific Nuclear Free Zone Treaty", "United Nations Treaty Collection", "Treaty record", "https://treaties.un.org/Pages/showDetails.aspx?objid=08000002800cea40", "The 6 August 1985 conclusion, 11 December 1986 entry into force, and indexed subject matters.", 1985),
  createTimelineImportSource("un-namibia-independence", "The UN's role in Namibian Independence", "United Nations in Namibia", "Official UN institutional history", "https://namibia.un.org/en/175155-uns-role-namibian-independence", "The 21 March 1990 independence date and UN-supervised electoral process."),
  createTimelineImportSource("canada-nunavut", "Nunavut", "Government of Canada", "Government reference", "https://www.canada.ca/en/canadian-heritage/services/provincial-territorial-symbols-canada/nunavut.html", "The Nunavut Act's 1 April 1999 effect, land-claims context, and consensus legislature."),
  createTimelineImportSource("un-south-sudan", "South Sudan", "United Nations", "Official UN institutional history", "https://www.un.org/en/node/122910", "South Sudan's 9 July 2011 independence, referendum context, and UN admission."),
];

export const timelineImportedEntities = [
  { id: "gobekli-tepe", type: "archaeological-site", names: { vi: "Göbekli Tepe", en: "Göbekli Tepe" }, aliases: ["Göbeklitepe"], regions: ["west-asia-middle-east"], modernAssociations: ["turkiye"], coverageStatus: "researched", overview: { vi: "Một địa điểm khảo cổ thời Đồ đá mới tiền gốm ở Anatolia; diễn giải về công năng của các công trình vẫn có độ bất định.", en: "A Pre-Pottery Neolithic archaeological site in Anatolia; the functions of its monumental structures remain partly interpretive." }, sourceIds: ["unesco-gobekli-tepe"] },
  { id: "silk-roads-changan-tianshan", type: "trade-network", names: { vi: "Hành lang Con đường Tơ lụa Trường An – Thiên Sơn", en: "Chang'an–Tianshan Silk Roads corridor" }, aliases: ["Silk Road", "Tian-shan Corridor"], regions: ["east-asia", "central-asia", "south-asia", "west-asia-middle-east"], modernAssociations: ["china", "kazakhstan", "kyrgyzstan"], coverageStatus: "researched", overview: { vi: "Một hành lang trong mạng lưới Con đường Tơ lụa rộng hơn, không phải một con đường đơn tuyến hay một quốc gia.", en: "One corridor within a wider Silk Roads network, not a single road or a country." }, sourceIds: ["unesco-silk-roads-changan-tianshan"] },
  { id: "chavin", type: "archaeological-culture", names: { vi: "Chavín", en: "Chavín" }, aliases: ["Chavín de Huántar"], regions: ["south-america"], modernAssociations: ["peru"], coverageStatus: "researched", overview: { vi: "Một trung tâm nghi lễ–hành hương Andes có niên đại và chức năng được trình bày theo các khoảng khảo cổ rộng.", en: "An Andean ceremonial-pilgrimage centre whose chronology and functions are expressed through broad archaeological horizons." }, sourceIds: ["unesco-chavin"] },
  { id: "bagan", type: "historical-city", names: { vi: "Bagan", en: "Bagan" }, aliases: ["Pagan"], regions: ["southeast-asia"], modernAssociations: ["myanmar"], coverageStatus: "researched", overview: { vi: "Một cảnh quan Phật giáo và kinh đô của đế chế khu vực trong giai đoạn Bagan thế kỷ XI–XIII.", en: "A Buddhist cultural landscape and regional imperial capital during the eleventh–thirteenth-century Bagan period." }, sourceIds: ["unesco-bagan"] },
  { id: "cahokia", type: "historical-city", names: { vi: "Cahokia", en: "Cahokia" }, aliases: ["Cahokia Mounds"], regions: ["north-america"], modernAssociations: ["united-states"], coverageStatus: "researched", overview: { vi: "Một trung tâm đô thị–nghi lễ Mississippian ở Bắc Mỹ tiền Colombo.", en: "A Mississippian urban-ceremonial centre in pre-Columbian North America." }, sourceIds: ["nps-cahokia"] },
  { id: "kilwa-kisiwani", type: "historical-city", names: { vi: "Kilwa Kisiwani", en: "Kilwa Kisiwani" }, aliases: ["Kilwa", "Songo Mnara"], regions: ["africa", "south-asia", "east-asia", "west-asia-middle-east"], modernAssociations: ["tanzania"], coverageStatus: "researched", overview: { vi: "Một thương cảng Swahili trong mạng lưới Ấn Độ Dương, không đồng nhất với một nhà nước hiện đại.", en: "A Swahili port in Indian Ocean networks, not identical to a modern state." }, sourceIds: ["unesco-kilwa"] },
  { id: "nan-madol", type: "ceremonial-centre", names: { vi: "Nan Madol", en: "Nan Madol" }, aliases: ["Saudeleur ceremonial centre"], regions: ["oceania-pacific"], modernAssociations: ["micronesia"], coverageStatus: "researched", overview: { vi: "Một quần thể nghi lễ gồm hơn 100 đảo nhỏ ngoài khơi Pohnpei, gắn với triều Saudeleur.", en: "A ceremonial complex of more than 100 islets off Pohnpei associated with the Saudeleur dynasty." }, sourceIds: ["unesco-nan-madol"] },
  { id: "machu-picchu", type: "historical-city", names: { vi: "Machu Picchu", en: "Machu Picchu" }, aliases: ["La Ciudadela"], regions: ["south-america"], modernAssociations: ["peru"], coverageStatus: "researched", overview: { vi: "Một trung tâm Inca ở Andes Peru; chức năng chính xác vẫn là vấn đề nghiên cứu mở.", en: "An Inca centre in the Peruvian Andes whose precise role remains an open research question." }, sourceIds: ["unesco-machu-picchu"] },
  { id: "pueblo-peoples", type: "indigenous-peoples", names: { vi: "Các dân tộc Pueblo", en: "Pueblo peoples" }, aliases: ["Pueblo communities", "Pueblos"], regions: ["north-america"], modernAssociations: ["united-states"], coverageStatus: "researched", overview: { vi: "Các cộng đồng Bản địa có lịch sử và chủ quyền đa dạng ở Tây Nam Bắc Mỹ; không nên thu gọn thành một bản sắc chính trị duy nhất.", en: "Indigenous communities with diverse histories and sovereignties in the North American Southwest; they should not be reduced to one political identity." }, sourceIds: ["nps-pueblo-revolt"] },
  { id: "aboriginal-and-torres-strait-islander-peoples", type: "indigenous-peoples", names: { vi: "Các dân tộc Aboriginal và Torres Strait Islander", en: "Aboriginal and Torres Strait Islander peoples" }, aliases: ["First Nations peoples of Australia", "Indigenous Australians"], regions: ["oceania-pacific"], modernAssociations: ["australia"], coverageStatus: "researched", overview: { vi: "Các dân tộc Bản địa đa dạng của Australia; lịch sử của họ không bắt đầu từ hiến pháp hay nhà nước thuộc địa.", en: "The diverse First Nations peoples of Australia; their histories do not begin with colonial constitutions or the modern state." }, sourceIds: ["naa-1967-referendum"] },
  { id: "asean", type: "international-organization", names: { vi: "Hiệp hội các Quốc gia Đông Nam Á", en: "Association of Southeast Asian Nations" }, aliases: ["ASEAN"], regions: ["southeast-asia"], modernAssociations: ["indonesia", "malaysia", "philippines", "singapore", "thailand"], coverageStatus: "researched", overview: { vi: "Một tổ chức khu vực được thành lập bằng Tuyên bố Bangkok năm 1967.", en: "A regional organization established through the 1967 Bangkok Declaration." }, sourceIds: ["asean-founding"] },
  { id: "caricom", type: "international-organization", names: { vi: "Cộng đồng Caribe", en: "Caribbean Community" }, aliases: ["CARICOM"], regions: ["caribbean", "south-america"], modernAssociations: ["barbados", "guyana", "jamaica", "trinidad-and-tobago"], coverageStatus: "researched", overview: { vi: "Một tổ chức hợp tác Caribe được thiết lập bằng Hiệp ước Chaguaramas năm 1973.", en: "A Caribbean cooperation organization established by the 1973 Treaty of Chaguaramas." }, sourceIds: ["caricom-chaguaramas"] },
  { id: "nunavut", type: "territory", names: { vi: "Nunavut", en: "Nunavut" }, aliases: ["Nunavut Territory"], regions: ["north-america"], modernAssociations: ["canada"], coverageStatus: "researched", overview: { vi: "Một lãnh thổ Canada được thành lập năm 1999 trong bối cảnh thỏa thuận yêu sách đất đai Inuit.", en: "A Canadian territory created in 1999 in the context of Inuit land-claims agreements." }, sourceIds: ["canada-nunavut"] },
];

const publishedCandidates = timelineResearchCandidates
  .filter((candidate) => candidate.status === "published")
  .sort((left, right) => left.candidateId.localeCompare(right.candidateId));

export const timelineImportedEvents = publishedCandidates.map((candidate) => ({
  ...candidate.event,
  candidateId: candidate.candidateId,
  importBatchId: candidate.importBatchId,
  sourceClaims: candidate.evidence?.claims || [],
  provenance: {
    candidateId: candidate.candidateId,
    importBatchId: candidate.importBatchId,
    fingerprint: candidate.fingerprint,
    reviewedAt: candidate.reviewedAt,
    sourceIds: candidate.evidence?.sourceIds || [],
  },
  lastVerifiedAt: candidate.reviewedAt || TIMELINE_IMPORT_ACCESSED_AT,
}));

export const timelineImportedCountryIds = [...new Set(timelineImportedEvents.flatMap((event) => event.modern || []))].sort();

export const timelineImportManifest = {
  version: "2026.10-research-batch-01",
  generatedAt: TIMELINE_IMPORT_ACCESSED_AT,
  batchIds: timelineResearchBatches.map((batch) => batch.id),
  candidateCount: timelineResearchCandidates.length,
  publishedCandidateCount: publishedCandidates.length,
  publishedCandidateIds: publishedCandidates.map((candidate) => candidate.candidateId),
  importedRecordCount: timelineImportedEvents.length,
  importedSourceCount: timelineImportedSources.length,
  importedEntityCount: timelineImportedEntities.length,
  reproducibility: "Deterministic status filter; stable candidate IDs and fingerprints; no network call is needed to rebuild the published dataset.",
};
