import type { Config } from "tailwindcss";

/**
 * Design tokens reconciled from Tris_Studio_Design_System_Spec.md and the
 * approved "Tris Studio.dc.html" mockup. The mockup values are treated as the
 * source of truth where the two differ.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: "#F4EFE4", // Paper White — page background
        surface: "#F7F3EA", // Card Surface
        "surface-alt": "#EFE9DD",
        input: "#FAF7F0",
        // Borders / rules
        border: "#DED6C6",
        "border-strong": "#D8D0C0",
        "border-input": "#C9C2B1",
        "border-pill": "#C6C4B4",
        divider: "#C9CBBB",
        track: "#E3DBCB",
        // Accent — themeable via the --accent CSS variable
        accent: "var(--accent)",
        "accent-hover": "#607D6C",
        // Text
        ink: "#201F1B", // primary
        "ink-2": "#504E46",
        "ink-3": "#6C6A61",
        "ink-4": "#8A897F",
        muted: "#9A9384",
      },
      fontFamily: {
        display: [
          "Newsreader",
          "Noto Serif TC",
          "Georgia",
          "serif",
        ],
        sans: ["Noto Sans TC", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        container: "1200px",
        reading: "920px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
