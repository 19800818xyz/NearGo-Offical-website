import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { VersionSwitcher } from "@/components/version-switcher";
import { AiButlerMount } from "@/components/ai-butler/ai-butler";

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
        <AiButlerMount />
      </body>
    </html>
  );
}
