import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer, CTA } from "@/components/sections";
import { PageHero, Section } from "@/components/ui";
import { AppleIcon, PlayIcon, BikeIcon } from "@/components/icons-extra";
import { ShopIcon, ChartIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Download — Master Your Business and Own Your Future | NearGo",
  description:
    "Download the NearGo, NearBoss and NearRider apps for iOS and Android — shop, manage your store, and deliver across the MENA region.",
};

/* NOTE: app taglines are inferred from product context — the live /download page
   did not expose per-app copy. Confirm/replace with official descriptions. */
const APPS = [
  {
    name: "NearGo",
    role: "For Customers",
    icon: <ShopIcon />,
    image: "/generated/app-customer.png",
    alt: "A customer browsing and paying with a smartphone in a shop",
    desc: "Discover nearby stores, order and pay across the MENA region — one app to connect with millions of local and international merchants.",
  },
  {
    name: "NearBoss",
    role: "For Merchants",
    icon: <ChartIcon />,
    ai: true,
    image: "/generated/app-merchant.png",
    alt: "A business owner reviewing sales on a tablet behind the counter",
    desc: "Run your store from your pocket: orders, members, real-time sales reports and AI-assisted operations for business owners.",
  },
  {
    name: "NearRider",
    role: "For Riders",
    icon: <BikeIcon />,
    image: "/generated/app-rider.png",
    alt: "A delivery rider with an insulated backpack by a scooter on a city street",
    desc: "Delivery made simple — accept orders, optimize your routes, and track earnings in real time.",
  },
];

function StoreButton({ kind }: { kind: "apple" | "play" }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2.5 rounded-btn px-4 py-2.5 transition-colors"
      style={{ background: "var(--ink)", color: "var(--bg)" }}
    >
      {kind === "apple" ? <AppleIcon /> : <PlayIcon />}
      <span className="text-left leading-tight">
        <span className="block text-[10px] opacity-80">
          {kind === "apple" ? "Download on the" : "GET IT ON"}
        </span>
        <span className="block text-[14px] font-semibold">
          {kind === "apple" ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}

function AppCard({ app }: { app: (typeof APPS)[number] }) {
  return (
    <div
      className="flex h-full flex-col items-start overflow-hidden rounded-card"
      style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
    >
      <div className="relative w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={app.image} alt={app.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div
          className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-btn"
          style={{
            background: app.ai ? "var(--ai-gradient)" : "var(--bg)",
            color: app.ai ? "var(--cta-text)" : "var(--accent-deep)",
            boxShadow: app.ai ? "0 0 12px var(--ai-glow)" : "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {app.icon}
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start p-6">
      <span className="caps text-[11px] font-semibold" style={{ color: "var(--accent-deep)" }}>
        {app.role}
      </span>
      <h3 className="mt-1 text-[22px] font-bold tracking-[-0.01em]">{app.name}</h3>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
        {app.desc}
      </p>
      <div className="mt-6 flex flex-wrap gap-2.5">
        <StoreButton kind="apple" />
        <StoreButton kind="play" />
      </div>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Download"
          title="Master Your Business and Own Your Future"
          subtitle="Get the NearGo apps for iOS and Android — shop, manage your store, and deliver, all across the MENA region."
          image="/generated/download-hero.png"
          imageAlt="A smiling shop owner holding a smartphone in their store"
        />

        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            {APPS.map((a) => (
              <AppCard key={a.name} app={a} />
            ))}
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
