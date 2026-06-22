# AGENTS.md — NearGo 官网重构项目

> 本文件供 **Codex / 任何 AI 编码代理** 直接接管本项目。请在动手前完整读一遍，尤其是「运行模式」「图像生成」「护栏」三节。

---

## 1. 任务目标

从零重构 NearGo 官网 **https://neargo.ai/**。

- 当前目录是**全新空项目**（无 git、无源码），技术栈待定，由你在 §5 工作流中与用户确认后选定。
- 交付物：一个生产级、视觉精致、响应式的官网前端（落地页 + 必要子页）。标准是 **stunning，不是 functional**。
- 涉及大量**图片生成**（Hero 图、产品图、图标、信息图等），这是本项目选择由 Codex 接管的主要原因。

### 品牌背景（NearGo）

NearGo 是一家 **fintech 公司**，业务覆盖：POS、线上支付、卡支付、清算（settlement）、对账（reconciliation）、**Web3 支付**。

> ⚠️ **不要凭记忆编造 NearGo 的产品、功能、文案或数据。** 任何具体产品/功能/版本/合作方信息，先用联网搜索或抓取现有 https://neargo.ai/ 核实，拿不准就问用户。这是硬性要求（见 §6 护栏）。

---

## 2. 项目结构

```
Offical_WebSite/
├── AGENTS.md            ← 本文件
├── skills-lock.json     ← 已安装技能的锁定清单
└── .agents/skills/      ← 5 个通用格式技能（Codex / Gemini / Amp 等均可读取）
    ├── web-design-engineer/      ← 建官网用这个
    ├── gpt-image-2/              ← 生成图片用这个
    ├── beautiful-article/        ← 长文/图文页（可选）
    ├── kb-retriever/             ← 本地知识库检索（可选）
    └── web-video-presentation/   ← 网页视频式演示（可选）
```

源码、`package.json`、git 仓库等都还**不存在**，需要你创建。建议第一步 `git init`。

---

## 3. 可用技能（Skills）

技能是「带流程和参考资料的能力包」。每个目录下有 `SKILL.md`（主入口）、`references/`（模板库）、`scripts/`（可执行脚本）。**使用某技能前，先读它的 `SKILL.md`。**

| 技能 | 路径 | 何时用 |
|------|------|--------|
| **web-design-engineer** | `.agents/skills/web-design-engineer/SKILL.md` | **主力**：构建页面/落地页/原型，含 25 套设计风格配方 |
| **gpt-image-2** | `.agents/skills/gpt-image-2/SKILL.md` | **图像生成/编辑**，18 大类 80+ 提示词模板 |
| beautiful-article | `.agents/skills/beautiful-article/SKILL.md` | 把素材做成可分享的单文件 HTML 长文 |
| kb-retriever | `.agents/skills/kb-retriever/SKILL.md` | 从本地知识库目录检索问答 |
| web-video-presentation | `.agents/skills/web-video-presentation/SKILL.md` | 把文稿做成点击驱动的网页视频演示 |

来源仓库：https://github.com/ConardLi/garden-skills （`npx skills add ConardLi/garden-skills` 安装）。

---

## 4. 图像生成（重点 —— 接管 Codex 的核心配置）

`gpt-image-2` 技能有 3 种运行模式。**动手前先跑探测脚本确定模式：**

```bash
node .agents/skills/gpt-image-2/scripts/check-mode.js --json
```

| 模式 | 触发条件 | 行为 |
|------|----------|------|
| **A · 本地生图** | `ENABLE_GARDEN_IMAGEGEN=1` **且** 有 `OPENAI_API_KEY` | 跑 `scripts/generate.js` / `edit.js`，直接出图落盘。**本项目推荐走这条。** |
| **B · 委托宿主** | 未启用 Garden，但 Codex 自带原生图像工具 | 技能只负责写 prompt，出图交给宿主工具 |
| **C · 纯顾问** | 都没有 | 只输出高质量 prompt，由用户自行执行出图 |

### 启用 Mode A（推荐）

在项目根创建 `.env`（**不要提交到 git**，见 §6），写入：

