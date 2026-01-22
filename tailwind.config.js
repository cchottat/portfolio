/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pop-purple': '#A855F7',      // Mauve
        'pop-orange': '#FB923C',      // Orange (plus doux pour le fond)
        'pop-raspberry': '#BE123C',   // Rouge Framboise (Cramoisi)
        'cream': '#FFFDF5',           // Crème
      },
      fontFamily: {
        'retro': ['Boogaloo', 'cursive'],
        'body': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}