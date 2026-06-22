import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer, CTA, Partners } from "@/components/sections";
import { PageHero, Section, SectionHeader, FeatureCard } from "@/components/ui";
import { ShopIcon, ChartIcon, GlobeIcon, CardIcon, MegaphoneIcon } from "@/components/icons";
import { UsersIcon, LayersIcon } from "@/components/icons-extra";

export const metadata: Metadata = {
  title: "NearShop — Power Your Growth, Expand Your Business | NearGo",
  description:
    "An integrated sales system for restaurants, retailers and appointment-based businesses: high-traffic memberships, real-time analytics, diverse sales channels, and powerful marketing tools.",
};

const ADVANCE = [
  {
    icon: <UsersIcon />,
    title: "Growth with High Traffic Memberships",
    desc: "Leverage an established mature membership system to access a high volume of traffic, boosting business opportunities and growth.",
    img: "/generated/feat-memberships.png",
    alt: "Loyal customers at a boutique counter",
  },
  {
    icon: <ChartIcon />,
    title: "Real-Time Analytics for Better Decisions",
    desc: "Real-time dashboard of financial and operational analytics tools, enhancing decision-making and improving business performance.",
    img: "/generated/feat-analytics.png",
    alt: "An owner viewing a sales dashboard on a tablet",
  },
  {
    icon: <GlobeIcon />,
    title: "Diverse Sales Channels for Greater Customer Reach",
    desc: "Various sales channels from delivery platforms to social media tools, enabling businesses to reach more customers and maximize market presence.",
    img: "/generated/feat-channels.png",
    alt: "A phone with a delivery app beside a shopping bag",
  },
];

const INTELLIGENT = [
  {
    icon: <LayersIcon />,
    title: "Seamlessly Integrated Sales System",
    desc: "Integrating e-commerce with physical stores eliminates the passive wait for customers, allowing one system to serve multiple business scenarios.",
    img: "/generated/feat-integrated.png",
    alt: "A POS connected to an online store",
  },
  {
    icon: <ShopIcon />,
    title: "Easy and Intuitive Store Management Platform",
    desc: "Well-designed interface that can be easily operated and includes various features, helping you boost business efficiency.",
    img: "/generated/feat-management.png",
    alt: "An owner managing the store on a tablet",
  },
  {
    icon: <CardIcon />,
    title: "Support Multiple Payments",
    desc: "Diverse payment options: Visa, MasterCard, UnionPay, Google Pay, Apple Pay, Alipay, Payby, WeChat Pay, LINE Pay, etc, largely increasing your sales opportunities.",
    img: "/generated/feat-payments.png",
    alt: "Multiple payment cards and a wallet phone",
  },
  {
    icon: <MegaphoneIcon />,
    title: "Powerful Marketing Tools",
    desc: "Effective sales and marketing tools: WhatsApp, SMS, Social Media, Digital Marketing, etc, reaching audience, increasing engagement and driving sales.",
    img: "/generated/feat-marketing.png",
    alt: "A phone showing a social media promotion",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="NearShop"
          title="Power Your Growth, Expand Your Business!"
          subtitle="Optimize your efforts, automate for greater efficiency, and unlock new revenue streams using the solution trusted by millions of businesses."
          primary={{ label: "Get Started", href: "/pricing" }}
          secondary={{ label: "Download the app", href: "/download" }}
          image="/generated/shop-hero.png"
          imageAlt="Staff using a dual-screen POS in a bustling modern Middle Eastern restaurant"
        />

        <Section>
          <SectionHeader title="Supercharge Your Business Advancement" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ADVANCE.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Section>

        <Section className="!pt-0">
          <SectionHeader title="Intelligent Features" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INTELLIGENT.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Section>

        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
