/** Localhost-only design preview for the multi-advisor AI shell (no auth required). */
export function aiTeamPreviewEnabled() {
  if (process.env.NEXT_PUBLIC_AI_TEAM_PREVIEW === "1") return true;
  // Fallback when env wasn't inlined into a client chunk yet.
  if (typeof window !== "undefined") {
    const h = window.location.hostname;
    if (h === "localhost" || h === "127.0.0.1") return true;
  }
  return false;
}
