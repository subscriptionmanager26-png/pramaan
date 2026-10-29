/** Shared client prompts for empty-book setup paths. */

export const ZERODHA_IMPORT_PROMPT =
  "Import my Zerodha holdings into my portfolio book. Use Zerodha MCP tools (get_holdings / related) to fetch my CURRENT holdings and average cost where available, then call propose_portfolio_holdings with mode=replace. Do not invent positions.";

export const FILE_PARSE_PROMPT =
  "Parse the attached holdings file(s) or screenshot and propose my CURRENT portfolio book. " +
  "Accept CSV, Excel (.xlsx/.xls), broker statements, CAS/PDF (including unlocked password-protected PDFs), and screenshots. " +
  "Use file tools and vision as needed. Normalize tickers, include qty and avg cost when present, enrich names when obvious, and ignore noise (cash, totals, headers). " +
  "Prefer mode=replace for a full statement. Always finish with propose_portfolio_holdings — do not only describe the rows.";
