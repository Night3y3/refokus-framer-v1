import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";

interface Colors {
  addBase: (styles: object) => void;
  theme: (key: string) => object;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: Colors) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
