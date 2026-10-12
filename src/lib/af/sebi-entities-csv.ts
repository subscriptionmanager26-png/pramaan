import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { canonicalTwitterUrl, twitterHandleFromUrl } from "./urls";

export type SebiEntityCsvRow = {
  rowId: string;
  category: string;
  entityType: string;
  name: string;
  registration: string;
  twitterHandle: string;
  twitterUrl: string;
  substackUrl: string;
};

const DEFAULT_CSV_PATH = join(process.cwd(), "src/data/sebi-registered-entities.csv");

/** RFC-style CSV parse (quoted fields, doubled quotes). */
export function parseCsvTable(text: string): string[][] {
  const rows: string[][] = [];
  let i = 0;
  let field = "";
  let row: string[] = [];
  let inQuotes = false;

  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += c;
      i += 1;
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (c === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
      i += 1;
      continue;
    }
    field += c;
    i += 1;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export function normalizeTwitterHandle(raw: string | null | undefined): string | null {
  if (!raw || !String(raw).trim()) return null;
  let s = String(raw).trim();
  if (s === "#ERROR!") return null;
  const fromUrl = twitterHandleFromUrl(s);
  if (fromUrl) return fromUrl.replace(/^@/, "").toLowerCase();
  s = s.replace(/^@/, "").trim();
  if (!s) return null;
  return s.toLowerCase();
}

/** Primary entity X from enrichment sheet (`TwitterURL` then `TwitterHandle`). */
export function primaryTwitterUrlFromParts(
  twitterUrl: string | null | undefined,
  twitterHandle: string | null | undefined,
): string | null {
  const urlHandle = twitterUrl ? normalizeTwitterHandle(twitterUrl) : null;
  const handle = twitterHandle ? normalizeTwitterHandle(twitterHandle) : null;
  const picked = urlHandle ?? handle;
  if (!picked) return null;
  return canonicalTwitterUrl(picked);
}

export function loadSebiEntitiesCsv(csvPath = DEFAULT_CSV_PATH): SebiEntityCsvRow[] {
  if (!existsSync(csvPath)) {
    throw new Error(`SEBI entities CSV not found: ${csvPath}`);
  }
  const table = parseCsvTable(readFileSync(csvPath, "utf8"));
  if (!table.length) return [];
  const header = table[0];
  const idx: Record<string, number> = {};
  header.forEach((h, i) => {
    idx[h] = i;
  });

  const out: SebiEntityCsvRow[] = [];
  for (const line of table.slice(1)) {
    if (!line.length) continue;
    const get = (col: string) => line[idx[col]] ?? "";
    out.push({
      rowId: get("RowId"),
      category: get("Category"),
      entityType: get("EntityType"),
      name: get("Name"),
      registration: get("Registration No.").trim(),
      twitterHandle: get("TwitterHandle"),
      twitterUrl: get("TwitterURL"),
      substackUrl: get("SubstackURL"),
    });
  }
  return out;
}

export function slugifyEntityName(name: string, rowId: string) {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  const suffix = rowId.replace(/[^a-z0-9-]/gi, "").toLowerCase();
  return `${base || "entity"}-${suffix}`;
}
