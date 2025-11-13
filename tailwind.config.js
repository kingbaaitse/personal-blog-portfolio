/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brutalist: {
          black: '#000000',
          white: '#ffffff',
          gray: '#666666',
          accent: '#ff6b35', // Orange accent
          secondary: '#f7f7f7', // Light gray
          warning: '#ff6b35', // Orange
          success: '#4ecdc4', // Teal
          danger: '#ff4757', // Red
        },
      },
      boxShadow: {
        'brutalist-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-xl': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-2xl': '16px 16px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-hover': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
        'brutalist-active': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
