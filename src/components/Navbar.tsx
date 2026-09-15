import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, profile } from "@/data/content";
import { IconClose, IconLinkedin, IconMail, IconMenu, IconMoon, IconSun } from "./icons";
import type { Theme } from "@/hooks/useTheme";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 glass transition-all duration-300 ${
        scrolled ? "border-b shadow-sm" : ""
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <nav className="container-x flex h-14 items-center justify-between gap-4 lg:h-16">
        {/* Logo */}
        <a href="#top" className="shrink-0 text-sm font-bold tracking-tight lg:text-base">
          {profile.firstName}
        </a>

        {/* Center nav — desktop */}
        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link rounded-md px-3 py-2">
              {item.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="grid h-9 w-9 place-items-center rounded-lg border transition-colors hover:text-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <IconSun className="h-[17px] w-[17px]" />
            ) : (
              <IconMoon className="h-[17px] w-[17px]" />
            )}
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="btn-outline hidden !px-3 !py-2 sm:inline-flex"
            aria-label="Email"
          >
            <IconMail className="h-4 w-4" />
            <span className="hidden md:inline">Email</span>
          </a>

          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-outline hidden !px-3 !py-2 sm:inline-flex"
              aria-label="LinkedIn"
            >
              <IconLinkedin className="h-4 w-4" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
          ) : (
            <a
              href="#contact"
              className="btn-outline hidden !px-3 !py-2 sm:inline-flex"
              aria-label="LinkedIn"
            >
              <IconLinkedin className="h-4 w-4" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
          )}

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border lg:hidden"
            style={{ borderColor: "var(--border)" }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t lg:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-[var(--accent-soft)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
