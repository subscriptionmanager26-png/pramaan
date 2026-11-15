"use client";

import { createContext, useContext } from "react";

import type { AdvisorId } from "@/lib/agent/advisors";

export type AgentThreadSummary = {
  id: string;
  title: string;
  updatedAt: string;
  working: boolean;
};

type AgentShellContextValue = {
  threads: AgentThreadSummary[];
  /** True once the first sidebar threads fetch finished (ok or error). */
  threadsReady: boolean;
  refreshThreads: () => void;
  upsertThread: (thread: AgentThreadSummary) => void;
  /** Bumps when switching advisors so draft UI resets. */
  draftNonce: number;
  filesOpen: boolean;
  setFilesOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  /** Open the request-new-agent sheet (does not create an agent). */
  openRequestAgent: () => void;
  activeAdvisorId: AdvisorId | null;
  setActiveAdvisor: (id: AdvisorId) => void;
  /** Mobile: back to agent inbox (no agent selected). */
  showAgentInbox: () => void;
};

export const AgentShellContext = createContext<AgentShellContextValue | null>(null);

export function useAgentShell() {
  const ctx = useContext(AgentShellContext);
  if (!ctx) throw new Error("useAgentShell must be used within AgentWorkspace");
  return ctx;
}

export function useOptionalAgentShell() {
  return useContext(AgentShellContext);
}
