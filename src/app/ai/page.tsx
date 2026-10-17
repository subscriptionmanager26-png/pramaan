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
    <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <PramaanAgentChat />
    </div>
  );
}
