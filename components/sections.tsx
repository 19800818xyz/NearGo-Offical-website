import Link from "next/link";
import { Logo } from "./logo";
import { ArrowIcon } from "./icons";

const PARTNERS = [
  "Visa",
  "Mastercard",
  "UnionPay",
  "Google Pay",
  "Apple Pay",
  "Alipay",
  "Payby",
  "WeChat Pay",
  "LINE Pay",
];

export function Partners() {
  return (
    <section id="partners" className="shell py-16">
      <p className="caps text-center text-[11px] font-medium" style={{ color: "var(--ink-3)" }}>
        Support multiple payments
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {PARTNERS.map((p) => (
          <span
            key={p}
            className="text-lg font-semibold tracking-tight opacity-70 transition-opacity hover:opacity-100"
            style={{ color: "var(--ink-2)" }}
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="shell pb-24 pt-8">
      <div
        className="relative overflow-hidden rounded-card px-8 py-14 text-center md:px-16 md:py-20"
        style={{ background: "var(--hero-gradient)", color: "var(--hero-text)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(700px 320px at 50% -20%, rgba(255,255,255,0.2), transparent 60%)",
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-[-0.02em] md:text-5xl">
            Kickstart your business growth now!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-95">
            Contact us to learn more or ask any questions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@neargo.ai" className="btn-primary">
              Contact Us <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
            <Link
              href="/download"
              className="btn-ghost"
              style={{ borderColor: "var(--hero-line)", color: "var(--hero-text)" }}
            >
              Download the app
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_COLS = [
  {
    title: "Products",
    links: [
      { label: "NearShop", href: "/restaurants" },
      { label: "NearPay", href: "/payment" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Support", href: "#" },
      { label: "Contact Us", href: "mailto:hello@neargo.ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Services", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }}>
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-[14px] leading-relaxed" style={{ color: "var(--ink-3)" }}>
            One platform to manage, sell and get paid across the MENA region.
          </p>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4 className="caps text-[11px] font-semibold" style={{ color: "var(--ink-3)" }}>
              {col.title}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] transition-colors hover:text-accent-deep"
                    style={{ color: "var(--ink-2)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="shell flex flex-col items-center justify-between gap-3 py-6 sm:flex-row"
        style={{ borderTop: "1px solid var(--line-soft)" }}
      >
        <p className="text-[13px]" style={{ color: "var(--ink-3)" }}>
          © {new Date().getFullYear()} NearGo. All rights reserved.
        </p>
        <p className="text-[13px]" style={{ color: "var(--ink-3)" }}>
          NearGo reserves the right of final interpretation.
        </p>
      </div>
    </footer>
  );
}
