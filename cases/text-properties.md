# Text properties

Product area: Editor > Text properties panel

## C-001 Font family: changing the font of a text element
Priority: High · Type: functional

Preconditions: The canvas contains one text element "Flowchart step" in the hand-drawn font.

Steps:
1. Click "Flowchart step".
2. In the properties panel, under "Font family", click the "Normal" font.

Expected result:
- The text renders in the normal sans-serif font.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.

## C-002 Font size: switching between preset sizes
Priority: Medium · Type: functional

Preconditions: The canvas contains one text element "Size test" at font size Medium.

Steps:
1. Click "Size test".
2. Under "Font size", click "Extra large".
3. Under "Font size", click "Small".

Expected result:
- After step 2, the text is larger and the selection box grows with it.
- After step 3, the text is smaller than at Medium.
- The text content and font family are unchanged after each step.

## C-003 Text align: left, center and right
Priority: Medium · Type: functional

Preconditions: The canvas contains one two-line text element "Short / A much longer second line", left-aligned.

Steps:
1. Click the text element.
2. Under "Text align", click the alignment from the table.

| Alignment | Line edge that lines up |
|---|---|
| Center | centers of both lines |
| Right | right edges of both lines |
| Left | left edges of both lines |

Expected result:
- Both lines line up as the table says.
- The line order and line breaks are unchanged.

## C-004 Text color: changing the stroke color of text
Priority: Medium · Type: functional

Preconditions: The canvas contains one black text element "Colored note".

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.

Expected result:
- The text renders in red.
- The font family, size and alignment are unchanged.

## C-005 Several text elements: one style change applies to all
Priority: Medium · Type: functional

Preconditions: The canvas contains text elements "Input", "Process" and "Output", all at font size Medium.

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Under "Font size", click "Large".

Expected result:
- All three texts are at font size Large.
- Their contents and positions are unchanged.

## C-006 New text uses the last chosen text style
Priority: Medium · Type: functional

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font.

Steps:
1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. Press Esc.
5. Press T to choose the text tool.
6. Click an empty area of the canvas.
7. Type "Second".
8. Press Esc.

Expected result:
- "Second" is created at font size Large in the normal font.
- "First" keeps font size Large in the normal font.
