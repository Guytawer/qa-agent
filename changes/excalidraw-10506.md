# Change set: excalidraw#10506

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-10T15:08:54.480Z (fingerprint 1201e4338927).

Scope: latest Chrome, Firefox and Safari on desktop; Safari on iOS for TC-5. Exact font sizes are read from the "F" field of the "Properties" panel (Alt+/) while one text is selected.

# Text properties

## C-002 Font size: switching between preset sizes
Action: update C-002
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Size test" at font size Medium. The "Properties" panel is open (Alt+/).

| Preset | "F" field shows |
|---|---|
| Small | 16 |
| Medium | 20 |
| Large | 28 |
| Very large | 36 |
| Huge | 56 |
| Giant | 96 |

All six presets are listed: each one is a distinct value that must stay exact.

Steps:
1. Click "Size test".
2. Under "Font size", click the preset given in the row.
3. Read the value in the "F" field.

Expected result:
- The "F" field shows the value given in the row.
- The clicked preset is highlighted, and no other preset is.
- The selection box fits the text at its new size.
- The text content and font family are unchanged.

## C-005 Several text elements: one preset sets the same size on all
Action: update C-005
Area: Text properties
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains three text elements: "Input" at font size Small, "Process" at font size Very large, and "Output", resized from a corner so that its "F" field shows a value between 57 and 95. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Look at the presets under "Font size".
5. Under "Font size", click "Giant".
6. Click "Input".
7. Click "Process".
8. Click "Output".

Expected result:
- After step 4, no font size preset is highlighted.
- After step 5, the three texts render at the same letter height.
- After each of steps 6, 7 and 8, the "F" field shows 96 and "Giant" is highlighted.
- The contents and positions of the three texts are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font. The "Properties" panel is open (Alt+/).

Steps:
1. Click "First".
2. Under "Font size", click "Giant".
3. Under "Font family", click the "Normal" font.
4. Press Esc.
5. Press T to choose the text tool.
6. Click an empty area of the canvas.
7. Type "Second".
8. Press Esc.
9. Click "Second".

Expected result:
- "Second" is created in the normal font, at the same letter height as "First".
- After step 9, the "F" field shows 96 and "Giant" is highlighted.
- "First" keeps font size Giant in the normal font.

## TC-1 "Font size" control: presets and tooltips
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Presets" at font size Medium.

Steps:
1. Click "Presets".
2. Look at the "Font size" control.
3. Hover over the preset right after "Very large".
4. Hover over the last preset.
5. Hover over "Very large".

Expected result:
- The "Font size" control shows six presets in this order: Small, Medium, Large, Very large, Huge, Giant.
- "Medium" is highlighted.
- The "Font size" control has no field for typing a size.
- The tooltip reads "Huge" in step 3, "Giant" in step 4 and "Very large" in step 5.

## TC-2 Font size: preset highlight for an exact preset value
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #10506

Preconditions: The canvas contains one text element "Exact size" at font size Medium. The "Properties" panel is open (Alt+/).

| Typed value | Preset |
|---|---|
| 56 | Huge |
| 96 | Giant |

The two values are the exact sizes of the new presets.

Steps:
1. Click "Exact size".
2. Click the "F" field.
3. Select the whole value in the field.
4. Type the value given in the row.
5. Press Enter.
6. Look at the presets under "Font size".

Expected result:
- "Exact size" renders larger than at Medium, and the "F" field shows the typed value.
- The preset given in the row is highlighted, and no other preset is.

## TC-3 Font size: no preset highlighted for a size between or above presets
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #10506

Preconditions: The canvas contains one text element "Odd size" at font size Medium. The "Properties" panel is open (Alt+/).

| Typed value |
|---|
| 55 |
| 70 |
| 97 |
| 120 |

Values chosen: one below and one above each new preset's exact size (55, 97), one between the two new presets (70), and one well above the largest preset (120).

Steps:
1. Click "Odd size".
2. Click the "F" field.
3. Select the whole value in the field.
4. Type the value given in the row.
5. Press Enter.
6. Look at the presets under "Font size".

Expected result:
- "Odd size" renders larger than at Medium, and the "F" field shows the typed value.
- No font size preset is highlighted.

## TC-4 Font size shortcuts at and above "Giant"
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #10506

Preconditions: The canvas contains one text element "Grow" at font size Giant. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Grow".
2. Press Ctrl+Shift+> (Cmd+Shift+> on macOS).
3. Press Ctrl+Shift+> (Cmd+Shift+> on macOS).
4. Under "Font size", click "Giant".
5. Press Ctrl+Shift+< (Cmd+Shift+< on macOS).

Expected result:
- After step 2, "Grow" is larger, the "F" field shows about 106, and no preset is highlighted.
- After step 3, "Grow" is larger again, and the "F" field shows about 116.
- After step 4, the "F" field shows 96, and "Giant" is highlighted.
- After step 5, "Grow" is smaller, the "F" field shows about 86, and no preset is highlighted.

## TC-5 Font size presets in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Safari on an iPhone with a 375 pt wide screen (for example, iPhone SE 2nd or 3rd generation), in portrait orientation. The canvas contains one text element "Mobile" at font size Medium.

