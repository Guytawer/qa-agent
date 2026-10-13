# Change set: excalidraw#11404

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T11:27:00.625Z (fingerprint 5071939ad7cb).

Scope: italic text (one italic property per text element, set with the "Italic" toggle or Ctrl+I / Cmd+I). Desktop Chrome, Firefox, Safari and Edge on Windows and macOS, plus the mobile layout at 375 px wide. Shortcuts are written for Windows; on macOS use Cmd instead of Ctrl and Option instead of Alt. To read the exact font size of a selected text, open the "Properties" panel with Alt+/ and read the "F" field.

# Text properties

## TC-1 "Italic" toggle: making a text italic and upright again
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one black, upright text element "Hypothesis" at font size Medium (20) in the Normal font, left-aligned.

Steps:
1. Click "Hypothesis".
2. Hover over the "Italic" toggle next to the text align control.
3. Click the "Italic" toggle.
4. Click the "Italic" toggle again.

Expected result:
- After step 2, the tooltip reads "Italic (Ctrl+I)".
- After step 3, "Hypothesis" renders slanted (italic) and the "Italic" toggle shows as pressed.
- After step 3, the selection box widens enough that the last letter "s" is fully visible and not clipped.
- After step 4, "Hypothesis" renders upright again and the toggle shows as not pressed.
- After each step, the text content, font family, font size (20), color, alignment and the position of the left edge are unchanged.

## TC-2 Ctrl+I / Cmd+I on a selected text in each desktop browser
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Key term". The browser and OS are as given in the row.

| Browser and OS | Shortcut |
|---|---|
| Firefox on Windows | Ctrl+I |
| Chrome on Windows | Ctrl+I |
| Edge on Windows | Ctrl+I |
| Safari on macOS | Cmd+I |
| Firefox on macOS | Cmd+I |

Why these values: Firefox binds Ctrl+I / Cmd+I to its own "Page Info" window, so it is the riskiest browser and is tested on both OS; every other in-scope browser is covered once.

Steps:
1. Click "Key term".
2. Press the shortcut from the row.
3. Press the shortcut from the row again.

Expected result:
- After step 2, "Key term" renders italic and the "Italic" toggle shows as pressed.
- After step 3, "Key term" renders upright and the toggle shows as not pressed.
- No browser window, dialog or panel opens (for example no "Page Info" window in Firefox), and "Key term" stays selected.

## TC-3 Ctrl+I while editing a text with part of it highlighted
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "alpha beta gamma".

Steps:
1. Double-click "alpha beta gamma" to edit it.
2. Double-click the word "beta" to highlight only that word.
3. Press Ctrl+I.
4. Type " delta" at the end of the text.
5. Press Esc.

Expected result:
- After step 3, the whole text "alpha beta gamma" renders italic in the editor, not only "beta", and editing continues.
- After step 4, the typed " delta" is italic too.
- After step 5, the text element "alpha beta gamma delta" renders italic on the canvas, with the same line breaks it had in the editor.

## TC-4 Ctrl+I with nothing selected
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #11404

Preconditions: The canvas contains one upright text element "Untouched" and a rectangle. Nothing is selected and the canvas has focus. The browser is Firefox.

Steps:
1. Click an empty area of the canvas.
2. Press Ctrl+I.
3. Press T to choose the text tool.
4. Click an empty area of the canvas.
5. Type "Fresh".
6. Press Esc.

Expected result:
- After step 2, "Untouched" and the rectangle are unchanged, and no browser window or dialog (for example "Page Info") opens.
- "Fresh" is created upright: pressing Ctrl+I with nothing selected did not change the style for new text.

## TC-5 "Italic" toggle: when it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text element "Note", a rectangle with the text "Box" inside it, an arrow labeled "yes", and an empty ellipse with no text.

| Selection or state | "Italic" toggle shown |
|---|---|
| Text "Note" selected | yes |
| Rectangle with "Box" selected | yes |
| Arrow labeled "yes" selected | yes |
| Text tool active (press T), nothing selected | yes |
| Empty ellipse selected | no |
| Nothing selected, selection tool active | no |

Why these values: one row for each case the approved answer names as showing the toggle, plus a shape without text and an empty selection as the cases that must not show it.

Steps:
1. Set up the selection or state from the row.
2. Look at the properties panel.

Expected result:
- The "Italic" toggle is shown or not shown as the table says.
- Where it is shown, it sits next to the text align control.

