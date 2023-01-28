/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
    
    screens: {
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440x",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
