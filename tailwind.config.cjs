/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const animated = require("tailwindcss-animated")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono Variable", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [animated],
}
