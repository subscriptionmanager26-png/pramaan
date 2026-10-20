export type AgentArtifact = {
  path: string;
  sizeBytes?: number;
  updatedAt?: string;
  kind: "image" | "video" | "text" | "other";
};

export function artifactDisplayName(path: string) {
  const trimmed = path.startsWith("artifacts/") ? path.slice("artifacts/".length) : path;
  return trimmed.split("/").pop() || trimmed;
}

export function artifactDownloadPath(messageId: string, artifactPath: string) {
  return `/api/agent/messages/${encodeURIComponent(messageId)}/artifacts/file?path=${encodeURIComponent(artifactPath)}`;
}
