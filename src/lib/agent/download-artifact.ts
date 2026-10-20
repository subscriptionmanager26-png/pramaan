import { artifactDisplayName, artifactDownloadPath } from "@/lib/agent/artifacts";

export async function downloadAgentArtifact(
  messageId: string,
  path: string,
  getAuthHeaders: () => Promise<Record<string, string>>,
): Promise<{ ok: true } | { ok: false; message: string }> {
  try {
    const headers = await getAuthHeaders();
    const res = await fetch(artifactDownloadPath(messageId, path), { headers });
    if (!res.ok) {
      let message = `Download failed (${res.status})`;
      try {
        const json = (await res.json()) as { error?: { message?: string } | string };
        const err = json.error;
        if (typeof err === "object" && err?.message) message = err.message;
        else if (typeof err === "string") message = err;
      } catch {
        /* ignore */
      }
      return { ok: false, message };
    }
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = artifactDisplayName(path);
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    return { ok: true };
  } catch {
    return { ok: false, message: "Download failed. Check your connection and try again." };
  }
}

export function artifactDownloadKey(messageId: string, path: string) {
  return `${messageId}:${path}`;
}
