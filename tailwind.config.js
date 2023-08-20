/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-violet': '#AD02E0',
        'custom-violet-dark': '#740994'
      },
    }
  },
  plugins: []
}
