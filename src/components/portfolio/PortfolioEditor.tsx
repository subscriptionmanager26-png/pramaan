"use client";

import { Download, PenLine, Upload } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";

import { PortfolioUploadPanel } from "@/components/portfolio/PortfolioUploadPanel";
import type { PortfolioHoldingDraft } from "@/lib/agent/types";
import {
  formatInr,
  portfolioTotals,
  type LiveHolding,
  type LivePortfolio,
} from "@/lib/portfolio/holdings";
import { runPortfolioImport } from "@/lib/portfolio/import-via-agent";
import { FILE_PARSE_PROMPT, ZERODHA_IMPORT_PROMPT } from "@/lib/portfolio/setup-prompts";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

type DraftRow = {
  key: string;
  ticker: string;
  qty: string;
  avg: string;
  name: string;
};

type SetupPath = "zerodha" | "manual" | "upload";
/** choose → (upload|zerodha|edit) → verify → save */
type Step = "choose" | "upload" | "zerodha" | "edit" | "verify";
type ZerodhaGate = "checking" | "need_connect" | "need_login" | "ready" | "importing" | "error";

type ConnectionsZerodha = {
  connected: boolean;
  loggedInAs: string | null;
  sessionActive: boolean;
};

function newKey() {
  return `r-${Math.random().toString(36).slice(2, 9)}`;
}

function rowsFromHoldings(holdings: LiveHolding[]): DraftRow[] {
  if (!holdings.length) return [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }];
  return holdings.map((h) => ({
    key: newKey(),
    ticker: h.ticker,
    qty: String(h.qty),
    avg: h.avg != null ? String(h.avg) : "",
    name: h.name ?? "",
  }));
}

function rowsFromProposal(holdings: PortfolioHoldingDraft[]): DraftRow[] {
  const next = holdings
    .filter((h) => h.qty > 0)
    .map((h) => ({
      key: newKey(),
      ticker: h.ticker,
      qty: String(h.qty),
      avg: h.avg != null ? String(h.avg) : "",
      name: h.name ?? "",
    }));
  return next.length ? next : [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }];
}

function parseDraft(rows: DraftRow[]) {
  const out: PortfolioHoldingDraft[] = [];
  for (const row of rows) {
    const ticker = row.ticker.trim().toUpperCase();
    const qty = Number(row.qty);
    if (!ticker || !Number.isFinite(qty) || qty <= 0) continue;
    const item: PortfolioHoldingDraft = { ticker, qty };
    const avg = Number(row.avg);
    if (row.avg.trim() && Number.isFinite(avg) && avg > 0) item.avg = avg;
    if (row.name.trim()) item.name = row.name.trim();
    out.push(item);
  }
  return out;
}

function draftAsLive(parsed: PortfolioHoldingDraft[]): LiveHolding[] {
  return parsed.map((h) => ({
    ticker: h.ticker,
    qty: h.qty,
    avg: h.avg,
    name: h.name,
    value: h.avg != null ? h.avg * h.qty : undefined,
  }));
}

