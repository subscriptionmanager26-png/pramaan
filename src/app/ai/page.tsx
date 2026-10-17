import type { Metadata } from "next";

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
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10 text-center">
        <p className="text-meta uppercase tracking-[0.14em] text-accent">Pocketedge agent</p>
        <h1 className="mt-2 text-section text-ink">Ask Pramaan AI</h1>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-6 text-ink-2">
          Portfolio reviews, uploads, and market questions — powered by your personal agent. Sign in with Google to
          continue.
        </p>
      </header>
      <PramaanAgentChat />
    </div>
  );
}
