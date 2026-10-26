"use client";

import { createContext, useContext } from "react";

import type { AgentMessage, JobAttachment, OrderState } from "@/lib/agent/types";

export type AgentThreadSummary = {
  id: string;
  title: string;
  updatedAt: string;
  working: boolean;
};

export type AgentBootstrapChat = {
  threadId: string;
  messages: AgentMessage[];
  orders: Record<string, OrderState>;
  files: JobAttachment[];
};

type AgentShellContextValue = {
  threads: AgentThreadSummary[];
  refreshThreads: () => void;
  upsertThread: (thread: AgentThreadSummary) => void;
  bootstrapChat: AgentBootstrapChat | null;
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
