"use client";

import { useRef, useState } from "react";

import {
  ACCEPTED_FILE_TYPES,
  formatBytes,
  MAX_ATTACHMENTS,
  MAX_FILE_BYTES,
} from "@/lib/agent/file-limits";
import { uploadAgentFile } from "@/lib/agent/upload-file";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

type Item = {
  key: string;
  name: string;
  size: number;
  status: "uploading" | "ready" | "needs_password" | "unlocking" | "error";
  id?: string;
  error?: string;
  password?: string;
  progress?: number;
  progressPhase?: "upload" | "process";
};

async function errorMessage(res: Response) {
  const body = await res.json().catch(() => undefined);
  if (body && typeof body === "object") {
    const err = (body as { error?: { message?: string } | string }).error;
    if (typeof err === "string" && err) return err;
    if (err && typeof err === "object" && err.message) return err.message;
  }
  if (res.status === 413) return "File is too large.";
  if (res.status === 401) return "Sign in again to upload.";
  return `Upload failed (${res.status})`;
}

export function PortfolioUploadPanel({
  disabled,
  parsing,
  parseStatus,
  onParse,
  onBack,
}: {
  disabled?: boolean;
  parsing?: boolean;
  parseStatus?: string | null;
  onParse: (attachmentIds: string[]) => void;
  onBack: () => void;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [attachError, setAttachError] = useState<string | null>(null);
  const picker = useRef<HTMLInputElement>(null);

  const patch = (key: string, next: Partial<Item>) =>
    setItems((cur) => cur.map((i) => (i.key === key ? { ...i, ...next } : i)));

  const upload = async (file: File, key: string, headers: Record<string, string>) => {
    patch(key, { progress: 0, progressPhase: "upload" });
    try {
      const result = await uploadAgentFile(file, headers, (p) => {
        patch(key, { progress: p.percent, progressPhase: p.phase });
      });
      if (!result.ok) {
        const err =
          result.body && typeof result.body === "object"
            ? (result.body as { error?: { message?: string } | string }).error
            : undefined;
        const message =
          typeof err === "string"
            ? err
            : err && typeof err === "object" && err.message
              ? err.message
              : `Upload failed (${result.status})`;
        return patch(key, {
          status: "error",
          error: message,
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
    } catch {
      patch(key, { status: "error", error: "Upload failed.", progress: undefined, progressPhase: undefined });
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
      const key = `f-${Math.random().toString(36).slice(2, 9)}`;
      if (f.size > MAX_FILE_BYTES) {
        return {
          key,
          name: f.name,
          size: f.size,
          status: "error" as const,
          error: `Max ${formatBytes(MAX_FILE_BYTES)}`,
        };
      }
      return { key, name: f.name, size: f.size, status: "uploading" as const };
    });
    setItems((cur) => [...cur, ...added]);
    const headers = await pocketedgeAuthHeaders();
    await Promise.all(
      batch.map((file, i) => {
        const item = added[i];
        if (item.status === "error") return Promise.resolve();
        return upload(file, item.key, headers);
      }),
    );
  };

  const unlock = async (item: Item) => {
    if (!item.id || !item.password?.trim()) return;
    patch(item.key, { status: "unlocking", error: undefined });
    const headers = await pocketedgeAuthHeaders();
    const res = await fetch(`/api/agent/files/${encodeURIComponent(item.id)}/unlock`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ password: item.password }),
    });
    if (res.ok) patch(item.key, { status: "ready", password: undefined });
    else patch(item.key, { status: "needs_password", error: await errorMessage(res), password: "" });
  };

  const ready = items.filter((i) => i.status === "ready" && i.id);
  const blocked = items.some(
    (i) => i.status === "uploading" || i.status === "unlocking" || i.status === "needs_password",
  );
  const canParse = !disabled && !parsing && !blocked && ready.length > 0;

  return (
    <div className="mx-auto w-full max-w-2xl space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-headline text-ink">Upload file or files</h2>
          <p className="mt-1 text-[14px] text-ink-2">
            CSV, Excel, broker statement, CAS PDF, or screenshot. Locked PDFs ask for a password
            (often PAN).
          </p>
        </div>
        <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={onBack}>
          ← All options
        </button>
      </div>

      <div
        className="rounded-2xl border border-dashed border-line bg-white px-5 py-8 text-center shadow-[3px_3px_0_#0b0b0b]"
        onDragOver={(e) => {
          if (!e.dataTransfer.types.includes("Files")) return;
          e.preventDefault();
        }}
        onDrop={(e) => {
          if (!e.dataTransfer.files.length) return;
          e.preventDefault();
          if (!disabled && !parsing) void addFiles(e.dataTransfer.files);
        }}
      >
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
        <p className="text-[15px] font-medium text-ink">Drop files here</p>
        <p className="mt-1 text-[13px] text-ink-2">or</p>
        <button
          type="button"
          className="btn-primary mt-3 text-[13px] disabled:opacity-50"
          disabled={disabled || parsing || items.length >= MAX_ATTACHMENTS}
          onClick={() => picker.current?.click()}
        >
          Choose files
        </button>
      </div>

      {attachError ? <p className="text-[13px] text-rose-700">{attachError}</p> : null}

      {items.length ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.key}
              className="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-[13px]"
            >
              <span className="min-w-0 flex-1 truncate font-medium text-ink">{item.name}</span>
              <span className="text-ink-3">{formatBytes(item.size)}</span>
              {item.status === "uploading" ? (
                <span className="flex items-center gap-2 text-ink-3">
                  <span className="h-1.5 w-16 overflow-hidden rounded-full bg-paper-2">
                    <span
                      className="block h-full rounded-full bg-accent transition-[width] duration-150"
                      style={{ width: `${Math.max(4, item.progress ?? 0)}%` }}
                    />
                  </span>
                  <span className="tabular-nums">
                    {item.progressPhase === "process" ? "Processing…" : `${item.progress ?? 0}%`}
                  </span>
                </span>
              ) : null}
              {item.status === "unlocking" ? <span className="text-ink-3">Unlocking…</span> : null}
              {item.status === "ready" ? <span className="font-medium text-accent">Ready</span> : null}
              {item.status === "needs_password" ? (
                <>
                  <input
                    type="password"
                    placeholder="PDF password"
                    className="h-8 w-32 rounded-lg border border-line px-2"
                    value={item.password ?? ""}
                    onChange={(e) => patch(item.key, { password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="rounded-full bg-accent px-3 py-1 text-white"
                    onClick={() => void unlock(item)}
                  >
                    Unlock
                  </button>
                </>
              ) : null}
              {item.error ? <span className="text-rose-700">{item.error}</span> : null}
              <button
                type="button"
                aria-label={`Remove ${item.name}`}
                className="text-ink-2 hover:text-ink"
                disabled={parsing}
                onClick={() => setItems((cur) => cur.filter((i) => i.key !== item.key))}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {parsing ? (
        <p className="text-[13px] text-ink-2">{parseStatus || "Parsing with AI…"}</p>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-primary text-[13px] disabled:opacity-50"
          disabled={!canParse}
          onClick={() => onParse(ready.map((i) => i.id!))}
        >
          {parsing ? "Parsing…" : "Parse holdings"}
        </button>
      </div>
    </div>
  );
}
