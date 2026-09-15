import type { Project } from "@/data/content";

/** CSS mock UI previews — no stock images */
export function ProjectPreview({ project }: { project: Project }) {
  const slug = project.slug;

  if (slug === "lucius-ai") {
    return (
      <div className="flex h-full flex-col gap-2 p-3" style={{ background: "#0a0f1a" }}>
        <div className="flex gap-2">
          <div className="h-2 w-16 rounded bg-[var(--accent-soft)]" />
          <div className="h-2 w-10 rounded bg-[var(--border)]" />
        </div>
        <div className="flex-1 space-y-2 overflow-hidden rounded-lg border p-2" style={{ borderColor: "var(--border)" }}>
          <div className="ml-auto max-w-[80%] rounded-lg px-2 py-1.5 text-[9px]" style={{ background: "var(--accent-soft)", color: "var(--accent-bright)" }}>
            Summarize section 3 of the uploaded report
          </div>
          <div className="max-w-[85%] rounded-lg px-2 py-1.5 text-[9px]" style={{ background: "var(--card)", color: "var(--fg-muted)" }}>
            Based on PageIndex retrieval, section 3 covers…
          </div>
        </div>
      </div>
    );
  }

  if (slug === "toolingu-ai" || slug === "noc-troubleshooting") {
    return (
      <div className="flex h-full items-center justify-center p-4" style={{ background: "#0a0f1a" }}>
        <svg viewBox="0 0 200 120" className="h-full w-full max-h-28" aria-hidden>
          <rect x="10" y="50" width="40" height="20" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1" />
          <text x="30" y="63" textAnchor="middle" fill="var(--fg-subtle)" fontSize="7">Input</text>
          <path d="M50 60 H70" stroke="var(--accent)" strokeWidth="1" markerEnd="url(#arr)" />
          <rect x="70" y="45" width="50" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="95" y="63" textAnchor="middle" fill="var(--accent-bright)" fontSize="8" fontWeight="600">Agent</text>
          <path d="M120 60 H140" stroke="var(--accent)" strokeWidth="1" />
          <rect x="140" y="50" width="50" height="20" rx="4" fill="var(--card)" stroke="var(--border-strong)" strokeWidth="1" />
          <text x="165" y="63" textAnchor="middle" fill="var(--fg-subtle)" fontSize="7">Output</text>
          <rect x="70" y="10" width="50" height="20" rx="4" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
          <path d="M95 30 L95 45" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }

  if (slug === "yolo-realtime-vision") {
    return (
      <div className="grid h-full grid-cols-3 gap-1.5 p-3" style={{ background: "#0a0f1a" }}>
        {["Gear", "Bolt", "Panel", "Motor", "Valve", "Switch"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded border py-2"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <div className="h-5 w-5 rounded border-2 border-[var(--accent)] opacity-70" />
            <span className="mt-1 text-[8px]" style={{ color: "var(--fg-subtle)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "model-deployments") {
    return (
      <div className="flex h-full flex-col justify-center gap-2 p-4" style={{ background: "#0a0f1a" }}>
        {["vLLM", "Ollama", "NIM"].map((b) => (
          <div key={b} className="flex items-center gap-2 rounded border px-2 py-1.5" style={{ borderColor: "var(--border)" }}>
            <div className="h-2 w-2 rounded-full bg-[var(--teal)]" />
            <span className="text-[10px] font-medium" style={{ color: "var(--fg-muted)" }}>
              {b}
            </span>
            <span className="ml-auto text-[9px]" style={{ color: "var(--fg-subtle)" }}>
              /api/{b.toLowerCase()}/*
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Default abstract preview
  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        background: `linear-gradient(135deg, var(--accent-soft), transparent)`,
      }}
    >
      <div
        className="h-16 w-16 rounded-xl border-2 glow-box"
        style={{ borderColor: "var(--accent)", background: "var(--card)" }}
      />
    </div>
  );
}
