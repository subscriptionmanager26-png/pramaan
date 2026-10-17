"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { AgentComposer } from "@/components/agent/chat/AgentComposer";
import { ChatTurn } from "@/components/agent/chat/AgentChatMessages";
import { ScrollAnchor } from "@/components/agent/chat/ScrollAnchor";
import type { AgentMessage } from "@/lib/agent/types";
import { formatBytes, MAX_FILE_BYTES } from "@/lib/agent/file-limits";
import {
  hydratePocketedgeSessionFromCookie,
  signInWithGoogleOnPramaan,
} from "@/lib/pocketedge/client-auth";
import { getPocketedgeSupabase, pocketedgeAuthConfigured } from "@/lib/pocketedge/supabase-browser";

import "./chat/pe-agent.css";

const SUGGESTIONS = [
  "What moved in Indian markets today?",
  "Summarise my portfolio risk",
  "Explain the latest RBI stance on rates",
];

async function authHeaders() {
  const supabase = getPocketedgeSupabase();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("not_signed_in");
  return { Authorization: `Bearer ${token}` };
}

function mergeSteps(steps: string[], label: string | undefined) {
  if (!label) return steps;
  const next = [...steps];
  if (next[next.length - 1] !== label) next.push(label);
  return next.slice(-12);
}

export function PramaanAgentChat() {
  const [ready, setReady] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [agentState, setAgentState] = useState<"unknown" | "active" | "disabled" | "error">("unknown");
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [busy, setBusy] = useState(false);
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
      const list = await fetch("/api/agent/messages?limit=50&threadId=main", { headers });
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

  const updateMessage = useCallback((id: string, patch: Partial<AgentMessage>) => {
    setMessages((m) => m.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }, []);

  async function streamMessage(messageId: string, headers: Record<string, string>): Promise<AgentMessage> {
    const res = await fetch(`/api/agent/messages/${messageId}/events`, { headers });
    if (!res.ok || !res.body) throw new Error("stream_failed");
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let latest: AgentMessage | null = null;
    let steps: string[] = [];

    const pullFull = async () => {
      const full = await fetch(`/api/agent/messages/${messageId}`, { headers });
      if (full.ok) {
        const json = await full.json();
        latest = json.message as AgentMessage;
        latest = { ...latest, steps };
        updateMessage(messageId, latest);
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
          const data = JSON.parse(dataLine.slice(5).trim()) as { type?: string; label?: string };
          if (data.type === "status" && data.label) {
            steps = mergeSteps(steps, data.label);
            updateMessage(messageId, { steps });
          }
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

  async function onSend(text: string, attachmentIds: string[]) {
    const q = text.trim();
    if ((!q && !attachmentIds.length) || busy) return false;
    setBusy(true);
    setError(null);
    try {
      const headers = await authHeaders();
      const res = await fetch("/api/agent/messages", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          text: q,
          threadId: "main",
          attachments: attachmentIds.length ? attachmentIds : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json?.error?.message || json?.error || "Could not send message.");
        return false;
      }
      const msg = { ...(json.message as AgentMessage), steps: ["Starting your agent…"] };
      setMessages((m) => [msg, ...m]);
      const final = await streamMessage(msg.id, headers);
      setMessages((m) => m.map((x) => (x.id === final.id ? final : x)));
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      return false;
    } finally {
      setBusy(false);
    }
  }

  const thread = useMemo(() => [...messages].reverse(), [messages]);
  const scrollKey = useMemo(
    () =>
      thread
        .map((m) => `${m.id}:${m.status}:${m.blocks.length}:${(m.steps ?? []).join("|")}`)
        .join(";"),
    [thread],
  );

  if (!ready) {
    return <p className="text-center text-[var(--pe-text-secondary)]">Loading…</p>;
  }

  if (!pocketedgeAuthConfigured()) {
    return (
      <p className="rounded-xl border border-dashed border-[var(--pe-border)] bg-[var(--pe-surface-muted)] px-6 py-12 text-center text-[var(--pe-text-secondary)]">
        Agent chat is not configured on this deployment yet.
      </p>
    );
  }

  if (!signedIn) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-[var(--pe-border)] bg-[var(--pe-surface)] px-6 py-10 text-center">
        <p className="text-[17px] font-semibold text-[var(--pe-text)]">Sign in to continue</p>
        <p className="mt-2 text-sm text-[var(--pe-text-secondary)]">
          Use your Pocketedge Google account to open your personal agent.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex rounded-full bg-[var(--pe-accent)] px-6 py-2.5 text-sm font-medium text-white"
          onClick={() => signInWithGoogleOnPramaan().catch(() => setError("Could not start Google sign-in."))}
        >
          Continue with Google
        </button>
      </div>
    );
  }

  if (agentState === "disabled") {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-[var(--pe-border)] bg-[var(--pe-surface)] px-6 py-10 text-center">
        <p className="text-[17px] font-semibold text-[var(--pe-text)]">Your agent is not enabled yet</p>
        <p className="mt-2 text-sm text-[var(--pe-text-secondary)]">
          Pocketedge turns this on from your account. Once enabled, refresh this page.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-[var(--pe-border)] px-5 py-2 text-sm font-medium"
          onClick={() => refreshSession()}
        >
          Check again
        </button>
      </div>
    );
  }

  const chatActive = agentState === "active";

  return (
    <div className="pe-agent flex min-h-[min(72vh,720px)] flex-col">
      <div className="mb-4 flex items-center gap-2 border-b border-[var(--pe-border)] pb-3">
        <span className="flex size-8 items-center justify-center rounded-lg bg-[var(--pe-accent-soft)] text-[var(--pe-accent)]">
          ✦
        </span>
        <div>
          <h2 className="text-base font-semibold text-[var(--pe-text)]">Pocketedge AI</h2>
          <p className="text-[12px] text-[var(--pe-text-secondary)]">Private agent · not investment advice</p>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[var(--pe-border)] bg-[var(--pe-surface)]">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          {!thread.length ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
              <p className="text-xl font-semibold text-[var(--pe-text)]">What can I help you with?</p>
              <p className="mt-2 max-w-sm text-sm text-[var(--pe-text-secondary)]">
                Ask about markets, upload a CAS or holdings file, or dig into a stock — your agent remembers this thread.
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl space-y-10">
              {thread.map((message) => (
                <ChatTurn key={message.id} message={message} />
              ))}
              <ScrollAnchor version={scrollKey} />
            </div>
          )}
        </div>

        <div className="border-t border-[var(--pe-border)] bg-gradient-to-t from-[var(--pe-surface-muted)] to-[var(--pe-surface)] px-4 py-4 sm:px-6">
          {error && (
            <p className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
          )}
          <div className="mx-auto max-w-3xl">
            <AgentComposer
              disabled={!chatActive || busy}
              getAuthHeaders={authHeaders}
              onSend={onSend}
              suggestions={thread.length ? undefined : SUGGESTIONS}
              hint={`PDF, CSV and Excel up to ${formatBytes(MAX_FILE_BYTES)}.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
