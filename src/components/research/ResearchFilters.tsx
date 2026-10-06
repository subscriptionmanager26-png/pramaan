"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { ResearchMemoCard } from "@/components/research/ResearchMemoCard";
import type { Article } from "@/lib/articles/types";

export type FilterCompany = {
  company: string;
  companySlug: string;
  symbol: string;
  count: number;
};

const verdicts = [
  { id: "all", label: "All" },
  { id: "buy", label: "Buy" },
  { id: "neutral", label: "Neutral" },
  { id: "hold", label: "Hold" },
  { id: "avoid", label: "Avoid" },
] as const;

function buildHref(state: {
  verdict: string;
  industry?: string;
  company?: string;
  q?: string;
}) {
  const params = new URLSearchParams();
  if (state.verdict && state.verdict !== "all") params.set("verdict", state.verdict);
  if (state.industry) params.set("industry", state.industry);
  if (state.company) params.set("company", state.company);
  if (state.q?.trim()) params.set("q", state.q.trim());
  const qs = params.toString();
  return qs ? `/research?${qs}` : "/research";
}

export function ResearchFilters({
  verdict,
  industry,
  company,
  q = "",
  industries,
  companies,
  industryCounts,
  verdictCounts,
  totalCount,
  articles,
}: {
  verdict: string;
  industry?: string;
  company?: string;
  q?: string;
  industries: string[];
  companies: FilterCompany[];
  industryCounts: Record<string, number>;
  verdictCounts: Record<string, number>;
  totalCount: number;
  articles: Article[];
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [query, setQuery] = useState(q);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyQuery, setCompanyQuery] = useState("");
  const companyRef = useRef<HTMLDivElement>(null);

  const activeVerdict = verdicts.some((v) => v.id === verdict) ? verdict : "all";
  const selectedCompany = companies.find((c) => c.companySlug === company);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!companyRef.current?.contains(e.target as Node)) setCompanyOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setCompanyOpen(false);
        setFiltersOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function navigate(next: {
    verdict?: string;
    industry?: string | null;
    company?: string | null;
    q?: string | null;
  }) {
    const href = buildHref({
      verdict: next.verdict ?? activeVerdict,
      industry: next.industry === null ? undefined : (next.industry ?? industry),
      company: next.company === null ? undefined : (next.company ?? company),
      q: next.q === null ? undefined : (next.q ?? query),
    });
    startTransition(() => router.push(href));
  }

  useEffect(() => {
    const handle = window.setTimeout(() => {
      const next = query.trim();
      const current = (q ?? "").trim();
      if (next === current) return;
      navigate({ q: next || null });
    }, 350);
    return () => window.clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- debounce only on query text
  }, [query]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return articles;
    return articles.filter((a) =>
      `${a.title} ${a.dek} ${a.symbol} ${a.company} ${a.industry}`.toLowerCase().includes(needle),
    );
  }, [articles, query]);

  const companyOptions = useMemo(() => {
    const needle = companyQuery.trim().toLowerCase();
    if (!needle) return companies;
    return companies.filter(
      (c) =>
        c.symbol.toLowerCase().includes(needle) ||
        c.company.toLowerCase().includes(needle) ||
        c.companySlug.toLowerCase().includes(needle),
    );
  }, [companies, companyQuery]);

  const activeChips: { key: string; label: string; clear: () => void }[] = [];
  if (activeVerdict !== "all") {
    activeChips.push({
      key: "verdict",
      label: activeVerdict,
      clear: () => navigate({ verdict: "all" }),
    });
  }
  if (industry) {
    activeChips.push({
      key: "industry",
      label: industry,
      clear: () => navigate({ industry: null }),
    });
  }
  if (selectedCompany) {
    activeChips.push({
      key: "company",
      label: selectedCompany.symbol,
      clear: () => navigate({ company: null }),
    });
  }
  if (query.trim()) {
    activeChips.push({
      key: "q",
      label: `Search: ${query.trim()}`,
      clear: () => {
        setQuery("");
        navigate({ q: null });
      },
    });
  }

  const visibleVerdicts = verdicts.filter(
    (v) => v.id === "all" || v.id === activeVerdict || (verdictCounts[v.id] ?? 0) > 0,
  );

  const [featured, ...rest] = visible;
  const hasActive = activeChips.length > 0;

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <p className="text-meta uppercase tracking-[0.12em]">Verdict</p>
        <div className="mt-2 flex flex-wrap gap-1.5 lg:flex-col lg:gap-1">
          {visibleVerdicts.map((v) => {
            const active = activeVerdict === v.id;
            const count = v.id === "all" ? totalCount : (verdictCounts[v.id] ?? 0);
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => navigate({ verdict: v.id })}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] transition lg:w-full ${
                  active
                    ? "bg-accent font-semibold text-white"
                    : "bg-paper-2 font-medium text-ink-2 hover:bg-sky/70 hover:text-ink"
                }`}
              >
                <span>{v.label}</span>
                <span className={`ml-3 ${active ? "text-white/80" : "text-ink-3"}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-meta uppercase tracking-[0.12em]">Industry</p>
        <ul className="mt-2 space-y-1">
          <li>
            <button
              type="button"
              onClick={() => navigate({ industry: null })}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] ${
                !industry
                  ? "bg-accent-2 font-semibold text-accent"
                  : "font-medium text-ink-2 hover:bg-paper-2"
              }`}
            >
              <span>All industries</span>
              <span className="text-ink-3">{totalCount}</span>
            </button>
          </li>
          {industries.map((ind) => {
            const active = industry === ind;
            return (
              <li key={ind}>
                <button
                  type="button"
                  onClick={() => navigate({ industry: active ? null : ind })}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] ${
                    active
                      ? "bg-accent-2 font-semibold text-accent"
                      : "font-medium text-ink-2 hover:bg-paper-2"
                  }`}
                >
                  <span className="truncate pr-2">{ind}</span>
                  <span className="shrink-0 text-ink-3">{industryCounts[ind] ?? 0}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div ref={companyRef}>
        <p className="text-meta uppercase tracking-[0.12em]">Company</p>
        <div className="relative mt-2">
          <button
            type="button"
            aria-expanded={companyOpen}
            onClick={() => {
              setCompanyOpen((o) => !o);
              setCompanyQuery("");
            }}
            className="flex w-full items-center justify-between rounded-xl border border-line bg-white px-3 py-2.5 text-left text-[13px] font-medium text-ink hover:border-accent/40"
          >
            <span className="truncate">
              {selectedCompany
                ? `${selectedCompany.symbol} · ${selectedCompany.company}`
                : "All companies"}
            </span>
            <span className="ml-2 text-ink-3">{companyOpen ? "▴" : "▾"}</span>
          </button>
          {companyOpen ? (
            <div className="absolute z-30 mt-1 w-full overflow-hidden rounded-xl border border-line bg-white shadow-lg">
              <div className="border-b border-line p-2">
                <input
                  autoFocus
                  value={companyQuery}
                  onChange={(e) => setCompanyQuery(e.target.value)}
                  placeholder="Filter tickers…"
                  className="w-full rounded-lg border border-line bg-paper-2 px-3 py-2 text-[13px] outline-none focus:border-accent focus:bg-white"
                />
              </div>
              <div className="max-h-64 overflow-auto p-1">
                <button
                  type="button"
                  className="block w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-ink hover:bg-paper-2"
                  onClick={() => {
                    setCompanyOpen(false);
                    navigate({ company: null });
                  }}
                >
                  All companies
                </button>
                {companyOptions.map((c) => (
                  <button
                    key={c.companySlug}
                    type="button"
                    className={`block w-full rounded-lg px-3 py-2 text-left text-[13px] hover:bg-paper-2 ${
                      company === c.companySlug
                        ? "bg-accent-2 font-semibold text-accent"
                        : "font-medium text-ink"
                    }`}
                    onClick={() => {
                      setCompanyOpen(false);
                      navigate({ company: c.companySlug });
                    }}
                  >
                    <span className="font-bold tracking-wide">{c.symbol}</span>
                    <span className="mt-0.5 block truncate text-[12px] text-ink-3">{c.company}</span>
                  </button>
                ))}
                {!companyOptions.length ? (
                  <p className="px-3 py-3 text-[13px] text-ink-3">No companies match.</p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`mt-8 ${pending ? "opacity-80" : ""}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative block min-w-0 flex-1">
          <span className="sr-only">Search memos</span>
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
            placeholder="Search company, ticker, or theme…"
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
          <Link
            href="/research"
            onClick={() => setQuery("")}
            className="hidden text-[13px] font-semibold text-accent sm:inline lg:hidden"
          >
            Clear
          </Link>
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
          <Link
            href="/research"
            onClick={() => setQuery("")}
            className="text-[12px] font-semibold text-accent"
          >
            Clear all
          </Link>
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
                <Link
                  href="/research"
                  onClick={() => setQuery("")}
                  className="text-[12px] font-semibold text-accent hover:underline"
                >
                  Clear
                </Link>
              ) : null}
            </div>
            {filterPanel}
          </div>
        </aside>

        <div className="min-w-0">
          <p className="text-[15px] font-semibold text-ink">
            {visible.length} memo{visible.length === 1 ? "" : "s"}
            <span className="font-medium text-ink-3"> of {totalCount}</span>
          </p>

          <div className="mt-5">
            {!visible.length ? (
              <p className="rounded-2xl border border-dashed border-line bg-paper-2 px-5 py-10 text-center text-[15px] text-ink-2">
                No memos match these filters.{" "}
                <Link
                  href="/research"
                  onClick={() => setQuery("")}
                  className="font-semibold text-accent"
                >
                  Reset
                </Link>
              </p>
            ) : (
              <div>
                {featured ? (
                  <div className="mb-8 max-w-2xl">
                    <ResearchMemoCard article={featured} featured layout="grid" />
                  </div>
                ) : null}
                <div className="divide-y divide-line border-t border-line">
                  {rest.map((article) => (
                    <ResearchMemoCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
