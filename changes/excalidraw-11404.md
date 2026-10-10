# Change set: italic text (excalidraw#11404)

Status: **pending**. Italic text is not in Excalidraw yet, so these changes are not applied to `cases/`. Apply them when the feature ships.

How to apply:
- `update C-xxx`: replace that case in its file under `cases/` with the version below.
- `create`: add the case to the file of its area and give it the next free `C-` number.
- If the feature is dropped, delete this file; `cases/` stays as it is.

Produced by the qa-case-writer skill v0.4 with the `search_cases` tool, 2026-10-10. Reviewed: arrow label kept separate from C-010; C-001 and C-002 updated on the reviewer's decision.

27 cases for excalidraw#11404: 13 existing cases updated, 14 new, none retired. 6 are High priority. Cases are grouped by area; each section heading is the case's Area.

## Coverage

| Behavior | Cases |
|---|---|
| "Italic" toggle turns italic on and off | TC-1, TC-11 |
| Ctrl+I / Cmd+I, also while editing | TC-2, TC-3 |
| Toggle shows the state of the selection | TC-4, TC-5 |
| Several and mixed selections | C-005, TC-5 |
| No italic for elements without text | TC-6 |
| Rendering in each font, synthetic slant | TC-7 |
| Latin, Cyrillic, CJK, emoji, mixed scripts | TC-8 |
| Hebrew and Arabic, right to left | TC-9 |
| Alignment and measurement unchanged | TC-10, TC-7 |
| Italic kept after font family or size change | C-001, C-002 |
| Last italic value is the default for new text | C-006 |
| Text in shapes, wrapping, arrow labels | C-009, TC-12, TC-13 |
| Copy and paste styles, copies, library | C-011, C-013 |
| Undo and redo | C-012 |
| Reload, saved file, file from before italic | C-014, C-015, TC-14 |
| PNG and SVG export | C-016, C-017 |
| Live collaboration | C-018 |

Unchanged: C-003, C-004, C-007, C-008 and C-010. Italic in wrapped and aligned text is covered by TC-10 and TC-12; C-010 is not re-checked.

The product profile for the cases is still empty, so area names come from the existing cases. UI facts that neither the issue nor an existing case states are marked (verify) where they first appear.

## Assumptions

Suggested answers accepted by the product owner:

- While the canvas has focus, Excalidraw handles Ctrl+I / Cmd+I and the browser's own action doesn't fire.
- Selecting a shape or an arrow applies italic to its text.
- In a mixed selection the toggle is not shown as on, and one click makes all the selected texts italic.
- The shortcut in the text editor toggles the whole element, keeps the typed text, and leaves the editor open.
- The element's box includes the slant, so nothing is clipped on the canvas, in shapes, or in exports.
- Files saved without italic open upright.
- Desktop Chrome, Firefox and Safari on Windows and macOS are in scope. Touch devices use the toggle only.

Also assumed: the toggle's label is "Italic", and Chinese and Japanese text gets a synthetic slant like the other fonts without an italic face.

## Not covered

- Ctrl+I / Cmd+I with nothing selected: whether it sets the default for new text, and whether the browser action fires. This is undecided; worth asking the implementer.
- The browser action when a non-text element is selected. TC-6 checks only the canvas.
- Bold text and italic on part of a text are out of scope.
- Older Excalidraw versions opening files or joining sessions that contain italic are out of scope.
- Fonts in the font picker beyond the three in TC-7, and text in ellipses and diamonds. These are sampled by TC-7 and TC-12 and are left for exploratory testing.
- How the italic property is stored in the .excalidraw file and exposed to apps that embed Excalidraw. This needs a developer check.
- Keyboard focus and the screen-reader label of the toggle. The issue doesn't mention them.

## Text properties

11 new cases and 4 updated ones. Every case carries the tag excalidraw#11404.

### TC-1 "Italic" toggle: turning italic on and off

**Action:** create · **Priority:** High · **Type:** functional

**Preconditions:** The canvas contains one upright, black text element "Key finding" in the hand-drawn font at font size Medium.

**Steps:**

1. Click "Key finding".
2. In the properties panel, click the "Italic" toggle (verify the label and its place in the panel).
3. Click the "Italic" toggle again.

**Expected result:**

- After step 2, the letters slant to the right and the "Italic" toggle is shown as on.
- After step 3, the text is upright and the toggle is shown as off.
- The content, font family, font size, color and position stay the same throughout.
- After each step, the selection box encloses every character.

### TC-2 Italic shortcut: Ctrl+I and Cmd+I on a selected text element

**Action:** create · **Priority:** High · **Type:** functional

**Preconditions:** The canvas contains one upright text element "Emphasis". The browser and OS are as given in the row.

