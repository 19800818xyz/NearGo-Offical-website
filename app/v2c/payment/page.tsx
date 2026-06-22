import type { Metadata } from "next";
import "../v2c.css";
import { V2cHero, V2cCTA, V2cFooter, V2cSwitcher } from "@/components/v2c/parts";
import { ShieldIcon, ClockIcon, LayersIcon, DeviceIcon, BankIcon, TagIcon } from "@/components/icons-extra";

export const metadata: Metadata = {
  title: "NearPay — Secure and Effortless Payment | NearGo v2c",
  description: "Stripe-style v2c reference of the NearPay page.",
};

const EMPOWER = [
  { icon: <ShieldIcon />, title: "Trusted PCI certification", body: "A secure, reliable payment system with PCI DSS certification — top-tier transaction protection.", img: "/generated/feat-pci.png", alt: "A payment terminal with a security shield motif" },
  { icon: <ClockIcon />, title: "Activation in 24 hours", body: "A user-friendly application process designed for fast activation — up and running within a day.", img: "/generated/feat-fast.png", alt: "A freshly set-up payment terminal with a clock" },
  { icon: <LayersIcon />, title: "Multiple payment options", body: "Set up multiple payment methods simultaneously, streamlining transactions and customer satisfaction.", img: "/generated/feat-payments.png", alt: "Multiple payment cards and a wallet phone" },
];

const SERVICES = [
  { icon: <DeviceIcon />, title: "NearPay Move terminal", body: "NFC, swipe, insert, and QR code payments in one portable device for multiple scenarios.", img: "/generated/nearpay.png", alt: "The NearPay Move handheld terminal" },
  { icon: <BankIcon />, title: "CBUAE-licensed disbursement", body: "Partnered with licensed entities for secure disbursement — get your funds in less than 48 hours.", img: "/generated/feat-settlement.png", alt: "A secure fund settlement motif" },
  { icon: <TagIcon />, title: "Member exclusive rate", body: "NearPay members enjoy a reduced fee on every transaction.", img: "/generated/feat-member.png", alt: "A premium loyalty card suggesting member savings" },
];

export default function V2cPayment() {
  return (
    <div className="v2c">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet" />

      <V2cHero
        kicker="Payments · NearPay"
        title="Secure and effortless payment solution."
        lede="Maximize productivity, streamline processes, and discover new revenue opportunities with our integrated payment platform."
        primary={{ label: "Get started", href: "/v2c/pricing" }}
        secondary={{ label: "Talk to sales", href: "mailto:hello@neargo.ai" }}
      />

      <section className="band wrap">
        <div className="sec-head">
          <div className="kicker">Why NearPay</div>
          <h2>Empower every path of your business.</h2>
        </div>
        <div className="feat-grid">
          {EMPOWER.map((f) => (
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
            <div className="kicker">Comprehensive services</div>
            <h2>Everything around the transaction.</h2>
          </div>
          <div className="feat-grid">
            {SERVICES.map((f) => (
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