Steps:
1. Tap "Mobile".
2. Open the properties panel with its toolbar button (verify).
3. Look at the "Font size" control.
4. Tap "Giant".

Expected result:
- After step 3, all six presets are visible, none cut off and none overlapping another control.
- The properties panel does not scroll horizontally.
- After step 4, "Mobile" is larger, and "Giant" is highlighted.

## TC-6 New font size labels in a non-English language
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Locale" at font size Medium.

| Language | Direction |
|---|---|
| Deutsch | left to right |
| العربية (Arabic) | right to left |

Languages chosen: one left-to-right and one right-to-left language, the two layouts in which a fallback label can break.

Steps:
1. Open the main menu.
2. In the language selector (verify), choose the language given in the row.
3. Close the main menu.
4. Click "Locale".
5. Hover over each preset of the font size control.

Expected result:
- Two of the six tooltips read "Huge" and "Giant", in English.
- No tooltip is empty or shows a raw key name.
- Each tooltip is fully visible, not cut off at the panel or screen edge.

## TC-7 Editing a text at "Giant" size
Action: create
Area: Text properties
Priority: Medium · Type: regression
Tags: #10506

Preconditions: The canvas contains one text element "Title" at font size Giant.

Steps:
1. Double-click "Title" to edit it (verify).
2. Press End.
3. Type " draft".
4. Press Esc.
5. Click "Title draft".

Expected result:
- During steps 1–3, the text in the editor has the same size and position as on the canvas and does not jump when editing starts.
- After step 4, the text reads "Title draft" at the same letter height as before.
- After step 5, "Giant" is highlighted.

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a rectangle about 400 px wide, with the text "Ship it today" inside it at font size Medium on one line.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Giant".

Expected result:
- "Ship it today" renders larger and wraps onto two or more lines inside the rectangle.
- No character crosses the rectangle border.
- The rectangle grows taller, and its width stays the same.
- The rectangle's stroke and fill are unchanged.

## C-010 Arrow label stays on the arrow when the arrow moves
Action: update C-010
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains two rectangles about 600 px apart, joined by an arrow labeled "yes" at font size Medium.

Steps:
1. Click the arrow.
2. Under "Font size", click "Giant".
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "yes" is larger, fully visible and at the middle of the arrow.
- After step 4, the arrow bends or moves to stay connected to both rectangles.
- After step 4, the label "yes" stays at the middle of the arrow, at the same size, and remains fully visible.

## TC-8 Sticky note label at "Giant"
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a sticky note, made with the sticky note tool (verify), whose label reads "Review the onboarding checklist before Friday" at font size Medium.

Steps:
1. Click the sticky note.
2. Look at the presets under "Font size".
3. Click "Giant".
4. Look at the presets under "Font size".

Expected result:
- After step 2, "Huge" and "Giant" are offered right after "Very large".
- After step 3, the label is larger than at Medium but shown smaller than "Giant", so that it fits inside the note.
- No character of the label is outside the note.
- After step 4, "Giant" is highlighted.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Source" in the normal font at the preset given in the row, and a black text "Target" at font size Medium in the hand-drawn font.

| Preset of "Source" |
|---|
| Huge |
| Giant |

Both new presets are listed because paste styles must carry each of them.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, in the normal font, at the same letter height as "Source".
- While "Target" is selected, the preset given in the row is highlighted.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Undo me" at font size Large.

Steps:
1. Click "Undo me".
2. Under "Font size", click "Giant".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Large after a single undo, and "Large" is highlighted.
- After step 4, "Undo me" is at Giant again, and "Giant" is highlighted.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Hypothesis H1" at font size Giant.

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.
3. Click the copy.

Expected result:
- The copy reads "Hypothesis H1", is red, and has the same letter height as the original.
- After step 3, "Giant" is highlighted.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Huge text" at font size Huge and a red text "Giant text" at font size Giant, both in the normal font.

Steps:
1. Reload the browser tab.
2. Click "Huge text".
3. Click "Giant text".

Expected result:
- After step 1, both texts are red, in the normal font, at the same sizes and positions as before.
- After step 2, "Huge" is highlighted.
- After step 3, "Giant" is highlighted.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Saved huge" at font size Huge and a red text "Saved giant" at font size Giant, both in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved huge".
7. Click "Saved giant".
8. Open the saved file in a text editor.

Expected result:
- After step 5, both texts are red, in the normal font, at the same sizes and positions as before saving.
- After step 6, "Huge" is highlighted.
- After step 7, "Giant" is highlighted.
- In step 8, the "fontSize" field is 56 for "Saved huge" and 96 for "Saved giant".

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. One of them, "Giant headline" at font size Giant, is the rightmost element of the drawing.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- "Giant headline" appears in full.
- No character is cut off at the image edges.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" at font size Medium.

| Change by user A | User B sees |
|---|---|
| Under "Stroke", click the red color | "Shared note" in red |
| Under "Font size", click "Giant" | "Shared note" larger, at the same letter height as on user A's screen |

Rows: the existing color sync check, and the size change to the largest new preset.

Steps:
1. As user A, click "Shared note".
2. As user A, make the change given in the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees what the row's "User B sees" column gives, without reloading.