/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#1E1E1E',
      primary: {
        100: '#D60077',
        50: '#E2008D',
        30: '#FF5CB6',
        30: '#FFB7DF',
      },
      low: {
        100: '#171717',
        80: '#262626',
        70: '#3F3F3F',
        60: '#525252',
        50: '#6E6E6E',
      },
      high: {
        40: '#8F8F8F',
        30: '#A8A8A8',
        30: '#A8A8A8',
        10: '#C2C2C2',
        '05': '#E3E3E3',
        '00': '#FFFFFF',
      },
      danger: {
        100: '#934E10',
        60: '#D77E2C',
        50: '#F99840',
        10: '#FFC897',
      },
      success: {
        100: '#1D834D',
        60: '#3EC77E',
        50: '#53E999',
        10: '#ABFFD2',
      },
      warning: {
        100: '#7A6EB2',
        60: '#8F82CC',
        50: '#BBADFF',
        10: '#D9D2FF',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif',]
    },
    fontWeight:{
      'weight-regular': '400',
      'weight-semibold': '600',
      'weight-bold': '700',
    },
    fontSize: {
      'display-lg': ['4rem',{
        lineHeight: '4.5rem',
        letterSpacing: '-0.113rem',
        fontWeight: '700',
      }],
      'display-md': ['3rem',{
        lineHeight: '3.5rem',
        letterSpacing: '-0.1rem',
        fontWeight: '700',
      }],
      'title-lg': ['2rem',{
        lineHeight: '2.5rem',
        letterSpacing: '-0.075rem',
        fontWeight: '700',
      }],
      'title-md': ['1.5rem',{
        lineHeight: '2rem',
        letterSpacing: '-0.05rem',
        fontWeight: '700',
      }],
      'subtitle-md': ['1.5rem',{
        lineHeight: '2rem',
        letterSpacing: '-0.05rem',
        fontWeight: '600',
      }],
      'subtitle-sm': ['1.25rem',{
        lineHeight: '1.5rem',
        letterSpacing: '-0.025rem',
        fontWeight: '600',
      }],
      'body-regular-md': ['1rem',{
        lineHeight: '1.5rem',
        letterSpacing: '-0.025rem',
        fontWeight: '400',
      }],
      'body-bold-md': ['1rem',{
        lineHeight: '1.5rem',
        letterSpacing: '-0.025rem',
        fontWeight: '700',
      }],
      'body-hyperlink-md': ['1rem',{
        lineHeight: '1.5rem',
        letterSpacing: '-0.025rem',
        fontWeight: '700',
      }],
      'body-regular-sm': ['0.875rem',{
        lineHeight: '1.25rem',
        letterSpacing: '-0.013rem',
        fontWeight: '400',
      }],
      'body-bold-sm': ['0.875rem',{
        lineHeight: '1.25rem',
        letterSpacing: '-0.013rem',
        fontWeight: '700',
      }],
      'body-hyperlink-sm': ['0.875rem',{
        lineHeight: '1.25rem',
        letterSpacing: '-0.013rem',
        fontWeight: '600',
      }],
      'caption-semibold': ['0.75rem',{
        lineHeight: '1rem',
        letterSpacing: '0rem',
        fontWeight: '600',
      }],
      'overline-semibold': ['0.75rem',{
        lineHeight: '1rem',
        letterSpacing: '0rem',
        fontWeight: '600',
      }],

  },
    extend: {},
  },
  plugins: [],
}
