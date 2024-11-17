/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          mdl: '2rem',
          lgl: '3rem',
        },
      },
      fontSize: {
        medium: ['20px', '30px'],
      },
      boxShadow: {
        sidebar: '0px -14px 51.7px 8px #0000001A',
        video: '0px 4px 12.3px 0px rgba(1, 0, 54, 0.08)',
      },
      colors: {
        greenMain: '#10B0C1',
        green: '#B3D9E2',
        greenLight: '#D7F0F6',
        blueLight: '#E9F7FF',
        blueLighter: '#F1FCFF',
        grayLight: '#F5F5F5',
        gray: '#F1F1F1',
        grayMedium: '#D9D9D9',
        grayDark: '#939393',
        grayBlueLight: '#f7f8fc',
        purple: '#8A22A0',
        red: '#FF3D3D',
        black: '#010036',
      },
      backgroundImage: {
        blueLinerGradient:
          'linear-gradient(91.44deg, #EFFAFC 0.15%, #E9F7FF 43.42%, #ACDDF9 98.36%)',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xll: '1400px',
        xxl: '1536px',
      },
      fontWeight: {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        Regular: 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
      },
      borderRadius: {
        xl: '10px',
      },
      gridTemplateColumns: {
        'fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      keyframes: {
        wiggle: {
          '5%': {
            transform: 'rotate(-5deg)',
          },
          '20%': {
            transform: 'rotate(5deg)',
          },
          '40%': {
            transform: 'rotate(-5deg)',
          },
          '80%': {
            transform: 'rotate(5deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.8s ease 0.25s 2',
      },
    },
  },
  plugins: [],
};
