import type { Metadata } from "next";

import { AgentConnections } from "@/components/agent/AgentConnections";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  path: "/ai/connections",
  title: "Zerodha",
  description: "Link your Zerodha account on PocketEdge for holdings and portfolio import.",
});

export default function AgentConnectionsPage() {
  return <AgentConnections />;
}
