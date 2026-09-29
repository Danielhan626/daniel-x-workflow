# Styled Article Bodies

## Two Explicit Outputs

A styled local article is not an X editor preview. Keep two clearly named editions of the same text:

- Design edition: preserve the chosen theme's semantic emphasis, keyword underlines, colored anchors and quotation treatment. For a gzh-derived theme, read its canonical component library and common-components; use its actual rules rather than inventing generic CSS. For Daniel Storm-Proof, use the mapping in its style reference.
- Native X edition: headings, short paragraphs, bold emphasis, quotations, lists, links and ordered media. Convert selected highlighted/underlined keywords to semantic bold without dropping text. Strip custom CSS, classes, theme containers and decorative labels from the clipboard payload. Treat this as a conservative export, not a verified live-editor rendering.

X's official Articles documentation lists native heading, bold, italic, strikethrough and list formatting, but does not promise custom text/background colors or arbitrary HTML/CSS: https://help.x.com/en/using-x/articles . Recheck current documentation/editor when assessing live platform support. Do not promise color fidelity without direct editor verification. Images can preserve a visual treatment, but do not rasterize the whole article without the user's request.

## Emphasis Pass

- Preserve user-approved words, punctuation, links and image order. Formatting-only requests do not authorize rewrites, new sign-offs, invented captions or CTA text.
- On each substantive paragraph/list item, select 1-3 short meaningful phrases; skip filler/sign-off paragraphs. Use the theme's canonical underline as the default marker, not whole-paragraph color.
- Reserve strongest color/background emphasis for at most five anchors. Use original bold where present; do not turn the entire article bold.
- Apply a distinct quotation component to a core workflow or conclusion. Keep multi-line emphasis legible when it wraps on a narrow phone.

## Clipboard And Checks

- A design-copy action must inline the relevant computed styles; cloning innerHTML from a class-styled page loses presentation. Name it distinctly from native X copy. Do not label it WeChat-compatible unless a dedicated gzh export passes that skill's validation.
- Native copy must use the semantic edition regardless of the displayed mode. Replace unavailable local body images with ordered insertion markers and retain the original media downloads.
- Verify both editions have exactly the same text as source and the same link/image order. Check emphasis exists, native export retains it as bold, and no custom CSS leaks into native copy.
- Inspect desktop, narrow-phone, light/dark layouts and clipboard payloads. Report local design, conservative X export and actual editor verification as separate states.