## TC-6 Italic in fonts with and without an italic face
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Quick brown fox 123" at font size Large (28), in the font from the row.

| Font |
|---|
| Hand-drawn (Excalifont) |
| Normal (Nunito) |
| Code (Comic Shanns) |
| One font picked from the full font list (open the "Font family" list) |

Why these values: the three quick-choice fonts cover the hand-drawn, sans-serif and code families, which may lack a real italic face and need a synthetic slant; one font from the full list checks that the rest of the list is not excluded.

Steps:
1. Click "Quick brown fox 123".
2. Click the "Italic" toggle.

Expected result:
- The "Italic" toggle is enabled and, after step 2, shows as pressed.
- The text renders slanted in the same font (a real italic face or a synthetic slant are both acceptable).
- All characters stay readable, and no character is clipped at the left or right edge of the text box.
- The font size stays 28.

## TC-7 Italic text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright, right-aligned text element with the content from the row, at font size Medium (20) in the Normal font.

| Script | Text content | Reading direction |
|---|---|---|
| Latin | "Italic emphasis fjord" | left to right |
| Cyrillic | "Курсивный текст" | left to right |
| Chinese | "斜体文字示例" | left to right |
| Japanese | "斜体のテキスト ひらがな カタカナ" | left to right |
| Arabic | "نص مائل للتجربة" | right to left |
| Hebrew | "טקסט נטוי לבדיקה" | right to left |
| Emoji | "Done ✅ 🚀 👍🏽" | left to right |
| Mixed | "Total סה״כ 42 مجموع 漢字 🙂" | mixed |

Why these values: one row for each script the product owner named; "fjord" and the emoji with a skin-tone modifier are the characters most likely to be clipped, and the mixed row combines both directions with CJK and emoji.

Steps:
1. Click the text element.
2. Click the "Italic" toggle.

Expected result:
- The text stays readable; no character, accent or emoji is clipped at any edge of the text box.
- The reading direction is the same as in the table, and the order of the characters does not change.
- The text stays right-aligned.
- Whether emoji look slanted is left to the browser; either way they are fully visible.

## TC-8 Several texts with mixed italic: "Italic" toggle
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
- The contents and positions of the three texts are unchanged after each step.

## TC-9 "Italic" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The browser window is 375 px wide, so the mobile layout is shown (use a phone, or the browser's device emulation). The canvas contains one upright text element "Mobile note".

Steps:
1. Tap "Mobile note".
2. Open the properties panel (verify the control that opens it in the mobile layout).
3. Tap the "Italic" toggle.

Expected result:
- After step 2, the "Italic" toggle is visible and reachable without horizontal scrolling, and it does not overlap other controls.
- After step 3, "Mobile note" renders italic and the toggle shows as pressed.

## TC-10 "Italic" label in a locale other than English
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: The interface language is set to Deutsch in the main menu language picker (verify). The canvas contains one text element "Sprache".

Steps:
1. Click "Sprache".
2. Hover over the "Italic" toggle.

Expected result:
- The tooltip shows a translated label or the English "Italic (Ctrl+I)".
- The tooltip is never empty and never shows a raw key name (such as text with dots or underscores in place of a label).

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
- The text stays italic and the "Italic" toggle still shows as pressed.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one black, italic text element "Colored note".

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), set the opacity to 50.

Expected result:
- After step 2, the text renders in red.
- After step 3, the text renders in semi-transparent red.
- After each step, the text stays italic and the "Italic" toggle still shows as pressed.
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
10. Click "Second".
11. Click the "Italic" toggle.
12. Press Esc.
13. Press T to choose the text tool.
14. Click an empty area of the canvas.
15. Type "Third".
16. Press Esc.

Expected result:
- "Second" is created at font size Large in the normal font, italic.
- "First" keeps font size Large in the normal font and stays italic.
- "Third" is created at font size Large in the normal font, upright.
- After step 11, "Second" is upright; "First" stays italic.

# Text in shapes and on arrows

## C-007 Text inside a rectangle wraps to the shape width
Action: update C-007
Area: Text in shapes and on arrows
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle about 160 px wide with no text.

Steps:
1. Double-click the rectangle.
2. Type "Check whether the uploaded file exceeds the size limit".
3. Press Esc.
4. Note the rectangle's width and height.
5. Press Ctrl+I.

