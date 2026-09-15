import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import {
  IconArrowRight,
  IconLinkedin,
  IconMail,
} from "@/components/icons";

export function Hero() {
  const reduce = useReducedMotion();

  const socials = [
    { label: "Email", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, icon: IconMail, external: true },
    {
      label: "LinkedIn",
      href: profile.linkedin || "#contact",
      icon: IconLinkedin,
      external: !!profile.linkedin,
    },
  ];

  return (
    <section id="top" className="relative min-h-[100svh] pt-10 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
      />

      <div className="container-x flex min-h-[calc(100svh-4rem)] items-center py-8 lg:py-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02 }}
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--accent-bright)" }}
          >
            AI Engineer
          </motion.span>

          {/* Name */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-4 text-base font-medium sm:text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            {profile.role.replace(/ · /g, "  ·  ")}
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{ color: "var(--fg-muted)" }}
          >
            {profile.heroIntro.map((line, i) => (
              <span key={i}>
                {line}
                {i < profile.heroIntro.length - 1 && <br />}
              </span>
            ))}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View My Projects
              <IconArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent-bright)]"
                style={{ color: "var(--fg-muted)" }}
              >
                <s.icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
