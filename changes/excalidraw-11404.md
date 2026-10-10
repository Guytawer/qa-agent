# Change set: excalidraw#11404

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-10T10:40:24.880Z (fingerprint 081f4079c9b0).

# Italic text: test case changes

Source: excalidraw/excalidraw issue #11404 ("Add support for italic text").
Labels marked **(verify)** are not confirmed by the issue or the product profile; check them in the build before running the case.

---

# Text properties

## C-001 Font family: changing the font of a text element
Action: update C-001
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one italic text element "Flowchart step" in the hand-drawn font.

Steps:
1. Click "Flowchart step".
2. In the properties panel, under "Font family", click the "Normal" font.

Expected result:
- The text renders in the normal sans-serif font.
- The text is still italic, and the "Italic" (verify) toggle is still on.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font and encloses every character, including the slanted top of the last one.

## C-002 Font size: switching between preset sizes
Action: update C-002
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one italic text element "Size test" at font size Medium.

Steps:
1. Click "Size test".
2. Under "Font size", click "Very large".
3. Under "Font size", click "Small".

Expected result:
- After step 2, the text is larger, still italic, and the selection box grows with it.
- After step 2, no character is cut off at the selection box edge, including the slanted top of the last character.
- After step 3, the text is smaller than at Medium and still italic.
- The text content and font family are unchanged after each step.

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one black italic text element "Colored note".

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.

Expected result:
- The text renders in red.
- The text is still italic, and the "Italic" (verify) toggle is still on.
- The font family, size and alignment are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "First" at font size Medium in the hand-drawn font.

Steps:
1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. In the properties panel, click "Italic" (verify).
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.
10. Click "Second".
11. Click "Italic" to turn italic off.
12. Press Esc.
13. Press T to choose the text tool.
14. Click an empty area of the canvas.
15. Type "Third".
16. Press Esc.

Expected result:
- After step 9, "Second" is created at font size Large in the normal font, italic.
- "First" keeps font size Large in the normal font, italic.
- After step 16, "Third" is created upright, at font size Large in the normal font.
- "Second" stays upright after step 11; "First" stays italic throughout.

## TC-1 "Italic" toggle: turning italic on and off for a text element
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright black text element "Key term" at font size Medium in the normal font, left-aligned.

Steps:
1. Click "Key term".
2. In the properties panel, click "Italic" (verify).
3. Click "Italic" again.

Expected result:
- After step 2, "Key term" renders slanted and the "Italic" toggle shows as on.
- After step 2, the text content, font family, size, color, alignment and position are unchanged, and the selection box encloses every character.
- After step 3, "Key term" is upright again and the "Italic" toggle shows as off.
- After step 3, the text content, font family, size, color, alignment and position are the same as before step 2.

## TC-2 Ctrl+I / Cmd+I on a selected text element
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Shortcut test".

Steps:
1. Click "Shortcut test".
2. Press Ctrl+I (Cmd+I on macOS).
3. Press Ctrl+I (Cmd+I on macOS) again.

Expected result:
- After step 2, "Shortcut test" is italic and the "Italic" (verify) toggle shows as on.
- After step 3, "Shortcut test" is upright and the toggle shows as off.
- The text does not enter editing mode, and its content and position are unchanged.
- No browser window, dialog or sidebar opens after either key press.

## TC-3 Ctrl+I / Cmd+I while editing text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "alpha beta gamma".

Steps:
1. Double-click "alpha beta gamma" to edit it.
2. Double-click the word "beta" to select it.
3. Press Ctrl+I (Cmd+I on macOS).
4. Press End.
5. Type " delta".
6. Press Esc.

Expected result:
- After step 3, the whole text "alpha beta gamma" is italic, not only "beta".
- After step 3, the text is still in editing mode and reads "alpha beta gamma"; no character is deleted or added.
- After step 5, " delta" appears in italic.
- After step 6, the element reads "alpha beta gamma delta" and is italic throughout.
- No browser window, dialog or sidebar opens after step 3.

## TC-4 Ctrl+I / Cmd+I with no text in the selection
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #11404

Preconditions: The canvas contains an upright text element "Bystander", a rectangle with no text, and a freedraw line.

