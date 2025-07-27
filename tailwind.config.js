module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // enabling class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00a6fb',
          dark: '#0072c3'
        },
        success: {
          DEFAULT: '#14b8a6',
          dark: '#0d9488'
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};