/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Overpass', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      mono: ['Overpass Mono', 'Menlo', 'Courier New', 'monospace'],
    },
    extend: {
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', 'transform-origin': 'center' },
          '50%': { transform: 'scaleY(1.2) scaleX(1.5)', 'transform-origin': 'center' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 6vh))' },
        }
      },
      animation: {
        breathe: 'breathe 6s ease-in-out infinite',
        'breathe-slow': 'breathe 7.5s ease-in-out infinite',
        'breathe-slowest': 'breathe 9s ease-in-out infinite',
        'scroll': 'scroll 60s linear infinite',
        'scroll-slow': 'scroll 75s linear infinite',
      }
    },
  },
  plugins: [
      require("daisyui"),
      require('@tailwindcss/typography'),
  ],
}

// https://colordesigner.io/gradient-generator
// hell
// #2b30e3
// #5444e7
// #7058ea
// #876ced
// #9b80f1
// #ae95f4
// #bfa9f6
// #d0bef9
// #e0d4fb
// #f0e9fd
//
// dunkel
// #141790
// #3c2d9b
// #5642a7
// #6e58b2
// #846ebd
// #9985c8
// #ad9cd3
// #c2b4de
// #d6cde9
// #ebe6f4
