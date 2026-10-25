import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.join(projectRoot, "outputs");

const [html, styles, app, data, timelineResearchCandidates, timelineImports, timelineData] = await Promise.all([
  readFile(path.join(projectRoot, "index.html"), "utf8"),
  readFile(path.join(projectRoot, "style.css"), "utf8"),
  readFile(path.join(projectRoot, "app.js"), "utf8"),
  readFile(path.join(projectRoot, "data.js"), "utf8"),
  readFile(path.join(projectRoot, "timeline-research-candidates.js"), "utf8"),
  readFile(path.join(projectRoot, "timeline-imports.js"), "utf8"),
  readFile(path.join(projectRoot, "timeline-data.js"), "utf8"),
]);

const embeddedData = data.replaceAll("export const ", "const ").replace(/export default\s+\{[\s\S]*?\};?\s*$/m, "");
const embeddedTimelineResearchCandidates = timelineResearchCandidates.replaceAll("export const ", "const ").replace(/export default\s+\{[\s\S]*?\};?\s*$/m, "");
const embeddedTimelineImports = timelineImports
  .replace(/^import\s+\{[^}]+\}\s+from "\.\/timeline-research-candidates\.js";\r?\n/, "")
  .replaceAll("export const ", "const ")
  .replace(/export default\s+\{[\s\S]*?\};?\s*$/m, "");
const embeddedTimelineData = timelineData
  .replace(/^import\s+\{[^}]+\}\s+from "\.\/timeline-imports\.js";\r?\n/m, "")
  .replaceAll("export const ", "const ")
  .replace(/export default\s+\{[\s\S]*?\};?\s*$/m, "");
const embeddedApp = app
  .replace(/^import\s+\{[\s\S]*?\}\s+from "\.\/data\.js";\r?\n\r?\n/, "")
  .replace(/^import\s+\{[\s\S]*?\}\s+from "\.\/timeline-data\.js";\r?\n\r?\n/, "");
const dataAliases = `
const sourceTopics = topics;
const sourceCivitasCategories = civitasCategories;
const sourceArticles = articles;
const sourceGlossary = glossary;
const sourceCountries = countries;
const sourceIdeologies = ideologies;
const sourceEvents = events;
const sourceSources = sources;
const sourceRelationships = relationships;
const sourceLearningNodes = learningNodes;
const sourceLearningPaths = learningPaths;
const sourceLearningCheck = learningCheck;
const sourceTimelinePeriods = timelinePeriods;
const sourceTimelineRegions = timelineRegions;
const sourceTimelineCategories = timelineCategories;
const sourceTimelineSources = timelineSources;
const sourceTimelineEntities = timelineEntities;
const sourceTimelineCountryDirectory = timelineCountryDirectory;
const sourceTimelineEvents = timelineEvents;
const sourceTimelineCoverage = timelineCoverage;
`;
const inlineScript = `${embeddedData}\n\n${embeddedTimelineResearchCandidates}\n\n${embeddedTimelineImports}\n\n${embeddedTimelineData}\n\n${dataAliases}\n{\n${embeddedApp}\n}`.replace(/<\/script/gi, "<\\/script");

const bundledHtml = html
  .replace('<link rel="stylesheet" href="./style.css" />', () => `<style>\n${styles}\n</style>`)
  .replace('<script type="module" src="./app.js"></script>', () => `<script type="module">\n${inlineScript}\n</script>`);

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, "Civitas-Bilingual.html"), bundledHtml, "utf8");
console.log("Created outputs/Civitas-Bilingual.html");
