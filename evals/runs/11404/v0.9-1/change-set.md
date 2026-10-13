# Change set: excalidraw#11404

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T11:19:57.055Z (fingerprint 15fc967f2cd0).

Scope: italic text (one italic property per text element, the "Italic" toggle and Ctrl+I / Cmd+I). Run on current desktop Chrome, Firefox, Safari and Edge on Windows and macOS; TC-11 runs in the mobile layout. On macOS use Cmd instead of Ctrl and Option instead of Alt. "Upright" means not italic.

# Text properties

## TC-1 "Italic" toggle: turning italic on and off for a text element
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright black text "Flowchart step" at font size Medium in the normal font.

Steps:
1. Click "Flowchart step".
2. Hover over the "Italic" toggle in the properties panel.
3. Click the "Italic" toggle.
4. Click the "Italic" toggle again.

Expected result:
- After step 2, the tooltip reads "Italic (Ctrl+I)".
- After step 3, the whole text is slanted and the "Italic" toggle shows as pressed.
- After step 3, the text content, font size, font family, color and position are unchanged, and the selection box encloses the slanted text including its last letter.
- After step 4, the text is upright again and the "Italic" toggle shows as not pressed.

## TC-2 Ctrl+I / Cmd+I on a selected text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text "Shortcut test". The canvas has focus.

Steps:
1. Click "Shortcut test".
2. Press Ctrl+I (Cmd+I on macOS).
3. Press Ctrl+I (Cmd+I on macOS) again.

Expected result:
- After step 2, "Shortcut test" is italic and the "Italic" toggle shows as pressed.
- After step 3, "Shortcut test" is upright and the "Italic" toggle shows as not pressed.
- No browser dialog, panel or window opens after either press (for example, Firefox page info).

## TC-3 Ctrl+I while editing a text with part of it highlighted
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text "Half highlighted".

Steps:
1. Double-click "Half highlighted" to edit it.
2. Double-click the word "Half" to highlight only that word.
3. Press Ctrl+I (Cmd+I on macOS).
4. Press Esc.

Expected result:
- The whole text "Half highlighted" is italic, not only the word "Half".
- The text content is unchanged.
- No browser dialog, panel or window opens.

## TC-4 Ctrl+I with nothing selected
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #11404

Preconditions: The canvas contains one upright text "Untouched". The last chosen italic value is upright.

Steps:
1. Click an empty area of the canvas.
2. Press Ctrl+I (Cmd+I on macOS).
3. Press T to choose the text tool.
4. Click an empty area of the canvas.
5. Type "Next".
6. Press Esc.

Expected result:
- "Untouched" stays upright.
- "Next" is created upright.
- No browser dialog, panel or window opens after step 2.

## TC-5 "Italic" toggle: where it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text "Plain", a rectangle with the text "Boxed" inside, an arrow labelled "yes", a sticky note with the label "Todo" and a rectangle with no text.

| State | "Italic" toggle in the properties panel |
|---|---|
| "Plain" selected | shown |
| Rectangle with "Boxed" selected | shown |
| Arrow labelled "yes" selected | shown |
| Sticky note "Todo" selected | shown |
| Text tool active, nothing selected | shown |
| Rectangle with no text selected | not shown (verify) |

Rows cover every element that holds text, the Text tool, and one shape without text that should not offer the toggle.

Steps:
1. Bring the canvas into the state given in the row.
2. Look at the properties panel.

Expected result:
- The "Italic" toggle is shown or not shown as given in the row's "Italic" toggle column.

## TC-6 Italic in different fonts and after a font family change
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one italic text "Slanted font" in the normal font.

| Font to choose |
|---|
| Hand-drawn |
| Code |
| Lilita One (verify), from the list of more fonts |

The three quick choices other than the starting Normal font and one font from the full list cover the fonts that may have no italic face of their own.

Steps:
1. Click "Slanted font".
2. Under "Font family", choose the font given in the row.

Expected result:
- Before step 2, the text in the normal font is visibly slanted.
- After step 2, the text renders in the chosen font and is still visibly slanted.
- The "Italic" toggle still shows as pressed.
- No character is clipped, and the selection box encloses the whole text.

## TC-7 Italic text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright, left-aligned text holding the row's content, at font size Large.

| Script | Text content |
|---|---|
| Latin | Italic check |
| Cyrillic | Проверка курсива |
| Chinese | 斜体测试 |
| Japanese | 斜体のテスト |
| Arabic (right to left) | نص مائل |
| Hebrew (right to left) | טקסט נטוי |
| Emoji with Latin | Deadline ⏰🔥 |
| Mixed scripts | Release v2 релиз 发布 إصدار |

These are the scripts the product owner named. The mixed row checks that direction changes inside a single line still work.

Steps:
1. Click the text.
2. Click the "Italic" toggle.

Expected result:
- Every character is readable, and no character is clipped or overlaps another.
- Letters are slanted; emoji may stay upright.
- The reading direction is unchanged: Arabic and Hebrew still read right to left.
- The text keeps its left alignment and its position.
- The selection box encloses all characters.

## TC-8 Italic on multi-line text with each text alignment
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text with three lines, "First line", "Second, longer line" and "Third", set to the row's alignment.

| Text align | Lines line up at |
|---|---|
| left | left edge |
| center | centre |
| right | right edge |

All three alignments are covered because a slant shifts the right edge of each line.

Steps:
1. Click the text.
2. Click the "Italic" toggle.

