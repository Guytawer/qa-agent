# Text in shapes and on arrows

Product area: Editor > Bound text

## C-007 Text inside a rectangle wraps to the shape width
Priority: High · Type: functional

Preconditions: The canvas contains a rectangle about 160 px wide with no text.

Steps:
1. Double-click the rectangle.
2. Type "Check whether the uploaded file exceeds the size limit".
3. Press Esc.

Expected result:
- The text wraps onto several lines inside the rectangle.
- No character crosses the rectangle border.
- The rectangle grows taller if the text needs more lines; its width stays the same.

## C-008 Text inside a shape moves with the shape
Priority: Medium · Type: functional

Preconditions: The canvas contains a rectangle with the text "Validate input" inside it.

Steps:
1. Click the rectangle.
2. Drag it 200 px to the right.

Expected result:
- "Validate input" moves together with the rectangle and stays centered in it.

## C-009 Style change on a shape applies to its text
Priority: Medium · Type: functional

Preconditions: The canvas contains a rectangle with the text "Start" inside it, at font size Medium.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Large".

Expected result:
- "Start" renders at font size Large and still fits inside the rectangle.
- The rectangle's stroke and fill are unchanged.

## C-010 Arrow label stays on the arrow when the arrow moves
Priority: Medium · Type: functional

Preconditions: The canvas contains two rectangles joined by an arrow labeled "yes".

Steps:
1. Click one of the rectangles.
2. Drag it 150 px down.

Expected result:
- The arrow bends or moves to stay connected.
- The label "yes" stays at the middle of the arrow and remains fully visible.
