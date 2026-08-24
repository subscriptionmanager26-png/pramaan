import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pramaan — SEBI-registered finance voices",
    template: "%s · Pramaan",
  },
  description:
    "A discovery feed of public work from SEBI-registered advisers and analysts. Indexed from Twitter, Substack, YouTube, and podcasts. Events are listed here; sign-up happens with the host.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper-2 text-ink">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
