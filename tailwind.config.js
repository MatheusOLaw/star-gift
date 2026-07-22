/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "céu noturno / observatório" — o roxo é usado com muita moderação.
        void: '#000000',
        obsidian: '#09090B',
        ink: '#111827',
        indigo: {
          deep: '#312E81',
        },
        violet: {
          deep: '#5B21B6',
          DEFAULT: '#7C3AED',
          light: '#A855F7',
        },
        paper: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Lora"', 'serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.25 },
          '50%': { opacity: 1 },
        },
        driftUp: {
          '0%': { transform: 'translateY(0)', opacity: 0.9 },
          '100%': { transform: 'translateY(-40px)', opacity: 0 },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        driftUp: 'driftUp 2.2s ease-out forwards',
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      transitionTimingFunction: {
        slow: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
