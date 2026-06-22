"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { label: "NearShop", href: "/restaurants" },
  { label: "NearPay", href: "/payment" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
];

const CONTACT = "mailto:hello@neargo.ai";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-colors"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <Link href="/" aria-label="NearGo home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[15px] font-medium transition-colors hover:text-accent-deep"
              style={{ color: "var(--ink-2)" }}
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/download" className="hidden btn-ghost md:inline-flex">
            Download
          </Link>
          <a href={CONTACT} className="hidden btn-primary md:inline-flex">
            Contact Us
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-btn md:hidden"
            style={{ border: "1px solid var(--line)", color: "var(--ink)" }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--line)", background: "var(--bg)" }}>
          <div className="shell flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-btn px-3 py-3 text-[15px] font-medium"
                style={{ color: "var(--ink)" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={CONTACT} onClick={() => setOpen(false)} className="btn-primary mt-2">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
