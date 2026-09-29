# daniel_cinematic_poster 输入 / 输出示例

这是合成的 workflow 测试文案和预期设计输出，不代表 Daniel 的收入、已发布产品或真实活动。示例未生成图片。

## 输入

```text
用 $daniel-x-workflow，cover_style: daniel_cinematic_poster。
为以下中文 X 长文生成封面，使用我提供的 Daniel 角色卡。

标题：从 Markdown 到 X Articles：我准备公开演示的三个发布步骤
正文：这是一场直播招募，演示如何把 Markdown 草稿变成富文本，
再放进 X Article 编辑器。内容包含整理标题、保留重点和检查封面三个步骤。
这场演示讲发布流程，不承诺流量、客户或收入。报名入口放在正文末尾。
CTA：LIVE；2026-10-08 20:00 America/New_York；免费；立即报名。
```

## 预期决策输出

```yaml
cover_style: daniel_cinematic_poster
canvas: [1600, 838]
headline: "3步发布长文"
hero_keyword: "3步"
source_basis: "正文明确列出三个发布步骤；不提炼收入承诺"
subtitle: "FROM DRAFT TO ARTICLE"
character_reference: "使用输入所附 Daniel 角色卡，不另造身份"
character: "左侧约40%；黑色高级穿搭；面部与左臂花臂、颈部和平鸽保持一致"
background_scene: "深灰工作室里，Markdown 文稿向 Article 编辑界面过渡"
background_cues: "最多两个低对比界面轮廓；冷蓝环境光；无美元、收入图或logo墙"
cta:
  label: "LIVE"
  detail: "10月8日 20:00 纽约时间 · 免费"
  button: "立即报名"
  placement: "画面下部中央安全区；信息现代黑体，按钮小面积红色"
missing_facts: []
status: "prompt ready; image not generated; crop not verified"
```

## 输出 prompt 示例

```text
生成 daniel_cinematic_poster 风格 X 长文电影海报封面，1600×838，约1.91:1。
附件中的 Daniel 角色卡是人物身份依据：东亚中国男性、短黑色纹理侧分、
精壮身材、黑色高级穿搭、左臂黑灰写实花臂、颈部和平鸽纹身，
AI创业者与独立创作者气质。人物在左侧约占40%，看向画面中部。
黑与深灰工作室，最多两个低对比界面轮廓呈现 Markdown 文稿向 X Article
编辑器的转换；冷蓝只用于环境科技感，保留自然肤色。
中央偏右大标题准确写“3步发布长文”，电影毛笔爆裂字、粗书法、飞白与刷痕；
“3步”放大、变红、靠近中心，其余冷白。标题优先于人物，不能挡脸。
较小英文副标题“FROM DRAFT TO ARTICLE”，Bodoni/Didot高对比衬线感。
下部安全区用现代黑体写“LIVE / 10月8日 20:00 纽约时间 · 免费”，
一个小面积红色视觉按钮“立即报名”。背景安静，行动区不是课程信息表。
脸和所有必要文字都在横向15%–85%、纵向15%–85%以内；四边可裁切。
不加收入数字、美元图、额外日期、收费或logo；无PPT、信息图、课程传单、
密集小字、正文贴图、彩虹、廉价霓虹、过度赛博朋克或镜像到右臂的花臂。
```

生成后才可新增真实图片路径与验证结果。上面的文字是 prompt 输出，不是实际成图。

## 其他输入的处理

| 输入变化 | 预期行为 |
| --- | --- |
| “AI赚钱，目标首个$100，还没做到” | 若选金额，标题保留“目标”；不得写“已赚$100”，不造收入截图 |
| 有直播招募，但未给时间和价格 | 底部仅 `LIVE / 立即报名`，缺失事实进入记录，不生成日期/票价/“免费” |
| “复盘已结束的直播” | CTA 为“查看复盘”，不得继续招募或售票 |
| 纯强观点，无商业或活动 CTA | 提炼真实冲突词，不强塞数字；底部留白 |
| 点名其他原有风格 | 走该风格原有规则，不自动替换成此 preset |
