import { artifactDisplayName, artifactDownloadPath } from "@/lib/agent/artifacts";

function errorFromBody(body: unknown, status: number) {
  if (body && typeof body === "object") {
    const err = (body as { error?: { message?: string } | string }).error;
    if (typeof err === "object" && err?.message) return err.message;
    if (typeof err === "string" && err) return err;
  }
  return `Download failed (${status})`;
}

function triggerBrowserDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  a.rel = "noopener";
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export async function downloadAgentArtifact(
  messageId: string,
  path: string,
  getAuthHeaders: () => Promise<Record<string, string>>,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const filename = artifactDisplayName(path);
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(artifactDownloadPath(messageId, path), {
      headers,
      credentials: "same-origin",
      cache: "no-store",
    });

    const contentType = res.headers.get("content-type") || "";

    // Signed URL JSON — open directly in the browser.
    if (contentType.includes("application/json")) {
      const json = (await res.json().catch(() => ({}))) as {
        url?: string;
        name?: string;
        error?: { message?: string } | string;
      };
      if (!res.ok) return { ok: false, message: errorFromBody(json, res.status) };
      if (typeof json.url === "string" && json.url) {
        triggerBrowserDownload(json.url, json.name || filename);
        return { ok: true };
      }
      return { ok: false, message: "Download link was missing." };
    }

    if (!res.ok) {
      // Non-JSON error body
      try {
        const json = await res.json();
        return { ok: false, message: errorFromBody(json, res.status) };
      } catch {
        return { ok: false, message: `Download failed (${res.status})` };
      }
    }

    // Proxied binary (mock / text / legacy)
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerBrowserDownload(objectUrl, filename);
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    return { ok: true };
  } catch (err) {
    const message =
      err instanceof Error && err.message === "not_signed_in"
        ? "Sign in again to download."
        : err instanceof Error && err.message
          ? err.message
          : "Download failed. Check your connection and try again.";
    return { ok: false, message };
  }
}

export function artifactDownloadKey(messageId: string, path: string) {
  return `${messageId}:${path}`;
}
