import { about, aboutTraits, profile } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Icon } from "@/components/icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeader number="01" title="About Me" />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — narrative + traits */}
          <div>
            <h3 className="text-xl font-bold leading-snug sm:text-2xl">
              {about.headline}
            </h3>
            <p className="mt-4 text-sm leading-relaxed sm:text-[15px]" style={{ color: "var(--fg-muted)" }}>
              {about.who}
            </p>
            <p className="mt-3 text-sm leading-relaxed sm:text-[15px]" style={{ color: "var(--fg-muted)" }}>
              {about.specialize}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {aboutTraits.map((trait) => (
                <div
                  key={trait.title}
                  className="card p-4"
                >
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg text-[var(--accent-bright)]"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <Icon name={trait.icon} className="h-4 w-4" />
                  </span>
                  <h4 className="mt-3 text-sm font-semibold">{trait.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {trait.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div
              className="card relative aspect-[3/4] overflow-hidden"
              style={{ background: "var(--bg-elev)" }}
            >
              {profile.photo ? (
                <>
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="photo-overlay" aria-hidden>
                    <div className="photo-overlay-inner">
                      <span className="photo-overlay-ai">AI,</span>
                      <span className="photo-overlay-engineered">Engineered</span>
                      <span className="photo-overlay-line" />
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-3"
                  style={{ background: "linear-gradient(160deg, var(--card), var(--bg-elev))" }}
                >
                  <div
                    className="grid h-24 w-24 place-items-center rounded-2xl text-3xl font-bold"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent-bright)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {initials(profile.name)}
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--fg-subtle)" }}>
                    {profile.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
