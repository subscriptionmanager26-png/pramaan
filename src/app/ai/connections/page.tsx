import type { Metadata } from "next";

import { AgentConnections } from "@/components/agent/AgentConnections";
import { pageMetadata, privatePageRobots } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/ai/connections",
  title: "Agent connections",
  description: "Connect Zerodha and tools for your PocketEdge agent.",
  robots: privatePageRobots,
});

export default function AgentConnectionsPage() {
  return <AgentConnections />;
}
