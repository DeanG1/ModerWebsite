/** @type {import('tailwindcss').Config} */
export default {
  //That way it will know where to look for tailwind classNames
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

