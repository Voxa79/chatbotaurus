/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
        // Palette "Tournesol Souverain" - Système Neuro-Optimisé
        sovereign: {
          50: '#F0F9FF',
          100: '#E0F2FE', 
          200: '#BAE6FD',
          500: '#034E64', // Couleur principale
          600: '#024A5F',
          700: '#02455A',
          800: '#02404F',
          900: '#023B44',
          DEFAULT: '#034E64'
        },
        action: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          500: '#F06905', // Orange principal
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          DEFAULT: '#F06905'
        },
        success: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          500: '#FEB909', // Jaune principal
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
          DEFAULT: '#FEB909'
        },
        growth: {
          50: '#F7FEE7',
          100: '#ECFCCB',
          200: '#D9F99D',
          500: '#638D13', // Vert principal
          600: '#65A30D',
          700: '#4D7C0F',
          800: '#365314',
          900: '#1A2E05',
          DEFAULT: '#638D13'
        },
        premium: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#0A3226', // Vert foncé principal
          600: '#16A34A',
          700: '#15803D',
          800: '#0A3226',
          900: '#052E16',
          DEFAULT: '#0A3226'
        },
        // Legacy custom colors (à migrer progressivement)
        'custom-dark': '#111827',
        'custom-darker': '#1e2836',
        'custom-gray': {
          600: '#95979a',
          400: '#babcc1'
        }
      }
    },
  },
  plugins: [],
}