import type { Config } from "tailwindcss";

/**
 * Design tokens from the approved "Tris Studio.dc.html" mockup (dark editorial
 * theme, acid accent). The mockup is the source of truth.
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
        bg: "#0B0B0C", // near-black page background
        surface: "#131311", // raised cards
        "surface-alt": "#18180F",
        input: "#0B0B0C",
        // Borders / rules
        border: "#26261F", // hairline dividers
        "border-strong": "#33332B", // card outlines
        "border-pill": "#3A3A31",
        "border-hover": "#45443B",
        // Accent — themeable via the --accent CSS variable (acid #D8FF47)
        accent: "var(--accent)",
        // Text
        ink: "#F2F1EC", // primary
        "ink-2": "#DCDBD3",
        "ink-3": "#C9C8C0",
        "ink-4": "#9C9B92",
        muted: "#6D6C64",
        faint: "#55554D",
      },
      fontFamily: {
        display: ["Space Grotesk", "Noto Sans TC", "system-ui", "sans-serif"],
        sans: ["Noto Sans TC", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        container: "1440px",
        reading: "980px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.45s ease both",
        marquee: "marquee 26s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
