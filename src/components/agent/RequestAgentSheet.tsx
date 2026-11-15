"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

/**
 * Request a new specialist — does not create an agent on the fly.
 * Localhost preview: submits to local state only.
 */
export function RequestAgentSheet({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [useCase, setUseCase] = useState("");
  const [sent, setSent] = useState(false);

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !useCase.trim()) return;
    setSent(true);
  }

  function close() {
    setSent(false);
    setName("");
    setUseCase("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
      <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Close" onClick={close} />
      <div className="relative z-10 w-full max-w-md rounded-t-2xl border border-line bg-white p-5 shadow-[8px_8px_0_rgba(11,11,11,0.08)] sm:rounded-2xl sm:p-6">
        {sent ? (
          <div className="space-y-4 text-center">
            <p className="text-lg font-semibold text-ink">Request received</p>
            <p className="text-sm leading-relaxed text-ink-2">
              We’ll review “{name.trim()}” and unlock it on your team if it fits. You can’t spin up agents
              yourself — specialists stay curated.
            </p>
            <button type="button" className="btn-primary w-full justify-center" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={submit}>
            <div>
              <p className="text-lg font-semibold text-ink">Request an agent</p>
              <p className="mt-1 text-sm text-ink-2">
                Describe the specialist you want. We build and unlock them — not a free-form create.
              </p>
            </div>
            <label className="block space-y-1.5">
              <span className="text-[12px] font-semibold text-ink-3">Working name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Options AI, REIT AI"
                className="w-full rounded-xl border border-line bg-paper-2 px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-accent/30"
                required
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-[12px] font-semibold text-ink-3">What should it help with?</span>
              <textarea
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="Jobs, data it needs, how you’d use it day to day…"
                rows={4}
                className="w-full resize-none rounded-xl border border-line bg-paper-2 px-3 py-2.5 text-sm text-ink outline-none focus:ring-2 focus:ring-accent/30"
                required
              />
            </label>
            <div className="flex gap-2 pt-1">
              <button type="button" className="btn-ghost flex-1 justify-center text-sm" onClick={close}>
                Cancel
              </button>
              <button type="submit" className="btn-primary flex-1 justify-center text-sm">
                Submit request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
