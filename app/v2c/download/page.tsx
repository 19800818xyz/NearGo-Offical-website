import type { Metadata } from "next";
import "../v2c.css";
import { V2cHero, V2cCTA, V2cFooter, V2cSwitcher } from "@/components/v2c/parts";
import { AppleIcon, PlayIcon } from "@/components/icons-extra";

export const metadata: Metadata = {
  title: "Download — NearGo, NearBoss & NearRider | NearGo v2c",
  description: "Stripe-style v2c reference of the Download page.",
};

const APPS = [
  { name: "NearGo", role: "For customers", img: "/generated/app-customer.png", alt: "A customer paying with a smartphone in a shop", body: "Discover nearby stores, order and pay across the MENA region — one app to connect with millions of merchants." },
  { name: "NearBoss", role: "For merchants", img: "/generated/app-merchant.png", alt: "An owner reviewing sales on a tablet", body: "Run your store from your pocket: orders, members, real-time reports and AI-assisted operations." },
  { name: "NearRider", role: "For riders", img: "/generated/app-rider.png", alt: "A delivery rider by a scooter on a city street", body: "Delivery made simple — accept orders, optimize routes, and track earnings in real time." },
];

function Store() {
  return (
    <div className="store">
      <a href="#"><AppleIcon /><span><small>Download on the</small><b>App Store</b></span></a>
      <a href="#"><PlayIcon /><span><small>Get it on</small><b>Google Play</b></span></a>
    </div>
  );
}

export default function V2cDownload() {
  return (
    <div className="v2c">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet" />

      <V2cHero
        kicker="Apps"
        title="Master your business and own your future."
        lede="Get the NearGo apps for iOS and Android — shop, manage your store, and deliver, all across the MENA region."
        primary={{ label: "See pricing", href: "/v2c/pricing" }}
      />

      <section className="band wrap">
        <div className="apps">
          {APPS.map((a) => (
            <div className="card" key={a.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.img} alt={a.alt} loading="lazy" />
              <div className="body">
                <div className="pname">{a.role}</div>
                <h3>{a.name}</h3>
                <p>{a.body}</p>
                <Store />
              </div>
            </div>
          ))}
        </div>
      </section>

      <V2cCTA />
      <V2cFooter />
    </div>
  );
}
