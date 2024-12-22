/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#032F30',
        teal: '#0A7075',
        aqua: '#0C969C',
        lightBlue: '#6BA3BE',
      },
    },
  },
  plugins: [],
}

