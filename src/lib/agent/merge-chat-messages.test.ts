import assert from "node:assert/strict";
import test from "node:test";

import { mergeChatMessages } from "@/lib/agent/merge-chat-messages";
import type { AgentMessage } from "@/lib/agent/types";

const base = (patch: Partial<AgentMessage> & Pick<AgentMessage, "id">): AgentMessage => ({
  threadId: "t1",
  text: "hi",
  status: "completed",
  createdAt: "2026-01-01T00:00:00.000Z",
  blocks: [],
  actions: [],
  ...patch,
});

test("merge keeps optimistic local turn when server list lags", () => {
  const local = base({ id: "local-1", status: "working", steps: ["Sending…"] });
  const server = [base({ id: "old", text: "prior" })];
  const merged = mergeChatMessages([local], server);
  assert.equal(merged.length, 2);
  assert.ok(merged.some((m) => m.id === "local-1"));
});

test("merge drops local when server has same clientSendId", () => {
  const local = base({ id: "local-1", status: "working", clientSendId: "c1", steps: ["Sending…"] });
  const server = [base({ id: "job-1", status: "working", clientSendId: "c1", steps: ["Thinking…"] })];
  const merged = mergeChatMessages([local], server);
  assert.deepEqual(
    merged.map((m) => m.id),
    ["job-1"],
  );
});

test("merge drops failed local id when server echoes clientSendId", () => {
  const local = base({
    id: "local-1",
    status: "failed",
    error: "Send timed out.",
    steps: [],
  });
  const server = [base({ id: "job-1", status: "working", clientSendId: "local-1", steps: ["Thinking…"] })];
  const merged = mergeChatMessages([local], server);
  assert.deepEqual(
    merged.map((m) => m.id),
    ["job-1"],
  );
});

test("merge drops stale failed local without server match", () => {
  const local = base({ id: "local-9", status: "failed", error: "Send timed out.", steps: [] });
  const server = [base({ id: "older", text: "prior" })];
  const merged = mergeChatMessages([local], server);
  assert.deepEqual(
    merged.map((m) => m.id),
    ["older"],
  );
});