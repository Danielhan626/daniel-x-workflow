# Daniel X Workflow

**简体中文** | [English](README.en.md)

把 Markdown 笔记整理成适合 X 阅读的帖子、串推和 Articles。

包含一套可安装的 AI skill，以及一个本地 Markdown 排版工具。**默认保留关键词下划线、引用和加粗，不添加背景高亮或自定义文字颜色。** 原来的完整设计版独立保留，平台规则变化时可以切换。

This repository includes an agent skill and a local Markdown-to-rich-text renderer. It does not log in to X or publish automatically.

## 安装 Skill

```bash
npx skills add Danielhan626/daniel-x-workflow --skill daniel-x-workflow
```

也可以把 `skills/daniel-x-workflow` 整个文件夹放进你的 AI 工具所支持的 skills 目录。Skill 不依赖下面的 Node.js 工具；只用技能时不需要安装 npm 依赖。

示例指令：

> 用 daniel-x-workflow 排版这篇文章。保留我的原文，使用 X 下划线版，重点用关键词下划线、引用和少量加粗。只生成本地稿，不发布。

> 把这段笔记改编成一条 X 串推，不编造我没有做过的结果。

> 用 Daniel 风暴实证风设计封面。使用我本次提供的角色参考，不使用他人的人物形象。

支持粘贴文字、Markdown、Obsidian/Notion/飞书导出内容。私有链接和缺失的附件仍需要用户提供，安装技能不会自动获得这些平台的账号权限。

## X 长文电影海报封面

新增固定风格 **`daniel_cinematic_poster`**；原有封面风格继续可用。

最简调用（把正文接在后面）：

> 用 $daniel-x-workflow，以 daniel_cinematic_poster 风格为这篇 X 长文生成封面：〔正文〕

也可在 brief 中写 `cover_style: daniel_cinematic_poster`。适合 AI赚钱、出海生意、创业故事、产品发布、直播招募、强观点及冲突内容。它先提炼利益/冲突/数字，再选择红色视觉爆点，使用 Daniel 角色、电影毛笔标题、黑灰冷白与克制红蓝；默认 1.91:1、1600×838，底部 CTA 按文章语义生成。

- [完整 preset 与可复用生产 prompt](skills/daniel-x-workflow/references/style-daniel-cinematic-poster.md)
- [示例输入、预期输出与填好的 prompt](skills/daniel-x-workflow/references/examples/daniel-cinematic-poster.md)（合成示例，未生成图片）

角色卡优先用本次提供的已授权图片；个人安装可使用已有角色卡。公开仓库不含人物照片。真实人物一致性需要角色卡；实际成图需要当前环境的图像生成工具。本 preset 通过 AI skill 调用，不是下面正文排版工具的 `--profile`，该工具不会生成封面。封面配色不改变正文的原生 X 格式。

## 本地排版工具

需要 Node.js 20 或更高版本。

```bash
git clone https://github.com/Danielhan626/daniel-x-workflow.git
cd daniel-x-workflow
npm ci
npm test
npm run build:example
```

在浏览器打开 `dist/example/index.html`。这是静态文件，不需要启动服务器。

处理自己的文章：

```bash
node bin/render.mjs article.md --out dist/my-article
node bin/render.mjs article.md --out dist/with-emphasis --emphasis examples/emphasis.json
```

输出目录必须是新目录，避免覆盖原稿。工具不修改输入文件。

## 三种规则

| Profile | 用途 | 关键词 | 高亮/变色 |
| --- | --- | --- | --- |
| `x-native-underline-v2` | 默认 X 稿 | 原生下划线 | 不使用 |
| `x-native-bold-v1` | 保留的旧兼容规则 | 加粗代替下划线 | 不使用 |
| `design-full-v1` | 本地完整设计稿 | 红线标记 | 保留 |

```bash
node bin/render.mjs article.md --out dist/legacy --profile x-native-bold-v1
node bin/render.mjs article.md --out dist/design --profile design-full-v1
```

规则保存在 `profiles/formatting.json`。技能的旧正文规则保存在 `skills/daniel-x-workflow/references/article-body-style-v1-preserved.md`，不要覆盖旧版本，增加新 profile 即可。

## 标记重点

```markdown
++关键词下划线++
**重要判断加粗**
==完整设计版中的背景高亮，X 版转为加粗==

> 用引用呈现流程或结论。
```

也可以用 JSON 指定 `underlines`、`anchors`、`highlights` 三组短语。每个短语标记首个合适的位置，不改写内容；未匹配项会在命令行提示。不要给整段都加重点。

## 复制与图片

- 「复制 X 正文」始终复制原生格式，不随当前预览模式变化。关键词使用 `<u>`，引用使用 `<blockquote>`。
- 「复制设计富文本」包含内联样式，适合支持这些样式的编辑器，不保证能在 X 或公众号原样保留。
- 本地图片仅从输入文件所在目录及子目录读取，拒绝越界路径、目录外软链接和 SVG。支持 PNG/JPEG/WebP/GIF；按顺序生成 `media.json`，缺图保留位置。
- 富文本复制把图片替换成编号提示，需要在目标平台单独上传。远程图片只保留链接，打开预览时浏览器可能向该图片主机发请求。
- 输出另有 `body-x.html` 和不变的 `source.md`。不要把包含私人文章的 `dist/` 提交到仓库。

## 平台边界

下划线支持来自维护者的编辑器使用反馈，不代表所有账号或未来版本都相同。发布前在自己的 X 编辑器里检查标题、下划线、引用、图片顺序与裁切；如不支持下划线，可以切换旧加粗 profile。参见 [X 官方 Articles 说明](https://help.x.com/en/using-x/articles)。

本工具不提供登录、付费订阅开通、自动发布或曝光保证。表格、代码块等在本地预览中可读，但 X 是否保留仍需检查。本地设计预览不等于真实发布效果。

## 隐私与来源

仓库不包含维护者的私人角色卡、照片、未发表文章、聊天记录、浏览器数据、密钥或本机绝对路径。人物风格包含本次明确要求的 Daniel 文字外观规则，使用者自行提供有权使用的角色参考素材；不分发私人角色卡图片。

公众号风格的灵感与可选上游依赖见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。没有捆绑第三方组件源码、字体或图片。

代码和本仓库原创文档采用 [MIT License](LICENSE)。贡献前请运行 `npm test`，不要提交私人输出或凭据。
