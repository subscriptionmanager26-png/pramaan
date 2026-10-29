"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import {
  ACCEPTED_EXTENSIONS,
  ACCEPTED_FILE_TYPES,
  formatBytes,
  MAX_ATTACHMENTS,
  MAX_FILE_BYTES,
} from "@/lib/agent/file-limits";
import { uploadAgentFile } from "@/lib/agent/upload-file";

type Item = {
  key: string;
  name: string;
  size: number;
  status: "uploading" | "ready" | "needs_password" | "unlocking" | "error";
  id?: string;
  error?: string;
  password?: string;
  /** 0–100 while status is uploading */
  progress?: number;
  progressPhase?: "upload" | "process";
};

async function errorMessage(res: Response) {
  const body = await res.json().catch(() => undefined);
  if (body && typeof body === "object") {
    const err = (body as { error?: { message?: string; code?: string } | string }).error;
    if (typeof err === "string" && err) return err;
    if (err && typeof err === "object" && err.message) {
      if (err.code === "uploads_unavailable" || res.status === 503) {
        return "File uploads are not available on the agent server yet. Try again later or contact support.";
      }
      return err.message;
    }
    if (typeof (body as { message?: string }).message === "string") return (body as { message: string }).message;
  }
  if (res.status === 413) return "File is too large for upload.";
  if (res.status === 401) return "Sign in again to upload files.";
  if (res.status === 504 || res.status === 408) {
    return "Upload timed out. Try a smaller file, or retry in a moment.";
  }
  if (res.status === 500 || res.status === 502 || res.status === 503) {
    return "Upload failed on the server. Retry in a moment — the first attach after idle can be slow.";
  }
  return `Upload failed (${res.status})`;
}

async function errorMessageFromBody(status: number, body: unknown) {
  if (body && typeof body === "object") {
    const err = (body as { error?: { message?: string; code?: string } | string }).error;
    if (typeof err === "string" && err) return err;
    if (err && typeof err === "object" && err.message) {
      if (err.code === "uploads_unavailable" || status === 503) {
        return "File uploads are not available on the agent server yet. Try again later or contact support.";
      }
      return err.message;
    }
  }
  if (status === 413) return "File is too large for upload.";
  if (status === 401) return "Sign in again to upload files.";
  if (status === 504 || status === 408) return "Upload timed out. Try a smaller file, or retry in a moment.";
  if (status === 500 || status === 502 || status === 503) {
    return "Upload failed on the server. Retry in a moment — the first attach after idle can be slow.";
  }
  return `Upload failed (${status})`;
}

