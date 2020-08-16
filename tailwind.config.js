module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    scale: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "90": ".9",
      "95": ".95",
      "100": "1",
      "101": "1.01",
      "105": "1.05",
      "110": "1.1",
      "125": "1.25",
      "150": "1.5",
    },
    fontWeight: {
      light: 300,
      regular: 600,
      bold: 800,
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        text: "var(--text)",
        input: "var(--input)",
        background: "var(--background)",
        elements: "var(--elements)",
        secondary: "var(--secondary)",
      },
    },
  },
  variants: {
    margin: ["responsive", "last", "hover", "focus"],
  },
  plugins: [],
};
