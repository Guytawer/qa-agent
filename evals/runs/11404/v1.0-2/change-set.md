# Change set: excalidraw#11404

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:40:48.939Z (fingerprint deffaa198348).

Scope: excalidraw.com in a desktop browser (Chrome and Firefox) unless a case says otherwise; Windows/Linux shortcuts are given, with the macOS equivalent in brackets. Italic is one property of a whole text element; bold is out of scope.

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
- The selection box resizes to fit the new font, and no slanted character is cut off.

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one black italic text element "Colored note" at full opacity.

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), drag the slider to about 50.

Expected result:
- After step 2, the text renders in red.
- After step 3, the text is semi-transparent red.
- After each step, the text is still italic and the "Italic" toggle shows as pressed.
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
- "Second" is created italic, at font size Large, in the normal font.
- "First" keeps font size Large in the normal font and stays italic.

## TC-1 Italic on a text element: "Italic" toggle and Ctrl+I
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright, left-aligned text element "Key term" in the normal font at font size Medium, black. The browser is Firefox, where Ctrl+I opens the browser's Page Info window (verify).

| Way to toggle italic |
|---|
| In the properties panel, click the "Italic" toggle next to the text align control |
| Press Ctrl+I |
| Press Cmd+I (macOS) |

The panel and both shortcut forms are the three ways the product owner named.

Steps:
1. Click "Key term".
2. Toggle italic the way given in the row.
3. Toggle italic the same way again.

Expected result:
- After step 2, "Key term" is slanted and the "Italic" toggle shows as pressed.
- After step 2, the last letter "m" is fully visible and the selection box encloses the whole slanted text.
- After step 3, "Key term" is upright again and the "Italic" toggle shows as not pressed.
- The text content, font, size, color, alignment and position are unchanged after each step.
- No browser window or dialog opens.
- Hovering the toggle shows the tooltip "Italic (Ctrl+I)".

## TC-2 Ctrl+I with no text selected
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #11404

Preconditions: The canvas contains an upright text "Plain" and a rectangle without text. The browser is Firefox.

| Selection before Ctrl+I |
|---|
| Nothing selected (click an empty area of the canvas) |
| Only the rectangle without text selected |

These are the two states where the shortcut has no text to act on.

Steps:
1. Set up the selection given in the row.
2. Press Ctrl+I (Cmd+I on macOS).

Expected result:
- Nothing on the canvas changes; "Plain" stays upright.
- No browser window or dialog opens (in Firefox, Page Info does not open (verify)).
- No other Excalidraw tool or action is triggered.

## TC-3 "Italic" toggle: where it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text "Note", a rectangle with the text "Box" inside it, two rectangles joined by an arrow labeled "yes", a sticky note with the label "Todo", and a rectangle without text.

| State | "Italic" toggle |
|---|---|
| "Note" selected | shown |
| Rectangle "Box" selected | shown |
| Arrow "yes" selected | shown |
| Sticky note "Todo" selected | shown |
| Text tool active (press T), nothing selected | shown |
| Rectangle without text selected | not shown |
| Nothing selected, selection tool active | not shown |

Every element kind that can hold text, plus the two states without text.

Steps:
1. Set up the state given in the row.
2. Look at the properties panel.

Expected result:
- The "Italic" toggle is shown or not shown as the table says.
- When shown, it sits next to the text align control.

## TC-4 Italic while a text is being edited
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text "Formula explanation" on one line.

Steps:
1. Double-click "Formula explanation" to start editing.
2. Double-click the word "explanation" to highlight it.
3. Press Ctrl+I (Cmd+I on macOS).
4. Press Esc.
5. Double-click the text to start editing again.
6. Press Esc.

Expected result:
- After step 3, the whole text in the editor is italic, not only "explanation", and the text content is unchanged.
- After step 4, the text on the canvas is italic, in the same position and with the same line breaks as in the editor; the text does not jump.
- After step 5, the editor shows the text italic, at the same position as on the canvas; the text does not jump.
- After step 6, the text is still italic.

## TC-5 Italic in each font family
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text "Academic figure 1" at font size Large.

| Font family |
|---|
| Hand-drawn (Excalifont) |
| Normal (Nunito) |
| Code (Comic Shanns) |
| One font from the full font list, e.g. "Lilita One" (verify) |

The three quick choices plus one list font, since fonts may lack a real italic face and list fonts can have a different line height.

Steps:
1. Click "Academic figure 1".
2. Under "Font family", choose the font given in the row.
3. Click the "Italic" toggle.

Expected result:
- The text is visibly slanted in the chosen font.
- The "Italic" toggle is enabled and shows as pressed.
- No character is cut off, and the selection box encloses the whole text.

## TC-6 Italic text in different scripts
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright, two-line text for each row, with the alignment given in the row, in the normal font.

| Script | Text | Alignment |
|---|---|---|
| Latin | "Hypothesis / quick brown fox" | left |
| Cyrillic | "Гипотеза / съешь же ещё" | center |
| Chinese | "流程图 / 学术图表" | left |
| Japanese | "フローチャート / 数式の説明" | left |
| Arabic (right to left) | "مخطط انسيابي / شرح المعادلة" | right |
| Hebrew (right to left) | "תרשים זרימה / הסבר נוסחה" | right |
| Emoji | "Idea 💡🚀 / Done ✅" | center |
| Mixed scripts | "Step 1 שלב 流程 💡 / Итог" | left |

Each script the product owner listed, with right-to-left text right-aligned and Cyrillic and emoji centered to cover all three alignments.

