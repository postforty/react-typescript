module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}
