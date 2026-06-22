import type { Metadata } from "next";
import Link from "next/link";
import "./v2b.css";

export const metadata: Metadata = {
  title: "NearGo — v2b (Retro Arcade) | Reference",
  description:
    "A v2b reference redesign of the NearGo homepage in a retro pixel-arcade style — generated with the huashu-design roulette logic. Bold & playful. v1 unchanged.",
};

const SCORES = [
  { k: "PLATFORM", v: "1" },
  { k: "COUNTRIES", v: "20", sup: "+" },
  { k: "POPULATION", v: "500", sup: "M" },
  { k: "SHOPS", v: "10", sup: "M+" },
];

const LEVELS = [
  {
    lv: "l1", badge: "LEVEL 01 · NEARSHOP",
    title: "Run the whole shop",
    body: "An integrated system to streamline operations, reach wider audiences, and maximize market presence for business growth.",
    href: "/restaurants", img: "/generated/nearshop.png", alt: "POS in a modern restaurant",
  },
  {
    lv: "l2", badge: "LEVEL 02 · NEARPAY", flip: true,
    title: "Accept any payment",
    body: "Multi-scenario payments and international cards — PCI-certified, activated in 24 hours, settle with confidence.",
    href: "/payment", img: "/generated/nearpay.png", alt: "Handheld payment terminal",
  },
  {
    lv: "l3", badge: "LEVEL 03 · NEARBOSS",
    title: "AI store manager",
    body: "Orders, members, real-time reports and AI-assisted operations — your store in your pocket, 24/7.",
    href: "/download", img: "/generated/app-merchant.png", alt: "Owner reviewing sales on a tablet",
  },
];

export default function V2bPage() {
  return (
    <div className="v2b">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />

      <header className="hud">
        <div className="logo">NEAR<b>GO</b></div>
        <nav className="hud-menu">
          <Link href="/restaurants">NEARSHOP</Link>
          <Link href="/payment">NEARPAY</Link>
          <Link href="/pricing">PRICING</Link>
          <Link href="/download">DOWNLOAD</Link>
        </nav>
        <div className="credits">CREDITS · 20+</div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="tag">▸ INSERT BUSINESS · MENA EDITION</div>
          <h1 className="title">
            LEVEL UP YOUR <span className="hl">BUSINESS</span>
          </h1>
          <p className="sub">
            Connect with millions of local and international users — drive sales
            growth, customer loyalty, and business profit. One platform, three
            power-ups: NearShop, NearPay &amp; NearBoss.
          </p>
          <div className="hero-actions">
            <Link className="pbtn" href="/pricing">PRESS START</Link>
            <a className="pbtn alt" href="#level-01">VIEW LEVELS</a>
          </div>

          <div className="scores">
            {SCORES.map((s) => (
              <div className="score" key={s.k}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}{s.sup && <sup>{s.sup}</sup>}</div>
              </div>
            ))}
          </div>
        </section>

        {LEVELS.map((l, i) => (
          <section className={`level ${l.lv}${l.flip ? " flip" : ""}`} id={`level-0${i + 1}`} key={l.badge}>
            <div className="level-grid">
              <div className="ltext">
                <span className="badge">{l.badge}</span>
                <h2>{l.title}</h2>
                <p>{l.body}</p>
                <Link className="link" href={l.href}>▸ ENTER →</Link>
              </div>
              <div className="pframe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.img} alt={l.alt} loading="lazy" />
              </div>
            </div>
          </section>
        ))}

        <section className="coinbar">
          <div className="blink">INSERT COIN TO CONTINUE</div>
          <p>Kickstart your business growth now.</p>
          <a className="pbtn" href="mailto:hello@neargo.ai">CONTACT US</a>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap inner">
          <div>
            <div className="logo">NEAR<b>GO</b></div>
          </div>
          <div className="cols">
            <div>
              <h4>PRODUCTS</h4>
              <Link href="/restaurants">NearShop</Link>
              <Link href="/payment">NearPay</Link>
              <Link href="/download">NearBoss</Link>
            </div>
            <div>
              <h4>COMPANY</h4>
              <a href="mailto:hello@neargo.ai">Contact</a>
              <a href="#">About</a>
            </div>
            <div>
              <h4>LEGAL</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
