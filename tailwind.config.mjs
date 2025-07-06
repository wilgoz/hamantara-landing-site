/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Deep blue color for water/corporate identity
        primary: '#0F4C81',
        'primary-light': '#3A7CA5',
        'primary-dark': '#062C43',
        // Teal/turquoise for freshness/clean water
        secondary: '#16A085',
        'secondary-light': '#1ABC9C',
        'secondary-dark': '#0E6655',
        // Muted gold / mustard
        accent: '#C79A3D',
        'accent-light': '#D8B94F',
        'accent-dark': '#8F6F20',

        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
