# daniel_cinematic_poster | Daniel 电影海报封面

固定 preset ID：`daniel_cinematic_poster`。这是 `daniel-x-workflow` 内可点名调用的封面 preset，不是正文排版 profile，也不是独立 CLI 参数。保留所有原有风格；仅在选中本 preset 时应用以下规则。

适合 X 长文封面：AI赚钱、出海生意、创业故事、产品发布、直播招募、强观点、争议/冲突型内容。电影张力来自文章的利益点或真实冲突，不从虚构收入、事件或对手中制造。

## 调用与执行

最简调用：`用 $daniel-x-workflow，封面风格 daniel_cinematic_poster，为下面这篇 X 长文生成封面：〔正文〕`。

接受自然语言点名或 brief 字段 `cover_style: daniel_cinematic_poster`。输入为文章/标题/摘要，加可选的 `character_reference`（已授权角色卡）、`cta`（已确认活动信息）、`language`。以文章语言为默认文字语言，明确指定时遵从指定。示例见 [输入与输出](examples/daniel-cinematic-poster.md)。

选中后，读取本文并完成「提炼 → 构图 → 填充生产 prompt → 生成 → 检查」。用户要求生成封面时调用当前可用的图像生成工具，交付实际图片；不能把 prompt 当成已生成图片。仅要求设计或 prompt 时交付相应产物。无可用生成工具时保存完整 prompt 并明确图片尚未生成。生成前先解析以下决策，不必为常规选择额外追问。

## Daniel 角色锁定

人物优先使用 Daniel 本人角色卡；每次生成都把可用角色卡作为图像参考传入。优先使用本次提供的 `character_reference`；个人安装中若存在 `assets/daniel-character-reference.png`，可使用该已授权角色卡。公开安装不捆绑私人照片；找不到图像参考时可先完成标题与构图，但需要用户提供角色卡才能交付“本人形象一致”的成图，不用陌生男模冒充 Daniel。

- 东亚中国男性；短黑色纹理侧分发型；精壮男性身材。
- 黑色高级穿搭，AI创业者 / 独立创作者气质。
- 左臂黑灰写实花臂，颈部和平鸽纹身；以角色卡的脸型、纹身位置和实际细节为准。不镜像到右臂，不新增纹身。
- 人物朝画面内或标题方向。优先半身、左臂适度可见、领口露出颈部纹身的构图；不要为显示纹身扭曲姿势。衣物遮挡的纹身不画在衣服表面。
- 角色设定用于视觉一致性，不自动成为文章中的个人履历或商业成绩。

## 标题与视觉爆点

先从文章提取：读者、最大利益点、真实冲突、可用数字及其单位/期限/限定词。主标题重新提炼，不照搬整条文章标题或正文；中文通常 6–12 字，最多两行。

从「数字/钱 → 明确结果/利益 → 冲突词」中找候选，但必须先满足事实准确、切中文章中心、缩小后可读。选最能说明读者为何点开的一个词或短语作为 `hero_keyword`，不是机械选择最大的数字。无相关数字时用利益/冲突，不补造金额。

- 主标题为第一视觉；其中的数字/利益/冲突词为第二层爆点，放大、变红、靠近画面中心。它属于同一标题系统，不另造一个竞争的巨型徽章。
- 目标、问题、预测与实际结果必须保持区别。例如“目标首个$100”不能变成“已赚$100”；金额保留货币单位，统计数字保留关键时间范围。限定词放不下就换一个 hook。
- 英文副标题可选，一行短句，解释主题而不重复大标题；没有增益就省略。普通说明至多一行，细节放正文。

## 画布与版式

- X Article 默认且固定使用 **1.91:1**，推荐 **1600×838 px**（取整后的同类比例可用）。这是本工作流的设计 preset，不声称是 X 官方唯一尺寸。生成工具若无此比例，先留足裁切空间，再导出目标比例并核对实际像素。
- 中央安全区起点：横向 15%–85%、纵向 15%–85%；1600×838 对应约 x=240–1360、y=126–712。脸、完整标题、核心数字和 CTA 文字留在其中；身体与环境可向外延伸。实际 X 预览仍须验证，安全区不是平台裁切保证。
- Daniel 人物约占画面 **35%–50%**，通常放左侧或偏左；脸在左侧安全区内。大标题居中或略偏中右，字号与对比必须压过人物，避免文字挡脸。
- 视觉顺序：大标题 → 数字/利益爆点 → Daniel 人物/主题线索 → 底部 CTA。用同一场景完成，不拼成多张卡片。
- CTA 放在画面下部的安全区内，可从高度约 72%–84% 区间安排；底部留裁切余量。它是海报的短行动行，不是贴边大色块或课程信息表。

## 字体与颜色

- 中文主标题：电影毛笔爆裂字 / 粗书法 / 飞白 / 刷痕；白字和红字用相同笔触语言，字形必须准确可读。为实际标题新做字形，不复用写着别的词的旧字标。
- 英文副标题：Bodoni / Didot 一类高对比衬线感；使用可用且有许可的字体或同类替代，不假装已安装字体。
- 普通信息、日期、价格、CTA：现代黑体。三种是固定角色，不叠加更多字体；没有英文副标题时只用两种。爆点数字沿用标题的粗重表现，清晰保留单位。
- 基底：黑 `#0B0D10`、深灰 `#252A31`、冷白 `#F2F5F7`。
- 红 `#D9363E`：钱、数字、结果、冲突词及 CTA；只让一个主要爆点获得最强红色，CTA 的红色面积更小。
- 蓝 `#365B78`：AI、流程、科技、全球感，低饱和地藏在环境和轮廓光里。红为主强调、蓝为辅助；无科技/全球语义时可不用蓝。
- 不用彩虹色、廉价霓虹或全画面蓝色滤镜。保留自然肤色、电影明暗与空间纵深。