| Selection |
|---|
| Nothing selected (click an empty area of the canvas) |
| The rectangle with no text |
| The freedraw line |

Steps:
1. Make the selection given in the row.
2. Press Ctrl+I (Cmd+I on macOS).

Expected result:
- No element on the canvas changes its appearance.
- "Bystander" stays upright.
- No error message appears.

## TC-5 "Italic" toggle with a mixed selection
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text element "Alpha" and upright text elements "Beta" and "Gamma".

Steps:
1. Click "Alpha".
2. Shift+click "Beta".
3. Shift+click "Gamma".
4. Click "Italic" (verify).

Expected result:
- After step 3, the "Italic" toggle shows a mixed state, different from both on and off (verify how the mixed state looks).
- After step 4, "Alpha", "Beta" and "Gamma" are all italic, and the toggle shows as on.
- The contents and positions of all three texts are unchanged.

## TC-8 Italic text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright, single-line text element per row below, in the hand-drawn font at font size Large.

Why these values: the scripts, emoji and mixed text are the ones the team requires. The hand-drawn font is the default and has no italic face and no Chinese, Japanese, Arabic or Hebrew glyphs, so these texts depend on fallback fonts with a synthetic slant, the riskiest combination. Large makes clipping easy to see.

| Script | Text | What must be slanted |
|---|---|---|
| Latin | Quick brown fox | every letter |
| Cyrillic | Привіт, світе | every letter |
| Chinese | 你好世界 | every character |
| Japanese | こんにちは世界 | every character |
| Arabic (right-to-left) | مرحبا بالعالم | every letter |
| Hebrew (right-to-left) | שלום עולם | every letter |
| Emoji | Done ✅🎉 | the letters "Done" (emoji not checked for slant) |
| Mixed scripts | Step 1: שלום → 你好 → Привіт 👋 | every letter and character except the emoji |

Steps:
1. Click the text element from the row.
2. Click "Italic" (verify).

Expected result:
- The characters named in the row render slanted.
- Every character, including emoji, is fully visible: none is cut off, overlaps a neighbor, or turns into an empty box.
- The selection box encloses every character, including the slanted top of the last character.
- The characters read in the same order and direction as before step 2; right-to-left text still reads right to left.
- The text keeps its alignment, its position on the canvas and its font size.

## TC-9 Italic in each font family
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains three upright text elements "Font check" at font size Large: one in the hand-drawn font, one in the normal font and one in the code font.

Why these values: these are the three fonts under "Font family". Fonts with and without a real italic face are both among them.

| Font family |
|---|
| Hand-drawn |
| Normal |
| Code |

Steps:
1. Click the "Font check" text in the font from the row.
2. Click "Italic" (verify).

Expected result:
- The text renders slanted.
- The font family is still the one from the row.
- The font size, color and position are unchanged.
- The selection box encloses every character, including the slanted top of the last character.

## TC-11 "Italic" toggle on a touch device
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The app is open in the latest Safari on an iPad with no keyboard attached. The canvas contains one upright text element "Touch test".

Steps:
1. Tap "Touch test".
2. Tap the button that opens the text properties (verify its name and position on touch layouts).
3. Tap "Italic" (verify).
4. Tap "Italic" again.

Expected result:
- After step 3, "Touch test" is italic and the "Italic" toggle shows as on.
- After step 4, "Touch test" is upright and the toggle shows as off.
- The text does not enter editing mode, and its content and position are unchanged.

---

# Text in shapes and on arrows

## TC-6 Italic text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle about 160 px wide with the upright text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines.

| Way to apply italic |
|---|
| Click "Italic" (verify) in the properties panel |
| Press Ctrl+I (Cmd+I on macOS) |

Steps:
1. Click the rectangle.
2. Apply italic the way given in the row.

Expected result:
- The text inside the rectangle is italic.
- The text still wraps inside the rectangle; no character crosses the rectangle border, including slanted characters at the right edge.
- The rectangle's width stays the same; it grows taller if the italic text needs more lines.
- The rectangle's stroke and fill are unchanged.

