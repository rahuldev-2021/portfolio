/** Subtle hero decoration — abstract data-flow, not decorative clutter */
export function FlowVisual() {
  return (
    <svg
      viewBox="0 0 420 280"
      className="h-full w-full max-w-md opacity-90"
      aria-hidden
      fill="none"
    >
      <defs>
        <linearGradient id="flow-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {/* grid dots */}
      {[...Array(6)].map((_, row) =>
        [...Array(8)].map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={40 + col * 48}
            cy={30 + row * 42}
            r="1"
            fill="var(--grid-line)"
          />
        ))
      )}
      {/* nodes */}
      <rect x="24" y="48" width="88" height="36" rx="8" stroke="url(#flow-accent)" strokeWidth="1.2" />
      <text x="68" y="70" textAnchor="middle" fill="var(--fg-subtle)" fontSize="10" fontFamily="Inter,sans-serif">
        Data
      </text>
      <rect x="166" y="48" width="88" height="36" rx="8" stroke="url(#flow-accent)" strokeWidth="1.2" />
      <text x="210" y="70" textAnchor="middle" fill="var(--fg-subtle)" fontSize="10" fontFamily="Inter,sans-serif">
        Retrieval
      </text>
      <rect x="308" y="48" width="88" height="36" rx="8" stroke="url(#flow-accent)" strokeWidth="1.2" />
      <text x="352" y="70" textAnchor="middle" fill="var(--fg-subtle)" fontSize="10" fontFamily="Inter,sans-serif">
        LLM
      </text>
      <path d="M112 66 H166" stroke="url(#flow-accent)" strokeWidth="1" markerEnd="url(#arrow)" />
      <path d="M254 66 H308" stroke="url(#flow-accent)" strokeWidth="1" />
      <rect x="95" y="130" width="100" height="36" rx="8" stroke="var(--border-strong)" strokeWidth="1" />
      <text x="145" y="152" textAnchor="middle" fill="var(--fg-subtle)" fontSize="10" fontFamily="Inter,sans-serif">
        Agents
      </text>
      <rect x="225" y="130" width="100" height="36" rx="8" stroke="var(--border-strong)" strokeWidth="1" />
      <text x="275" y="152" textAnchor="middle" fill="var(--fg-subtle)" fontSize="10" fontFamily="Inter,sans-serif">
        Tools / MCP
      </text>
      <path d="M352 84 L352 110 L275 110 L275 130" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="4 3" />
      <path d="M210 84 L210 110 L145 110 L145 130" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="130" y="210" width="160" height="36" rx="8" stroke="url(#flow-accent)" strokeWidth="1.2" fill="var(--accent-soft)" fillOpacity="0.15" />
      <text x="210" y="232" textAnchor="middle" fill="var(--accent)" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">
        Production API
      </text>
      <path d="M145 166 L180 210" stroke="var(--border-strong)" strokeWidth="1" />
      <path d="M275 166 L240 210" stroke="var(--border-strong)" strokeWidth="1" />
    </svg>
  );
}
