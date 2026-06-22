"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-11 w-11 items-center justify-center rounded-btn transition-colors hover:text-accent-deep"
      style={{ border: "1px solid var(--line)" }}
    >
      {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : <span className="h-5 w-5" />}
    </button>
  );
}
