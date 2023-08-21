/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-violet': '#AD02E0',
        'custom-violet-dark': '#740994',
        'custom-header-gray': '#F3F3F3',
      },
      width: {
        'input-width': '500px'
      }
    }
  },
  plugins: []
}
