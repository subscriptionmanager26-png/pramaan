import type { Metadata } from "next";
import { SgbTracker } from "@/components/tools/SgbTracker";

export const metadata: Metadata = {
  title: "Gold tracker",
  description: "Live Sovereign Gold Bond series prices, coupons, and maturity years.",
};

export default function GoldTrackerPage() {
  return <SgbTracker />;
}