```bash
ENABLE_GARDEN_IMAGEGEN=1
OPENAI_API_KEY=sk-...                      # 必填
OPENAI_BASE_URL=https://api.openai.com/v1  # 可选，默认即此；可指向兼容网关
OPENAI_IMAGE_MODEL=gpt-image-2             # 可选，默认 gpt-image-2，可换 gpt-image-1 / dall-e-3
```

> 配置读取优先级：CLI 参数 > `process.env` > `<cwd>/.env` > `<cwd>/.gateway.env` > `~/.gateway.env`。
> 若 Mode A 调用失败（401 / 网络 / 配额），停下来报错并问用户是否切到 B/C，**不要假装出图成功**。

生成的 prompt 默认落到 `garden-gpt-image-2/prompt/`，图片落到 `garden-gpt-image-2/image/`。

### 出图流程

1. 在 `gpt-image-2/references/` 选模板（如 `poster-and-campaigns/`、`ui-mockups/`、`product-visuals/`、`branding-and-packaging/`）。
2. 填字段、渲染最终 prompt。
3. Mode A → `node .agents/skills/gpt-image-2/scripts/generate.js ...`（具体参数见该脚本与 `SKILL.md`）。
4. 把产出图片接入网站资源目录（如 `public/` / `assets/`）。

> **本项目实际采用 Google Gemini 出图**（用户提供 Gemini key，非 OpenAI）。脚本：`scripts/gen-image.mjs`，读取 `.env.local` 的 `GEMINI_API_KEY`，调用 `gemini-2.5-flash-image`（Nano Banana），输出到 `public/generated/`。
> 用法：`node scripts/gen-image.mjs --out nearshop.png --aspect 4:3 --prompt "..."`。更高质量可换 `--model gemini-3-pro-image`。所有图 prompt 须带暖色品牌约束（米纸 #FAF7F0 / 深棕 / 暖橙 #E68534）+ `no text, no logos`。产品图为 AI 生成占位，**有真实产品截图后应替换**。

---

## 5. 建议工作流

1. **现状调研**：抓取并分析现有 https://neargo.ai/（结构、内容、品牌色、字体、信息架构）。核实 NearGo 真实产品信息。
2. **对齐方向**：读 `web-design-engineer/SKILL.md`，结合 NearGo fintech 调性，向用户确认：技术栈、设计风格、页面清单、品牌色/字体。
3. **搭骨架**：`git init` → 初始化项目（框架由 §2 步骤 2 确定）→ 建立设计系统（色板、字体、间距、组件）。
4. **逐页构建**：用 `web-design-engineer` 的风格配方逐页实现，保持品牌一致性。
5. **配图**：用 `gpt-image-2`（Mode A）按页面需要生成 Hero / 产品 / 图标 / 信息图，接入页面。
6. **自检**：响应式、可访问性、性能、跨浏览器；本地起服务截图验收。

---

## 6. 护栏（Hard Rules）

- **先核实再断言**：涉及具体产品/SDK/版本/2024 年后的信息，先联网搜索或抓取官网核实，禁止凭训练记忆下结论；拿不准就问用户。
- **金融合规口径**：NearGo 是支付/清算/Web3 fintech，文案与功能描述要保守、准确，不夸大、不杜撰合规资质或数据。
- **密钥安全**：`OPENAI_API_KEY` 等只放 `.env`；创建 `.gitignore` 并把 `.env`、`.gateway.env`、`garden-gpt-image-2/`、`node_modules/` 等排除，**绝不提交密钥**。
- **不破坏性操作**：删除/覆盖既有文件前先确认；本项目目前几乎为空，主要是新增。
- **如实汇报**：测试失败就说失败并附输出；跳过的步骤要讲明。
- **改动前先读对应技能的 `SKILL.md`**，不要凭技能名猜用法。

---

## 7. 快速命令速查

```bash
# 探测图像生成模式
node .agents/skills/gpt-image-2/scripts/check-mode.js --json

# 查看主力技能用法
cat .agents/skills/web-design-engineer/SKILL.md

# 查看图像模板分类
ls .agents/skills/gpt-image-2/references/

# 更新/重装技能
npx skills add ConardLi/garden-skills
```
