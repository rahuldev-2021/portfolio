import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { IconArrowUpRight } from "@/components/icons";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Order is fully data-driven via each project's `order` field.
  // Reorder any project by editing its `order` value in src/data/content.ts.
  const sorted = useMemo(
    () =>
      [...projects].sort(
        (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
      ),
    []
  );

  const featuredTop = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeader
          number="02"
          title="Featured Projects"
          subtitle="Real solutions. Practical AI — technical case studies with architecture, pipelines, and engineering decisions."
        />

        {/* Top 3 featured — reference layout */}
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredTop.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
          ))}
        </div>

        {/* Remaining projects — revealed when expanded */}
        {showAll && rest.length > 0 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
            ))}
          </div>
        )}

        {/* Toggle — always at the very bottom, after all visible projects */}
        {rest.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent-bright)]"
              style={{ color: "var(--fg-muted)" }}
            >
              {showAll ? "Show Less" : "View All Projects"}
              <IconArrowUpRight
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-[135deg]" : ""}`}
              />
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
