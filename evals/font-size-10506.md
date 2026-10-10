# Eval case 2: Excalidraw #10506, more font size presets

Run 6, skill v0.6, with the reviewed knowledge base (16 starter facts, 12 of them checked against the Excalidraw source).

Input: only "Write test cases for Excalidraw issue #10506." The issue body is one line ("i wanna real large text pls"); in a comment the reporter says corner resizing already gives large text and the real problem is giving two texts the same size.

PO decisions (deliberately different from the skill's suggestions in two places, to check that the cases follow the approved answers):
- More presets only, no typed size field.
- Two new presets, "Huge" = 56 px and "Giant" = 96 px (the skill suggested three: 2XL, 3XL, 4XL at 48, 64, 96).
- Text between presets, or a selection with mixed sizes: no preset highlighted until one is clicked.
- Shortcuts unchanged, no new upper limit.
- Copy and paste styles and undo/redo must carry the new sizes.

## Results

| Check | Result |
|---|---|
| Read the knowledge base before analysing | yes (after loading the issue, which it needs to pick areas) |
| Loaded the issue with get_issue | yes, no browser |
| Read the reporter's comment and found the real need | yes, became question 4 |
| Searched existing cases | yes, 7 searches |
| Wrong preset name ("Extra large") | none; "Very large" taken from the knowledge base without (verify) |
| Knowledge facts used without (verify) | about 10: copy/paste styles, undo/redo, duplicate and Alt+drag, menu items, arrow label position, font names |
| (verify) marks | 4 facts, all absent from the knowledge base: preset sizes in px, "fontSize" field, size shortcuts, mobile properties button. 3 of 4 were correct (checked in source afterwards); the mobile one is still open |
| Followed approved answers, not its own suggestions | yes: Huge 56, Giant 96, two presets |
| Plan: update instead of duplicate | 11 updates, 5 new after review |
| Proposed knowledge | 3 PO decisions, to pending for #10506. Did not propose its own (verify) guesses, which is correct |
| Cases | 16, High 4 of 16 |

## What the human review caught

1. Recorded answers said "Your suggestion" for four items, so the approved text did not contain what was approved. Rejected; the skill rewrote them in full and marked each line "(user)" or "(accepted suggestion)". Cause: the PO reply format; the skill should still expand such references before recording.
2. The first plan had two overlaps that break the skill's own merge rule: TC-3 repeated C-005, TC-6 repeated C-015. Rejected; merged, 18 cases became 16. The self-review checks the written cases, not the plan.
3. While re-approving, a small wording drift ("not tested" became "not tested manually"). Harmless here, but it shows why an approver reads the text instead of trusting a summary.

## What the source check found after the run

- Sticky notes are a touched feature the run missed. A sticky note's label auto-fits and may show smaller than the picked size, so "Giant" on a sticky note will not render at 96. Neither the cases nor the knowledge base mention sticky notes, so the agent could not know. Gaps in the knowledge base and the corpus become gaps in coverage.
- The "Properties" panel (Alt+/) shows a selected text's font size as a number. C-015 opens the file in a text editor to read 56 and 96; the panel is a simpler way.
- Both are proposed as facts for review.

## Backlog
- Before record_answers, expand references such as "your suggestion" or "as above" into the full text.
- Run the merge rule on the plan, not only on the written cases.
- Change set header repeats "planned behavior, apply when it ships" twice.
- Fill config/product.md; the skill mentions the empty profile in every run.
- New cases appear in area order, so TC numbers are out of order in the file (TC-5 before TC-4).

## Run 7 (v0.6, same input, knowledge base after run 6)

Only one variable changed: five facts added after run 6 (preset sizes in px, size shortcuts, the "fontSize" field, the Properties panel, sticky notes). Same skill, same prompt. The session state from run 6 was deleted so the run started clean; on the first try, with the state present, the skill saw the saved session and refused to write a duplicate set, which is correct behavior.

Side effect: the three PO decisions from run 6 were in pending knowledge, so the skill offered them as suggested answers. The PO decisions themselves stayed the same.

| Check | Run 6 | Run 7 |
|---|---|---|
| Sticky notes in touched features | no | yes, searched for them, asked question 5 |
| Sticky note case | none | TC-5: label auto-fits, "Giant" stays highlighted |
| (verify) marks | 7, on 4 facts (px sizes, "fontSize", shortcuts, mobile button) | 4, on facts still absent (mobile button, "Sticky note" tool label, language selector and names) |
| How exact sizes are read | text editor | "F" field in the Properties panel; the file check stays in C-015 |
| New questions | – | exact match reached another way (q2), locale fallback (q7) |
| Plan overlaps | 2 (rejected) | none |
| Plan rejected for | overlaps | a wrong conclusion: "you can't land on exactly 56 or 96 by hand" |
| Cases | 16, High 4 | 17, High 4 |
| Proposed knowledge | 3 PO decisions | 5 PO decisions + 1 current fact ("F" field is editable), learned from the PO during the run |

### Findings
- The new fact closed the gap: sticky notes appeared without any hint in the prompt. Gaps in the knowledge base become gaps in coverage, and filling them works.
- An incomplete fact leads to a wrong conclusion just like a missing one. The base said the "F" field "shows" the size; the skill concluded an exact size cannot be typed. The field is editable. Facts should say what a control does, not only what it shows.
- The skill applied a correction across the plan: after learning the "F" field takes typed values, it also fixed TC-1 ("no typed size field in the 'Font size' control").
- Shortcut values are given as "about 106 / 116 / 86". The code rounds each step (96 → 106 → 117, 96 → 87), so exact values were possible had the base said so.
- Case header format differs between runs ("Priority: Medium · Type: functional" and "Issue: #10506" in run 6; separate lines, an "ID" line and "Tags: issue-10506" in run 7). conventions.md does not define the header, so the model improvises.

### Backlog
- conventions.md: add a case template (fields, order, tag format) so the output is the same between runs.
- MCP tool to read a saved change set (the skill could not show the run 6 cases when asked).
- Knowledge: state rounding of the size shortcuts.
