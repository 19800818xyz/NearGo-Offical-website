import type { Metadata } from "next";
import Link from "next/link";
import "./v2.css";

export const metadata: Metadata = {
  title: "NearGo — v2 (Warm Editorial) | Reference",
  description:
    "A v2 reference redesign of the NearGo homepage in a warm editorial style — generated with the huashu-design methodology. v1 remains unchanged.",
};

const STATS = [
  { v: "1", k: "Unified platform" },
  { v: "20", sup: "+", k: "Countries · MENA" },
  { v: "500", sup: "M", k: "Population reach" },
  { v: "10", sup: "M+", k: "Shops live" },
];

const PRODUCTS = [
  {
    no: "01",
    name: "NearShop",
    title: "Run the whole shop in one place.",
    body:
      "An integrated system to streamline operations, enhance efficiency, reach wider audiences, and maximize market presence for business growth.",
    href: "/restaurants",
    cta: "Explore NearShop",
    img: "/generated/nearshop.png",
    alt: "A dual-screen POS on the counter of a modern Middle Eastern restaurant",
  },
  {
    no: "02",
    name: "NearPay",
    title: "Accept any payment, settle with confidence.",
    body:
      "Supports multi-scenario payments and international card transactions — PCI-certified, activated in 24 hours, strengthening both effectiveness and safety.",
    href: "/payment",
    cta: "Explore NearPay",
    img: "/generated/nearpay.png",
    alt: "A handheld smart payment terminal on a warm cafe counter",
    flip: true,
  },
  {
    no: "03",
    name: "NearBoss",
    title: "An AI store manager that never clocks out.",
    body:
      "Run your store from your pocket: orders, members, real-time sales reports and AI-assisted operations — built for GCC and MENA merchants.",
    href: "/download",
    cta: "Get the app",
    img: "/generated/app-merchant.png",
    alt: "A business owner reviewing sales on a tablet behind the counter",
  },
];

export default function V2Page() {
  return (
    <div className="v2">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&display=swap"
        rel="stylesheet"
      />

      {/* nav */}
      <header className="nav">
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div className="wordmark">NearGo<span className="dot">.</span></div>
          <nav className="nav-links">
            <a href="#nearshop">NearShop</a>
            <a href="#nearpay">NearPay</a>
            <a href="#nearboss">NearBoss</a>
            <Link href="/pricing">Pricing</Link>
          </nav>
          <a className="nav-cta" href="mailto:hello@neargo.ai">Contact</a>
        </div>
      </header>

      <main className="wrap">
        {/* hero */}
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="index-line">
                <span className="no serif num">01 / 04</span>
                <span className="eyebrow">Accelerating expansion across MENA</span>
              </div>
              <h1 className="display">
                Unlock growth with easy <span className="em">management</span> &amp; operations.
              </h1>
              <p className="lede">
                Connects with millions of local and international users — driving sales
                growth, customer loyalty, and business profit.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-solid" href="/pricing">Get started →</Link>
                <a className="btn btn-line" href="#nearshop">Explore products</a>
              </div>
            </div>

            <figure className="figure">
              <div className="frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/generated/neargo.png" alt="A confident shop owner in the doorway of their thriving store" />
              </div>
              <figcaption>
                <span>NearGo merchants — GCC &amp; MENA</span>
                <span className="num">№ 001</span>
              </figcaption>
            </figure>
          </div>

          {/* stats */}
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.k}>
                <div className="v serif num">{s.v}{s.sup && <sup>{s.sup}</sup>}</div>
                <div className="k">{s.k}</div>
              </div>
            ))}
          </div>
        </section>

        {/* products */}
        {PRODUCTS.map((p) => (
          <section
            id={p.name.toLowerCase()}
            key={p.no}
            className={`product${p.flip ? " flip" : ""}`}
          >
            <div className="ptext">
              <span className="no serif num">{p.no}</span>
              <div className="pname">{p.name}</div>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              <Link className="link" href={p.href}>{p.cta} →</Link>
            </div>
            <div className="pimg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.alt} loading="lazy" />
            </div>
          </section>
        ))}

        {/* manifesto */}
        <section className="manifesto">
          <blockquote className="serif">
            One platform to manage, sell, and <span className="em">get paid</span> — across markets.
          </blockquote>
          <div className="src">NearGo · MENA Commerce</div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="cta-inner">
            <h2 className="serif">Kickstart your business <span className="em">growth</span> now.</h2>
            <a className="btn btn-solid" href="mailto:hello@neargo.ai">Contact us →</a>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="wordmark">NearGo<span className="dot">.</span></div>
              <div className="legal">One platform to manage, sell and get paid across the MENA region.</div>
            </div>
            <div className="cols">
              <div>
                <h4>Products</h4>
                <Link href="/restaurants">NearShop</Link>
                <Link href="/payment">NearPay</Link>
                <Link href="/download">NearBoss</Link>
                <Link href="/pricing">Pricing</Link>
              </div>
              <div>
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Support</a>
                <a href="mailto:hello@neargo.ai">Contact</a>
              </div>
              <div>
                <h4>Legal</h4>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
          <div className="legal">© {new Date().getFullYear()} NearGo. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
