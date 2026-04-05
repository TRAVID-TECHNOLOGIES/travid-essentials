import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "#0A0E1A",
        cloud: "#F5F7FB",
        steel: "#9AA6BF",
        aurora: "#5B6CFF",
        ember: "#FF9B6A",
        mint: "#6EE7C6",
        deep: "#0F1730",
        cyan: "#55D6FF",
        haze: "#E7EBF3",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(124, 140, 255, 0.25)",
        soft: "0 20px 50px rgba(11, 13, 18, 0.15)",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 15% 15%, rgba(91,108,255,0.35), transparent 55%), radial-gradient(circle at 85% 10%, rgba(85,214,255,0.18), transparent 45%), linear-gradient(180deg, #0A0E1A 0%, #121A2B 60%, #0A0E1A 100%)",
        "hero-light":
          "radial-gradient(circle at 10% 20%, rgba(91,108,255,0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(85,214,255,0.16), transparent 45%), linear-gradient(180deg, #F7F9FD 0%, #EEF2F8 50%, #F7F9FD 100%)",
        "section-gradient":
          "radial-gradient(circle at 20% 20%, rgba(91,108,255,0.14), transparent 55%), radial-gradient(circle at 85% 0%, rgba(110,231,198,0.12), transparent 45%)",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
