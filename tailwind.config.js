/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-blue": "#03178c",
        "c-white": "#e9ecf2",
      },
      fontFamily: {
        KumbhSans: ["Kumbh Sans", "sans-serif"],
        Roboto: ['Roboto',"sans-serif" ],
      },
    },
  },
  plugins: [],
};
