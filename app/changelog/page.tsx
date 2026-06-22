import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections";
import "./changelog.css";

export const metadata: Metadata = {
  title: "Changelog — NearGo Website",
  description: "Recent changes to the NearGo website project.",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="changelog">
        <div className="wrap">
          <div className="eyebrow">NearGo Official Website</div>
          <h1>Changelog</h1>
          <p className="sub">
            仓库{" "}
            <a href="https://github.com/19800818xyz/NearGo-Offical-website">
              19800818xyz/NearGo-Offical-website
            </a>{" "}
            · 基线 <code style={{ fontFamily: "var(--c-mono)" }}>ccc4cbf</code>（首次提交）
          </p>

          {/* COMMIT 1 */}
          <section className="commit">
            <div className="chead">
              <div className="badge">1</div>
              <div>
                <p className="ctitle">
                  用真实产品/应用图替换占位图（Download / 首页 / 定价）＋ POS 背景重绘为暖色
                </p>
                <div className="cmeta">
                  33ff5dd · 2026-06-22 16:44 · 8 files&nbsp;&nbsp;
                  <span className="plus">+42</span> <span className="minus">−16</span>
                </div>
              </div>
            </div>
            <div className="cbody">
              <div className="pt">
                <span className="dot" />① Download 页改用真实 App UI（<code>/download</code> + <code>/v2c/download</code>）
              </div>
              <p className="desc">
                把 AI 生成的生活照换成真实应用截图，并加 <code>fit</code> 字段（截图用 contain、照片用 cover），图片包进暖色「展台」面板。
              </p>
              <div className="diff">
                <div className="del">- image: &quot;/generated/app-customer.png&quot;   // NearGo 顾客端</div>
                <div className="add">+ image: &quot;/real/neargo-app.png&quot;  +  fit: &quot;contain&quot;</div>
                <div className="del">- image: &quot;/generated/app-merchant.png&quot;   // NearBoss 商家端</div>
                <div className="add">+ image: &quot;/real/nearboss-app.png&quot;  +  fit: &quot;contain&quot;</div>
                <div className="ctx">  NearRider 保留生活照 + fit: &quot;cover&quot;</div>
              </div>

              <div className="pt">
                <span className="dot" />② 首页 + 定价的 POS 图换成「暖色重绘版」（v1 &amp; v2c 共 4 处）
              </div>
              <p className="desc">原 POS 图是灰色影棚底，用 Gemini 图生图重绘成暖米色背景 + 柔光投影。</p>
              <div className="diff">
                <div className="del">- /real/nearshop-pos.png      （灰色影棚底）</div>
                <div className="add">+ /generated/nearshop-warm.png （暖米色背景）</div>
                <div className="ctx">  影响：components/products.tsx · app/pricing · app/v2c/page · app/v2c/pricing</div>
              </div>

              <div className="pt">
                <span className="dot" />③ 出图脚本支持「图生图」
              </div>
              <p className="desc">
                <code>scripts/gen-image.mjs</code> 新增 <code>--image</code> 入参，把输入图作为参考喂给 Gemini 编辑（本次用于重绘 POS 背景）。
              </p>

              <div className="effect">
                <b>页面效果：</b>Download 三卡变成「真实顾客端 App / 真实商家端 App / 骑手照」；首页与定价里的 POS 不再是灰底，而是暖色产品图，整站视觉统一。
              </div>

              <div className="stat">
                <div className="statrow"><span>app/download/page.tsx</span><span className="n"><span className="plus">+21</span> <span className="minus">−6</span></span></div>
                <div className="statrow"><span>app/v2c/download/page.tsx</span><span className="n"><span className="plus">+7</span> <span className="minus">−5</span></span></div>
                <div className="statrow"><span>scripts/gen-image.mjs</span><span className="n"><span className="plus">+10</span> <span className="minus">−1</span></span></div>
                <div className="statrow"><span>app/pricing · app/v2c/page · app/v2c/pricing · components/products</span><span className="n"><span className="plus">+4</span> <span className="minus">−4</span></span></div>
                <div className="statrow"><span>public/generated/nearshop-warm.png</span><span className="n">＋新增 (1.4 MB)</span></div>
              </div>
            </div>
          </section>

          {/* COMMIT 2 */}
          <section className="commit">
            <div className="chead">
              <div className="badge">2</div>
              <div>
                <p className="ctitle">裁掉 NearBoss 应用图的截图白边</p>
                <div className="cmeta">7edbf39 · 2026-06-22 16:53 · 1 file · 二进制图片</div>
              </div>
            </div>
            <div className="cbody">
              <div className="pt">
                <span className="dot" />去掉手机截图四周的白色背景边
              </div>
              <p className="desc">
                原图是带 iPhone 外框的截图，外框周围还有一圈白色截图背景，放到暖色卡上像个带白边的框。处理方式：从图片四周做泛洪填充，把外围白/浅灰背景（含投影）整片抠成<b>透明</b>，再裁切到手机本体——保留手机外框，去掉多余白边。
              </p>
              <div className="diff">
                <div className="ctx">  public/real/nearboss-app.png</div>
                <div className="del">- 459 × 921，不透明白底（带白色截图边）225 KB</div>
                <div className="add">+ 446 × 910，透明背景（白边已去除）   157 KB</div>
              </div>
              <div className="effect">
                <b>页面效果：</b>NearBoss 手机在暖色面板上干净悬浮，暖色透过透明区显示，不再有白色截图边框。改的是同一文件路径，<b>所有引用处同步生效</b>：v1/v2c 的首页 NearBoss 卡、Download 商家端卡、定价 Pro 方案 banner。
              </div>
              <div style={{ marginTop: 12 }}>
                <span className="tag">flood-fill → 透明</span>
                <span className="tag">tight crop</span>
                <span className="tag">无需改代码（同路径覆盖）</span>
              </div>
            </div>
          </section>

          <div className="total">
            两次提交均通过 <code>npx tsc --noEmit</code> 类型检查，并逐页浏览器截图确认 · 已推送至 origin/main
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
