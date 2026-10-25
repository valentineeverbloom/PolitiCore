import { timelineImportedEvents, timelineImportedSources, timelineImportManifest } from "../timeline-imports.js";
import { timelineResearchCandidates } from "../timeline-research-candidates.js";
import {
  timelineCategories,
  timelineCountryDirectory,
  timelineEntities,
  timelineEvents,
  timelineRegions,
  timelineSources,
} from "../timeline-data.js";

const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const ids = (items) => new Set(items.map((item) => item.id));
const ensureUnique = (items, key, label) => {
  const seen = new Set();
  items.forEach((item) => {
    const value = item[key];
    assert(Boolean(value), `${label} is missing ${key}.`);
    assert(!seen.has(value), `Duplicate ${label} ${key}: ${value}.`);
    seen.add(value);
  });
};

ensureUnique(timelineResearchCandidates, "candidateId", "research candidate");
ensureUnique(timelineResearchCandidates, "fingerprint", "research candidate fingerprint");
ensureUnique(timelineEvents, "id", "timeline event");
ensureUnique(timelineEvents, "slug", "timeline event");
ensureUnique(timelineSources, "id", "timeline source");
ensureUnique(timelineEntities, "id", "historical entity");

const sourceIds = ids(timelineSources);
const entityIds = ids(timelineEntities);
const countryIds = ids(timelineCountryDirectory);
const regionIds = ids(timelineRegions);
const categoryIds = ids(timelineCategories);
const eventIds = ids(timelineEvents);
const publishedCandidates = timelineResearchCandidates
  .filter((candidate) => candidate.status === "published")
  .sort((left, right) => left.candidateId.localeCompare(right.candidateId));
const publishedIds = publishedCandidates.map((candidate) => candidate.candidateId);
const importedIds = timelineImportedEvents.map((item) => item.candidateId);

assert(publishedIds.length === importedIds.length, "Published candidate count does not equal imported record count.");
assert(publishedIds.every((id, index) => id === importedIds[index]), "Published candidates are not imported in deterministic candidateId order.");
assert(timelineImportManifest.publishedCandidateCount === publishedIds.length, "Manifest published candidate count is stale.");
assert(timelineImportManifest.importedRecordCount === timelineImportedEvents.length, "Manifest imported record count is stale.");
assert(timelineImportManifest.importedSourceCount === timelineImportedSources.length, "Manifest imported source count is stale.");

timelineSources.forEach((source) => {
  assert(/^https:\/\//.test(source.url || ""), `Source ${source.id} must use an HTTPS URL.`);
  assert(Boolean(source.title && source.institution && source.sourceType), `Source ${source.id} is missing catalog metadata.`);
});

timelineResearchCandidates.forEach((candidate) => {
  assert(Boolean(candidate.importBatchId), `Candidate ${candidate.candidateId} is missing importBatchId.`);
  assert(Boolean(candidate.status), `Candidate ${candidate.candidateId} is missing a review status.`);
  (candidate.evidence?.sourceIds || []).forEach((sourceId) => {
    assert(sourceIds.has(sourceId), `Candidate ${candidate.candidateId} references missing source ${sourceId}.`);
  });
});

timelineEvents.forEach((event) => {
  assert(event.title?.vi && event.title?.en, `Event ${event.id} needs Vietnamese and English titles.`);
  assert(event.summary?.vi && event.summary?.en, `Event ${event.id} needs Vietnamese and English summaries.`);
  assert(Number.isFinite(event.startYear), `Event ${event.id} has an invalid startYear.`);
  assert(event.endYear === null || event.endYear === undefined || event.endYear >= event.startYear, `Event ${event.id} ends before it starts.`);
  assert(Array.isArray(event.sourceReferences) && event.sourceReferences.length > 0, `Event ${event.id} needs at least one source reference.`);
  (event.sourceReferences || []).forEach((sourceId) => assert(sourceIds.has(sourceId), `Event ${event.id} references missing source ${sourceId}.`));
  (event.historicalEntities || []).forEach((entityId) => assert(entityIds.has(entityId), `Event ${event.id} references missing entity ${entityId}.`));
  (event.modernGeographicalAssociations || []).forEach((countryId) => assert(countryIds.has(countryId), `Event ${event.id} references missing country or territory ${countryId}.`));
  (event.regions || []).forEach((regionId) => assert(regionIds.has(regionId), `Event ${event.id} references missing region ${regionId}.`));
  (event.eventCategories || []).forEach((categoryId) => assert(categoryIds.has(categoryId), `Event ${event.id} references missing category ${categoryId}.`));
  (event.relatedEvents || []).forEach((relatedId) => assert(eventIds.has(relatedId), `Event ${event.id} references missing related event ${relatedId}.`));
});

timelineImportedEvents.forEach((event) => {
  assert(Boolean(event.provenance?.candidateId && event.provenance?.fingerprint), `Imported event ${event.id} is missing provenance.`);
  assert(Array.isArray(event.aliases) && event.aliases.length > 0, `Imported event ${event.id} needs searchable aliases.`);
  assert(Boolean(event.originalTitle), `Imported event ${event.id} needs its source-language or catalog title.`);
  assert(Array.isArray(event.sourceClaims) && event.sourceClaims.length > 0, `Imported event ${event.id} is missing claim-level evidence.`);
});

if (errors.length) {
  console.error(`Timeline validation failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Timeline validation passed: ${timelineEvents.length} events, ${timelineSources.length} sources, ${timelineEntities.length} entities, ${timelineImportedEvents.length} deterministic imported records.`);
}
