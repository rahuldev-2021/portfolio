import { experience, certifications } from "@/data/content";
import { Icon } from "@/components/icons";

function ColumnHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="section-num">{number}</p>
      <h3 className="section-title mt-1 text-xl">{title}</h3>
    </div>
  );
}

export function JourneyRow() {
  return (
    <section className="section !py-12 sm:!py-16">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Experience */}
          <div id="experience" className="scroll-mt-20">
            <ColumnHeader number="04" title="Experience" />
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.company}>
                  {/* Company header */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-sm font-bold">{item.company}</h4>
                    <span className="shrink-0 text-[11px] font-medium" style={{ color: "var(--accent-bright)" }}>
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--fg-subtle)" }}>
                    {item.location}
                  </p>

                  {/* Roles nested under the company */}
                  <div className="relative mt-4 space-y-5 pl-5">
                    <div
                      className="absolute left-[5px] top-1.5 bottom-1.5 w-px"
                      style={{ background: "var(--border-strong)" }}
                      aria-hidden
                    />
                    {item.roles.map((role, i) => (
                      <div key={role.title} className="relative">
                        <span
                          className="absolute -left-5 top-1 h-2.5 w-2.5 rounded-full border-2"
                          style={{
                            borderColor: "var(--accent)",
                            background: i === 0 ? "var(--accent)" : "var(--card)",
                          }}
                        />
                        <div className="flex items-baseline justify-between gap-3">
                          <h5 className="text-[13px] font-semibold">{role.title}</h5>
                          <span className="shrink-0 text-[11px]" style={{ color: "var(--fg-subtle)" }}>
                            {role.period}
                          </span>
                        </div>
                        <ul className="mt-1.5 space-y-1">
                          {role.points.map((pt) => (
                            <li
                              key={pt}
                              className="text-xs leading-relaxed"
                              style={{ color: "var(--fg-muted)" }}
                            >
                              · {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications" className="scroll-mt-20">
            <ColumnHeader number="05" title="Certifications" />
            <div className="space-y-3">
              {certifications.map((cert) => (
                <article
                  key={cert.title}
                  className="group card relative overflow-hidden p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  {/* Accent edge that lights up on hover */}
                  <span
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                    style={{ background: "linear-gradient(180deg, var(--accent-bright), var(--teal))" }}
                    aria-hidden
                  />
                  {/* Soft corner glow */}
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "var(--glow)" }}
                    aria-hidden
                  />

                  <div className="relative flex items-start gap-3.5">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[var(--accent-bright)] ring-1 ring-inset ring-[var(--border-strong)]"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <Icon name={cert.icon} className="h-[18px] w-[18px]" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-[13px] font-semibold leading-snug">{cert.title}</h4>
                        {cert.date && (
                          <span
                            className="shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums"
                            style={{ background: "var(--accent-soft)", color: "var(--accent-bright)" }}
                          >
                            {cert.date}
                          </span>
                        )}
                      </div>

                      <p className="mt-0.5 text-[11px] font-medium" style={{ color: "var(--fg-muted)" }}>
                        {cert.issuer}
                      </p>

                      {/* Credential + level */}
                      {(cert.credential || cert.level) && (
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10.5px]" style={{ color: "var(--fg-subtle)" }}>
                          {cert.level && (
                            <span className="font-semibold uppercase tracking-wide" style={{ color: "var(--fg-muted)" }}>
                              {cert.level}
                            </span>
                          )}
                          {cert.level && cert.credential && <span aria-hidden>·</span>}
                          {cert.credential && (
                            <span className="font-mono tracking-tight">{cert.credential}</span>
                          )}
                        </p>
                      )}

                      {/* Skills / technology */}
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border px-2 py-0.5 text-[10px] font-medium"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--fg-muted)",
                              background: "var(--bg-elev)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
