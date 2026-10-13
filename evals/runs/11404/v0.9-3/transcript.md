## Turn 1: runner

Write test cases for Excalidraw issue #11404.

## Turn 1: agent (tools: Skill, Read, Read, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I've started the review for issue #11404. Before I write any test cases I need your answers to the questions below.

**What the issue asks for:** a user wants to make text italic. Today they can pick fonts, but no option makes text italic. They suggest an Italic option in the style panel, Ctrl+I / Cmd+I, or a font that has an italic style. The issue doesn't say which of these to build or how italic should behave.

**Notes**
- I found nothing suspicious in the issue or its two comments. Both comments are from contributors offering to work on it.
- The product profile hasn't been set up yet, so I used the team's approved product facts and the existing cases instead.
- Existing cases that italic would affect: C-001 (font family), C-005 (several selected texts), C-006 (new-text defaults), C-007, C-009 and C-010 (text in shapes and on arrows), C-011, C-012 and C-013 (paste styles, undo/redo, copies), and C-014 to C-018 (reload, saved file, PNG and SVG export, live collaboration). No existing case covers italic.

**Open questions (each with a suggested answer)**

1. **Which of the three options ships?** Suggested: an "Italic" toggle in the properties panel and Ctrl+I (Cmd+I on macOS), with no separate italic font in the font list.
2. **Whole text or part of it?** Suggested: italic applies to the whole text element. You can't make part of a text italic.
3. **Where is the toggle, and what are its label and tooltip?** Suggested: an "Italic" toggle next to the text align control, with the tooltip "Italic (Ctrl+I)". It shows when a text, a shape with text or an arrow with a label is selected, or when the Text tool is active.
4. **How does Ctrl+I behave?**
   - It switches italic on or off for the selected text, and for the text being edited even if only part of it is highlighted.
   - With nothing selected, it does nothing.
   - The browser's own Ctrl+I action (for example Firefox's "Page Info") never opens while the canvas has focus.
5. **What about fonts with no real italic style** (Hand-drawn, Code, CJK)? Suggested: the text is slanted instead, and the toggle is never disabled.
6. **What if several texts are selected and only some are italic?** Suggested: the toggle shows as off. One click makes them all italic, and a second click makes them all upright.
7. **Does new text keep italic?** Suggested: yes. The last chosen italic value becomes the default for new text, like font family and size.
8. **How does italic affect layout?**
   - The slanted last character is never cut off, and the text box widens to fit.
   - Text inside a shape re-wraps, and the shape grows taller while its width stays the same.
   - An arrow label stays at the middle of the arrow.
   - A sticky note's auto-fit takes italic into account.
9. **Is italic kept when saving and sharing?**
   - Italic survives:
     - a page reload
     - a saved .excalidraw file
     - PNG and SVG export (including on a computer without the fonts)
     - copy as PNG/SVG
     - live collaboration
   - An older Excalidraw version opens the file without errors and shows the text upright.
10. **Do copies and undo keep italic?** Suggested: paste styles, Ctrl+C then Ctrl+V, Ctrl+D, Alt+drag and library items keep italic. One undo reverses one italic toggle.
11. **How should other scripts look?** Suggested: right-to-left text, CJK and emoji are never cut off and lines stay intact. The slant on emoji is left to the browser.
12. **Which platforms are in scope?** Suggested:
    - desktop Chrome, Firefox, Safari and Edge on Windows and macOS
    - the mobile layout at 375 px wide, where the toggle must be reachable
    - in other languages, the label falls back to English
13. **What about italic combined with underline?** Underline (issue 99001) isn't released yet. Suggested: leave that combination out for now and add a case once underline ships.

Please answer each question, or say "accept suggestions" for any you agree with. I'll wait for your answers before planning the cases.

## Turn 2: runner

Answers from the product owner:
- A panel toggle and Ctrl/Cmd+I; one italic property per text element, no separate font.
- Whole element only. Bold is out of scope.
- Synthetic oblique is allowed; text stays readable and unclipped in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew (right to left), emoji and mixed scripts; direction and alignment unchanged.
- The last italic value becomes the default for new text.
- Color and opacity changes keep italic.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I've recorded the answers. Each one is marked as either the product owner's answer or one of my suggestions you accepted.

Two of the answers combine both:
- **Q5:** synthetic slant is the product owner's answer; "the toggle is never disabled" is my suggestion.
- **Q11:** the list of scripts is the product owner's answer; "whether emoji look slanted is up to the browser" is my suggestion.

I added the color and opacity answer as item 14.

Please approve the answers by running this in a terminal, in the qa-agent folder:

```
npm run approve -- 11404
```

After that, I'll send you the case plan to approve.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__get_session, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan)

Here's the case plan. It has **27 cases: 13 updated, 14 new, 0 retired, 0 kept unchanged.**

