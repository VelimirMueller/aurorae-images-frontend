module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px #2dd4bf',
      }
    },
  },
  experimental: {
    optimizeUniversalDefaults: false
  },
  plugins: [],
}

