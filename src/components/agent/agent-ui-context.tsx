"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type AgentUiValue = {
  /** Mobile live conversation — hide site header / use immersive chrome. */
  conversationLive: boolean;
  setConversationLive: (live: boolean) => void;
};

const AgentUiContext = createContext<AgentUiValue | null>(null);

export function AgentUiProvider({ children }: { children: React.ReactNode }) {
  const [conversationLive, setLive] = useState(false);
  const setConversationLive = useCallback((live: boolean) => setLive(live), []);
  const value = useMemo(() => ({ conversationLive, setConversationLive }), [conversationLive, setConversationLive]);
  return <AgentUiContext.Provider value={value}>{children}</AgentUiContext.Provider>;
}

export function useAgentUi() {
  const ctx = useContext(AgentUiContext);
  if (!ctx) throw new Error("useAgentUi must be used within AgentUiProvider");
  return ctx;
}

export function useOptionalAgentUi() {
  return useContext(AgentUiContext);
}
