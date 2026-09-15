import type { Project } from "@/data/content";
import { Icon, IconArrowUpRight } from "./icons";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="card group relative flex h-full cursor-pointer flex-col overflow-hidden"
    >
      <div className="relative flex flex-1 flex-col p-5">
        {/* Icon + category */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-xl border"
            style={{
              borderColor: "var(--border)",
              background: "var(--accent-soft)",
              color: "var(--accent-bright)",
            }}
          >
            <Icon name={project.icon} className="h-5 w-5" />
          </span>
          <span
            className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
            style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
          >
            {project.category.replace(" / ", " · ")}
          </span>
        </div>

        {/* Title + tagline */}
        <h3 className="mt-4 text-base font-bold leading-snug">
          {project.title}
        </h3>
        <p className="mt-1.5 text-xs font-medium" style={{ color: "var(--fg-muted)" }}>
          {project.tagline}
        </p>

        {/* Top of stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="chip" style={{ color: "var(--fg-subtle)" }}>
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(project);
          }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--fg-muted)" }}
        >
          View Details
          <IconArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
