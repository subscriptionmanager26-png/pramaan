import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/AppShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd, webApplicationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
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
    default: "PocketEdge : Manage Money like a pro with AI",
    template: "%s · PocketEdge",
  },
  description:
    "PocketEdge gives you a team of smart AI Agents that can help you with anything from mutual funds to complex options trading",
  openGraph: {
    type: "website",
    siteName: "PocketEdge",
    locale: "en_IN",
    url: siteUrl(),
    title: "PocketEdge : Manage Money like a pro with AI",
    description:
      "PocketEdge gives you a team of smart AI Agents that can help you with anything from mutual funds to complex options trading",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "PocketEdge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketEdge : Manage Money like a pro with AI",
    description:
      "PocketEdge gives you a team of smart AI Agents that can help you with anything from mutual funds to complex options trading",
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
        <JsonLd data={[organizationJsonLd(), websiteJsonLd(), webApplicationJsonLd()]} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
