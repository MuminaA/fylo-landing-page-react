/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Blue": "hsl(243, 87%, 12%)",
        "Desaturated-Blue": "hsl(238, 22%, 44%)",
        "Bright-Blue": "hsl(224, 93%, 58%)",
        "Moderate-Cyan": "hsl(170, 45%, 43%)",
        "Light-Grayish-Blue": "hsl(240, 75%, 98%)",
        "Light-Gray": "hsl(0, 0%, 75%)",
        'Button-Overlay': 'hsl(224, 92%, 65%)',
        'Bright-Cyan': 'hsl(170, 47%, 51%)'
      },
      lineHeight: {
        '14': '4rem'
      },
      backgroundImage: {
        'desktop': "url('./assets/bg-curve-desktop.svg')",
        'mobile': "url('../assets/bg-curve-mobile.svg')"
      }
    },
    fontFamily: {
      headings: ["Raleway"],
      body: ["'Open Sans'"],
    },
    fontSize: {
      'sm': ".7rem",
      'base': '1rem',
      '3xl': '1.5rem',
      '4xl': "2.7rem"
    },
    screens: {
      'mobile': '375px',
      'desktop': '1024px'
    },
  },
  plugins: [],
};
