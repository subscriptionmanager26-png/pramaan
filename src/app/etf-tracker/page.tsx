import type { Metadata } from "next";
import { EtfInavTracker } from "@/components/tools/EtfInavTracker";

export const metadata: Metadata = {
  title: "ETF iNAV tracker",
  description: "Live LTP and NAV for NSE ETFs, with premium or discount versus NAV.",
};

export default function EtfTrackerPage() {
  return <EtfInavTracker />;
}
