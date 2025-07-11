module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['"Coral Pixels"', 'cursive'],
        heading: ['"VT323"', 'monospace'],
        body: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        offwhite: '#f0fafa',
        tangerine: '#EC7E05',
        rust: '#AE3711',
        eminence: '#673776',
        indigo: '#441579',
        sapphire: '#1755BC',
        'un-blue': '#1195EF',
        celeste: '#B2F9FD',
      },
    },
  },
  plugins: [],
};
