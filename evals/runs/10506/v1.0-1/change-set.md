# Change set: excalidraw#10506

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:30:30.261Z (fingerprint acf41fa254a5).

Scope: the latest Chrome, Firefox and Safari on desktop; Safari on iOS for the mobile case. Read exact font sizes in the "F" field of the "Properties" panel (Alt+/, "Shape properties" section). On macOS use Cmd instead of Ctrl and Option instead of Alt. Presets: Small 16, Medium 20, Large 28, Very large 36, Huge 56, Giant 96. "Highlighted" means the preset button shows as selected.

# Text properties

## TC-1 "Font size" control: "Huge" and "Giant" presets
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Desktop browser. The canvas contains a text "Label" at font size Medium and a sticky note with the text "Note". Nothing is selected.

| Way the control is shown |
|---|
| Click "Label" |
| Press T to choose the text tool, with nothing selected |
| Click the sticky note "Note" |

These rows cover the three kinds of state in which the "Font size" control appears: a free text, the text tool before a text exists, and text in a container.

Steps:
1. Show the control as given in the row.
2. Hover over the fifth preset under "Font size".
3. Hover over the sixth preset under "Font size".

Expected result:
- Under "Font size" there are six presets, in this order: Small, Medium, Large, Very large, Huge, Giant.
- The tooltip in step 2 reads "Huge"; the tooltip in step 3 reads "Giant".
- All six presets are fully visible in the panel; none overlaps another or is cut off.
- No keyboard shortcut is shown in the "Huge" and "Giant" tooltips.

## C-002 Font size: switching between preset sizes
Action: update C-002
Area: Text properties
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Size test" at font size Medium, in the hand-drawn font.

Steps:
1. Click "Size test".
2. Press Alt+/ to open the "Properties" panel.
3. Under "Font size", click "Very large".
4. Under "Font size", click "Huge".
5. Under "Font size", click "Giant".
6. Under "Font size", click "Small".

Expected result:
- After step 3, "F" shows 36 and "Very large" is highlighted.
- After step 4, "F" shows 56, "Huge" is highlighted and the text is larger than at Very large.
- After step 5, "F" shows 96, "Giant" is highlighted and the text is larger than at Huge.
- After step 6, "F" shows 16, "Small" is highlighted and the text is smaller than at Medium.
- After each step only one preset is highlighted, and the selection box grows or shrinks with the text.
- The text content and font family are unchanged after each step.

## TC-2 Font size: preset highlight for sizes set without a preset
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #10506

Preconditions: The canvas contains one text element "Scale". The "Properties" panel is open (Alt+/).

| Start size (typed in "F") | Action | "F" shows | Highlighted preset |
|---|---|---|---|
| 20 | Type 56 in "F" and press Enter | 56 | Huge |
| 20 | Type 96 in "F" and press Enter | 96 | Giant |
| 20 | Type 57 in "F" and press Enter | 57 | none |
| 87 | Press Ctrl+Shift+> once | 96 | Giant |
| 96 | Press Ctrl+Shift+> twice | 117 | none |
| 106 | Press Ctrl+Shift+< once | 96 | Giant |
| 500 | Press Ctrl+Shift+> once | 550 | none |
| 20 | Drag the bottom-right corner handle of "Scale" outward until "F" shows 70 (verify) | 70 | none |

Chosen values: both new preset values exactly, one value next to a preset, the shortcut landing on 96 from below and from above (each press multiplies or divides by 1.1 and rounds), values above the largest preset to show there is no upper limit, and a corner resize.

Steps:
1. Click "Scale".
2. In "F", type the start size from the row and press Enter.
3. Do the action from the row.

Expected result:
- "F" shows the value in the row's "F shows" column.
- Under "Font size", the preset in the row's "Highlighted preset" column is highlighted; in rows marked "none", no preset is highlighted.
- The text "Scale" is unchanged and stays fully visible.

## C-005 Several text elements: one style change applies to all
Action: update C-005
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains text elements "Input" at font size Medium (20), "Process" at Very large (36) and "Output" at size 120 (typed in "F" in the "Properties" panel).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Under "Font size", click "Giant".
5. Press Alt+/ to open the "Properties" panel.
6. Click "Input".
7. Click "Process".
8. Click "Output".

Expected result:
- After step 3, no preset under "Font size" is highlighted.
- After step 4, "Giant" is highlighted and all three texts render at the same size.
- In steps 6, 7 and 8, "F" shows 96 for each text.
- The contents and positions of the three texts are unchanged.

## TC-3 Several texts set to one exact size in the "F" field
Action: create
Area: Text properties
Priority: Medium · Type: regression
Tags: #10506

Preconditions: The canvas contains text elements "Title A" at font size Medium (20) and "Title B" at Very large (36). The "Properties" panel is open (Alt+/).

Steps:
1. Click "Title A".
2. Shift+click "Title B".
3. In "F", type 150 and press Enter (verify that "F" is shown for a selection of several texts).
4. Click "Title A".
5. Click "Title B".

Expected result:
- After step 3, both texts render at the same size and no preset under "Font size" is highlighted.
- In steps 4 and 5, "F" shows 150 for each text.
- The contents and positions of both texts are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

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
9. Press Alt+/ to open the "Properties" panel.
10. Click "Second".

Expected result:
- "Second" is created in the normal font, at the same size as "First".
- After step 10, "F" shows 96 and "Giant" is highlighted under "Font size".
- "First" keeps font size Giant in the normal font.

## TC-4 "Font size" control on a 375 px mobile screen
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Excalidraw is open in Safari on an iPhone with a 375 px wide screen, in portrait. The canvas contains a text "Mobile" at font size Medium.

