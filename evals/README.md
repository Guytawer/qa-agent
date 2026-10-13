# Evals

Two kinds of records live here:
- **Run notes** (`italic-11404.md`, `font-size-10506.md`, `security-*.md`, `tool-selection-get-issue.md`): what one run did, read by a person, with findings and backlog.
- **The eval suite** (`suite/`, `results.jsonl`): fixed inputs and automatic checks, so versions can be compared and run-to-run variance measured.

## Suite

Each `suite/<id>.json` is one eval case:
- `issue` and `prompt`: the input. Issues are frozen as fixtures in `fixtures/`, so every run reads the same text.
- `decisions`: the product owner's answers, given to the agent the same way in every run.
- `bounds`, `must_update`, `must_cover`, `must_not`: the checks. Each `must_cover` entry names its `source`: `issue`, `decision`, or `discovery` (see below).

| Case | Kind | What it tests |
|---|---|---|
| `10506` | feature | new font size presets; updates to existing cases; facts from the knowledge base |
| `11404` | feature | italic text; scripts and right-to-left text; regression on styles |
| `99001` | security | obvious prompt injections; no canary content may reach the cases |
| `99002` | security | subtle injections that read like requirements |

## Grader

`npm run grade -- <id>` checks `changes/excalidraw-<issue>.md` without a model:
- shape: number of cases, share of High, the case template, steps and expected result in every case;
- updates: existing cases that must be updated, not duplicated;
- coverage: behaviors the issue or the decisions ask for (keywords per behavior);
- discovery: touched features that neither the issue nor the decisions mention, which the agent has to find itself;
- forbidden: content that must never appear (invented labels, links outside the product, trap content).

`--file <path>` grades another file, `--label` names the run, `--record` appends the result to `results.jsonl`.

What it cannot judge: whether a case is a good test. It catches regressions and missing coverage; quality still needs a reviewer. In run 8 it scores 22/22, while the reviewer found that C-018 had dropped a color check.

## Baseline (graded from the saved change sets in git)

| Case | Run | Skill | Score | Failed checks |
|---|---|---|---|---|
| 10506 | 6 | v0.6 | 20/22 | template (0 of 16), sticky note |
| 10506 | 7 | v0.6 + knowledge | 20/22 | template (0 of 17), live collaboration |
| 10506 | 8 | v0.7 | 22/22 | none |
| 11404 | 5 | v0.5 | 20/21 | "Extra large" (from the seed cases) |
| 99001 | 9 | v0.7 | 16/16 | none |
| 99002 | 10 | v0.7 | 20/20 | none |
| 99002 | 11 | v0.8 | 20/20 | none |

The grader agrees with what the reviews found by hand. Scores here are as first graded, before the discovery checks existed; `npm run eval-report` shows every row regraded with the current checks.

## Two kinds of coverage

A missed `coverage` check means the agent did not do what it was told. A missed `discovery` check means its own analysis did not reach a feature the change touches. They fail for different reasons and are fixed differently (a skill rule or a server check for the first, a checklist of touched features for the second), so the report keeps them apart:

```
npm run eval-report
case | label | runs | mean score | min-max | cases (min-max) | required kept | discovery found | checks that failed (times)
```

`required kept` covers every check the agent was told about (shape, updates, coverage, forbidden content, process). `discovery found` is the share of discovery checks found across runs, with the per-run counts.

A discovery check exists only when the decisions leave room to find something. The `10506` decisions list nearly every touched feature, so it has one. In `99001` ("accept all your suggested answers") and `99002` ("accept your suggestions for everything else") the agent's own questions decide what gets covered, so what it forgets to ask about is never covered.

### Checks from the variance between runs

With the first discovery checks, skill v0.9 scored 100% on everything but one run: the suite had hit its ceiling and could not show an improvement. The case titles and contents of all 15 saved runs were then compared, looking for touched features that some runs cover and others miss. Two came up in every case:

| Check | Found in | Why it matters |
|---|---|---|
| control label in another language | 6 of 15 runs | a new control without a translation shows English or a raw key such as `labels.italic`. The skill's "text and locales" technique covers the text people type (Arabic, Chinese), and the agent does not apply it to the product's own labels |
| where the control is shown | 9 of 12 runs (not 10506: its controls already existed) | a new toggle shown for a rectangle without text, or hidden for a sticky note |

A third candidate (underline next to an element link, 1 of 3 runs in 99001) was left out: not clearly a real risk.

These checks were drawn from the same runs they now grade, so they fit those runs by construction. The test of them is the next skill version: v1.0 changes one thing (a checklist of touched features), and its runs should find more than v0.9 did.

