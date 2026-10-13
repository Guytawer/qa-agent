## Turn 1: runner

Write test cases for Excalidraw issue #11404.

## Turn 1: agent (tools: Skill, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, Read, Read, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

Issue #11404, "Add support for italic text", is an open feature request with no labels. It lists three possible ways to do it and doesn't pick one. Two contributors commented that they'd like to work on it, but there's no decision from a maintainer, so I'm treating those comments as ideas, not as the spec. The server found nothing suspicious in the issue (no hidden instructions or outside links).

**Note:** the team's product profile is still the empty template. I'm using the reviewed knowledge base instead, and I'll mark product facts that come from neither source as (verify).

**What I understand:** a user can make a text element italic, using a control in the properties panel and/or a shortcut. The text then shows italic on the canvas and everywhere the text goes (editor, copies, files, exports, live collaboration).

**Existing cases this touches:** C-001 font family, C-005 several texts selected, C-006 new text uses the last style, C-007 and C-009 text in shapes, C-010 arrow label, C-011 copy/paste styles, C-012 undo/redo, C-013 copies, C-014 reload, C-015 saved file, C-016 PNG export, C-017 SVG export, C-018 live collaboration.

## Questions before I write cases
Each has a suggested answer. Reply with "accept" or with corrections.

1. **How italic is turned on.** The issue offers an "Italic" toggle, Ctrl+I, or a separate italic font. *Suggested:* an "Italic" toggle next to the text align control, with the tooltip "Italic (Ctrl+I)", plus Ctrl+I / Cmd+I. No separate italic font.
2. **What gets italic.** *Suggested:* the whole text element only, never part of it. Pressing Ctrl+I while editing with part of the text highlighted still makes the whole text italic or not.
3. **Shortcut.** *Suggested:* Ctrl+I / Cmd+I turns italic on or off for the selected text or the text being edited. With nothing selected, or only shapes without text, it does nothing. The browser's own Ctrl+I action (for example Page Info in Firefox) never opens while the canvas has focus, and no existing Excalidraw shortcut is taken over.
4. **Where the toggle shows.** *Suggested:* when a text, a shape with text, an arrow with a label or a sticky note is selected, or the Text tool is active. It doesn't show for shapes without text or when nothing is selected.
5. **Fonts with no italic version.** Hand-drawn (Excalifont), Code (Comic Shanns) and others may not have one. *Suggested:* every font shows slanted text, faked where the font has no italic version, and the toggle is never disabled. Chinese/Japanese/Korean text, right-to-left text and emoji are never clipped or garbled.
6. **Several texts selected, only some italic.** *Suggested:* the toggle shows as off. One click makes all of them italic; a second click removes italic from all.
7. **New text.** *Suggested:* the last italic setting you chose is used for new text, the same way font family and size work today.
8. **Size and wrapping.** *Suggested:*
   - The text box widens so the slanted last letter is never cut off.
   - Text inside a shape re-wraps, and the shape grows taller if needed while its width stays the same.
   - An arrow label stays at the middle of the arrow.
   - A sticky note's automatic text sizing takes italic into account.
9. **Editing.** *Suggested:* the text editor shows italic exactly as the canvas does, so the text doesn't jump when editing starts or ends.
10. **Copies and history.** *Suggested:* these all keep italic: copy/paste styles, Ctrl+C then Ctrl+V, Ctrl+D, Alt+drag and library items. One undo reverts an italic change and redo brings it back.
11. **Saving, export and sharing.** *Suggested:* italic survives:
    - a page reload and a saved .excalidraw file
    - PNG and SVG export (the SVG shows italic on a computer without the fonts) and copy as PNG/SVG
    - live collaboration

    An older Excalidraw version opens a file with italic text without an error and shows the text upright.
12. **Other languages and small screens.** *Suggested:* if a language has no translation for "Italic", the English label shows, never an empty label or a raw key name. The toggle fits a 375 px wide properties panel on mobile and works by tap.

Once you've answered, I'll record your answers and ask you to approve them.

## Turn 2: runner

Answers from the product owner:
- A panel toggle and Ctrl/Cmd+I; one italic property per text element, no separate font.
- Whole element only. Bold is out of scope.
- Synthetic oblique is allowed; text stays readable and unclipped in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew (right to left), emoji and mixed scripts; direction and alignment unchanged.
- The last italic value becomes the default for new text.
- Color and opacity changes keep italic.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I've recorded the product owner's answers for #11404. Each one is marked **(user)** if it came from them or **(accepted suggestion)** if it's one of my suggested answers you accepted. Your answers changed or added these points:

- **Q1:** the toggle plus Ctrl/Cmd+I, one italic setting per text element, no separate font. The label "Italic", its place next to text align and the tooltip are suggested answers you accepted.
- **Q2:** the whole text only, and bold is out of scope.
- **Q5:** faked (slanted) italic is allowed. Text must stay readable and not cut off in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji and mixed scripts, and italic doesn't change text direction or alignment.
- **Q7:** the last italic setting becomes the default for new text.
- **Q10, added:** changing color or opacity keeps italic.
- **Q3, Q4, Q6, Q8, Q9, Q11 and Q12:** my suggested answers.

To approve the answers, run this in a terminal in the qa-agent folder:

```
npm run approve -- 11404
```

Tell me when it's done. I'll then plan the cases: which existing cases to update and which new ones to create.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan)

I've submitted the case plan for #11404. The server counts **24 cases: 11 updated, 13 new, 0 retired, 0 kept unchanged.**

