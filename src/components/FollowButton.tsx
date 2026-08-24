"use client";

import { useState } from "react";

export function FollowButton() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={
        on
          ? "rounded-full border border-line bg-paper-2 px-4 py-2 text-sm font-medium text-ink-2"
          : "offset-btn rounded-full border border-ink bg-navy px-4 py-2 text-sm font-medium text-white"
      }
      aria-pressed={on}
    >
      {on ? "Following" : "Follow"}
    </button>
  );
}
