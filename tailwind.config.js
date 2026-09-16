/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040d1a',
          900: '#08172e',
          850: '#0c203f',
          800: '#112a52',
          700: '#18386c',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0ea5e9',
          600: '#0284c7',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 5px 15px -5px rgba(0, 0, 0, 0.03)',
        'card': '0 12px 35px -8px rgba(12, 32, 63, 0.08), 0 4px 12px -2px rgba(12, 32, 63, 0.03)',
        'card-hover': '0 25px 45px -10px rgba(12, 32, 63, 0.15), 0 10px 20px -5px rgba(12, 32, 63, 0.06)',
        'glow': '0 0 25px rgba(217, 119, 6, 0.25)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
