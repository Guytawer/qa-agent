# QA Agent

A portable AI assistant for QA work, built step by step: first Claude skills, then an MCP server with tools, then a stateful agent with human approval gates. Everything that differs between teams lives in config files, so the same core can move to a new project with a small amount of setup.

This repository is also a learning log. Each version comes from a measured run, and the reasons for every change are written down.

## What works today

### `skills/qa-case-writer`
A Claude skill that turns a requirement, user story or issue into manual test cases.

How it works:
1. Restates the requirement and lists the testable behaviors and the existing features the change touches.
2. Asks numbered open questions, each with a suggested answer, and stops until they are answered.
3. Designs coverage: boundaries, negative cases, roles, states, text and locales, regression.
4. Writes cases following the team's conventions in `config/`.
5. Reviews its own output against a checklist before showing it.
6. Summarizes what is covered, what is not and why.

Install: zip the `skills/qa-case-writer` folder and upload it in Claude under Customize → Skills. Fill in `config/product.md` for your product and adjust `config/conventions.md` to your team's rules.

### `mcp-server`
A local MCP server in TypeScript that gives Claude three tools:

| Tool | What it does |
|---|---|
| `get_issue` | Reads one Excalidraw issue from the GitHub API: title, body, labels, state, author, assignees, comments |
| `list_issues` | Lists issues with filters (state, labels, title words) and returns `total_count` for statistics |
| `search_cases` | Searches the existing test cases in `cases/` so the skill updates them instead of writing duplicates |

Build with `npm install` and `npm run build` in `mcp-server`, then add it to Claude Desktop's `claude_desktop_config.json`:
```json
"mcpServers": {
  "qa-agent": { "command": "node", "args": ["<path>/mcp-server/dist/index.js"] }
}
```
Set `QA_CASES_DIR` in the server's `env` to search another team's case folder.

### `cases`
Manual test cases for the current behavior of Excalidraw, one markdown file per product area.

## How quality is measured

Every change to the skill is tested on the same input with the same product-owner decisions, then compared with the previous run. See [`evals/`](evals/).

Results on Excalidraw issue #11404 (italic text):

| | v0.1 | v0.2 | v0.3 |
|---|---|---|---|
| Cases | 41 | 25 | 29 |
| High priority | 20 (49%) | 4 (16%) | 4 (14%) |
| Loops inside a case | yes | no | no |
| Unverified UI facts marked | no | yes | yes |
| Regression coverage (groups, library, duplicate) | yes | lost silently | restored |

One run per version, so some differences may be run-to-run variance. The changelog explains each fix: [`skills/qa-case-writer/CHANGELOG.md`](skills/qa-case-writer/CHANGELOG.md).

## Roadmap

- [x] Skill: test case writer, eval-driven iterations; uses the MCP server to update existing cases
- [ ] Skill: ticket completeness review
- [x] MCP server (TypeScript): read issues, list issues with counts, search existing cases
- [ ] Stateful workflow: analysis → questions → approval → case plan → approval, with gates enforced in code
- [ ] Knowledge base with reviewed updates
- [ ] Security: prompt-injection handling, least privilege, audit log
- [ ] Eval suite with several reference issues and repeated runs
- [ ] Autonomous mode via the Claude Agent SDK

## Design principles

- The model decides, tools act. Tools do one simple thing; analysis stays with the model.
- A tool or skill description is a prompt and a contract, so it is written from failure scenarios and tested.
- Instructions ask, code guarantees. Approvals, permissions and gates belong in the server, not in a prompt.
- Change one variable at a time, and keep a record of every run.
