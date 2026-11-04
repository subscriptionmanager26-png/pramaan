"use client";

import { Download, PenLine, Upload } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";

import { PortfolioUploadPanel } from "@/components/portfolio/PortfolioUploadPanel";
import type { PortfolioHoldingDraft } from "@/lib/agent/types";
import {
  formatHoldingSource,
  formatInr,
  portfolioTotals,
  type LiveHolding,
  type LivePortfolio,
} from "@/lib/portfolio/holdings";
import { runPortfolioImport } from "@/lib/portfolio/import-via-agent";
import { FILE_PARSE_PROMPT } from "@/lib/portfolio/setup-prompts";
import {
  fetchZerodhaHoldings,
  openZerodhaLoginTab,
  requestZerodhaLogin,
} from "@/lib/portfolio/zerodha-start";
import { pocketedgeAuthHeaders } from "@/lib/pocketedge/auth-headers";

type DraftRow = {
  key: string;
  ticker: string;
  qty: string;
  avg: string;
  name: string;
  source: string;
  assetType: string;
};

function emptyRow(source = "manual"): DraftRow {
  return { key: newKey(), ticker: "", qty: "", avg: "", name: "", source, assetType: "" };
}

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
  if (!holdings.length) return [emptyRow()];
  return holdings.map((h) => ({
    key: newKey(),
    ticker: h.ticker,
    qty: String(h.qty),
    avg: h.avg != null ? String(h.avg) : "",
    name: h.name ?? "",
    source: h.source ?? "",
    assetType: h.assetType ?? "",
  }));
}

