import type { Metadata } from "next";

import { AgentConnections } from "@/components/agent/AgentConnections";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Agent connections",
  description: "Connect Zerodha and tools for your Pocketedge agent on Pramaan.",
  alternates: { canonical: `${siteUrl()}/ai/connections` },
};

export default function AgentConnectionsPage() {
  return <AgentConnections />;
}
