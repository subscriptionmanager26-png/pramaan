"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  categoryLabel,
  sebiAdvisors,
  type SebiAdvisor,
  type SebiAdvisorCategory,
} from "@/lib/advisors";

type CatFilter = "all" | SebiAdvisorCategory | "AIF";
type ScopeFilter = "all" | "global-advisory" | "global-investing";

const PAGE = 40;

const typeOptions: { id: CatFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "RIA", label: "RIA" },
  { id: "RA", label: "RA" },
  { id: "PMS", label: "PMS" },
  { id: "AIF", label: "AIF / IFSC" },
];

const scopeOptions: { id: ScopeFilter; label: string }[] = [
  { id: "all", label: "Any scope" },
  { id: "global-advisory", label: "Global advisory" },
  { id: "global-investing", label: "Global investing" },
];

function AdvisorRow({ advisor }: { advisor: SebiAdvisor }) {
  return (
    <Link
      href={`/advisors/${advisor.slug}`}
      className="group grid gap-2 border-b border-line py-4 last:border-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-paper-2 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
            {advisor.isAif ? "AIF / IFSC" : categoryLabel(advisor.category)}
          </span>
          {advisor.globalAdvisory ? (
            <span className="rounded-md bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
              Global advisory
            </span>
          ) : null}
          {advisor.globalInvesting && !advisor.globalAdvisory ? (
            <span className="rounded-md bg-sky px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
              Global investing
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 text-[1.05rem] font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
          {advisor.name}
        </h3>
        <p className="text-meta mt-1 font-mono tracking-tight">{advisor.registration}</p>
        {advisor.contactPerson ? (
          <p className="mt-1 text-[13px] text-ink-2">{advisor.contactPerson}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3 text-[13px] font-semibold text-accent sm:justify-end">
        {advisor.website ? <span>Website</span> : null}
        {advisor.twitter ? <span>X</span> : null}
        {advisor.substack ? <span>Substack</span> : null}
        {advisor.email ? <span>Email</span> : null}
      </div>
    </Link>
  );
}

export function AdvisorsExplorer() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CatFilter>("all");
  const [scope, setScope] = useState<ScopeFilter>("all");
  const [page, setPage] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const counts = useMemo(
    () => ({
      all: sebiAdvisors.length,
      RIA: sebiAdvisors.filter((a) => a.category === "RIA").length,
      RA: sebiAdvisors.filter((a) => a.category === "RA").length,
      PMS: sebiAdvisors.filter((a) => a.category === "PMS").length,
      AIF: sebiAdvisors.filter((a) => a.isAif).length,
      ga: sebiAdvisors.filter((a) => a.globalAdvisory).length,
      gi: sebiAdvisors.filter((a) => a.globalInvesting || a.globalAdvisory).length,
    }),
    [],
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return sebiAdvisors
      .filter((a) => {
        if (cat === "AIF") {
          if (!a.isAif) return false;
        } else if (cat !== "all" && a.category !== cat) {
          return false;
        }
        if (scope === "global-advisory" && !a.globalAdvisory) return false;
        if (scope === "global-investing" && !(a.globalInvesting || a.globalAdvisory)) return false;
        if (!needle) return true;
        return `${a.name} ${a.registration} ${a.contactPerson ?? ""} ${a.email ?? ""}`
          .toLowerCase()
          .includes(needle);
      })
      .sort((a, b) => {
        if (a.globalAdvisory !== b.globalAdvisory) return a.globalAdvisory ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
  }, [query, cat, scope]);

  useEffect(() => {
    setPage(0);
  }, [query, cat, scope]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFiltersOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE));
  const safePage = Math.min(page, pageCount - 1);
  const slice = filtered.slice(safePage * PAGE, safePage * PAGE + PAGE);

  const activeChips: { key: string; label: string; clear: () => void }[] = [];
  if (cat !== "all") {
    activeChips.push({
      key: "type",
      label: typeOptions.find((t) => t.id === cat)?.label ?? cat,
      clear: () => setCat("all"),
    });
  }
  if (scope !== "all") {
    activeChips.push({
      key: "scope",
      label: scopeOptions.find((s) => s.id === scope)?.label ?? scope,
      clear: () => setScope("all"),
    });
  }
  if (query.trim()) {
    activeChips.push({
      key: "q",
      label: `Search: ${query.trim()}`,
      clear: () => setQuery(""),
    });
  }
  const hasActive = activeChips.length > 0;

  function clearAll() {
    setQuery("");
    setCat("all");
    setScope("all");
    setPage(0);
  }

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <p className="text-meta uppercase tracking-[0.12em]">Type</p>
        <div className="mt-2 flex flex-wrap gap-1.5 lg:flex-col lg:gap-1">
          {typeOptions.map((t) => {
            const active = cat === t.id;
            const count =
              t.id === "all" ? counts.all : t.id === "AIF" ? counts.AIF : counts[t.id];
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setCat(t.id)}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] transition lg:w-full ${
                  active
                    ? "bg-accent font-semibold text-white"
                    : "bg-paper-2 font-medium text-ink-2 hover:bg-sky/70 hover:text-ink"
                }`}
              >
                <span>{t.label}</span>
                <span className={`ml-3 ${active ? "text-white/80" : "text-ink-3"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-meta uppercase tracking-[0.12em]">Scope</p>
        <ul className="mt-2 space-y-1">
          {scopeOptions.map((s) => {
            const active = scope === s.id;
            const count = s.id === "all" ? counts.all : s.id === "global-advisory" ? counts.ga : counts.gi;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setScope(active && s.id !== "all" ? "all" : s.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] ${
                    active
                      ? "bg-accent-2 font-semibold text-accent"
                      : "font-medium text-ink-2 hover:bg-paper-2"
                  }`}
                >
                  <span>{s.label}</span>
                  <span className="text-ink-3">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative block min-w-0 flex-1">
          <span className="sr-only">Search advisors</span>
          <svg
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-3"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, registration, or contact…"
            className="w-full rounded-xl border border-line bg-white py-2.5 pl-9 pr-3 text-[14px] text-ink outline-none transition focus:border-accent"
          />
        </label>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-semibold text-ink lg:hidden"
          onClick={() => setFiltersOpen((o) => !o)}
          aria-expanded={filtersOpen}
        >
          Filters
          {hasActive ? (
            <span className="rounded-full bg-accent px-1.5 text-[11px] text-white">{activeChips.length}</span>
          ) : null}
        </button>
        {hasActive ? (
          <button
            type="button"
            onClick={clearAll}
            className="hidden text-[13px] font-semibold text-accent sm:inline lg:hidden"
          >
            Clear
          </button>
        ) : null}
      </div>

      {hasActive ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              onClick={chip.clear}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-sky/60 px-3 py-1 text-[12px] font-semibold text-ink hover:border-accent/40"
            >
              {chip.label}
              <span aria-hidden className="text-ink-3">
                ×
              </span>
            </button>
          ))}
          <button type="button" onClick={clearAll} className="text-[12px] font-semibold text-accent">
            Clear all
          </button>
        </div>
      ) : null}

      {filtersOpen ? (
        <div className="mt-4 rounded-2xl border border-line bg-white p-4 lg:hidden">{filterPanel}</div>
      ) : null}

      <div className="mt-6 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-white p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink">Filters</p>
              {hasActive ? (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[12px] font-semibold text-accent hover:underline"
                >
                  Clear
                </button>
              ) : null}
            </div>
            {filterPanel}
          </div>
        </aside>

        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-ink">
            {filtered.length.toLocaleString("en-IN")} advisor
            {filtered.length === 1 ? "" : "s"}
            <span className="font-medium text-ink-3"> of {counts.all.toLocaleString("en-IN")}</span>
          </p>

          <div className="mt-5">
            {!slice.length ? (
              <p className="rounded-2xl border border-dashed border-line bg-paper-2 px-5 py-10 text-center text-[15px] text-ink-2">
                No advisors match these filters.{" "}
                <button type="button" onClick={clearAll} className="font-semibold text-accent">
                  Reset
                </button>
              </p>
            ) : (
              <div className="divide-y divide-line border-t border-line">
                {slice.map((a) => (
                  <AdvisorRow key={a.id} advisor={a} />
                ))}
              </div>
            )}
          </div>

          {pageCount > 1 ? (
            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={safePage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                className="rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink disabled:opacity-40"
              >
                Previous
              </button>
              <p className="text-meta">
                Page {safePage + 1} of {pageCount}
              </p>
              <button
                type="button"
                disabled={safePage >= pageCount - 1}
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                className="rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink disabled:opacity-40"
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
