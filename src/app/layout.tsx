import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/AppShell";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pramaan · Company research memos",
    template: "%s · Pramaan",
  },
  description:
    "Hand-built company research memos tagged by company and industry. Ask AI. No demo content.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
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
