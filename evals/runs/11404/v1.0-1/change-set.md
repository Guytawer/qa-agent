# Change set: excalidraw#11404

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:37:07.444Z (fingerprint 431be197ac9b).

Scope: italic text (issue #11404) on desktop Chrome, Firefox and Safari, plus the mobile layout at 375 px wide; shortcuts are given for Windows/Linux with the macOS key in brackets.

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
- The text stays italic and the "Italic" toggle stays pressed.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one black italic text element "Colored note" at 100% opacity.

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), set the value to 50.

Expected result:
- The text renders in red at half opacity.
- The text stays italic and the "Italic" toggle stays pressed.
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
4. Click the "Italic" toggle.
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.

Expected result:
- "Second" is created italic, at font size Large in the normal font.
- "First" keeps font size Large in the normal font and stays italic.

## TC-1 "Italic" toggle on a text element
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright black text element "Emphasis" at font size Medium in the normal font.

Steps:
1. Click "Emphasis".
2. Hover over the "Italic" toggle next to the text align control.
3. Click the "Italic" toggle.
4. Click the "Italic" toggle again.

Expected result:
- After step 2, the tooltip reads "Italic (Ctrl+I)" ("Italic (Cmd+I)" on macOS).
- After step 3, "Emphasis" renders italic and the toggle shows as pressed.
- After step 3, the final "s" is fully visible inside the selection box; no letter is clipped.
- After step 3, the text content, font family, size, color, alignment and position are unchanged.
- After step 4, "Emphasis" renders upright again and the toggle shows as not pressed.

## TC-2 Ctrl+I on a selected text
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
- After step 2, "Shortcut test" renders italic and the "Italic" toggle shows as pressed.
- After step 3, "Shortcut test" renders upright and the toggle shows as not pressed.
- No other Excalidraw action runs: the active tool, the selection and the other properties do not change, and no dialog opens.
- No browser window or dialog opens.

## TC-3 Ctrl+I with nothing selected
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #11404

Preconditions: The canvas contains one upright text element "Left alone". The Selection tool is active.

| Browser | Shortcut |
|---|---|
| Firefox | Ctrl+I |
| Chrome | Ctrl+I |
| Safari (macOS) | Cmd+I |

Firefox is included because it binds Ctrl+I to "Page Info" (verify); Chrome and Safari cover the other engines.

Steps:
1. Click an empty area of the canvas.
2. Press the shortcut given in the row.

Expected result:
- "Left alone" stays upright and no element changes.
- No new text is created and the active tool does not change.
- No browser window or dialog opens; in Firefox the "Page Info" window does not open.

## TC-4 Ctrl+I while a text is being edited
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright two-line text element "Key term here" / "second line", left-aligned.

Steps:
1. Double-click "Key term here" to start editing.
2. Highlight the word "term".
3. Press Ctrl+I (Cmd+I on macOS).
4. Press Esc.

Expected result:
- After step 3, the whole text in the editor renders italic, not only the word "term".
- After step 3, the text stays in the editor and its content is unchanged.
- After step 4, the text on the canvas is italic, with the same line breaks and at the same position as in the editor; the text does not jump when editing ends.
- The canvas still holds one text element.

## TC-5 "Italic" toggle visibility by selection
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text "Label", a rectangle with the text "Start" inside it, an arrow labeled "yes", a sticky note with the text "Idea" and a rectangle without text.

| Selection | "Italic" toggle |
|---|---|
| Text "Label" | shown |
| Rectangle with the text "Start" | shown |
| Arrow labeled "yes" | shown |
| Sticky note "Idea" | shown |
| Text tool active (press T), nothing selected | shown |
| Rectangle without text | not shown |
| Nothing selected, Selection tool active | not shown |

Every kind of element that can hold text is listed, plus the two states where italic has nothing to apply to.

Steps:
1. Make the selection given in the row.
2. Look at the properties panel.

Expected result:
- The "Italic" toggle is shown or not shown as given in the row's "Italic" toggle column.

## TC-6 Italic in fonts with and without an italic face
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Quick brown fox 123" in the font given in the row.

| Font |
|---|
| Hand-drawn (Excalifont) |
| Normal (Nunito) |
| Code (Comic Shanns) |
| The first font in the "Font family" list of more fonts |

The three quick-choice fonts are the ones most used; Excalifont and Comic Shanns may have no italic face, so they need a synthetic slant; one font from the list covers the rest.

Steps:
1. Click "Quick brown fox 123".
2. Click the "Italic" toggle.

Expected result:
- The letters and digits are slanted; a true italic face and a synthetic slant are both acceptable.
- The toggle is enabled and shows as pressed.
- The text stays in the same font and is readable.
- No character is clipped, including the last "3".

## TC-7 Italic text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element with the text and alignment given in the row, in the normal font.

| Script | Text | Alignment |
|---|---|---|
| Latin | "Hypothesis" | left |
| Cyrillic | "Гипотеза" | left |
| Chinese | "假设检验" | center |
| Japanese | "仮説の検証" | center |
| Arabic (right to left) | "فرضية البحث" | right |
| Hebrew (right to left) | "השערת המחקר" | right |
| Emoji | "Done ✅🚀" | left |
| Mixed | "Test тест 测试 اختبار 🙂" | center |

The rows cover every script the product owner named, with both right-to-left scripts at right alignment, where a slant is most likely to clip the line start.

