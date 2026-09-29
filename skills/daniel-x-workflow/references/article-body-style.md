# Styled Article Bodies

## Active Profile And Preserved Rules

Default X body profile: `x-native-underline-v2` (2026-09-28). Daniel reports that his editor supports keyword underlines and quotations but not background highlighting. Honor this user-confirmed capability for his workflow; it is not a claim of universal support across all X accounts. Keep the complete design profile `design-full-v1` available independently. The previous rules, including the old bold-only X fallback, are preserved unchanged in [article-body-style-v1-preserved.md](article-body-style-v1-preserved.md). Do not overwrite that snapshot when platform capabilities change; add a dated profile and update this active selection.

## Two Explicit Outputs

A styled local article is not an X editor preview. Keep two clearly named editions of the same text:

- Design edition: preserve the chosen theme's semantic emphasis, keyword underlines, colored anchors and quotation treatment. For a gzh-derived theme, read its canonical component library and common-components; use its actual rules rather than inventing generic CSS. For Daniel Storm-Proof, use the mapping in its style reference.
- Native X edition (default): headings, short paragraphs, keyword underlines, bold emphasis, quotations, lists, links and ordered media. Export keyword underlines as semantic `<u>` elements, not colored CSS borders and not automatically as bold. Convert colored anchors/background highlights to semantic bold without dropping text. Keep quotations as `<blockquote>`. No background highlights, custom text colors or colored underlines; use the native text color. Strip custom CSS, classes, theme containers and decorative labels from the clipboard payload. Treat this as a local export until the actual editor has been checked.

X's official Articles documentation lists native heading, bold, italic, strikethrough and list formatting, but does not promise custom text/background colors or arbitrary HTML/CSS: https://help.x.com/en/using-x/articles . Recheck current documentation/editor when assessing live platform support. Do not promise color fidelity without direct editor verification. Images can preserve a visual treatment, but do not rasterize the whole article without the user's request.

## Emphasis Pass

For this public package, the standalone renderer supplies its own minimal black/white/red design grammar. Exact gzh theme components are an optional external dependency, not bundled. See `style-index.md`; do not require private likeness files or unshipped assets.

- Preserve user-approved words, punctuation, links and image order. Formatting-only requests do not authorize rewrites, new sign-offs, invented captions or CTA text.
- On each substantive paragraph/list item, select 1-3 short meaningful phrases; skip filler/sign-off paragraphs. Use the theme's canonical underline as the default marker, not whole-paragraph color.
- In the full design edition, reserve strongest color/background emphasis for at most five anchors. In the X edition, use underlines and occasional bold instead, with unfilled quotation blocks. Use original bold where present; do not turn the entire article bold.
- Apply a distinct quotation component to a core workflow or conclusion. Keep multi-line emphasis legible when it wraps on a narrow phone.

## Clipboard And Checks

- A design-copy action must inline the relevant computed styles; cloning innerHTML from a class-styled page loses presentation. Name it distinctly from native X copy. Do not label it WeChat-compatible unless a dedicated gzh export passes that skill's validation.
- Native copy must use the semantic edition regardless of the displayed mode. Replace unavailable local body images with ordered insertion markers and retain the original media downloads.
- Verify both editions have exactly the same text as source and the same link/image order. Check native export contains keyword `<u>`, `<strong>` anchors and `<blockquote>` quotations, but no background/color CSS or theme classes. The design edition must retain its original full effects and separate copy action.
- Inspect desktop, narrow-phone, light/dark layouts and clipboard payloads. Report local design, conservative X export and actual editor verification as separate states.
