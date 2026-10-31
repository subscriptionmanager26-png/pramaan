/** Parse a fetch Response as JSON without throwing on HTML/plain-text error bodies. */
export async function parseJsonResponse(res: Response): Promise<{
  ok: boolean;
  status: number;
  json: Record<string, unknown> | null;
  text: string;
  parseError: boolean;
}> {
  const text = await res.text();
  if (!text.trim()) {
    return { ok: res.ok, status: res.status, json: null, text: "", parseError: false };
  }
  try {
    const parsed = JSON.parse(text) as unknown;
    const json =
      parsed && typeof parsed === "object" && !Array.isArray(parsed)
        ? (parsed as Record<string, unknown>)
        : { value: parsed };
    return { ok: res.ok, status: res.status, json, text, parseError: false };
  } catch {
    return { ok: res.ok, status: res.status, json: null, text, parseError: true };
  }
}

export function messageFromFailedResponse(opts: {
  status: number;
  json: Record<string, unknown> | null;
  text: string;
  parseError: boolean;
}): string {
  if (opts.parseError || (!opts.json && opts.text)) {
    const preview = opts.text.replace(/\s+/g, " ").trim().slice(0, 80);
    if (/^an error/i.test(preview) || opts.status >= 500 || opts.status === 504 || opts.status === 408) {
      return "Send failed (server timeout). Try again.";
    }
    return preview ? `Send failed: ${preview}` : "Could not send message.";
  }
  const err = opts.json?.error;
  if (typeof err === "string" && err.trim()) return err;
  if (err && typeof err === "object" && !Array.isArray(err)) {
    const msg = (err as { message?: unknown }).message;
    if (typeof msg === "string" && msg.trim()) return msg;
  }
  return "Could not send message.";
}
