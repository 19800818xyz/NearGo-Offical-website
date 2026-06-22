import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        "ink-4": "var(--ink-4)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        "accent-soft": "var(--accent-soft)",
        bg: "var(--bg)",
        "bg-card": "var(--bg-card)",
        "bg-icon": "var(--bg-icon)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        "data-trust": "var(--data-trust)",
        "data-warn": "var(--data-warn)",
        "data-info": "var(--data-info)",
        "data-gold": "var(--data-gold)",
        "data-cyan": "var(--data-cyan)",
        "data-cyan-deep": "var(--data-cyan-deep)",
      },
      fontFamily: {
        sans: ["var(--font)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-btn)",
        chip: "var(--radius-chip)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
