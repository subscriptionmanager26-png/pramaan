import type { Advisor } from "@/lib/agent/advisors";

/** Shown site-wide while agent chat is paused. */
export const AGENTS_CREDITS_BANNER_TEXT =
  "Due to high demand we have exhausted all our credits. Agents will be live again on 25th Nov";

/** Chat resumes at the start of this instant (IST). */
export const AGENTS_CREDITS_RESUME_AT = new Date("2026-11-25T00:00:00+05:30");

function envForcesOff() {
  return (
    process.env.AGENTS_CREDITS_OUTAGE === "0" || process.env.NEXT_PUBLIC_AGENTS_CREDITS_OUTAGE === "0"
  );
}

function envForcesOn() {
  return (
    process.env.AGENTS_CREDITS_OUTAGE === "1" || process.env.NEXT_PUBLIC_AGENTS_CREDITS_OUTAGE === "1"
  );
}

/** Global pause on agentic (live) advisors — auto-off after resume date unless env overrides. */
export function agentsCreditsOutageActive(at: Date = new Date()): boolean {
  if (envForcesOff()) return false;
  if (envForcesOn()) return true;
  return at < AGENTS_CREDITS_RESUME_AT;
}

/** Unlocked specialists that normally accept chat — paused during the credits outage. */
export function isAgenticAdvisorChatPaused(advisor: Advisor, at: Date = new Date()): boolean {
  return advisor.status === "unlocked" && agentsCreditsOutageActive(at);
}