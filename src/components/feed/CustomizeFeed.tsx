"use client";

import { useState } from "react";
import { SourceIcon } from "@/components/SourceIcon";
import type { SourceKind } from "@/lib/types";

const sources: { id: SourceKind | "events"; label: string }[] = [
  { id: "twitter", label: "Twitter" },
  { id: "substack", label: "Substack" },
  { id: "youtube", label: "YouTube" },
  { id: "events", label: "Events" },
];

const topicChips = [
  "Markets",
  "Mutual funds",
  "Taxation",
  "Fixed income",
  "IPOs",
  "Retirement",
  "Personal finance",
  "Asset allocation",
];

export function CustomizeFeedButton() {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    twitter: true,
    substack: true,
    youtube: true,
    events: true,
  });
  const [topics, setTopics] = useState<string[]>(["Markets", "Mutual funds"]);
  const [sort, setSort] = useState<"recent" | "relevant">("recent");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H10a1.7 1.7 0 0 0 1-1.5V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V10c.2.6.8 1 1.5 1H20a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
        Edit preferences
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Customize your feed</h2>
              <button type="button" onClick={() => setOpen(false)} className="text-ink-3" aria-label="Close">
                ✕
              </button>
            </div>

            <section className="mt-6">
              <h3 className="text-sm font-semibold">Sources</h3>
              <ul className="mt-3 space-y-2">
                {sources.map((s) => (
                  <li key={s.id} className="flex items-center justify-between rounded-xl border border-line px-3 py-3">
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      {s.id === "events" ? (
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-violet text-[8px] font-bold text-white">
                          E
                        </span>
                      ) : (
                        <SourceIcon kind={s.id} className="h-4 w-4" />
                      )}
                      {s.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => setEnabled((e) => ({ ...e, [s.id]: !e[s.id] }))}
                      className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                        enabled[s.id] ? "border-accent bg-accent text-white" : "border-line bg-white"
                      }`}
                      aria-pressed={enabled[s.id]}
                    >
                      {enabled[s.id] ? "✓" : null}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h3 className="text-sm font-semibold">Topics (optional)</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {topicChips.map((t) => {
                  const on = topics.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() =>
                        setTopics((prev) => (on ? prev.filter((x) => x !== t) : [...prev, t]))
                      }
                      className={`rounded-full px-3 py-1.5 text-sm ${
                        on ? "bg-navy text-white" : "border border-line bg-white text-ink-2"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="mt-6">
              <h3 className="text-sm font-semibold">Content preferences</h3>
              <div className="mt-3 space-y-2">
                {(
                  [
                    ["recent", "Most recent", "Show latest content first"],
                    ["relevant", "Most relevant", "Show content based on your interests"],
                  ] as const
                ).map(([id, label, blurb]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSort(id)}
                    className="flex w-full items-start gap-3 rounded-xl border border-line px-3 py-3 text-left"
                  >
                    <span
                      className={`mt-0.5 flex h-4 w-4 items-center justify-center rounded-full border ${
                        sort === id ? "border-accent" : "border-line"
                      }`}
                    >
                      {sort === id ? <span className="h-2 w-2 rounded-full bg-accent" /> : null}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="block text-xs text-ink-3">{blurb}</span>
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-xl bg-navy py-3 text-sm font-semibold text-white"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => {
                setEnabled({ twitter: true, substack: true, youtube: true, events: true });
                setTopics(["Markets", "Mutual funds"]);
                setSort("recent");
              }}
              className="mt-3 w-full text-sm text-ink-3"
            >
              Reset to default
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
