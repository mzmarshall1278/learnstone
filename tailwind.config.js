/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        "green": '#374F37',
        "darkGreen": "#21463C",
        "lemonGreen": "#A2FF48",
        "seaGreen": "#3a523a",
        "beige-0": "#FCFAEF",
        "beige-1": '#F4EED3',
        "beige-2": "#DBCCB1",
        "orange": "#FF5F45",
        "darkBlue": "#00140F",
        "light-gray": "#B4B8B7"
      },
      fontFamily: {
        headlines: ['Headlines', 'sans-serif'], // Add the Google Font
      },
    },
  },
  plugins: [],
}
