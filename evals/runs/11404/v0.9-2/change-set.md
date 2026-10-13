# Change set: excalidraw#11404

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T11:23:47.475Z (fingerprint 84a25106f4cd).

Scope: italic text (a panel "Italic" toggle and Ctrl+I / Cmd+I, one italic property per text element) on the latest desktop Chrome, Firefox and Safari on Windows and macOS, plus the mobile layout at 375 px width. Exact font sizes can be read in the "F" field of the "Properties" panel (Alt+/). Bold and partial italic are out of scope.

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
- The text is still italic, and the "Italic" toggle shows as pressed.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.

## C-004 Text color and opacity: changing them on text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one black italic text element "Colored note" at opacity 100.

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), set the slider to 50.

Expected result:
- After step 2, the text renders in red and is still italic.
- After step 3, the text renders half transparent and is still italic.
- The font family, size and alignment are unchanged after each step.

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
- "Second" is created at font size Large in the normal font, and it is italic.
- "First" keeps font size Large in the normal font and stays italic.

## TC-1 Italic on a selected text: "Italic" toggle and Ctrl+I / Cmd+I
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright black text element "Key term" at font size Medium in the hand-drawn font. The selection tool is active.

| Way to toggle italic |
|---|
| Click the "Italic" toggle in the properties panel |
| Press Ctrl+I (Cmd+I on macOS) |

The two rows are the two ways to toggle italic that the feature offers.

Steps:
1. Click "Key term".
2. Toggle italic the way given in the row.
3. Toggle italic the way given in the row again.

Expected result:
- After step 2, "Key term" renders slanted, and the "Italic" toggle shows as pressed.
- After step 3, "Key term" renders upright again, and the "Italic" toggle shows as not pressed.
- The text content, font family, size, color, alignment and position are unchanged after each step.
- No browser dialog or panel opens, and the active tool in the toolbar stays the selection tool.

## TC-2 Ctrl+I / Cmd+I while editing a text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Emphasize this word".

Steps:
1. Double-click "Emphasize this word" to edit it.
2. Highlight the word "this" in the editor.
3. Press Ctrl+I (Cmd+I on macOS).
4. Note the position of each line in the editor.
5. Press Esc.

Expected result:
- After step 3, the whole text "Emphasize this word" shows italic in the editor, not only "this".
- The text content is unchanged and no characters are replaced or deleted.
- After step 5, the text on the canvas is italic and sits at the same position as in the editor; the lines do not jump.
- When the text is selected again, the "Italic" toggle shows as pressed.

## TC-3 Ctrl+I / Cmd+I with nothing selected
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #11404

Preconditions: The canvas contains one upright text element "Untouched". Nothing is selected. The selection tool is active. The canvas has focus (click an empty area of the canvas first).

Steps:
1. Press Ctrl+I (Cmd+I on macOS).

Expected result:
- "Untouched" stays upright.
- No browser dialog or window opens (in Firefox, "Page Info" does not open).
- The active tool in the toolbar stays the selection tool; the tool on the I key (verify) is not chosen.

## TC-4 "Italic" toggle: where it is shown and its tooltip
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text "Plain", a rectangle with the text "Boxed" inside it, an arrow labeled "yes", a sticky note with the text "Note", and an empty ellipse.

| State | "Italic" toggle |
|---|---|
| "Plain" selected | shown |
| Rectangle with "Boxed" selected | shown |
| Arrow labeled "yes" selected | shown |
| Sticky note "Note" selected | shown |
| Text tool active (press T), nothing selected | shown |
| Empty ellipse selected | not shown |
| Nothing selected, selection tool active | not shown |

The rows cover every element type that holds text, the Text tool, and two states without text.

Steps:
1. Bring the canvas to the state given in the row.
2. Look at the properties panel next to "Text align".
3. Hover over the "Italic" toggle, where it is shown.

Expected result:
- The "Italic" toggle is shown or not shown as the table says.
- Where shown, it sits next to the "Text align" control.
- Where shown, its tooltip reads "Italic (Ctrl+I)".

## TC-5 Several texts with mixed italic: toggle state and one click for all
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains text elements "Input" (italic), "Process" (upright) and "Output" (upright).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Look at the "Italic" toggle.
5. Click the "Italic" toggle.
6. Click the "Italic" toggle again.

Expected result:
- After step 4, the "Italic" toggle shows as not pressed.
- After step 5, all three texts are italic and the toggle shows as pressed.
- After step 6, all three texts are upright and the toggle shows as not pressed.
- Contents and positions of the three texts are unchanged throughout.

## TC-6 Italic in different fonts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas is empty.

| Font family |
|---|
| Hand-drawn (Excalifont) |
| Normal (Nunito) |
| Code (Comic Shanns) |
| Any font from the list with more fonts that uses a line height other than 1.25 |

The three quick-choice fonts are the ones used most; the fourth comes from the full list, where fonts have their own line heights and may lack a true italic face.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type "Waveform f(x) jy".
4. Press Esc.
5. Under "Font family", choose the font given in the row.
6. Click the "Italic" toggle.

