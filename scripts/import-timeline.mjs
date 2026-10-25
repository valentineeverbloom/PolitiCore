import { timelineImportManifest, timelineImportedEvents } from "../timeline-imports.js";
import { timelineResearchCandidates } from "../timeline-research-candidates.js";

// The public dataset is a deterministic projection of editorial candidates.
// This command intentionally never writes source files: publication is defined
// by the stable `status: "published"` selection in timeline-imports.js.
const publishedCandidates = timelineResearchCandidates
  .filter((candidate) => candidate.status === "published")
  .sort((left, right) => left.candidateId.localeCompare(right.candidateId));

const candidateIds = publishedCandidates.map((candidate) => candidate.candidateId);
const importedCandidateIds = timelineImportedEvents.map((event) => event.candidateId);
const sameSelection = candidateIds.length === importedCandidateIds.length
  && candidateIds.every((id, index) => id === importedCandidateIds[index]);

if (!sameSelection) {
  throw new Error("Published candidates and imported timeline records are out of sync.");
}

const report = {
  status: "ok",
  generatedAt: timelineImportManifest.generatedAt,
  batchIds: timelineImportManifest.batchIds,
  candidateCount: timelineResearchCandidates.length,
  publishedCandidateCount: publishedCandidates.length,
  importedRecordCount: timelineImportedEvents.length,
  importedSourceCount: timelineImportManifest.importedSourceCount,
  importedEntityCount: timelineImportManifest.importedEntityCount,
  idempotent: true,
  selection: importedCandidateIds,
};

console.log(JSON.stringify(report, null, 2));
