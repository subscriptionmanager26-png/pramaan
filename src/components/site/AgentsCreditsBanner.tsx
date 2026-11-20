"use client";

import { AlertTriangle } from "lucide-react";

import { AGENTS_CREDITS_BANNER_TEXT, agentsCreditsOutageActive } from "@/lib/agent/agents-credits-outage";

export function AgentsCreditsBanner() {
  if (!agentsCreditsOutageActive()) return null;

  return (
    <div
      role="status"
      className="border-b border-amber-200/80 bg-amber-50 px-4 py-2 text-center text-[13px] font-medium leading-snug text-amber-950 sm:text-sm"
    >
      <span className="inline-flex items-start justify-center gap-2 sm:items-center">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-700 sm:mt-0" aria-hidden />
        <span>{AGENTS_CREDITS_BANNER_TEXT}</span>
      </span>
    </div>
  );
}