## 背景按主题推理

先判断文章主要矛盾或收益机制，再选 **1 个主场景＋最多 2 个辅助线索**。下表是候选池，不是全部上画面的清单；背景必须低对比，服务标题和主题。

| 主题 | 可选场景与线索 |
| --- | --- |
| AI内容赚钱 | 全球地图、美元元素、相关平台/内容界面、收入图；文章没有收入实证时不用带数字的收入截图或增长曲线冒充业绩 |
| X Articles | Markdown 文稿到富文本/Article 编辑界面的视觉转换；界面仅保留可识别轮廓，不塞满可读正文 |
| 商业冲突 | 文章相关的文件、法律、资本、评论、新闻；无真实素材时使用明确的编辑插画，不伪造法院文书、新闻标题或具名指控 |
| 出海生意 | 世界地图、跨境路线或目标市场工作场景；选择与业务实际机制相关的线索 |
| 创业故事 / 产品发布 | 产品或原型、独立工作室、与关键转折相关的物件；真实产品外观优先用提供的参考 |
| 直播招募 / 强观点 | 主讲场景或能表达核心判断的一处冲突关系；直播信息交给底部 CTA，不铺课程大纲 |

混合主题只选一个主场景，按标题所强调的收益或冲突取舍。真实平台标识只有在主题必需、来源可用时才使用；不随机堆 logo，不编造平台背书。

## 底部 CTA 自动模块

扫描文章与 brief：直播、课程、产品、报名、门票、咨询、发售，以及 live、webinar、course、product、register、ticket、consultation、launch 等语义。

命中后自动组织一条底部行动区，优先采用输入的明确 CTA：

`类型标签 / 时间与时区（若已给） / 极短说明（可选） / 票价与币种（若已给） / 一个行动按钮`

- 直播用 `LIVE`；发布用 `LAUNCH`；课程、门票、咨询按实际场景选择简短标签和“报名 / 获取门票 / 查看产品 / 预约咨询”等按钮。成图中的按钮是视觉引导，不是真正可点击的控件。
- 不把各字段都当必填；缺少日期、时间、时区、价格、名额、入口时省略对应字段，或在生产记录中标为缺失，绝不猜测，不把占位符画进最终封面。信息过多时只留标签＋一个关键事实＋按钮；其余放正文。
- 区分真实招募/发售和文章只是讨论某个产品、批评课程或复盘往期直播。后者仍可用底部“阅读分析 / 查看复盘”行动区，但不能误写成正在报名或销售。已取消/售罄/结束的信息不得转成可购买承诺。
- 未命中且无明确 CTA 时省略底部行动区，保留电影留白。

## 可复用生产 prompt

先把下列字段填成具体值；没有的可选字段整行删除，不把花括号原样交给生成工具。`source_basis` 和 `missing_facts` 是内部记录，不印在封面。将角色卡作为图像附件，不能只在文字里提一下文件名。

```text
Create an X Article cinematic movie-poster cover using preset daniel_cinematic_poster.
Final canvas: 1600x838, approximately 1.91:1. All essential text and face in the
central 70% width and 70% height. Keep edges expendable.
Character: match the attached Daniel reference, East Asian Chinese male,
short black textured side-part hair, lean muscular build, premium black clothing,
black-and-gray realistic tattoo sleeve on HIS LEFT arm, dove tattoo on neck,
AI entrepreneur / independent creator presence. Preserve face and tattoo identity.
Composition: Daniel on the left, 35-50% of frame; headline dominates center or
slightly right of center, face unobscured. Headline first, keyword second.
Topic-specific cinematic setting: {background_scene}; subordinate cues: {background_cues}.
Exact headline in {language}: {headline}. Oversized red emphasis near center: {hero_keyword}.
For Chinese title glyphs use movie-poster brush calligraphy, flying-white strokes and torn brush
edges without losing legibility. Keep the headline one coherent visual unit.
Optional exact English subtitle: {subtitle}, high-contrast Bodoni/Didot-like serif.
Ordinary information: modern sans serif. Black/dark gray/cool white base;
red for the focal payoff/conflict and restrained CTA, muted blue only for AI,
process, technology or global atmosphere. Natural skin, cinematic depth and light.
Bottom action zone within the safe area: {cta_exact_text}; one visual button: {cta_button}.
No CTA if omitted. Do not add unprovided text, dates, prices, revenue or badges.
No PPT, infographic, course flyer, dense tiny type, pasted article body,
random logo collage, rainbow colors, cheap neon, excessive cyberpunk,
fake evidence, unrequested tattoos, mirrored sleeve or illegible glyphs.
```

## 生产与验收

1. 保存简短决策记录：`cover_style`、`headline`、`hero_keyword`、`source_basis`、`background_scene`、`cta`（或 null）、`missing_facts`、角色卡来源和完整 prompt。
2. 使用当前可用图像工具完成图像。需要分层时，先做无字场景，再做精确标题字形，组合成封面；日期、票价和按钮文字保持可校对。使用生成/编辑工具时遵循其实际能力与规则。
3. 检查 1600×838 或等比例导出、35%–50% 人物比例、脸型发型、左臂与颈纹身、中文字形、金额单位、CTA 事实。不得以丢失关键限定词换取醒目。
4. 按 [X 封面通用标准](x-cover-standard.md) 检查手机宽度、中央裁切、明暗背景；有 X 编辑器访问时检查实际 header 和 feed 预览。未做的检查必须记为未验证，不能用尺寸正确代替实际裁切验收。
5. 交付图片、短 alt text 和必要的检查状态。示例 prompt/构图记录不是视觉质量验收；只有真实导出经过检查才能标为成图完成。