| Browser and OS | Shortcut |
|---|---|
| Chrome, Windows | Ctrl+I |
| Firefox, Windows | Ctrl+I |
| Safari, macOS | Cmd+I |

Chrome is the most used browser. Firefox and Safari bind Ctrl+I and Cmd+I to their own actions (Page Info, mail this page) (verify), so they are the riskiest.

**Steps:**

1. Click "Emphasis".
2. Press the shortcut from the row.
3. Press the shortcut from the row again.

**Expected result:**

- After step 2, "Emphasis" is italic and the "Italic" toggle is shown as on.
- After step 3, "Emphasis" is upright and the toggle is shown as off.
- No browser window, dialog or side panel opens.

### TC-3 Italic shortcut while editing text

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains one upright text element "Draft note".

**Steps:**

1. Double-click "Draft note" to open the text editor (verify).
2. Press End.
3. Type " v2".
4. Press Ctrl+I (Cmd+I on macOS).
5. Type " final".
6. Press Esc.

**Expected result:**

- After step 4, the whole text, including "Draft note", is italic, and the editor stays open with the caret at the end.
- After step 6, the element reads "Draft note v2 final" and is italic throughout.
- No typed character is lost or duplicated.

### TC-4 "Italic" toggle state follows the selection

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains an italic text element "Slanted" and an upright text element "Upright".

**Steps:**

1. Click "Slanted".
2. Click "Upright".
3. Click "Slanted".

**Expected result:**

- After steps 1 and 3, the "Italic" toggle is shown as on.
- After step 2, the toggle is shown as off.
- Neither text changes.

### TC-5 Mixed selection: italic and upright text together

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains an italic text element "Italic A" and an upright text element "Plain B".

**Steps:**

1. Click "Italic A".
2. Shift+click "Plain B".
3. Click the "Italic" toggle.
4. Click the "Italic" toggle again.

**Expected result:**

- After step 2, the toggle is not shown as on.
- After step 3, both texts are italic and the toggle is shown as on.
- After step 4, both texts are upright and the toggle is shown as off.

### TC-6 Italic on a selection without text

**Action:** create · **Priority:** Low · **Type:** negative

**Preconditions:** The canvas contains the element from the row and nothing else.

| Element |
|---|
| A rectangle with no text |
| A freehand line |

**Steps:**

1. Click the element.
2. Press Ctrl+I (Cmd+I on macOS).

**Expected result:**

- After step 1, the properties panel shows no "Italic" toggle.
- After step 2, the element is unchanged and no text element is created.

### TC-7 Italic rendering in each font family

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains one upright text element "Quick brown fox 0123" at font size Large, in the font from the row.

| Font family |
|---|
| Hand-drawn (default) |
| Normal |
| Code (verify) |

These are the default font, the sans-serif font and the monospace font. Size Large makes clipping at the right edge easy to see.

**Steps:**

1. Click "Quick brown fox 0123".
2. Click the "Italic" toggle.

**Expected result:**

- Letters and digits slant to the right.
- Every character, including the last "3", sits fully inside the selection box.
- The text starts at the same position as before step 2.
- The font family and font size are unchanged.

### TC-8 Italic text in left-to-right scripts and emoji

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas is empty. The text tool uses the hand-drawn font, upright, with text align Left.

| Text |
|---|
| Hypothesis confirmed |
| Гіпотезу підтверджено |
| 假设已确认 |
| 仮説は確認された |
| Deadline ⏰ moved 🚀 |
| Step 2: Перевірка 检查 ✅ |

One row per script the requirement names, plus emoji and one mixed-script row.

**Steps:**

1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Paste the text from the row.
4. Press Esc.
5. Click the text.
6. Click the "Italic" toggle.
7. Click the "Italic" toggle again.

**Expected result:**

- After step 6, the letters are slanted and the text stays readable.
- After step 6, no character or emoji is clipped, and the selection box encloses all of them.
- After step 6, the text still reads left to right, stays left-aligned and starts at the same position.
- After step 7, the text and its selection box are exactly as they were before step 6.

### TC-9 Italic text in right-to-left scripts

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas is empty. The text tool uses the hand-drawn font, upright.

| Text |
|---|
| ההשערה אושרה |
| تم تأكيد الفرضية |
| גרסה 2.1 approved |

Hebrew, Arabic (joined letters), and Hebrew mixed with digits and Latin.

**Steps:**

1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Paste the text from the row.
4. Press Esc.
5. Click the text.
6. Click the "Italic" toggle.
7. Click the "Italic" toggle again.

**Expected result:**

