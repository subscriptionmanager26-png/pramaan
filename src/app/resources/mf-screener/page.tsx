import type { Metadata } from "next";
import { MfScreener } from "@/components/tools/MfScreener";

export const metadata: Metadata = {
  title: "Mutual fund screener",
  description:
    "Screen equity Direct Growth funds by category, returns, risk, and fundamentals.",
};

export default function MfScreenerPage() {
  return <MfScreener />;
}