function EmptySetupChooser({
  onChoose,
  disabled,
  updating,
}: {
  onChoose: (path: SetupPath) => void;
  disabled?: boolean;
  updating?: boolean;
}) {
  const options: { id: SetupPath; title: string; detail: string; icon: ReactNode }[] = [
    {
      id: "zerodha",
      title: "Fetch from Zerodha",
      detail: "Pull live holdings via Zerodha MCP",
      icon: <Download className="h-5 w-5" strokeWidth={2} aria-hidden />,
    },
    {
      id: "manual",
      title: "Add manually",
      detail: "Type ticker, quantity, and average cost",
      icon: <PenLine className="h-5 w-5" strokeWidth={2} aria-hidden />,
    },
    {
      id: "upload",
      title: "Upload file or files",
      detail: "CSV, Excel, screenshot, or PDF — AI parses only",
      icon: <Upload className="h-5 w-5" strokeWidth={2} aria-hidden />,
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-stretch px-1 py-6 sm:py-10">
      <div className="text-center">
        <h2 className="text-headline text-ink">{updating ? "Update holdings" : "Add your holdings"}</h2>
        <p className="mt-2 text-[15px] text-ink-2">
          {updating ? "Choose how you want to change the book." : "Pick one way to start."}
        </p>
      </div>
      <div className="mt-8 grid gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => onChoose(opt.id)}
            className="flex items-start gap-4 rounded-2xl border border-line bg-white px-5 py-5 text-left shadow-[3px_3px_0_#0b0b0b] transition-colors hover:border-ink/40 disabled:opacity-50 sm:gap-5 sm:px-6 sm:py-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-paper-2 text-ink">
              {opt.icon}
            </span>
            <span className="min-w-0 pt-0.5">
              <p className="text-[17px] font-semibold tracking-tight text-ink sm:text-[18px]">{opt.title}</p>
              <p className="mt-1 text-[14px] leading-5 text-ink-2">{opt.detail}</p>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

type Props = {
  portfolio: LivePortfolio | null;
  onSaved: (portfolio: LivePortfolio) => void;
  onCancel?: () => void;
  /** Local UI preview — no API writes / agent imports. */
  preview?: boolean;
};

export function PortfolioEditor({ portfolio, onSaved, onCancel, preview = false }: Props) {
  const holdings = portfolio?.holdings ?? [];
  const empty = !holdings.length;
  const [step, setStep] = useState<Step>("choose");
  const [setupPath, setSetupPath] = useState<SetupPath | null>(null);
  const [rows, setRows] = useState<DraftRow[]>(() =>
    empty ? [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }] : rowsFromHoldings(holdings),
  );
  const [saving, setSaving] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [parseStatus, setParseStatus] = useState<string | null>(null);
  const [zerodhaGate, setZerodhaGate] = useState<ZerodhaGate>("checking");
  const [zerodhaBusy, setZerodhaBusy] = useState(false);
  const [loginUrl, setLoginUrl] = useState<string | null>(null);
  const firstTickerRef = useRef<HTMLInputElement>(null);

  const parsed = useMemo(() => parseDraft(rows), [rows]);
  const verifyLive = useMemo(() => draftAsLive(parsed), [parsed]);
  const totals = useMemo(() => portfolioTotals(verifyLive), [verifyLive]);

  const patchRow = (key: string, patch: Partial<DraftRow>) => {
    setRows((cur) => cur.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  };

  const goChoose = () => {
    setStep("choose");
    setSetupPath(null);
    setError(null);
    setParseStatus(null);
    setLoginUrl(null);
    setBusy(false);
  };

  const loadZerodha = useCallback(async (): Promise<ConnectionsZerodha> => {
    const headers = await pocketedgeAuthHeaders();
    const res = await fetch("/api/agent/connections", { headers, cache: "no-store" });
    const json = (await res.json().catch(() => ({}))) as {
      zerodha?: ConnectionsZerodha;
      error?: { code?: string; message?: string } | string;
    };
    if (!res.ok) {
      const err = json.error;
      const code = typeof err === "object" ? err?.code : typeof err === "string" ? err : undefined;
      const message = typeof err === "object" ? err?.message : undefined;
      if (res.status === 403 || code === "agent_not_enabled") {
        throw new Error("Agent access is required for Zerodha. Open AI → Connections, then try again.");
      }
      if (res.status === 401 || code === "unauthorized") {
        throw new Error("Sign in again to connect Zerodha.");
      }
      if (res.status === 503 || code === "agent_backend_unconfigured") {
        throw new Error("Agent backend is not configured.");
      }
      throw new Error(message || code || `Could not check Zerodha connection (${res.status}).`);
    }
    if (!json.zerodha) {
      throw new Error("Connections response was missing Zerodha status.");
    }
    return json.zerodha;
  }, []);

  const importZerodha = useCallback(async () => {
    if (preview) {
      setError("Zerodha import needs a signed-in agent. Use Add manually in preview.");
      setZerodhaGate("error");
      return;
    }
    setBusy(true);
    setZerodhaGate("importing");
    setError(null);
    setParseStatus("Fetching holdings from Zerodha…");
    try {
      const result = await runPortfolioImport({
        text: ZERODHA_IMPORT_PROMPT,
        getAuthHeaders: pocketedgeAuthHeaders,
        onStatus: setParseStatus,
      });
      if (!result.ok) {
        if (result.login) {
          setLoginUrl(result.login.url);
          setZerodhaGate("need_login");
          setError(result.error);
          return;
        }
        setZerodhaGate("error");
        setError(result.error);
        return;
      }
      setRows(rowsFromProposal(result.holdings));
      setStep("edit");
      setParseStatus(null);
    } catch {
      setZerodhaGate("error");
      setError("Could not import from Zerodha.");
    } finally {
      setBusy(false);
    }
  }, [preview]);

  const refreshZerodhaGate = useCallback(
    async (opts?: { autoImport?: boolean }) => {
      setZerodhaGate("checking");
      setError(null);
      setLoginUrl(null);
      try {
        const z = await loadZerodha();
        if (!z.connected) {
          setZerodhaGate("need_connect");
          return;
        }
        if (!z.sessionActive) {
          setZerodhaGate("need_login");
          return;
        }
        setZerodhaGate("ready");
        if (opts?.autoImport) await importZerodha();
      } catch (err) {
        setZerodhaGate("error");
        setError(err instanceof Error ? err.message : "Could not check Zerodha connection.");
      }
    },
    [importZerodha, loadZerodha],
  );

  const zerodhaAction = useCallback(
    async (action: "connect" | "login") => {
      setZerodhaBusy(true);
      setError(null);
      try {
        const headers = await pocketedgeAuthHeaders();
        const res = await fetch("/api/agent/zerodha", {
          method: "POST",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          const err = (json as { error?: { message?: string } | string }).error;
          setError(
            typeof err === "object" && err?.message
              ? err.message
              : typeof err === "string"
                ? err
                : "Zerodha action failed",
          );
          return;
        }
        if (typeof (json as { url?: string }).url === "string") {
          window.open((json as { url: string }).url, "_blank", "noopener,noreferrer");
        }
        await refreshZerodhaGate({ autoImport: false });
      } catch {
        setError("Zerodha action failed");
      } finally {
        setZerodhaBusy(false);
      }
    },
    [refreshZerodhaGate],
  );

  const parseUploads = useCallback(
    async (attachmentIds: string[]) => {
      if (preview) {
        setError("Uploads need a signed-in agent. Use Add manually in preview.");
        return;
      }
      setBusy(true);
      setError(null);
      setParseStatus("Parsing files with AI…");
      try {
        const result = await runPortfolioImport({
          text: FILE_PARSE_PROMPT,
          attachmentIds,
          getAuthHeaders: pocketedgeAuthHeaders,
          onStatus: setParseStatus,
        });
        if (!result.ok) {
          setError(result.error);
          return;
        }
        setRows(rowsFromProposal(result.holdings));
        setStep("edit");
        setParseStatus(null);
      } catch {
        setError("Could not parse those files.");
      } finally {
        setBusy(false);
      }
    },
    [preview],
  );

  const chooseSetup = (path: SetupPath) => {
    setSetupPath(path);
    setError(null);
    if (path === "manual") {
      setRows(empty ? [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }] : rowsFromHoldings(holdings));
      setStep("edit");
      window.setTimeout(() => firstTickerRef.current?.focus(), 80);
      return;
    }
    if (path === "upload") {
      if (preview) {
        setError("Uploads need a signed-in agent. Use Add manually in preview.");
      }
      setStep("upload");
      return;
    }
    // zerodha
    setStep("zerodha");
    if (preview) {
      setZerodhaGate("error");
      setError("Zerodha import needs a signed-in agent. Use Add manually in preview.");
      return;
    }
    void refreshZerodhaGate({ autoImport: true });
  };

  const continueToVerify = () => {
    if (!parsed.length) {
      setError("Add at least one holding with ticker and quantity.");
      return;
    }
    setError(null);
    setStep("verify");
  };

  const save = async () => {
    if (!parsed.length) {
      setError("Add at least one holding before confirming.");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      if (preview) {
        onSaved({
          id: portfolio?.id ?? "preview-local",
          name: portfolio?.name ?? "Preview portfolio",
          updatedAt: new Date().toISOString(),
          holdings: draftAsLive(parsed),
        });
        return;
      }
      const headers = await pocketedgeAuthHeaders();
      const res = await fetch("/api/portfolio", {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "replace", holdings: parsed }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError((json as { error?: string }).error || "Could not save holdings");
        return;
      }
      if (json.portfolio) onSaved(json.portfolio as LivePortfolio);
    } catch {
      setError("Could not save holdings");
    } finally {
      setSaving(false);
    }
  };

  if (step === "choose") {
    return (
      <div>
        {!empty && onCancel ? (
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              className="text-[13px] font-semibold text-ink-2 hover:underline"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        ) : null}
        <EmptySetupChooser onChoose={chooseSetup} disabled={busy || saving} updating={!empty} />
      </div>
    );
  }

  if (step === "upload") {
    return (
      <div className="space-y-3">
        {error ? <p className="text-[13px] text-rose-700">{error}</p> : null}
        <PortfolioUploadPanel
          disabled={preview}
          parsing={busy}
          parseStatus={parseStatus}
          onParse={(ids) => void parseUploads(ids)}
          onBack={goChoose}
        />
      </div>
    );
  }

  if (step === "zerodha") {
    return (
      <div className="mx-auto w-full max-w-2xl space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h2 className="text-headline text-ink">Fetch from Zerodha</h2>
            <p className="mt-1 text-[14px] text-ink-2">Connect once, then import live holdings.</p>
          </div>
          <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={goChoose}>
            ← All options
          </button>
        </div>

        {error ? <p className="text-[13px] text-rose-700">{error}</p> : null}
        {zerodhaGate === "checking" || zerodhaGate === "importing" ? (
          <p className="text-[14px] text-ink-2">{parseStatus || "Working…"}</p>
        ) : null}

        {zerodhaGate === "need_connect" ? (
          <div className="space-y-3 rounded-2xl border border-line bg-white p-5">
            <p className="text-[14px] text-ink-2">Link Zerodha so we can pull holdings via MCP.</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn-primary text-[13px] disabled:opacity-50"
                disabled={zerodhaBusy}
                onClick={() => void zerodhaAction("connect")}
              >
                {zerodhaBusy ? "Opening…" : "Connect Zerodha"}
              </button>
              <Link
                href="/ai/connections"
                className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink hover:border-ink/30"
              >
                Connections
              </Link>
            </div>
          </div>
        ) : null}

        {zerodhaGate === "need_login" ? (
          <div className="space-y-3 rounded-2xl border border-line bg-white p-5">
            <p className="text-[14px] text-ink-2">Zerodha is linked, but today’s session needs a login.</p>
            <div className="flex flex-wrap gap-2">
              {loginUrl ? (
                <a href={loginUrl} target="_blank" rel="noreferrer" className="btn-primary text-[13px]">
                  Log in to Zerodha
                </a>
              ) : (
                <button
                  type="button"
                  className="btn-primary text-[13px] disabled:opacity-50"
                  disabled={zerodhaBusy}
                  onClick={() => void zerodhaAction("login")}
                >
                  {zerodhaBusy ? "Opening…" : "Log in to Zerodha"}
                </button>
              )}
              <button
                type="button"
                className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink hover:border-ink/30 disabled:opacity-50"
                disabled={busy || zerodhaBusy}
                onClick={() => void refreshZerodhaGate({ autoImport: true })}
              >
                I’ve logged in — import
              </button>
            </div>
          </div>
        ) : null}

        {zerodhaGate === "ready" ? (
          <button
            type="button"
            className="btn-primary text-[13px] disabled:opacity-50"
            disabled={busy}
            onClick={() => void importZerodha()}
          >
            Import holdings
          </button>
        ) : null}

        {zerodhaGate === "error" ? (
          <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={goChoose}>
            Try another option
          </button>
        ) : null}
      </div>
    );
  }

  if (step === "verify") {
    return (
      <div className="mx-auto w-full max-w-3xl space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h2 className="text-headline text-ink">Verify holdings</h2>
            <p className="mt-1 text-[14px] text-ink-2">
              Check the totals and list. Go back to edit if something looks off.
            </p>
          </div>
          <button
            type="button"
            className="text-[13px] font-semibold text-accent hover:underline"
            onClick={() => setStep("edit")}
          >
            ← Edit
          </button>
        </div>

        {error ? <p className="text-[13px] text-rose-700">{error}</p> : null}

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-white px-4 py-4 shadow-[2px_2px_0_#0b0b0b]">
            <p className="text-meta text-ink-3">Holdings</p>
            <p className="mt-1 text-xl font-semibold tabular-nums text-ink">{parsed.length}</p>
          </div>
          <div className="rounded-xl border border-line bg-white px-4 py-4 shadow-[2px_2px_0_#0b0b0b]">
            <p className="text-meta text-ink-3">Invested (from avg)</p>
            <p className="mt-1 text-xl font-semibold tabular-nums text-ink">
              {totals.invested > 0 ? formatInr(totals.invested, true) : "—"}
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white px-4 py-4 shadow-[2px_2px_0_#0b0b0b]">
            <p className="text-meta text-ink-3">Book value</p>
            <p className="mt-1 text-xl font-semibold tabular-nums text-ink">
              {totals.totalValue > 0 ? formatInr(totals.totalValue, true) : "—"}
            </p>
            <p className="mt-1 text-[12px] text-ink-3">Uses avg cost until live prices load after save</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[480px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-line text-meta text-ink-3">
                <th className="px-4 py-3 font-normal">Ticker</th>
                <th className="px-4 py-3 font-normal">Name</th>
                <th className="px-4 py-3 font-normal text-right">Qty</th>
                <th className="px-4 py-3 font-normal text-right">Avg</th>
                <th className="px-4 py-3 font-normal text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {verifyLive.map((h) => (
                <tr key={h.ticker} className="border-b border-line/70 last:border-0">
                  <td className="px-4 py-2.5 font-medium text-ink">{h.ticker}</td>
                  <td className="px-4 py-2.5 text-ink-2">{h.name || "—"}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-ink">
                    {h.qty.toLocaleString("en-IN")}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-ink-2">
                    {h.avg != null ? formatInr(h.avg, true) : "—"}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-ink">
                    {h.value != null ? formatInr(h.value, true) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn-primary text-[13px] disabled:opacity-50"
            disabled={saving}
            onClick={() => void save()}
          >
            {saving ? "Saving…" : "Confirm & save"}
          </button>
          <button
            type="button"
            className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink-2 hover:border-ink/30"
            disabled={saving}
            onClick={() => setStep("edit")}
          >
            Back to edit
          </button>
        </div>
      </div>
    );
  }

  // edit step
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-headline text-ink">
            {setupPath === "upload"
              ? "Review parsed holdings"
              : setupPath === "zerodha"
                ? "Review Zerodha holdings"
                : "Add holdings"}
          </h2>
          <p className="mt-1 text-[14px] text-ink-2">
            {setupPath === "manual"
              ? "Enter ticker, quantity, and average cost. Continue to verify totals."
              : "Fix any mistakes, then continue to verify."}
          </p>
        </div>
        <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={goChoose}>
          ← All options
        </button>
      </div>

      {error ? <p className="text-[13px] text-rose-700">{error}</p> : null}

      <div className="rounded-2xl border border-line bg-white p-3 shadow-[3px_3px_0_rgba(11,11,11,0.06)] sm:p-4">
        <div className="mb-2 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            className="text-[12px] font-semibold text-ink-2 hover:text-rose-700 hover:underline"
            disabled={saving}
            onClick={() => setRows([{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }])}
          >
            Remove all rows
          </button>
          <button
            type="button"
            className="text-[12px] font-semibold text-accent hover:underline"
            disabled={saving}
            onClick={() =>
              setRows((cur) => [...cur, { key: newKey(), ticker: "", qty: "", avg: "", name: "" }])
            }
          >
            + Add row
          </button>
        </div>
        <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-line text-meta text-ink-3">
              <th className="pb-2 pr-2 font-normal">Ticker</th>
              <th className="pb-2 pr-2 font-normal">Qty</th>
              <th className="pb-2 pr-2 font-normal">Avg</th>
              <th className="pb-2 pr-2 font-normal">Name</th>
              <th className="pb-2 w-8 font-normal" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.key} className="border-b border-line/70 last:border-0">
                <td className="py-1.5 pr-2">
                  <input
                    ref={idx === 0 ? firstTickerRef : undefined}
                    className="w-full min-w-[5.5rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 uppercase outline-none focus:border-ink/40"
                    value={row.ticker}
                    placeholder="INFY"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { ticker: e.target.value })}
                  />
                </td>
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[4.5rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 tabular-nums outline-none focus:border-ink/40"
                    value={row.qty}
                    inputMode="decimal"
                    placeholder="10"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { qty: e.target.value })}
                  />
                </td>
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[4.5rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 tabular-nums outline-none focus:border-ink/40"
                    value={row.avg}
                    inputMode="decimal"
                    placeholder="—"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { avg: e.target.value })}
                  />
                </td>
                <td className="py-1.5 pr-2">
                  <input
                    className="w-full min-w-[6rem] rounded-lg border border-line bg-paper-2 px-2 py-1.5 outline-none focus:border-ink/40"
                    value={row.name}
                    placeholder="—"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { name: e.target.value })}
                  />
                </td>
                <td className="py-1.5 text-right">
                  <button
                    type="button"
                    aria-label="Remove row"
                    className="rounded-lg px-2 py-1 text-ink-3 hover:bg-paper-2 hover:text-ink"
                    disabled={saving}
                    onClick={() =>
                      setRows((cur) => {
                        const next = cur.filter((r) => r.key !== row.key);
                        return next.length
                          ? next
                          : [{ key: newKey(), ticker: "", qty: "", avg: "", name: "" }];
                      })
                    }
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-primary text-[13px] disabled:opacity-50"
          disabled={saving || !parsed.length}
          onClick={continueToVerify}
        >
          Continue to verify
        </button>
        {onCancel && !empty ? (
          <button
            type="button"
            className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-2 hover:bg-paper-2"
            disabled={saving}
            onClick={onCancel}
          >
            Cancel
          </button>
        ) : null}
      </div>
    </div>
  );
}
