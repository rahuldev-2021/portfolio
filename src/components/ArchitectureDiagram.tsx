type ArchitectureDiagramProps = {
  diagram: string;
  label?: string;
};

export function ArchitectureDiagram({ diagram, label = "Architecture" }: ArchitectureDiagramProps) {
  return (
    <div
      className="overflow-x-auto rounded-xl border p-4 sm:p-5"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <p
        className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "var(--fg-subtle)" }}
      >
        {label}
      </p>
      <pre
        className="font-mono text-[11px] leading-relaxed sm:text-xs"
        style={{ color: "var(--fg-muted)" }}
        aria-label={`${label} diagram`}
      >
        {diagram.trim()}
      </pre>
    </div>
  );
}
