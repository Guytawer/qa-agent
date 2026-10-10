# Change set: excalidraw#10506

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-10T12:12:33.999Z (fingerprint 9100657bb2f9).

# Test cases: more font size presets ("Huge", "Giant")

Issue: #10506 · Planned behavior, not released. Apply this change set only when the feature ships.
Run every case on the latest Chrome, Firefox and Safari on desktop unless the case names the mobile layout.

---

## Text properties

### C-002 Font size: switching between preset sizes
Action: update C-002
Area: Text properties
Priority: High · Type: functional
Issue: #10506

Preconditions: The canvas contains one text element "Size test" at font size "Very large".

Steps:
1. Click "Size test".
2. Under "Font size", click "Huge".
3. Under "Font size", click "Giant".
4. Under "Font size", click "Small".

Expected result:
- After step 1, "Very large" is highlighted under "Font size".
- After step 2, the text is larger than at "Very large", the selection box grows with it, and "Huge" is highlighted.
- After step 3, the text is larger than at "Huge", the selection box grows with it, and "Giant" is highlighted.
- After step 4, the text is smaller than at any earlier step and "Small" is highlighted.
- The text content and font family are unchanged after each step.

---

### C-005 Several text elements: one style change applies to all
Action: update C-005
Area: Text properties
Priority: Medium · Type: functional
Issue: #10506

Preconditions: The canvas contains text elements "Input" at font size Medium, "Process" at font size Large, and "Output" at font size Medium.

Steps:
1. Click "Output".
2. Drag the bottom-right corner handle of "Output" outward until the text is about twice its original height.
3. Shift+click "Input".
4. Shift+click "Process".
5. Under "Font size", click "Huge".

Expected result:
- After step 2, no preset is highlighted under "Font size".
- After step 4, no preset is highlighted under "Font size".
- After step 5, "Input", "Process" and "Output" are all at font size "Huge": their letters are the same height.
- After step 5, "Huge" is highlighted.
- The contents and positions of the three texts are unchanged.

---

### C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Issue: #10506

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font.

Steps:
1. Click "First".
2. Under "Font size", click "Giant".
3. Under "Font family", click the "Normal" font.
4. Press Esc.
5. Press T to choose the text tool.
6. Click an empty area of the canvas.
7. Type "Second".
8. Press Esc.

Expected result:
- "Second" is created at font size "Giant" in the normal font.
- "First" keeps font size "Giant" in the normal font.

---

### TC-1 "Font size" control: preset order and tooltips
Action: create
Area: Text properties
Priority: Medium · Type: functional
Issue: #10506

Preconditions: A desktop browser window at least 1280 px wide. The canvas contains one text element "Preset order" at font size Medium.

Steps:
1. Click "Preset order".
2. Hover over the "Huge" preset under "Font size".
3. Hover over the "Giant" preset under "Font size".

Expected result:
- After step 1, "Font size" shows six presets in this order: Small, Medium, Large, Very large, Huge, Giant.
- After step 1, "Medium" is highlighted.
- After step 2, a tooltip reads "Huge".
- After step 3, a tooltip reads "Giant".
- The "Font size" control fits in the properties panel without horizontal scrolling.

---

### TC-2 "Font size" control in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Issue: #10506

Preconditions: Excalidraw is open in the mobile layout on a phone in portrait orientation, 375 px wide (for example iPhone SE in Safari). The canvas contains one text element "Mobile text" at font size Medium.

Steps:
1. Tap "Mobile text".
2. Open the properties panel (verify: the button that shows element properties in the mobile layout).
3. Under "Font size", tap "Giant".

Expected result:
- After step 2, all six presets (Small, Medium, Large, Very large, Huge, Giant) are visible at once, without horizontal scrolling.
- After step 3, "Mobile text" is at font size "Giant" and "Giant" is highlighted.
- The text content is unchanged.

---

### TC-3 Font size shortcuts from "Giant"
Action: create
Area: Text properties
Priority: Medium · Type: regression
Issue: #10506

Preconditions: The canvas contains two text elements, "Grow" and "Shrink", both at font size "Giant".

Steps:
1. Click "Grow".
2. Press Ctrl+Shift+> (Cmd+Shift+> on macOS) (verify) to increase the font size.
3. Click "Shrink".
4. Press Ctrl+Shift+< (Cmd+Shift+< on macOS) (verify) to decrease the font size.

Expected result:
- After step 2, "Grow" is larger than at "Giant": the shortcut has no upper limit at "Giant".
- After step 4, "Shrink" is smaller than at "Giant".
- The contents of both texts are unchanged.

---

### TC-5 "Giant" text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Issue: #10506

Preconditions: The canvas is empty.

