export type UiBlock =
  | { kind: "markdown"; text: string }
  | { kind: "card"; title: string; body?: string; tone?: string; fields?: { label: string; value: string }[] }
  | {
      kind: "table";
      title?: string;
      columns: { key: string; label: string; format?: string }[];
      rows: Record<string, string | number | null>[];
    }
  | {
      kind: "chart";
      title?: string;
      chartType: string;
      xKey: string;
      series: { key: string; label: string }[];
      data: Record<string, string | number>[];
    };

export type AgentAction =
  | { kind: "connection_login"; service: string; url: string; message?: string }
  | { kind: "order_confirmation"; orderId: string; order: unknown; rationale: string; expiresAt: string };

export type JobAttachment = {
  id: string;
  name: string;
  kind: string;
  size: number;
};

export type AgentMessage = {
  id: string;
  threadId: string;
  text: string;
  attachments?: JobAttachment[];
  status: "working" | "completed" | "failed";
  createdAt: string;
  completedAt?: string;
  blocks: UiBlock[];
  actions: AgentAction[];
  error?: string;
  /** Client-side progress labels while streaming. */
  steps?: string[];
};
