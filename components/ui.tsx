import { ArrowIcon, SparkIcon } from "./icons";

/* ---------- Full-bleed orange Hero band (规范 §6.2, web adaptation) ---------- */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)", color: "var(--hero-text)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(900px 420px at 78% -10%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="shell relative pb-16 pt-14 md:pb-24 md:pt-20">
        <div className={image ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14" : ""}>
          <div className={`${image ? "" : "max-w-3xl"} rise`}>
            {eyebrow && (
              <span className="mb caps" style={{ borderColor: "var(--hero-line)", color: "var(--hero-text)" }}>
                <SparkIcon className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--hero-text)" }}>
                {subtitle}
              </p>
            )}
            {(primary || secondary) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primary && (
                  <a href={primary.href} className="btn-primary">
                    {primary.label} <ArrowIcon className="h-[18px] w-[18px]" />
                  </a>
                )}
                {secondary && (
                  <a href={secondary.href} className="btn-ghost" style={{ borderColor: "var(--hero-line)", color: "var(--hero-text)" }}>
                    {secondary.label}
                  </a>
                )}
              </div>
            )}
          </div>
          {image && (
            <div className="rise overflow-hidden rounded-card" style={{ boxShadow: "0 24px 60px -24px rgba(0,0,0,0.5)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={imageAlt ?? ""} className="aspect-[4/3] w-full object-cover" />
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`shell py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

/* ---------- Section heading (centered) ---------- */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`${a} max-w-2xl`}>
      {eyebrow && (
        <p className="caps text-[11px] font-semibold" style={{ color: "var(--accent-deep)" }}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-[-0.02em] md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Feature card ---------- */
export function FeatureCard({
  icon,
  title,
  desc,
  img,
  alt,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  img?: string;
  alt?: string;
}) {
  if (img) {
    return (
      <div
        className="h-full overflow-hidden rounded-card"
        style={{ background: "var(--bg-card)", border: "1px solid var(--line)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt ?? ""} loading="lazy" className="block w-full object-cover" style={{ aspectRatio: "3 / 2" }} />
        <div className="p-5">
          <div className="icon-tile" style={{ marginTop: "-44px", position: "relative", background: "var(--bg)", boxShadow: "0 6px 16px rgba(58,36,24,0.14)" }}>
            {icon}
          </div>
          <h3 className="mt-3 text-[18px] font-bold tracking-[-0.01em]">{title}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
            {desc}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="card h-full">
      <div className="icon-tile">{icon}</div>
      <h3 className="mt-4 text-[18px] font-bold tracking-[-0.01em]">{title}</h3>
      <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
        {desc}
      </p>
    </div>
  );
}
