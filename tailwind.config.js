module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:{
            dark: "#0B124E",
            medium: "#0A125C"
          },
          orange: {
            medium : "#F4890B"
          }
        }
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        pacifico: "'Pacifico', cursive",
        satisfy: "'Satisfy', cursive",
      }
    }
  },
    


  plugins: [],
}