**Text properties**
- update C-001: the text starts italic and is still italic after a font change
- update C-004: the text starts italic; add an opacity change after the color change; italic is kept after both
- update C-006: also turn on "Italic" before making new text; the new text is italic
- create TC-1: turning italic on and off with the "Italic" toggle and with Ctrl+I / Cmd+I. Checks the toggle's pressed state, that nothing else changes, and that no browser action opens.
- create TC-2: Ctrl+I with no text selected (nothing selected, or only a shape without text)
- create TC-3: where the "Italic" toggle is shown
- create TC-4: italic while a text is being edited (Ctrl+I with part of the text highlighted; the editor matches the canvas)
- create TC-5: italic in each font (the three quick-choice fonts and one from the full list)
- create TC-6: italic text in different scripts (Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji, mixed)
- create TC-7: several texts, only some italic: the toggle's state, and one click for all
- create TC-8: the "Italic" label and tooltip in another interface language
- create TC-9: the "Italic" toggle in the mobile layout

**Text in shapes and on arrows**
- create TC-10: italic text inside a shape
- create TC-11: italic arrow label
- create TC-12: italic sticky note label

**Styles, copies and history**
- update C-011: "Source" is italic and "Target" isn't; after paste styles, "Target" is italic
- update C-012: add a table with the existing font size change plus an italic change; each is undone with one undo and brought back with redo
- update C-013: the original is italic, and every copy is italic

**Files, sharing and export**
- update C-014: the text is italic and still italic after reload
- update C-015: the text is italic and still italic after save and open
- update C-016: add an italic text, and a "copy to clipboard as PNG" row next to PNG export
- update C-017: add an italic text; it is italic on the second computer
- update C-018: add a table with the existing red color change plus an italic change; both reach user B
- create TC-13: an older Excalidraw version opens a file with italic text

**Not changed:** C-002, C-003, C-005, C-007, C-008, C-009, C-010

**Warning:** none. Every update only adds italic checks; no existing check of current behavior is removed.

**Not covered:**
- **Copy to clipboard as SVG:** there's no simple way for a tester to see the result. SVG output is covered by C-017.
- **Bold:** out of scope, as the product owner said.

To approve the plan, run this in a terminal in the qa-agent folder:

```
npm run approve -- 11404
```

Tell me when it's done and I'll write and save the cases.

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I wrote and saved the test cases for #11404 (italic text) as a pending change set in `changes\excalidraw-11404.md`. The server counts **24 cases: 11 updated, 13 new, 0 retired, 0 kept unchanged.**

## Existing cases updated
- **Text properties:** C-001 (font change keeps italic), C-004 (color and opacity changes keep italic), C-006 (new text uses the last italic setting).
- **Styles, copies and history:** C-011 (paste styles), C-012 (undo/redo now has a font size row and an italic row), C-013 (copies).
- **Files, sharing and export:** C-014 (reload), C-015 (saved file), C-016 (PNG export, plus a new row for copy to clipboard), C-017 (SVG on another computer), C-018 (live collaboration, with a color row and an italic row).

The updates only add italic checks; none removes an existing check.

## New cases and what they cover
| Behavior | Cases |
|---|---|
| Turning italic on and off with the toggle, Ctrl+I and Cmd+I; no browser action | TC-1 |
| Ctrl+I with no text selected does nothing | TC-2 |
| Where the toggle is shown | TC-3 |
| Italic while editing, with part of the text highlighted; the text doesn't jump | TC-4 |
| Each font, including faked italic | TC-5 |
| Scripts, right-to-left text, emoji; direction and alignment unchanged | TC-6 |
| Several texts, only some italic | TC-7 |
| Other interface languages | TC-8 |
| Mobile layout at 375 px, touch | TC-9 |
| Text in a shape, arrow label, sticky note | TC-10, TC-11, TC-12 |
| An older Excalidraw version opening the file | TC-13 |

## Not covered
- **Copy to clipboard as SVG:** a tester can't easily see the result. SVG output is covered by C-017.
- **Bold:** out of scope, as the product owner said.

## Assumptions
These are my suggested answers you accepted, not the product owner's:
- The "Italic" label, its place next to text align and the tooltip "Italic (Ctrl+I)".
- How the shortcut behaves.
- Where the toggle is shown.
- What the toggle shows when only some selected texts are italic.
- How text wraps and resizes in shapes, arrow labels and sticky notes.
- That the editor matches the canvas.
- That every way of copying keeps italic.
- That italic survives saving, export and sharing, and how an older version handles it.
- The English fallback for missing translations, and the mobile layout.

These product facts aren't in the knowledge base, so they're marked **(verify)** for the tester to check:
- Firefox opening Page Info on Ctrl+I.
- The "Opacity" control.
- The language list in the main menu.
- The "Copy to clipboard" button in the export dialog.
- The "Lilita One" font.

## Why these values
- **Fonts:** the three quick-choice fonts, plus one font from the full list, because those can have a different line height.
- **Scripts:** every script the product owner listed, set across left, center and right alignment.
- **Languages:** German for longer words, Arabic for a right-to-left layout, Japanese for a non-Latin script.

## Knowledge proposals
I proposed 6 facts for the knowledge base, all tied to issue 11404 so they stay pending until the feature ships:
- 3 are the product owner's decisions: one italic setting per text with the toggle and shortcut; faked italic allowed in every script; the default for new text and keeping italic through color and opacity changes.
- 3 come from suggested answers you accepted: shortcut behavior, several texts with only some italic, and saving/export/sharing.

To review them, run this in a terminal in the qa-agent folder:

```
npm run review-knowledge
```