export function AgentComposer({
  disabled,
  onSend,
  getAuthHeaders,
  suggestions,
  hint,
  initialText,
  seedToken,
  openFilePickerToken,
  onReadyAttachmentIds,
  autoSendWhenReady,
}: {
  disabled?: boolean;
  getAuthHeaders: () => Promise<Record<string, string>>;
  onSend: (text: string, attachmentIds: string[]) => Promise<boolean>;
  suggestions?: string[];
  hint?: ReactNode;
  /** Prefill textarea when `seedToken` increments. */
  initialText?: string | null;
  seedToken?: number;
  /** When this number increments, open the file picker (used by empty-state Upload CTAs). */
  openFilePickerToken?: number;
  /** Fires whenever the set of ready attachment ids changes. */
  onReadyAttachmentIds?: (ids: string[]) => void;
  /**
   * When true, once every attached file is ready (none uploading / needing password),
   * automatically send with empty text so the parent can apply a default parse prompt.
   * Only fires once per batch of attachments.
   */
  autoSendWhenReady?: boolean;
}) {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [dragging, setDragging] = useState(false);
  const [sending, setSending] = useState(false);
  const [attachError, setAttachError] = useState<string | null>(null);
  const picker = useRef<HTMLInputElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const lastSeedToken = useRef(0);
  const lastPickerToken = useRef(0);
  const lastReadyKey = useRef("");
  const autoSentKey = useRef("");

  useEffect(() => {
    if (!seedToken || seedToken === lastSeedToken.current) return;
    lastSeedToken.current = seedToken;
    if (initialText) setText(initialText);
    requestAnimationFrame(() => input.current?.focus());
  }, [seedToken, initialText]);

  useEffect(() => {
    if (!openFilePickerToken || openFilePickerToken === lastPickerToken.current) return;
    lastPickerToken.current = openFilePickerToken;
    picker.current?.click();
  }, [openFilePickerToken]);

  const patch = (key: string, next: Partial<Item>) =>
    setItems((cur) => cur.map((i) => (i.key === key ? { ...i, ...next } : i)));

  const upload = async (file: File, key: string, headers: Record<string, string>) => {
    patch(key, { progress: 0, progressPhase: "upload" });
    try {
      const result = await uploadAgentFile(file, headers, (p) => {
        patch(key, { progress: p.percent, progressPhase: p.phase });
      });
      if (!result.ok) {
        return patch(key, {
          status: "error",
          error: await errorMessageFromBody(result.status, result.body),
          progress: undefined,
          progressPhase: undefined,
        });
      }
      patch(key, {
        id: result.file.id,
        status: result.file.status === "needs_password" ? "needs_password" : "ready",
        progress: undefined,
        progressPhase: undefined,
      });
    } catch (err) {
      const timeout = err instanceof Error && err.message === "timeout";
      patch(key, {
        status: "error",
        error: timeout
          ? "Upload timed out. Try a smaller file, or retry in a moment."
          : "Upload failed. Check your connection.",
        progress: undefined,
        progressPhase: undefined,
      });
    }
  };

  const addFiles = async (list: FileList | File[]) => {
    setAttachError(null);
    const files = Array.from(list);
    const room = MAX_ATTACHMENTS - items.length;
    if (room <= 0) {
      setAttachError(`You can attach up to ${MAX_ATTACHMENTS} files.`);
      return;
    }
    const batch = files.slice(0, room);
    const added: Item[] = batch.map((f) => {
      const dot = f.name.lastIndexOf(".");
      const ext = dot >= 0 ? f.name.slice(dot).toLowerCase() : "";
      const key = `${f.name}-${f.size}-${Math.random().toString(36).slice(2)}`;
      const error = !ACCEPTED_EXTENSIONS.includes(ext)
        ? "Only PDF, CSV, Excel, or images (PNG/JPG/WEBP)"
        : f.size > MAX_FILE_BYTES
          ? `Larger than ${formatBytes(MAX_FILE_BYTES)}`
          : undefined;
      return { key, name: f.name, size: f.size, status: error ? "error" : "uploading", error };
    });
    setItems((cur) => [...cur, ...added]);
    if (files.length > room) {
      setAttachError(`Only ${room} more file${room === 1 ? "" : "s"} fit in this message.`);
    }

    const pending = added
      .map((item, i) => ({ item, file: batch[i] }))
      .filter(({ item }) => item.status === "uploading");
    if (!pending.length) return;

    try {
      const headers = await getAuthHeaders();
      for (const { item, file } of pending) {
        void upload(file, item.key, headers);
      }
    } catch {
      setAttachError("Could not start upload. Sign in again and retry.");
      setItems((cur) =>
        cur.map((i) =>
          pending.some((p) => p.item.key === i.key) ? { ...i, status: "error", error: "Sign in required" } : i,
        ),
      );
    }
  };

  const unlock = async (item: Item, headers: Record<string, string>) => {
    if (!item.id || !item.password) return;
    patch(item.key, { status: "unlocking", error: undefined });
    const res = await fetch(`/api/agent/files/${encodeURIComponent(item.id)}/unlock`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ password: item.password }),
    });
    if (res.ok) patch(item.key, { status: "ready", password: undefined });
    else patch(item.key, { status: "needs_password", error: await errorMessage(res), password: "" });
  };

  const ready = items.filter((i) => i.status === "ready" && i.id);
  const busy = items.some((i) => i.status === "uploading" || i.status === "unlocking" || i.status === "needs_password");
  const canSend = !disabled && !sending && !busy && (text.trim().length > 0 || ready.length > 0);
  const readyIds = ready.map((i) => i.id!);
  const readyKey = readyIds.slice().sort().join("|");

  useEffect(() => {
    if (!onReadyAttachmentIds) return;
    if (readyKey === lastReadyKey.current) return;
    lastReadyKey.current = readyKey;
    onReadyAttachmentIds(readyIds);
  }, [onReadyAttachmentIds, readyIds, readyKey]);

  useEffect(() => {
    if (!autoSendWhenReady || disabled || sending || busy) return;
    if (!items.length || !readyIds.length) return;
    if (items.some((i) => i.status !== "ready")) return;
    if (readyKey === autoSentKey.current) return;
    autoSentKey.current = readyKey;
    const attachmentIds = readyIds;
    setText("");
    setItems([]);
    setSending(true);
    void (async () => {
      try {
        const ok = await onSend("", attachmentIds);
        if (!ok) {
          // Parent rejected — allow retry on next ready batch.
          autoSentKey.current = "";
        }
      } finally {
        setSending(false);
      }
    })();
  }, [autoSendWhenReady, busy, disabled, items, onSend, readyIds, readyKey, sending]);

  return (
    <div className="space-y-2">
      {attachError && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">{attachError}</p>
      )}
      {suggestions && suggestions.length > 0 && !text && !items.length && (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setText(s);
                input.current?.focus();
              }}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-ink-2 transition-colors hover:border-accent hover:text-ink"
            >
              {s}
            </button>
          ))}
        </div>
      )}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!canSend) return;
          const message = text;
          const attachmentIds = ready.map((i) => i.id!);
          setText("");
          setItems([]);
          setSending(true);
          try {
            const ok = await onSend(message, attachmentIds);
            if (!ok) setText(message);
          } finally {
            setSending(false);
          }
        }}
        onDragOver={(e) => {
          if (!e.dataTransfer.types.includes("Files")) return;
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          if (!e.dataTransfer.files.length) return;
          e.preventDefault();
          setDragging(false);
          void addFiles(e.dataTransfer.files);
        }}
        className={`rounded-2xl border bg-white shadow-[6px_6px_0_rgba(11,11,11,0.07)] transition-colors ${
          dragging ? "border-accent bg-accent-2" : "border-line"
        }`}
      >
        {items.length > 0 && (
          <div className="flex flex-wrap gap-1.5 px-3 pt-3">
            {items.map((item) => (
              <div
                key={item.key}
                className={`flex max-w-full items-center gap-2 rounded-lg border py-1 pr-2 pl-1 text-xs ${
                  item.status === "error" ? "border-red-300 text-red-700" : "border-line"
                }`}
              >
                <span className="max-w-40 truncate font-medium">{item.name}</span>
                {item.status === "uploading" ? (
                  <span className="flex min-w-[7.5rem] items-center gap-2 text-ink-3">
                    <span
                      className="h-1.5 w-16 overflow-hidden rounded-full bg-paper-2"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={item.progress ?? 0}
                      aria-label={`Uploading ${item.name}`}
                    >
                      <span
                        className="block h-full rounded-full bg-accent transition-[width] duration-150"
                        style={{ width: `${Math.max(4, item.progress ?? 0)}%` }}
                      />
                    </span>
                    <span className="tabular-nums">
                      {item.progressPhase === "process"
                        ? "Processing…"
                        : `${item.progress ?? 0}%`}
                    </span>
                  </span>
                ) : null}
                {item.status === "unlocking" && <span className="text-ink-3">Unlocking…</span>}
                {item.status === "ready" && <span className="font-medium text-accent">Ready</span>}
                {item.status === "needs_password" && (
                  <>
                    <input
                      type="password"
                      placeholder="PDF password"
                      className="h-6 w-28 rounded border border-line px-1"
                      value={item.password ?? ""}
                      onChange={(e) => patch(item.key, { password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="rounded-full bg-accent px-2 py-0.5 text-white"
                      onClick={() => {
                        void getAuthHeaders().then((h) => unlock(item, h));
                      }}
                    >
                      Unlock
                    </button>
                  </>
                )}
                {item.error && <span>{item.error}</span>}
                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  className="text-ink-2"
                  onClick={() => setItems((cur) => cur.filter((i) => i.key !== item.key))}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <textarea
          ref={input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          placeholder="Message your agent…"
          disabled={disabled}
          className="max-h-60 min-h-14 w-full resize-none border-0 bg-transparent px-4 pt-3.5 text-[15px] text-ink outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            }
          }}
        />
        <div className="flex items-center justify-between gap-3 px-2 pb-2">
          <input
            ref={picker}
            type="file"
            multiple
            accept={ACCEPTED_FILE_TYPES}
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) void addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <button
            type="button"
            aria-label="Attach files"
            disabled={items.length >= MAX_ATTACHMENTS || disabled}
            className="rounded-full px-3 py-2 text-sm text-ink-2 hover:bg-paper-2"
            onClick={() => picker.current?.click()}
          >
            Attach
          </button>
          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send"
            className="flex size-9 items-center justify-center rounded-full bg-accent text-white disabled:opacity-40"
          >
            {sending ? "…" : "↑"}
          </button>
        </div>
      </form>
      {hint && <p className="px-1 text-center text-[11px] text-ink-2">{hint}</p>}
    </div>
  );
}
