import { cookies } from "next/headers";

import { paFetch, syncAgentUser } from "@/lib/personal-agents";
import type { PocketedgeUser } from "@/lib/pocketedge/session";

const GET_MS = 5_000;
const PUT_MS = 10_000;
const RECENT_TTL_MS = 10 * 60 * 1000;
const COOKIE = "pa_sync_ok";

/** Process-local: userId → last successful ensure timestamp. */
const recentOk = new Map<string, number>();

function markRecent(userId: string) {
  recentOk.set(userId, Date.now());
  if (recentOk.size > 500) {
    const cutoff = Date.now() - RECENT_TTL_MS;
    for (const [id, at] of recentOk) {
      if (at < cutoff) recentOk.delete(id);
    }
  }
}

function wasRecentLocal(userId: string) {
  const at = recentOk.get(userId);
  return Boolean(at && Date.now() - at < RECENT_TTL_MS);
}

/** Cookie shared across Fluid instances: `userId:epochMs`. */
async function wasRecentShared(userId: string) {
  try {
    const jar = await cookies();
    const raw = jar.get(COOKIE)?.value;
    if (!raw) return false;
    const [id, ts] = raw.split(":");
    if (id !== userId) return false;
    const at = Number(ts);
    return Number.isFinite(at) && Date.now() - at < RECENT_TTL_MS;
  } catch {
    return false;
  }
}

async function persistRecentShared(userId: string) {
  try {
    const jar = await cookies();
    jar.set(COOKIE, `${userId}:${Date.now()}`, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: Math.floor(RECENT_TTL_MS / 1000),
    });
  } catch {
    // cookies() can throw outside a request context
  }
}

async function wasRecent(userId: string) {
  return wasRecentLocal(userId) || (await wasRecentShared(userId));
}

async function remember(userId: string) {
  markRecent(userId);
  await persistRecentShared(userId);
}

/**
 * Ensure the Pocketedge user exists in personal-agents before PA API calls.
 * GET-first; PUT only on 404. Skip entirely when recently ok (process + cookie).
 */
export async function ensureAgentUserSynced(user: PocketedgeUser) {
  const t0 = Date.now();
  if (await wasRecent(user.id)) {
    console.info(
      "[agent-user-sync]",
      JSON.stringify({ userId: user.id, path: "skip_recent", status: 200, ms: 0 }),
    );
    return;
  }

  const path = `/api/v1/users/${encodeURIComponent(user.id)}`;

  try {
    const getRes = await paFetch(path, { signal: AbortSignal.timeout(GET_MS) });
    const getMs = Date.now() - t0;
    if (getRes.ok) {
      await remember(user.id);
      console.info(
        "[agent-user-sync]",
        JSON.stringify({ userId: user.id, path: "skip", status: getRes.status, ms: getMs }),
      );
      return;
    }
    if (getRes.status !== 404) {
      if (await wasRecent(user.id)) {
        console.warn(
          "[agent-user-sync]",
          JSON.stringify({
            userId: user.id,
            path: "skip_recent",
            status: getRes.status,
            ms: getMs,
          }),
        );
        return;
      }
      console.error(
        "[agent-user-sync]",
        JSON.stringify({ userId: user.id, path: "get", status: getRes.status, ms: getMs }),
      );
      // Fall through to PUT as a create/repair attempt.
    }
  } catch (error) {
    const getMs = Date.now() - t0;
    if (await wasRecent(user.id)) {
      console.warn(
        "[agent-user-sync]",
        JSON.stringify({
          userId: user.id,
          path: "skip_recent",
          status: 0,
          ms: getMs,
          error: error instanceof Error ? error.message : "get_failed",
        }),
      );
      return;
    }
    console.error(
      "[agent-user-sync]",
      JSON.stringify({
        userId: user.id,
        path: "get",
        status: 0,
        ms: getMs,
        error: error instanceof Error ? error.message : "get_failed",
      }),
    );
  }

  const putStart = Date.now();
  try {
    const result = await syncAgentUser(
      user.id,
      { name: user.name, email: user.email },
      true,
      { signal: AbortSignal.timeout(PUT_MS) },
    );
    const putMs = Date.now() - putStart;
    if (result.ok) await remember(user.id);
    console.info(
      "[agent-user-sync]",
      JSON.stringify({
        userId: user.id,
        path: "put",
        status: result.status,
        ms: putMs,
        ok: result.ok,
      }),
    );
    if (!result.ok && !(await wasRecent(user.id))) {
      throw new Error(`agent_user_sync_failed:${result.status}`);
    }
  } catch (error) {
    const putMs = Date.now() - putStart;
    const timedOut =
      error instanceof Error && (error.name === "TimeoutError" || /timeout/i.test(error.message));
    console.error(
      "[agent-user-sync]",
      JSON.stringify({
        userId: user.id,
        path: "put",
        status: 0,
        ms: putMs,
        error: timedOut ? "put_timeout" : error instanceof Error ? error.message : "put_failed",
      }),
    );
    if (await wasRecent(user.id)) return;
    throw error;
  }
}