## TC-7 Italic arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains two rectangles joined by an arrow with the upright label "yes".

Steps:
1. Click the arrow.
2. Click "Italic" (verify).

Expected result:
- The label "yes" is italic.
- The label stays at the middle of the arrow and is fully visible; no character is cut off.
- The arrow's shape, stroke and connections to both rectangles are unchanged.

---

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a red italic text "Source" at font size Large in the normal font, and a black upright text "Target" at font size Medium in the hand-drawn font.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, italic, at font size Large, in the normal font.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Undo me" at font size Medium.

| Change | Action in step 2 | Before | After |
|---|---|---|---|
| Font size | Under "Font size", click "Large" | Medium | Large |
| Italic | Click "Italic" (verify) | upright | italic |

Steps:
1. Click "Undo me".
2. Make the change given in the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back to the "Before" value after a single undo.
- After step 4, "Undo me" has the "After" value again.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a red italic text "Hypothesis H1" at font size Large.

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.

Expected result:
- The copy reads "Hypothesis H1" and is red, italic, at font size Large.
- The original is unchanged.

---

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains a red italic text "Survives reload" at font size Large in the normal font.

Steps:
1. Reload the browser tab.

Expected result:
- "Survives reload" is still red, italic, at font size Large, in the normal font, at the same position.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains a red italic text "Saved style" at font size Large in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.

Expected result:
- "Saved style" is red, italic, at font size Large, in the normal font, at the same position.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains upright and italic texts in the hand-drawn and the normal font, at different sizes and colors, including the italic text "Final step" at font size Very large.

| Way to export | How to open the result |
|---|---|
| Click "PNG" | Open the downloaded file |
| Click "Copy to clipboard" (verify) | Paste into an image editor |

Steps:
1. Open the main menu and choose "Export image...".
2. Export the way given in the row.
3. Open the result as the row says.

Expected result:
- Each text has the same font, size, color, slant (italic or upright) and line breaks as on the canvas.
- No character is cut off at the image edges, including the slanted end of "Final step".

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text in the hand-drawn font, an italic text in the normal font and an upright text in the normal font. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- All three texts render in the same fonts as on the canvas.
- Both italic texts are slanted as on the canvas; the upright text stays upright.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black upright text "Shared note".

| Change by user A | What user B sees |
|---|---|
| Under "Stroke", click the red color | "Shared note" in red |
| Click "Italic" (verify) | "Shared note" in italic |

Steps:
1. As user A, click "Shared note".
2. As user A, make the change given in the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees the change given in the row without reloading.

## TC-10 Drawings and library items saved before italic support
Action: create
Area: Files, sharing and export
Priority: High · Type: regression
Tags: #11404

Preconditions: A file of the kind given in the row was saved with an app version before italic support. It contains a text "Legacy text" in the normal font at font size Large.

| Saved item | How to open it |
|---|---|
| .excalidraw drawing | Open the main menu, choose "Open" and pick the file |
| .excalidrawlib library (verify) | In the library panel, open the library file (verify the menu item), then click its item to insert it on the canvas |

Steps:
1. Open the saved item the way given in the row.
2. Click "Legacy text".

Expected result:
- "Legacy text" is upright, in the normal font, at font size Large.
- The "Italic" (verify) toggle shows as off.
- No error message appears.

---

# Not changed

These existing cases were reviewed for this issue and stay as they are. Their behavior does not change; the italic side of it is covered by the new cases named below.

| Case | Action | Reason |
|---|---|---|
| C-003 Text align: left, center and right | none | Alignment is unchanged by italic; TC-1 and TC-8 check that italic keeps the alignment. |
| C-005 Several text elements: one style change applies to all | none | Multi-selection with italic is covered by TC-5. |
| C-007 Text inside a rectangle wraps to the shape width | none | Wrapping of italic text inside a shape is covered by TC-6. |
| C-008 Text inside a shape moves with the shape | none | Movement does not depend on italic. |
| C-009 Style change on a shape applies to its text | none | Italic applied through the shape is covered by TC-6. |
| C-010 Arrow label stays on the arrow when the arrow moves | none | Label movement stays here; italic arrow labels are covered by TC-7. |
