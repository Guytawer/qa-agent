# Text properties

- The "Font family" control shows three quick choices, Hand-drawn (Excalifont), Normal (Nunito) and Code (Comic Shanns), plus a list with more fonts. (source: excalidraw source at commit 4c00f31 (2026-10-08): components/FontPicker/FontPicker.tsx lines 44-58 and FontPickerList.tsx; accepted 2026-10-10 by maxxx)
- Font size presets are Small, Medium, Large and Very large. (source: excalidraw source at commit 4c00f31 (2026-10-08): actions/actionProperties.tsx lines 1028-1048, locales/en.json labels.veryLarge = "Very large"; accepted 2026-10-10 by maxxx)
- Text align offers left, center and right. (source: excalidraw source at commit 4c00f31 (2026-10-08): locales/en.json labels.left, labels.center, labels.right; accepted 2026-10-10 by maxxx)
- New text uses the last chosen text style, such as font family and size. (source: excalidraw source at commit 4c00f31 (2026-10-08): components/App.tsx lines 10354-10355 use currentItemFontSize and currentItemFontFamily for new text; accepted 2026-10-10 by maxxx)
- A style change applies to every selected text element at once. (source: excalidraw source at commit 4c00f31 (2026-10-08): actions/actionProperties.tsx changeProperty applies to all selected elements; accepted 2026-10-10 by maxxx)
