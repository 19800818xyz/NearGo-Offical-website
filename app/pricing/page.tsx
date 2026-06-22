import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer, CTA } from "@/components/sections";
import { PageHero, Section, SectionHeader } from "@/components/ui";
import { CheckIcon, DeviceIcon, PrinterIcon, TagIcon } from "@/components/icons-extra";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — Value-Driven Solution to Advance Your Growth | NearGo",
  description:
    "NearShop One and NearShop Pro subscription plans, plus NearShop and NearPay hardware devices. VIP business privileges, marketing tools, and optimal payment rates.",
};

const PLANS = [
  {
    name: "NearShop One",
    original: "5988 AED",
    price: "3999",
    unit: "AED / year",
    desc: "Enrolling in the one-year program will enable you to access VIP business privileges.",
    featured: true,
    banner: "/real/nearshop-pos.png",
    bannerAlt: "The NearGo dual-screen POS, bundled free",
    benefits: [
      "NearShop Duo 2999 AED — Free",
      "NearPay Move 999 AED — Free",
      "Full Suite of Marketing Tools",
      "Optimal Payment Transaction Rate",
      "NearBoss Advanced Features Full Access",
    ],
    note: "Full refund available throughout the 12th month after payment. Special offer available until December 31, 2024.",
  },
  {
    name: "NearShop Pro",
    original: "499 AED",
    price: "399",
    unit: "AED / month",
    desc: "Access advanced features tailored specifically for restaurants, retailers, or appointment-based businesses.",
    featured: false,
    banner: "/real/nearboss-app.png",
    bannerAlt: "The NearBoss merchant app",
    benefits: [
      "Full NearShop account features",
      "Full Suite of Marketing Tools",
      "Optimal Payment Transaction Rate",
      "NearBoss Advanced Features Full Access",
    ],
    note: "Billed monthly. Cancel anytime.",
  },
];

const ACCOUNT_FEATURES = [
  "Digital Coupons",
  "Message Outreach",
  "Store Official Website",
  "Delivery and Takeout Integration",
  "NearBoss App",
  "Electronic Menu",
  "Membership System",
  "Payment Channels Integration",
  "Platform Traffic",
  "Sales Reports",
];

const HARDWARE = [
  { icon: <DeviceIcon />, name: "NearShop Duo", desc: "High-performance dual-screen Android POS device", original: "3999 AED", price: "2999 AED" },
  { icon: <DeviceIcon />, name: "NearPay Move", desc: "Portable smart payment terminal", original: "1999 AED", price: "999 AED" },
  { icon: <PrinterIcon />, name: "NearShop 80 Printer", desc: "Wireless plug-and-play printer", original: "899 AED", price: "499 AED" },
  { icon: <PrinterIcon />, name: "NearShop Label Printer", desc: "Wireless waterproof labeling machine", original: "899 AED", price: "499 AED" },
];

function PlanCard({ plan }: { plan: (typeof PLANS)[number] }) {
  return (
    <div
      className="relative flex flex-col rounded-card p-7"
      style={{
        background: "var(--bg-card)",
        border: plan.featured ? "1.5px solid var(--accent-deep)" : "1px solid var(--line)",
      }}
    >
      {plan.featured && (
        <span className="mb-ai absolute -top-3 left-7 z-10 inline-flex items-center gap-1 rounded-[6px] px-2 py-0.5 text-[11px] font-medium caps">
          <TagIcon className="h-3.5 w-3.5" /> Best value
        </span>
      )}
      {plan.banner && (
        <div
          className="-mx-7 -mt-7 mb-6 flex items-center justify-center overflow-hidden"
          style={{
            height: 150,
            background: "linear-gradient(135deg, var(--accent-soft), var(--bg-icon))",
            borderRadius: "var(--radius-card) var(--radius-card) 0 0",
            borderBottom: "1px solid var(--line)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={plan.banner}
            alt={plan.bannerAlt}
            loading="lazy"
            style={{ maxHeight: "80%", maxWidth: "74%", width: "auto", objectFit: "contain", filter: "drop-shadow(0 14px 22px rgba(58,36,24,0.22))" }}
          />
        </div>
      )}
      <h3 className="text-[20px] font-bold tracking-[-0.01em]">{plan.name}</h3>
      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
        {plan.desc}
      </p>
      <div className="mt-5 flex items-end gap-2">
        <span className="tnum text-4xl font-bold">{plan.price}</span>
        <span className="pb-1 text-[14px] font-medium" style={{ color: "var(--ink-2)" }}>
          {plan.unit}
        </span>
      </div>
      <span className="tnum mt-1 text-[14px] line-through" style={{ color: "var(--ink-3)" }}>
        {plan.original}
      </span>

      <ul className="mt-6 space-y-3">
        {plan.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[14px]">
            <span className="mt-0.5 shrink-0" style={{ color: "var(--data-trust)" }}>
              <CheckIcon className="h-[18px] w-[18px]" />
            </span>
            <span style={{ color: "var(--ink)" }}>{b}</span>
          </li>
        ))}
      </ul>

      <a href="mailto:hello@neargo.ai" className={`mt-7 ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
        Get it Now <ArrowIcon className="h-[18px] w-[18px]" />
      </a>
      <p className="mt-4 text-[12px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
        {plan.note}
      </p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Value-Driven Solution to Advance Your Growth"
          subtitle="Choose the plan that fits your business — every subscription unlocks NearShop, NearPay and NearBoss together."
          primary={{ label: "Contact Us", href: "mailto:hello@neargo.ai" }}
        />

        <Section>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          {/* NearShop account features */}
          <div className="mx-auto mt-14 max-w-4xl">
            <p className="caps text-center text-[11px] font-semibold" style={{ color: "var(--accent-deep)" }}>
              Every NearShop account includes
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {ACCOUNT_FEATURES.map((f) => (
                <span key={f} className="chip">
                  <span style={{ color: "var(--data-trust)" }}>
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Hardware devices */}
        <Section className="!pt-0">
          <SectionHeader
            title="Hardware Devices"
            subtitle="Purpose-built terminals and printers, bundled free with NearShop One."
          />
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-card" style={{ border: "1px solid var(--line)" }}>
            {HARDWARE.map((h, i) => (
              <div
                key={h.name}
                className="flex items-center gap-4 px-5 py-5"
                style={{
                  background: "var(--bg-card)",
                  borderTop: i === 0 ? "none" : "1px solid var(--line-soft)",
                }}
              >
                <div className="icon-tile shrink-0">{h.icon}</div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[16px] font-bold tracking-[-0.01em]">{h.name}</h4>
                  <p className="text-[13px]" style={{ color: "var(--ink-2)" }}>
                    {h.desc}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="tnum text-[18px] font-bold" style={{ color: "var(--accent-deep)" }}>
                    {h.price}
                  </div>
                  <div className="tnum text-[13px] line-through" style={{ color: "var(--ink-3)" }}>
                    {h.original}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-[12px]" style={{ color: "var(--ink-3)" }}>
            NearGo reserves the right of final interpretation.
          </p>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
