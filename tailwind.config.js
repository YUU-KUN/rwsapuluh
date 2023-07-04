/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/dist/plugin.cjs")],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#61B15A',
        'primary-2': '#C0E0BD',
        'primary-5': '##61B15A',
        'primary-7': '#3A6A36',

        'orange': '#FFB100',
        'yellow': '#FFEA20',
        'black': '#1F1F1F',
        'bg-white': '#F2F2F2'
      },
      
      fontSize: {
        '10': ['10px', {
          lineHeight: '12px',
        }],
        '12': ['12px', {
          lineHeight: '14.4px',
        }],
        '14': ['14px', {
          lineHeight: '19.1px',
        }],
        '16': ['16px', {
          lineHeight: '19.2px',
        }],
        '18': ['18px', {
          lineHeight: '24.55px',
        }],
        '20': ['20px', {
          lineHeight: '24.55px',
        }],
        '24': ['24px', {
          lineHeight: '39.5px',
        }],
        '32': ['32px', {
          lineHeight: '38.4px',
        }],
        '36': ['36px', {
          lineHeight: '49.1px',
        }],
        '40': ['40px', {
          lineHeight: '53.5px',
        }],
        '48': ['48px', {
          lineHeight: '65px',
        }],
        '51': ['51px', {
          lineHeight: '45.74px',
        }],
        '63': ['63px', {
          lineHeight: '56px',
        }],

        'h-1': ['40px', {
          lineHeight: '28px',
        }],
        'h-2': ['24px', {
          lineHeight: '28px',
        }],
        'h-3': ['20px', {
          lineHeight: '24px',
        }],
        'h-4': ['16px', {
          lineHeight: '20px',
        }],
        'h-5': ['14px', {
          lineHeight: '18px',
        }],
      },

      screens: {
        'phone': '460px',
        // => @media (min-width: 460px) { ... }
  
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
}

