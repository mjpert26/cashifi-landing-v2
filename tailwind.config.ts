import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        secondary: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        accent: {
          DEFAULT: "#FB923C",
          light: "#FDBA74",
          dark: "#F97316",
        },
        dark: {
          DEFAULT: "#09090B",
          lighter: "#18181B",
          card: "#111116",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-plus-jakarta)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(251, 146, 60, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.25)",
        "glow-green": "0 0 40px rgba(16, 185, 129, 0.25)",
        "glow-orange": "0 0 40px rgba(251, 146, 60, 0.25)",
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;