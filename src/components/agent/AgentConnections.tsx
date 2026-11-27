"use client";

import { useCallback, useEffect, useState } from "react";

import { useAgentShell } from "@/components/agent/agent-shell-context";
import { openZerodhaLoginTab } from "@/lib/portfolio/zerodha-start";
import { getPocketedgeSupabase } from "@/lib/pocketedge/supabase-browser";

type McpRow = {
  id: string;
  name: string;
  url: string;
  hasSecret: boolean;
};

type ConnectionsView = {
  zerodha: {
    connected: boolean;
    loggedInAs: string | null;
    sessionActive: boolean;
  };
  mcp: McpRow[];
  vaultCount: number;
};

async function authHeaders() {
  const supabase = getPocketedgeSupabase();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("not_signed_in");
  return { Authorization: `Bearer ${token}` };
}

export function AgentConnections() {
  const { refreshThreads } = useAgentShell();
  const [view, setView] = useState<ConnectionsView | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [kiteConsentDone, setKiteConsentDone] = useState(false);

  const load = useCallback(async () => {
    setError(null);
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/connections", { headers });
      const text = await res.text();
      let json: Record<string, unknown> = {};
      try {
        json = text ? (JSON.parse(text) as Record<string, unknown>) : {};
      } catch {
        setError(
          res.status === 404
            ? "Connections API is not available yet. The agent backend may need an update."
            : "Could not load connections (invalid response from server).",
        );
        return;
      }
      if (!res.ok) {
        const err = json.error as { message?: string } | string | undefined;
        setError(
          (typeof err === "object" && err?.message) ||
            (typeof err === "string" ? err : null) ||
            "Could not load connections.",
        );
        return;
      }
      const next = json as ConnectionsView;
      setView(next);
      if (next.zerodha?.sessionActive) setKiteConsentDone(false);
    } catch {
      setError("Could not load connections. Check your network and try again.");
    }
  }, []);

  useEffect(() => {
    void load();
    const params = new URLSearchParams(window.location.search);
    const kiteMcp = params.get("kiteMcp");
    if (kiteMcp === "error") {
      const msg = params.get("msg") || "Kite permission could not be completed.";
      setError(msg);
    }
    if (kiteMcp === "ready") {
      setKiteConsentDone(true);
    }
    if (kiteMcp) {
      params.delete("kiteMcp");
      params.delete("msg");
      const path = `${window.location.pathname}${params.toString() ? `?${params}` : ""}`;
      window.history.replaceState({}, "", path);
    }
  }, [load]);

  useEffect(() => {
    const onFocus = () => void load();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [load]);

  async function zerodhaAction(action: "connect" | "disconnect" | "login") {
    setBusy(true);
    setError(null);
    try {
      if (action === "connect" || action === "login") {
        const result = await openZerodhaLoginTab(action);
        if (!result.ok) {
          setError(result.error);
          return;
        }
        window.setTimeout(() => {
          void load();
          refreshThreads();
        }, 1500);
        return;
      }
      const headers = await authHeaders();
      const res = await fetch("/api/agent/zerodha", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error?.message || json?.error || "Zerodha action failed.");
        return;
      }
      await load();
      refreshThreads();
    } catch {
      setError("Zerodha action failed.");
    } finally {
      setBusy(false);
    }
  }

  const z = view?.zerodha;
  const customMcp = view?.mcp ?? [];

  const primaryLabel = !z?.connected
    ? "Connect Zerodha"
    : z.sessionActive
      ? "Refresh Zerodha login"
      : "Log in on Zerodha";
  const primaryAction = !z?.connected ? "connect" : "login";

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <header className="border-b border-line px-4 py-5 sm:px-6">
        <h1 className="text-section text-xl sm:text-2xl">Zerodha</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-2">
          Link your account to import holdings and let the agent read quotes and positions. You confirm any trades in
          chat.
        </p>
      </header>

      <div className="mx-auto w-full max-w-2xl space-y-6 px-4 py-6 sm:px-6">
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
        )}

        <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-headline text-base">Kite link</h2>
              <p className="mt-1 text-sm text-ink-2">
                {z?.sessionActive
                  ? "Your Zerodha session is active. Portfolio import and agent queries can use live data."
                  : z?.connected
                    ? "Account linked — log in on Zerodha to refresh today’s session."
                    : "Not linked yet. Connect once, then log in when prompted."}
              </p>
            </div>
            {z?.connected && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  z.sessionActive ? "bg-accent-2 text-accent" : "bg-paper-2 text-ink-2"
                }`}
              >
                {z.sessionActive ? "Session active" : "Login needed"}
              </span>
            )}
          </div>
          {z?.connected && z.loggedInAs && (
            <p className="mt-3 text-sm text-ink">Logged in as {z.loggedInAs}</p>
          )}
          {kiteConsentDone && !z?.sessionActive ? (
            <div className="mt-4 rounded-xl border border-accent-2 bg-accent-2/40 px-4 py-3 text-sm text-ink">
              <p className="font-medium">PocketEdge can reach Kite.</p>
              <p className="mt-1 text-[13px] text-ink-2">
                Tap <strong>{primaryLabel}</strong> below (opens a new tab). Finish Zerodha login, then return here.
              </p>
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-primary text-sm"
              disabled={busy}
              onClick={() => void zerodhaAction(primaryAction)}
            >
              {busy ? "Opening Zerodha…" : primaryLabel}
            </button>
            {z?.connected ? (
              <button
                type="button"
                className="btn-secondary text-sm"
                disabled={busy}
                onClick={() => void zerodhaAction("disconnect")}
              >
                Disconnect
              </button>
            ) : null}
          </div>
          <p className="mt-3 text-xs text-ink-3">
            Finish steps in the Zerodha tab, then come back. Status updates when this window is focused.
          </p>
        </section>

        {customMcp.length > 0 ? (
          <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h2 className="text-headline text-base">Other agent tools</h2>
            <p className="mt-1 text-sm text-ink-2">Extra MCP servers on your account (advanced).</p>
            <ul className="mt-4 space-y-2">
              {customMcp.map((c) => (
                <li key={c.id} className="rounded-xl border border-line px-3 py-2 text-sm">
                  <p className="font-medium text-ink">{c.name}</p>
                  <p className="truncate text-ink-3">{c.url}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}