/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      lg: '28px',
      md: '24px',
      m: '21px',
      sm: '18px',
      classic: '16px',
      s: '14px',
    },
    lineHeight: {
      lg: '34px',
      md: '30px',
      m: '27px',
      sm: '24px',
      classic: '160%',
      s: '120%',
    },
    extend: {
      spacing: {},
      fontSize: {},
      lineHeight: {},
      backgroundColor: {},
      colors: {
        red: '#a4271f',
        hoverRed: '#db291d',
        white: '#ffffff',
        black: '#000',
        darkBlue: '#020c2f',
        blue: '#190e6f',
        lightBlue: '#0c0c9e',
        greenInput: '#00ff79',
        grey: '#373737',
        darkGreen: '#1d8f05',
      },
    },
  },
  plugins: [],
};