function rowsFromProposal(holdings: PortfolioHoldingDraft[], fallbackSource: string): DraftRow[] {
  const next = holdings
    .filter((h) => h.qty > 0)
    .map((h) => ({
      key: newKey(),
      ticker: h.ticker,
      qty: String(h.qty),
      avg: h.avg != null ? String(h.avg) : "",
      name: h.name ?? "",
      source: h.source || fallbackSource,
      assetType: h.assetType ?? "",
    }));
  return next.length ? next : [emptyRow(fallbackSource)];
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
    if (row.source.trim()) item.source = row.source.trim().toLowerCase();
    if (row.assetType.trim()) item.assetType = row.assetType.trim().toLowerCase();
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
    source: h.source,
    assetType: h.assetType,
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
      detail: "Stocks and mutual funds via Zerodha MCP",
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
      detail: "CSV, Excel, screenshot, or PDF",
      icon: <Upload className="h-5 w-5" strokeWidth={2} aria-hidden />,
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-stretch py-2 sm:py-8">
      <div className="text-center sm:text-left">
        <h2 className="text-headline text-ink">{updating ? "Update holdings" : "Add your holdings"}</h2>
      </div>
      <div className="mt-5 grid gap-2.5 sm:mt-8 sm:gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => onChoose(opt.id)}
            className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 text-left shadow-[3px_3px_0_#0b0b0b] transition-colors hover:border-ink/40 disabled:opacity-50 sm:items-start sm:gap-5 sm:px-6 sm:py-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-paper-2 text-ink sm:h-11 sm:w-11">
              {opt.icon}
            </span>
            <span className="min-w-0">
              <p className="text-[16px] font-semibold tracking-tight text-ink sm:text-[18px]">{opt.title}</p>
              <p className="mt-0.5 text-[13px] leading-5 text-ink-2 sm:mt-1 sm:text-[14px]">{opt.detail}</p>
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
    empty ? [emptyRow()] : rowsFromHoldings(holdings),
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
    let res: Response;
    try {
      res = await fetch("/api/agent/connections", {
        headers,
        cache: "no-store",
        signal: AbortSignal.timeout(45_000),
      });
    } catch (err) {
      const timedOut =
        err instanceof Error && (err.name === "TimeoutError" || /signal timed out|timeout/i.test(err.message));
      throw new Error(
        timedOut
          ? "Zerodha status check timed out. If you’re already logged in via Connections, tap import."
          : "Could not check Zerodha connection.",
      );
    }
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
      // Same MCP Kite session as Connections — direct get_holdings, not the chat agent.
      const result = await fetchZerodhaHoldings();
      if (!result.ok) {
        if (result.needsConnect) {
          setZerodhaGate("need_connect");
          setError(result.error);
          return;
        }
        if (result.needsLogin) {
          setZerodhaGate("need_login");
          setError(result.error);
          return;
        }
        setZerodhaGate("error");
        setError(result.error);
        return;
      }
      setRows(rowsFromProposal(result.holdings, "zerodha"));
      setStep("edit");
      setParseStatus(null);
    } catch {
      setZerodhaGate("error");
      setError("Could not import from Zerodha.");
    } finally {
      setBusy(false);
    }
  }, [preview]);

  const startZerodhaLogin = useCallback(async (action: "connect" | "login") => {
    setZerodhaBusy(true);
    setError(null);
    setLoginUrl(null);
    try {
      // Prefer one-click new-tab form (popup-blocker safe). Fall back to JSON + link.
      const opened = await openZerodhaLoginTab(action);
      if (opened.ok) {
        setZerodhaGate("need_login");
        return;
      }
      const result = await requestZerodhaLogin(action);
      if (!result.ok) {
        setError(result.error || opened.error);
        setZerodhaGate(action === "connect" ? "need_connect" : "need_login");
        return;
      }
      if ("url" in result) {
        setLoginUrl(result.url);
        setZerodhaGate("need_login");
        window.open(result.url, "_blank", "noopener,noreferrer");
        return;
      }
      setZerodhaGate("ready");
      await importZerodha();
    } finally {
      setZerodhaBusy(false);
    }
  }, [importZerodha]);

  const refreshZerodhaGate = useCallback(
    async (opts?: { autoImport?: boolean }) => {
      setZerodhaGate("checking");
      setError(null);
      try {
        const z = await loadZerodha();
        if (!z.connected) {
          setZerodhaGate("need_connect");
          return;
        }
        if (!z.sessionActive) {
          // Connected in Connections but session probe was slow/null — still allow import.
          setZerodhaGate("need_login");
          if (opts?.autoImport) await importZerodha();
          return;
        }
        setZerodhaGate("ready");
        if (opts?.autoImport) await importZerodha();
      } catch (err) {
        const message = err instanceof Error ? err.message : "Could not check Zerodha connection.";
        // Timeouts often mean MCP was slow while the session is fine — offer import.
        if (/timed out/i.test(message)) {
          setZerodhaGate("need_login");
          setError(message);
          return;
        }
        setZerodhaGate("error");
        setError(message);
      }
    },
    [importZerodha, loadZerodha],
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
        setRows(rowsFromProposal(result.holdings, "upload"));
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
      setRows(empty ? [emptyRow("manual")] : rowsFromHoldings(holdings));
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
    // zerodha — if Connections already has a live session, import; otherwise show Connect/Login
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
          <p className="text-[14px] text-ink-2">
            {zerodhaGate === "checking"
              ? "Checking your Zerodha connection…"
              : parseStatus || "Fetching holdings from Zerodha…"}
          </p>
        ) : null}

        {zerodhaGate === "need_connect" ? (
          <div className="space-y-3 rounded-2xl border border-line bg-white p-5">
            <p className="text-[14px] text-ink-2">
              Link Zerodha once under Connections (profile menu), or start Kite login here.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link href="/ai/connections" className="btn-primary text-[13px]">
                Open Connections
              </Link>
              <button
                type="button"
                className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink hover:border-ink/30 disabled:opacity-50"
                disabled={zerodhaBusy}
                onClick={() => void startZerodhaLogin("connect")}
              >
                {zerodhaBusy ? "Opening Zerodha…" : "Connect Zerodha"}
              </button>
            </div>
            {loginUrl ? (
              <a href={loginUrl} target="_blank" rel="noreferrer" className="btn-primary inline-flex text-[13px]">
                Continue to Zerodha →
              </a>
            ) : null}
            <p className="text-[12px] text-ink-3">
              Finish login in the Zerodha tab, return here, then import holdings.
            </p>
          </div>
        ) : null}

        {zerodhaGate === "need_login" ? (
          <div className="space-y-3 rounded-2xl border border-line bg-white p-5">
            <p className="text-[14px] text-ink-2">
              {loginUrl
                ? "Finish Zerodha login in the other tab, then import holdings."
                : "Log in on Zerodha if needed, then import holdings."}
            </p>
            <div className="flex flex-wrap gap-2">
              {loginUrl ? (
                <a href={loginUrl} target="_blank" rel="noreferrer" className="btn-primary text-[13px]">
                  Continue to Zerodha →
                </a>
              ) : (
                <button
                  type="button"
                  className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink hover:border-ink/30 disabled:opacity-50"
                  disabled={zerodhaBusy}
                  onClick={() => void startZerodhaLogin("login")}
                >
                  {zerodhaBusy ? "Opening Zerodha…" : "Log in on Zerodha"}
                </button>
              )}
              <button
                type="button"
                className="btn-primary text-[13px] disabled:opacity-50"
                disabled={busy || zerodhaBusy}
                onClick={() => void importZerodha()}
              >
                {busy ? "Importing…" : "Import holdings"}
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
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-primary text-[13px] disabled:opacity-50"
              disabled={busy}
              onClick={() => void importZerodha()}
            >
              Try import anyway
            </button>
            <button type="button" className="text-[13px] font-semibold text-accent hover:underline" onClick={goChoose}>
              Try another option
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  if (step === "verify") {
    return (
      <div className="mx-auto w-full max-w-3xl space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-headline text-ink">Verify holdings</h2>
          <button
            type="button"
            className="shrink-0 text-[13px] font-semibold text-accent hover:underline"
            onClick={() => setStep("edit")}
          >
            ← Edit
          </button>
        </div>

        {error ? <p className="text-[13px] text-rose-700">{error}</p> : null}

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl border border-line bg-white px-3 py-3 shadow-[2px_2px_0_#0b0b0b] sm:px-4 sm:py-4">
            <p className="text-meta text-ink-3">Holdings</p>
            <p className="mt-1 text-lg font-semibold tabular-nums text-ink sm:text-xl">{parsed.length}</p>
          </div>
          <div className="rounded-xl border border-line bg-white px-3 py-3 shadow-[2px_2px_0_#0b0b0b] sm:px-4 sm:py-4">
            <p className="text-meta text-ink-3">Invested</p>
            <p className="mt-1 text-lg font-semibold tabular-nums text-ink sm:text-xl">
              {totals.invested > 0 ? formatInr(totals.invested, true) : "—"}
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white px-3 py-3 shadow-[2px_2px_0_#0b0b0b] sm:px-4 sm:py-4">
            <p className="text-meta text-ink-3">Book</p>
            <p className="mt-1 text-lg font-semibold tabular-nums text-ink sm:text-xl">
              {totals.totalValue > 0 ? formatInr(totals.totalValue, true) : "—"}
            </p>
          </div>
        </div>

        <ul className="space-y-2 sm:hidden">
          {verifyLive.map((h) => (
            <li key={h.ticker} className="rounded-xl border border-line bg-white px-3 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{h.name || h.ticker}</p>
                  <p className="text-meta text-ink-3">
                    {h.ticker}
                    {h.assetType === "fund" ? " · MF" : ""}
                    {" · "}
                    {formatHoldingSource(h.source)}
                  </p>
                </div>
                <div className="shrink-0 text-right tabular-nums">
                  <p className="font-medium text-ink">{h.value != null ? formatInr(h.value, true) : "—"}</p>
                  <p className="text-meta text-ink-3">
                    {h.qty.toLocaleString("en-IN")}
                    {h.avg != null ? ` @ ${formatInr(h.avg, true)}` : ""}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden overflow-x-auto rounded-2xl border border-line bg-white sm:block">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-line text-meta text-ink-3">
                <th className="px-4 py-3 font-normal">Ticker</th>
                <th className="px-4 py-3 font-normal">Name</th>
                <th className="px-4 py-3 font-normal">Source</th>
                <th className="px-4 py-3 font-normal text-right">Qty</th>
                <th className="px-4 py-3 font-normal text-right">Avg</th>
                <th className="px-4 py-3 font-normal text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {verifyLive.map((h) => (
                <tr key={h.ticker} className="border-b border-line/70 last:border-0">
                  <td className="px-4 py-2.5 font-medium text-ink">{h.ticker}</td>
                  <td className="px-4 py-2.5 text-ink-2">
                    {h.name || "—"}
                    {h.assetType === "fund" ? (
                      <span className="mt-0.5 block text-[11px] text-ink-3">Mutual fund</span>
                    ) : null}
                  </td>
                  <td className="px-4 py-2.5 text-ink-2">{formatHoldingSource(h.source)}</td>
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

        <div className="sticky bottom-[calc(3.5rem+env(safe-area-inset-bottom,0px))] z-10 -mx-1 flex gap-2 border-t border-line bg-paper/95 px-1 py-3 backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none lg:bottom-0">
          <button
            type="button"
            className="btn-primary flex-1 text-[13px] disabled:opacity-50 sm:flex-none"
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
            Back
          </button>
        </div>
      </div>
    );
  }

  const defaultSource = setupPath === "zerodha" ? "zerodha" : setupPath === "upload" ? "upload" : "manual";

  // edit step
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="min-w-0 text-headline text-ink">
          {setupPath === "upload"
            ? "Review parsed holdings"
            : setupPath === "zerodha"
              ? "Review Zerodha holdings"
              : "Add holdings"}
        </h2>
        <button type="button" className="shrink-0 text-[13px] font-semibold text-accent hover:underline" onClick={goChoose}>
          ← Options
        </button>
      </div>

      {error ? <p className="text-[13px] text-rose-700">{error}</p> : null}

      <div className="rounded-2xl border border-line bg-white p-3 shadow-[3px_3px_0_rgba(11,11,11,0.06)] sm:p-4">
        <div className="mb-3 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            className="text-[12px] font-semibold text-ink-2 hover:text-rose-700 hover:underline"
            disabled={saving}
            onClick={() => setRows([emptyRow(defaultSource)])}
          >
            Remove all
          </button>
          <button
            type="button"
            className="text-[12px] font-semibold text-accent hover:underline"
            disabled={saving}
            onClick={() => setRows((cur) => [...cur, emptyRow(defaultSource)])}
          >
            + Add row
          </button>
        </div>

        <div className="space-y-3 md:hidden">
          {rows.map((row, idx) => (
            <div key={row.key} className="rounded-xl border border-line bg-paper-2 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-[12px] font-medium text-ink-3">
                  {formatHoldingSource(row.source)}
                  {row.assetType === "fund" ? " · MF" : ""}
                </span>
                <button
                  type="button"
                  aria-label="Remove row"
                  className="rounded-lg px-2 py-1 text-[13px] text-ink-3 hover:bg-white hover:text-ink"
                  disabled={saving}
                  onClick={() =>
                    setRows((cur) => {
                      const next = cur.filter((r) => r.key !== row.key);
                      return next.length ? next : [emptyRow(defaultSource)];
                    })
                  }
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <label className="block">
                  <span className="text-meta text-ink-3">Ticker</span>
                  <input
                    ref={idx === 0 ? firstTickerRef : undefined}
                    className="mt-1 w-full rounded-lg border border-line bg-white px-2.5 py-2 uppercase outline-none focus:border-ink/40"
                    value={row.ticker}
                    placeholder="INFY"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { ticker: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-meta text-ink-3">Qty</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-line bg-white px-2.5 py-2 tabular-nums outline-none focus:border-ink/40"
                    value={row.qty}
                    inputMode="decimal"
                    placeholder="10"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { qty: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-meta text-ink-3">Avg</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-line bg-white px-2.5 py-2 tabular-nums outline-none focus:border-ink/40"
                    value={row.avg}
                    inputMode="decimal"
                    placeholder="—"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { avg: e.target.value })}
                  />
                </label>
                <label className="block">
                  <span className="text-meta text-ink-3">Name</span>
                  <input
                    className="mt-1 w-full rounded-lg border border-line bg-white px-2.5 py-2 outline-none focus:border-ink/40"
                    value={row.name}
                    placeholder="—"
                    disabled={saving}
                    onChange={(e) => patchRow(row.key, { name: e.target.value })}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-line text-meta text-ink-3">
                <th className="pb-2 pr-2 font-normal">Ticker</th>
                <th className="pb-2 pr-2 font-normal">Qty</th>
                <th className="pb-2 pr-2 font-normal">Avg</th>
                <th className="pb-2 pr-2 font-normal">Name</th>
                <th className="pb-2 pr-2 font-normal">Source</th>
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
                  <td className="py-1.5 pr-2">
                    <span className="inline-flex whitespace-nowrap rounded-md border border-line bg-paper-2 px-2 py-1 text-[12px] text-ink-2">
                      {formatHoldingSource(row.source)}
                      {row.assetType === "fund" ? " · MF" : ""}
                    </span>
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
                          return next.length ? next : [emptyRow(defaultSource)];
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
      </div>

      <div className="sticky bottom-[calc(3.5rem+env(safe-area-inset-bottom,0px))] z-10 -mx-1 flex gap-2 border-t border-line bg-paper/95 px-1 py-3 backdrop-blur sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none lg:bottom-0">
        <button
          type="button"
          className="btn-primary flex-1 text-[13px] disabled:opacity-50 sm:flex-none"
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
