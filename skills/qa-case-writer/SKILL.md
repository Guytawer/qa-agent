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

### 1. Understand
Restate the requirement in 2-4 sentences: who does what, and what the product should do in response. List every testable behavior as a short bullet.

Then list the existing features the change touches: everything that creates, copies, groups, stores, exports, shares or restyles the affected element. Each of them is a regression risk.

### 2. Ask before writing
List open questions: missing values and limits, undefined error behavior, unclear roles or permissions, contradictions, unclear scope (platforms, browsers, locales).
- Number the questions and offer a suggested answer for each.
- Do not invent behavior the requirement doesn't describe.
- If the user asks to proceed anyway, continue with the suggested answers and mark them as assumptions.

**Stop here and wait for answers** unless the user said to proceed without questions.

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
Follow `config/conventions.md` exactly. If the conventions say nothing about a field, use the defaults below.

Product facts — UI labels, menu items, shortcuts, setting names — come from `config/product.md` or from the requirement. Any such fact taken from general knowledge instead is marked **(verify)** at its first use, so the tester checks it before running the case.

Default case format:
```
ID: TC-<n>
Title: <subject under test, short, no "Verify/Check">
Area: <product area from config/product.md, or a proposal marked (confirm)>
Priority: High | Medium | Low
Preconditions: <state, data, role>
Steps:
1. ...
2. ...
Expected result: <observable outcome>
Type: functional | negative | boundary | permissions | regression
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
- Every product fact not backed by `config/product.md` or the requirement is marked (verify).
- Every assumption used is listed.

### 6. Summarize coverage
- Behaviors covered, with case IDs.
- Behaviors not covered and why (out of scope, needs back-end check, blocked by an open question).
- Assumptions made.
- Why representative values were chosen, where values were sampled.