Expected result:
- All three lines are italic.
- The lines still line up as given in the row's "Lines line up at" column.
- The last letter of "Second, longer line" is not clipped, and the selection box encloses it.

## TC-9 Several texts with mixed italic: toggle state and one click for all
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text "Alpha" and the upright texts "Beta" and "Gamma".

Steps:
1. Click "Alpha".
2. Shift+click "Beta".
3. Shift+click "Gamma".
4. Click the "Italic" toggle.
5. Click the "Italic" toggle again.

Expected result:
- After step 3, the "Italic" toggle shows as not pressed.
- After step 4, all three texts are italic and the toggle shows as pressed.
- After step 5, all three texts are upright and the toggle shows as not pressed.
- The contents and positions of the three texts are unchanged.

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
4. Click the "Italic" toggle.
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.

Expected result:
- "Second" is created italic, at font size Large, in the normal font.
- "First" keeps font size Large, the normal font and italic.

## TC-10 Italic kept after color and opacity changes
Action: create
Area: Text properties
Priority: Medium · Type: regression
Tags: #11404

Preconditions: The canvas contains one black italic text "Keep slant" at full opacity.

Steps:
1. Click "Keep slant".
2. Under "Stroke", click the red color.
3. Drag the "Opacity" (verify) slider to 50.

Expected result:
- "Keep slant" is red at half opacity.
- "Keep slant" is still italic, and the "Italic" toggle shows as pressed.

## TC-11 "Italic" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: The browser window is 375 px wide and Excalidraw shows its mobile layout. The canvas contains one upright text "Phone note".

Steps:
1. Tap "Phone note".
2. Open the properties panel (verify the button that opens it in the mobile layout).
3. Tap the "Italic" toggle.

Expected result:
- The "Italic" toggle is fully visible without horizontal scrolling and does not overlap other controls.
- After step 3, "Phone note" is italic and the toggle shows as pressed.

# Text in shapes and on arrows

## TC-12 Italic on text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle about 160 px wide with the upright text "Check whether the uploaded file exceeds the size limit" inside it.

Steps:
1. Click the rectangle.
2. Press Ctrl+I (Cmd+I on macOS).

Expected result:
- The text inside the rectangle is italic.
- The text re-wraps inside the rectangle, and no character crosses the rectangle border.
- The rectangle grows taller if the text needs more lines; its width stays the same.
- The rectangle's stroke and fill are unchanged.

## TC-13 Italic on an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains two rectangles joined by an arrow labelled "yes, continue" in upright text.

Steps:
1. Click the arrow.
2. Click the "Italic" toggle.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "yes, continue" is italic, at the middle of the arrow, and fully visible.
- After step 4, the label is still italic, stays at the middle of the arrow, and no character is clipped.

## TC-14 Italic on a sticky note label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a sticky note with the upright label "Remember to update the release notes before Friday" at font size Large.

Steps:
1. Click the sticky note.
2. Click the "Italic" toggle.

Expected result:
- The label is italic.
- Every character of the label stays inside the sticky note, and none is clipped.
- The label is shown at font size Large or smaller to fit, never larger than Large.

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

| Change | State before | State after |
|---|---|---|
| Under "Font size", click "Large" | font size Medium | font size Large |
| Click the "Italic" toggle | upright | italic |

The rows cover the existing preset change and the new italic toggle.

Steps:
1. Click "Undo me".
2. Make the change given in the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back in the row's "State before" after a single undo.
- After step 4, "Undo me" is in the row's "State after" again.
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

The rows cover every way to copy an element.

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.

Expected result:
- The copy reads "Hypothesis H1" and is red, italic, at font size Large.
- The original is unchanged.

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

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors, and one italic text "Slanted edge f" placed at the right edge of the drawing.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- "Slanted edge f" is italic in the image.
- No character is cut off at the image edges, including the slanted final "f".

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text in the hand-drawn font and an upright text in the normal font. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- The hand-drawn text is italic and the normal text is upright, as on the canvas.
- No character of the italic text is cut off.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black upright text "Shared note".

| Change by user A | What user B sees |
|---|---|
| Under "Stroke", click the red color | "Shared note" in red |
| Click the "Italic" toggle | "Shared note" in italic |

The rows cover the existing color change and the new italic toggle.

Steps:
1. As user A, click "Shared note".
2. As user A, make the change given in the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees the result given in the row's "What user B sees" column without reloading.

## TC-15 Copy as PNG and copy as SVG keep italic
Action: create
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one italic text "Clipboard slant". An image editor that accepts pasted images is open on the same computer.

| Copy command |
|---|
| "Copy to clipboard as PNG" (verify) |
| "Copy to clipboard as SVG" (verify) |

The rows cover both clipboard image formats.

Steps:
1. Right-click "Clipboard slant".
2. Choose the copy command given in the row.
3. Paste into the image editor.

Expected result:
- The pasted image shows "Clipboard slant" in italic.
- No character is cut off, including the final "t".

## TC-16 An older Excalidraw version opens a file with italic text
Action: create
Area: Files, sharing and export
Priority: Medium · Type: regression
Tags: #11404

Preconditions: A file "italic.excalidraw" was saved from the current version and contains a red italic text "Legacy check" at font size Large and an upright text "Plain text". An Excalidraw build released before italic support is available (verify how to run it).

Steps:
1. Open the older Excalidraw build.
2. Open the main menu and choose "Open".
3. Pick "italic.excalidraw".

Expected result:
- The file opens without an error message.
- "Legacy check" is shown upright, red, at font size Large, with its content and position unchanged.
- "Plain text" is shown as it was saved.