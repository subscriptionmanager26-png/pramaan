/** Browser upload to `/api/agent/files` with byte-level progress (XHR). */

export type UploadProgress = {
  /** 0–100 of request body sent to our BFF. */
  percent: number;
  /** Bytes finished sending; server may still be processing. */
  phase: "upload" | "process";
};

export type UploadFileResult =
  | { ok: true; status: number; file: { id: string; status: string; name?: string } }
  | { ok: false; status: number; body: unknown };

export function uploadAgentFile(
  file: File,
  headers: Record<string, string>,
  onProgress?: (p: UploadProgress) => void,
): Promise<UploadFileResult> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/agent/files");
    xhr.withCredentials = true;
    xhr.timeout = 120_000;
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === "content-type") continue;
      xhr.setRequestHeader(key, value);
    }

    xhr.upload.onprogress = (event) => {
      if (!onProgress) return;
      if (event.lengthComputable && event.total > 0) {
        onProgress({
          percent: Math.min(99, Math.round((event.loaded / event.total) * 100)),
          phase: "upload",
        });
      }
    };
    xhr.upload.onload = () => onProgress?.({ percent: 100, phase: "process" });

    xhr.onload = () => {
      let body: unknown = {};
      try {
        body = xhr.responseText ? JSON.parse(xhr.responseText) : {};
      } catch {
        body = {};
      }
      const ok = xhr.status >= 200 && xhr.status < 300;
      const file = (body as { file?: { id: string; status: string; name?: string } }).file;
      if (ok && file?.id) {
        resolve({ ok: true, status: xhr.status, file });
        return;
      }
      resolve({ ok: false, status: xhr.status, body });
    };
    xhr.onerror = () => reject(new Error("network"));
    xhr.ontimeout = () => reject(new Error("timeout"));

    const body = new FormData();
    body.append("file", file);
    xhr.send(body);
  });
}
