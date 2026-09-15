# Portfolio — Rahul R

A high-end, production-ready portfolio website for an AI/ML engineer, built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Highlights

- **Premium, original design** — refined dark/light theme, strong typography, subtle motion, and a clean visual hierarchy.
- **Fully responsive** across desktop, tablet, and mobile.
- **Interactive projects** — filterable cards with a detailed modal (problem, approach, capabilities, stack).
- **Accessible** — semantic landmarks, skip link, keyboard-friendly modal (Esc to close), focus states, and `prefers-reduced-motion` support.
- **SEO-friendly** — meta/OG/Twitter tags, semantic HTML, and a descriptive title.
- **Performance-minded** — no heavy icon libraries, CSS-driven effects, and lazy, in-view animations.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build (outputs to dist/)
npm run preview  # preview the production build
```

## Customizing your details

All personal content lives in **`src/data/content.ts`**:

- `profile` — name, headline, summary, email, location, and your **GitHub / LinkedIn / resume** URLs (set to `""` to hide a link).
- `projects` — the project cards. Each has a `links` array if you want to add GitHub/demo URLs.
- `skillGroups`, `focusAreas`, `journey`, `stats` — the rest of the copy.

> The project content is grounded in the actual project folders in this workspace. Update any detail to keep it accurate.

## Structure

```
src/
├── App.tsx                 # Page composition
├── main.tsx                # Entry point
├── index.css               # Design tokens, base styles, utilities
├── data/content.ts         # All portfolio content (edit me)
├── hooks/useTheme.ts       # Dark/light theme with persistence
├── components/             # Navbar, Footer, cards, modal, icons, primitives
└── sections/               # Hero, About, Skills, Projects, Journey, Contact
```
