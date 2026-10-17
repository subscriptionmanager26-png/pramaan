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
  refreshThreads: () => void;
  filesOpen: boolean;
  setFilesOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export const AgentShellContext = createContext<AgentShellContextValue | null>(null);

export function useAgentShell() {
  const ctx = useContext(AgentShellContext);
  if (!ctx) throw new Error("useAgentShell must be used within AgentWorkspace");
  return ctx;
}
