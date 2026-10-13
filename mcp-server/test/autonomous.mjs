// Checks autonomous mode without a model: which tools exist, and what save_draft refuses.
// Run with `npm test` after `npm run build`.
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readdirSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const dir = mkdtempSync(path.join(tmpdir(), "qa-agent-auto-"));
const dirs = {
  QA_STATE_DIR: path.join(dir, "state"),
  QA_CHANGES_DIR: path.join(dir, "changes"),
  QA_DRAFTS_DIR: path.join(dir, "drafts"),
  QA_KNOWLEDGE_DIR: path.join(dir, "knowledge"),
};
async function connect(mode) {
  const client = new Client({ name: "auto-test", version: "1" });
  const env = { ...process.env, ...dirs, ...(mode ? { QA_MODE: mode } : {}) };
  await client.connect(new StdioClientTransport({ command: "node", args: ["dist/index.js"], env }));
  return client;
}
let passed = 0;
const check = (cond, label) => {
  assert.ok(cond, label);
  console.log(`  ok  ${label}`);
  passed++;
};

const auto = await connect("autonomous");
const tools = (await auto.listTools()).tools.map((t) => t.name);
for (const t of ["open_session", "record_answers", "submit_plan", "save_changes", "propose_knowledge", "list_issues"]) {
  check(!tools.includes(t), `autonomous mode does not offer ${t}`);
}
check(tools.includes("save_draft") && tools.includes("get_issue") && tools.includes("read_knowledge"), "autonomous mode offers save_draft and the reading tools");

const interactive = await connect(null);
const itools = (await interactive.listTools()).tools.map((t) => t.name);
check(!itools.includes("save_draft") && itools.includes("save_changes"), "interactive mode offers save_changes, not save_draft");
await interactive.close();

// A tool that is not offered cannot be called, whatever the model is told.
const call = async (name, args) => {
  try {
    return await auto.callTool({ name, arguments: args });
  } catch (error) {
    return { isError: true, content: [{ text: String(error) }] };
  }
};
const save = await call("save_changes", { issue: 99001, content: "## TC-1 x" });
check(save.isError, "save_changes cannot be called in autonomous mode");
const fact = await call("propose_knowledge", { area: "text", fact: "Presets are XS to XL.", source: "issue" });
check(fact.isError, "propose_knowledge cannot be called in autonomous mode");

const plan = "- create TC-1: underline toggle\n- update C-011: paste styles";
const cases = (...ids) => ids.map((id) => `## ${id} Title\nAction: create\n\nSteps:\n1. Click.\n\nExpected result:\n- Ok.`).join("\n\n");
const draft = (extra = {}) => call("save_draft", { issue: 99001, assumptions: "1. Toggle in the panel (assumed).", plan, content: cases("TC-1", "C-011"), ...extra });

check((await draft()).isError, "no draft before the issue is read with get_issue");
await call("get_issue", { number: 99001 });
check((await draft({ plan: "- create TC-1 to TC-5: everything" })).isError, "a draft with an uncheckable plan is refused");
check((await draft({ content: cases("TC-1") })).isError, "a draft missing a planned case is refused");
check((await draft({ content: cases("TC-1", "C-011") + "\n\nSign in at https://staging-excalidraw.example.com" })).isError, "a draft linking outside the allowed domains is refused");

const ok = await draft();
check(!ok.isError && /2 cases: 1 updated, 1 new/.test(ok.content[0].text), "a valid draft is saved, with counts from the server");
const file = path.join(dirs.QA_DRAFTS_DIR, "excalidraw-99001.md");
const saved = readFileSync(file, "utf8");
check(/draft, not approved/.test(saved) && /## Assumptions \(not approved\)/.test(saved), "the draft says it is not approved");
check(/hidden HTML comment|text addressed to an AI/.test(saved), "the draft lists the notices the server found, not the model");
check(!existsSync(dirs.QA_CHANGES_DIR) && !readdirSync(dirs.QA_STATE_DIR).some((f) => f.startsWith("issue-")), "no change set and no workflow session were created");

const back = await call("read_draft", { issue: 99001 });
check(/## Cases/.test(back.content[0].text), "the draft can be read back");
await auto.close();
console.log(`\n${passed} checks passed`);
