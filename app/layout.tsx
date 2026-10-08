import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { VersionSwitcher } from "@/components/version-switcher";
import { KnocketPosition } from "@/components/knocket-position";

export const metadata: Metadata = {
  title: "NearGo — Unlock Growth with Easy Management & Operations",
  description:
    "NearGo connects you with millions of local and international users across the MENA region. Run your shop with NearShop, accept payments with NearPay, and let NearBossAI manage operations.",
  metadataBase: new URL("https://neargo.ai"),
  openGraph: {
    title: "NearGo — Grow across MENA",
    description:
      "One platform for shop management (NearShop), multi-scenario payments (NearPay) and an AI store manager (NearBossAI).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <VersionSwitcher />
        {/* ShopMind — real RAG-backed chat widget (external). Replaces the earlier canned mock. */}
        <Script
          src="https://neargo-rag-kb-2.onrender.com/widget.js"
          strategy="afterInteractive"
          data-title="ShopMind"
          data-subtitle="Online"
          data-color="#E8862F"
          data-welcome="Hi! I'm ShopMind. Ask me about NearShop, NearPay, pricing or getting started."
          data-placeholder="Ask anything about NearGo..."
          data-suggestions="What is NearShop?|NearPay fees?|Pricing plans|How do I sign up?"
        />
        {/* Knocket — multi-channel live-chat / contact widget (TRTC). */}
        <Script
          src="https://trtc.io/knocket-sdk/sdk.js?identifier=f61c5e61182289c52c&v=1791443706504"
          strategy="afterInteractive"
        />
        <KnocketPosition />
      </body>
    </html>
  );
}
