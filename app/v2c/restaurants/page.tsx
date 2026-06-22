import type { Metadata } from "next";
import "../v2c.css";
import { V2cHero, V2cCTA, V2cFooter, V2cSwitcher } from "@/components/v2c/parts";
import { ShopIcon, ChartIcon, GlobeIcon, CardIcon, MegaphoneIcon } from "@/components/icons";
import { UsersIcon, LayersIcon } from "@/components/icons-extra";

export const metadata: Metadata = {
  title: "NearShop — Power Your Growth | NearGo v2c",
  description: "Stripe-style v2c reference of the NearShop page.",
};

const ADVANCE = [
  { icon: <UsersIcon />, title: "High-traffic memberships", body: "Leverage a mature membership system to access a high volume of traffic, boosting opportunities and growth.", img: "/generated/feat-memberships.png", alt: "Loyal customers at a boutique counter" },
  { icon: <ChartIcon />, title: "Real-time analytics", body: "A real-time dashboard of financial and operational analytics, enhancing decisions and performance.", img: "/generated/feat-analytics.png", alt: "An owner viewing a sales dashboard on a tablet" },
  { icon: <GlobeIcon />, title: "Diverse sales channels", body: "From delivery platforms to social media tools — reach more customers and maximize market presence.", img: "/generated/feat-channels.png", alt: "A phone with a delivery app beside a shopping bag" },
];

const INTELLIGENT = [
  { icon: <LayersIcon />, title: "Integrated sales system", body: "E-commerce plus physical stores — one system serving multiple business scenarios.", img: "/generated/feat-integrated.png", alt: "A POS connected to an online store" },
  { icon: <ShopIcon />, title: "Intuitive management", body: "A well-designed, easily operated platform packed with features that boost efficiency.", img: "/generated/feat-management.png", alt: "An owner managing the store on a tablet" },
  { icon: <CardIcon />, title: "Support multiple payments", body: "Visa, Mastercard, UnionPay, Google Pay, Apple Pay, Alipay, WeChat Pay, LINE Pay and more.", img: "/generated/feat-payments.png", alt: "Multiple payment cards and a wallet phone" },
  { icon: <MegaphoneIcon />, title: "Powerful marketing tools", body: "WhatsApp, SMS, social and digital marketing — reach audiences, drive engagement and sales.", img: "/generated/feat-marketing.png", alt: "A phone showing a social media promotion" },
];

export default function V2cRestaurants() {
  return (
    <div className="v2c">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet" />

      <V2cHero
        kicker="Operations · NearShop"
        title="Power your growth, expand your business."
        lede="Optimize your efforts, automate for greater efficiency, and unlock new revenue streams using the solution trusted by millions of businesses."
        primary={{ label: "Get started", href: "/v2c/pricing" }}
        secondary={{ label: "Download the app", href: "/v2c/download" }}
      />

      <section className="band wrap">
        <div className="sec-head">
          <div className="kicker">Supercharge advancement</div>
          <h2>Built for restaurants, retailers and appointments.</h2>
        </div>
        <div className="feat-grid">
          {ADVANCE.map((f) => (
            <div className="feat" key={f.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.img} alt={f.alt} loading="lazy" />
              <div className="body">
                <div className="chip">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="band soft">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Intelligent features</div>
            <h2>One system, every scenario.</h2>
          </div>
          <div className="feat-grid cols4">
            {INTELLIGENT.map((f) => (
              <div className="feat" key={f.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.alt} loading="lazy" />
                <div className="body">
                  <div className="chip">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <V2cCTA />
      <V2cFooter />
    </div>
  );
}