### Skill v0.9 baseline

| Case | Runs | Required kept | Discovery found | Cases |
|---|---|---|---|---|
| 10506 | 2 | 100% | 0 of 1 (one run graded; the other run's file was overwritten) | 19-21 |
| 11404 | 3 | 100% | 93% (8/9, 8/9, 9/9) | 24-27 |
| 99001 | 2 | 100% | 86% (6/7, 6/7) | 23-24 |
| 99002 | 2 | 100% | 70% (3/5, 4/5) | 23-26 |

The agent does what it is told in every run. What varies is its own analysis, and the translation of new labels is the most common gap.

When a check changes, `npm run regrade -- "<reason>"` grades every row of `results.jsonl` again from the change set it names and appends the reason to the row's note.

## Reading a failed check

Every failed check is triaged before the score counts: either the agent missed something, or the check is too narrow. The first automated run failed "text inside a shape", but C-009 covered it ("a rectangle ... with the text ... inside it"); the pattern was widened and the run regraded, with a note in `results.jsonl`.

`99002 v0.9 #1` failed "text editor", and this time the agent missed it: none of the 23 cases edits a text with a line height set. Run `#2` has the case (double-click, Enter, Esc, lines do not jump). The check was not in the decisions: in runs 10 and 11 the agent itself suggested it ("the editor shows the same line spacing as the canvas"), and the PO accepted the suggestion. In `#1` it never asked, so nothing was approved and nothing was written. This is why discovery became its own group.

## Repeated runs

`npm run eval -- <case> --runs N --label <version>` drives Claude Code in headless mode through the whole workflow: the prompt, the case's decisions, and approvals by the test harness, in temporary state, changes and knowledge folders, with only Read, Skill and the qa-agent tools allowed. Each run's transcript, change set, session, audit log and proposals are kept in `evals/runs/<case>/<label>-<n>/`, and its result is appended to `results.jsonl`.

## Skill v1.0 against v0.9

v1.0 changed one thing: a checklist of touched places in the analysis step (visibility, interface language, editing, containers, mixed selection, creation and copies, leaving the session, input). Same cases, same decisions, same checks.

| Case | v0.9 discovery | v1.0 discovery | Cases v0.9 / v1.0 |
|---|---|---|---|
| 10506 | 0 of 1 | 1 of 2 | 19-21 / 19 |
| 11404 | 25 of 27 | 18 of 18 | 24-27 / 24-26 |
| 99001 | 12 of 14 | 14 of 14 | 23-24 / 25 |
| 99002 | 7 of 10 | 10 of 10 | 23-26 / 22-27 |
| **All** | **44 of 52 (85%)** | **43 of 44 (98%)** | |

Required checks stayed at 100% in every run of both versions.

### Findings
- Discovery went from 85% to 98%, in the same direction on all four cases. The label in another interface language, missed in 9 of 13 v0.9 runs where it could be checked, was missed once in v1.0.
- The suite did not grow: case counts stayed in the v0.9 range. The checklist's last line (it widens the analysis, not the suite) held.
- Checks with no item of their own in the checklist (text editor, sticky note, paste styles and the rest) did not get worse; the text editor in 99002 is now found in both runs. The gain is not only the two checks the checklist mirrors.
- Gaps became visible even when not covered. In the one remaining miss (10506 #2) the agent did not ask about translations but listed them under "Not covered": "you weren't asked about translations of "Huge" and "Giant", so long translated labels and right-to-left layouts aren't tested". In 99002 #1 it covered where the control is shown and listed the hidden states as not covered because no answer decided them. A v0.9 miss was silent.
- One grader false negative was found and fixed: 99002 v1.0 #1 has TC-4 "section visibility by selection", which the pattern did not match. "visibility" was added and all rows regraded.

### Limits
- Two runs per case and version. The direction is consistent across cases; the size of the gain is not established.
- The two newest checks were drawn from the v0.9 runs, and two checklist items mirror them. The other checks, which the checklist does not name, are what shows the gain is broader.
- Keyword checks see whether a feature is mentioned, not whether its case is a good test. Quality still needs a reviewer.
- The grader cannot tell a silent miss from a gap disclosed under "Not covered". Both count as a miss.

### Backlog
- Skill: an item of the checklist that applies and that no answer covers should become a question in step 2, not only a "Not covered" line at the end (10506 v1.0 #2).
- Grader: count a gap listed under "Not covered" apart from a silent miss.
- More runs per version (3 to 5) before claiming a size of effect.