Steps:
1. Tap "Mobile".
2. Open the style panel with the properties button in the bottom toolbar (verify).
3. Tap "Giant" under "Font size".
4. Tap "Huge" under "Font size".

Expected result:
- After step 2, all six presets under "Font size" are fully visible without scrolling sideways; none overlaps another or is cut off.
- After step 3, "Giant" is highlighted and "Mobile" is clearly larger than at Medium.
- After step 4, "Huge" is highlighted and "Mobile" is smaller than at Giant and larger than at Medium.

## TC-5 "Font size" control in German and Arabic
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #10506

Preconditions: Desktop browser. The canvas contains a text "Sprache" at font size Medium.

| Interface language |
|---|
| Deutsch (German) |
| العربية (Arabic, right-to-left) |

German stands for long translated words; Arabic stands for the right-to-left layout.

Steps:
1. Open the main menu.
2. In the language selector (verify), choose the row's language.
3. Click "Sprache".
4. Hover over the "Huge" preset under the font size control.
5. Hover over the "Giant" preset.
6. Click the "Giant" preset.

Expected result:
- Six presets are shown under the font size control, with "Huge" and "Giant" after "Very large" in the layout's reading order, none overlapping or cut off.
- The tooltips in steps 4 and 5 are non-empty translated labels, fully visible, and never a raw key such as "labels.huge".
- After step 6, "Giant" is highlighted and "Sprache" is at size 96 ("F" in the "Properties" panel, Alt+/).

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a rectangle about 400 px wide with the text "Start the process" inside it, at font size Medium, on one line.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Giant".

Expected result:
- "Giant" is highlighted under "Font size".
- "Start the process" renders at font size Giant and wraps onto several lines inside the rectangle.
- No character crosses the rectangle border.
- The rectangle grows taller to fit the text; its width stays the same.
- The rectangle's stroke and fill are unchanged.

## TC-6 Arrow label at "Huge"
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains two rectangles about 600 px apart, joined by an arrow labeled "yes" at font size Medium.

Steps:
1. Click the arrow.
2. Under "Font size", click "Huge".
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, "Huge" is highlighted and "yes" is larger, at the middle of the arrow, and fully visible.
- After step 4, the arrow stays connected and "yes" stays at the middle of the arrow at the same size, fully visible.

## TC-7 Sticky note label at "Giant" and "Huge"
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool, holding "Remember to update the release notes before Friday" at font size Medium, and next to it a free text "Ref" at font size Giant.

Steps:
1. Click the sticky note.
2. Under "Font size", click "Giant".
3. Under "Font size", click "Huge".

Expected result:
- After step 2, "Giant" is highlighted; the whole label stays inside the note, and its letters are no taller than those of "Ref".
- After step 3, "Huge" is highlighted and the whole label stays inside the note.
- After each step the note's text content is unchanged and no character crosses the note's border.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Source" at font size Giant in the normal font, and a black text "Target" at font size Medium in the hand-drawn font. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, in the normal font, and "F" shows 96.
- "Giant" is highlighted under "Font size" while "Target" is selected.
- "Target" and "Source" render at the same size.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Undo me" at font size Medium. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Undo me".
2. Under "Font size", click "Huge".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo: "F" shows 20 and "Medium" is highlighted.
- After step 4, "Undo me" is at Huge again: "F" shows 56 and "Huge" is highlighted.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Hypothesis H1" at font size Giant. The "Properties" panel is open (Alt+/).

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
- The copy reads "Hypothesis H1" and is red.
- With the copy selected, "F" shows 96 and "Giant" is highlighted.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Survives reload" at font size Giant in the normal font.

Steps:
1. Reload the browser tab.
2. Press Alt+/ to open the "Properties" panel.
3. Click "Survives reload".

Expected result:
- "Survives reload" is still red, in the normal font, at the same position.
- "F" shows 96 and "Giant" is highlighted under "Font size".

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
6. Press Alt+/ to open the "Properties" panel.
7. Click "Saved huge".
8. Click "Saved giant".

Expected result:
- Both texts are red, in the normal font, at the same positions as before saving.
- In step 7, "F" shows 56 and "Huge" is highlighted.
- In step 8, "F" shows 96 and "Giant" is highlighted.

## C-016 Text in a PNG and SVG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors, including one text at font size Huge and one at Giant placed at the outer edge of the drawing.

| Export format |
|---|
| PNG |
| SVG |

Steps:
1. Open the main menu and choose "Export image...".
2. Click the format from the row.
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- The texts at Huge and Giant keep their size relative to the other texts.
- No character is cut off at the image edges.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" at font size Medium.

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user B, look at "Shared note".
4. As user A, under "Font size", click "Giant".
5. As user B, click "Shared note".

Expected result:
- After step 3, user B sees "Shared note" in red without reloading.
- After step 5, user B sees "Shared note" at the Giant size without reloading, and "Giant" is highlighted under "Font size" for user B.

## TC-8 Drawing saved before the new presets keeps its text sizes
Action: create
Area: Files, sharing and export
Priority: Medium · Type: regression
Tags: #10506

Preconditions: A .excalidraw file saved with the Excalidraw version before "Huge" and "Giant" were added, containing the texts "Old 36" at Very large, "Old 60" at size 60 and "Old 96" at size 96 (both typed in "F").

Steps:
1. Open the main menu and choose "Open".
2. Pick the file.
3. Press Alt+/ to open the "Properties" panel.
4. Click "Old 36".
5. Click "Old 60".
6. Click "Old 96".

Expected result:
- The file opens without an error and all three texts are at their saved positions.
- In step 4, "F" shows 36 and "Very large" is highlighted.
- In step 5, "F" shows 60 and no preset is highlighted.
- In step 6, "F" shows 96 and "Giant" is highlighted.