/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        canvas: "var(--base)",
        sidebar: "var(--sidebar)",
        surface: "var(--surface)",
        raised: "var(--surface-raised)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        faint: "var(--text-faint)",
        ink: "var(--ink)",
        "ink-contrast": "var(--ink-contrast)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          soft: "var(--primary-soft)",
        },
        brand: {
          DEFAULT: "var(--brand)",
          hover: "var(--brand-hover)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
      },
      boxShadow: {
        soft: "0 1px 2px var(--shadow)",
        lift: "0 4px 14px -4px var(--shadow)",
      },
    },
  },
  plugins: [],
};
