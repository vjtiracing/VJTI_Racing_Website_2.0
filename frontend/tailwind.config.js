module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        'fixcont': {'min': '630px', 'max': '1024px'},
        'fixfoot': {'min': '1181px'},
      },
    },
  },
  plugins: [],
}
