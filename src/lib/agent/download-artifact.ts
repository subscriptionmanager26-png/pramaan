import { artifactDisplayName, artifactDownloadPath } from "@/lib/agent/artifacts";

function errorFromBody(body: unknown, status: number) {
  if (body && typeof body === "object") {
    const err = (body as { error?: { message?: string } | string }).error;
    if (typeof err === "object" && err?.message) return err.message;
    if (typeof err === "string" && err) return err;
  }
  if (status === 504) return "Timed out getting the download link. Try again in a moment.";
  return `Download failed (${status})`;
}

function triggerBrowserDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/** Download bytes from Cursor's presigned S3 URL (browser-side). */
async function saveFromSignedUrl(signedUrl: string, filename: string) {
  try {
    const fileRes = await fetch(signedUrl, { cache: "no-store" });
    if (!fileRes.ok) throw new Error(`Artifact fetch failed (${fileRes.status})`);
    const blob = await fileRes.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerBrowserDownload(objectUrl, filename);
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    return;
  } catch {
    // S3 may block CORS — navigate so the browser still gets the file.
    window.location.assign(signedUrl);
  }
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
      signal: AbortSignal.timeout(30_000),
    });

    const contentType = res.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const json = (await res.json().catch(() => ({}))) as {
        url?: string;
        name?: string;
        error?: { message?: string } | string;
      };
      if (!res.ok) return { ok: false, message: errorFromBody(json, res.status) };
      if (typeof json.url === "string" && json.url) {
        await saveFromSignedUrl(json.url, json.name || filename);
        return { ok: true };
      }
      return { ok: false, message: "Download link was missing." };
    }

    if (!res.ok) {
      try {
        const json = await res.json();
        return { ok: false, message: errorFromBody(json, res.status) };
      } catch {
        return { ok: false, message: errorFromBody(null, res.status) };
      }
    }

    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerBrowserDownload(objectUrl, filename);
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    return { ok: true };
  } catch (err) {
    if (err instanceof Error && (err.name === "TimeoutError" || /timeout/i.test(err.message))) {
      return { ok: false, message: "Timed out getting the download link. Try again in a moment." };
    }
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
