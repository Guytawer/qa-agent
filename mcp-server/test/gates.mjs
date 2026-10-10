// Checks that the workflow gates hold: run with `npm test` after `npm run build`.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const dir = mkdtempSync(path.join(tmpdir(), "qa-agent-gates-"));
const env = { ...process.env, QA_STATE_DIR: path.join(dir, "state"), QA_CHANGES_DIR: path.join(dir, "changes") };
const client = new Client({ name: "gates-test", version: "1" });
await client.connect(new StdioClientTransport({ command: "node", args: ["dist/index.js"], env }));

let passed = 0;
async function expect(name, args, shouldPass, label) {
  const result = await client.callTool({ name, arguments: args });
  assert.equal(!result.isError, shouldPass, `${label}: ${result.content[0].text}`);
  console.log(`  ok  ${label}`);
  passed++;
}
function approve(answer) {
  execFileSync("node", ["dist/approve.js", "1"], { input: `${answer}\n`, env });
}

const plan = "- update C-011: italic\n- create TC-1: toggle";
await expect("submit_plan", { issue: 1, plan }, false, "no plan before a session exists");
await expect("open_session", { issue: 1, questions: "1. Which option ships?" }, true, "session opens");
await expect("submit_plan", { issue: 1, plan }, false, "no plan before answers");
await expect("record_answers", { issue: 1, answers: "1. Panel toggle" }, true, "answers recorded");
await expect("submit_plan", { issue: 1, plan }, false, "no plan while answers wait for approval");
approve("n");
await expect("submit_plan", { issue: 1, plan }, false, "a 'n' reply does not approve");
approve("y");
await expect("submit_plan", { issue: 1, plan }, true, "plan allowed after answers are approved");
await expect("save_changes", { issue: 1, content: "C-011 TC-1" }, false, "no saving before the plan is approved");
approve("y");
await expect("save_changes", { issue: 1, content: "only C-011" }, false, "no saving when a planned case is missing");
await expect("submit_plan", { issue: 1, plan: plan + "\n- create TC-2: shortcut" }, true, "changed plan is accepted");
await expect("save_changes", { issue: 1, content: "C-011 TC-1 TC-2" }, false, "a changed plan loses its approval");
approve("y");
await expect("save_changes", { issue: 1, content: "C-011 TC-1 TC-2" }, true, "saving works once the current plan is approved");

// The saved change set can be read back; an issue without one says so.
const saved = await client.callTool({ name: "read_change_set", arguments: { issue: 1 } });
assert.match(saved.content[0].text, /Plan approved by .*C-011 TC-1 TC-2/s, "read_change_set returns the saved content");
console.log("  ok  saved change set can be read back");
passed++;
const none = await client.callTool({ name: "read_change_set", arguments: { issue: 99 } });
assert.match(none.content[0].text, /No saved change set/, "read_change_set reports a missing change set");
console.log("  ok  missing change set is reported");
passed++;

// Cases the plan names as unchanged are not required in the content.
await expect("open_session", { issue: 2, questions: "1. Scope?" }, true, "second session opens");
await expect("record_answers", { issue: 2, answers: "1. Toggle only" }, true, "second answers recorded");
execFileSync("node", ["dist/approve.js", "2"], { input: "y\n", env });
await expect("submit_plan", { issue: 2, plan: "- update C-001: italic\n- create TC-1: toggle\nNot changed: C-003, C-005" }, true, "plan with a 'Not changed' line");
execFileSync("node", ["dist/approve.js", "2"], { input: "y\n", env });
await expect("save_changes", { issue: 2, content: "C-001 TC-1" }, true, "unchanged cases are not required in the content");

await client.close();
console.log(`\n${passed} checks passed`);