Expected result:
- After step 3, the text wraps onto several lines inside the rectangle.
- After step 3, no character crosses the rectangle border.
- After step 3, the rectangle grows taller if the text needs more lines; its width stays the same.
- After step 5, the text is italic, still wraps inside the rectangle, and no slanted character crosses the rectangle border.
- After step 5, the rectangle's width is the same as noted in step 4; its height is the same or taller.

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle with the upright text "Start" inside it, at font size Medium.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Large".
3. Click the "Italic" toggle.

Expected result:
- After step 2, "Start" renders at font size Large and still fits inside the rectangle.
- After step 3, "Start" renders italic, still at Large, still centered and inside the rectangle.
- The rectangle's stroke and fill are unchanged.

## TC-11 Arrow label: italic
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains two rectangles joined by an arrow labeled "yes, continue".

Steps:
1. Click the arrow.
2. Click the "Italic" toggle.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "yes, continue" renders italic, is fully visible and stays at the middle of the arrow.
- After step 4, the label is still italic, at the middle of the arrow and fully visible.
- The arrow's stroke and arrowheads are unchanged.

## TC-12 Sticky note label: italic and auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a sticky note created with the "Sticky note" tool, with the upright label "Review the draft by Friday morning" at font size Large (28). The label fills the note so that it is close to being shrunk to fit.

Steps:
1. Click the sticky note.
2. Note the label's line breaks.
3. Click the "Italic" toggle.
4. Open the "Properties" panel with Alt+/.
5. Read the "F" field.

Expected result:
- After step 3, the label renders italic and stays inside the note; no slanted character is clipped at the note's edges.
- The label is shown at 28 or smaller to fit, never larger than 28.
- The "Font size" control still shows "Large" as the picked size.
- After step 5, the "F" field shows 28.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a red, italic text "Source" at font size Large in the normal font, and a black, upright text "Target" at font size Medium in the hand-drawn font.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, italic, at font size Large, in the normal font.
- With "Target" selected, the "Italic" toggle shows as pressed.
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
- After step 6, "Undo me" is upright at Large after a single undo, and the "Italic" toggle shows as not pressed.
- After step 7, "Undo me" is italic at Large again, and the toggle shows as pressed.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a red, italic text "Hypothesis H1" at font size Large.

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

Preconditions: The canvas contains a red, italic text "Survives reload" at font size Large in the normal font, and a black, upright text "Stays upright".

Steps:
1. Reload the browser tab.

Expected result:
- "Survives reload" is still red, italic, at font size Large, in the normal font, at the same position.
- "Stays upright" is still upright.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains a red, italic text "Saved style" at font size Large in the normal font, and a black, upright text "Plain".

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.

Expected result:
- "Saved style" is red, italic, at font size Large, in the normal font, at the same position.
- "Plain" is upright.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. One text in each font is italic, and its last character is a tall letter such as "f" or "l" at the right edge.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color, italic or upright style and line breaks as on the canvas.
- No character is cut off at the image edges, including the slanted last character of each italic text.

## TC-13 Copy to clipboard as PNG and as SVG: italic text
Action: create
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one italic text "Clipboard check" in the normal font and one upright text "Upright check".

| Copy command |
|---|
| "Copy to clipboard as PNG" (verify) |
| "Copy to clipboard as SVG" (verify) |

Steps:
1. Select both texts.
2. Right-click one of them.
3. Choose the copy command from the row.
4. Paste the clipboard into an image editor or a document editor installed on the test computer.

Expected result:
- "Clipboard check" appears italic and "Upright check" appears upright, as on the canvas.
- No character is cut off, including the last letter of "Clipboard check".

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
- The two italic texts render italic and the upright text renders upright.
- No character is cut off.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black, upright text "Shared note".

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user B, look at "Shared note".
4. As user A, press Ctrl+I.
5. As user B, look at "Shared note".

Expected result:
- After step 3, user B sees "Shared note" in red without reloading.
- After step 5, user B sees "Shared note" in red and italic without reloading.

## TC-14 Older Excalidraw version opens a file with italic text
Action: create
Area: Files, sharing and export
Priority: Low · Type: regression
Tags: #11404

Preconditions: A saved .excalidraw file contains an italic text "From the future" and an upright rectangle. A build of the Excalidraw release before italic shipped is available to the team (verify where it is hosted).

Steps:
1. Open the older Excalidraw build.
2. Open the main menu and choose "Open".
3. Pick the saved file.

Expected result:
- The file opens without an error message.
- "From the future" is shown upright, with its content, font, size, color and position as saved.
- The rectangle is shown as saved.