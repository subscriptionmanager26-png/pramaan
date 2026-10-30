"use client";

import { createContext, useContext } from "react";

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
  /** Bumps when user clicks New chat so an already-open draft resets. */
  draftNonce: number;
  filesOpen: boolean;
  setFilesOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  startNewChat: () => void;
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
