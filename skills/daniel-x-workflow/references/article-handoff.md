# X Article Draft And Publication Handoff

Use this for X Articles, especially when a Markdown source contains images, videos, GIFs, tables, or dividers. The active X editor determines which features and uploads are available. Keep the user's chosen browser session and use `baoyu-post-to-x` for its supported rich-text and image workflow.

## Prepare

- Decide the Article title and cover from the user's instructions or source context. Apply [X cover standard](x-cover-standard.md) to the header and shared preview before approval; do not automatically make the first body image the cover.
- Build an ordered body-media list: source section or nearby anchor text, media type, file path, caption, and expected sequence. Resolve missing files before describing the draft as complete.
- Convert Markdown formatting to rich text using the publishing tool's supported path. Inspect tables, diagrams, and code blocks before conversion; use an image or adapted text only when the editor cannot represent them usefully.
- For a large GIF or unstable video upload, create an upload-friendly copy while retaining the original asset and its position. Do not silently drop animation, crop screenshots, merge unrelated images, or change the meaning to fit an assumed media budget.

## Assemble In X

1. Confirm the active account and Article editor access. If continuing a run, open the existing draft instead of creating a duplicate.
2. Put title, cover, and formatted body in place. Insert body media at their recorded anchors; videos use the editor's file-upload control. Add dividers through the editor when pasted HTML does not preserve them.
3. After each media upload, verify it appears at the intended location. A file picker closing is not proof. If the editor silently ignores an item, leaves an error block, or shifts a nearby image/video sequence, repair only the affected block or cluster.
4. If the browser session fails mid-article, reopen the same draft and continue from the missing media. Do not paste the whole body into an existing draft a second time.

## Final Audit

Preview the Article and compare it with the source working copy: title, cover, headings, links, text omissions, body-media count, and media sequence around each anchor. Pay special attention to adjacent image/video groups; a correct total count can still hide swapped positions. Confirm failed-upload placeholders are gone.

Report one of three states precisely: `local draft` (content prepared off-platform), `saved X draft` (visible in the editor and previewed), or `published` (public Article URL and content verified). A user request for a draft ends at the draft state. A publication request follows the main skill's authorization and public-verification rules.
