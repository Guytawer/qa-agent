// Checks that get_issue serves a local fixture instead of GitHub.
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const dir = mkdtempSync(path.join(tmpdir(), "qa-agent-fixtures-"));
writeFileSync(path.join(dir, "issue-123.json"), JSON.stringify({ number: 123, title: "Fixture issue", body: "local", comments: [] }));
const client = new Client({ name: "fixtures-test", version: "1" });
await client.connect(new StdioClientTransport({ command: "node", args: ["dist/index.js"], env: { ...process.env, QA_FIXTURES_DIR: dir } }));

const result = await client.callTool({ name: "get_issue", arguments: { number: 123 } });
assert.ok(!result.isError && JSON.parse(result.content[0].text).title === "Fixture issue", "get_issue returns the fixture");
console.log("  ok  get_issue returns a local fixture instead of GitHub");

await client.close();
console.log("\n1 check passed");
