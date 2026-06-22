import Link from "next/link";
import { ArrowIcon, ShopIcon, CardIcon, ChartIcon } from "./icons";

type Product = {
  id: string;
  badge: string;
  badgeColor: string;
  name: string;
  headline: string;
  desc: string;
  href: string;
  cta: string;
  ai?: boolean;
  flip?: boolean;
  icon: React.ReactNode;
  image: string;
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    id: "neargo",
    badge: "NearGo",
    badgeColor: "var(--accent-deep)",
    name: "NearGo",
    headline: "Driving greater profit",
    desc: "One platform that connects your business with millions of local and international users — built to accelerate expansion across the Middle East and North Africa.",
    href: "/pricing",
    cta: "See plans",
    icon: <ChartIcon />,
    image: "/generated/neargo.png",
    alt: "A confident MENA business owner in the doorway of their thriving shop",
  },
  {
    id: "nearshop",
    badge: "NearShop",
    badgeColor: "var(--data-trust)",
    name: "NearShop",
    headline: "Achieving broader business expansion",
    desc: "An integrated system to streamline operations, enhance efficiency, reach wider audiences, and maximize market presence for business growth.",
    href: "/restaurants",
    cta: "Explore NearShop",
    flip: true,
    icon: <ShopIcon />,
    image: "/generated/nearshop-warm.png",
    alt: "The NearGo dual-screen POS device",
  },
  {
    id: "nearpay",
    badge: "NearPay",
    badgeColor: "var(--data-gold)",
    name: "NearPay",
    headline: "Delivering security and efficiency",
    desc: "Supports multi-scenario payments and international card transactions, strengthening both effectiveness and safety.",
    href: "/payment",
    cta: "Explore NearPay",
    icon: <CardIcon />,
    image: "/real/nearpay-device.png",
    alt: "A hand holding the NearPay Move terminal at checkout",
  },
];

function ProductVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-card"
      style={{ border: "1px solid var(--line)", background: "var(--bg-card)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="shell py-8">
      {PRODUCTS.map((p) => (
        <div key={p.id} id={p.id} className="py-12 md:py-16">
          <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${p.flip ? "lg:[direction:rtl]" : ""}`}>
            <div className="lg:[direction:ltr]">
              <span className="mb caps" style={{ color: p.badgeColor, borderColor: p.badgeColor }}>
                {p.badge}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] md:text-4xl">{p.headline}</h2>
              <p className="mt-3 max-w-xl text-lg leading-relaxed" style={{ color: "var(--ink-2)" }}>
                {p.desc}
              </p>
              <Link href={p.href} className="btn-primary mt-7">
                {p.cta} <ArrowIcon className="h-[18px] w-[18px]" />
              </Link>
            </div>
            <div className="lg:[direction:ltr]">
              <ProductVisual src={p.image} alt={p.alt} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
