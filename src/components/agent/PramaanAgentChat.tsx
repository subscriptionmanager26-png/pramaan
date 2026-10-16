"use client";

import { useCallback, useEffect, useState } from "react";

import type { AgentMessage } from "@/lib/agent/types";
import {
  hydratePocketedgeSessionFromCookie,
  openPocketedgeLogin,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

import { AgentBlocks } from "./AgentBlocks";

async function authHeaders() {
  const supabase = getPocketedgeSupabase();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("not_signed_in");
  return { Authorization: `Bearer ${token}` };
}

export function PramaanAgentChat() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [agentState, setAgentState] = useState<"unknown" | "active" | "disabled" | "error">("unknown");
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [live, setLive] = useState<AgentMessage | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refreshSession = useCallback(async () => {
    if (!pocketedgeAuthConfigured()) {
      setReady(true);
      return;
    }
    const supabase = getPocketedgeSupabase();
    const { data } = await supabase.auth.getSession();
    const ok = Boolean(data.session?.user);
    setSignedIn(ok);
    setReady(true);
    if (!ok) return;
    try {
      const headers = await authHeaders();
      const sync = await fetch("/api/agent/sync", { method: "POST", headers });
      const body = await sync.json();
      setAgentState(body.agent === "active" ? "active" : body.agent === "disabled" ? "disabled" : "error");
      const list = await fetch("/api/agent/messages?limit=10", { headers });
      if (list.ok) {
        const json = await list.json();
        setMessages((json.messages as AgentMessage[]) || []);
      }
    } catch {
      setAgentState("error");
    }
  }, []);

  useEffect(() => {
    if (!pocketedgeAuthConfigured()) return;
    let cancelled = false;
    (async () => {
      await hydratePocketedgeSessionFromCookie();
      if (!cancelled) await refreshSession();
    })();
    const supabase = getPocketedgeSupabase();
    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      refreshSession();
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, [refreshSession]);

  async function streamMessage(messageId: string, headers: Record<string, string>): Promise<AgentMessage> {
    const res = await fetch(`/api/agent/messages/${messageId}/events`, { headers });
    if (!res.ok || !res.body) throw new Error("stream_failed");
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let latest: AgentMessage | null = null;
    const pullFull = async () => {
      const full = await fetch(`/api/agent/messages/${messageId}`, { headers });
      if (full.ok) {
        const json = await full.json();
        latest = json.message as AgentMessage;
        setLive(latest);
      }
    };
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";
      for (const part of parts) {
        const dataLine = part.split("\n").find((l) => l.startsWith("data:"));
        if (!dataLine) continue;
        try {
          const data = JSON.parse(dataLine.slice(5).trim());
          if (data.type === "block" || data.type === "action_required" || data.type === "status") {
            await pullFull();
          }
          if (data.type === "done" || data.type === "error") {
            await pullFull();
            if (latest) return latest;
          }
        } catch {
          /* ignore */
        }
      }
    }
    if (latest) return latest;
    throw new Error("stream_empty");
  }

  async function onSend(value?: string) {
    const q = (value ?? text).trim();
    if (!q || busy) return;
    setText("");
    setBusy(true);
    setError(null);
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/messages", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ text: q, threadId: "main" }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error?.message || json?.error || "Could not send message.");
        return;
      }
      const msg = json.message as AgentMessage;
      setLive(msg);
      setMessages((m) => [msg, ...m]);
      const final = await streamMessage(msg.id, headers);
      setMessages((m) => m.map((x) => (x.id === final.id ? final : x)));
      setLive(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (!ready) {
    return <p className="text-center text-ink-2">Loading…</p>;
  }

  if (!pocketedgeAuthConfigured()) {
    return (
      <p className="rounded-xl border border-dashed border-line bg-paper-2 px-6 py-12 text-center text-ink-2">
        Agent chat is not configured on this deployment yet.
      </p>
    );
  }

  if (!signedIn) {
    return (
      <div className="rounded-2xl border border-line bg-white px-6 py-12 text-center">
        <p className="text-[17px] font-medium text-ink">Sign in to use your agent</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-2">
          Being logged in on pocketedge.in does not always carry over to Pramaan in the same tab—each site keeps its own
          copy of the session unless a shared cookie is present. Use the same Google account below (one-time on this page).
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              signInWithGoogleOnPramaan().catch(() => setError("Could not start Google sign-in."));
            }}
          >
            Continue with Google
          </button>
          <button type="button" className="btn-secondary" onClick={() => openPocketedgeLogin()}>
            Open pocketedge.in
          </button>
        </div>
      </div>
    );
  }

  if (agentState === "disabled") {
    return (
      <div className="rounded-2xl border border-line bg-white px-6 py-12 text-center">
        <p className="text-[17px] font-medium text-ink">Your agent is not enabled yet</p>
        <p className="mt-2 text-sm text-ink-2">
          Pocketedge turns this on from your account settings. Once enabled, come back here and refresh.
        </p>
        <button type="button" className="btn-secondary mt-6" onClick={() => refreshSession()}>
          Check again
        </button>
      </div>
    );
  }

  const show = live || messages[0];

  return (
    <div className="space-y-8">
      {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>}

      {show && (
        <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <p className="text-meta uppercase tracking-[0.14em] text-accent">Your question</p>
          <h2 className="mt-2 text-[1.2rem] font-bold text-ink">{show.text}</h2>
          {show.status === "working" && (
            <p className="mt-4 text-sm text-ink-2">Working on your answer…</p>
          )}
          {show.error && <p className="mt-4 text-sm text-red-700">{show.error}</p>}
          <div className="mt-6">
            <AgentBlocks blocks={show.blocks} actions={show.actions} />
          </div>
        </article>
      )}

      <form
        className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={busy || agentState !== "active"}
          placeholder="Ask about rates, sectors, or your portfolio…"
          className="h-12 flex-1 rounded-full border border-ink/20 bg-white px-5 text-[15px] outline-none ring-accent focus:ring-2 disabled:opacity-60"
        />
        <button type="submit" disabled={busy || agentState !== "active"} className="btn-primary h-12 px-6 disabled:opacity-60">
          {busy ? "Thinking…" : "Ask"}
        </button>
      </form>
      <p className="text-center text-meta text-ink-2">Not investment advice. Powered by your private Pocketedge agent.</p>
    </div>
  );
}