**Text properties**
- create TC-1: "Italic" toggle: making a text italic and upright again
- create TC-2: Ctrl+I / Cmd+I on a selected text, in each desktop browser
- create TC-3: Ctrl+I while editing a text with part of it highlighted
- create TC-4: Ctrl+I with nothing selected
- create TC-5: "Italic" toggle: when it is shown
- create TC-6: Italic in fonts with and without an italic style
- create TC-7: Italic text in different scripts
- create TC-8: Several selected texts, only some italic: the "Italic" toggle
- create TC-9: "Italic" toggle in the mobile layout
- create TC-10: "Italic" label in a language other than English
- update C-001: changing the font of an italic text keeps it italic
- update C-004: changing the color and the opacity of an italic text keeps it italic
- update C-006: new text takes the last italic value, both on and off

**Text in shapes and on arrows**
- update C-007: after the text wraps, making it italic re-wraps it inside the rectangle; the shape grows taller and keeps its width
- update C-009: "Italic" with the rectangle selected applies to its text
- create TC-11: Arrow label: italic
- create TC-12: Sticky note label: italic and auto-fit

**Styles, copies and history**
- update C-011: paste styles carries italic from "Source" to "Target"
- update C-012: undo and redo of an italic toggle, one undo per toggle
- update C-013: copies of an italic text are italic

**Files, sharing and export**
- update C-014: italic kept after a page reload
- update C-015: italic kept in a saved .excalidraw file
- update C-016: italic text in a PNG export matches the canvas
- create TC-13: Copy to clipboard as PNG and as SVG: italic text
- update C-017: italic text in an SVG export opened on another computer
- update C-018: turning italic on reaches other users in live collaboration
- create TC-14: An older Excalidraw version opens a file with italic text

**Not changed:** C-002, C-003, C-005, C-008, C-010.

No update removes anything an existing case already checks; each one only adds italic to it. I put "new text after turning italic off" into the C-006 update instead of a separate case, because it tests the same behavior with different data.

To approve the plan, run this in a terminal, in the qa-agent folder:

```
npm run approve -- 11404
```

Once it's approved, I'll write the cases and save them.

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I've written and saved the test cases for issue #11404 (italic text) to `changes\excalidraw-11404.md`. That's **27 cases: 13 updated, 14 new, 0 retired**. They are pending until someone applies the change set.

**Existing cases updated:** C-001, C-004, C-006, C-007, C-009, C-011, C-012, C-013, C-014, C-015, C-016, C-017 and C-018. Each one only adds italic; nothing they already checked was removed.
**New cases:** TC-1 to TC-14.

**What each behavior is covered by**
| Behavior | Cases |
|---|---|
| "Italic" toggle: tooltip, on/off, nothing cut off | TC-1 |
| Ctrl+I / Cmd+I in each browser, including Firefox's own Ctrl+I window | TC-2 |
| Ctrl+I while editing with part of the text highlighted | TC-3 |
| Ctrl+I with nothing selected | TC-4 |
| When the toggle is shown | TC-5 |
| Fonts with and without a real italic style | TC-6 |
| Scripts: Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji, mixed | TC-7 |
| Several texts selected, only some italic | TC-8 |
| Mobile layout at 375 px | TC-9 |
| Other languages fall back to English | TC-10 |
| Font, color and opacity changes keep italic | C-001, C-004 |
| New text takes the last italic value, on and off | C-006 |
| Text in shapes, arrow labels, sticky note auto-fit | C-007, C-009, TC-11, TC-12 |
| Paste styles, copies, undo/redo | C-011, C-013, C-012 |
| Reload, saved file, PNG/SVG export, copy as PNG/SVG, live collaboration | C-014 to C-018, TC-13 |
| Older Excalidraw version opens a file with italic | TC-14 |

**Not covered**
- **Bold:** the product owner put it out of scope.
- **Italic combined with underline:** underline (issue 99001) isn't released yet.
- **C-002, C-003, C-005, C-008, C-010:** left unchanged, because italic doesn't change the behavior they check.

**Assumptions:** these are the suggested answers you accepted.
- The toggle sits next to text align, with the tooltip "Italic (Ctrl+I)".
- Ctrl+I behaves as described in question 4.
- Several selected texts with only some italic show the toggle as off.
- Shape, arrow-label and sticky-note layout follows the rules in question 8.
- Italic survives saving, export and collaboration; an older version shows the text upright.
- Copies, paste styles and undo keep italic.
- Platforms are the four desktop browsers plus the mobile layout.

**For the tester to check first (marked "verify" in the cases):**
- the "Opacity" label
- the "Copy to clipboard as PNG/SVG" labels
- the language picker
- how the properties panel opens in the mobile layout
- where to get an older Excalidraw build

**Why these test values:**
- **Browsers:** Firefox is tested on both Windows and macOS because its own Ctrl+I action is the most likely conflict. Each other browser is tested once.
- **Fonts:** the three quick-choice fonts, plus one from the full list.
- **Scripts:** one per script the product owner named, plus the characters most likely to be cut off ("fj", an emoji with a skin-tone modifier).

**Knowledge proposals:** I proposed 9 facts from the answers, all marked as belonging to the unreleased issue 11404. They aren't used until they're accepted. To review them, run this in a terminal, in the qa-agent folder:

```
npm run review-knowledge
```

The product profile is still empty, so area names come from the existing cases. Filling it in would help future sessions.
