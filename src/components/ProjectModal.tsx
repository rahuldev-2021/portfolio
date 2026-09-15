import { useEffect } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/content";
import { Icon, IconArrowUpRight, IconClose } from "./icons";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function CaseBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4
        className="text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "var(--fg-subtle)" }}
      >
        {label}
      </h4>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="card relative z-10 flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-b-none sm:rounded-2xl"
            style={{ background: "var(--bg-elev)" }}
          >
            {/* Header */}
            <div
              className={`relative shrink-0 overflow-hidden bg-gradient-to-br ${project.accent} p-6 sm:p-7`}
            >
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl border backdrop-blur-sm"
                    style={{
                      borderColor: "var(--border)",
                      background: "color-mix(in srgb, var(--card) 60%, transparent)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon name={project.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <span
                      className="text-xs font-medium uppercase tracking-[0.14em]"
                      style={{ color: "var(--fg-subtle)" }}
                    >
                      {project.category}
                    </span>
                    <h3
                      id="project-modal-title"
                      className="text-xl font-semibold leading-tight sm:text-2xl"
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-colors hover:text-[var(--accent)]"
                  style={{ borderColor: "var(--border)" }}
                  aria-label="Close"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scrollable case study body */}
            <div className="no-scrollbar flex-1 overflow-y-auto p-6 sm:p-7">
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                {project.tagline}
              </p>

              <div className="mt-6 space-y-7">
                <CaseBlock label="Overview">
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {project.description}
                  </p>
                </CaseBlock>

                <CaseBlock label="Problem">
                  <div
                    className="rounded-xl border p-4"
                    style={{ borderColor: "var(--border)", background: "var(--card)" }}
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {project.problem}
                    </p>
                  </div>
                </CaseBlock>

                <CaseBlock label="Tech stack">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CaseBlock>
              </div>

              {(project.github ||
                project.liveDemo ||
                (project.links && project.links.length > 0)) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t pt-7" style={{ borderColor: "var(--border)" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost !px-4 !py-2 text-sm"
                    >
                      GitHub
                      <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary !px-4 !py-2 text-sm"
                    >
                      Live Demo
                      <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost !px-4 !py-2 text-sm"
                    >
                      {link.label}
                      <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
