/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

