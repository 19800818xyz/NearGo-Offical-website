import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer, CTA } from "@/components/sections";
import { PageHero, Section, SectionHeader, FeatureCard } from "@/components/ui";
import { ShieldIcon, ClockIcon, LayersIcon, DeviceIcon, BankIcon, TagIcon } from "@/components/icons-extra";

export const metadata: Metadata = {
  title: "NearPay — Secure and Effortless Payment Solution | NearGo",
  description:
    "PCI DSS certified payments, activation in 24 hours, and multiple payment methods. NearPay Move smart terminal, CBUAE-licensed disbursement, and member rates.",
};

const EMPOWER = [
  {
    icon: <ShieldIcon />,
    title: "Secure System with Trusted PCI Certification",
    desc: "Enjoy a secure and reliable payment system with Payment Card Industry Data Security Standard (PCI DSS) certification, showcasing our commitment to top-tier transaction protection.",
    img: "/generated/feat-pci.png",
    alt: "A payment terminal with a security shield motif",
  },
  {
    icon: <ClockIcon />,
    title: "Quick Activation in 24 Hours",
    desc: "Experience a user-friendly application process designed for fast activation, ensuring you can get up and running within just 24 hours.",
    img: "/generated/feat-fast.png",
    alt: "A freshly set-up payment terminal with a clock",
  },
  {
    icon: <LayersIcon />,
    title: "Streamline Transactions with Multiple Payment Options",
    desc: "Effortlessly set up multiple payment methods simultaneously, streamlining your transactions and enhancing your customer satisfaction.",
    img: "/generated/feat-payments.png",
    alt: "Multiple payment cards and a wallet phone",
  },
];

const SERVICES = [
  {
    icon: <DeviceIcon />,
    title: "NearPay Move Smart Terminal",
    desc: "NFC, swipe, insert, and QR code payments in one portable device for multiple scenarios.",
    img: "/real/nearpay-device.png",
    alt: "A hand holding the NearPay Move terminal at checkout",
  },
  {
    icon: <BankIcon />,
    title: "Partnered with CBUAE Licensed Entities",
    desc: "Secure disbursement with quick delivery. Get your funds in less than 48 hours!",
    img: "/generated/feat-settlement.png",
    alt: "A secure fund settlement motif",
  },
  {
    icon: <TagIcon />,
    title: "NearPay Member Exclusive Benefits",
    desc: "Special Rate: Enjoy reduced fee for every transaction!",
    img: "/generated/feat-member.png",
    alt: "A premium loyalty card suggesting member savings",
  },
];

export default function PaymentPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="NearPay"
          title="Secure and Effortless Payment Solution"
          subtitle="Maximize your productivity, streamline processes for enhanced efficiency, and discover new revenue opportunities with our integrated solution platform!"
          primary={{ label: "Get Started", href: "/pricing" }}
          secondary={{ label: "Contact Us", href: "mailto:hello@neargo.ai" }}
          image="/generated/pay-hero.png"
          imageAlt="A customer tapping a contactless card on a NearPay terminal at a boutique counter"
        />

        <Section>
          <SectionHeader title="Empower Every Path of Your Business" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {EMPOWER.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Section>

        <Section className="!pt-0">
          <SectionHeader title="Comprehensive Services" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SERVICES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </Section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
