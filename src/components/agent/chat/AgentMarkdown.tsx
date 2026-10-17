"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const pe = {
  text: "text-[var(--pe-text)]",
  text2: "text-[var(--pe-text-secondary)]",
  border: "border-[var(--pe-border)]",
  muted: "bg-[var(--pe-surface-muted)]",
};

export function AgentMarkdown({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h3 className={`mt-5 mb-2 text-base font-semibold first:mt-0 ${pe.text}`}>{children}</h3>,
        h2: ({ children }) => <h3 className={`mt-5 mb-2 text-base font-semibold first:mt-0 ${pe.text}`}>{children}</h3>,
        h3: ({ children }) => <h4 className={`mt-4 mb-1.5 text-sm font-semibold first:mt-0 ${pe.text}`}>{children}</h4>,
        p: ({ children }) => <p className={`my-2.5 leading-7 first:mt-0 last:mb-0 ${pe.text}`}>{children}</p>,
        ul: ({ children }) => (
          <ul className={`my-2.5 ml-5 list-disc space-y-1 ${pe.text2}`}>{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className={`my-2.5 ml-5 list-decimal space-y-1 ${pe.text2}`}>{children}</ol>
        ),
        li: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
        a: ({ children, href }) => (
          <a href={href} target="_blank" rel="noreferrer" className="font-medium text-[var(--pe-accent)] underline-offset-4 hover:underline">
            {children}
          </a>
        ),
        strong: ({ children }) => <strong className={`font-semibold ${pe.text}`}>{children}</strong>,
        blockquote: ({ children }) => (
          <blockquote className={`my-3 border-l-2 ${pe.border} pl-3 ${pe.text2}`}>{children}</blockquote>
        ),
        pre: ({ children }) => (
          <pre className={`my-3 overflow-x-auto rounded-lg border ${pe.border} ${pe.muted} p-3 font-mono text-[13px] leading-relaxed`}>
            {children}
          </pre>
        ),
        code: ({ className, children }) =>
          className ? (
            <code className={className}>{children}</code>
          ) : (
            <code className={`rounded-md ${pe.muted} px-1.5 py-0.5 font-mono text-[0.85em]`}>{children}</code>
          ),
        table: ({ children }) => (
          <div className={`my-3 overflow-x-auto rounded-lg border ${pe.border}`}>
            <table className="w-full text-sm">{children}</table>
          </div>
        ),
        th: ({ children }) => <th className={`border-b ${pe.border} px-3 py-2 text-left font-medium ${pe.text2}`}>{children}</th>,
        td: ({ children }) => <td className={`border-t ${pe.border} px-3 py-2`}>{children}</td>,
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
