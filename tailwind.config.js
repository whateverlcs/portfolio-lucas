/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3A0CA3",
          hover: "#491AB5",
        },

        text: {
          title: {
            light: "#0B132A",
            dark: "#FFFFFF",
          },
          subtitle: {
            light: "#64666D",
            dark: "#8F929C",
          },
          body: {
            light: "#4F5665",
            dark: "#8F929C",
          },
          menu: {
            light: "#3a0ca3",
            dark: "#60a5fa",
          },
        },

        background: {
          light: "#FFFFFF",
          dark: "#0B132A",
        },

        portfolioMain: "#3A0CA3",
        portfolioMainHover: "#491AB5",
        portfolioTitleLight: "#0B132A",
        portfolioTitleDark: "#FFFFFF",
        portfolioSubtitleLight: "#64666D",
        portfolioSubtitleDark: "#8F929C",
        portfolioDescriptionLight: "#4F5665",
        portfolioDescriptionDark: "#8F929C",
        portfolioBackgroundLight: "#FFFFFF",
        portfolioBackgroundDark: "#0B132A",
        portfolioMenuDark: "#60a5fa",
        portfolioMenuLight: "#3a0ca3",
      },

      fontFamily: {
        sans: ["Rubik", "cursive"],
        supermercado: ["Supermercado One", "cursive"],
      },

      backgroundImage: {
        "portfolio-gradient": "linear-gradient(to right, #3A0CA3, #0B132A)",
        "portfolio-gradient-dark":
          "linear-gradient(to right, #3A0CA3, #FFFFFF)",
      },
    },
  },
  plugins: [],
};
