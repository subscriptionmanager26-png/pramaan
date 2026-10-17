import type { Metadata } from "next";
import { Suspense } from "react";

import { PramaanAgentChat } from "@/components/agent/PramaanAgentChat";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "AI assistant",
  description:
    "Ask Pocketedge’s private AI about markets, portfolios, and research. Sign in with Google — same account as pocketedge.in.",
  alternates: { canonical: `${siteUrl()}/ai` },
};

export default function AiPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center text-ink-2">Loading chat…</p>}>
      <PramaanAgentChat />
    </Suspense>
  );
}
