/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0D0B',
        char: '#17150F',
        sand: '#F4EEDF',
        parchment: '#EDE5CF',
        gold: {
          DEFAULT: '#C6A15B',
          light: '#DEC182',
          dark: '#8F7233',
          muted: '#9C8452',
        },
        clay: '#7A5A3A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
        mark: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        widest2: '.35em',
      },
    },
  },
  plugins: [],
}
