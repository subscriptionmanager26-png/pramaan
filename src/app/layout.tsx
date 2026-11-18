import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/AppShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { siteUrl } from "@/lib/site-url";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "PocketEdge — Indian markets, research & tools",
    template: "%s · PocketEdge",
  },
  description:
    "News desk, stock research, SEBI-registered advisors, and free market tools for Indian investors. Sign in for portfolio and AI on pocketedge.in.",
  openGraph: {
    type: "website",
    siteName: "PocketEdge",
    locale: "en_IN",
    url: siteUrl(),
    title: "PocketEdge — Indian markets, research & tools",
    description:
      "Browse Indian stocks, mutual funds, and ETFs. Read research, track ideas, and chat with your AI assistant.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "PocketEdge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketEdge — Indian markets, research & tools",
    description:
      "Browse Indian stocks, mutual funds, and ETFs. Read research and chat with your AI assistant.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
