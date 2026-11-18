import type { Metadata } from "next";
import { MarketHolidayCalendar } from "@/components/tools/MarketHolidayCalendar";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/market-holidays",
  title: "Market holidays",
  description: "NSE cash-market holiday calendar for Indian equities, sourced from the exchange.",
});

export default function MarketHolidaysPage() {
  return <MarketHolidayCalendar />;
}
