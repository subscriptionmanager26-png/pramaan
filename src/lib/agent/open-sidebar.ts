export const AGENT_OPEN_SIDEBAR_EVENT = "pe-agent-open-sidebar";

export function openAgentSidebar() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(AGENT_OPEN_SIDEBAR_EVENT));
}
