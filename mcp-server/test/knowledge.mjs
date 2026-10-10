// Checks that proposed facts stay inactive until a person accepts them.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const dir = mkdtempSync(path.join(tmpdir(), "qa-agent-knowledge-"));
const env = { ...process.env, QA_KNOWLEDGE_DIR: dir };
const client = new Client({ name: "knowledge-test", version: "1" });
await client.connect(new StdioClientTransport({ command: "node", args: ["dist/index.js"], env }));
const call = async (name, args) => (await client.callTool({ name, arguments: args })).content[0].text;
const review = (answers) => execFileSync("node", ["dist/review-knowledge.js"], { input: answers.join("\n") + "\n", env }).toString();
let passed = 0;
const check = (cond, label) => { assert.ok(cond, label); console.log(`  ok  ${label}`); passed++; };

await call("propose_knowledge", { area: "text-properties", fact: "Font size presets are Small, Medium, Large and Extra large.", source: "checked in the product" });
await call("propose_knowledge", { area: "text-properties", fact: "Italic applies to the whole text element.", source: "PO answer", issue: 11404 });
await call("propose_knowledge", { area: "text-properties", fact: "A wrong fact.", source: "guess" });
check(!(await call("read_knowledge", { area: "text-properties" })).includes("Font size presets"), "a proposed fact is not active before review");

review(["y", "y", "n"]);
check((await call("read_knowledge", { area: "text-properties" })).includes("Font size presets"), "an accepted fact becomes active");
check(!(await call("read_knowledge", { area: "text-properties" })).includes("whole text element"), "an accepted fact for an unreleased feature does not become current behavior");
check((await call("read_knowledge", {})).includes("whole text element"), "it is listed as pending knowledge");
check(!(await call("read_knowledge", { area: "text-properties" })).includes("A wrong fact"), "a rejected fact never becomes active");
check(review([]).includes("No proposed facts"), "the queue is empty after review");

await client.close();
console.log(`\n${passed} checks passed`);
