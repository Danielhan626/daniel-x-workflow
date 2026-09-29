---
name: daniel-x-workflow
description: "Adapt text and Markdown into X posts, threads or Articles; preserve source content, prepare native underline/quote formatting, full-design previews and cinematic Article covers."
---

# Daniel X Workflow

## Scope

Help the user draft, adapt or format content for X. Infer routine details from their request; ask only when missing information materially affects correctness, account identity or authorization. Use the user's requested language and audience. Do not assume access to private documents, attachments or accounts.

For formatting-only requests, preserve the exact approved wording, punctuation, links and image order. Do not append signatures, engagement prompts or invented captions. For adaptation requests, choose one useful argument and make material omissions clear. Read [source-adaptation.md](references/source-adaptation.md) for pasted text, Markdown, Obsidian, Notion and Feishu/Lark input.

## Choose The Format

Use [post-recipes.md](references/post-recipes.md): a single post for one idea, a thread for a useful sequence, a reply/quote for a specific source post, or an Article when requested. Distinguish the user's experience, public evidence and inference. Never invent revenue, test results, customers, dates or endorsements. Check current sources for changing claims unless the user only requested faithful formatting.

## Body Formatting

Read [article-body-style.md](references/article-body-style.md). Default profile: `x-native-underline-v2`.

- Use short paragraphs, headings, lists, keyword underlines, quotations and occasional bold.
- Do not use background highlights, colored text or colored CSS underline borders in the native X export.
- Preserve the separate full-design profile, with optional colors/highlights, and the archived prior rules. Explain which output is intended for X and which is a local design preview.
- For each substantive paragraph, select 1-3 short phrases when useful, rather than highlighting entire paragraphs. Maintain text exactly when formatting only.
- The optional renderer in this repository accepts Markdown `++underlines++`, `**bold**`, `==design highlights==`, or an emphasis JSON file. See the repository README. Skill-only installations can use any available equivalent renderer; do not assume the CLI is installed with the skill folder.
- Actual editor behavior is authoritative. Do not claim an untested import is identical to the local preview.

## Visuals

Read [style-index.md](references/style-index.md) when a visual style is requested, and [x-cover-standard.md](references/x-cover-standard.md) for covers. A text-only request does not require image generation. All character references and media must be supplied with permission by the current user; no likeness assets are included in this public skill.

For `daniel_cinematic_poster` (or `cover_style: daniel_cinematic_poster`), load [the preset and production prompt](references/style-daniel-cinematic-poster.md). Apply its Daniel character rules, hook/keyword selection, topic background, conditional bottom CTA and fixed 1.91:1 canvas; then generate the image when requested. It is a cover preset, not a renderer `--profile`. Existing styles and body profiles remain available.

## Verify And Handoff

Read [article-handoff.md](references/article-handoff.md) for media. Check exact words, link destinations, image availability/order, phone readability and native clipboard payload. Keep missing media visible as placeholders and report them. Do not silently discard an underline; use the archived bold fallback only when requested or when the user's editor demonstrably requires it.

Local rendering does not publish. Report `local draft`, `saved X draft`, or `published` accurately. Publishing requires an authorized external tool, confirmation of the intended account and the user's approval of exact copy/media. Use the user's browser preference. This skill does not provide login or publish APIs. Verify a public URL and its content before reporting publication.
