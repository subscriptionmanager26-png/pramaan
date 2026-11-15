import type { Metadata } from "next";
import { Suspense } from "react";

import { PramaanAgentChat } from "@/components/agent/PramaanAgentChat";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI team",
  description:
    "Talk to PocketEdge’s private AI team — a general market co-pilot and MF AI. Trader, Stock, Tax, and Macro are coming soon.",
  alternates: { canonical: `${siteUrl()}/ai` },
};

export default function AiPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center text-ink-2">Loading chat…</p>}>
      <PramaanAgentChat />
    </Suspense>
  );
}
