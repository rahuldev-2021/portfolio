import { skillGroups } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@/components/icons";

export function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container-x">
        <SectionHeader
          number="05"
          title="Expertise"
          subtitle="Technical capabilities grouped by domain."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="card p-4"
            >
              <div className="mb-2.5 flex items-center gap-2">
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[var(--accent-bright)]"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <Icon name={group.icon} className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-[13px] font-semibold">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