- After step 6, the letters are slanted and the text stays readable.
- After step 6, letters that were joined before stay joined.
- After step 6, the text still reads right to left; word order and the position of digits and Latin words are unchanged.
- After step 6, the text alignment is unchanged and no character is clipped at either edge.
- After step 7, the text and its selection box are exactly as they were before step 6.

### TC-10 Italic text with each text alignment

**Action:** create · **Priority:** Medium · **Type:** regression

**Preconditions:** The canvas contains an upright two-line text element, "Input received" on line 1 and "Processed output" on line 2, with the text align from the row.

| Text align |
|---|
| Left |
| Center |
| Right |

**Steps:**

1. Click the text.
2. Click the "Italic" toggle.

**Expected result:**

- Both lines keep their alignment.
- The aligned edge of the lines stays at the same position as before step 2.
- The last character of each line sits fully inside the selection box.

### TC-11 "Italic" toggle on a touch device

**Action:** create · **Priority:** Low · **Type:** functional

**Preconditions:** Excalidraw is open in Safari on an iPad with no keyboard attached. The canvas contains one upright text element "Tap me".

**Steps:**

1. Tap "Tap me".
2. Open the properties panel (verify how it opens on a touch layout).
3. Tap the "Italic" toggle.
4. Tap the "Italic" toggle again.

**Expected result:**

- After step 3, "Tap me" is italic and the toggle is shown as on.
- After step 4, "Tap me" is upright and the toggle is shown as off.

### C-001 Font family: changing the font of a text element

**Action:** update C-001 · **Priority:** High · **Type:** functional

**Preconditions:** The canvas contains one text element "Flowchart step" in the hand-drawn font, with italic as given in the row.

| Italic |
|---|
| Off |
| On |

**Steps:**

1. Click "Flowchart step".
2. In the properties panel, under "Font family", click the "Normal" font.

**Expected result:**

- The text renders in the normal sans-serif font.
- The italic state is the same as before step 2.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font and encloses every character.

### C-002 Font size: switching between preset sizes

**Action:** update C-002 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains one text element "Size test" at font size Medium, with italic as given in the row.

| Italic |
|---|
| Off |
| On |

**Steps:**

1. Click "Size test".
2. Under "Font size", click "Extra large".
3. Under "Font size", click "Small".

**Expected result:**

- After step 2, the text is larger and the selection box grows with it.
- After step 3, the text is smaller than at Medium.
- After each step, the text content, font family and italic state are unchanged.
- After each step, the selection box encloses every character.

### C-005 Several text elements: one style change applies to all

**Action:** update C-005 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains upright text elements "Input", "Process" and "Output", all at font size Medium.

| Style change |
|---|
| Under "Font size", click "Large" |
| Click the "Italic" toggle |
| Press Ctrl+I (Cmd+I on macOS) |

**Steps:**

1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Make the style change from the row.

**Expected result:**

- All three texts show the style change from the row.
- Their contents and positions are unchanged.
- Each selection box encloses every character of its text.

### C-006 New text uses the last chosen text style

**Action:** update C-006 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains one upright text element "First" at font size Medium in the hand-drawn font.

**Steps:**

1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. Click the "Italic" toggle.
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.
10. Click "Second".
11. Click the "Italic" toggle.
12. Press Esc.
13. Press T to choose the text tool.
14. Click an empty area of the canvas.
15. Type "Third".
16. Press Esc.

**Expected result:**

- "Second" is created at font size Large in the normal font, italic.
- After step 11, "Second" is upright.
- "Third" is created at font size Large in the normal font, upright.
- "First" stays at font size Large in the normal font, italic.

## Text in shapes and on arrows

2 new cases and 1 updated one. C-007, C-008 and C-010 are unchanged: italic doesn't change wrapping rules or how bound text moves, and TC-12 covers italic in wrapped text.

### TC-12 Italic text wrapped inside a narrow rectangle

**Action:** create · **Priority:** Medium · **Type:** regression

**Preconditions:** The canvas contains a rectangle about 160 px wide with the upright text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines.

**Steps:**

1. Click the rectangle.
2. Click the "Italic" toggle.

**Expected result:**

- Every line of the text is italic.
- No character crosses the rectangle border, including the slanted last character of each line.
- No word is split across two lines.
- The rectangle width is unchanged; the rectangle grows taller when the text needs more lines.

### TC-13 Italic arrow label

**Action:** create · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains two rectangles joined by an arrow with the upright label "yes".

**Steps:**

1. Click the arrow.
2. Click the "Italic" toggle.

**Expected result:**

- The label "yes" is italic and fully visible.
- The arrow line overlaps the label no more than it did before step 2.
- The arrow stroke, arrowheads and both connections are unchanged.

