module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop-sm": "800px",
        "desktop-md": "1500px",
        "desktop-lg": "2000px",
      },
      animation: {
        spin: "spin 4s linear infinite",
      },
      colors: {
        brand: {
          blue: {
            light: "#404cbf",
            medium: "#0A125C",
            dark: "#0B124E",
          },
          orange: {
            light: "#f09d3e",
            medium: "#F4890B",
          },
        },
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        pacifico: "'Pacifico', cursive",
        satisfy: "'Satisfy', cursive",
      },
    },
  },

  plugins: [],
};