Steps:
1. Click the text.
2. Click the "Italic" toggle.

Expected result:
- The text renders italic or synthetically slanted.
- Every character, emoji included, is readable and fully visible; nothing is clipped at either end of the line.
- The text direction is unchanged: right-to-left text still reads right to left.
- The alignment given in the row is unchanged.

## TC-8 "Italic" toggle with several texts of mixed italic
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text "Alpha", an upright text "Beta" and a rectangle without text.

Steps:
1. Click "Alpha".
2. Shift+click "Beta".
3. Shift+click the rectangle.
4. Look at the "Italic" toggle.
5. Click the "Italic" toggle.
6. Click the "Italic" toggle again.

Expected result:
- After step 4, the toggle is shown and shows as not pressed.
- After step 5, "Alpha" and "Beta" are both italic and the toggle shows as pressed.
- After step 6, "Alpha" and "Beta" are both upright and the toggle shows as not pressed.
- The rectangle is unchanged throughout and no text is added to it.

## TC-9 "Italic" label in other interface languages
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Lang test".

| Language |
|---|
| Deutsch |
| العربية |
| 日本語 |

German has long words, Arabic switches the interface to right to left, and Japanese uses a different script.

Steps:
1. Open the main menu and choose the language given in the row from the language list (verify).
2. Click "Lang test".
3. Hover over the "Italic" toggle.
4. Click the "Italic" toggle.

Expected result:
- The tooltip shows a translated label or the English "Italic", never an empty label or a raw key name.
- The tooltip shows the shortcut Ctrl+I (Cmd+I on macOS).
- The toggle does not overlap other controls in the panel.
- After step 4, "Lang test" renders italic.

## TC-10 "Italic" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: The browser window, or the device emulation of the browser's developer tools, is 375 px wide with touch input. The canvas contains one upright text element "Mobile note".

Steps:
1. Tap "Mobile note".
2. Open the properties panel (verify).
3. Tap the "Italic" toggle.

Expected result:
- The toggle is fully visible in the panel without horizontal scrolling and does not overlap other controls.
- After step 3, "Mobile note" renders italic and the toggle shows as pressed.

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle about 160 px wide with the upright text "Start the approval process" inside it, at font size Medium.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Large".
3. Click the "Italic" toggle.

Expected result:
- After step 2, the text renders at font size Large and still fits inside the rectangle.
- After step 3, the text renders italic and re-wraps to the rectangle's width; no character crosses the border.
- The rectangle grows taller if the text needs more lines; its width stays the same.
- The rectangle's stroke and fill are unchanged.

## TC-11 Italic arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains two rectangles joined by an arrow with the upright label "approved".

Steps:
1. Click the arrow.
2. Click the "Italic" toggle.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "approved" renders italic, stays at the middle of the arrow and is fully visible.
- After step 4, the label is still italic, at the middle of the arrow and fully visible.

## TC-12 Italic sticky note label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a sticky note with the upright label "Review the onboarding checklist before Friday" at font size Large, filling the note's width.

Steps:
1. Click the sticky note.
2. Click the "Italic" toggle.

Expected result:
- The label renders italic.
- The whole label stays inside the note; no character is clipped.
- The label is shown at font size Large or smaller to fit, never larger.
- "Large" stays highlighted under "Font size".

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
- After step 6, "Undo me" is upright at Large after a single undo, and the "Italic" toggle shows as not pressed.
- After step 7, "Undo me" is italic at Large again, and the toggle shows as pressed.
- The text content and position stay the same throughout.

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

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors; one text in each font is italic and the others are upright.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- The italic texts are italic and the upright texts are upright, as on the canvas.
- No character is cut off at the image edges.

## TC-13 Italic text copied to the clipboard as PNG and SVG
Action: create
Area: Files, sharing and export
Priority: Low · Type: functional
Tags: #11404

Preconditions: The canvas contains one red italic text "Clipboard copy" in the normal font.

| Context menu item | Where to paste |
|---|---|
| "Copy to clipboard as PNG" (verify) | An empty Excalidraw canvas in another browser tab |
| "Copy to clipboard as SVG" (verify) | A plain text editor; save it as copy.svg and open copy.svg in the browser |

Both clipboard formats are covered because each is rendered by a different export path.

Steps:
1. Right-click "Clipboard copy".
2. Choose the context menu item given in the row.
3. Paste the clipboard content where the row says.

Expected result:
- The pasted image shows "Clipboard copy" italic, in red, in the normal font.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text in the hand-drawn font and a text in the normal font; the hand-drawn text is italic and the normal text is upright. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- The hand-drawn text is italic and the normal text is upright, as on the canvas.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black upright text "Shared note".

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user A, click the "Italic" toggle.
4. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" in red and italic without reloading.

## TC-14 File with italic text opened in an older Excalidraw version
Action: create
Area: Files, sharing and export
Priority: Low · Type: regression
Tags: #11404

Preconditions: A file "italic.excalidraw" was saved from the current version and contains a red italic text "Old reader" at font size Large and an upright text "Plain". An Excalidraw build released before italic support is available.

Steps:
1. Open the older Excalidraw build.
2. Open the main menu and choose "Open".
3. Pick "italic.excalidraw".

Expected result:
- The file opens without an error message.
- "Old reader" is shown upright, red, at font size Large, at its saved position.
- "Plain" is shown as it was saved.