Expected result:
- The text renders slanted in the chosen font (a true italic or a slanted form of the upright font).
- No character is clipped: the end of "f(x)" and the descenders of "j" and "y" are fully visible.
- The selection box encloses the whole slanted text, including the last character.

## TC-7 Italic text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element with the text from the row, at font size Large, aligned as the row says.

| Script | Text | Alignment |
|---|---|---|
| Latin | "Hypothesis" | left |
| Cyrillic | "Гипотеза" | left |
| Chinese | "假设检验" | center |
| Japanese | "仮説の検証" | center |
| Arabic (right to left) | "فرضية البحث" | right |
| Hebrew (right to left) | "השערת המחקר" | right |
| Emoji | "🚀✅👍🏽" | left |
| Mixed | "Test тест 测试 اختبار ✅" | center |

One row per script the product owner named, with right-to-left scripts on right alignment and mixed text on center, where a direction or alignment shift would show.

Steps:
1. Click the text.
2. Click the "Italic" toggle.

Expected result:
- Every character is readable and none is clipped at any edge.
- The reading direction of the text is unchanged.
- The text alignment is unchanged.
- The selection box encloses the whole text.

## TC-8 "Italic" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: The browser window (or device emulation) is 375 px wide, so the editor shows its mobile layout. The canvas contains one text element "Mobile".

Steps:
1. Tap "Mobile".
2. Open the properties panel (verify how it opens in the mobile layout).
3. Tap the "Italic" toggle.

Expected result:
- The "Italic" toggle is fully visible and does not overlap other controls.
- The panel does not need horizontal scrolling to reach the toggle.
- After step 3, "Mobile" renders italic.

# Text in shapes and on arrows

## TC-9 Italic on text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle about 160 px wide with the upright text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines.

Steps:
1. Click the rectangle.
2. Click the "Italic" toggle.

Expected result:
- The text inside the rectangle renders italic.
- The text wraps to the rectangle width and no character crosses the rectangle border.
- The rectangle grows taller if the text needs more lines; its width stays the same.
- The rectangle's stroke and fill are unchanged.

## TC-10 Italic on an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains two rectangles joined by an arrow labeled "approved".

Steps:
1. Click the arrow.
2. Click the "Italic" toggle.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "approved" renders italic, stays at the middle of the arrow and is fully visible.
- After step 4, the label is still italic, stays at the middle of the arrow and is fully visible.

## TC-11 Italic on a sticky note label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool, with the label "Review the italic rendering of long labels" at font size Large (28).

Steps:
1. Click the sticky note.
2. Click the "Italic" toggle.
3. Press Alt+/ to open the "Properties" panel.
4. Read the "F" field.

Expected result:
- The label renders italic and fits inside the note; no character is clipped.
- The label is shown at 28 or smaller, never larger than 28.
- The label's line breaks fit the note's width.

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
- "Target" is red, at font size Large, in the normal font, and italic.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Undo me" at font size Medium.

Steps:
1. Click "Undo me".
2. Under "Font size", click "Large".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).
5. Click the "Italic" toggle.
6. Press Ctrl+Z (Cmd+Z on macOS).
7. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo.
- After step 4, "Undo me" is at Large again.
- After step 6, "Undo me" is upright after a single undo and still at Large.
- After step 7, "Undo me" is italic again and at Large.
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

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors; one of them, "Slanted label", is italic.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- "Slanted label" is italic in the PNG, with the same slant as on the canvas; the other texts are upright.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an upright text in the hand-drawn font, a text in the normal font, and an italic text "Slanted note" in the hand-drawn font. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- All texts render in the same fonts as on the canvas.
- "Slanted note" renders italic, with the same slant as on the canvas, and no character is cut off.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black upright text "Shared note".

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user B, look at "Shared note".
4. As user A, click the "Italic" toggle.
5. As user B, look at "Shared note".

Expected result:
- After step 3, user B sees "Shared note" in red without reloading.
- After step 5, user B sees "Shared note" in red and italic without reloading.

## TC-12 Copy to clipboard as PNG or SVG keeps italic
Action: create
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text "Clipboard italic" and an upright text "Clipboard upright". An image editor that accepts pasted PNG and a text editor that accepts pasted SVG are open.

| Format | Menu item (verify) | Paste into |
|---|---|---|
| PNG | "Copy to clipboard as PNG" | image editor |
| SVG | "Copy to clipboard as SVG" | text editor, then save as .svg and open in a browser |

The two rows are the two clipboard image formats.

Steps:
1. Select both texts.
2. Right-click the selection.
3. Choose the menu item given in the row.
4. Paste into the target given in the row.

Expected result:
- "Clipboard italic" is italic in the pasted image, with the same slant as on the canvas.
- "Clipboard upright" is upright.
- No character is cut off.

## TC-13 File with italic text opened in a version without italic support
Action: create
Area: Files, sharing and export
Priority: Low · Type: regression
Tags: #11404

Preconditions: A .excalidraw file saved with italic support holds an italic red text "Old reader" at font size Large. An Excalidraw build from before italic support (for example the previous release) is open in the browser.

Steps:
1. In the older build, open the main menu and choose "Open".
2. Pick the file.

Expected result:
- The file opens without an error message.
- "Old reader" is shown upright, red, at font size Large, at its saved position.