/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "gray":" #F0F8FF",
        "gray-green":"#3B606A",
        "gray-green-500":"#91A8A7",
        "light-orange":'#FFB06A',
        "dark-orange":"#D99355",
        "light-orange-100":"#FFFBF6",
        "light-orange-500":"#F5E0C5",
        "dark-orange-1000":"#FF7800",
        "dark-red":"#8F4300",
        "sletiy":"#E8E8E8",
        "button-color":"#E1E1E1"
      },
    },
    fontFamily:{
      fontFamily:"'Playfair Display',sarif",
      signature:'Great Vibes',
      lato:"'Lato',sans-sarif",
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/forms'),
  ],
}
