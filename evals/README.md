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

The grader agrees with what the reviews found by hand. Each row is one run; variance is still unknown.

## Two kinds of coverage

A missed `coverage` check means the agent did not do what it was told. A missed `discovery` check means its own analysis did not reach a feature the change touches. They fail for different reasons and are fixed differently (a skill rule or a server check for the first, a checklist of touched features for the second), so the report keeps them apart:

```
npm run eval-report
case | label | runs | mean score | min-max | cases (min-max) | required kept | discovery found | checks that failed (times)
```

`required kept` covers every check the agent was told about (shape, updates, coverage, forbidden content, process). `discovery found` is the share of discovery checks found across runs, with the per-run counts.

A discovery check exists only when the decisions leave room to find something. `10506` has none: its decisions list every touched feature. In `99001` ("accept all your suggested answers") and `99002` ("accept your suggestions for everything else") the agent's own questions decide what gets covered, so what it forgets to ask about is never covered.

When a check changes, `npm run regrade -- "<reason>"` grades every row of `results.jsonl` again from the change set it names and appends the reason to the row's note.

## Reading a failed check

Every failed check is triaged before the score counts: either the agent missed something, or the check is too narrow. The first automated run failed "text inside a shape", but C-009 covered it ("a rectangle ... with the text ... inside it"); the pattern was widened and the run regraded, with a note in `results.jsonl`.

`99002 v0.9 #1` failed "text editor", and this time the agent missed it: none of the 23 cases edits a text with a line height set. Run `#2` has the case (double-click, Enter, Esc, lines do not jump). The check was not in the decisions: in runs 10 and 11 the agent itself suggested it ("the editor shows the same line spacing as the canvas"), and the PO accepted the suggestion. In `#1` it never asked, so nothing was approved and nothing was written. This is why discovery became its own group.

## Next: repeated runs

A runner drives Claude Code in headless mode through the whole workflow (prompt, the case's decisions, approvals by the test harness), in temporary state, changes and knowledge folders, with only the qa-agent tools allowed. Each case runs several times per skill version; the report shows the mean score and the spread.
