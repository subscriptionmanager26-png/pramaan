"use client";

import { useRef, useState, type ReactNode } from "react";

import {
  ACCEPTED_EXTENSIONS,
  ACCEPTED_FILE_TYPES,
  formatBytes,
  MAX_ATTACHMENTS,
  MAX_FILE_BYTES,
} from "@/lib/agent/file-limits";

type Item = {
  key: string;
  name: string;
  size: number;
  status: "uploading" | "ready" | "needs_password" | "unlocking" | "error";
  id?: string;
  error?: string;
  password?: string;
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
  return `Upload failed (${res.status})`;
}

export function AgentComposer({
  disabled,
  onSend,
  getAuthHeaders,
  suggestions,
  hint,
}: {
  disabled?: boolean;
  getAuthHeaders: () => Promise<Record<string, string>>;
  onSend: (text: string, attachmentIds: string[]) => Promise<boolean>;
  suggestions?: string[];
  hint?: ReactNode;
}) {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [dragging, setDragging] = useState(false);
  const [sending, setSending] = useState(false);
  const [attachError, setAttachError] = useState<string | null>(null);
  const picker = useRef<HTMLInputElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);

  const patch = (key: string, next: Partial<Item>) =>
    setItems((cur) => cur.map((i) => (i.key === key ? { ...i, ...next } : i)));

  const upload = async (file: File, key: string, headers: Record<string, string>) => {
    const body = new FormData();
    body.append("file", file);
    try {
      const res = await fetch("/api/agent/files", {
        method: "POST",
        headers,
        body,
        credentials: "same-origin",
      });
      if (!res.ok) return patch(key, { status: "error", error: await errorMessage(res) });
      const json = (await res.json()) as { file?: { id: string; status: string } };
      const uploaded = json.file;
      if (!uploaded?.id) return patch(key, { status: "error", error: "Upload failed." });
      patch(key, {
        id: uploaded.id,
        status: uploaded.status === "needs_password" ? "needs_password" : "ready",
      });
    } catch {
      patch(key, { status: "error", error: "Upload failed. Check your connection." });
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
        ? "Only PDF, CSV and Excel files"
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
                {item.status === "uploading" && (
                  <span className="text-ink-3">Uploading…</span>
                )}
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