| Text to type | What it exercises |
|---|---|
| שלום עולם | Hebrew, right-to-left |
| مرحبا بالعالم | Arabic, right-to-left with joined letters |
| 你好世界 | Chinese characters |
| Ångström gjpqy | Accents above capitals, descenders below the line |
| 🙂🎉👍 | Emoji |

These rows were chosen because very large text is most likely to clip glyphs that reach above or below the Latin line height, or that fall back to another font.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type the text from the row.
4. Press Esc.
5. Click the text.
6. Under "Font size", click "Giant".

Expected result:
- The text is at font size "Giant".
- Every character is fully visible: nothing is cut off at the top, bottom or sides.
- The selection box encloses the whole text.

---

## Text in shapes and on arrows

### C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Issue: #10506

Preconditions: The canvas contains a rectangle about 500 px wide with the text "Start the process" inside it, at font size Medium, on one line.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Giant".

Expected result:
- "Start the process" renders at font size "Giant" and wraps onto more than one line inside the rectangle.
- No character crosses the rectangle border.
- The rectangle grows taller to fit the text; its width stays the same.
- The rectangle's stroke and fill are unchanged.

---

### TC-4 Arrow label at font size "Giant"
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Issue: #10506

Preconditions: The canvas contains two rectangles about 600 px apart, joined by a straight arrow labeled "yes" at font size Medium.

Steps:
1. Click the arrow.
2. Under "Font size", click "Giant".
3. Click one of the rectangles.
4. Drag the rectangle 150 px down.

Expected result:
- After step 2, the label "yes" is at font size "Giant", at the middle of the arrow, and fully visible.
- After step 4, the arrow stays connected to both rectangles.
- After step 4, "yes" stays at the middle of the arrow, at font size "Giant", and fully visible.

---

## Styles, copies and history

### C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Issue: #10506

| Size of "Source" |
|---|
| Huge |
| Giant |

Preconditions: The canvas contains a red text "Source" at the font size from the row in the normal font, and a black text "Target" at font size Medium in the hand-drawn font.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at the font size from the row, in the normal font.
- The size preset from the row is highlighted under "Font size" while "Target" is selected.
- The text of "Target" is unchanged.

---

### C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Issue: #10506

Preconditions: The canvas contains one text element "Undo me" at font size "Very large".

Steps:
1. Click "Undo me".
2. Under "Font size", click "Giant".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at "Very large" after a single undo.
- After step 4, "Undo me" is at "Giant" again.
- The text content and position stay the same throughout.

---

### C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Issue: #10506

Preconditions: The canvas contains a red text "Hypothesis H1" at font size "Giant".

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
- The copy reads "Hypothesis H1" and is red at font size "Giant".
- The original is unchanged.

---

## Files, sharing and export

### C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Issue: #10506

Preconditions: The canvas contains a red text "Survives reload" at font size "Giant" in the normal font.

Steps:
1. Reload the browser tab.

Expected result:
- "Survives reload" is still red, at font size "Giant", in the normal font, at the same position.

---

### C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Issue: #10506

Preconditions: The canvas contains six red texts in the normal font, each at the preset it names: "Small", "Medium", "Large", "Very large", "Huge", "Giant". A text editor is available on the computer.

Steps:
1. Open the main menu.
2. Choose "Save to...".
3. Save the file as "presets.excalidraw".
4. Open the main menu.
5. Choose "Reset the canvas".
6. Confirm the reset.
7. Open the main menu.
8. Choose "Open".
9. Pick "presets.excalidraw".
10. Open "presets.excalidraw" in the text editor.

Expected result:
- After step 9, all six texts are red, in the normal font, at the same sizes and positions as before saving.
- In the file opened in step 10, each text's "fontSize" value (verify: field name in the .excalidraw file) is:

| Text | fontSize |
|---|---|
| Small | 16 (verify) |
| Medium | 20 (verify) |
| Large | 28 (verify) |
| Very large | 36 (verify) |
| Huge | 56 |
| Giant | 96 |

The values marked (verify) are the existing presets' current sizes and must be the same as in the release before this change.

---

### C-016 Text in a PNG or SVG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Issue: #10506

| Format |
|---|
| PNG |
| SVG |

Preconditions: The canvas contains a black text "Small text" at font size Small in the hand-drawn font, a blue text "Huge text" at font size "Huge" in the normal font, and a red text "Giant text" at font size "Giant" in the hand-drawn font.

Steps:
1. Open the main menu.
2. Choose "Export image...".
3. Click the format from the row.
4. Open the downloaded file in a browser.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- No character is cut off at the image edges.

---

### C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Issue: #10506

| Control | Value to click |
|---|---|
| "Stroke" | the red color |
| "Font size" | "Giant" |

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" at font size Medium.

Steps:
1. As user A, click "Shared note".
2. As user A, under the control from the row, click the value from the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" with the change from the row, without reloading.
- The text of "Shared note" is unchanged for both users.
