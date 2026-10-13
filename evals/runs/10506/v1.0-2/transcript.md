## Turn 1: runner

Write test cases for Excalidraw issue #10506.

## Turn 1: agent (tools: Skill, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, Read, Read, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I've opened the test-case session for #10506. I need your answers before I plan or write any cases.

**What the issue asks.** The author first asks for more font size presets beyond "Very large" (36), such as "2xl .. 10xl". In a follow-up comment they say they found they can already scale text from a corner. Their real question is then how to make two large texts exactly the same size. The issue is open and unlabeled, and no maintainer has replied, so nothing has been agreed. Nothing in the issue looks suspicious.

**What it affects.** It touches font size: the presets, the "F" field in the "Properties" panel (Alt+/), the Ctrl+Shift+> / < shortcuts and corner resizing. Areas that could break include several selected texts, new text defaults, text in shapes and sticky notes, copy/paste styles, copies, undo/redo, reload, saved files and PNG/SVG export. Existing cases C-002, C-005, C-006, C-009, C-011–C-017 already cover these, so I expect to update them rather than duplicate them.

**One oddity.** The team's knowledge base says the "F" field was confirmed "during the issue 10506 session" on 2026-10-10, but the server has no earlier session for this issue. That fact is reviewed, so I'll keep using it; I'm mentioning it in case an earlier session was lost.

**Questions (each has a suggested answer):**

1. **Is this a product change?** No new presets have been confirmed.
   *Suggested:* write cases for what exists today. That means making large text at an exact, matching size via the "F" field, paste styles, a size change on several selected texts, and Ctrl+Shift+> / <. Update existing cases where possible.
2. **If new presets are wanted, what are their names, values and layout?**
   *Suggested:* the product owner gives the exact list, for example 48 / 64 / 80 / 96 / 128. I won't make up values.
3. **Is there a largest font size?** And what happens if someone types 0, a negative number or text into "F"?
   *Suggested:* the limit isn't known. Test 500 as a working value and mark the limits and rejected input "(verify)".
4. **Corner resize:** after scaling a text from a corner, does "F" show the new size (possibly not a whole number), and does the highlighted preset go away?
   *Suggested:* yes to both, marked "(verify)". Texts scaled by hand aren't expected to match exactly; "F" or paste styles is the way to match them.
5. **Large sizes for text in shapes and in sticky notes?**
   *Suggested:* one case each. The shape grows to fit the text. A sticky note label is capped at 512 and never shows larger than the picked size.
6. **Reload, saved file and PNG/SVG export?**
   *Suggested:* yes. Add one large exact size (for example 120) to the existing cases. Live collaboration is out of scope.

Answer each one, or say "accept suggestions". Also note that the product profile (`config/product.md`) hasn't been filled in yet, so I'm using the area names from the existing cases.

## Turn 2: runner

Answers from the product owner:
- More presets only, no typed size field in the Font size control.
- Two new presets after "Very large": "Huge" = 56 and "Giant" = 96. The existing four keep their labels and sizes.
- A size between presets, or a selection with mixed sizes, highlights no preset until one is clicked; clicking a preset sets that exact size on every selected text. A text at exactly 56 or 96, however it got there, shows its preset highlighted.
- Tooltips "Huge" and "Giant"; no new shortcuts; the increase and decrease shortcuts are unchanged and have no upper limit.
- Text in shapes wraps and the shape grows taller; arrow labels stay at the middle; sticky note labels offer both presets and keep auto-fit, with the picked preset highlighted.
- Copy and paste styles, copies and undo/redo carry the new sizes; reload, saved file, PNG and SVG export and live collaboration keep them.
- All six presets fit the 375 px mobile panel. Latest Chrome, Firefox and Safari on desktop plus Safari on iOS. Older Excalidraw versions are out of scope.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I recorded the answers. Two of your questions weren't covered by the product owner, so for those I used my suggested answers and marked them that way:

- **"F" field limits:** 500 is tested as a value that works. Any upper limit, and whether 0, a negative number or text is rejected, are marked "(verify)".
- **Corner resize:** the "F" field shows the new size, which may not be a whole number (verify). Two texts scaled by hand aren't expected to match exactly; a preset, the "F" field or paste styles is how to match them.

The rest is recorded as the product owner gave it. The two new presets are "Huge" = 56 and "Giant" = 96, and nothing else changes. The other answers cover the preset highlight rule, text in shapes, arrows and sticky notes, keeping the new sizes through copies, history and export, live collaboration, and the 375 px layout and browsers.

To approve the answers, run this in the qa-agent folder:

```
npm run approve -- 10506
```

Once you've approved them, I'll submit the case plan.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__get_session, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan)

I submitted the case plan: **19 cases, 12 updated, 7 new, 0 retired.**

**Text properties**
- **update C-002:** switching presets now includes "Huge" (56) and "Giant" (96). Each click sets the exact size, shown in the "F" field, and highlights that preset. The existing Very large and Small steps stay.
- **create TC-1:** the "Font size" control shows six presets in order, with tooltips "Huge" and "Giant". It's checked for a selected text, the active Text tool, a rectangle with text and a sticky note.
- **create TC-2:** which preset is highlighted when the size wasn't set by clicking a preset:
  - typing 56, 96, 60 or 500 into "F";
  - Ctrl+Shift+> from 51 (gives 56) and from 87 (gives 96);
  - a corner resize.
