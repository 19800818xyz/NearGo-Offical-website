/* NearGo wordmark — deep ink text with an AI-gradient dot on the "o". */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center text-[21px] font-semibold tracking-[-0.01em] ${className ?? ""}`}
      style={{ color: "var(--ink)" }}
    >
      NearG
      <span className="relative inline-flex">
        o
        <span
          aria-hidden
          className="absolute -right-1.5 -top-0.5 h-2 w-2 rounded-pill pulse-ai"
          style={{ background: "var(--ai-gradient)" }}
        />
      </span>
    </span>
  );
}
