# Change set: excalidraw#10506

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T09:34:14.712Z (fingerprint 7ed51d7f9613).

Scope: latest Chrome, Firefox and Safari on desktop, plus Safari on iOS (TC-4). To read exact sizes, select one text, press Alt+/ to open the "Properties" panel, and read the number in the "F" field under "Shape properties". Preset sizes: Small 16, Medium 20, Large 28, Very large 36, Huge 56, Giant 96.

# Text properties

## C-002 Font size: switching between preset sizes
Action: update C-002
Area: Text properties
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Size test" at font size Medium (20). The "Properties" panel is open (Alt+/).

| Preset clicked | "F" shows |
|---|---|
| Huge | 56 |
| Giant | 96 |
| Very large | 36 |
| Small | 16 |

The two new presets, plus the largest and smallest existing presets as regression checks.

Steps:
1. Click "Size test".
2. Under "Font size", click the preset from the row.

Expected result:
- The "F" field shows the value from the row.
- Only the clicked preset is highlighted under "Font size".
- The selection box resizes to fit the text at the new size.
- The text content and font family are unchanged.

## TC-1 "Font size" control: six presets and their tooltips
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Desktop browser, window at least 1280 px wide. The canvas contains one text element "Preset row" at font size Medium.

Steps:
1. Click "Preset row".
2. Hover over the fifth preset under "Font size".
3. Hover over the sixth preset under "Font size".
4. Press Esc.
5. Press T to choose the text tool.

Expected result:
- After step 1, "Font size" shows six presets in this order: Small, Medium, Large, Very large, Huge, Giant.
- After step 2, the tooltip reads "Huge".
- After step 3, the tooltip reads "Giant".
- After step 5, "Font size" shows the same six presets.
- No preset is clipped or overlaps another control.
- No keyboard shortcut is shown for "Huge" or "Giant".

## TC-2 "Font size" control: highlighted preset for sizes set without a preset
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Big title" whose "F" field shows the start size from the row. The "Properties" panel is open (Alt+/).

| Start size | How the size is set | Resulting "F" value | Highlighted preset |
|---|---|---|---|
| 20 | Type 56 in the "F" field and press Enter | 56 | Huge |
| 20 | Type 96 in the "F" field and press Enter | 96 | Giant |
| 20 | Type 50 in the "F" field and press Enter | 50 | none |
| 51 | Press Ctrl+Shift+> (Cmd+Shift+> on macOS) once | 56 | Huge |
| 87 | Press Ctrl+Shift+> (Cmd+Shift+> on macOS) once | 96 | Giant |
| 56 | Drag the text's bottom-right corner handle outward until the "F" field shows 70 | 70 | none |

Exactly 56 and 96 reached in ways other than a preset, a size just below "Huge", and a corner resize between the two new presets.

Steps:
1. Click "Big title".
2. Set the size as the row says.

Expected result:
- The "F" field shows the resulting value from the row.
- Under "Font size", the preset from the "Highlighted preset" column is highlighted. For the "none" rows, no preset is highlighted.

## C-005 Several text elements: one preset sets the same size on all
Action: update C-005
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains text elements "Input" at font size Medium (20), "Process" at Very large (36) and "Output" resized by its corner handle so that its "F" field shows 70. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Look at the "Font size" presets.
5. Under "Font size", click "Huge".
6. Click "Output" alone.

Expected result:
- After step 4, no preset is highlighted.
- After step 5, all three texts render at the same size, and "Huge" is highlighted.
- After step 6, the "F" field shows 56.
- The contents and positions of the texts are unchanged.

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
9. Click "Second".

Expected result:
- "Second" is created in the normal font, at the same size as "First".
- After step 9, "Giant" is highlighted under "Font size".
- "First" keeps font size Giant in the normal font.

## TC-3 Font size shortcuts beyond "Giant"
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #10506

Preconditions: The canvas contains one text element "Keep growing" at font size Giant (96). The "Properties" panel is open (Alt+/).

Steps:
1. Click "Keep growing".
2. Press Ctrl+Shift+> (Cmd+Shift+> on macOS).
3. Press Ctrl+Shift+> again.
4. Press Ctrl+Shift+< (Cmd+Shift+< on macOS).
5. Press Ctrl+Shift+< again.
6. Press Ctrl+Shift+> 10 times.

Expected result:
- After step 2, the "F" field shows 106 and no preset is highlighted.
- After step 3, the "F" field shows 117 and no preset is highlighted.
- After step 4, the "F" field shows 106.
- After step 5, the "F" field shows 96 and "Giant" is highlighted.
- After step 6, the "F" field shows 249, the text has grown with every press, and no preset is highlighted.