- **create TC-3:** the size shortcuts go past "Giant" with no upper limit (96 → 106 → 117, and down gives 87), and the "Giant" highlight clears.
- **create TC-4:** typing 0, a negative number or text into "F". What gets rejected is marked "(verify)".
- **update C-005:** three texts with different sizes (Medium, one scaled by hand, one at 500) highlight no preset. Clicking "Huge" sets all of them to exactly 56. This answers the issue author's actual question.
- **update C-006:** new text uses "Giant" when it was the last size chosen.
- **create TC-5:** on a 375 px phone in Safari on iOS, all six presets are visible and can be tapped.

**Text in shapes and on arrows**
- **update C-009:** text set to "Giant" inside a rectangle wraps, and the rectangle grows taller while keeping its width.
- **create TC-6:** an arrow label at "Huge" or "Giant" stays at the middle of the arrow.
- **create TC-7:** a sticky note label at "Giant" still shrinks to fit for short and long text, and "Giant" stays highlighted.

**Styles, copies and history**
- **update C-011:** paste styles carries "Giant".
- **update C-012:** undo and redo work for a change from Medium to "Huge".
- **update C-013:** every way of copying keeps "Giant".

**Files, sharing and export**
- **update C-014:** a "Giant" text is still 96 after a reload.
- **update C-015:** a "Giant" text is still 96 in a saved .excalidraw file.
- **update C-016:** PNG export shows "Huge" and "Giant" texts at matching sizes, with nothing cut off.
- **update C-017:** SVG export shows a "Giant" text at the same size.
- **update C-018:** a change to "Giant" reaches the other user in live collaboration; the color check stays.

**Not changed:** C-001, C-003, C-004, C-007, C-008, C-010.

**Warning: some current checks will be lost.**
- C-005, C-006, C-009 and C-011 to C-015 now use "Huge" or "Giant" instead of "Large". The behavior they test is the same, but "Large" will no longer be checked in those flows.
- In C-005, all three texts no longer start at the same size.
- C-009 used to expect the text to fit at "Large"; it now expects wrapping and a taller rectangle at "Giant".

Tell me if you'd rather keep "Large" in any of these and add the new size next to it.

To approve the plan, run this in the qa-agent folder:

```
npm run approve -- 10506
```

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I saved the test cases for #10506: **19 cases, 12 updated and 7 new, none retired.** The file is `changes\excalidraw-10506.md`, and that completes the workflow for this issue.

**Updated cases:** C-002, C-005, C-006, C-009, C-011, C-012, C-013, C-014, C-015, C-016, C-017, C-018.
**New cases:** TC-1 to TC-7.

**What each behavior is covered by**
| Behavior | Cases |
|---|---|
| Six presets: order, tooltips, where the control appears | TC-1 |
| Each preset sets an exact size (16, 36, 56, 96) and is highlighted | C-002 |
| Highlight when the size is typed, set by shortcut or set by corner resize | TC-2 |
| Shortcuts have no upper limit above "Giant" (106, 117, then 87) | TC-3 |
| Invalid input in the "F" field | TC-4 |
| Texts of different sizes made equal with one click (the author's question) | C-005 |
| New text uses the last chosen size | C-006 |
| 375 px phone in Safari on iOS | TC-5 |
| Text in a shape, an arrow label, a sticky note | C-009, TC-6, TC-7 |
| Paste styles, undo/redo, copies | C-011, C-012, C-013 |
| Reload, saved file, PNG, SVG, live collaboration | C-014, C-015, C-016, C-017, C-018 |

**Not covered**
- **Other interface languages:** you weren't asked about translations of "Huge" and "Giant", so long translated labels and right-to-left layouts aren't tested.
- **Older Excalidraw versions:** the product owner put them out of scope.
- **Not touched by this change:** C-001, C-003, C-004, C-007, C-008, C-010.

**Points the tester needs to check, marked "(verify)" in the cases**
- **Invalid input in "F":** the product owner didn't decide this. TC-4 expects 0, a negative number, text or an empty field to be rejected and the size to stay at 56.
- **Corner resize:** after scaling by hand, "F" may show a size that isn't a whole number.
- **Shortcuts and controls:** pressing T for the text tool, and how the properties panel opens on a phone.

**Why these test values**
- **51 and 87:** one Ctrl+Shift+> press rounds them to exactly 56 and 96, so the shortcut lands on each new preset.
- **60:** a size between presets, which should highlight nothing.
- **500:** the large value you accepted for the "F" field.
- **Medium, then a corner resize, then 500:** three ways of reaching different sizes in the same selection.

**Coverage that changed:** C-005, C-006, C-009 and C-011 to C-015 now use "Huge" or "Giant" instead of "Large", so "Large" is no longer checked in those flows. C-018 keeps its color check and adds the "Giant" check.

**Knowledge base:** I proposed 6 facts from the product owner's decisions, all tagged as not yet released (issue 10506). They cover:
- the new presets;
- the highlight rule;
- shortcuts with no upper limit;
- the 375 px layout;
- shapes, arrow labels and sticky notes;
- copies, history and export.

To review them, run this in the qa-agent folder:
```
npm run review-knowledge
```
