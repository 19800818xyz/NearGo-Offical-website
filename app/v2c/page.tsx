import type { Metadata } from "next";
import Link from "next/link";
import "./v2c.css";

export const metadata: Metadata = {
  title: "NearGo — v2c (Stripe-style) | Reference",
  description:
    "A v2c reference redesign of the NearGo homepage anchored on Stripe's angled-gradient fintech aesthetic — generated with the huashu-design benchmark logic. v1 unchanged.",
};

const STATS = [
  { v: "1", k: "Unified platform" },
  { v: "20", sup: "+", k: "Countries · MENA" },
  { v: "500", sup: "M", k: "Population reach" },
  { v: "10", sup: "M+", k: "Shops live" },
];

const CARDS = [
  {
    name: "NearShop",
    title: "Run the whole shop",
    body: "An integrated system to streamline operations, reach wider audiences, and maximize market presence.",
    href: "/v2c/restaurants",
    img: "/real/nearshop-pos.png",
    fit: "cover" as const,
    alt: "The NearGo dual-screen POS device",
  },
  {
    name: "NearPay",
    title: "Accept any payment",
    body: "Multi-scenario payments and international cards — PCI-certified and activated in 24 hours.",
    href: "/v2c/payment",
    img: "/real/nearpay-device.png",
    fit: "cover" as const,
    alt: "A hand holding a NearGo payment terminal at checkout",
  },
  {
    name: "NearBoss",
    title: "An AI store manager",
    body: "Orders, members, real-time reports and AI-assisted operations — your store in your pocket.",
    href: "/v2c/download",
    img: "/real/nearboss-app.png",
    fit: "contain" as const,
    alt: "The NearBoss merchant app — Growth dashboard",
  },
];

export default function V2cPage() {
  return (
    <div className="v2c">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet" />

      <section className="hero">
        <div className="ribbon-grad" />
        <div className="wrap">
          <nav className="nav">
            <div className="wordmark">NearGo<span className="dot">.</span></div>
            <div className="nav-links">
              <Link href="/v2c/restaurants">NearShop</Link>
              <Link href="/v2c/payment">NearPay</Link>
              <Link href="/v2c/pricing">Pricing</Link>
              <Link href="/v2c/download">Download</Link>
            </div>
            <a className="pill" href="mailto:hello@neargo.ai">Contact sales</a>
          </nav>

          <div className="hero-inner">
            <div className="kicker">Commerce infrastructure for MENA</div>
            <h1>Unlock growth with easy management and operations.</h1>
            <p className="lede">
              Connect with millions of local and international users — drive sales
              growth, customer loyalty, and business profit on one platform.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/v2c/pricing">Start now →</Link>
              <a className="btn btn-text" href="#products">Explore products</a>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.k}>
              <div className="v num">{s.v}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="band wrap" id="products">
        <div className="sec-head">
          <div className="kicker">One platform, three products</div>
          <h2>Everything you need to manage, sell, and get paid.</h2>
          <p>NearShop, NearPay and NearBoss work together — from storefront and payments to an AI store manager.</p>
        </div>
        <div className="cards">
          {CARDS.map((c) => (
            <div className="card" key={c.name}>
              <div className="panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={c.fit} src={c.img} alt={c.alt} loading="lazy" />
              </div>
              <div className="body">
                <div className="pname">{c.name}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <Link className="link" href={c.href}>Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="wrap inner">
          <div>
            <h2>Kickstart your business growth now.</h2>
            <p>Talk to our team about NearShop, NearPay and NearBoss for your business.</p>
          </div>
          <a className="btn btn-primary" href="mailto:hello@neargo.ai">Contact us →</a>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap inner">
          <div>
            <div className="wordmark" style={{ fontWeight: 800, fontSize: 22 }}>NearGo<span style={{ color: "#635bff" }}>.</span></div>
            <p style={{ maxWidth: 260, marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
              One platform to manage, sell and get paid across the MENA region.
            </p>
          </div>
          <div className="cols">
            <div>
              <h4>Products</h4>
              <Link href="/v2c/restaurants">NearShop</Link>
              <Link href="/v2c/payment">NearPay</Link>
              <Link href="/v2c/download">NearBoss</Link>
              <Link href="/v2c/pricing">Pricing</Link>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="mailto:hello@neargo.ai">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
