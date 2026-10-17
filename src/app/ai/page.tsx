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
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
      <Suspense fallback={<p className="text-center text-ink-2">Loading chat…</p>}>
        <PramaanAgentChat />
      </Suspense>
    </div>
  );
}
