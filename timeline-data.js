// CIVITAS GLOBAL HISTORY TIMELINE
//
// This local starter archive is intentionally structured as data rather than a
// presentation component.  New records can be added here (or split into yearly
// import files later) without changing the timeline UI.  Negative chronology
// years mean BCE; positive values mean CE.  Text labels remain explicit when
// a date is approximate, a range, or a matter of scholarly discussion.

import { timelineImportedCountryIds, timelineImportedEntities, timelineImportedEvents, timelineImportedSources, timelineImportManifest } from "./timeline-imports.js";

export const TIMELINE_DATASET_VERSION = "2026.10-research-batch-01";
export const TIMELINE_LAST_VERIFIED_AT = "2026-10-25";

export const timelinePeriods = [
  { id: "prehistory", startYear: -300000, endYear: -3200, title: { vi: "Tiền sử & xã hội người đầu tiên", en: "Prehistory & early human societies" }, description: { vi: "Bằng chứng khảo cổ, di cư, định cư và những biến đổi dài hạn trước văn bản viết.", en: "Archaeological evidence, migration, settlement, and long change before written records." } },
  { id: "ancient", startYear: -3400, endYear: 600, title: { vi: "Các nền văn minh cổ đại", en: "Ancient civilizations" }, description: { vi: "Đô thị, nhà nước, lưu trữ, mạng lưới trao đổi và các xã hội phức hợp ở nhiều khu vực.", en: "Cities, states, recordkeeping, exchange networks, and complex societies across regions." } },
  { id: "classical-postclassical", startYear: 500, endYear: 1450, title: { vi: "Cổ điển & hậu cổ điển", en: "Classical & post-classical worlds" }, description: { vi: "Các truyền thống khu vực, đế chế, tôn giáo, thương mại và di cư không cùng một nhịp niên đại.", en: "Regional traditions, empires, religions, trade, and migrations that do not share one chronology." } },
  { id: "early-modern", startYear: 1450, endYear: 1780, title: { vi: "Cận đại sớm", en: "Early modern history" }, description: { vi: "Kết nối hàng hải, hình thành nhà nước, thuộc địa hóa và phản kháng.", en: "Maritime connections, state formation, colonial expansion, and resistance." } },
  { id: "modern", startYear: 1770, endYear: 1945, title: { vi: "Lịch sử hiện đại", en: "Modern history" }, description: { vi: "Cách mạng, công nghiệp hóa, đế quốc, quyền công dân và các định chế quốc tế mới.", en: "Revolutions, industrialization, empire, citizenship, and new international institutions." } },
  { id: "contemporary", startYear: 1945, endYear: 2026, title: { vi: "Lịch sử đương đại", en: "Contemporary history" }, description: { vi: "Phi thực dân hóa, biến đổi chính trị - xã hội và hợp tác toàn cầu đã được kiểm chứng.", en: "Decolonization, political and social change, and verified global cooperation." } },
];

export const timelineRegions = [
  { id: "africa", title: { vi: "Châu Phi", en: "Africa" } },
  { id: "east-asia", title: { vi: "Đông Á", en: "East Asia" } },
  { id: "southeast-asia", title: { vi: "Đông Nam Á", en: "Southeast Asia" } },
  { id: "south-asia", title: { vi: "Nam Á", en: "South Asia" } },
  { id: "central-asia", title: { vi: "Trung Á", en: "Central Asia" } },
  { id: "west-asia-middle-east", title: { vi: "Tây Á & Trung Đông", en: "West Asia & the Middle East" } },
  { id: "europe", title: { vi: "Châu Âu", en: "Europe" } },
  { id: "north-america", title: { vi: "Bắc Mỹ", en: "North America" } },
  { id: "central-america", title: { vi: "Trung Mỹ", en: "Central America" } },
  { id: "south-america", title: { vi: "Nam Mỹ", en: "South America" } },
  { id: "caribbean", title: { vi: "Caribe", en: "Caribbean" } },
  { id: "oceania-pacific", title: { vi: "Châu Đại Dương & Thái Bình Dương", en: "Oceania & the Pacific" } },
  { id: "cross-regional-global", title: { vi: "Liên vùng & toàn cầu", en: "Cross-regional & global" } },
];

export const timelineCategories = [
  { id: "state-formation", title: { vi: "Hình thành & biến đổi nhà nước", en: "State formation & transformation" } },
  { id: "dynasty-empire", title: { vi: "Triều đại, vương quốc & đế chế", en: "Dynasties, kingdoms & empires" } },
  { id: "law-constitution", title: { vi: "Pháp luật & hiến định", en: "Law & constitutional change" } },
  { id: "elections-government", title: { vi: "Bầu cử & chuyển giao chính phủ", en: "Elections & changes of government" } },
  { id: "movement-revolution", title: { vi: "Phong trào & cách mạng", en: "Movements & revolutions" } },
  { id: "conflict-peace", title: { vi: "Xung đột & hòa bình", en: "Conflict & peace" } },
  { id: "independence-decolonization", title: { vi: "Độc lập & phi thực dân hóa", en: "Independence & decolonization" } },
  { id: "diplomacy-treaty", title: { vi: "Ngoại giao & điều ước", en: "Diplomacy & treaties" } },
  { id: "borders-sovereignty", title: { vi: "Biên giới & chủ quyền", en: "Borders & sovereignty" } },
  { id: "economy-trade", title: { vi: "Kinh tế & thương mại", en: "Economy & trade" } },
  { id: "social-rights", title: { vi: "Phong trào xã hội & dân quyền", en: "Social movements & civil rights" } },
  { id: "migration-settlement", title: { vi: "Di cư & định cư", en: "Migration & settlement" } },
  { id: "religion-culture", title: { vi: "Tôn giáo, văn hóa & tư tưởng", en: "Religion, culture & intellectual history" } },
  { id: "science-technology", title: { vi: "Khoa học, kỹ thuật & phát minh", en: "Science, technology & invention" } },
  { id: "education-knowledge", title: { vi: "Giáo dục & tri thức", en: "Education & knowledge" } },
  { id: "public-health", title: { vi: "Y tế công cộng", en: "Public health" } },
  { id: "environment-disaster", title: { vi: "Môi trường & thiên tai", en: "Environment & natural disasters" } },
  { id: "labor-organization", title: { vi: "Lao động & tổ chức xã hội", en: "Labor & social organization" } },
  { id: "international-organization", title: { vi: "Tổ chức quốc tế", en: "International organizations" } },
  { id: "local-regional", title: { vi: "Phát triển địa phương & khu vực", en: "Local & regional developments" } },
  { id: "contemporary-event", title: { vi: "Sự kiện đương đại có tư liệu", en: "Documented contemporary events" } },
];

