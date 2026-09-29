# Daniel X Workflow

[简体中文](README.md) | **English**

Turn Markdown notes into readable X posts, threads and Articles.

This project includes an installable AI skill and a local Markdown-to-rich-text renderer. **The default X profile preserves keyword underlines, quotations and bold text, without background highlights or custom text colors.** A separate full-design profile retains those visual effects, and the earlier bold-only profile remains available as a fallback.

The renderer does not sign in to X, generate images, or publish automatically.

## Install The Skill

```bash
npx skills add Danielhan626/daniel-x-workflow --skill daniel-x-workflow
```

Alternatively, copy the entire `skills/daniel-x-workflow` folder into a skills directory supported by your AI tool. Installing only the skill does not require Node.js or the npm dependencies below.

Example requests:

> Use daniel-x-workflow to format this article. Preserve my wording, use the native X underline profile, and emphasize key phrases with underlines, quotations and occasional bold. Prepare a local draft only; do not publish.

> Adapt these notes into an X thread. Do not invent results or experiences I have not provided.

> Design a cover in Daniel's Storm-Proof style using the authorized character reference I provide with this request.

Inputs can include pasted text, Markdown, or exports from Obsidian, Notion and Feishu/Lark. Private links and missing attachments still require access or files supplied by the user. Installing the skill does not grant account access to these services.

## Cinematic Article Covers

The **`daniel_cinematic_poster`** preset is available alongside all previous cover styles.

> Use $daniel-x-workflow with cover_style: daniel_cinematic_poster to generate an X Article cover for the following article: [article text].

The preset is intended for AI business experiments, international business, founder stories, product launches, live-event invitations, strong opinions and genuine conflicts. It extracts a source-grounded benefit, tension or number, then builds a cinematic brush-title composition with a character reference, a black/gray/cool-white base and restrained red/blue accents. Its default design canvas is 1.91:1 at 1600 x 838 pixels. A bottom call to action appears only when supported by the source.

- [Complete preset and reusable production prompt](skills/daniel-x-workflow/references/style-daniel-cinematic-poster.md) (Chinese, with an English prompt template)
- [Synthetic input, expected output and filled prompt](skills/daniel-x-workflow/references/examples/daniel-cinematic-poster.md) (Chinese; no image has been generated for this example)

Provide an authorized character reference for consistent likeness. Private character images are not distributed. Image generation requires an available image tool in your AI environment. This is a **skill cover preset**, not a renderer `--profile`; the local renderer below formats article bodies only. Cover styling does not change native X body formatting.

## Run The Local Renderer

Requires Node.js 20 or later.

```bash
git clone https://github.com/Danielhan626/daniel-x-workflow.git
cd daniel-x-workflow
npm ci
npm test
npm run build:example
```

Open `dist/example/index.html` in your browser. It is a static file; no development server is required. The preview's controls are currently labeled in Chinese.

To format your own article:

```bash
node bin/render.mjs article.md --out dist/my-article
node bin/render.mjs article.md --out dist/with-emphasis --emphasis examples/emphasis.json
```

Choose a new output directory for each run. Existing output directories are rejected to avoid overwriting work. The input file is not modified.

## Three Formatting Profiles

| Profile | Purpose | Keywords | Highlighting / custom colors |
| --- | --- | --- | --- |
| `x-native-underline-v2` | Default X draft | Semantic underlines | Disabled |
| `x-native-bold-v1` | Preserved compatibility fallback | Bold instead of underlines | Disabled |
| `design-full-v1` | Local full-design preview | Red keyword rules | Preserved |

```bash
node bin/render.mjs article.md --out dist/legacy --profile x-native-bold-v1
node bin/render.mjs article.md --out dist/design --profile design-full-v1
```

Profiles are stored in `profiles/formatting.json`. The previous skill rules are archived in `skills/daniel-x-workflow/references/article-body-style-v1-preserved.md`. Add a new profile when capabilities change rather than overwriting the old rules.

## Mark Important Phrases

```markdown
++Underlined keyword++
**Important judgment**
==Highlighted in the full-design edition; bold in the X edition==

> Use a quotation for a workflow or conclusion.
```

An optional JSON file can specify arrays named `underlines`, `anchors` and `highlights`. The renderer marks the first eligible occurrence of each phrase without rewriting it. Unmatched phrases are reported in the terminal. Avoid emphasizing whole paragraphs.

## Copy And Media

- **复制 X 正文** means **Copy X body**. It always copies the native profile, regardless of the visible preview mode. Keywords use `<u>` and quotations use `<blockquote>` in the default profile.
- **复制设计富文本** means **Copy design rich text**. It includes inline styles for editors that support them. Neither X nor WeChat is guaranteed to preserve those styles exactly.
- Local images are read only from the input file's directory and its descendants. Out-of-directory paths, escaping symlinks and SVG files are rejected. Supported local image types are PNG, JPEG, WebP and GIF.
- `media.json` records image order and availability. Missing images retain visible placeholders. Clipboard exports use numbered insertion markers; upload the actual images separately in the destination editor.
- Remote image links are retained rather than downloaded. Opening a preview may send browser requests to those image hosts.
- Output also includes `body-x.html` and an unchanged `source.md`. Do not commit private articles or generated `dist/` contents to a public repository.

## Platform Boundaries

Underline support is based on the maintainer's editor experience, not a universal guarantee for every account or future version. Before publishing, inspect headings, underlines, quotations, image order and cover crops in your own X editor. Use the preserved bold-only profile when underlines are not supported. See [X's official Articles documentation](https://help.x.com/en/using-x/articles).

This project does not provide authentication, paid-subscription activation, automatic publishing or exposure guarantees. Tables and code blocks can be previewed locally, but their behavior after X import must be checked separately. A local design preview is not proof of a published result.

## Privacy, Attribution And License

The repository excludes private character-card images, photographs, unpublished articles, chat history, browser data, credentials and machine-specific absolute paths. The cinematic preset contains Daniel's textual appearance specification; users must supply visual references they are authorized to use. Private reference images are not bundled.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for visual inspiration and optional upstream tools. Third-party component source, fonts and images are not bundled.

The code and original documentation in this repository are licensed under the [MIT License](LICENSE). Run `npm test` before contributing, and keep credentials and private outputs out of commits.
