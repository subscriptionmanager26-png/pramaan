import { Suspense } from "react";

import { AgentWorkspace } from "@/components/agent/AgentWorkspace";

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <Suspense fallback={<p className="p-8 text-center text-ink-2">Loading…</p>}>
        <AgentWorkspace>{children}</AgentWorkspace>
      </Suspense>
    </div>
  );
}
