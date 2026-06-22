# NearBossAI 设计规范 · Warm Table × Bento Pro 融合版 v2.0

> **文档定位**：移动端 App 全量设计规范 / Agent Handoff Spec —— 任何 agent 或开发者拿到本文件即可精准还原视觉风格，无需查看原稿。
> **来源**：融合 `The Warm Table v1.6`（canonical 基座）+ `便当满幅版 Bento Pro v1.0`（第 8 套选定视觉语言）两份规范，并裁定其全部逻辑冲突。
> **适用范围**：NearBossAI **全产品通用设计系统**——色彩/字体/间距/组件/AI 触点规则适用于任意现有及未来页面。
> **产品**：面向 GCC/MENA 门店商家的多 Agent 助手（餐饮/服务业老板，40+ 男性为主）。
> **基准设备**：iPhone 15 Pro Max，逻辑分辨率 **430 × 932 px**（19.5:9）。
>
> **本版四项裁定（v2.0 融合决策，详见附录 D）**：
> 1. **字体 → 全局唯一 SF Pro**（弃用 IBM Plex Mono / Source Serif；数字 `tabular-nums`）。
> 2. **保留满幅橙 Hero 沉浸区 + 白字**，但渐变加深至 `#B85B18→#93420F` 使白字全段 ≥4.5:1。
> 3. **产品名统一 NearBossAI**。
> 4. **卡片采用四级暖色层次**（橙 Hero → 纸面板 → 米纸卡 `#F3EEE4` → 图标块 `#F6E7D6`），纯白卡退役。

---

## 目录