### C-009 Style change on a shape applies to its text

**Action:** update C-009 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains a rectangle with the upright text "Start" inside it, at font size Medium.

| Style change |
|---|
| Under "Font size", click "Large" |
| Click the "Italic" toggle |

**Steps:**

1. Click the rectangle.
2. Make the style change from the row.

**Expected result:**

- "Start" shows the style change from the row and still fits inside the rectangle.
- The rectangle's stroke and fill are unchanged.

## Styles, copies and history

3 updated cases, no new ones.

### C-011 Copy styles and paste styles between text elements

**Action:** update C-011 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains a red text "Source" at font size Large in the normal font, and a black text "Target" at font size Medium in the hand-drawn font. Their italic states are as given in the row.

| "Source" | "Target" |
|---|---|
| Italic | Upright |
| Upright | Italic |

The second row checks that pasting an upright style removes italic, not only that it adds it.

**Steps:**

1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

**Expected result:**

- "Target" is red, at font size Large, in the normal font.
- "Target" has the same italic state as "Source".
- The text of "Target" is unchanged.

### C-012 Undo and redo of a style change

**Action:** update C-012 · **Priority:** High · **Type:** functional

**Preconditions:** The canvas contains one upright text element "Undo me" at font size Medium.

| Style change |
|---|
| Under "Font size", click "Large" |
| Click the "Italic" toggle |
| Press Ctrl+I (Cmd+I on macOS) |

**Steps:**

1. Click "Undo me".
2. Make the style change from the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

**Expected result:**

- After step 3, "Undo me" is back to its style before step 2 after a single undo.
- After step 4, "Undo me" shows the style change from the row again.
- The text content and position stay the same throughout.

### C-013 Copies keep the style of the original

**Action:** update C-013 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains a red, italic text "Hypothesis H1" at font size Large.

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

**Steps:**

1. Click "Hypothesis H1".
2. Copy it the way given in the row.

**Expected result:**

- The copy reads "Hypothesis H1" and is red, italic, at font size Large.
- The original is unchanged.

## Files, sharing and export

1 new case and 5 updated ones.

### TC-14 File saved before italic support opens upright

**Action:** create · **Priority:** Medium · **Type:** regression

**Preconditions:** A .excalidraw file saved by a version before italic support is available. It contains a red text "Legacy note" at font size Large.

**Steps:**

1. Open the main menu and choose "Open".
2. Pick the file.
3. Click "Legacy note".

**Expected result:**

- "Legacy note" is upright, red, at font size Large, at its saved position.
- The "Italic" toggle is shown as off.
- No error message appears.

### C-014 Text style kept after a page reload

**Action:** update C-014 · **Priority:** High · **Type:** functional

**Preconditions:** The canvas contains a red, italic text "Survives reload" at font size Large in the normal font.

**Steps:**

1. Reload the browser tab.

**Expected result:**

- "Survives reload" is still red, italic, at font size Large, in the normal font, at the same position.

### C-015 Text style kept in a saved .excalidraw file

**Action:** update C-015 · **Priority:** High · **Type:** functional

**Preconditions:** The canvas contains a red, italic text "Saved style" at font size Large in the normal font.

**Steps:**

1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.

**Expected result:**

- "Saved style" is red, italic, at font size Large, in the normal font, at the same position.

### C-016 Text in a PNG export matches the canvas

**Action:** update C-016 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains four texts at different sizes and colors: hand-drawn upright, hand-drawn italic, normal upright and normal italic. The normal italic text is the rightmost element on the canvas.

**Steps:**

1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

**Expected result:**

- Each text has the same font, italic state, size, color and line breaks as on the canvas.
- No character is cut off at the image edges, including the slanted last character of the rightmost text.

### C-017 SVG export renders the same fonts on another computer

**Action:** update C-017 · **Priority:** Medium · **Type:** functional

**Preconditions:** The canvas contains four texts: hand-drawn upright, hand-drawn italic, normal upright and normal italic. A second computer has neither font installed.

**Steps:**

1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

**Expected result:**

- All four texts render in the same fonts and italic states as on the canvas.
- No character is cut off at the image edges.

### C-018 Style changes reach other users in live collaboration

**Action:** update C-018 · **Priority:** Medium · **Type:** functional

**Preconditions:** Users A and B are in the same live collaboration session in two browsers. The canvas contains a black, upright text "Shared note".

| Style change |
|---|
| Under "Stroke", click the red color |
| Click the "Italic" toggle |

**Steps:**

1. As user A, click "Shared note".
2. As user A, make the style change from the row.
3. As user B, look at "Shared note".

**Expected result:**

- User B sees the style change from the row on "Shared note" without reloading.
