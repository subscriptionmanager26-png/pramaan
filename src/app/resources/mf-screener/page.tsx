import type { Metadata } from "next";
import { MfScreener } from "@/components/tools/MfScreener";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/resources/mf-screener",
  title: "Mutual fund screener",
  description:
    "Screen equity Direct Growth funds by category, returns, risk, and fundamentals.",
});

export default function MfScreenerPage() {
  return <MfScreener />;
}
