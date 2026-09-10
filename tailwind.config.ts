import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        canvas: "#FAF9F5",
        surface: {
          DEFAULT: "#F4F2EC",
          hover: "#EBE8E0",
          card: "#FFFFFF",
          dark: "#121212",
          "dark-card": "#181818",
          "dark-border": "#282826",
        },
        charcoal: {
          DEFAULT: "#121212",
          surface: "#1A1A1A",
          elevated: "#242422",
          border: "#2E2E2B",
          muted: "#7A7A75",
        },
        border: {
          DEFAULT: "#E8E6DE",
          strong: "#DDD9CE",
          dark: "#2A2A28",
        },
        primary: {
          DEFAULT: "#0F0F0E",
          hover: "#222220",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#454541",
          foreground: "#0F0F0E",
        },
        muted: {
          DEFAULT: "#82827D",
          light: "#B0B0AA",
        },
        gold: {
          50: "#FDFBF6",
          100: "#F9F4E7",
          200: "#F2E4C4",
          300: "#E8D298",
          400: "#DDBE6C",
          500: "#C5A059", // Official logo metallic gold tone
          600: "#B08A42",
          700: "#8E6D2E",
          800: "#6D5220",
          900: "#4E3A15",
          DEFAULT: "#C5A059",
          hover: "#B08A42",
          border: "rgba(197, 160, 89, 0.35)",
          glow: "rgba(197, 160, 89, 0.20)",
        },
      },
      fontFamily: {
        sans: [
          "'SF Pro Display'",
          "'SF Pro Text'",
          "'SF Pro'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Inter'",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "'SF Pro Display'",
          "'SF Pro'",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        text: [
          "'SF Pro Text'",
          "'SF Pro'",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        compact: [
          "'SF Compact'",
          "'SF Pro'",
          "-apple-system",
          "sans-serif",
        ],
        serif: [
          "'SF Pro Display'",
          "'SF Pro'",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "'SF Mono'",
          "'JetBrains Mono'",
          "ui-monospace",
          "monospace",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
        card: "0 4px 20px -2px rgba(15,15,14,0.05), 0 2px 6px -1px rgba(15,15,14,0.02)",
        "card-hover": "0 14px 36px -4px rgba(15,15,14,0.09), 0 6px 16px -2px rgba(15,15,14,0.04)",
        "gold-subtle": "0 4px 20px -2px rgba(197, 160, 89, 0.18)",
        "gold-glow": "0 0 35px -5px rgba(197, 160, 89, 0.35)",
        floating: "0 24px 50px -12px rgba(0,0,0,0.18), 0 10px 20px -6px rgba(0,0,0,0.06)",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        arrowFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        "pulse-gold": "pulseGold 3.5s ease-in-out infinite",
        "arrow-float": "arrowFloat 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
