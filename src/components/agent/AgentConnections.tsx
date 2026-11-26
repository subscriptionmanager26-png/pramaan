"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

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
    mcpBackendReady?: boolean;
    mcpBackendMessage?: string | null;
    mcpBackendPublicUrl?: string | null;
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
  const [operatorEmail, setOperatorEmail] = useState<string | null>(null);

  const adminOAuthHref = useMemo(() => "/api/agent/kite-mcp/oauth-start?returnTo=/ai/connections", []);

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
      setView(json as ConnectionsView);
      const {
        data: { user },
      } = await getPocketedgeSupabase().auth.getUser();
      setOperatorEmail(user?.email ?? null);
    } catch {
      setError("Could not load connections. Check your network and try again.");
    }
  }, []);

  useEffect(() => {
    void load();
    const params = new URLSearchParams(window.location.search);
    const kiteMcp = params.get("kiteMcp");
    if (kiteMcp === "ready") {
      setError(null);
      void load();
    } else if (kiteMcp === "error") {
      const msg = params.get("msg") || "Server authorization failed.";
      setError(msg);
    }
    if (kiteMcp) {
      params.delete("kiteMcp");
      params.delete("msg");
      const path = `${window.location.pathname}${params.toString() ? `?${params}` : ""}`;
      window.history.replaceState({}, "", path);
    }
  }, [load]);

  // After Kite login tab closes / user returns, refresh session status.
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
        // Give the new tab a moment, then refresh status.
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

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
      <header className="border-b border-line px-4 py-5 sm:px-6">
        <h1 className="text-section text-xl sm:text-2xl">Connections</h1>
        <p className="mt-1 max-w-2xl text-sm text-ink-2">
          Link brokers and tools your agent can use. Credentials stay encrypted; the agent never sees your password.
        </p>
      </header>

      <div className="mx-auto w-full max-w-2xl space-y-6 px-4 py-6 sm:px-6">
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
        )}

        <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-headline text-base">Zerodha</h2>
              <p className="mt-1 text-sm text-ink-2">
                Read holdings, positions, and prices through Kite. Orders still need your confirmation in chat.
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
          {z && z.mcpBackendReady === false && z.mcpBackendMessage ? (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
              <p className="font-semibold">Zerodha server not authorized yet</p>
              <p className="mt-1 text-[13px] leading-relaxed">{z.mcpBackendMessage}</p>
              <p className="mt-2 flex flex-wrap items-center gap-2">
                <a href={adminOAuthHref} className="btn-primary text-sm no-underline">
                  Authorize Zerodha server
                </a>
                <span className="text-xs text-amber-900/80">Signed-in PocketEdge user · ~1 minute · auto-renews when possible</span>
              </p>
              {operatorEmail ? (
                <p className="mt-2 text-[11px] text-amber-900/70">Signed in as {operatorEmail}</p>
              ) : null}
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {!z?.connected ? (
              <button
                type="button"
                className="btn-primary text-sm"
                disabled={busy || z?.mcpBackendReady === false}
                onClick={() => void zerodhaAction("connect")}
              >
                {busy ? "Opening Zerodha…" : "Connect Zerodha"}
              </button>
            ) : (
              <>
                <button type="button" className="btn-primary text-sm" disabled={busy} onClick={() => void zerodhaAction("login")}>
                  {busy ? "Opening Zerodha…" : z.sessionActive ? "Refresh login" : "Log in on Zerodha"}
                </button>
                <button
                  type="button"
                  className="btn-secondary text-sm"
                  disabled={busy}
                  onClick={() => void zerodhaAction("disconnect")}
                >
                  Disconnect
                </button>
              </>
            )}
          </div>
          <p className="mt-3 text-xs text-ink-3">
            Opens Zerodha in a new tab. Finish login there, then come back. Status refreshes when this window is focused.
          </p>
        </section>

        <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <h2 className="text-headline text-base">MCP integrations</h2>
          <p className="mt-1 text-sm text-ink-2">Custom MCP servers you have added for this agent.</p>
          {!view ? (
            <p className="mt-4 text-sm text-ink-3">Loading…</p>
          ) : !view.mcp.length ? (
            <p className="mt-4 text-sm text-ink-3">
              No custom MCP servers yet. Ask your agent to help add one, or use the Pocketedge studio for advanced setup.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {view.mcp.map((c) => (
                <li key={c.id} className="rounded-xl border border-line px-3 py-2 text-sm">
                  <p className="font-medium text-ink">{c.name}</p>
                  <p className="truncate text-ink-3">{c.url}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {view ? (
          <p className="text-sm text-ink-3">{view.vaultCount} vault item{view.vaultCount === 1 ? "" : "s"} stored.</p>
        ) : null}
      </div>
    </div>
  );
}
