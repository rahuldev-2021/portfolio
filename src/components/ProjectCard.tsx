import type { Project } from "@/data/content";
import { IconCheck, IconArrowUpRight } from "./icons";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const tag = project.category.replace(" / ", " · ");

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg">
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--accent-bright)" }}>
          {tag}
        </span>
        <h3 className="mt-1.5 text-base font-bold leading-snug">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs" style={{ color: "var(--fg-muted)" }}>
              <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--teal)]" strokeWidth={2.5} />
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-[var(--accent-bright)]"
          style={{ color: "var(--fg-muted)" }}
        >
          View Details
          <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}
