/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      color: {
        body: 'hsl(47, 88%, 63%)'
      },
      fontSize: {
        body: '1rem'
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"]   
       },
      fontWeight: {
        'extra-bold': '800'
      }
    }
  },
  plugins: [],
}

