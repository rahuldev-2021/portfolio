import { useState } from "react";
import { profile } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import {
  IconArrowUpRight,
  IconLinkedin,
  IconMail,
} from "@/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, "_blank");
    }
  };

  const links = [
    {
      label: "Email",
      value: profile.email,
      icon: IconMail,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
      action: "copy" as const,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin ? "Visit profile" : "Add your LinkedIn URL",
      icon: IconLinkedin,
      href: profile.linkedin || "#",
      action: "visit" as const,
      disabled: !profile.linkedin,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeader number="06" title="Contact" />

        <div className="card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
              Let&apos;s Build Something{" "}
              <span style={{ color: "var(--accent-bright)" }}>Intelligent.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Open to AI engineering roles and collaborations on LLM applications, RAG at scale,
              and production AI architecture.
            </p>

            <div className="mt-8 space-y-3">
              {links.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-3 rounded-lg border p-3.5"
                  style={{ borderColor: "var(--border)", background: "var(--bg-elev)" }}
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[var(--accent-bright)]"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <link.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>
                      {link.label}
                    </p>
                    <p className="truncate text-sm font-medium">{link.value}</p>
                  </div>
                  {link.action === "copy" ? (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="btn-outline !px-3 !py-1.5 text-xs"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  ) : (
                    <a
                      href={link.disabled ? undefined : link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-outline !px-3 !py-1.5 text-xs ${link.disabled ? "pointer-events-none opacity-40" : ""}`}
                    >
                      Visit
                      <IconArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
