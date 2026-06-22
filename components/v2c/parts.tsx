import Link from "next/link";

const NAV = [
  { label: "NearShop", href: "/v2c/restaurants" },
  { label: "NearPay", href: "/v2c/payment" },
  { label: "Pricing", href: "/v2c/pricing" },
  { label: "Download", href: "/v2c/download" },
];

export function V2cNav() {
  return (
    <nav className="nav">
      <Link href="/v2c" className="wordmark" style={{ textDecoration: "none" }}>
        NearGo<span className="dot">.</span>
      </Link>
      <div className="nav-links">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href}>{n.label}</Link>
        ))}
      </div>
      <a className="pill" href="mailto:hello@neargo.ai">Contact sales</a>
    </nav>
  );
}

/* Gradient hero band (with nav inside), compact variant for subpages. */
export function V2cHero({
  kicker,
  title,
  lede,
  primary,
  secondary,
}: {
  kicker: string;
  title: string;
  lede: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="hero compact">
      <div className="ribbon-grad" />
      <div className="wrap">
        <V2cNav />
        <div className="hero-inner">
          <div className="kicker">{kicker}</div>
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
          {(primary || secondary) && (
            <div className="actions">
              {primary && <Link className="btn btn-primary" href={primary.href}>{primary.label} →</Link>}
              {secondary && <a className="btn btn-text" href={secondary.href}>{secondary.label}</a>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function V2cCTA() {
  return (
    <section className="cta">
      <div className="wrap inner">
        <div>
          <h2>Kickstart your business growth now.</h2>
          <p>Talk to our team about NearShop, NearPay and NearBoss for your business.</p>
        </div>
        <a className="btn btn-primary" href="mailto:hello@neargo.ai">Contact us →</a>
      </div>
    </section>
  );
}

export function V2cFooter() {
  return (
    <footer className="foot">
      <div className="wrap inner">
        <div>
          <div className="wordmark" style={{ fontWeight: 800, fontSize: 22 }}>
            NearGo<span style={{ color: "#635bff" }}>.</span>
          </div>
          <p style={{ maxWidth: 260, marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
            One platform to manage, sell and get paid across the MENA region.
          </p>
        </div>
        <div className="cols">
          <div>
            <h4>Products</h4>
            <Link href="/v2c/restaurants">NearShop</Link>
            <Link href="/v2c/payment">NearPay</Link>
            <Link href="/v2c/download">NearBoss</Link>
            <Link href="/v2c/pricing">Pricing</Link>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="mailto:hello@neargo.ai">Contact</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function V2cSwitcher() {
  return (
    <div className="ribbon">
      <Link href="/">v1</Link>
      <Link href="/v2">v2</Link>
      <Link href="/v2b">v2b</Link>
      <Link href="/v2c" className="on">v2c</Link>
    </div>
  );
}