## TC-4 "Font size" control in the 375 px mobile panel
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Latest Safari on an iPhone with a 375 px wide viewport, in portrait orientation. The canvas contains one text element "Mobile" at font size Medium.

Steps:
1. Tap "Mobile".
2. Open the style options panel for the selected element (verify how it opens in the mobile layout).
3. Tap "Giant".
4. Tap "Huge".

Expected result:
- After step 2, all six presets (Small, Medium, Large, Very large, Huge, Giant) are fully visible with no horizontal scrolling, and none is clipped or overlaps another control.
- After step 3, "Giant" is highlighted and "Mobile" grows.
- After step 4, "Huge" is highlighted and "Mobile" is smaller than at Giant.

## TC-5 Text at "Giant" in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element at font size Medium, with the content from the row.

| Content |
|---|
| مرحبا بالعالم |
| 大きな見出しテキスト |
| 🚀🎉👍🏽 |
| Plan 計画 خطة 🚀 |

Right-to-left text, CJK text, emoji with a skin-tone modifier and a mixed line: the scripts most likely to be clipped or reordered at a very large size.

Steps:
1. Click the text.
2. Under "Font size", click "Giant".

Expected result:
- The whole text is visible: no glyph is cut off at the top, bottom or sides.
- The selection box encloses every glyph.
- The character order and reading direction are the same as at Medium.
- Emoji keep their colors and the skin-tone modifier.

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a rectangle about 400 px wide with the text "Go to the next step" inside it, at font size Medium, on one line.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Giant".

Expected result:
- "Go to the next step" renders at the "Giant" size and "Giant" is highlighted.
- The text wraps onto several lines, and no character crosses the rectangle border.
- The rectangle grows taller, and its width stays the same.
- The rectangle's stroke and fill are unchanged.

## TC-6 Arrow label at the new presets
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains two rectangles about 500 px apart, joined by an arrow labeled "yes" at font size Medium.

| Preset |
|---|
| Huge |
| Giant |

Both new presets; Giant is wider than a short arrow segment.

Steps:
1. Click the arrow.
2. Under "Font size", click the preset from the row.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "yes" renders at the preset size and sits at the middle of the arrow.
- After step 4, the label stays at the middle of the arrow and remains fully visible.

## TC-7 Sticky note label at the new presets
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a sticky note created with the "Sticky note" tool, labeled "Ship it", at its default size.

Steps:
1. Click the sticky note.
2. Under "Font size", click "Giant".
3. Double-click the sticky note.
4. Move the cursor to the end of the text and type " before the Friday release review".
5. Press Esc.
6. Click the sticky note.

Expected result:
- After step 1, "Font size" offers "Huge" and "Giant".
- After step 2, "Giant" is highlighted and the label grows but stays inside the note.
- After step 5, the whole label is visible inside the note, shown smaller than before step 3.
- After step 6, "Giant" is still highlighted.
- The label is never shown larger than the "Giant" size.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Source" at font size Giant in the normal font, and a black text "Target" at font size Medium in the hand-drawn font.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Giant, in the normal font, and "Giant" is highlighted.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Undo me" at font size Medium.

Steps:
1. Click "Undo me".
2. Under "Font size", click "Huge".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo, and "Medium" is highlighted.
- After step 4, "Undo me" is at Huge again, and "Huge" is highlighted.
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

Every way the product offers to copy a text element.

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.
3. Click the copy.

Expected result:
- The copy reads "Hypothesis H1", is red, and is the same size as the original.
- After step 3, "Giant" is highlighted.
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
2. Click "Survives reload".
3. Press Alt+/ to open the "Properties" panel.

Expected result:
- "Survives reload" is still red, in the normal font, at the same position.
- "Giant" is highlighted and the "F" field shows 96.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Saved style" at font size Huge in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved style".
7. Press Alt+/ to open the "Properties" panel.

Expected result:
- "Saved style" is red, in the normal font, at the same position.
- "Huge" is highlighted and the "F" field shows 56.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains texts in the hand-drawn and the normal font, in different colors, at font sizes Small, Huge and Giant.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, relative size, color and line breaks as on the canvas.
- No character is cut off at the image edges.

## TC-8 SVG export of texts at the new presets
Action: create
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains the texts "Small note" at font size Small, "Huge heading" at Huge and "Giant heading" at Giant, in the hand-drawn font.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the downloaded SVG in the same browser.

Expected result:
- The three texts have the same relative sizes, positions and line breaks as on the canvas.
- No character of "Giant heading" is cut off at the image edges.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" at font size Medium.

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user A, under "Font size", click "Giant".
4. As user B, click "Shared note".

Expected result:
- User B sees "Shared note" in red and at the same size as user A sees it, without reloading.
- After step 4, "Giant" is highlighted for user B.