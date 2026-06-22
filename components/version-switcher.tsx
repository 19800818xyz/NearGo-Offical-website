"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const VERSIONS = [
  { id: "v1", href: "/", label: "v1" },
  { id: "v2", href: "/v2", label: "v2" },
  { id: "v2b", href: "/v2b", label: "v2b" },
  { id: "v2c", href: "/v2c", label: "v2c" },
];

/** Floating design-version switcher shown on every route (preview aid). */
export function VersionSwitcher() {
  const p = usePathname() || "/";
  const active = p.startsWith("/v2c")
    ? "v2c"
    : p.startsWith("/v2b")
    ? "v2b"
    : p.startsWith("/v2")
    ? "v2"
    : "v1";

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 9999,
        display: "flex",
        gap: 6,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {VERSIONS.map((v) => (
        <Link
          key={v.id}
          href={v.href}
          style={{
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 12px",
            borderRadius: 999,
            textDecoration: "none",
            color: "#fff",
            background: active === v.id ? "#e68534" : "rgba(20,20,20,0.82)",
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
            backdropFilter: "blur(4px)",
          }}
        >
          {v.label}
        </Link>
      ))}
    </div>
  );
}
