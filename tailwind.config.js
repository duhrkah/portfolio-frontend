/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0f172a',
        'surface-dark': '#1e293b',
        'text-dark': '#e2e8f0',
        'primary-dark': '#3b82f6',
        'secondary-dark': '#64748b',
      },
    },
  },
  plugins: [],
} 