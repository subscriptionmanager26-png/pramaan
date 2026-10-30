import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/AppShell";
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
    default: "Manage money like a pro",
    template: "%s · PocketEdge",
  },
  description:
    "Indian markets desk, company research, advisors, and your private Pocketedge AI — sign in with Google on pocketedge.in.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "PocketEdge",
    locale: "en_IN",
    url: siteUrl(),
    title: "Manage money like a pro",
    description:
      "Browse Indian stocks, mutual funds, and ETFs. Read research, track ideas, and chat with your AI assistant.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Manage money like a pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manage money like a pro",
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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
