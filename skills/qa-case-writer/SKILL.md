---
name: qa-case-writer
description: Writes manual test cases from a requirement, user story, bug report or issue. Use when the user shares requirements or an issue and asks for test cases, test coverage, a test plan or a checklist.
---

# QA case writer

A project-independent skill. Everything that differs between teams lives in `config/`:
- `config/conventions.md` — how cases are written (format, titles, priority, folders).
- `config/product.md` — product areas, roles, UI names and glossary.

Read both files before writing anything. If `config/product.md` is still the empty template, work without it and tell the user that the product profile is not set up yet. Talk about the product and the requirement, not about this skill or its file names.

## Workflow

### 0. Read the knowledge base
If a `read_knowledge` tool is available, call it without an area to see the areas, then read the areas the requirement touches. Treat these reviewed facts as true and do not mark them (verify). Knowledge listed as pending belongs to features that are not released: never describe it as current behavior.

### 1. Understand
Restate the requirement in 2-4 sentences: who does what, and what the product should do in response. List every testable behavior as a short bullet.

Then list the existing features the change touches: everything that creates, copies, groups, stores, exports, shares or restyles the affected element. Each of them is a regression risk.

### 1b. Check existing cases
If a tool that searches the team's existing test cases is available (for example `search_cases`), search before designing anything: one search per behavior and per touched feature from step 1, with a few words each.
- A behavior that an existing case already describes, and that the requirement changes: **update** that case (give its id) instead of writing a new one. One behavior, one case.
- A behavior the requirement removes: **retire** the case that describes it.
- A behavior no case describes: **create** a new case.
If no such tool is available, say in the output that existing cases were not checked, and mark every case "create (check for an existing case)".

### 2. Ask before writing
List open questions: missing values and limits, undefined error behavior, unclear roles or permissions, contradictions, unclear scope (platforms, browsers, locales).
- Number the questions and offer a suggested answer for each.
- Do not invent behavior the requirement doesn't describe.
- If the user asks to proceed anyway, continue with the suggested answers and mark them as assumptions.

**Stop here and wait for answers** unless the user said to proceed without questions.

### Gated workflow (when the session tools are available)
If the tools `open_session`, `record_answers`, `submit_plan` and `save_changes` are available, the server enforces the stops. Follow it:
0. If `get_session` shows that the issue's workflow is already saved, do not start a second one. Read the saved cases with `read_change_set` (if available), tell the user what exists, and ask whether to revise it or start over. Start a new session only when the user says so.
1. After step 2, call `open_session` with the questions, show them to the user and stop.
2. When the user answers, call `record_answers` with their answers in their own words, never invented ones. The recorded text is what the user approves, so it must stand on its own: replace every "your suggestion", "as suggested" or "same as above" with the full text that was accepted, and mark each line "(user)" or "(accepted suggestion)". Then ask the user to run the approve command the tool names, and wait.
3. After the answers are approved, design coverage (step 3) and call `submit_plan` with one line per case: `update C-xxx: <what changes>`, `retire C-xxx: <why>` or `create TC-n: <title>`. Before submitting, check the plan itself against the merge and split rules of step 3: if two planned cases test the same behavior and differ only in data or in the way the state is reached, fold one into the other. List the cases in the order they will appear in the saved content (grouped by area), and number new cases in that order. Show the plan, ask the user to approve it the same way, and wait.
4. After the plan is approved, write the cases (steps 4 to 6) and save them with `save_changes`. Every case id in the plan must be in the saved content. The server adds the change set's title, status and approval line, so start the content with a one-line scope (platforms, how to read exact values if relevant) and then the cases; do not repeat the status.
If a tool answers "Blocked", tell the user what is missing. Never try to get around a gate, and never claim something is approved that the tool has not confirmed.

When the user asks to see or change cases already saved for an issue, read them with `read_change_set` before answering.

### 3. Design coverage
For each behavior, choose the techniques that apply:
- equivalence classes and boundary values for inputs and limits;
- negative cases: invalid input, missing data, errors from the server;
- roles and permissions: who may and who may not;
- states and transitions: empty, loading, filled, error;
- text and locales, when the feature shows or edits text: different scripts, right-to-left text, emoji, long words, mixed scripts;
- interaction with existing features the change touches (regression risk).

Keep the suite small and strong:
- **Merge** cases that differ only in input data into one case with a data table.
- **Split** cases only when the expected result differs. If the expected result needs "or" or "if" to fit every data row, the rows expect different things: split the case.
- **Never loop inside a case** ("repeat for every font"). When coverage needs many values, pick representative ones (extremes, defaults, the riskiest) and state in one line why they were chosen.
- Never combine every value of several parameters. Cover each parameter on its own, then add a few pairs where an interaction is likely.
- A single small feature usually needs 15-30 cases. If you have more, look for merges before writing.

### 4. Write cases
Follow `config/conventions.md` exactly. If it has a case template, use that template for every case: the same lines in the same order, and no header lines it does not list. If the conventions say nothing about a field, use the defaults below.

Product facts — UI labels, menu items, shortcuts, setting names — come from `config/product.md` or from the requirement. Any such fact taken from general knowledge instead is marked **(verify)** at its first use, so the tester checks it before running the case.

Default case format, when the conventions have no template:
```
## <ID> <Title: subject under test, short, no "Verify/Check">
Action: create | update <existing id> | retire <existing id>
Area: <product area from config/product.md, or a proposal marked (confirm)>
Priority: High | Medium | Low · Type: functional | negative | boundary | permissions | regression

Preconditions: <state, data, role>

Steps:
1. ...

Expected result:
- <observable outcome>
```

### 5. Self-review
Before showing the cases, check every one against this list and fix what fails. Do not show the list or the fixes, only the corrected cases.
- Each step holds one action, as `config/conventions.md` requires.
- Each expected result is observable and is not empty.
- Priorities follow the definitions in `config/conventions.md`, and High stays a minority.
- No two cases differ only in data; merge them.
- No expected result uses "or" or "if" to cover different data rows; split those cases.
- Every touched existing feature from step 1 is covered by a case or listed under "Not covered" with a reason. Making the suite smaller never drops one silently.
- No case loops over values.
- Every existing case found in step 1b that the requirement changes has an update; none is duplicated by a new case.
- Every product fact not backed by `config/product.md` or the requirement is marked (verify).
- Every assumption used is listed.
- Every case follows the case template in `config/conventions.md`, line for line.
- A number the product computes (a rounded step, a total) is given exactly when the rule is known from the knowledge base; "about" is used only when it is not.

### 6b. Propose what was learned
If a `propose_knowledge` tool is available, propose stable facts learned in this session, one per call, with the exact source:
- each product-owner decision, with `issue` set when the feature is not released yet;
- each UI label, shortcut or control behavior the user confirmed.
Write a fact so that it says what the user can do with a control, not only what it shows ("the field shows the size and accepts a typed size", not "the field shows the size"). An incomplete fact leads to wrong conclusions later, just like a missing one.
Never propose counts, assignees or other facts that go stale. Never propose your own guesses marked (verify). Then ask the user to review the proposals with the command the tool names.

### 6. Summarize coverage
- Existing cases updated or retired, with their ids, and new cases created.
- Behaviors covered, with case IDs.
- Behaviors not covered and why (out of scope, needs back-end check, blocked by an open question).
- Assumptions made.
- Why representative values were chosen, where values were sampled.
