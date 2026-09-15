import { nav, profile } from "@/data/content";
import { IconLinkedin, IconMail } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: IconLinkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: IconMail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, label: "Email" },
  ].filter((s) => s.href);

  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold">{profile.name}</p>
            <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
              {profile.role.replace(/ · /g, " | ")}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs transition-colors hover:text-[var(--accent-bright)]"
                style={{ color: "var(--fg-muted)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-lg border transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-bright)]"
                style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p
          className="mt-6 text-center text-[11px] sm:text-right"
          style={{ color: "var(--fg-subtle)" }}
        >
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
