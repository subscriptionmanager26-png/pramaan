import { syncAgentUser } from "@/lib/personal-agents";
import type { PocketedgeUser } from "@/lib/pocketedge/session";

/** Ensure the Pocketedge user exists in personal-agents before PA API calls. */
export async function ensureAgentUserSynced(user: PocketedgeUser) {
  await syncAgentUser(user.id, { name: user.name, email: user.email }, true);
}
