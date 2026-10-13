// Checks the grader itself on small synthetic change sets.
import assert from "node:assert/strict";
import { grade } from "../dist/grade.js";

const spec = {
  id: "t", title: "t", issue: 1,
  bounds: { cases_min: 2, cases_max: 3, high_max_share: 0.5 },
  must_update: ["C-002"],
  must_cover: [{ name: "giant", any: ["Giant"] }, { name: "both", all: ["Huge", "Giant"] }],
  must_not: [{ name: "invented name", pattern: "Extra large" }],
};
const ok = (id, action, extra = "") =>
  `## ${id} Title\nAction: ${action}\nArea: Text\nPriority: Medium · Type: functional\nTags: #1\n\nPreconditions: x\n\nSteps:\n1. Click.\n\nExpected result:\n- ${extra}\n`;
let passed = 0;
const check = (cond, label) => { assert.ok(cond, label); console.log(`  ok  ${label}`); passed++; };

const good = grade(spec, ok("C-002", "update C-002", "Huge") + ok("TC-1", "create", "Giant"));
check(good.passed === good.total, "a good change set passes every check");
const bad = grade(spec, "## C-002 Title\nAction: create\nSteps:\n1. Extra large\n");
const failed = bad.checks.filter((c) => !c.pass).map((c) => c.name);
check(failed.includes("2 to 3 cases"), "too few cases fails");
check(failed.includes("every case follows the template"), "a case off the template fails");
check(failed.includes("every case has steps and an expected result"), "a case without an expected result fails");
check(failed.includes("C-002 is updated"), "an existing case created instead of updated fails");
check(failed.includes("giant") && failed.includes("both"), "missing coverage fails");
check(failed.includes("invented name"), "forbidden content fails");

// Discovery checks (touched features nobody mentioned) are a group of their own, counted in metrics.
const dspec = { ...spec, must_cover: [...spec.must_cover, { name: "editor", source: "discovery", any: ["double-click"] }] };
const missed = grade(dspec, ok("C-002", "update C-002", "Huge") + ok("TC-1", "create", "Giant"));
const editor = missed.checks.find((c) => c.name === "editor");
check(editor.group === "discovery" && !editor.pass, "a missed discovery fails in its own group");
check(missed.metrics.discovery.found === 0 && missed.metrics.discovery.total === 1, "discovery is counted as found of total");
check(missed.checks.find((c) => c.name === "giant").group === "coverage", "a check without a source is a decision");
console.log(`\n${passed} checks passed`);
