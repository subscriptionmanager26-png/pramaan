import type { Metadata } from "next";
import { MarketHolidayCalendar } from "@/components/tools/MarketHolidayCalendar";

export const metadata: Metadata = {
  title: "Market holidays",
  description: "NSE cash-market holiday calendar for Indian equities, sourced from the exchange.",
};

export default function MarketHolidaysPage() {
  return <MarketHolidayCalendar />;
}
