import { decryptSecret, encryptSecret, randomId } from "@/lib/zerodha/crypto";
import { getZerodhaSupabaseAdmin, zerodhaStoreConfigured, ZERODHA_STORE_TABLE } from "@/lib/zerodha/supabase";

const SESSION_PURPOSE = "kite-mcp-session";

export type PeZerodhaConnection = {
  kind: "pe_zerodha";
  connId: string;
  sessionEnc?: string;
  sessionStartedAt?: string;
  createdAt: string;
};

function rowId(userId: string) {
  return `pe:zerodha:${userId}`;
}

async function readConn(userId: string): Promise<PeZerodhaConnection | null> {
  if (!zerodhaStoreConfigured()) return null;
  const supabase = getZerodhaSupabaseAdmin();
  const { data, error } = await supabase.from(ZERODHA_STORE_TABLE).select("data").eq("id", rowId(userId)).maybeSingle();
  if (error) throw error;
  const row = data?.data as PeZerodhaConnection | undefined;
  return row?.kind === "pe_zerodha" ? row : null;
}

async function writeConn(userId: string, row: PeZerodhaConnection) {
  if (!zerodhaStoreConfigured()) throw new Error("Supabase store is required for Zerodha connections.");
  const supabase = getZerodhaSupabaseAdmin();
  const { error } = await supabase.from(ZERODHA_STORE_TABLE).upsert({
    id: rowId(userId),
    data: row,
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

export async function getKiteConnection(userId: string) {
  return readConn(userId);
}

export async function connectKite(userId: string) {
  const existing = await readConn(userId);
  if (existing) return;
  await writeConn(userId, {
    kind: "pe_zerodha",
    connId: randomId("conn"),
    createdAt: new Date().toISOString(),
  });
}

export async function disconnectKite(userId: string) {
  if (!zerodhaStoreConfigured()) return;
  const supabase = getZerodhaSupabaseAdmin();
  await supabase.from(ZERODHA_STORE_TABLE).delete().eq("id", rowId(userId));
}

export async function saveKiteSession(userId: string, sessionId: string) {
  const conn = (await readConn(userId)) ?? {
    kind: "pe_zerodha" as const,
    connId: randomId("conn"),
    createdAt: new Date().toISOString(),
  };
  conn.sessionEnc = encryptSecret(sessionId, SESSION_PURPOSE, userId);
  conn.sessionStartedAt = new Date().toISOString();
  await writeConn(userId, conn);
}

export async function readKiteSession(userId: string, maxAgeMs: number) {
  const conn = await readConn(userId);
  if (!conn?.sessionEnc) return undefined;
  const age = conn.sessionStartedAt ? Date.now() - Date.parse(conn.sessionStartedAt) : Infinity;
  if (age >= maxAgeMs) return undefined;
  return decryptSecret(conn.sessionEnc, SESSION_PURPOSE, userId);
}

export async function readKiteSessionEnc(userId: string) {
  const conn = await readConn(userId);
  if (!conn?.sessionEnc) return undefined;
  return decryptSecret(conn.sessionEnc, SESSION_PURPOSE, userId);
}