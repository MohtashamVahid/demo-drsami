/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"]
      },
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        slate: "rgb(var(--color-slate) / <alpha-value>)",
        fog: "rgb(var(--color-fog) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-2": "rgb(var(--color-accent-2) / <alpha-value>)",
        highlight: "rgb(var(--color-highlight) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(10, 30, 46, 0.12)",
        glow: "0 24px 60px rgba(13, 138, 166, 0.25)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
