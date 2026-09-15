import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Expertise } from "@/sections/Expertise";
import { Projects } from "@/sections/Projects";
import { JourneyRow } from "@/sections/JourneyRow";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to projects
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <JourneyRow />
        <Projects />
        <Expertise />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
