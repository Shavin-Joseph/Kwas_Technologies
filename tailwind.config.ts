import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        panel: "var(--panel)",
        panel2: "var(--panel2)",
        line: "var(--line)",
        amber: "#E0A63E",
        amberDim: "#8C6A26",
        signal: "#4FE3B0",
        signalDim: "#2A7A5D",
        fg: "var(--fg)",
        muted: "var(--muted)",
        faint: "var(--faint)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
      boxShadow: {
        glowAmber: "0 0 0 1px rgba(224,166,62,0.25), 0 8px 30px -8px rgba(224,166,62,0.25)",
        glowSignal: "0 0 0 1px rgba(79,227,176,0.25), 0 8px 30px -8px rgba(79,227,176,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
