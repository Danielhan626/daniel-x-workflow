# Source Adaptation For X

Use this when the user supplies an existing article, pasted Markdown, an accessible document link, or an exported file. Work from a copy; never rewrite the user's source merely to fit X.

## Normalize The Source

1. Extract the title, heading order, paragraphs, quotes, links, tables, and media in source order. Keep evidence and attribution attached to the claim they support.
2. Identify the one argument or reader task worth carrying into X. Adapt it to the requested format rather than compressing every section into a smaller font or a longer thread.
3. For media-bearing articles, record each asset's type, source position, local path or accessible URL, caption/alt text, and whether the file is actually available. A pasted image marker is not an uploaded image.
4. Keep a normalized working Markdown copy for an X Article when useful. If the user only wants a single post or thread, draft directly from the extracted ideas. Preserve the original source and note material omissions.

## Input Routes

- **Pasted text or Markdown:** use the text immediately. If pasted content references images, videos, files, or private links, mark those as missing until the user supplies the assets or an accessible export. Do not block text-only adaptation.
- **Local `.md` / `.markdown`:** resolve relative media paths against the document directory. Check files exist before promising a media-rich X draft.
- **Obsidian:** accept pasted Markdown or a vault file. Resolve `![[embedded file]]` and `[[internal note]]` against the relevant vault when access is available. Keep private note links out of public copy; replace them with public sources or plain descriptions when appropriate.
- **Notion:** accept pasted content, Markdown export, or a link accessible in the user's session. Preserve headings, lists, callout text, and exported attachment paths. Check whether a page export omitted files or database content before calling the copy complete.
- **Feishu/Lark:** accept pasted content, an exported Markdown file, or a link accessible with the user's authorization. Strip visual callout labels only when they are not part of the meaning; preserve the quoted text. Verify embedded videos and other file blocks separately because a text export may omit them.

If a private link cannot be opened with available authorized tools, continue from pasted text or an export and ask only for the missing material needed for the requested result. Never request account secrets in chat or claim access to attachments from the URL alone.

## X Adaptation

For a single post, select one conclusion and its strongest proof. For a thread, split by reasoning step or useful takeaway, not by arbitrary paragraph length. For an X Article, retain the necessary argument structure and a deliberate title, cover, and media order. Omit source-platform sign-offs and calls to action unless they still suit X.
