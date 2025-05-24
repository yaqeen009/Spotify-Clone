import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors:{
        primary:{
          "100": "#000",
          "200": "#383641",
          "300": "#151515",
        },
        secondary:{
          "100": "#FFF",
          "200": "#ffffff80"
        },
        "accent":"#87FF72"
      }, 
      fontFamily:{
        open_sans:['Open San','sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config