Steps:
1. Click the text from the row.
2. Click the "Italic" toggle.

Expected result:
- The text is italic and stays readable.
- No character, accent mark or emoji is cut off at any edge.
- The text direction and the reading order of the characters are unchanged.
- The alignment and line breaks are unchanged.

## TC-7 Several texts with mixed italic
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains an italic text "Alpha" and upright texts "Beta" and "Gamma".

Steps:
1. Click "Alpha".
2. Shift+click "Beta".
3. Shift+click "Gamma".
4. Look at the "Italic" toggle.
5. Click the "Italic" toggle.
6. Click the "Italic" toggle again.

Expected result:
- After step 4, the "Italic" toggle shows as not pressed.
- After step 5, all three texts are italic and the toggle shows as pressed.
- After step 6, all three texts are upright and the toggle shows as not pressed.
- The contents and positions of the texts are unchanged.

## TC-8 "Italic" label and tooltip in another interface language
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text "Label test". The interface language is English.

| Interface language |
|---|
| Deutsch |
| العربية (right to left) |
| 日本語 |

A language with longer words, a right-to-left layout, and a non-Latin script.

Steps:
1. Open the main menu.
2. In the language list (verify), choose the language given in the row.
3. Click "Label test".
4. Hover over the "Italic" toggle.
5. Click the "Italic" toggle.

Expected result:
- The tooltip shows the "Italic" label in the chosen language, or in English where no translation exists.
- The tooltip is never empty and never shows a raw key name.
- The toggle does not overlap other controls in the panel.
- After step 5, "Label test" is italic.

## TC-9 "Italic" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #11404

Preconditions: Excalidraw is open on a touch device, or in browser device emulation, at 375 px wide. The canvas contains one upright text "Mobile note".

Steps:
1. Tap "Mobile note".
2. Open the properties panel.
3. Tap the "Italic" toggle.

Expected result:
- The "Italic" toggle is fully visible in the panel without horizontal scrolling and does not overlap other controls.
- After step 3, "Mobile note" is italic and the toggle shows as pressed.

# Text in shapes and on arrows

## TC-10 Italic text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a rectangle about 160 px wide with the upright text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines.

Steps:
1. Click the rectangle.
2. Click the "Italic" toggle.

Expected result:
- The text inside the rectangle is italic.
- The text wraps to the rectangle width; no character crosses the rectangle border.
- The rectangle grows taller if the text needs more lines; its width stays the same.
- The rectangle's stroke and fill are unchanged.

## TC-11 Italic arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains two rectangles joined by an arrow labeled "yes", upright.

Steps:
1. Click the arrow.
2. Click the "Italic" toggle.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "yes" is italic, at the middle of the arrow, fully visible.
- After step 4, the label is still italic, stays at the middle of the arrow and remains fully visible.

## TC-12 Italic sticky note label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a sticky note, created with the "Sticky note" tool, with the upright label "Review the italic rendering of long academic captions" at font size Very large, so the label just fills the note.

Steps:
1. Click the sticky note.
2. Click the "Italic" toggle.

Expected result:
- The label is italic.
- The whole label stays inside the note; no character is cut off.
- The label is shown at the same size or smaller to fit, never larger than Very large.
- The note's size and color are unchanged.

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
- The "Italic" toggle shows as pressed for "Target".
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #11404

Preconditions: The canvas contains one upright text element "Undo me" at font size Medium.

| Style change | After undo | After redo |
|---|---|---|
| Under "Font size", click "Large" | Medium | Large |
| Click the "Italic" toggle | upright, toggle not pressed | italic, toggle pressed |

The existing font size change plus the new italic property.

Steps:
1. Click "Undo me".
2. Make the style change given in the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is as in the "After undo" column after a single undo.
- After step 4, "Undo me" is as in the "After redo" column.
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

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors, and an italic text "Emphasis" in the normal font.

| Way to export |
|---|
| In "Export image...", click "PNG" and open the downloaded file |
| In "Export image...", click "Copy to clipboard" (verify) and paste into an image editor |

The download and the clipboard are the two ways a PNG leaves the product.

Steps:
1. Open the main menu and choose "Export image...".
2. Export the image the way given in the row.
3. Look at the image.

Expected result:
- Each text has the same font, size, color, slant and line breaks as on the canvas.
- "Emphasis" is italic.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: The canvas contains a text in the hand-drawn font, a text in the normal font, and an italic text "Italic note" in the hand-drawn font. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- All texts render in the same fonts as on the canvas.
- "Italic note" is italic, and no character of it is cut off.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #11404

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black upright text "Shared note".

| Style change by user A | User B sees "Shared note" |
|---|---|
| Under "Stroke", click the red color | red |
| Click the "Italic" toggle | italic |

The existing color change plus the new italic property.

Steps:
1. As user A, click "Shared note".
2. As user A, make the style change given in the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" as the table says, without reloading.

## TC-13 Older Excalidraw version opens a file with italic text
Action: create
Area: Files, sharing and export
Priority: Medium · Type: regression
Tags: #11404

Preconditions: A file "italic.excalidraw" was saved by the new version and contains a red italic text "Old reader" at font size Large in the normal font. An Excalidraw build from before italic support is open.

Steps:
1. In the older build, open the main menu and choose "Open".
2. Pick "italic.excalidraw".

Expected result:
- The file opens without an error message.
- "Old reader" is shown upright, red, at font size Large, in the normal font, at the same position.