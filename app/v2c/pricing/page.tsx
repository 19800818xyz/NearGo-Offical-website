import type { Metadata } from "next";
import Link from "next/link";
import "../v2c.css";
import { V2cHero, V2cCTA, V2cFooter, V2cSwitcher } from "@/components/v2c/parts";
import { CheckIcon, DeviceIcon, PrinterIcon } from "@/components/icons-extra";

export const metadata: Metadata = {
  title: "Pricing — Value-Driven Growth | NearGo v2c",
  description: "Stripe-style v2c reference of the Pricing page.",
};

const PLANS = [
  {
    name: "NearShop One", tag: "Best value", featured: true,
    banner: "/generated/nearshop-warm.png", bannerAlt: "The NearGo dual-screen POS, bundled free",
    was: "5988 AED", price: "3999", unit: "AED / year",
    desc: "Enroll in the one-year program to access VIP business privileges.",
    benefits: ["NearShop Duo 2999 AED — Free", "NearPay Move 999 AED — Free", "Full suite of marketing tools", "Optimal payment transaction rate", "NearBoss advanced features — full access"],
    note: "Full refund available throughout the 12th month after payment.",
  },
  {
    name: "NearShop Pro", tag: "Monthly", featured: false,
    banner: "/real/nearboss-app.png", bannerAlt: "The NearBoss merchant app",
    was: "499 AED", price: "399", unit: "AED / month",
    desc: "Advanced features tailored for restaurants, retailers, or appointment-based businesses.",
    benefits: ["Full NearShop account features", "Full suite of marketing tools", "Optimal payment transaction rate", "NearBoss advanced features — full access"],
    note: "Billed monthly. Cancel anytime.",
  },
];

const ACCOUNT = ["Digital Coupons", "Message Outreach", "Store Website", "Delivery & Takeout", "NearBoss App", "Electronic Menu", "Membership System", "Payment Channels", "Platform Traffic", "Sales Reports"];

const HW = [
  { icon: <DeviceIcon />, name: "NearShop Duo", desc: "Dual-screen Android POS", price: "2999 AED", was: "3999 AED" },
  { icon: <DeviceIcon />, name: "NearPay Move", desc: "Portable smart terminal", price: "999 AED", was: "1999 AED" },
  { icon: <PrinterIcon />, name: "NearShop 80 Printer", desc: "Wireless plug-and-play printer", price: "499 AED", was: "899 AED" },
  { icon: <PrinterIcon />, name: "NearShop Label Printer", desc: "Wireless waterproof labeler", price: "499 AED", was: "899 AED" },
];

export default function V2cPricing() {
  return (
    <div className="v2c">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet" />

      <V2cHero
        kicker="Pricing"
        title="A value-driven solution to advance your growth."
        lede="Choose the plan that fits — every subscription unlocks NearShop, NearPay and NearBoss together."
        primary={{ label: "Contact sales", href: "mailto:hello@neargo.ai" }}
      />

      <section className="band wrap">
        <div className="plans" style={{ marginLeft: "auto", marginRight: "auto" }}>
          {PLANS.map((p) => (
            <div className={`plan${p.featured ? " featured" : ""}`} key={p.name}>
              <div className="banner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.banner} alt={p.bannerAlt} />
              </div>
              <span className="tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p className="pdesc">{p.desc}</p>
              <div className="price"><b className="num">{p.price}</b> <span>{p.unit}</span></div>
              <div className="was num">{p.was}</div>
              <ul>
                {p.benefits.map((b) => (
                  <li key={b}><CheckIcon /> {b}</li>
                ))}
              </ul>
              <a className={`btn ${p.featured ? "btn-primary" : "btn-line"}`} href="mailto:hello@neargo.ai">Get it now →</a>
              <p className="note">{p.note}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <div className="kicker">Every NearShop account includes</div>
          <div className="chips">
            {ACCOUNT.map((c) => (
              <span className="ch" key={c}><CheckIcon /> {c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="band soft">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Hardware devices</div>
            <h2>Purpose-built terminals and printers.</h2>
            <p>Bundled free with NearShop One.</p>
          </div>
          <div className="hw" style={{ maxWidth: 760 }}>
            {HW.map((h) => (
              <div className="row" key={h.name}>
                <div className="ic">{h.icon}</div>
                <div>
                  <div className="nm">{h.name}</div>
                  <div className="ds">{h.desc}</div>
                </div>
                <div className="pr"><b className="num">{h.price}</b><s className="num">{h.was}</s></div>
              </div>
            ))}
          </div>
          <p className="note">NearGo reserves the right of final interpretation.</p>
        </div>
      </section>

      <V2cCTA />
      <V2cFooter />
    </div>
  );
}
