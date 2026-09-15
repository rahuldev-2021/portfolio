import { useState } from "react";
import { profile } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";
import {
  IconArrowUpRight,
  IconLinkedin,
  IconMail,
} from "@/components/icons";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${data.get("name") || "your site"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const links = [
    {
      label: "Email",
      value: profile.email,
      icon: IconMail,
      href: `mailto:${profile.email}`,
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
        <SectionHeader number="07" title="Contact" />

        <div className="card overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left */}
            <div>
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

            {/* Right — form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or role…"
                  className="input-field resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
                <IconArrowUpRight className="h-4 w-4" />
              </button>
              {sent && (
                <p className="text-center text-sm" style={{ color: "var(--teal)" }}>
                  Thanks — your email client should have opened.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
