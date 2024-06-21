const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      
    },
    extend: {
      screens: {
        'mobile':{'max':'540px'},
        'tablet':{'min':'541px','max':'1023px'}
      },
      colors: {
        'accent': '#ff7300',
        'textHead': '#1A1A1A',
        'textBody': '#2A2A2A',
        'body': '#f1f1f1',
        'head': '#ffffff',
        'gray-1': '#E7E7E7',
        'gray-2': '#D4D4D4',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slow-reverse': 'spin-reverse 5s linear infinite',
        'scale-up': 'scale 0.5s ease-out',
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
      },
      keyframes: {
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
        'scale': {
          '0': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};