import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/content";
import { IdentityOrbit } from "@/components/IdentityOrbit";
import {
  IconArrowRight,
  IconLinkedin,
  IconMail,
} from "@/components/icons";

export function Hero() {
  const reduce = useReducedMotion();

  const socials = [
    { label: "Email", href: `mailto:${profile.email}`, icon: IconMail },
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
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="status-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--teal)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--teal)]" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]"
            >
              Hi, I&apos;m{" "}
              <span style={{ color: "var(--accent-bright)" }}>{profile.name}</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-3 text-base font-medium sm:text-lg"
              style={{ color: "var(--fg-muted)" }}
            >
              {profile.role.replace(/ · /g, " | ")}
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.11 }}
              className="mt-5 max-w-lg text-sm leading-relaxed sm:text-[15px]"
              style={{ color: "var(--fg-muted)" }}
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary">
                View My Projects
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent-bright)]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — identity orbit: the engineer at the center of the system */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card glow-box overflow-hidden p-4 sm:p-6"
          >
            <IdentityOrbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
