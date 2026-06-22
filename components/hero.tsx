import { ArrowIcon, SparkIcon } from "./icons";

const READS = [
  { k: "PLATFORM", v: "1", sub: "unified" },
  { k: "COUNTRIES", v: "20", sub: "+ MENA" },
  { k: "POPULATION", v: "500", sub: "M reach" },
  { k: "SHOPS", v: "10", sub: "M+ live" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-gradient)", color: "var(--hero-text)" }}
    >
      {/* Premium background photograph */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/generated/hero-bg.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm gradient overlay — keeps white text ≥4.5:1 on the left, reveals imagery on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(147,66,15,0.95) 0%, rgba(166,77,18,0.88) 42%, rgba(147,66,15,0.62) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(900px 420px at 80% -10%, rgba(255,200,140,0.25), transparent 60%)",
        }}
      />

      <div className="shell relative pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="max-w-3xl rise">
          <span className="mb caps" style={{ borderColor: "var(--hero-line)", color: "var(--hero-text)" }}>
            <SparkIcon className="h-3.5 w-3.5" />
            Accelerating expansion across MENA
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Unlock growth with easy
            <br className="hidden md:block" /> management and operations
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--hero-text)" }}>
            Connects with millions of local and international users: drives sales
            growth, enhances customer loyalty, and increases business profits.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/pricing" className="btn-primary">
              Get Started <ArrowIcon className="h-[18px] w-[18px]" />
            </a>
            <a href="/restaurants" className="btn-ghost" style={{ borderColor: "var(--hero-line)", color: "var(--hero-text)" }}>
              Explore products
            </a>
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-card md:mt-16 md:grid-cols-4"
          style={{ border: "1px solid var(--hero-line)" }}
        >
          {READS.map((r) => (
            <div key={r.k} className="px-5 py-5" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="caps text-[10px] font-medium opacity-90">{r.k}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="tnum text-3xl font-bold md:text-4xl">{r.v}</span>
                <span className="text-sm font-medium opacity-90">{r.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
