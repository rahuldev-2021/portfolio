import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

type HeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  sectionNumber?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  sectionNumber,
}: HeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`mb-12 sm:mb-16 max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <Reveal>
        <span className="eyebrow">
          {sectionNumber && (
            <span
              className="mr-1 font-mono text-[10px] opacity-70"
              aria-hidden
            >
              {sectionNumber}
            </span>
          )}
          <span className="h-px w-6 bg-current opacity-60" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="h-display mt-4 text-3xl sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
