import type { Metadata } from "next";
import { SgbTracker } from "@/components/tools/SgbTracker";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/gold-tracker",
  title: "Gold tracker",
  description: "Live Sovereign Gold Bond series prices, coupons, and maturity years.",
});

export default function GoldTrackerPage() {
  return <SgbTracker />;
}
