import type { ReactNode } from "react";

type SectionHeaderProps = {
  number: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function SectionHeader({ number, title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="section-num">{number}</p>
        <h2 className="section-title mt-1">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
