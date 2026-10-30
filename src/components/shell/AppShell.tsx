"use client";

import { usePathname } from "next/navigation";

import { AgentUiProvider, useOptionalAgentUi } from "@/components/agent/agent-ui-context";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

function AppShellChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const agentArea = pathname?.startsWith("/ai") ?? false;
  const agentUi = useOptionalAgentUi();
  const hideSiteHeader = agentArea && Boolean(agentUi?.conversationLive);

  return (
    <div
      className={`flex flex-col bg-paper text-ink ${agentArea ? "h-dvh max-h-dvh min-h-0" : "min-h-screen"}`}
    >
      {!hideSiteHeader ? <SiteHeader /> : null}
      <main className={agentArea ? "flex min-h-0 flex-1 flex-col overflow-hidden" : "flex-1"}>{children}</main>
      {!agentArea && <SiteFooter />}
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AgentUiProvider>
      <AppShellChrome>{children}</AppShellChrome>
    </AgentUiProvider>
  );
}
