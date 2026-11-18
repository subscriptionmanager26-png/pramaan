import type { Metadata } from "next";
import { EtfInavTracker } from "@/components/tools/EtfInavTracker";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/etf-tracker",
  title: "ETF iNAV tracker",
  description: "Live LTP and NAV for NSE ETFs, with premium or discount versus NAV.",
});

export default function EtfTrackerPage() {
  return <EtfInavTracker />;
}
