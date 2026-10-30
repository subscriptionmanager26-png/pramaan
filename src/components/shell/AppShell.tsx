"use client";

import { usePathname } from "next/navigation";

import { AgentUiProvider, useOptionalAgentUi } from "@/components/agent/agent-ui-context";
import { BOTTOM_NAV_PAD, BottomNav } from "@/components/shell/BottomNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

function AppShellChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const agentArea = pathname?.startsWith("/ai") ?? false;
  const agentUi = useOptionalAgentUi();
  // Live conversation: immersive — hide site header + bottom tabs (Multibagg / Pocketedge pattern).
  const immersiveAi = agentArea && Boolean(agentUi?.conversationLive);
  const showBottomNav = !immersiveAi;

  return (
    <div
      className={`flex flex-col bg-paper text-ink ${agentArea ? "h-dvh max-h-dvh min-h-0" : "min-h-screen"}`}
    >
      {!immersiveAi ? <SiteHeader /> : null}
      <main
        className={
          agentArea
            ? `flex min-h-0 flex-1 flex-col overflow-hidden ${showBottomNav ? BOTTOM_NAV_PAD : ""}`
            : `flex-1 ${showBottomNav ? BOTTOM_NAV_PAD : ""}`
        }
      >
        {children}
      </main>
      {!agentArea ? <SiteFooter /> : null}
      {showBottomNav ? <BottomNav /> : null}
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
