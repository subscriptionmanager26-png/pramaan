"use client";

import { useCallback, useEffect, useState } from "react";

import { useAgentShell } from "@/components/agent/agent-shell-context";
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

  const load = useCallback(async () => {
    setError(null);
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/connections", { headers });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error?.message || json?.error || "Could not load connections.");
        return;
      }
      setView(json as ConnectionsView);
    } catch {
      setError("Could not load connections.");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function zerodhaAction(action: "connect" | "disconnect" | "login") {
    setBusy(true);
    setError(null);
    try {
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
      if (typeof json.url === "string") {
        window.open(json.url, "_blank", "noopener,noreferrer");
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
          Link brokers and tools your agent can use. Credentials stay encrypted — the agent never sees your password.
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
          <div className="mt-4 flex flex-wrap gap-2">
            {!z?.connected ? (
              <button type="button" className="btn-primary text-sm" disabled={busy} onClick={() => zerodhaAction("connect")}>
                Connect Zerodha
              </button>
            ) : (
              <>
                <button type="button" className="btn-primary text-sm" disabled={busy} onClick={() => zerodhaAction("login")}>
                  {z.sessionActive ? "Refresh login" : "Log in on Zerodha"}
                </button>
                <button
                  type="button"
                  className="btn-secondary text-sm"
                  disabled={busy}
                  onClick={() => zerodhaAction("disconnect")}
                >
                  Disconnect
                </button>
              </>
            )}
          </div>
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
                <li key={c.id} className="rounded-xl border border-line px-4 py-3 text-sm">
                  <p className="font-medium text-ink">{c.name}</p>
                  <p className="truncate text-xs text-ink-3">{c.url}</p>
                  {c.hasSecret && <p className="mt-1 text-meta">Auth configured</p>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-line bg-paper-2 p-5">
          <h2 className="text-headline text-base">Vault</h2>
          <p className="mt-1 text-sm text-ink-2">
            {view ? (
              <>
                <span className="font-semibold text-ink">{view.vaultCount}</span> saved login
                {view.vaultCount === 1 ? "" : "s"} for sites your agent can use.
              </>
            ) : (
              "Saved logins your agent can use without seeing the password."
            )}
          </p>
        </section>
      </div>
    </div>
  );
}