1. [设计语言（DNA）](#1-设计语言dna)
2. [色彩 Token（核心）](#2-色彩-token核心)
3. [AI 触点规则 ★ 风格灵魂](#3-ai-触点规则--风格灵魂)
4. [字体系统（SF Pro）](#4-字体系统sf-pro)
5. [间距 / 圆角 / 阴影](#5-间距--圆角--阴影)
6. [组件库](#6-组件库)
7. [页面布局通则](#7-页面布局通则)
8. [状态与交互](#8-状态与交互)
9. [动效](#9-动效)
10. [边界情况](#10-边界情况)
11. [无障碍](#11-无障碍)
12. [深色模式（Obsidian）](#12-深色模式obsidian)
13. [演示外壳（设备 Mockup）](#13-演示外壳设备-mockup)
14. [附录 A：备用品牌皮肤](#附录-a备用品牌皮肤)
15. [附录 B：可直接粘贴的 CSS Token](#附录-b可直接粘贴的-css-token)
16. [附录 C：还原检查清单 ✅](#附录-c还原检查清单)
17. [附录 D：变更记录 & 审批](#附录-d变更记录--审批)
18. [附录 E：类名映射](#附录-e类名映射)

---

## 1. 设计语言（DNA）

| 维度 | 定义 |
|------|------|
| **一句话气质** | 克制的杂志感 + 暖木质温度 + 流动的 AI 微光；首屏以**满幅橙沉浸 Hero** 承载核心数据，下沉为**便当宫格**承载功能入口 |
| **主色基因** | 深棕（木质餐桌/牛皮纸/原木货架）+ 暖橙（食欲/质感/温度） |
| **层次基因** | **四级暖色递进**：橙 Hero → 纸面板 `#FAF7F0` → 米纸卡 `#F3EEE4` → 图标块 `#F6E7D6`（由深到浅、由暖到更暖） |
| **AI 表达方式** | **全暖橙流动渐变 + 微光脉冲**，而非冷色相——AI 与门店暖色同源，视觉统一 |
| **数据色策略** | 数据辅色（茶绿/砖红/钢蓝/旧金）**完全独立于品牌主色**，避免出品色与数据色互相干扰 |
| **底层质感** | 米纸背景 `#FAF7F0` + 米纸卡，干净克制的"工作台"留白质感（无网格底纹） |
| **数字呈现** | 所有金额/数据用 **SF Pro + `tabular-nums`**，强化"账本/POS"对齐感 |
| **目标情绪** | 不冲动、不年轻化、稳重可信——契合 40+ 商家老板 |

**六条不可违背的风格铁律**（违反任意一条即视为还原失败）：

1. 纸面背景永远是**米纸暖白 `#FAF7F0`**，不是纯白、不是冷灰；**卡片一律 `#F3EEE4` 米纸卡，禁纯白 `#FFFFFF` 卡**。
2. 暖橙 `#E68534` 只作**填充底色**（CTA / 用户气泡 / 数据柱等容器型填充），其上文字图标一律配**深墨 `#3A2418`**（5.37:1 ✓）；**强调文字 / 链接 / 激活 tab** 用 `--accent-deep #A85A40`（≥4.67:1 ✓）。`#E68534` 永不配白字、不作正文色。
3. **AI 触点 = 暖橙渐变**（`#FFAA00→#CC785C`），普通功能触点 = 纯暖橙 `#E68534`，二者严格区分。**渐变底之上的文字/图标同配深墨 `#3A2418`**（≥4.4:1），**永不配白字**。
4. 青色 `#00D4FF` **只标识"实时/扫描/数据峰值/AI 运算中"，且仅作图形（脉冲点/扫描线/光晕/描边）**，是点睛，绝不滥用；**需可读的青色文字一律用深青绿 `--data-cyan-deep #0A6E7E`**。
5. **全局唯一字体 SF Pro**（中文自动回落苹方 PingFang SC）；所有数字加 `font-variant-numeric: tabular-nums`；大写技术/状态标签靠字距（0.04–0.16em）区分，**不再使用 IBM Plex Mono / 衬线**。
6. **白字仅允许出现在满幅 Hero 沉浸区**（前提：Hero 渐变 `#B85B18→#93420F` 已保证白字全段 ≥4.5:1）；**纸面区域（面板/卡片/正文/按钮）一律深墨，禁止白字**——橙底按钮即使在 Hero 内也配深墨字（铁律 2）。

> **约束分级（v2.0 · 创作自由度声明）**：以上「铁律」与 §2 色彩 token/语义、§3 AI 触点、§11 对比度/无障碍、§4 字体族 SF Pro（数字 `tabular-nums`）、§7.5 页型→布局模式映射 = **硬约束**（不可违背，保品牌与可用性一致）。而 §4 **具体字号/字重/字距**、§5 **间距/圆角数值**、§6 **组件几何值** = **推荐参考刻度（方向性，非硬约束）**——鼓励 agent 在风格气质与无障碍前提下自由调整构图、比例、间距、列数与装饰，不追求像素级复刻。一句话：**色彩 / 对比 / 品牌 / 页型布局模式 锁死；排版细节 给方向、放手设计。**

---

## 2. 色彩 Token（核心）

> 所有 HEX 均为定稿精确值，可直接复制。这是还原风格的第一优先级资产。

### 2.1 主色系 · 深棕 + 暖橙

| Token | HEX | 用途 |
|-------|-----|------|
| `--ink` | `#3A2418` | 主文字 / 深色卡片底 / 强分割线 |
| `--ink-2` | `#6B5346` | 次级文字（正文推荐用此色，非 ink-3） |
| `--ink-3` | `#8A867D` | 弱提示 / 副标题 / 标签（仅限大字或装饰，见无障碍） |
| `--ink-4` | `#A89B8C` | 占位符 / 禁用 / 箭头 |
| `--accent` | `#E68534` | **暖橙品牌色**——CTA / 数据柱 / 徽标的**填充底色**（其上配深墨字 `--ink`）；Logo；大号图形。**不可作文字色** |
| `--accent-deep` | `#A85A40` | **暖橙强调文字 / 链接 / 激活 tab / 线性图标色**（米纸 4.67:1、白底 5.0:1 ✓）；按钮 hover / 按下态 |
| `--accent-soft` | `#FAF3E8` | 暖橙浅底 / 卡片渐变收尾 |
| `--cta-text` | `#3A2418` | 橙底/渐变底之上的文字色（= 深墨，铁律 2，永不白字；暗色 `#1A1A1A`，见 §12） |

### 2.2 背景系 · 四级暖色层次（纸面）

> **由浅到深、由暖到更暖**，承载"层叠纵深"。纯白 `#FFFFFF` **仅用于**：演示舞台底（§13）、Hero 内白色头像底、Hero 白字；**App 纸面卡片一律 `#F3EEE4`，禁纯白卡**。

| Token | HEX | 层级 | 用途 |
|-------|-----|------|------|
| `--bg` | `#FAF7F0` | ② 纸面板 | 主背景 / 上浮面板 sheet（**铁律：不可换纯白**） |
| `--bg-card` | `#F3EEE4` | ③ 米纸卡 | 便当卡 / 进度卡 / 列表容器 / AI 气泡 / 输入框底（**取代旧白卡**） |
| `--bg-icon` | `#F6E7D6` | ④ 图标块 | 卡片左上图标容器（比卡片更暖） |
| `--line` | `#E8DDC9` | — | 分割线 / 卡片描边（1px） |
| `--line-soft` | `#F2EEE3` | — | 列表内分割（更弱） |
| `--line-strong` | `#3A2418` | — | 强分割（= ink，章节级硬边界） |

> 注：旧规范中的 `--bg-muted #F2EEE3` 与本卡面 `#F3EEE4` 肉眼不可分，已**去重**——纸面卡统一 `--bg-card #F3EEE4`，`#F2EEE3` 仅保留为 `--line-soft` 弱分割。Bento 原稿的卡边 `#E4DBC8` 并入 `--line #E8DDC9`。

### 2.3 Hero 沉浸区专用色

| Token | 值 | 用途 |
|-------|-----|------|
| `--hero-gradient` | `linear-gradient(160deg, #B85B18 0%, #93420F 100%)` | 满幅 Hero 背景（已加深，保证白字 ≥4.5:1，见 §11） |
| `--hero-text` | `#FFFFFF`（实心，**禁低透明度**） | Hero 区所有文字（主数字/标签/读数）；分级靠字重而非 opacity |
| `--hero-line` | `rgba(255,255,255,0.3)` | Hero 内**非文字**分割线（读数条竖线/上边线） |
| `--hero-avatar-text` | `#B65814` | Hero 白色头像内的字母（白底 4.78:1 ✓） |

### 2.4 数据辅色 · 与主色独立

| Token | HEX | 语义（严格绑定，不可混用） |
|-------|-----|------|
| `--data-trust` | `#2A7E3B` | 茶绿 · 引用/来源/完成/增长（▲） |
| `--data-trust-soft` | `#E5F4E9` | 茶绿浅底（citation chip 背景） |
| `--data-warn` | `#B0464A` | 砖红 · 警示/异常/下跌 |
| `--data-info` | `#3A6B8A` | 钢蓝 · 中性信息 |
| `--data-gold` | `#C9A24E` | 旧金 · 余额/会员/星级/推荐 |
| `--data-cyan` | `#00D4FF` | 青 · 实时/扫描/数据峰值/AI 运算中（点睛色，**仅作图形/光晕/描边，不作文字**） |
| `--data-cyan-deep` | `#0A6E7E` | 深青绿 · **青色语义的可读文字**（thinking pill 字 / LIVE·ONLINE 标签字 / 计时文字）；浅底 ≥5.4:1 ✓ |

### 2.5 AI 渐变（独立成节，见 §3）

| Token | 值 |
|-------|-----|
| `--ai-gradient` | `linear-gradient(135deg, #FFAA00 0%, #F69B13 17%, #EE8F24 33%, #E68534 50%, #DD7F42 67%, #D47A50 83%, #CC785C 100%)` |
| `--ai-gradient-90` | 同上但 `90deg`（用于文字裁切 / 进度条填充） |
| `--ai-solid` | `#EE8F24`（回退纯色：渐变不可用环境/纯色描边图标/降级时启用） |
| `--ai-glow` | `rgba(230,133,52,0.4)`（脉冲/光晕） |

---

## 3. AI 触点规则 ★ 风格灵魂

> **这是 NearBossAI 区别于一切普通 App 的核心**。还原时必须严格执行以下"色彩语义分配表"。

### 3.1 色彩语义分配（一一对应，禁止越界）

| 出现场景 | 用色 | 形态 |
|---------|------|------|
| CTA / 用户气泡 / 图表柱（填充底） | 底 `#E68534` + 文字图标 `#3A2418`（深墨 5.37:1） | 实色填充 |
| 强调文字 / 链接 / 激活 tab / 线性图标（前景） | `#A85A40`（accent-deep，≥4.67:1） | 文字 / 描边 |
| **AI 触点**：AI 头像、AI 徽章、发送键、AI chip、AIGC 标签、进度环 | 底 **暖橙渐变** `--ai-gradient` + 其上**文字图标深墨 `--ink`**（≥4.4:1，**不配白字**） | 渐变 + 光晕 |
| 实时 / 扫描线 / 数据峰值柱 / 灵动岛活跃点（**图形**） | 青 `--data-cyan` `#00D4FF` | 点睛 + 脉冲（仅作图形/光晕/描边，**不作小字正文**） |
| 青色**文字**（thinking pill 字、LIVE/ONLINE 标签字、运算计时） | 深青绿 `--data-cyan-deep` `#0A6E7E`（浅底 ≥5.4:1） | 文字 |
| 引用角标 / 来源 / 已完成 / 增长率 | 茶绿 `#2A7E3B` | 小角标 / 文字 |
| 余额 / 会员等级 / 星级 | 旧金 `#C9A24E` | 数字 / 徽章 |
| 警示 / 异常 / 下跌 / 未读数 | 砖红 `#B0464A` | 徽章 / 文字 |

### 3.2 AI 标识三件套（必须同时具备）

1. **渐变填充**：AI 元素用 `--ai-gradient`（135deg 暖橙阶）。
2. **微光光晕**：`box-shadow: 0 0 12px var(--ai-glow)` 或脉冲动画 `pulse-ai`。
3. **运算态青色**：AI 正在工作时叠加青色扫描线（`scan` 动画）+ "AI WORKING · {mm:ss}" SF Pro `tabular-nums` 计时文字（标题级可用 `ai-grad-text` 渐变裁切）。

### 3.3 AI 文字渐变（ai-grad-text）

```css
background: var(--ai-gradient-90);
-webkit-background-clip: text; background-clip: text;
color: transparent; font-weight: 600;
```
用于："AI WORKING"、"AI GENERATED"、进度百分比等 AI 状态文字。
> **边界**：橙色渐变文字落在米纸/卡底上对比度偏低（最浅端约 1.9:1），故 `ai-grad-text` **仅作大号/粗体的装饰性状态文字**，且须与相邻可读元素（计时数字、图标、进度环数值）组合表意；**不得用于正文或需独立可读的关键信息**。需可读的青色文字一律用 `--data-cyan-deep`。

### 3.4 可信度表达（AI 产品信任锚点）

- AI 回答中引用数据 → 行内 **citation chip**：茶绿浅底 `#E5F4E9` + 茶绿字 `#2A7E3B` + SF Pro `tabular-nums`，如 `POS` `RPT`。
- AI 思考过程 → **thinking pill**：青色半透底 `rgba(0,212,255,0.10)` + 青边 `--data-cyan` + 脉冲点 + 大写**文字用深青绿 `--data-cyan-deep` `#0A6E7E`**（浅底 ≥5.4:1；**不用 `#00D4FF` 作文字**），如 `QUERYING POS`。
- 这两者让"AI 有据可查"，是产品可信度的视觉支柱，不可省略。
- **场景边界（不可越界）**：citation 与 thinking pill **仅限 AI 对话页 / AI 任务进度页等存在真实 AI 运算/查询语义的语境**。**禁止**用于登录认证、OTP/表单校验、纯展示等确定性场景（违反铁律 4）。

---

## 4. 字体系统（SF Pro）

> **v2.0 裁定**：全局唯一字体 SF Pro，弃用 IBM Plex Mono 与 Source Serif。这是 Apple 系统的标准中英搭配，中文由苹方承接。

```css
--font: -apple-system, "SF Pro Display", "SF Pro Text", "SF Pro",
        system-ui, "PingFang SC", "Helvetica Neue", Arial, sans-serif;
```

| 规则 | 说明 |
|------|------|
| **唯一字体** | 界面文字 / 标题 / 正文 / 数字 / 技术标签全部走 `--font`，不引入第二字体 |
| **数字对齐** | 所有金额/统计/时间一律加 `font-variant-numeric: tabular-nums`（等宽数字，跨行对齐） |
| **中文回退** | SF Pro 无中文字形，中文字符自动由 `PingFang SC` 承接 |
| **大写标签** | 原 mono 大写小标签改为 **SF Pro 大写 + 字距 0.04–0.16em** 表达"技术/状态"感（不再依赖等宽字体） |

### 4.1 字阶（通用，归一化到 430×932 · **推荐参考刻度，可按风格调整**）

| Token | 字号 | 字重 | 字距 | 用途 |
|-------|------|------|------|------|
| `display` | 34px | 600 | -0.04em | 登录品牌名 / 大额数字 |
| `title-lg` | 28px | 600 | -0.02em | 首页问候语 |
| `title` | 21px | 600 | -0.01em | 导航栏标题 / 区块标题 |
| `body-lg` | 20px | 500–600 | -0.01em | 卡片主文字 |
| `body` | 17px | 400 | 0 | 默认正文（iOS 标准） |
| `caption` | 15px | 400–500 | 0 | 次级标签 |
| `label-caps` | 13px | 500 | 0.12em | **区块小标题**：大写段首标签（`WEEKLY REVENUE`），字距最宽 |
| `micro` | 13px | 500 | 0.04–0.1em | **角标/时间戳/微徽章**：行内小标签，字距较窄 |

### 4.2 Hero 专用字阶（满幅沉浸区）

| 用途 | 字号 | 字重 | 字距 | 其它 |
|------|------|------|------|------|
| Hero 主数字 `.amt` | 52px | 700 | -0.03em | line-height .96，`tabular-nums` |
| Hero 货币前缀 `.cur` | ≈20px | 600 | — | 实心白、基线上移（**不再用低透明度**） |
| Hero 标签 `.lab` | 11px | 500 | 0.16em | 全大写，实心白 |
| Hero 读数值 `.v` | 19px | 700 | — | `tabular-nums`；单位 small = 0.5em |
| Hero 读数标题 `.k` | 10px | 500 | 0.08em | 全大写，实心白 |

### 4.3 组件字阶（便当卡 / 控件）

| 用途 | 字号 | 字重 | 字距 |
|------|------|------|------|
| 卡片标题 | 18px | 700 | -0.01em |
| 卡片副标题 | 13px | 400 | — （line-height 1.4） |
| 分类 Tab | 15px | 600 | — |
| 问候名（sharpest） | 18px | 600 | — |
| 进度区标签 | 10px | 500 | 0.14em（全大写） |
| 主按钮文字 | 14px | 600 | — |
| AI 徽标 / 读数单位 | 9–10px | 700/500 | 0.04em |

**倾向（方向性，非硬约束）**：标题字距偏收紧（`title` 系约 -0.01 ~ -0.04em）；大写标签字距偏放宽（约 0.04 ~ 0.16em）。

---

## 5. 间距 / 圆角 / 阴影

### 5.1 间距（4pt 基准）

| Token | 值 | 用途 |
|-------|----|------|
| `--space-1` | 4px | 图标-文字微间隙 |
| `--space-2` | 8px | 紧凑元素间 |
| `--space-3` | 12px | 卡片内元素间 |
| `--space-4` | 16px | **屏幕左右安全边距** / 卡片内边距 / **相邻卡片·便当卡间距（默认节奏）** |
| `--space-5` | 20px | 卡片内边距（宽松） |
| `--space-6` | 24px | 带独立小标题的大区块之间 |
| `--space-8` | 32px | 大区块间（页面级硬分隔） |

> Bento 原稿的 14/18/22px 已归一到 4pt：便当网格 `gap = --space-4(16px)`；上浮面板 overlap = `-20px`（见 §6.2）。

### 5.2 圆角（对齐全局 rounded-2xl 规则）

| Token | 值 | 用途 |
|-------|----|------|
| `--radius-card` | 16px（rounded-2xl） | 卡片 / 便当卡 / 列表容器 |
| `--radius-sheet` | 20px（仅上缘） | 上浮纸面板顶部圆角（§6.2） |
| `--radius-btn` | 14px | 主/次按钮 / 卡片图标块 |
| `--radius-input` | 18px | 浮动输入栏 |
| `--radius-chip` | 10px | chip / 小图标容器 |
| `--radius-badge` | 6px | 小角标 / AI 徽标 |
| `--radius-pill` | 999px | 胶囊徽章 / thinking pill / Home 指示条 |
| `--radius-full` | 50% | 头像 / 圆形按钮 / 管家浮球 |

> 设备框圆角（屏 65 / 外框 76 等）见 §13，属演示外壳规格，不入 `:root`。

### 5.3 阴影 & 光晕

> 移动端**允许柔和阴影 + AI 光晕**（与 Web 端"无阴影"规则不同）。阴影色基于深棕，非黑色。

| Token | 值 | 用途 |
|-------|----|------|
| `--shadow` | `rgba(58,36,24,0.18)` | 通用柔和投影（暖色调） |
| `--shadow-card` | `0 2px 10px rgba(58,36,24,0.05)` | 米纸卡极轻投影（便当卡/进度卡） |
| `--cta-shadow` | `rgba(204,120,92,0.32)` | CTA 抬升投影 |
| `--shadow-btn` | `0 4px 14px var(--cta-shadow), inset 0 0 0 1px rgba(255,255,255,0.06)` | 主按钮 |
| `--shadow-input` | `0 4px 16px var(--shadow), inset 0 0 0 1px rgba(0,212,255,0.08)` | 浮动输入栏（含极淡青内描边） |
| `--shadow-glow-ai` | `0 0 12px var(--ai-glow)` | AI 元素光晕 |
| `--glow-cyan` | `inset 0 0 0 1px #00D4FF, 0 0 20px rgba(0,212,255,0.12)` | `.card.glow` 实时卡片 |

---

## 6. 组件库

> 每个组件给出：结构 + 关键样式 token + 状态。几何值为 430×932 归一化值。

### 6.1 设备容器（屏内系统件）

| 元素 | 规范 |
|------|------|
| **屏幕底** | 纯 `--bg` 米纸（无网格底纹，保持干净留白） |
| **状态栏（双态 · 按顶部背景判定）** | ① **沉浸态**（顶部深底：橙 Hero / 深色 Hero / 深色头卡）：`position:absolute` 浮于其上，背景透明，文字/图标转 **白 `#fff`**（`fill:currentColor` 随之转白）；② **常规态**（顶部米纸/浅色：navbar 二级页等）：高 44px，时间左、信号/WiFi/电量右，色 = `--ink`。**判据是"顶部是否深底"而非"是否 Hero"**；两态均用 SF Pro。 |
| **灵动岛** | 居中黑色胶囊（物理挖孔，**恒为黑**）。AI 语义叠加严格区分：① **`.live` 运算态**——有真实 AI 后台任务时，右侧 AI 渐变小点 + 光晕 + `pulse-ai`，并叠加 scan / "AI WORKING" 计时；② **品牌氛围态**——认证/启动等无后台任务页，仅静态 AI 渐变点 + `pulse-ai` 光晕，**不叠加 scan/计时**。本产品**全局默认采用品牌氛围态**以统一"AI 产品在线感"，纯黑 plain 为可选降级，二者皆合规。 |
| **Home 指示条** | 底部居中，宽 ~1/3、高 4px，圆角 `--radius-pill`，色 `--ink` opacity 0.6 |

### 6.2 满幅 Hero 沉浸区（核心 · 概览/数据页首屏）

> **承载核心数据的满幅橙色沉浸区**，边到边（左右 padding 0），文字用 `--hero-text` 白。是融合稿区别于普通仪表页的标志性版式。

**结构（自上而下）**
```
[沉浸状态栏:透明浮于橙上,白字]
顶行: 头像(白底/橙字)  问候(Good morning / sharpest ▼)  …  菜单按钮(右)
数据: 标签(NET INCOME TODAY · AED)  →  主数字(AED 1,280.50)  →  涨跌 chip(▲12%) + 说明(vs yesterday · Live)
读数条: 4 等分(Success / Refunds / AOV / WoW),竖线分隔
```

| 规格 | 值 |
|------|----|
| 背景 | `--hero-gradient`（白字全段 ≥4.5:1，见 §11） |
| 文字 | `--hero-text #fff` 实心；层级靠字重，**禁低透明度白字** |
| 内边距 | `60px 20px 34px`（顶部 60px = 状态栏 54 + 余量，避免被压） |
| 头像 | 44×44 圆形，底 `#fff`，字母 `--hero-avatar-text #B65814` 700/19 |
| 菜单按钮 | 44×44 / 圆角 14（触控 ≥44，对齐 §11）；底 `rgba(255,255,255,.2)`、边 `1px rgba(255,255,255,.5)`、图标白（图标按图形 ≥3:1 即可） |
| 读数条 | `margin-top:22px`；上边线 + 列间竖线 `--hero-line` |
| 交互 | 整个 Hero 可作为链接跳"数据详情" |

**上浮纸面板 `.sheet`**：紧随 Hero 之下的纸色面板，`border-radius: var(--radius-sheet) var(--radius-sheet) 0 0; margin-top:-20px;` 盖住 Hero 底缘制造层叠纵深；内边距 `10px 16px 30px`（左右对齐 §7.1 安全边距 16px）；底 `--bg`。

**Hero 配色变体（v2.0 扩充）**：① **橙 Hero（默认 · 数据/概览页）** 背景 `--hero-gradient`；② **深色 Hero（账户/个人页，如「我的」）** 背景 `linear-gradient(150deg,#3A2418,#693B2A,#A85A40)`（深棕→暖橙），白字落深色端 ≥4.5:1（见 §11）——与数据 Tab 的橙 Hero 区分"账户感"。两者均为满幅沉浸 + 沉浸态白状态栏 + `.sheet` 叠压，仅渐变不同。

### 6.3 卡片 `.card`

```
背景 --bg-card #F3EEE4 · 描边 1px --line · 圆角 --radius-card · 内边距 --space-4~5 · 阴影 --shadow-card
```
| 变体 | 规则 |
|------|------|
| 默认 | 米纸卡 `#F3EEE4`，1px 描边 + 极轻投影 `--shadow-card` |
| `.glow` | 加 `--glow-cyan`（实时/AI 关联卡片） |
| `.dark-card` | 背景 `linear-gradient(135deg, var(--ink), var(--accent-deep))`，文字用 `--bg`（余额卡/头卡） |
| 渐变卡 | `linear-gradient(135deg, var(--bg-card), var(--accent-soft))`（营收卡） |

### 6.4 便当卡 `.bento-card`（功能入口）

> 2 列等宽宫格承载功能入口。**图标在上、文字在下**。

| 元素 | 规范 |
|------|------|
| 网格 | `grid-template-columns: 1fr 1fr; gap: --space-4(16px)`；与上方 Tab 间距 16px |
| 容器 | `flex-direction:column; min-height:158px`；底 `--bg-card`、边 1px `--line`、圆角 `--radius-card`、内边距 `--space-5(18→20)`、阴影 `--shadow-card`；按下 `translateY(1px)` |
| 图标块 | 左上 50×50，圆角 `--radius-btn(14)`，底 `--bg-icon #F6E7D6`，图标 25×25 色 `--accent-deep` |
| 文案 | `margin-top:auto` 推到底部；标题 18/700 `--ink`，副标题 13/400 `--ink-3`（lh 1.4） |
| AI 徽标（可选） | 右上，底 `--accent`，字 `--cta-text` 深墨，9/700，圆角 `--radius-badge` |

### 6.5 图标（线性）

- 统一线性图标：`stroke-width:1.7`、`stroke-linecap/linejoin:round`、`viewBox 0 0 24 24`、色 `currentColor`（= `--accent-deep`）。
- **不用 emoji、不用面性图标**。一图一概念（收款=卡、装修=调色板、营销=喇叭、提现=钞票）。

### 6.6 按钮

| 组件 | 背景 | 文字 | 描边 | 阴影 | 圆角 |
|------|------|------|------|------|------|
| `.btn-primary` | `--accent` #E68534（或 `--ai-gradient`） | **`--cta-text` #3A2418 深墨** 600（5.37:1 ✓，**不用白字**，Hero 例外不适用于按钮） | — | `--shadow-btn` | `--radius-btn` |
| `.btn-ghost` | 透明 | `--ink` 500 | 1px `--line` | — | `--radius-btn` |

### 6.7 Chip `.chip`

| 变体 | 背景 | 文字 | 用途 |
|------|------|------|------|
| 默认 | `--bg-card` | `--ink` | 未选筛选项 |
| `.active` | `--ink` | `--bg` | 选中（深底反白） |
| `.ai` | `--ai-gradient` | **深墨 `--ink`** | AI 相关筛选/标签（渐变底配深墨字，≥4.4:1） |

圆角 `--radius-chip`，padding ~ 5×11px，字号 caption 500。

### 6.8 分类 Tab `.tabs`（页内横向）

- 横向可滚动：`gap:24px; overflow-x:auto`；底部 1px `--line`。
- 项：15/600，默认 `--ink-3`；激活 `--ink` + 底部 2.5px `--accent` 圆角下划线。

### 6.9 微徽章 `.mb`（大写）

边框式小角标，SF Pro 大写，字距 0.1em，圆角 `--radius-badge`：
| 变体 | 色 |
|------|----|
| 默认 | 边 `--line`，字 `--ink-2` |
| `.live` | 边 `--data-cyan` `#00D4FF`；**字 `--data-cyan-deep` `#0A6E7E`**（配 `LIVE`/`ONLINE` 文案，不依赖纯色） |
| `.ai` | `--ai-gradient` 填充 + **深墨字 `--ink`**，无边（≥4.4:1，**不配白字**） |
| `.gold` | 旧金 `--data-gold` `#C9A24E` |
| `.trust` | 茶绿 `--data-trust` `#2A7E3B` |
| `.info` | 钢蓝 `--data-info` `#3A6B8A`（版本/环境/编号等中性提示） |

### 6.10 头像 `.avatar`

- 默认：圆形，背景 `--ink`，白字 600。
- `.ai`：背景 `--ai-gradient` + 三层光环 `0 0 0 2px var(--bg), 0 0 0 3px rgba(230,133,52,0.35), 0 0 12px var(--ai-glow)`（**全暖橙，不掺冷色**；冷调仅限深色模式 §12）。

### 6.11 浮动输入栏 `.input-bar`

底部浮动；背景 `--bg-card` + 1px `--line` + `--radius-input` + `--shadow-input`；右侧发送键为 AI 渐变方块（`--radius-chip`，**深墨箭头 `--ink`**，`--shadow-glow-ai`）。

### 6.12 数据图表

| 元素 | 规范 |
|------|------|
| 柱状 `.bars .b` | 背景 `--accent`，圆角顶部 2px |
| 峰值柱 `.b.peak` | `--accent` + 青色光晕 `0 0 8px #00D4FF, inset 0 0 0 1px #00D4FF` |
| 弱柱 `.b.muted` | 背景 `--line` |
| 轴标签 | micro，`--ink-3` |
| 进度条 `.progress-line` | 轨道 `--bg-card` + `inset 0 0 0 1px --line` 高 10px + 填充 `--ai-gradient-90` + 圆角 999 |
| **进度环** | SVG 双圆：底圈 `--line`，进度圈用 SVG 渐变 `#FFAA00→#E68534→#CC785C` + `drop-shadow(0 0 6px rgba(0,212,255,0.5))`，圆心大号数字 |

### 6.13 聊天气泡

| 组件 | 背景 | 文字 | 圆角（尾巴） |
|------|------|------|------|
| `.bub-ai` | `--bg-card` + 1px `--line` | `--ink` | `12px 12px 12px 4px`（左下收尖） |
| `.bub-user` | `--accent` #E68534（容器型填充） | **`--ink` 深墨**（5.37:1 ✓） | `12px 12px 4px 12px`（右下收尖），右对齐 |
| `.citation` | `--data-trust-soft` | `--data-trust` | `--radius-badge`，行内 |
| `.thinking` | `rgba(0,212,255,0.10)` + 青边 `--data-cyan` | **深青绿 `--data-cyan-deep`**（≥5.4:1） | `--radius-pill`，前置 `pulse-dot` |

### 6.14 列表项 `.listitem`

左（图标容器 + 标签）/ 右（值或箭头 `--ink-4`）；下分割 `--line-soft`。金额值 `.li-amt` 用茶绿 `--data-trust` + 600 + `tabular-nums`。

### 6.15 海报（AIGC 产出）

宽高比 3:4，渐变底（深棕→暖橙系，如 `linear-gradient(160deg,#5C3320,#C8392E,#F5B342)`），右下角 `.ai-tag`（AI 渐变 + 光晕）。

### 6.16 Tab 栏（底部主导航）

- **4 个 tab**（工作台 / 经营 / 增长 / 我的），高度 ~54–72px，背景 `rgba(250,247,240,0.92)` + blur，顶部 0.5px `--line`。**无中央 FAB**。
- 标签：SF Pro 大写，未激活 `--ink-3`，激活 **`--accent-deep`** 600（≥4.67:1）。
- 全局 AI 锚点由**电子管家浮球**承载（见 §6.17）；各专家 AI 能力在所属业务 Tab 场景内就近进入。

### 6.17 电子管家浮球（全局 AI 锚点）

- **全局常驻悬浮球**，跨所有 Tab；圆形，背景 `--ai-gradient` + `--shadow-glow-ai` + `pulse-ai` 呼吸（**不掺冷色**）；图标用**深墨 `--ink`**（≥4.4:1，不配白）。
- 有待办时右上角 `.mb` 砖红未读角标；提醒按优先级排序、可关闭某类。
- 点击展开**「可操作待办」卡片流**：每条 = 问题 + 固定建议 + 一键跳转处理。与「消息通知」分工——浮球=可操作待办，消息=历史存档。
- 尊重 `prefers-reduced-motion`（关 `pulse-ai` 保留静态渐变）；触控 ≥44px。

---

## 7. 页面布局通则

> 与具体页面无关的布局规则，适用于 App 内任意现有及未来页面。

### 7.1 页面骨架（自上而下）

| 层 | 规则 |
|----|------|
| **状态栏区** | Hero 页用沉浸态（白字浮于橙上）；非 Hero 页用常规态（高 44px，`--ink`）。`.live` 灵动岛仅当有 AI 后台任务时出现。 |
| **Hero / 导航区** | 数据/概览页首屏用**满幅 Hero 沉浸区**（§6.2）；其余页用 `title`（21/600）导航栏，返回/操作图标 44×44 触控区。 |
| **内容区** | 左右安全边距 `--space-4`；**相邻卡片 / 便当卡间距 `--space-4`（16px，默认节奏）**；带独立小标题的大区块之间 `--space-6`、页面级 `--space-8`；底背景纯 `--bg`。 |
| **底部锚定区** | 主操作（`btn-primary`）或浮动输入栏贴底，留 Home 指示条安全距；tabbar 半透 blur 常驻。 |

### 7.2 主导航

- 底部 tab 栏承载顶层入口：**工作台 / 经营 / 增长 / 我的（4 Tab，无中央 FAB）**；激活态文字/图标一律 `--accent-deep`，未激活 `--ink-3`。
- **全局 AI 锚点 = 电子管家浮球**（跨 Tab 常驻，见 §6.17）。
- 各专家 AI 对话/生成能力在所属业务 Tab 场景内就近进入（🎨设计→经营/装修、📣营销→增长、📊数据→工作台），不设全局对话 FAB。

### 7.3 层次与区块节奏

- **四级暖色递进**（由后到前 / 由深到浅）：橙 Hero → 纸面板 `#FAF7F0` → 米纸卡 `#F3EEE4` → 图标块 `#F6E7D6`。
- 单屏遵循「**Hero/头部信息 → 主数据/主操作 → 便当入口/次级列表**」的纵向递减权重。
- 卡片默认米纸卡 + 极轻投影；仅**实时/AI 关联卡**加青光（`.glow`）；余额/深色信息用 `.dark-card`。
- 金额/统计数字一律 `tabular-nums`，保证跨行对齐。

### 7.4 可复用页面原型（archetype）

| 原型 | 布局要点 |
|------|---------|
| **概览 / 仪表页** | **满幅 Hero 沉浸区**（核心数据，白字）+ 上浮纸面板 + 分类 Tab + **便当卡宫格**；AI 入口带渐变角标；**电子管家浮球常驻**（无底部 Ask AI 输入栏）。 |
| **认证 / 引导页** | 居中 Logo（`--ink` 底 + AI 渐变点）+ 品牌名 display + 副标；卡片内下划线输入；`btn-primary` 收尾。多步表单顶部加 `STEP 0X/0N` + `progress-line`。**AI 触点限品牌氛围态**，禁用 `.live`/scan/thinking/citation/计时。 |
| **实体主页（门店/资料）** | 头卡（渐变方块 Logo + ★评分 + LIVE/GOLD 徽章）+ 2×2 管理入口卡 + Quick actions 列表。 |
| **资金 / 数值页** | `.dark-card` 余额卡（旧金大额 + YTD/MTD）+ 明细列表（平台角标 + 茶绿金额）+ `btn-primary`。 |
| **AI 对话页** | 顶栏 AI 头像 + "● ONLINE"（在线点 = 青 `--data-cyan` 图形脉冲；ONLINE 文字 = 深青绿 `--data-cyan-deep`，**不用茶绿**）；气泡流 + citation + thinking pill；底部输入区含 agent 切换 chip + AI 渐变发送键。 |
| **AI 任务进度页** | 灵动岛 `.live`；进度环（渐变 + 青光）+ "AI WORKING X%"；步骤列表（✓ 茶绿 / pulse-dot 进行中 / 空心 QUEUED）+ 操作按钮。 |
| **AIGC 产出页** | 顶部分类 tab（大写）；产出物网格（渐变 + AI tag）；多平台发布行 + 批量操作。 |
| **设置 / 个人页** | 渐变头卡（头像 + 等级角标）+ 多栏统计 + 设置列表（未读砖红角标 + 版本 `.mb`）+ Sign out `.btn-ghost`。 |

---

### 7.5 页面布局决策表（裁决 · 唯一信源）

> **优先级最高**：当 §6 组件与 §7.4 原型对同一页型的"头部 / 状态栏 / 功能入口"描述不一致时，**以本表为准**。本表只裁决"用哪套**布局模式**"（方向），不约束具体字号/间距/构图（那是创作自由，见 §1 约束分级）。

| 页型 | 头部 | 状态栏 | 功能入口承载 |
|---|---|---|---|
| 数据/概览首屏（工作台 / 经营 / 增长 Tab） | 满幅**橙** Hero（§6.2） | 沉浸态·白 | 便当宫格 |
| **账户/个人首屏（我的 Tab）** | 满幅**深色** Hero（深棕→暖橙，§6.2 变体） | 沉浸态·白 | 列表（带右值：余额/状态/箭头） |
| 实体主页（门店/资料） | 深色头卡 + ★评分/徽章 | 沉浸态·白 | 2×2 卡 + Quick actions 列表 |
| 资金/数值页 | `.dark-card` 余额卡 | 常规态·深墨（若上方非满幅深底） | 明细列表 |
| 认证/引导页 | 居中 Logo（无 Hero） | 常规态·深墨 | — |
| **二级页**（设置子页/表单/详情/AI 对话/AI 进度/AIGC） | `navbar`（返回 + 标题） | 常规态·深墨 | 列表 / 表单 |

**配套裁决（消除散述冲突）**：
1. **「设置/个人页」拆为两层**：账户**首页**（我的 Tab 落地）= 满幅深色 Hero（顶层）；账号信息 / 改名 / 语言等**设置子页** = `navbar` 二级页。§7.4 原"设置/个人页 = 渐变头卡"仅指**首页头部**，子页不套头卡。
2. **状态栏判据 = "顶部是否深底"**（非"是否 Hero"）：橙 Hero / 深色 Hero / 深色头卡 → 沉浸态白字；米纸/浅色顶 → 常规态深墨。
3. **"头卡"统一定义** = `.dark-card`（深棕→暖橙渐变 + 白/`--bg` 字）；"渐变头卡"即其**满幅 Hero 形态**；浅色"渐变卡"(`--bg-card→--accent-soft`) 仅作营收等内容卡、不作头部。
4. **功能入口选择**：并列同级、无右值 → **便当宫格**；带右值（余额/状态/箭头）或线性条目 → **列表**。

---

## 8. 状态与交互

| 元素 | 状态 | 表现 |
|------|------|------|
| btn-primary | hover/按下 | 背景 `--accent` → `--accent-deep`；可加轻微下沉 |
| btn-primary | loading | 文字替换为脉冲点 / spinner，禁用点击 |
| btn-primary | disabled | 背景降饱和或 `--ink-4`，文字 60% 透明 |
| chip | 选中 | 默认 → `.active`（`--ink` 底反白） |
| 输入框 | focus | 描边 `--line` → `--accent`，1px |
| 输入框 | error | 描边 `--data-warn`，下方砖红提示文字 |
| AI 元素 | 运算中 | 叠加 `scan` 扫描线（青色图形）+ `pulse-ai` + 计时文字 |
| 列表项 / 便当卡 | 点击 | 整行底色轻微变深 / 便当卡 `translateY(1px)` |
| tab | 切换 | 图标/文字 `--ink-3` → `--accent-deep` 600（≥4.67:1） |

---

## 9. 动效

| 名称 | 触发 | 描述 | 时长 | 缓动 |
|------|------|------|------|------|
| `pulse-ai` | AI 元素常驻 | box-shadow 光环从 `--ai-glow` 向外扩散至透明 | 1.6–1.8s | ease, infinite |
| `scan` | "AI 运算中"卡片 | 青色渐变扫描线从顶部扫到底部 | 2.6s | ease-in-out, infinite |
| 进度环填充 | 任务进度更新 | stroke-dashoffset 过渡 | 0.6s | ease-out |
| 灵动岛活跃点 | AI 在后台工作 | `pulse-ai` 同款 | 1.8s | ease, infinite |
| 页面/卡片入场（建议） | 进入屏幕 | 透明度 0→1 + 上移 8px | 0.3s | ease-out |

```css
@keyframes pulse-ai {
  0%   { box-shadow: 0 0 0 0 var(--ai-glow); }
  70%  { box-shadow: 0 0 0 7px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
@keyframes scan {
  0%   { top: -36px; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
```

---

## 10. 边界情况

| 场景 | 处理 |
|------|------|
| **空状态** | 米纸底 + 居中淡色插画/图标（`--ink-4`）+ 一句引导 + 单个 CTA；AI 相关空态可用渐变图标暗示"让 AI 帮你开始" |
| **加载中** | 数据类用骨架屏（`--bg-card` 块）；AI 类用 `thinking pill` + `scan` 扫描 |
| **错误态** | 砖红 `--data-warn` 描边/文字 + 重试 ghost 按钮，**不用大红铺底** |
| **长文本** | 标题单行省略号；金额永远完整不截断（`tabular-nums` 保证对齐） |
| **超长数据** | 大额数字超 6 位换行或缩小一级字号，保留货币前缀 `AED` |
| **慢网络** | 先渲染骨架 + 缓存的上次数据，AI 回答流式逐字出现 |
| **缺数据** | 显示 `—`（`--ink-4`）而非 0，避免误读 |

---

## 11. 无障碍

> 计算依据：WCAG 2.1 相对亮度公式（HEX→线性化→L=0.2126R+0.7152G+0.0722B）。下表为**强制配色规则**——按此即达标。

| 前景 / 背景 | 对比度 | 判定 | 规则 |
|------------|--------|------|------|
| **深墨 `#3A2418` / 暖橙 `#E68534`** | **5.37:1** | ✅ AA | ✔ CTA / 用户气泡填充的唯一标准组合 |
| **暖橙文字 `#A85A40`(accent-deep) / 米纸** | **4.67:1** | ✅ AA | ✔ 强调文字 / 链接 / 激活 tab / 线性图标的唯一标准色 |
| `#A85A40` / 米纸卡 `#F3EEE4` | ~4.5:1 | ✅ AA | 卡内强调文字达标 |
| **深墨 `#3A2418` / AI 渐变** | **4.41–7.64:1** | ✅ AA | ✔ AI 渐变底文字图标的唯一标准组合（全段达标） |
| **深青绿 `#0A6E7E` / 青色浅底** | **~5.4:1** | ✅ AA | ✔ thinking pill / LIVE·ONLINE / 青色计时文字唯一标准色 |
| **白字 `#fff` / Hero 渐变浅端 `#B85B18`** | **4.62:1** | ✅ AA | ✔ **Hero 沉浸区白字下限**（含 10–11px 小标签全部达标） |
| **白字 `#fff` / Hero 渐变深端 `#93420F`** | **6.94:1** | ✅ AAA | Hero 底部白字 |
| **白字 `#fff` / 深色 Hero 文字区（`#3A2418`~`#693B2A`）** | **≈7–13:1** | ✅ AAA | ✔ 深色 Hero（我的等）白字；白字落深端，浅端 `#A85A40` 不承文字 |
| `#B65814` / 白（Hero 头像字） | 4.78:1 | ✅ AA | Hero 头像字母 |
| ~~白字 / Hero 旧渐变 `#F2B073`~~ | 1.87:1 | ❌ 废弃 | **已整改**：原浅橙白字不达标，渐变整体加深至 `#B85B18→#93420F` |
| ~~白字 / 暖橙 `#E68534`~~ | 2.70:1 | ❌ 禁用 | 暖橙底配白字不达标（纸面区/按钮永不白字） |
| ~~暖橙文字 `#E68534` / 米纸~~ | 2.52:1 | ❌ 禁用 | 暖橙作前景一律降为 `#A85A40` |
| ~~白字 / AI 渐变~~ | 1.91–3.28:1 | ❌ 禁用 | 渐变底配白字全段不达标，一律改深墨 `#3A2418` |
| ~~青字 `#00D4FF` / 浅底~~ | 1.65–1.77:1 | ❌ 禁用 | `#00D4FF` 仅作图形；文字一律 `--data-cyan-deep` |
| `--ink-3 #8A867D` / 米纸 | 3.40:1 | ⚠️ 仅大字 | 正文用 `--ink`/`--ink-2`；ink-3 限标签/装饰/副标题 |
| `--ink #3A2418` / 米纸 | ~12:1 | ✅ 优秀 | 正文首选 |
| `--data-trust #2A7E3B` / 米纸卡 | ~4.8:1 | ✅ AA | 可用于文字 |

**其它要点**：
- 触控目标 ≥ 44×44px（iOS HIG）；tab/管家浮球/按钮/Hero 菜单键均须满足。
- Hero 白字一律**实心 `#fff`**，层级靠字重——**禁用低透明度白字**（半透明仅留给非文字分割线 `--hero-line`）。
- AI 渐变元素需配文字/图标标签，不可仅靠颜色区分（色盲友好）。
- citation/thinking/LIVE 等语义须同时有文字（`POS`/`ONLINE`），不依赖纯色。
- 焦点顺序遵循视觉自上而下、自左而右；表单按 STEP 顺序。
- 动效尊重 `prefers-reduced-motion`：关闭 `pulse-ai`/`scan`，保留静态渐变。

---

## 12. 深色模式（Obsidian）

> 色彩语义与亮色一一对应。

| Token | 亮色 | 暗色（Obsidian） |
|-------|------|------------------|
| `--bg` | `#FAF7F0` | `#0F1014` |
| `--bg-card` | `#F3EEE4` | `#1A1C20` |
| `--bg-icon` | `#F6E7D6` | `#24262B` |
| `--ink` | `#3A2418` | `#FFFFFF` |
| `--ink-2` | `#6B5346` | `#B3B3B3` |
| `--ink-3` | `#8A867D` | `#888888` |
| `--ink-4` | `#A89B8C` | `#5A5C62` |
| `--line` | `#E8DDC9` | `#2E3036` |
| `--line-soft` | `#F2EEE3` | `#24262B` |
| `--line-strong` | `#3A2418` | `#FFFFFF` |
| `--accent` | `#E68534` | `#F5B342`（提亮） |
| `--accent-deep` | `#A85A40` | `#D4942A` |
| `--accent-soft` | `#FAF3E8` | `#2A2620` |
| `--cta-text` | `#3A2418` | `#1A1A1A`（仍深字，永不白字） |
| `--hero-gradient` | `#B85B18→#93420F` | `linear-gradient(160deg,#A85214,#6E300A)`（暗底再压一档，白字 ≥6:1） |
| `--data-trust` | `#2A7E3B` | `#34D399` |
| `--data-warn` | `#B0464A` | `#FF5773` |
| `--data-info` | `#3A6B8A` | `#5B9BD5` |
| `--data-gold` | `#C9A24E` | `#E0BC6A` |
| `--data-cyan` | `#00D4FF` | `#00D4FF`（两模式一致） |
| `--ai-gradient` | 暖橙阶 | `linear-gradient(135deg,#4285F4,#00D4FF,#9168C0)`（暗色转冷调更出彩） |
| `--ai-glow` | `rgba(230,133,52,0.4)` | `rgba(0,212,255,0.45)` |

**暗色注意**：
- AI 渐变在暗色切换为冷调（蓝青紫），与亮色暖调是**有意区分**——暗背景下冷色 AI 微光科技感更强（仅此一处冷暖差异，亮色 AI 触点仍全暖橙）。
- `--cta-text` 亮暗两态都是深字（亮 `#3A2418` / 暗 `#1A1A1A`），暖橙底永不配白字。
- 未列出的 token（`--ai-solid`/`--ai-gradient-90`/各 `--space-*`/`--radius-*`/阴影几何）**暗色沿用亮色**；阴影在暗底可酌情加深 alpha。

---

## 13. 演示外壳（设备 Mockup）

> "页面怎么被框起来展示"的标准，**不属于 App 内 UI**。原则：纯白背景 + 整机居中 + 拟真钛金 iPhone 15 Pro Max 边框。本节为 v2.0 采纳 Bento Pro 的演示外壳规格，**取代**旧规范的 `--radius-phone`（外框 50 / 屏 44）。

### 13.1 舞台（页面外层）

纯白底 `#FFFFFF`，设备水平垂直居中，四周留白 24：

```css
html, body { height: 100%; }
body { margin: 0; min-height: 100dvh; display: flex; align-items: center; justify-content: center;
  background: #ffffff; padding: 24px; box-sizing: border-box; }
```

### 13.2 设备框 · iPhone 15 Pro Max

逻辑屏 **430 × 932**（19.5:9）；屏圆角 **65**；黑圈 bezel **3**；钛金外框 frame **8**；整机圆角 **76**。

```css
.device { --screen-w: 430px; --screen-h: 932px; --bezel: 3px; --frame: 8px;
  position: relative;
  width: calc(var(--screen-w) + 2*(var(--bezel) + var(--frame)));    /* 452 */
  height: calc(var(--screen-h) + 2*(var(--bezel) + var(--frame)));   /* 954 */
  border-radius: 76px; padding: var(--frame);
  background: linear-gradient(145deg, #6f6a64 0%, #b9b3aa 18%, #8d877f 32%, #5c5852 50%, #9a948b 68%, #c4beb4 82%, #726d66 100%); /* 钛金 */
  box-shadow: 0 2px 4px rgba(255,255,255,.25) inset, 0 0 0 1px rgba(0,0,0,.35),
    0 30px 70px -20px rgba(0,0,0,.85), 0 12px 30px -12px rgba(0,0,0,.7); }
.bezel { width: 100%; height: 100%; background: #050505; border-radius: 68px;
  padding: var(--bezel); box-sizing: border-box; box-shadow: 0 0 0 1px rgba(0,0,0,.9) inset; }
.screen { position: relative; width: var(--screen-w); height: var(--screen-h);
  border-radius: 65px; overflow: hidden; }
/* 钛金侧键 */
.btn { position: absolute; background: linear-gradient(180deg, #8d877f, #5c5852 50%, #8d877f);
  box-shadow: -1px 0 1px rgba(0,0,0,.4) inset, 0 0 2px rgba(0,0,0,.4); }
.btn-power  { right: -2px; top: 232px; width: 4px; height: 110px; border-radius: 0 3px 3px 0; }
.btn-action { left: -2px; top: 170px; width: 4px; height: 36px;  border-radius: 3px 0 0 3px; }
.btn-volup  { left: -2px; top: 238px; width: 4px; height: 66px;  border-radius: 3px 0 0 3px; }
.btn-voldn  { left: -2px; top: 320px; width: 4px; height: 66px;  border-radius: 3px 0 0 3px; }
```

DOM 结构：`.device > (.btn ×4) + .bezel > .screen > 屏内内容`。

### 13.3 响应式缩放（矮屏自适应，保证整机可见）

```css
@media (max-height: 1010px) { .device { transform: scale(.85); } }
@media (max-height: 880px)  { .device { transform: scale(.72); } }
@media (max-height: 740px)  { .device { transform: scale(.6);  } }
@media (max-height: 620px)  { .device { transform: scale(.5);  } }
```
> 说明：`scale()` 仅为**演示层适配**，不改变 App 内逻辑分辨率 430×932（旧稿"432 / zoom 0.85"为笔误，已废）。

### 13.4 屏内系统件

- 状态栏：`padding: 16px 28px 8px`；Hero 页白字（§6.1 沉浸态）。
- 灵动岛：**125 × 36**，纯黑，圆角 full，距顶 12，水平居中（物理挖孔，**恒为黑**）。
- Home 指示条：宽 1/3、高 ≈4、圆角 full、`opacity .6`，底部居中。

---

## 附录 A：备用品牌皮肤

> 同结构、换色板，供活动/区域差异化。仅替换色彩 token，组件与布局不变。

**Tone B · Crimson Plasma（红等离子）**：`--accent #C8392E` / `--accent-deep #9F2B22` / `--bg #FAF9F5` / `--bg-card #FFF1E8` / AI 渐变 `linear-gradient(135deg,#FF6A00,#7B61FF 55%,#00D4FF)`。气质更冲、更"科技/年轻"。

**Tone D · Oasis Emerald（绿洲翠 · 完全 GCC 本地）**：`--accent #1F6F54` / `--accent-deep #16543F` / `--bg #F3EEE3` / `--data-gold #D4AF37` / `--data-trust #0E7C86` / AI 渐变 `linear-gradient(135deg,#1F6F54,#D4AF37 55%,#00D4FF)`。气质沉稳、本地化、清真友好。

> 注：采用备用皮肤时，Hero 渐变须同步重算以保白字 ≥4.5:1。

---

## 附录 B：可直接粘贴的 CSS Token

```css
/* ───── NearBossAI · Warm Table × Bento Pro · v2.0 · 2026 ───── */
:root {
  /* 字体｜全局唯一 SF Pro（中文苹方） */
  --font: -apple-system, "SF Pro Display", "SF Pro Text", "SF Pro",
          system-ui, "PingFang SC", "Helvetica Neue", Arial, sans-serif;

  /* 主色系｜深棕 + 暖橙 */
  --ink:          #3A2418;  /* 主文字 / 深色卡片 */
  --ink-2:        #6B5346;  /* 次级文字（正文） */
  --ink-3:        #8A867D;  /* 弱提示 / 副标题（仅大字/装饰） */
  --ink-4:        #A89B8C;  /* 占位 / 禁用 / 箭头 */
  --accent:       #E68534;  /* 暖橙品牌色 · 填充底，其上配 --ink 深墨字（5.37:1）。不作文字色 */
  --accent-deep:  #A85A40;  /* 暖橙强调文字/链接/激活tab/线性图标（米纸4.67:1） */
  --accent-soft:  #FAF3E8;  /* 暖橙浅底 */
  --cta-text:     #3A2418;  /* 橙底/渐变底上的文字色（=ink，永不白字；暗色 #1A1A1A） */

  /* 背景系｜四级暖色层次（纸面卡禁纯白） */
  --bg:           #FAF7F0;  /* ② 纸面板 · 主背景 / sheet（不可换纯白） */
  --bg-card:      #F3EEE4;  /* ③ 米纸卡（取代旧白卡，含 AI 气泡/输入框/进度卡） */
  --bg-icon:      #F6E7D6;  /* ④ 图标块（最暖） */
  --line:         #E8DDC9;  /* 分割描边 1px */
  --line-soft:    #F2EEE3;  /* 列表内分割 */
  --line-strong:  #3A2418;  /* 强分割 */

  /* Hero 沉浸区（白字唯一合规区，渐变已加深保 ≥4.5:1） */
  --hero-gradient: linear-gradient(160deg, #B85B18 0%, #93420F 100%);
  --hero-text:    #FFFFFF;  /* Hero 文字（实心，禁低透明度） */
  --hero-line:    rgba(255,255,255,0.3);  /* Hero 非文字分割线 */
  --hero-avatar-text: #B65814;  /* Hero 白底头像字母（4.78:1） */

  /* AI 渐变｜仅 AI 触点 */
  --ai-gradient:  linear-gradient(135deg, #FFAA00 0%, #F69B13 17%, #EE8F24 33%, #E68534 50%, #DD7F42 67%, #D47A50 83%, #CC785C 100%);
  --ai-gradient-90: linear-gradient(90deg, #FFAA00 0%, #F69B13 17%, #EE8F24 33%, #E68534 50%, #DD7F42 67%, #D47A50 83%, #CC785C 100%);
  --ai-solid:     #EE8F24;  /* 渐变回退纯色：渐变不可用 / 纯色描边图标 / 降级 */
  --ai-glow:      rgba(230,133,52,0.4);

  /* 数据辅色｜与主色独立 */
  --data-trust:   #2A7E3B;  /* 茶绿 · 引用/来源/完成/增长 */
  --data-trust-soft: #E5F4E9;
  --data-warn:    #B0464A;  /* 砖红 · 警示/异常/下跌 */
  --data-info:    #3A6B8A;  /* 钢蓝 · 中性信息 */
  --data-gold:    #C9A24E;  /* 旧金 · 余额/会员/星级 */
  --data-cyan:    #00D4FF;  /* 青 · 实时/扫描/峰值/AI运算（仅图形/光晕/描边，不作文字） */
  --data-cyan-deep: #0A6E7E; /* 深青绿 · 青色语义可读文字，浅底≥5.4:1 */

  /* 阴影 & 光晕 */
  --shadow:        rgba(58,36,24,0.18);
  --shadow-card:   0 2px 10px rgba(58,36,24,0.05);   /* 米纸卡极轻投影 */
  --cta-shadow:    rgba(204,120,92,0.32);
  --shadow-btn:    0 4px 14px var(--cta-shadow), inset 0 0 0 1px rgba(255,255,255,0.06);
  --shadow-input:  0 4px 16px var(--shadow), inset 0 0 0 1px rgba(0,212,255,0.08);
  --shadow-glow-ai: 0 0 12px var(--ai-glow);
  --glow-cyan:     inset 0 0 0 1px #00D4FF, 0 0 20px rgba(0,212,255,0.12);

  /* 间距｜4pt 基准 */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px;

  /* 圆角 */
  --radius-card: 16px; --radius-sheet: 20px; --radius-btn: 14px; --radius-input: 18px;
  --radius-chip: 10px; --radius-badge: 6px; --radius-pill: 999px; --radius-full: 50%;
  /* 设备框圆角（屏65/外框76 等）见 §13，属演示外壳规格，不入 :root */
}
```

---

## 附录 C：还原检查清单

> Agent 完成还原后逐项自检，全部 ✅ 才算"精准还原"。

**字体**
- [ ] 全局唯一 SF Pro（中文苹方）；**无 IBM Plex Mono / 衬线残留**
- [ ] 所有金额/数据/时间加 `tabular-nums`
- [ ] 大写技术/状态标签靠字距（0.04–0.16em）区分

**色彩 & 层次**
- [ ] 纸面背景米纸 `#FAF7F0`；**卡片一律 `#F3EEE4`，无纯白卡**
- [ ] 四级层次清晰：橙 Hero → 面板 `#FAF7F0` → 卡 `#F3EEE4` → 图标块 `#F6E7D6`
- [ ] 暖橙 `#E68534` 只作填充底，**绝不作文字色**；填充上文字用深墨 `#3A2418`
- [ ] 强调文字/链接/激活 tab/线性图标用 `--accent-deep #A85A40`
- [ ] AI 触点用暖橙渐变，渐变底文字配深墨，**绝不白字**
- [ ] 青 `#00D4FF` 仅作图形；青色文字一律 `--data-cyan-deep #0A6E7E`

**Hero 沉浸区**
- [ ] Hero 渐变为加深值 `#B85B18→#93420F`（**非**旧 `#F2B073→#CF7326`）
- [ ] Hero 文字实心白 `#fff`，**无低透明度白字**；白字全段 ≥4.5:1
- [ ] 状态栏沉浸态白字浮于橙上；灵动岛恒黑
- [ ] 纸面区/便当卡/正文/按钮**无任何白字**

**几何**
- [ ] 卡片/便当卡圆角 16px；上浮面板顶部 20px
- [ ] 屏幕左右边距 16px，4pt 间距体系；便当网格 gap 16px
- [ ] 逻辑分辨率 430×932（无 432/zoom 残留）

**AI 风格**
- [ ] AI 头像/徽章/发送键带渐变 + 光晕
- [ ] "AI 运算中"有 scan + pulse + 计时文字
- [ ] citation（茶绿）+ thinking pill（深青绿字）；**仅用于 AI 对话/任务进度页**

**演示外壳**
- [ ] 纯白居中舞台 + 钛金 iPhone 15 Pro Max（430×932 / 屏圆角 65）边框

**无障碍**
- [ ] 无「白字/暖橙底」「暖橙文字/米纸」「白字/AI渐变」「`#00D4FF` 作文字」组合
- [ ] 正文用 `--ink`/`--ink-2`，不用 `--ink-3`；触控 ≥44px

---

## 附录 D：变更记录 & 审批

### v2.0 · 2026-06-12（两规范融合）

将 `The Warm Table v1.6`（canonical 基座）与 `便当满幅版 Bento Pro v1.0`（第 8 套选定视觉语言）融合为单一规范，并裁定全部逻辑冲突。**四项核心裁定**（经审批）：

- **决策 A · 字体统一 SF Pro**：弃用 IBM Plex Mono / Source Serif（原铁律 5「一律 Mono」与 Bento 禁止项「禁 Mono」互斥）。全局唯一 SF Pro，数字 `tabular-nums`，大写标签靠字距。`label-mono` 更名 `label-caps`；§3/§6 全部 mono 引用改 SF Pro。
- **决策 B · 保留满幅 Hero 白字 + 修复对比度（R1）**：保留 Bento 的满幅橙 Hero 沉浸区与白字承载核心数据，但**渐变由 `#F2B073→#CF7326` 加深为 `#B85B18→#93420F`**。实算（WCAG 2.1）：旧渐变白字仅 1.87–3.42:1（浅端不达标），新渐变白字 **4.62–6.94:1 全段 ≥AA**。同时废除 Bento 的低透明度白字（.74/.82），Hero 文字一律实心 `#fff`，层级靠字重。橙底按钮即使在 Hero 内仍配深墨字（铁律 2）。
- **决策 C · 产品名 NearBossAI**：原 Warm Table 标题为 NearBossAI、文件名与 Bento 为 NearShop Pocket，统一为 **NearBossAI**。
- **决策 D · 四级暖色卡片层次**：纯白卡退役（原铁律「卡片白」与 Bento「禁纯白卡」互斥）。采纳 `橙 Hero → 纸面板 #FAF7F0 → 米纸卡 #F3EEE4 → 图标块 #F6E7D6`。纯白仅留给演示舞台/Hero 头像底/Hero 白字。

**机械化归并（🟡 软冲突）**：
- **Token 去重**：旧 `--bg-muted #F2EEE3` 与 Bento 卡 `#F3EEE4` 肉眼不可分 → 卡面统一 `--bg-card #F3EEE4`，`#F2EEE3` 降为 `--line-soft`；Bento 卡边 `#E4DBC8` 并入 `--line #E8DDC9`。
- **圆角**：卡片统一 16px（守 rounded-2xl 全局规则；Bento 原 20px 收敛），新增 `--radius-sheet 20px` 仅用于上浮面板顶缘。
- **间距**：Bento 的 14/18/22px 归一到 4pt（gap 16、overlap -20）。
- **分辨率**：统一 430×932；Bento 自相矛盾的"432 / zoom 0.85"判为笔误废除，`scale()` 明确仅作演示层适配。
- **演示外壳**：新增 §13，采纳 Bento 钛金 mockup（屏圆角 65），**取代**旧 `--radius-phone`（屏 44）。
- **AI 触点体系**：全量保留 Warm Table（渐变/青色/citation/thinking/管家浮球/灵动岛态/暗色冷调）——Bento 首页置于其 4-Tab + 管家浮球外壳之内，无冲突。

> 继承 Warm Table v1.1–v1.6 的全部无障碍硬化结论（深墨/暖橙 5.37、accent-deep 4.67、青字禁用、渐变底深墨等），叠加本版 Hero 白字对比度修复，**所有配色组合均经 WCAG 2.1 实算达标**。

### 历史版本（继承自 The Warm Table）

- **v1.6**：信息架构与流程逻辑合规收口（灵动岛三态、日报趋势图、套餐名裁决；P0/P1 修复）。
- **v1.5**：去网格底纹 + 间距分档（相邻卡片 16px 节奏）。
- **v1.4**：内部一致性二次审计（`--cta-text` 闭环、FAB 术语清理、ONLINE 用色对齐青色语义）。
- **v1.3**：4 Tab + 电子管家浮球，移除 Ask AI FAB。
- **v1.2**：还原测试反查对比度硬缺陷（AI 渐变底白字、青字 `#00D4FF`、可信度组件场景边界）。
- **v1.1**：一致性审核 + 范围解绑（升级为全产品通用设计系统）。

### 审批结论

✅ **批准（Approved · v2.0）** —— 两规范融合，四项核心冲突经审批裁定，全部软冲突机械归并，新增 Hero 白字对比度实算修复，可作为 NearBossAI 全产品 canonical 设计规范交付。

---

## 附录 E：类名映射（便于落地）

| 模块 | 类名 |
|---|---|
| 根容器 | `.bp` |
| 满幅 Hero | `.bp-hero` / 顶行 `.bp-top`（`.av`/`.hi`/`.menu`） / 数据 `.bp-data`（`.lab`/`.amt`/`.cur`/`.chip`/`.dim`） / 读数 `.bp-reads .r`（`.k`/`.v`） |
| 上浮面板 | `.bp-sheet` |
| 分类 Tab | `.bp-tabs a`（`.on`） |
| 便当网格/卡 | `.bp-grid` / `.bp-card`（`.ic` 图标块 / `.tx` / `.t` 标题 / `.d` 副标 / `.badge` AI 徽标） |
| 进度卡 | `.bp-prog`（`.bar`/`.legend`/`.go`） |
| 卡片 / AI 气泡 | `.card`（`.glow`/`.dark-card`） / `.bub-ai` / `.bub-user` / `.citation` / `.thinking` |
| AI 锚点 | 电子管家浮球（全局常驻） |
| 底部导航 | 4 Tab（工作台/经营/增长/我的，无 FAB） |
| 沉浸状态栏 | `.screen .statusbar`（页级覆盖，白字） |
| 演示外壳 | `body`（纯白居中）/ `.device`（钛金框）/ `.bezel`（黑圈）/ `.screen`（屏）/ `.btn-power`/`.btn-action`/`.btn-volup`/`.btn-voldn`（侧键） |

---

*规范版本 v2.0 · The Warm Table v1.6 × Bento Pro v1.0 融合 · 审批于 2026-06-12*