const baseTimelineSources = [
  { id: "smithsonian-human-origins", title: "The Smithsonian Institution Human Origins Program", institution: "Smithsonian Institution", sourceType: "Museum research and public scholarship", url: "https://humanorigins.si.edu/evidence/human-evolution-interactive-timeline", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Human evolution, dispersal, and the limits of archaeological dating." },
  { id: "unesco-catalhoyuk", title: "Neolithic Site of Çatalhöyük", institution: "UNESCO World Heritage Centre", sourceType: "World Heritage record", url: "https://whc.unesco.org/en/list/1405/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Chronology and archaeological significance of the settlement." },
  { id: "unesco-caral", title: "Sacred City of Caral-Supe", institution: "UNESCO World Heritage Centre", sourceType: "World Heritage record", url: "https://whc.unesco.org/en/list/1269/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Late Archaic Caral-Supe chronology and urban complexity." },
  { id: "met-toah", title: "Heilbrunn Timeline of Art History", institution: "The Metropolitan Museum of Art", sourceType: "Museum research reference", url: "https://www.metmuseum.org/toah/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Cross-regional historical and material-culture chronology." },
  { id: "british-museum-collection", title: "The British Museum Collection", institution: "The British Museum", sourceType: "Museum collection and research", url: "https://www.britishmuseum.org/collection", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Objects, historical contexts, and alternative names for ancient societies." },
  { id: "unesco-angkor", title: "Angkor", institution: "UNESCO World Heritage Centre", sourceType: "World Heritage record", url: "https://whc.unesco.org/en/list/668/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Angkor's historical and cultural landscape." },
  { id: "unesco-great-zimbabwe", title: "Great Zimbabwe National Monument", institution: "UNESCO World Heritage Centre", sourceType: "World Heritage record", url: "https://whc.unesco.org/en/list/364/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Great Zimbabwe's built heritage and regional significance." },
  { id: "unesco-qhapaq-nan", title: "Qhapaq Ñan, Andean Road System", institution: "UNESCO World Heritage Centre", sourceType: "World Heritage record", url: "https://whc.unesco.org/en/list/1459/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The Inca road network across modern states." },
  { id: "nara-declaration", title: "The Declaration of Independence: A Transcription", institution: "U.S. National Archives", sourceType: "Primary-source archive", url: "https://www.archives.gov/founding-docs/declaration-transcript", publishedAt: 1776, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The text and date of the U.S. Declaration of Independence." },
  { id: "nara-constitution", title: "The Constitution of the United States: A Transcription", institution: "U.S. National Archives", sourceType: "Primary-source archive", url: "https://www.archives.gov/founding-docs/constitution-transcript", publishedAt: 1787, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The U.S. constitutional text and adoption record." },
  { id: "loc-world-history", title: "Library of Congress Collections", institution: "Library of Congress", sourceType: "National library and archive", url: "https://www.loc.gov/collections/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Digitized primary sources and historical research pathways." },
  { id: "uk-parliament-abolition", title: "Abolition of the Slave Trade and Slavery", institution: "UK Parliament", sourceType: "Parliamentary history", url: "https://www.parliament.uk/about/living-heritage/transformingsociety/livinglearning/slavery/overview/abolition/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "UK parliamentary abolition legislation and its context." },
  { id: "ndl-meiji", title: "The Meiji Restoration and Modernization", institution: "National Diet Library, Japan", sourceType: "National library research", url: "https://www.ndl.go.jp/modern/e/cha1/description01.html", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Japan's political transformation during the Meiji era." },
  { id: "nzhistory-suffrage", title: "Women's suffrage milestones", institution: "NZ History / Manatū Taonga Ministry for Culture and Heritage", sourceType: "Public-history research", url: "https://nzhistory.govt.nz/politics/womens-suffrage/suffrage-milestones", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The Electoral Act 1893 and women's parliamentary suffrage in New Zealand." },
  { id: "nzhistory-treaty", title: "The Treaty in Brief", institution: "NZ History / Manatū Taonga Ministry for Culture and Heritage", sourceType: "Public-history research", url: "https://nzhistory.govt.nz/politics/treaty/the-treaty-in-brief", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The Treaty of Waitangi and its historical context." },
  { id: "ilo-history", title: "History of the ILO", institution: "International Labour Organization", sourceType: "Official institutional history", url: "https://www.ilo.org/about-ilo/history-ilo", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The ILO's creation in 1919 as part of the Treaty of Versailles and its social-justice mandate." },
  { id: "un-charter", title: "Charter of the United Nations", institution: "United Nations", sourceType: "Primary legal text", url: "https://www.un.org/en/about-us/un-charter", publishedAt: 1945, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The founding, purposes, and institutional framework of the United Nations." },
  { id: "un-udhr", title: "Universal Declaration of Human Rights", institution: "United Nations", sourceType: "Primary international text", url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights", publishedAt: 1948, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Adoption and text of the Universal Declaration of Human Rights." },
  { id: "un-undrip", title: "United Nations Declaration on the Rights of Indigenous Peoples", institution: "United Nations", sourceType: "Primary UN resolution and institutional record", url: "https://legal.un.org/avl/ha/ga_61-295/ga_61-295.html", publishedAt: 2007, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "UN General Assembly resolution 61/295 and adoption of the Declaration on 13 September 2007." },
  { id: "un-resolution-1514", title: "Declaration on the Granting of Independence to Colonial Countries and Peoples", institution: "United Nations Audiovisual Library of International Law", sourceType: "Primary UN record", url: "https://legal.un.org/avl/ha/ga_1514/ga_1514.html", publishedAt: 1960, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "UN General Assembly Resolution 1514 (XV)." },
  { id: "un-sdgs", title: "Sustainable Development Goals", institution: "United Nations", sourceType: "Official UN record", url: "https://sdgs.un.org/goals", publishedAt: 2015, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The 2030 Agenda and its 17 Goals." },
  { id: "african-union-history", title: "About the African Union", institution: "African Union", sourceType: "Institutional history", url: "https://au.int/en/overview", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The 1963 OAU and the African Union's 2002 launch." },
  { id: "who-pandemic-agreement", title: "World Health Assembly adopts historic Pandemic Agreement", institution: "World Health Organization", sourceType: "Official institutional record", url: "https://www.who.int/news/item/20-05-2025-world-health-assembly-adopts-historic-pandemic-agreement-to-make-the-world-more-equitable-and-safer-from-future-pandemics", publishedAt: 2025, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Adoption of the WHO Pandemic Agreement on 20 May 2025 and its implementation status." },
  { id: "who-pandemic-resolution", title: "WHA78.1 — WHO Pandemic Agreement", institution: "World Health Organization", sourceType: "Primary resolution", url: "https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R1-en.pdf", publishedAt: 2025, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "The resolution and next steps before signature and entry into force." },
  { id: "seshat", title: "Seshat: Global History Databank", institution: "Seshat Global History Databank", sourceType: "Structured research databank", url: "https://seshatdatabank.info/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Comparative historical data and an expandable research workflow; not a substitute for event-specific sources." },
  { id: "gdelt", title: "GDELT Project", institution: "GDELT Project", sourceType: "Structured contemporary-event discovery", url: "https://www.gdeltproject.org/", publishedAt: null, accessedAt: TIMELINE_LAST_VERIFIED_AT, supports: "Discovery of contemporary reporting only; never sole verification." },
];

export const timelineSources = [...baseTimelineSources, ...timelineImportedSources];

const baseTimelineEntities = [
  { id: "homo-sapiens", type: "human-population", names: { vi: "Homo sapiens", en: "Homo sapiens" }, aliases: ["người hiện đại", "modern humans"], regions: ["africa", "cross-regional-global"], modernAssociations: [], coverageStatus: "researched", overview: { vi: "Một loài người hiện đại có nguồn gốc ở châu Phi; các mốc phân tán và tương tác được suy ra từ bằng chứng khảo cổ, hóa thạch và di truyền đang tiếp tục được hiệu chỉnh.", en: "A modern human species with African origins; dispersal and interaction dates are inferred from evolving archaeological, fossil, and genetic evidence." }, sourceIds: ["smithsonian-human-origins"] },
  { id: "catalhoyuk", type: "archaeological-settlement", names: { vi: "Çatalhöyük", en: "Çatalhöyük" }, aliases: ["Catalhoyuk"], regions: ["west-asia-middle-east"], modernAssociations: ["turkiye"], coverageStatus: "researched", overview: { vi: "Một quần cư thời Đồ đá mới ở Anatolia, không phải một quốc gia hiện đại.", en: "A Neolithic settlement in Anatolia, not a modern country." }, sourceIds: ["unesco-catalhoyuk"] },
  { id: "caral-supe", type: "archaeological-city", names: { vi: "Caral-Supe", en: "Caral-Supe" }, aliases: ["Sacred City of Caral-Supe"], regions: ["south-america"], modernAssociations: ["peru"], coverageStatus: "researched", overview: { vi: "Một trung tâm xã hội - chính trị muộn thời Archaic tại thung lũng Supe, trên lãnh thổ Peru ngày nay.", en: "A Late Archaic socio-political centre in the Supe Valley, within present-day Peru." }, sourceIds: ["unesco-caral"] },
  { id: "mesopotamia", type: "historical-region", names: { vi: "Lưỡng Hà", en: "Mesopotamia" }, aliases: ["Mesopotamia"], regions: ["west-asia-middle-east"], modernAssociations: ["iraq", "syria", "turkiye"], coverageStatus: "partial", overview: { vi: "Một vùng lịch sử giữa các hệ thống sông, không đồng nhất với một quốc gia hiện đại.", en: "A historical region between river systems, not identical to a modern state." }, sourceIds: ["met-toah", "british-museum-collection"] },
  { id: "ancient-egypt", type: "historical-state", names: { vi: "Ai Cập cổ đại", en: "Ancient Egypt" }, aliases: ["Kemet"], regions: ["africa"], modernAssociations: ["egypt"], coverageStatus: "partial", overview: { vi: "Các vương triều và nhà nước biến đổi dọc thung lũng Nile; không nên gán nguyên trạng bản sắc quốc gia hiện đại cho mọi thời kỳ.", en: "Changing dynasties and states along the Nile Valley; modern national identity should not be projected unchanged onto every period." }, sourceIds: ["met-toah"] },
  { id: "indus-civilization", type: "civilization", names: { vi: "Văn minh lưu vực sông Ấn", en: "Indus Civilization" }, aliases: ["Harappan civilization", "Harappa"], regions: ["south-asia"], modernAssociations: ["pakistan", "india"], coverageStatus: "partial", overview: { vi: "Một mạng lưới đô thị cổ đại trải qua nhiều lãnh thổ hiện đại ở Nam Á.", en: "An ancient urban network spanning multiple present-day territories in South Asia." }, sourceIds: ["met-toah"] },
  { id: "kingdom-of-kush", type: "historical-state", names: { vi: "Vương quốc Kush", en: "Kingdom of Kush" }, aliases: ["Nubia", "Kush"], regions: ["africa"], modernAssociations: ["sudan", "egypt"], coverageStatus: "partial", overview: { vi: "Một chuỗi thực thể lịch sử Nubia có quan hệ thay đổi với Ai Cập và các vùng lân cận.", en: "A sequence of Nubian historical polities with changing relations to Egypt and neighbouring regions." }, sourceIds: ["met-toah"] },
  { id: "shang", type: "dynasty", names: { vi: "Nhà Thương", en: "Shang dynasty" }, aliases: ["Yin"], regions: ["east-asia"], modernAssociations: ["china"], coverageStatus: "partial", overview: { vi: "Một triều đại được ghi nhận qua khảo cổ và văn tự giáp cốt ở miền bắc Trung Quốc ngày nay.", en: "A dynasty documented through archaeology and oracle-bone inscriptions in what is now northern China." }, sourceIds: ["met-toah"] },
  { id: "olmec", type: "civilization", names: { vi: "Olmec", en: "Olmec" }, aliases: ["Olmec civilization"], regions: ["central-america"], modernAssociations: ["mexico"], coverageStatus: "partial", overview: { vi: "Các xã hội tạo dựng trung tâm nghi lễ ở vùng Vịnh Mexico thời tiền Colombo.", en: "Societies that developed ceremonial centres in the Gulf Coast region of pre-Columbian Mexico." }, sourceIds: ["met-toah"] },
  { id: "lapita", type: "archaeological-culture", names: { vi: "Văn hóa Lapita", en: "Lapita culture" }, aliases: ["Lapita"], regions: ["oceania-pacific"], modernAssociations: ["papua-new-guinea", "solomon-islands", "vanuatu", "fiji", "tonga", "samoa"], coverageStatus: "sparse", overview: { vi: "Một truyền thống khảo cổ và mạng lưới hàng hải Thái Bình Dương, không phải một quốc gia hay sắc tộc duy nhất.", en: "An archaeological tradition and maritime Pacific network, not a single country or ethnicity." }, sourceIds: ["met-toah", "seshat"] },
  { id: "achaemenid", type: "empire", names: { vi: "Đế chế Achaemenid", en: "Achaemenid Empire" }, aliases: ["Persian Empire", "Achaemenid Persia"], regions: ["west-asia-middle-east", "central-asia", "europe", "africa"], modernAssociations: ["iran", "iraq", "turkiye", "egypt"], coverageStatus: "partial", overview: { vi: "Một đế chế xuyên khu vực; các lãnh thổ thay đổi theo thời gian.", en: "A cross-regional empire whose territories changed over time." }, sourceIds: ["met-toah"] },
  { id: "maurya", type: "empire", names: { vi: "Đế chế Maurya", en: "Maurya Empire" }, aliases: ["Mauryan Empire"], regions: ["south-asia"], modernAssociations: ["india", "pakistan", "bangladesh", "afghanistan"], coverageStatus: "partial", overview: { vi: "Một đế chế Nam Á cổ đại với phạm vi thay đổi theo triều đại.", en: "An ancient South Asian empire with a changing territorial extent." }, sourceIds: ["met-toah"] },
  { id: "qin", type: "dynasty", names: { vi: "Nhà Tần", en: "Qin dynasty" }, aliases: ["Qin"], regions: ["east-asia"], modernAssociations: ["china"], coverageStatus: "partial", overview: { vi: "Một triều đại ngắn nhưng có ảnh hưởng sâu rộng đến việc thống nhất chính trị ở Trung Hoa cổ đại.", en: "A short-lived dynasty with a major role in political unification in ancient China." }, sourceIds: ["met-toah"] },
  { id: "roman-empire", type: "empire", names: { vi: "Đế chế La Mã", en: "Roman Empire" }, aliases: ["Imperium Romanum"], regions: ["europe", "west-asia-middle-east", "africa"], modernAssociations: ["italy", "greece", "turkiye", "egypt", "tunisia"], coverageStatus: "partial", overview: { vi: "Một đế chế Địa Trung Hải, không thể thu gọn thành lịch sử của một quốc gia hiện đại.", en: "A Mediterranean empire that cannot be reduced to the history of one modern country." }, sourceIds: ["met-toah"] },
  { id: "axum", type: "kingdom", names: { vi: "Vương quốc Aksum", en: "Kingdom of Aksum" }, aliases: ["Axum", "Aksumite Kingdom"], regions: ["africa"], modernAssociations: ["ethiopia", "eritrea"], coverageStatus: "partial", overview: { vi: "Một vương quốc ở Sừng châu Phi, quan trọng trong mạng lưới Biển Đỏ và Ấn Độ Dương.", en: "A Horn of Africa kingdom important to Red Sea and Indian Ocean networks." }, sourceIds: ["met-toah"] },
  { id: "teotihuacan", type: "historical-city", names: { vi: "Teotihuacan", en: "Teotihuacan" }, aliases: ["Teotihuacán"], regions: ["central-america"], modernAssociations: ["mexico"], coverageStatus: "partial", overview: { vi: "Một đô thị cổ đại ở Trung Mỹ có ảnh hưởng khu vực, với dân cư và cơ cấu chính trị còn được nghiên cứu.", en: "An ancient Mesoamerican city with regional influence, whose population and political organization remain under study." }, sourceIds: ["met-toah"] },
  { id: "srivijaya", type: "maritime-polity", names: { vi: "Srivijaya", en: "Srivijaya" }, aliases: ["Sriwijaya"], regions: ["southeast-asia"], modernAssociations: ["indonesia", "malaysia", "thailand"], coverageStatus: "partial", overview: { vi: "Một thực thể hàng hải liên kết các cảng và tuyến biển, không đồng nhất với ranh giới Indonesia ngày nay.", en: "A maritime polity linking ports and sea routes, not identical to present-day Indonesia's borders." }, sourceIds: ["met-toah", "seshat"] },
  { id: "ghana-empire", type: "empire", names: { vi: "Đế chế Ghana", en: "Ghana Empire" }, aliases: ["Wagadu", "Ancient Ghana"], regions: ["africa"], modernAssociations: ["mauritania", "mali", "senegal"], coverageStatus: "partial", overview: { vi: "Một thực thể Tây Phi lịch sử; không nên đồng nhất với Cộng hòa Ghana hiện đại.", en: "A historical West African polity; it should not be treated as identical to the modern Republic of Ghana." }, sourceIds: ["met-toah", "seshat"] },
  { id: "khmer-empire", type: "empire", names: { vi: "Đế chế Khmer", en: "Khmer Empire" }, aliases: ["Angkor"], regions: ["southeast-asia"], modernAssociations: ["cambodia", "thailand", "laos", "vietnam"], coverageStatus: "partial", overview: { vi: "Một thực thể lịch sử khu vực với trung tâm Angkor và quan hệ biến động với các xã hội láng giềng.", en: "A regional historical polity centred on Angkor with changing relations to neighbouring societies." }, sourceIds: ["unesco-angkor"] },
  { id: "great-zimbabwe", type: "historical-city", names: { vi: "Great Zimbabwe", en: "Great Zimbabwe" }, aliases: ["Đại Zimbabwe"], regions: ["africa"], modernAssociations: ["zimbabwe"], coverageStatus: "researched", overview: { vi: "Một thành phố đá và trung tâm thương mại - chính trị thời trung đại ở miền nam châu Phi.", en: "A stone-built city and medieval trade-political centre in southern Africa." }, sourceIds: ["unesco-great-zimbabwe"] },
  { id: "maori", type: "indigenous-people", names: { vi: "Người Māori", en: "Māori" }, aliases: ["Tangata whenua"], regions: ["oceania-pacific"], modernAssociations: ["new-zealand"], coverageStatus: "partial", overview: { vi: "Tangata whenua của Aotearoa; lịch sử của họ không bắt đầu từ chủ quyền thuộc địa hay nhà nước hiện đại.", en: "The tangata whenua of Aotearoa; their history does not begin with colonial sovereignty or the modern state." }, sourceIds: ["nzhistory-treaty"] },
  { id: "mongol-empire", type: "empire", names: { vi: "Đế chế Mông Cổ", en: "Mongol Empire" }, aliases: ["Mongol Empire"], regions: ["central-asia", "east-asia", "europe", "west-asia-middle-east"], modernAssociations: ["mongolia", "china", "russia", "iran"], coverageStatus: "partial", overview: { vi: "Một đế chế liên lục địa thay đổi mạnh theo các hãn quốc và thời kỳ.", en: "A transcontinental empire that changed markedly across khanates and periods." }, sourceIds: ["met-toah"] },
  { id: "mali-empire", type: "empire", names: { vi: "Đế chế Mali", en: "Mali Empire" }, aliases: ["Manden Kurufaba"], regions: ["africa"], modernAssociations: ["mali", "guinea", "senegal", "mauritania"], coverageStatus: "partial", overview: { vi: "Một đế chế Tây Phi có ảnh hưởng trong mạng lưới Sahara và Hồi giáo.", en: "A West African empire influential in Saharan and Islamic networks." }, sourceIds: ["met-toah", "seshat"] },
  { id: "inca", type: "empire", names: { vi: "Đế chế Inca", en: "Inca Empire" }, aliases: ["Tawantinsuyu"], regions: ["south-america"], modernAssociations: ["peru", "bolivia", "ecuador", "chile", "argentina", "colombia"], coverageStatus: "partial", overview: { vi: "Một đế chế Andes gắn với mạng lưới đường Qhapaq Ñan trên nhiều quốc gia ngày nay.", en: "An Andean empire linked by the Qhapaq Ñan road network across several present-day countries." }, sourceIds: ["unesco-qhapaq-nan"] },
  { id: "ottoman-empire", type: "empire", names: { vi: "Đế chế Ottoman", en: "Ottoman Empire" }, aliases: ["Ottoman Empire"], regions: ["europe", "west-asia-middle-east", "africa"], modernAssociations: ["turkiye", "greece", "egypt", "iraq", "syria"], coverageStatus: "partial", overview: { vi: "Một đế chế đa ngôn ngữ, đa tôn giáo với ranh giới thay đổi theo thời gian.", en: "A multilingual, multireligious empire with boundaries that changed over time." }, sourceIds: ["met-toah"] },
  { id: "mughal-empire", type: "empire", names: { vi: "Đế chế Mughal", en: "Mughal Empire" }, aliases: ["Mughal India"], regions: ["south-asia"], modernAssociations: ["india", "pakistan", "bangladesh", "afghanistan"], coverageStatus: "partial", overview: { vi: "Một đế chế Nam Á với các cấu trúc hành chính, văn hóa và kinh tế biến đổi.", en: "A South Asian empire with changing administrative, cultural, and economic structures." }, sourceIds: ["met-toah"] },
  { id: "tokugawa", type: "shogunate", names: { vi: "Mạc phủ Tokugawa", en: "Tokugawa shogunate" }, aliases: ["Edo shogunate"], regions: ["east-asia"], modernAssociations: ["japan"], coverageStatus: "partial", overview: { vi: "Chính quyền Mạc phủ ở Nhật Bản; không đồng nhất với nhà nước Nhật hiện đại.", en: "A shogunal government in Japan; not identical to the modern Japanese state." }, sourceIds: ["ndl-meiji"] },
  { id: "haiti", type: "contemporary-country", names: { vi: "Haiti", en: "Haiti" }, aliases: ["Saint-Domingue"], regions: ["caribbean"], modernAssociations: ["haiti"], coverageStatus: "partial", overview: { vi: "Lịch sử Haiti gồm xã hội Taíno, thuộc địa Saint-Domingue, cuộc cách mạng và nhà nước độc lập sau đó.", en: "Haiti's history includes Taíno societies, the colony of Saint-Domingue, revolution, and the later independent state." }, sourceIds: ["loc-world-history"] },
  { id: "vietnam", type: "contemporary-country", names: { vi: "Việt Nam", en: "Vietnam" }, aliases: ["Việt Nam Dân chủ Cộng hòa", "Democratic Republic of Vietnam"], regions: ["southeast-asia"], modernAssociations: ["vietnam"], coverageStatus: "partial", overview: { vi: "Dòng thời gian này chỉ có một số mốc khởi đầu; lịch sử các cộng đồng, vương triều và nhà nước trên lãnh thổ Việt Nam cần được mở rộng theo nguồn chuyên ngành.", en: "This timeline currently contains only a few starter records; histories of communities, dynasties, and states in the territory of Vietnam require expansion with specialist sources." }, sourceIds: ["loc-world-history"] },
  { id: "united-nations", type: "international-organization", names: { vi: "Liên Hợp Quốc", en: "United Nations" }, aliases: ["UN"], regions: ["cross-regional-global"], modernAssociations: [], coverageStatus: "researched", overview: { vi: "Một tổ chức liên chính phủ được lập theo Hiến chương năm 1945, không phải chính phủ thế giới.", en: "An intergovernmental organization founded under the 1945 Charter, not a world government." }, sourceIds: ["un-charter"] },
  { id: "african-union", type: "international-organization", names: { vi: "Liên minh châu Phi", en: "African Union" }, aliases: ["AU", "Organisation of African Unity", "OAU"], regions: ["africa", "cross-regional-global"], modernAssociations: [], coverageStatus: "researched", overview: { vi: "Một tổ chức lục địa ra mắt năm 2002, kế thừa Tổ chức Thống nhất châu Phi.", en: "A continental organization launched in 2002 as successor to the Organization of African Unity." }, sourceIds: ["african-union-history"] },
  { id: "world-health-organization", type: "international-organization", names: { vi: "Tổ chức Y tế Thế giới", en: "World Health Organization" }, aliases: ["WHO"], regions: ["cross-regional-global"], modernAssociations: [], coverageStatus: "researched", overview: { vi: "Tổ chức chuyên môn của Liên Hợp Quốc về y tế quốc tế; phạm vi và quyền hạn phụ thuộc các điều ước và quyết định của quốc gia thành viên.", en: "The UN specialized agency for international health; its scope and authority depend on treaties and member-state decisions." }, sourceIds: ["who-pandemic-agreement", "who-pandemic-resolution"] },
];

export const timelineEntities = [...baseTimelineEntities, ...timelineImportedEntities];

// A deliberately compact country/territory directory for the starter build.
// Entries marked "not-yet-researched" are visible gaps, not omissions disguised as completion.
const starterCountryRows = [
  ["algeria", "Algeria", "africa"], ["angola", "Angola", "africa"], ["benin", "Benin", "africa"], ["botswana", "Botswana", "africa"], ["burkina-faso", "Burkina Faso", "africa"], ["burundi", "Burundi", "africa"], ["cameroon", "Cameroon", "africa"], ["cape-verde", "Cabo Verde", "africa"], ["central-african-republic", "Central African Republic", "africa"], ["chad", "Chad", "africa"], ["comoros", "Comoros", "africa"], ["congo", "Republic of the Congo", "africa"], ["democratic-republic-of-the-congo", "Democratic Republic of the Congo", "africa"], ["djibouti", "Djibouti", "africa"], ["egypt", "Egypt", "africa"], ["equatorial-guinea", "Equatorial Guinea", "africa"], ["eritrea", "Eritrea", "africa"], ["eswatini", "Eswatini", "africa"], ["ethiopia", "Ethiopia", "africa"], ["gabon", "Gabon", "africa"], ["gambia", "The Gambia", "africa"], ["ghana", "Ghana", "africa"], ["guinea", "Guinea", "africa"], ["guinea-bissau", "Guinea-Bissau", "africa"], ["ivory-coast", "Côte d’Ivoire", "africa"], ["kenya", "Kenya", "africa"], ["lesotho", "Lesotho", "africa"], ["liberia", "Liberia", "africa"], ["libya", "Libya", "africa"], ["madagascar", "Madagascar", "africa"], ["malawi", "Malawi", "africa"], ["mali", "Mali", "africa"], ["mauritania", "Mauritania", "africa"], ["mauritius", "Mauritius", "africa"], ["morocco", "Morocco", "africa"], ["mozambique", "Mozambique", "africa"], ["namibia", "Namibia", "africa"], ["niger", "Niger", "africa"], ["nigeria", "Nigeria", "africa"], ["rwanda", "Rwanda", "africa"], ["sao-tome-and-principe", "São Tomé and Príncipe", "africa"], ["senegal", "Senegal", "africa"], ["seychelles", "Seychelles", "africa"], ["sierra-leone", "Sierra Leone", "africa"], ["somalia", "Somalia", "africa"], ["south-africa", "South Africa", "africa"], ["south-sudan", "South Sudan", "africa"], ["sudan", "Sudan", "africa"], ["tanzania", "Tanzania", "africa"], ["togo", "Togo", "africa"], ["tunisia", "Tunisia", "africa"], ["uganda", "Uganda", "africa"], ["zambia", "Zambia", "africa"], ["zimbabwe", "Zimbabwe", "africa"],
  ["china", "China", "east-asia"], ["japan", "Japan", "east-asia"], ["mongolia", "Mongolia", "east-asia"], ["north-korea", "North Korea", "east-asia"], ["south-korea", "South Korea", "east-asia"],
  ["brunei", "Brunei", "southeast-asia"], ["cambodia", "Cambodia", "southeast-asia"], ["indonesia", "Indonesia", "southeast-asia"], ["laos", "Laos", "southeast-asia"], ["malaysia", "Malaysia", "southeast-asia"], ["myanmar", "Myanmar", "southeast-asia"], ["philippines", "Philippines", "southeast-asia"], ["singapore", "Singapore", "southeast-asia"], ["thailand", "Thailand", "southeast-asia"], ["timor-leste", "Timor-Leste", "southeast-asia"], ["vietnam", "Vietnam", "southeast-asia"],
  ["afghanistan", "Afghanistan", "south-asia"], ["bangladesh", "Bangladesh", "south-asia"], ["bhutan", "Bhutan", "south-asia"], ["india", "India", "south-asia"], ["maldives", "Maldives", "south-asia"], ["nepal", "Nepal", "south-asia"], ["pakistan", "Pakistan", "south-asia"], ["sri-lanka", "Sri Lanka", "south-asia"],
  ["kazakhstan", "Kazakhstan", "central-asia"], ["kyrgyzstan", "Kyrgyzstan", "central-asia"], ["tajikistan", "Tajikistan", "central-asia"], ["turkmenistan", "Turkmenistan", "central-asia"], ["uzbekistan", "Uzbekistan", "central-asia"],
  ["armenia", "Armenia", "west-asia-middle-east"], ["azerbaijan", "Azerbaijan", "west-asia-middle-east"], ["bahrain", "Bahrain", "west-asia-middle-east"], ["cyprus", "Cyprus", "west-asia-middle-east"], ["georgia", "Georgia", "west-asia-middle-east"], ["iran", "Iran", "west-asia-middle-east"], ["iraq", "Iraq", "west-asia-middle-east"], ["israel", "Israel", "west-asia-middle-east"], ["jordan", "Jordan", "west-asia-middle-east"], ["kuwait", "Kuwait", "west-asia-middle-east"], ["lebanon", "Lebanon", "west-asia-middle-east"], ["oman", "Oman", "west-asia-middle-east"], ["qatar", "Qatar", "west-asia-middle-east"], ["saudi-arabia", "Saudi Arabia", "west-asia-middle-east"], ["syria", "Syria", "west-asia-middle-east"], ["turkiye", "Türkiye", "west-asia-middle-east"], ["united-arab-emirates", "United Arab Emirates", "west-asia-middle-east"], ["yemen", "Yemen", "west-asia-middle-east"], ["palestine", "Palestine", "west-asia-middle-east"],
  ["albania", "Albania", "europe"], ["andorra", "Andorra", "europe"], ["austria", "Austria", "europe"], ["belarus", "Belarus", "europe"], ["belgium", "Belgium", "europe"], ["bosnia-and-herzegovina", "Bosnia and Herzegovina", "europe"], ["bulgaria", "Bulgaria", "europe"], ["croatia", "Croatia", "europe"], ["czechia", "Czechia", "europe"], ["denmark", "Denmark", "europe"], ["estonia", "Estonia", "europe"], ["finland", "Finland", "europe"], ["france", "France", "europe"], ["germany", "Germany", "europe"], ["greece", "Greece", "europe"], ["hungary", "Hungary", "europe"], ["iceland", "Iceland", "europe"], ["ireland", "Ireland", "europe"], ["italy", "Italy", "europe"], ["latvia", "Latvia", "europe"], ["liechtenstein", "Liechtenstein", "europe"], ["lithuania", "Lithuania", "europe"], ["luxembourg", "Luxembourg", "europe"], ["malta", "Malta", "europe"], ["moldova", "Moldova", "europe"], ["monaco", "Monaco", "europe"], ["montenegro", "Montenegro", "europe"], ["netherlands", "Netherlands", "europe"], ["north-macedonia", "North Macedonia", "europe"], ["norway", "Norway", "europe"], ["poland", "Poland", "europe"], ["portugal", "Portugal", "europe"], ["romania", "Romania", "europe"], ["russia", "Russia", "europe"], ["san-marino", "San Marino", "europe"], ["serbia", "Serbia", "europe"], ["slovakia", "Slovakia", "europe"], ["slovenia", "Slovenia", "europe"], ["spain", "Spain", "europe"], ["sweden", "Sweden", "europe"], ["switzerland", "Switzerland", "europe"], ["ukraine", "Ukraine", "europe"], ["united-kingdom", "United Kingdom", "europe"], ["holy-see", "Holy See", "europe"],
  ["canada", "Canada", "north-america"], ["united-states", "United States", "north-america"],
  ["belize", "Belize", "central-america"], ["costa-rica", "Costa Rica", "central-america"], ["el-salvador", "El Salvador", "central-america"], ["guatemala", "Guatemala", "central-america"], ["honduras", "Honduras", "central-america"], ["mexico", "Mexico", "central-america"], ["nicaragua", "Nicaragua", "central-america"], ["panama", "Panama", "central-america"],
  ["antigua-and-barbuda", "Antigua and Barbuda", "caribbean"], ["bahamas", "Bahamas", "caribbean"], ["barbados", "Barbados", "caribbean"], ["cuba", "Cuba", "caribbean"], ["dominica", "Dominica", "caribbean"], ["dominican-republic", "Dominican Republic", "caribbean"], ["grenada", "Grenada", "caribbean"], ["haiti", "Haiti", "caribbean"], ["jamaica", "Jamaica", "caribbean"], ["saint-kitts-and-nevis", "Saint Kitts and Nevis", "caribbean"], ["saint-lucia", "Saint Lucia", "caribbean"], ["saint-vincent-and-the-grenadines", "Saint Vincent and the Grenadines", "caribbean"], ["trinidad-and-tobago", "Trinidad and Tobago", "caribbean"],
  ["argentina", "Argentina", "south-america"], ["bolivia", "Bolivia", "south-america"], ["brazil", "Brazil", "south-america"], ["chile", "Chile", "south-america"], ["colombia", "Colombia", "south-america"], ["ecuador", "Ecuador", "south-america"], ["guyana", "Guyana", "south-america"], ["paraguay", "Paraguay", "south-america"], ["peru", "Peru", "south-america"], ["suriname", "Suriname", "south-america"], ["uruguay", "Uruguay", "south-america"], ["venezuela", "Venezuela", "south-america"],
  ["australia", "Australia", "oceania-pacific"], ["fiji", "Fiji", "oceania-pacific"], ["kiribati", "Kiribati", "oceania-pacific"], ["marshall-islands", "Marshall Islands", "oceania-pacific"], ["micronesia", "Micronesia", "oceania-pacific"], ["nauru", "Nauru", "oceania-pacific"], ["new-zealand", "New Zealand / Aotearoa", "oceania-pacific"], ["palau", "Palau", "oceania-pacific"], ["papua-new-guinea", "Papua New Guinea", "oceania-pacific"], ["samoa", "Samoa", "oceania-pacific"], ["solomon-islands", "Solomon Islands", "oceania-pacific"], ["tonga", "Tonga", "oceania-pacific"], ["tuvalu", "Tuvalu", "oceania-pacific"], ["vanuatu", "Vanuatu", "oceania-pacific"],
];

const researchedCountryIds = new Set(["egypt", "ethiopia", "ghana", "mali", "sudan", "zimbabwe", "china", "japan", "mongolia", "cambodia", "indonesia", "vietnam", "india", "pakistan", "iran", "iraq", "turkiye", "italy", "greece", "france", "portugal", "united-kingdom", "united-states", "mexico", "haiti", "peru", "bolivia", "ecuador", "new-zealand", ...timelineImportedCountryIds]);

export const timelineCountryDirectory = starterCountryRows.map(([id, name, region]) => ({
  id,
  names: { vi: name, en: name },
  region,
  coverageStatus: researchedCountryIds.has(id) ? "partially-covered" : "not-yet-researched",
  sourceIds: researchedCountryIds.has(id) ? ["seshat"] : [],
}));

const event = ({
  id, slug, titleVi, titleEn, summaryVi, summaryEn, originalTitle = null, aliases = [],
  startYear, startDate = null, endYear = null, endDate = null,
  precision = "year", confidence = "high", calendarSystem = "proleptic-gregorian-for-sorting", period, categories, regions, entities = [],
  modern = [], locations = [], people = [], organizations = [], background = null,
  causes = null, developments = null, consequences = null, related = [], sources,
  disputes = [], verificationStatus = "source-backed", provenance = null, candidateId = null,
  importBatchId = null, sourceClaims = [], lastVerifiedAt = TIMELINE_LAST_VERIFIED_AT,
}) => ({
  id, slug,
  title: { vi: titleVi, en: titleEn },
  originalTitle,
  aliases,
  summary: { vi: summaryVi, en: summaryEn },
  startYear, startDate, endYear, endDate,
  datePrecision: precision,
  dateConfidence: confidence,
  calendarSystem,
  historicalPeriod: period,
  eventCategories: categories,
  regions,
  historicalEntities: entities,
  modernGeographicalAssociations: modern,
  locations,
  people,
  organizations,
  background,
  causes,
  developments,
  consequences,
  relatedEvents: related,
  sourceReferences: sources,
  scholarlyDisputes: disputes,
  verificationStatus,
  sourceClaims,
  provenance: provenance || (candidateId ? { candidateId, importBatchId } : null),
  lastVerifiedAt,
});

const baseTimelineEvents = [
  event({
    id: "emergence-homo-sapiens", slug: "nguoi-hien-dai-xuat-hien-o-chau-phi", titleVi: "Sự xuất hiện của Homo sapiens ở châu Phi", titleEn: "Homo sapiens emerges in Africa",
    summaryVi: "Bằng chứng hóa thạch và di truyền hiện có đặt nguồn gốc của người hiện đại ở châu Phi vào khoảng 300.000 năm trước; mốc và tuyến phát tán vẫn được cập nhật theo nghiên cứu mới.", summaryEn: "Current fossil and genetic evidence places the origins of modern humans in Africa around 300,000 years ago; dates and dispersal routes continue to be refined.",
    startYear: -300000, precision: "approximate", confidence: "medium", period: "prehistory", categories: ["migration-settlement", "science-technology"], regions: ["africa"], entities: ["homo-sapiens"], modern: [], locations: ["Africa"], sources: ["smithsonian-human-origins"], disputes: ["The archaeological and genetic record is continually refined; this is an approximate evidentiary horizon, not a single-day event."],
  }),
  event({
    id: "human-dispersal", slug: "con-nguoi-hien-dai-phan-tan-qua-cac-khu-vuc", titleVi: "Con người hiện đại phân tán qua nhiều khu vực", titleEn: "Modern humans disperse across multiple regions",
    summaryVi: "Trong nhiều đợt và theo những lộ trình còn tranh luận, các nhóm người hiện đại đã mở rộng ra ngoài châu Phi và đến nhiều phần của Á, Âu, châu Đại Dương rồi châu Mỹ.", summaryEn: "In multiple waves and along still-debated routes, modern human populations expanded beyond Africa into parts of Asia, Europe, Oceania, and later the Americas.",
    startYear: -70000, endYear: -15000, precision: "range", confidence: "medium", period: "prehistory", categories: ["migration-settlement", "local-regional"], regions: ["africa", "west-asia-middle-east", "east-asia", "europe", "oceania-pacific", "north-america", "south-america", "cross-regional-global"], entities: ["homo-sapiens"], sources: ["smithsonian-human-origins"], disputes: ["The timing and routes of dispersal differ by region and are active areas of research."],
  }),
  event({
    id: "catalhoyuk-settlement", slug: "dinh-cu-catalhoyuk", titleVi: "Định cư lâu dài tại Çatalhöyük", titleEn: "Long-term settlement at Çatalhöyük",
    summaryVi: "Các lớp cư trú thời Đồ đá mới tại Çatalhöyük cho thấy đời sống định cư, tổ chức xã hội và thực hành văn hóa kéo dài ở Anatolia.", summaryEn: "Neolithic occupation layers at Çatalhöyük document long-term settlement, social organization, and cultural practice in Anatolia.",
    startYear: -7400, endYear: -6200, precision: "range", confidence: "high", period: "prehistory", categories: ["migration-settlement", "local-regional"], regions: ["west-asia-middle-east"], entities: ["catalhoyuk"], modern: ["turkiye"], locations: ["Konya Plain, Anatolia"], sources: ["unesco-catalhoyuk"],
  }),
  event({
    id: "caral-supe", slug: "trung-tam-caral-supe", titleVi: "Sự phát triển của Caral-Supe", titleEn: "Development of Caral-Supe",
    summaryVi: "Caral-Supe là một trung tâm xã hội - chính trị thời Archaic muộn ở Andes trung tâm; niên đại của khu di chỉ được UNESCO đặt khoảng 3000–1800 TCN.", summaryEn: "Caral-Supe was a Late Archaic socio-political centre in the central Andes; UNESCO dates the site broadly to 3000–1800 BCE.",
    startYear: -3000, endYear: -1800, precision: "range", confidence: "high", period: "prehistory", categories: ["state-formation", "local-regional", "education-knowledge"], regions: ["south-america"], entities: ["caral-supe"], modern: ["peru"], locations: ["Supe Valley"], sources: ["unesco-caral"],
  }),
  event({
    id: "cuneiform-recordkeeping", slug: "he-thong-ghi-chep-chu-hinh-nem", titleVi: "Hệ thống ghi chép bằng chữ hình nêm", titleEn: "Cuneiform recordkeeping develops",
    summaryVi: "Các hình thức ghi chép bằng chữ hình nêm ở Lưỡng Hà là một phần của quá trình phát triển văn tự và lưu trữ; thời điểm và công dụng thay đổi theo địa điểm.", summaryEn: "Cuneiform recordkeeping in Mesopotamia formed part of the development of writing and archives; timing and use varied by place.",
    startYear: -3400, precision: "approximate", confidence: "medium", period: "ancient", categories: ["education-knowledge", "science-technology", "economy-trade"], regions: ["west-asia-middle-east"], entities: ["mesopotamia"], modern: ["iraq"], locations: ["Southern Mesopotamia"], sources: ["british-museum-collection", "met-toah"], disputes: ["Writing developed through multiple local practices; this record marks an approximate early horizon rather than a single invention date."], verificationStatus: "needs-review",
  }),
  event({
    id: "egypt-unification", slug: "hinh-thanh-nha-nuoc-ai-cap-co-dai", titleVi: "Hình thành nhà nước Ai Cập cổ đại", titleEn: "Formation of ancient Egyptian state structures",
    summaryVi: "Khoảng cuối thiên niên kỷ IV TCN, các quá trình tập trung quyền lực ở thung lũng Nile gắn với sự hình thành các vương triều đầu tiên của Ai Cập cổ đại.", summaryEn: "Around the end of the fourth millennium BCE, processes of political centralization in the Nile Valley became associated with the first dynasties of ancient Egypt.",
    startYear: -3100, precision: "approximate", confidence: "medium", period: "ancient", categories: ["state-formation", "dynasty-empire"], regions: ["africa"], entities: ["ancient-egypt"], modern: ["egypt"], locations: ["Nile Valley"], sources: ["met-toah"], disputes: ["Accounts of unification and named rulers blend archaeological evidence with later historical traditions."], verificationStatus: "needs-review",
  }),
  event({
    id: "indus-urbanism", slug: "do-thi-hoa-luu-vuc-song-an", titleVi: "Đô thị hóa ở lưu vực sông Ấn", titleEn: "Urbanism in the Indus Valley",
    summaryVi: "Các đô thị Harappa và Mohenjo-daro là một phần của mạng lưới đô thị lưu vực sông Ấn; việc đọc ký hiệu chưa giải mã khiến nhiều khía cạnh chính trị còn chưa chắc chắn.", summaryEn: "Harappa and Mohenjo-daro were part of an Indus urban network; an undeciphered script leaves many political questions unresolved.",
    startYear: -2600, endYear: -1900, precision: "range", confidence: "high", period: "ancient", categories: ["state-formation", "economy-trade", "education-knowledge"], regions: ["south-asia"], entities: ["indus-civilization"], modern: ["pakistan", "india"], locations: ["Indus Valley"], sources: ["met-toah"], disputes: ["Political organization cannot be inferred with certainty from urban form alone."], verificationStatus: "needs-review",
  }),
  event({
    id: "nok-culture", slug: "truyen-thong-nok-o-tay-phi", titleVi: "Truyền thống Nok ở Tây Phi", titleEn: "Nok tradition in West Africa",
    summaryVi: "Truyền thống Nok, nổi tiếng với tượng đất nung và bằng chứng luyện sắt, cho thấy sự phức tạp xã hội ở khu vực Nigeria ngày nay; không nên đồng nhất nó với một nhà nước đã biết rõ.", summaryEn: "The Nok tradition, known for terracotta sculpture and evidence of ironworking, indicates social complexity in present-day Nigeria; it should not be equated with a known single state.",
    startYear: -1500, endYear: 500, precision: "range", confidence: "medium", period: "ancient", categories: ["science-technology", "religion-culture", "local-regional"], regions: ["africa"], modern: ["nigeria"], locations: ["Central Nigeria"], sources: ["met-toah", "seshat"], verificationStatus: "needs-review",
  }),
  event({
    id: "shang-dynasty", slug: "nha-thuong-va-van-tu-giap-cot", titleVi: "Nhà Thương và văn tự giáp cốt", titleEn: "Shang dynasty and oracle-bone inscriptions",
    summaryVi: "Bằng chứng khảo cổ và văn tự giáp cốt ghi lại một triều đại ở miền bắc Trung Quốc, đồng thời cho thấy các thực hành nghi lễ và quản trị thời kỳ đầu.", summaryEn: "Archaeology and oracle-bone inscriptions document a dynasty in northern China and early practices of ritual and governance.",
    startYear: -1600, endYear: -1046, precision: "range", confidence: "medium", period: "ancient", categories: ["dynasty-empire", "education-knowledge", "religion-culture"], regions: ["east-asia"], entities: ["shang"], modern: ["china"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "olmec-centres", slug: "cac-trung-tam-olmec", titleVi: "Các trung tâm nghi lễ Olmec", titleEn: "Olmec ceremonial centres",
    summaryVi: "Các trung tâm Olmec ở vùng Vịnh Mexico cho thấy mạng lưới nghi lễ, trao đổi và sản xuất nghệ thuật có ảnh hưởng ở Trung Mỹ tiền Colombo.", summaryEn: "Olmec centres on Mexico's Gulf Coast indicate ceremonial, exchange, and artistic networks in pre-Columbian Mesoamerica.",
    startYear: -1400, endYear: -400, precision: "range", confidence: "medium", period: "ancient", categories: ["religion-culture", "economy-trade", "local-regional"], regions: ["central-america"], entities: ["olmec"], modern: ["mexico"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "lapita-expansion", slug: "mang-luoi-lapita-o-thai-binh-duong", titleVi: "Mạng lưới Lapita ở Thái Bình Dương", titleEn: "Lapita networks in the Pacific",
    summaryVi: "Đồ gốm và các di chỉ Lapita giúp nghiên cứu các mạng lưới hàng hải, định cư và trao đổi ở Tây Thái Bình Dương; các tuyến và niên đại cụ thể vẫn được tinh chỉnh.", summaryEn: "Lapita ceramics and sites inform research on maritime, settlement, and exchange networks in the western Pacific; routes and dates continue to be refined.",
    startYear: -1350, endYear: -750, precision: "range", confidence: "medium", period: "ancient", categories: ["migration-settlement", "economy-trade", "religion-culture"], regions: ["oceania-pacific"], entities: ["lapita"], modern: ["papua-new-guinea", "solomon-islands", "vanuatu", "fiji", "tonga", "samoa"], sources: ["met-toah", "seshat"], verificationStatus: "needs-review",
  }),
  event({
    id: "kush-napata", slug: "vuong-quoc-kush-va-napata", titleVi: "Vương quốc Kush và Napata", titleEn: "Kingdom of Kush and Napata",
    summaryVi: "Các thực thể Kush ở Nubia đã phát triển quan hệ chính trị, thương mại và văn hóa phức tạp dọc Nile, gồm cả thời kỳ cai trị Ai Cập.", summaryEn: "Kushite polities in Nubia developed complex political, trade, and cultural relations along the Nile, including periods of rule in Egypt.",
    startYear: -800, endYear: -300, precision: "range", confidence: "medium", period: "ancient", categories: ["dynasty-empire", "economy-trade", "local-regional"], regions: ["africa"], entities: ["kingdom-of-kush"], modern: ["sudan", "egypt"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "achaemenid-empire", slug: "hinh-thanh-de-che-achaemenid", titleVi: "Hình thành Đế chế Achaemenid", titleEn: "Formation of the Achaemenid Empire",
    summaryVi: "Từ giữa thế kỷ VI TCN, nhà Achaemenid xây dựng một đế chế liên vùng với các hình thức quản trị và kết nối hạ tầng thay đổi theo thời kỳ.", summaryEn: "From the mid-sixth century BCE, Achaemenid rulers built a cross-regional empire with changing practices of governance and infrastructure." ,
    startYear: -550, precision: "year", confidence: "medium", period: "ancient", categories: ["dynasty-empire", "state-formation", "economy-trade"], regions: ["west-asia-middle-east", "central-asia", "europe", "africa"], entities: ["achaemenid"], modern: ["iran", "iraq", "turkiye", "egypt"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "maurya-empire", slug: "hinh-thanh-de-che-maurya", titleVi: "Hình thành Đế chế Maurya", titleEn: "Formation of the Maurya Empire",
    summaryVi: "Đế chế Maurya là một trong các thực thể chính trị lớn của Nam Á cổ đại; quy mô và cơ cấu thay đổi qua các đời cai trị.", summaryEn: "The Maurya Empire was one of ancient South Asia's major political formations; its scale and organization changed across rulers.",
    startYear: -322, precision: "year", confidence: "medium", period: "ancient", categories: ["state-formation", "dynasty-empire"], regions: ["south-asia"], entities: ["maurya"], modern: ["india", "pakistan", "bangladesh", "afghanistan"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "qin-unification", slug: "nha-tan-thong-nhat-cac-nuoc-chien-quoc", titleVi: "Nhà Tần thống nhất các nước Chiến Quốc", titleEn: "Qin unifies the Warring States",
    summaryVi: "Năm 221 TCN thường được dùng để đánh dấu việc nhà Tần thống nhất các nước Chiến Quốc; việc này không đồng nghĩa với một quá trình đồng nhất văn hóa hay lãnh thổ hoàn tất.", summaryEn: "221 BCE is commonly used to mark Qin unification of the Warring States; it did not mean cultural or territorial uniformity was complete.",
    startYear: -221, precision: "year", confidence: "high", period: "ancient", categories: ["state-formation", "dynasty-empire", "law-constitution"], regions: ["east-asia"], entities: ["qin"], modern: ["china"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "roman-empire", slug: "su-hinh-thanh-de-che-la-ma", titleVi: "Sự hình thành Đế chế La Mã", titleEn: "Formation of the Roman Empire",
    summaryVi: "Năm 27 TCN thường được dùng để đánh dấu trật tự chính trị mới dưới Augustus; các thiết chế cộng hòa và đế chế cùng tồn tại, thay đổi qua thời gian.", summaryEn: "27 BCE is commonly used to mark a new political order under Augustus; republican and imperial institutions coexisted and changed over time.",
    startYear: -27, precision: "year", confidence: "medium", period: "ancient", categories: ["state-formation", "dynasty-empire", "law-constitution"], regions: ["europe", "west-asia-middle-east", "africa"], entities: ["roman-empire"], modern: ["italy", "greece", "turkiye", "egypt", "tunisia"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "axum-red-sea", slug: "aksum-va-mang-luoi-bien-do", titleVi: "Aksum trong mạng lưới Biển Đỏ", titleEn: "Aksum in Red Sea networks",
    summaryVi: "Khoảng các thế kỷ đầu Công nguyên, Aksum trở thành một trung tâm chính trị và thương mại quan trọng ở Sừng châu Phi, gắn với các mạng lưới Biển Đỏ và Ấn Độ Dương.", summaryEn: "In the early centuries CE, Aksum became an important political and commercial centre in the Horn of Africa, linked to Red Sea and Indian Ocean networks.",
    startYear: 100, endYear: 400, precision: "range", confidence: "medium", period: "ancient", categories: ["state-formation", "economy-trade", "religion-culture"], regions: ["africa", "west-asia-middle-east"], entities: ["axum"], modern: ["ethiopia", "eritrea"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "teotihuacan-growth", slug: "teotihuacan-phat-trien-thanh-do-thi", titleVi: "Teotihuacan phát triển thành đô thị lớn", titleEn: "Teotihuacan develops as a major city",
    summaryVi: "Teotihuacan trở thành một trung tâm đô thị lớn tại Trung Mỹ; ảnh hưởng của thành phố được nhận thấy trong nghệ thuật và trao đổi, còn nhiều mặt về quyền lực vẫn được tranh luận.", summaryEn: "Teotihuacan became a major Mesoamerican urban centre; its influence is visible in art and exchange, while many aspects of power remain debated.",
    startYear: 100, endYear: 550, precision: "range", confidence: "medium", period: "ancient", categories: ["state-formation", "economy-trade", "religion-culture"], regions: ["central-america"], entities: ["teotihuacan"], modern: ["mexico"], sources: ["met-toah"], disputes: ["The city's political organization, population composition, and causes of decline remain debated."], verificationStatus: "needs-review",
  }),
  event({
    id: "hijra", slug: "hijra-tu-mecca-den-medina", titleVi: "Hijra từ Mecca đến Medina", titleEn: "Hijra from Mecca to Medina",
    summaryVi: "Năm 622, cuộc di cư của Muhammad và các tín đồ từ Mecca đến Medina trở thành mốc quan trọng trong lịch Hồi giáo và sự hình thành cộng đồng chính trị - tôn giáo đầu tiên tại Medina.", summaryEn: "In 622, Muhammad's migration with followers from Mecca to Medina became a key marker in the Islamic calendar and in the formation of a politico-religious community in Medina.",
    startYear: 622, precision: "year", confidence: "high", period: "classical-postclassical", categories: ["religion-culture", "state-formation", "migration-settlement"], regions: ["west-asia-middle-east"], modern: ["saudi-arabia"], locations: ["Mecca and Medina"], people: ["Muhammad"], sources: ["british-museum-collection", "met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "srivijaya-networks", slug: "srivijaya-va-mang-luoi-hang-hai", titleVi: "Srivijaya và mạng lưới hàng hải", titleEn: "Srivijaya and maritime networks",
    summaryVi: "Từ khoảng thế kỷ VII, Srivijaya gắn với các cảng, Phật giáo và tuyến thương mại qua eo biển Malacca; tính chất chính xác của quyền lực này vẫn được các học giả thảo luận.", summaryEn: "From around the seventh century, Srivijaya was linked to ports, Buddhism, and trade through the Malacca Strait; scholars continue to debate the precise nature of its power.",
    startYear: 671, endYear: 1025, precision: "range", confidence: "medium", period: "classical-postclassical", categories: ["economy-trade", "state-formation", "religion-culture"], regions: ["southeast-asia", "south-asia", "east-asia"], entities: ["srivijaya"], modern: ["indonesia", "malaysia", "thailand"], sources: ["met-toah", "seshat"], disputes: ["Srivijaya is often described as an empire, but its political form and territorial reach should not be oversimplified."], verificationStatus: "needs-review",
  }),
  event({
    id: "ghana-empire", slug: "wagadu-de-che-ghana-lich-su", titleVi: "Wagadu / Đế chế Ghana lịch sử", titleEn: "Wagadu / historical Ghana Empire",
    summaryVi: "Từ khoảng thế kỷ VIII, Wagadu thường được gọi là Đế chế Ghana trong tư liệu sau này, giữ vai trò trong thương mại Sahara; không đồng nhất với Ghana hiện đại.", summaryEn: "From around the eighth century, Wagadu is often called the Ghana Empire in later sources and played a role in Saharan trade; it is not identical to modern Ghana.",
    startYear: 700, endYear: 1200, precision: "range", confidence: "medium", period: "classical-postclassical", categories: ["dynasty-empire", "economy-trade", "local-regional"], regions: ["africa"], entities: ["ghana-empire"], modern: ["mauritania", "mali", "senegal"], sources: ["met-toah", "seshat"], disputes: ["Terminology and chronology vary across Arabic sources, archaeology, and later histories."], verificationStatus: "needs-review",
  }),
  event({
    id: "angkor-empire", slug: "angkor-va-de-che-khmer", titleVi: "Angkor và Đế chế Khmer", titleEn: "Angkor and the Khmer Empire",
    summaryVi: "Năm 802 thường được liên hệ với sự củng cố quyền lực của Jayavarman II; Angkor sau đó trở thành một cảnh quan đô thị - tôn giáo lớn ở Đông Nam Á.", summaryEn: "802 is commonly linked to Jayavarman II's consolidation of power; Angkor subsequently became a major urban-religious landscape in Southeast Asia.",
    startYear: 802, precision: "year", confidence: "medium", period: "classical-postclassical", categories: ["dynasty-empire", "religion-culture", "state-formation"], regions: ["southeast-asia"], entities: ["khmer-empire"], modern: ["cambodia", "thailand", "laos", "vietnam"], locations: ["Angkor"], people: ["Jayavarman II"], sources: ["unesco-angkor"],
  }),
  event({
    id: "great-zimbabwe", slug: "great-zimbabwe-trung-tam-da-va-thuong-mai", titleVi: "Great Zimbabwe: trung tâm đá và thương mại", titleEn: "Great Zimbabwe: stone-built trade centre",
    summaryVi: "Great Zimbabwe phát triển thành một trung tâm xây dựng đá và trao đổi ở miền nam châu Phi; các diễn giải về tổ chức chính trị cần dựa trên khảo cổ học, không dựa trên các huyền thoại thuộc địa cũ.", summaryEn: "Great Zimbabwe developed as a stone-built and exchange centre in southern Africa; interpretations of political organization should rely on archaeology, not older colonial myths.",
    startYear: 1100, endYear: 1450, precision: "range", confidence: "high", period: "classical-postclassical", categories: ["state-formation", "economy-trade", "religion-culture"], regions: ["africa"], entities: ["great-zimbabwe"], modern: ["zimbabwe"], sources: ["unesco-great-zimbabwe"],
  }),
  event({
    id: "maori-settlement", slug: "dinh-cu-maori-tai-aotearoa", titleVi: "Định cư Māori tại Aotearoa", titleEn: "Māori settlement of Aotearoa",
    summaryVi: "Các cộng đồng Polynesia tổ tiên của người Māori đã định cư tại Aotearoa trong thời Trung cổ muộn; thời điểm cụ thể được suy ra từ nhiều loại bằng chứng và có biên độ.", summaryEn: "Polynesian ancestors of Māori settled Aotearoa in the later medieval period; the precise timing is inferred from several kinds of evidence and has a range.",
    startYear: 1250, endYear: 1350, precision: "range", confidence: "medium", period: "classical-postclassical", categories: ["migration-settlement", "local-regional", "religion-culture"], regions: ["oceania-pacific"], entities: ["maori"], modern: ["new-zealand"], sources: ["nzhistory-treaty", "seshat"], disputes: ["Dating is presented as a range because archaeological and environmental evidence is interpreted in different ways."], verificationStatus: "needs-review",
  }),
  event({
    id: "mongol-empire", slug: "hinh-thanh-de-che-mong-co", titleVi: "Hình thành Đế chế Mông Cổ", titleEn: "Formation of the Mongol Empire",
    summaryVi: "Năm 1206, Temüjin được tôn xưng là Genghis Khan; các cuộc mở rộng sau đó tạo ra một đế chế liên lục địa và những hãn quốc có lịch sử riêng.", summaryEn: "In 1206, Temüjin was proclaimed Genghis Khan; subsequent expansions created a transcontinental empire and khanates with distinct histories.",
    startYear: 1206, precision: "year", confidence: "high", period: "classical-postclassical", categories: ["dynasty-empire", "conflict-peace", "economy-trade"], regions: ["central-asia", "east-asia", "europe", "west-asia-middle-east"], entities: ["mongol-empire"], modern: ["mongolia", "china", "russia", "iran"], people: ["Genghis Khan"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "mali-empire", slug: "mali-de-che-va-mang-luoi-sahara", titleVi: "Đế chế Mali và mạng lưới Sahara", titleEn: "Mali Empire and Saharan networks",
    summaryVi: "Đế chế Mali phát triển ở Tây Phi trong thế kỷ XIII, gắn với thương mại Sahara, các đô thị tri thức và các truyền thống địa phương đa dạng.", summaryEn: "The Mali Empire developed in West Africa in the thirteenth century, linked to Saharan trade, centres of learning, and diverse local traditions.",
    startYear: 1235, precision: "approximate", confidence: "medium", period: "classical-postclassical", categories: ["dynasty-empire", "economy-trade", "education-knowledge"], regions: ["africa"], entities: ["mali-empire"], modern: ["mali", "guinea", "senegal", "mauritania"], sources: ["met-toah", "seshat"], disputes: ["Founding narratives and dates draw on oral traditions and later written sources that require contextual reading."], verificationStatus: "needs-review",
  }),
  event({
    id: "inca-expansion", slug: "tawantinsuyu-va-mang-luoi-qhapaq-nan", titleVi: "Tawantinsuyu và mạng lưới Qhapaq Ñan", titleEn: "Tawantinsuyu and the Qhapaq Ñan network",
    summaryVi: "Trong thế kỷ XV, quyền lực Inca mở rộng ở Andes; mạng lưới Qhapaq Ñan kết nối các vùng địa hình và cộng đồng qua nhiều lãnh thổ hiện nay.", summaryEn: "During the fifteenth century, Inca power expanded in the Andes; the Qhapaq Ñan network connected terrain and communities across several present-day territories.",
    startYear: 1438, precision: "approximate", confidence: "medium", period: "classical-postclassical", categories: ["dynasty-empire", "economy-trade", "migration-settlement"], regions: ["south-america"], entities: ["inca"], modern: ["peru", "bolivia", "ecuador", "chile", "argentina", "colombia"], sources: ["unesco-qhapaq-nan"],
  }),
  event({
    id: "ming-voyages", slug: "cac-chuyen-hai-trinh-nha-minh", titleVi: "Các chuyến hải trình nhà Minh", titleEn: "Ming maritime voyages",
    summaryVi: "Từ 1405, các đoàn thuyền dưới quyền Zheng He đã đi qua Ấn Độ Dương, tạo ra những tiếp xúc ngoại giao và thương mại mà không thể thu gọn thành câu chuyện 'khám phá' theo một hướng.", summaryEn: "From 1405, fleets under Zheng He travelled through the Indian Ocean, creating diplomatic and commercial contacts that cannot be reduced to a one-directional story of 'discovery'.",
    startYear: 1405, endYear: 1433, precision: "range", confidence: "high", period: "early-modern", categories: ["diplomacy-treaty", "economy-trade", "science-technology"], regions: ["east-asia", "southeast-asia", "south-asia", "west-asia-middle-east", "africa"], modern: ["china", "indonesia", "india", "sri-lanka", "kenya"], people: ["Zheng He"], sources: ["met-toah", "british-museum-collection"], verificationStatus: "needs-review",
  }),
  event({
    id: "constantinople-1453", slug: "ottoman-chiem-constantinople", titleVi: "Ottoman chiếm Constantinople", titleEn: "Ottoman capture of Constantinople",
    summaryVi: "Năm 1453, lực lượng Ottoman chiếm Constantinople; sự kiện này là một bước ngoặt của khu vực Địa Trung Hải - Đông Nam Âu, không phải ranh giới đơn giản giữa 'trung cổ' và 'cận đại' cho toàn thế giới.", summaryEn: "In 1453, Ottoman forces captured Constantinople; it was a regional Mediterranean–southeast European turning point, not a simple global boundary between 'medieval' and 'modern'.",
    startYear: 1453, precision: "year", confidence: "high", period: "early-modern", categories: ["conflict-peace", "dynasty-empire", "borders-sovereignty"], regions: ["europe", "west-asia-middle-east"], entities: ["ottoman-empire"], modern: ["turkiye", "greece"], locations: ["Constantinople / Istanbul"], sources: ["met-toah", "british-museum-collection"], verificationStatus: "needs-review",
  }),
  event({
    id: "atlantic-colonial-encounter", slug: "cac-cuoc-tiep-xuc-va-xam-luoc-dai-tay-duong", titleVi: "Các cuộc tiếp xúc và xâm lược xuyên Đại Tây Dương", titleEn: "Transatlantic encounters and invasions",
    summaryVi: "Từ 1492, các cuộc xâm lược, định cư và trao đổi xuyên Đại Tây Dương đã biến đổi sâu sắc xã hội bản địa, hệ sinh thái, lao động và quyền lực ở châu Mỹ, châu Phi và châu Âu.", summaryEn: "From 1492, transatlantic invasions, settlement, and exchange profoundly transformed Indigenous societies, ecologies, labor, and power in the Americas, Africa, and Europe.",
    startYear: 1492, precision: "year", confidence: "high", period: "early-modern", categories: ["migration-settlement", "borders-sovereignty", "economy-trade", "conflict-peace"], regions: ["europe", "caribbean", "north-america", "central-america", "south-america", "africa", "cross-regional-global"], modern: ["spain", "bahamas", "cuba", "haiti", "mexico"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "cape-route-indian-ocean", slug: "tuyen-bien-chau-au-an-do-duong", titleVi: "Tuyến biển châu Âu – Ấn Độ Dương", titleEn: "European–Indian Ocean sea route",
    summaryVi: "Các chuyến đi biển của Bồ Đào Nha cuối thế kỷ XV kết nối trực tiếp hơn châu Âu với Ấn Độ Dương, chồng lên các mạng lưới thương mại đã tồn tại từ lâu.", summaryEn: "Portuguese voyages in the late fifteenth century connected Europe more directly with the Indian Ocean, overlaying trade networks that had long existed.",
    startYear: 1498, precision: "year", confidence: "high", period: "early-modern", categories: ["economy-trade", "diplomacy-treaty", "science-technology"], regions: ["europe", "africa", "south-asia", "west-asia-middle-east"], modern: ["portugal", "south-africa", "india"], sources: ["met-toah", "british-museum-collection"], verificationStatus: "needs-review",
  }),
  event({
    id: "mughal-empire", slug: "hinh-thanh-de-che-mughal", titleVi: "Hình thành Đế chế Mughal", titleEn: "Formation of the Mughal Empire",
    summaryVi: "Sau trận Panipat năm 1526, Babur đặt nền cho một đế chế Nam Á mà thiết chế, văn hóa và lãnh thổ biến đổi qua nhiều thế hệ.", summaryEn: "After the 1526 Battle of Panipat, Babur laid the basis for a South Asian empire whose institutions, culture, and territory changed across generations.",
    startYear: 1526, precision: "year", confidence: "high", period: "early-modern", categories: ["dynasty-empire", "state-formation", "religion-culture"], regions: ["south-asia"], entities: ["mughal-empire"], modern: ["india", "pakistan", "bangladesh", "afghanistan"], people: ["Babur"], sources: ["met-toah"], verificationStatus: "needs-review",
  }),
  event({
    id: "tokugawa-shogunate", slug: "mac-phu-tokugawa", titleVi: "Mạc phủ Tokugawa", titleEn: "Tokugawa shogunate",
    summaryVi: "Năm 1603, Tokugawa Ieyasu được bổ nhiệm làm shōgun, mở đầu một chế độ mạc phủ thường được gọi là thời Edo; các chính sách đối ngoại và xã hội biến đổi theo thế kỷ.", summaryEn: "In 1603, Tokugawa Ieyasu was appointed shōgun, beginning the Edo shogunate; foreign and social policies changed across the centuries.",
    startYear: 1603, precision: "year", confidence: "high", period: "early-modern", categories: ["state-formation", "dynasty-empire", "law-constitution"], regions: ["east-asia"], entities: ["tokugawa"], modern: ["japan"], people: ["Tokugawa Ieyasu"], sources: ["ndl-meiji"],
  }),
  event({
    id: "us-declaration", slug: "tuyen-ngon-doc-lap-hoa-ky", titleVi: "Tuyên ngôn Độc lập Hoa Kỳ", titleEn: "United States Declaration of Independence",
    summaryVi: "Ngày 4 tháng 7 năm 1776, Đại hội Lục địa thông qua Tuyên ngôn Độc lập. Văn bản này là một nguồn sơ cấp; tác động và các giới hạn của nó cần được đọc cùng lịch sử bản địa, nô lệ và quyền công dân.", summaryEn: "On 4 July 1776, the Continental Congress adopted the Declaration of Independence. It is a primary source whose impact and limits need to be read alongside Indigenous history, slavery, and citizenship.",
    startYear: 1776, startDate: "1776-07-04", precision: "day", confidence: "high", period: "modern", categories: ["independence-decolonization", "law-constitution", "movement-revolution"], regions: ["north-america"], modern: ["united-states"], sources: ["nara-declaration"],
  }),
  event({
    id: "french-revolution", slug: "cach-mang-phap", titleVi: "Cách mạng Pháp", titleEn: "French Revolution",
    summaryVi: "Cuộc cách mạng bắt đầu năm 1789 làm thay đổi thể chế, quyền công dân và trật tự xã hội ở Pháp, đồng thời tạo hiệu ứng xuyên quốc gia; các cách giải thích vẫn rất đa dạng.", summaryEn: "The revolution beginning in 1789 transformed institutions, citizenship, and social order in France and had transnational effects; interpretations remain highly diverse.",
    startYear: 1789, endYear: 1799, precision: "range", confidence: "high", period: "modern", categories: ["movement-revolution", "law-constitution", "social-rights"], regions: ["europe", "caribbean", "cross-regional-global"], modern: ["france", "haiti"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "haitian-revolution", slug: "cach-mang-haiti", titleVi: "Cách mạng Haiti", titleEn: "Haitian Revolution",
    summaryVi: "Từ 1791 đến 1804, cuộc cách mạng ở Saint-Domingue dẫn tới sự ra đời của Haiti độc lập, thách thức chế độ nô lệ và trật tự thuộc địa Đại Tây Dương.", summaryEn: "From 1791 to 1804, revolution in Saint-Domingue led to independent Haiti, challenging slavery and the Atlantic colonial order.",
    startYear: 1791, endYear: 1804, precision: "range", confidence: "high", period: "modern", categories: ["movement-revolution", "independence-decolonization", "social-rights"], regions: ["caribbean", "north-america", "europe", "africa"], entities: ["haiti"], modern: ["haiti", "france"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "abolition-slavery-act", slug: "dao-luat-xoa-bo-no-le-1833", titleVi: "Đạo luật xóa bỏ chế độ nô lệ năm 1833", titleEn: "Slavery Abolition Act 1833",
    summaryVi: "Đạo luật của Nghị viện Anh năm 1833 bãi bỏ chế độ nô lệ trong phần lớn Đế quốc Anh, nhưng không kết thúc ngay tình trạng cưỡng bức lao động, bất bình đẳng hay lịch sử bồi thường cho chủ nô.", summaryEn: "The 1833 Act of the UK Parliament abolished slavery in most of the British Empire, but did not immediately end coerced labor, inequality, or the history of compensation to enslavers.",
    startYear: 1833, precision: "year", confidence: "high", period: "modern", categories: ["law-constitution", "social-rights", "labor-organization"], regions: ["europe", "caribbean", "africa", "cross-regional-global"], modern: ["united-kingdom", "jamaica", "barbados", "guyana"], sources: ["uk-parliament-abolition"],
  }),
  event({
    id: "treaty-of-waitangi", slug: "hiep-uoc-waitangi", titleVi: "Hiệp ước Waitangi", titleEn: "Treaty of Waitangi",
    summaryVi: "Năm 1840, đại diện Vương quyền Anh và nhiều rangatira Māori ký các văn bản tiếng Anh và tiếng Māori có khác biệt quan trọng. Việc diễn giải, chủ quyền và bồi thường vẫn là vấn đề trung tâm.", summaryEn: "In 1840, representatives of the British Crown and many Māori rangatira signed English and Māori texts with important differences. Interpretation, sovereignty, and redress remain central issues.",
    startYear: 1840, precision: "year", confidence: "high", period: "modern", categories: ["diplomacy-treaty", "borders-sovereignty", "independence-decolonization"], regions: ["oceania-pacific"], entities: ["maori"], modern: ["new-zealand", "united-kingdom"], sources: ["nzhistory-treaty"], disputes: ["The English and Māori texts differ, especially around sovereignty and governance; this entry does not collapse them into one meaning."],
  }),
  event({
    id: "meiji-restoration", slug: "duy-tan-minh-tri", titleVi: "Duy tân Minh Trị", titleEn: "Meiji Restoration",
    summaryVi: "Năm 1868 mở đầu một quá trình thay đổi quyền lực và hiện đại hóa ở Nhật Bản, không phải một sự kiện đơn lẻ hoàn tất ngay trong năm đó.", summaryEn: "1868 began a process of political transformation and modernization in Japan, not a single event completed within that year.",
    startYear: 1868, precision: "year", confidence: "high", period: "modern", categories: ["state-formation", "law-constitution", "science-technology"], regions: ["east-asia"], modern: ["japan"], people: ["Emperor Meiji"], sources: ["ndl-meiji"],
  }),
  event({
    id: "berlin-conference", slug: "hoi-nghi-berlin-1884-1885", titleVi: "Hội nghị Berlin 1884–1885", titleEn: "Berlin Conference of 1884–1885",
    summaryVi: "Hội nghị Berlin quy tụ các cường quốc châu Âu để quy định một số nguyên tắc về yêu sách thuộc địa ở châu Phi, trong bối cảnh các xã hội châu Phi không phải là bên bình đẳng của bàn đàm phán.", summaryEn: "The Berlin Conference brought European powers together to set some rules for colonial claims in Africa, while African societies were not equal parties to the negotiations.",
    startYear: 1884, endYear: 1885, precision: "range", confidence: "high", period: "modern", categories: ["diplomacy-treaty", "borders-sovereignty", "independence-decolonization"], regions: ["europe", "africa"], modern: ["germany", "congo", "angola", "namibia"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "new-zealand-suffrage", slug: "nu-gioi-new-zealand-duoc-bo-phieu", titleVi: "Phụ nữ New Zealand được quyền bầu cử", titleEn: "Women gain parliamentary suffrage in New Zealand",
    summaryVi: "Đạo luật Bầu cử 1893 trao quyền bỏ phiếu trong bầu cử nghị viện cho phụ nữ trưởng thành ở New Zealand với một số ngoại lệ; đây là kết quả của vận động lâu dài, gồm cả tiếng nói Māori và Pākehā.", summaryEn: "The Electoral Act 1893 extended parliamentary voting rights to adult women in New Zealand with some exceptions; it followed long campaigning that included Māori and Pākehā voices.",
    startYear: 1893, precision: "year", confidence: "high", period: "modern", categories: ["elections-government", "social-rights", "movement-revolution"], regions: ["oceania-pacific"], modern: ["new-zealand"], sources: ["nzhistory-suffrage"],
  }),
  event({
    id: "ilo-founded", slug: "thanh-lap-to-chuc-lao-dong-quoc-te", titleVi: "Thành lập Tổ chức Lao động Quốc tế", titleEn: "International Labour Organization is founded",
    summaryVi: "Năm 1919, Tổ chức Lao động Quốc tế được lập trong bối cảnh hậu chiến, đưa các vấn đề lao động và công bằng xã hội vào một khuôn khổ hợp tác quốc tế.", summaryEn: "In 1919, the International Labour Organization was founded in the postwar context, bringing labor and social justice into an international cooperation framework.",
    startYear: 1919, precision: "year", confidence: "high", period: "modern", categories: ["labor-organization", "international-organization", "social-rights"], regions: ["cross-regional-global"], organizations: ["International Labour Organization"], sources: ["ilo-history"],
  }),
  event({
    id: "un-charter-1945", slug: "hien-chuong-lien-hop-quoc-1945", titleVi: "Hiến chương Liên Hợp Quốc có hiệu lực", titleEn: "United Nations Charter enters into force",
    summaryVi: "Ngày 24 tháng 10 năm 1945, Hiến chương Liên Hợp Quốc có hiệu lực. Hiến chương thiết lập một tổ chức liên chính phủ với các mục đích, cơ quan và giới hạn được nêu trong văn bản.", summaryEn: "On 24 October 1945, the UN Charter entered into force. The Charter established an intergovernmental organization with purposes, organs, and limits set out in its text.",
    startYear: 1945, startDate: "1945-10-24", precision: "day", confidence: "high", period: "contemporary", categories: ["international-organization", "diplomacy-treaty", "conflict-peace"], regions: ["cross-regional-global"], entities: ["united-nations"], organizations: ["United Nations"], sources: ["un-charter"], related: ["udhr-1948", "un-decolonization-1960", "sdgs-2015"],
  }),
  event({
    id: "vietnam-declaration-1945", slug: "tuyen-ngon-doc-lap-viet-nam-1945", titleVi: "Tuyên ngôn Độc lập Việt Nam năm 1945", titleEn: "Vietnamese Declaration of Independence, 1945",
    summaryVi: "Ngày 2 tháng 9 năm 1945, Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Hà Nội, tuyên bố thành lập Việt Nam Dân chủ Cộng hòa; bối cảnh quốc tế và diễn biến chủ quyền tiếp tục được đọc qua nhiều nguồn.", summaryEn: "On 2 September 1945, Hồ Chí Minh proclaimed the Democratic Republic of Vietnam in Hanoi; international context and subsequent sovereignty developments require reading across sources.",
    startYear: 1945, startDate: "1945-09-02", precision: "day", confidence: "high", period: "contemporary", categories: ["independence-decolonization", "state-formation", "law-constitution"], regions: ["southeast-asia"], entities: ["vietnam"], modern: ["vietnam"], people: ["Hồ Chí Minh"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "india-independence-1947", slug: "doc-lap-va-phan-chia-an-do-1947", titleVi: "Độc lập và phân chia Ấn Độ năm 1947", titleEn: "Independence and Partition in 1947",
    summaryVi: "Năm 1947, sự chấm dứt cai trị của Anh ở tiểu lục địa đi cùng việc thành lập Ấn Độ và Pakistan, cũng như di cư cưỡng bức và bạo lực quy mô lớn.", summaryEn: "In 1947, the end of British rule in the subcontinent coincided with the creation of India and Pakistan, as well as mass forced migration and violence.",
    startYear: 1947, precision: "year", confidence: "high", period: "contemporary", categories: ["independence-decolonization", "borders-sovereignty", "migration-settlement"], regions: ["south-asia"], modern: ["india", "pakistan", "bangladesh"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "udhr-1948", slug: "tuyen-ngon-quoc-te-nhan-quyen-1948", titleVi: "Tuyên ngôn Quốc tế Nhân quyền", titleEn: "Universal Declaration of Human Rights",
    summaryVi: "Ngày 10 tháng 12 năm 1948, Đại hội đồng Liên Hợp Quốc thông qua Tuyên ngôn Quốc tế Nhân quyền. Tuyên ngôn không tự nó là một hiệp ước nhưng có ảnh hưởng lớn đến diễn ngôn và pháp luật quốc tế.", summaryEn: "On 10 December 1948, the UN General Assembly adopted the Universal Declaration of Human Rights. It is not itself a treaty, but has had major influence on international discourse and law.",
    startYear: 1948, startDate: "1948-12-10", precision: "day", confidence: "high", period: "contemporary", categories: ["law-constitution", "social-rights", "international-organization"], regions: ["cross-regional-global"], entities: ["united-nations"], organizations: ["United Nations General Assembly"], sources: ["un-udhr"], related: ["un-charter-1945"],
  }),
  event({
    id: "bandung-conference", slug: "hoi-nghi-bandung-1955", titleVi: "Hội nghị Bandung năm 1955", titleEn: "Bandung Conference of 1955",
    summaryVi: "Hội nghị Á - Phi tại Bandung tập hợp đại diện của các nước châu Á và châu Phi, trở thành một điểm tham chiếu quan trọng cho hợp tác hậu thuộc địa và không liên kết.", summaryEn: "The Asian–African Conference at Bandung brought together representatives from Asian and African countries and became an important reference point for post-colonial cooperation and non-alignment.",
    startYear: 1955, precision: "year", confidence: "high", period: "contemporary", categories: ["diplomacy-treaty", "independence-decolonization", "international-organization"], regions: ["africa", "south-asia", "southeast-asia", "east-asia", "west-asia-middle-east", "cross-regional-global"], modern: ["indonesia", "india", "china", "egypt", "ghana"], locations: ["Bandung"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "ghana-independence", slug: "ghana-doc-lap-1957", titleVi: "Ghana độc lập năm 1957", titleEn: "Ghanaian independence in 1957",
    summaryVi: "Ngày 6 tháng 3 năm 1957, Gold Coast giành độc lập với tên Ghana. Đây là một mốc quan trọng của làn sóng phi thực dân hóa châu Phi, không đồng nhất với Đế chế Ghana lịch sử.", summaryEn: "On 6 March 1957, the Gold Coast became independent as Ghana. It was an important milestone in African decolonization, not identical to the historical Ghana Empire.",
    startYear: 1957, startDate: "1957-03-06", precision: "day", confidence: "high", period: "contemporary", categories: ["independence-decolonization", "state-formation", "borders-sovereignty"], regions: ["africa"], modern: ["ghana"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "un-decolonization-1960", slug: "tuyen-ngon-lien-hop-quoc-ve-phi-thuc-dan-hoa", titleVi: "Tuyên ngôn Liên Hợp Quốc về phi thực dân hóa", titleEn: "UN Declaration on decolonization",
    summaryVi: "Ngày 14 tháng 12 năm 1960, Đại hội đồng Liên Hợp Quốc thông qua Nghị quyết 1514 (XV), nêu quyền tự quyết và chấm dứt chủ nghĩa thực dân trong khuôn khổ văn kiện của tổ chức.", summaryEn: "On 14 December 1960, the UN General Assembly adopted Resolution 1514 (XV), setting out self-determination and the end of colonialism within the organization's text.",
    startYear: 1960, startDate: "1960-12-14", precision: "day", confidence: "high", period: "contemporary", categories: ["independence-decolonization", "international-organization", "law-constitution"], regions: ["africa", "caribbean", "oceania-pacific", "cross-regional-global"], entities: ["united-nations"], sources: ["un-resolution-1514"], related: ["un-charter-1945"],
  }),
  event({
    id: "south-africa-election-1994", slug: "bau-cu-da-chung-toc-nam-phi-1994", titleVi: "Bầu cử đa chủng tộc ở Nam Phi năm 1994", titleEn: "South Africa's 1994 multiracial election",
    summaryVi: "Cuộc bầu cử năm 1994 là một phần của quá trình chuyển đổi khỏi apartheid, với sự tham gia của nhiều lực lượng chính trị và một bối cảnh đàm phán dài hơn sự kiện bầu cử.", summaryEn: "The 1994 election was part of a transition away from apartheid involving multiple political forces and a longer negotiated context than the election alone.",
    startYear: 1994, precision: "year", confidence: "high", period: "contemporary", categories: ["elections-government", "social-rights", "state-formation"], regions: ["africa"], modern: ["south-africa"], sources: ["loc-world-history"], verificationStatus: "needs-review",
  }),
  event({
    id: "african-union-2002", slug: "lien-minh-chau-phi-ra-mat", titleVi: "Liên minh châu Phi ra mắt", titleEn: "African Union is launched",
    summaryVi: "Năm 2002, Liên minh châu Phi được ra mắt tại Durban với tư cách kế thừa Tổ chức Thống nhất châu Phi, phản ánh ưu tiên hợp tác và hội nhập lục địa mới.", summaryEn: "In 2002, the African Union was launched in Durban as successor to the Organization of African Unity, reflecting renewed priorities for continental cooperation and integration.",
    startYear: 2002, precision: "year", confidence: "high", period: "contemporary", categories: ["international-organization", "diplomacy-treaty", "local-regional"], regions: ["africa", "cross-regional-global"], entities: ["african-union"], organizations: ["African Union"], sources: ["african-union-history"],
  }),
  event({
    id: "un-drip-2007", slug: "tuyen-ngon-lien-hop-quoc-ve-quyen-nguoi-ban-dia", titleVi: "Tuyên ngôn Liên Hợp Quốc về quyền của người bản địa", titleEn: "UN Declaration on the Rights of Indigenous Peoples",
    summaryVi: "Năm 2007, Đại hội đồng Liên Hợp Quốc thông qua Tuyên ngôn về quyền của người bản địa, một văn bản quan trọng cho diễn ngôn quốc tế về quyền, đất đai và tự quyết.", summaryEn: "In 2007, the UN General Assembly adopted the Declaration on the Rights of Indigenous Peoples, an important text for international discussion of rights, land, and self-determination.",
    startYear: 2007, precision: "year", confidence: "high", period: "contemporary", categories: ["social-rights", "law-constitution", "international-organization"], regions: ["cross-regional-global"], entities: ["united-nations"], sources: ["un-undrip"],
  }),
  event({
    id: "sdgs-2015", slug: "muc-tieu-phat-trien-ben-vung-2015", titleVi: "Mục tiêu Phát triển Bền vững năm 2015", titleEn: "Sustainable Development Goals, 2015",
    summaryVi: "Năm 2015, các quốc gia thành viên Liên Hợp Quốc thông qua Chương trình nghị sự 2030 với 17 Mục tiêu Phát triển Bền vững; việc thực hiện khác nhau theo bối cảnh quốc gia.", summaryEn: "In 2015, UN Member States adopted the 2030 Agenda with 17 Sustainable Development Goals; implementation differs by national context.",
    startYear: 2015, precision: "year", confidence: "high", period: "contemporary", categories: ["international-organization", "environment-disaster", "public-health"], regions: ["cross-regional-global"], entities: ["united-nations"], sources: ["un-sdgs"], related: ["un-charter-1945"],
  }),
  event({
    id: "who-pandemic-agreement-2025", slug: "thoa-thuan-dai-dich-who-2025", titleVi: "Đại hội đồng Y tế Thế giới thông qua Thỏa thuận Đại dịch WHO", titleEn: "World Health Assembly adopts the WHO Pandemic Agreement",
    summaryVi: "Ngày 20 tháng 5 năm 2025, các quốc gia thành viên WHO thông qua Thỏa thuận Đại dịch. Nghị quyết kèm theo nêu rằng văn kiện còn cần hoàn tất phụ lục về tiếp cận mầm bệnh và chia sẻ lợi ích trước khi mở để ký và phê chuẩn.", summaryEn: "On 20 May 2025, WHO Member States adopted the Pandemic Agreement. The accompanying resolution states that an annex on pathogen access and benefit sharing must still be completed before it opens for signature and ratification.",
    startYear: 2025, startDate: "2025-05-20", precision: "day", confidence: "high", period: "contemporary", categories: ["public-health", "international-organization", "diplomacy-treaty", "contemporary-event"], regions: ["cross-regional-global"], entities: ["world-health-organization"], organizations: ["World Health Organization", "World Health Assembly"], sources: ["who-pandemic-agreement", "who-pandemic-resolution"], developments: { vi: "Nguồn WHO xác nhận việc thông qua; tình trạng pháp lý tiếp theo được ghi rõ để tránh mô tả sai rằng văn kiện đã có hiệu lực ngay.", en: "WHO sources confirm adoption and specify the remaining legal steps, avoiding any claim that the instrument was immediately in force." },
  }),
];

export const timelineEvents = [...baseTimelineEvents, ...timelineImportedEvents.map(event)];

const coverageStatusForCount = (count) => {
  if (count >= 5) return "partially-covered";
  if (count > 0) return "sparse-documentation";
  return "not-yet-researched";
};
const sourceBackedRecordCount = timelineEvents.filter((item) => item.verificationStatus === "source-backed").length;

export const timelineCoverage = {
  lastVerifiedAt: TIMELINE_LAST_VERIFIED_AT,
  datasetScope: {
    vi: "Kho tư liệu cục bộ đang được mở rộng theo từng batch nghiên cứu có nguồn. Đây không phải kho lưu trữ hoàn chỉnh của lịch sử thế giới; số lượng mốc không đo được mức độ đại diện của một cộng đồng, thế kỷ hay vùng.",
    en: "A local archive expanded in source-backed research batches. It is not a complete archive of world history; a record count cannot measure representation of a community, century, or region.",
  },
  importSummary: {
    ...timelineImportManifest,
    totalRecordCount: timelineEvents.length,
    sourceBackedRecordCount,
    totalSourceCount: timelineSources.length,
    totalEntityCount: timelineEntities.length,
  },
  periodStatus: timelinePeriods.map((period) => {
    const recordCount = timelineEvents.filter((item) => item.historicalPeriod === period.id).length;
    return { periodId: period.id, recordCount, status: coverageStatusForCount(recordCount) };
  }),
  regionalStatus: timelineRegions.map((region) => {
    const records = timelineEvents.filter((item) => item.regions.includes(region.id));
    return { regionId: region.id, recordCount: records.length, sourceBackedRecordCount: records.filter((item) => item.verificationStatus === "source-backed").length, status: coverageStatusForCount(records.length) };
  }),
  notes: {
    vi: "Các trạng thái được tính từ số hồ sơ hiện có và chỉ giúp ưu tiên biên tập. Candidate, dấu vết nguồn, batch ID và fingerprint được giữ riêng để có thể kiểm tra hoặc mở rộng dữ liệu mà không biến số lượng thành tuyên bố về tính đầy đủ.",
    en: "Statuses are calculated from the current record count and only guide editorial priority. Candidates, source trails, batch IDs, and fingerprints are retained separately so data can be checked or expanded without turning quantity into a completeness claim.",
  },
};

export default {
  TIMELINE_DATASET_VERSION,
  TIMELINE_LAST_VERIFIED_AT,
  timelinePeriods,
  timelineRegions,
  timelineCategories,
  timelineSources,
  timelineEntities,
  timelineCountryDirectory,
  timelineEvents,
  timelineCoverage,
};
