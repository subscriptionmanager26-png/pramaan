import { cachedPocketedgeAccessToken } from "@/lib/pocketedge/auth-headers";
import { pocketedgeAuthStorageKey } from "@/lib/pocketedge/auth-storage";

function syncAccessToken(): string | null {
  const cached = cachedPocketedgeAccessToken();
  if (cached) return cached;
  try {
    const key = pocketedgeAuthStorageKey();
    if (!key) return null;
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const nested = parsed.currentSession as Record<string, unknown> | undefined;
    const token =
      (typeof parsed.access_token === "string" && parsed.access_token) ||
      (typeof nested?.access_token === "string" && nested.access_token) ||
      null;
    return token;
  } catch {
    return null;
  }
}

/** Submit Connect/Login via same-origin form so the new tab hits our redirect → Kite (not about:blank). */
export function submitZerodhaKiteForm(action: "connect" | "login", returnTo?: string) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "/api/agent/zerodha/start";
  form.target = "_blank";
  form.style.display = "none";

  const add = (name: string, value: string) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };
  add("action", action);
  if (returnTo) add("returnTo", returnTo);
  // Cookie may be missing when the session is large — pass Bearer via form as fallback.
  const token = syncAccessToken();
  if (token) add("access_token", token);

  document.body.appendChild(form);
  form.submit();
  form.remove();
}
