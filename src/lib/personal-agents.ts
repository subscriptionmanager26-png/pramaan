const base = () => (process.env.PERSONAL_AGENTS_URL || "").replace(/\/$/, "");
const key = () => process.env.PERSONAL_AGENTS_API_KEY || "";

export function personalAgentsConfigured() {
  return Boolean(base() && key());
}

function headersToRecord(h?: HeadersInit): Record<string, string> {
  if (!h) return {};
  if (h instanceof Headers) {
    const out: Record<string, string> = {};
    h.forEach((value, name) => {
      out[name] = value;
    });
    return out;
  }
  if (Array.isArray(h)) return Object.fromEntries(h);
  return { ...h };
}

function isJsonBody(body: RequestInit["body"]): boolean {
  if (body === undefined || body === null) return false;
  if (body instanceof FormData) return false;
  if (body instanceof ArrayBuffer) return false;
  if (ArrayBuffer.isView(body)) return false;
  if (typeof Blob !== "undefined" && body instanceof Blob) return false;
  if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream) return false;
  return true;
}

function authHeaders(): Record<string, string> {
  const token = key();
  const h: Record<string, string> = {};
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

export async function syncAgentUser(
  externalId: string,
  input: { name?: string; email?: string },
  active: boolean,
) {
  const url = `${base()}/api/v1/users/${encodeURIComponent(externalId)}`;
  if (!active) {
    const res = await fetch(url, { method: "DELETE", headers: { ...authHeaders(), "Content-Type": "application/json" } });
    return { ok: res.status === 204 || res.ok, status: res.status };
  }
  const res = await fetch(url, {
    method: "PUT",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ name: input.name, email: input.email }),
  });
  return { ok: res.ok, status: res.status, body: await res.json().catch(() => undefined) };
}

export async function paFetch(path: string, init?: RequestInit) {
  const extra = headersToRecord(init?.headers);
  const outHeaders: Record<string, string> = { ...authHeaders(), ...extra };
  const body = init?.body;

  if (body instanceof FormData) {
    delete outHeaders["Content-Type"];
    delete outHeaders["content-type"];
    return fetch(`${base()}${path}`, { ...init, headers: outHeaders });
  }

  if (!isJsonBody(body)) {
    if (outHeaders["Content-Type"] === "application/json") delete outHeaders["Content-Type"];
  } else {
    outHeaders["Content-Type"] = outHeaders["Content-Type"] || "application/json";
  }

  return fetch(`${base()}${path}`, { ...init, headers: outHeaders });
}
