/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
      colors: {
        greenMain: '#10B0C1',
        green: '#B3D9E2',
        greenLight: '#D7F0F6',
        blueLight: '#E9F7FF',
        grayLight: '#F5F5F5',
        gray: '#F1F1F1',
        grayMedium: '#D9D9D9',
        grayDark: '#939393',
        grayBlueLight: '#f7f8fc',
        purple: '#8A22A0',
        red: '#FF3D3D',
        black: '#010036',
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
        xxl: '1536px',
      },
      fontFamily: {
        Thin: 'IBMPlexSansArabicThin', // 100
        ExtraLight: 'IBMPlexSansArabicExtraLight', // 200
        Light: 'IBMPlexSansArabicLight', // 300
        Regular: 'IBMPlexSansArabicRegular', // 400
        Medium: 'IBMPlexSansArabicMedium', // 500
        SemiBold: 'IBMPlexSansArabicSemiBold', // 600
        Bold: 'IBMPlexSansArabicBold', // 700
      },
    },
  },
  plugins: [],
};
