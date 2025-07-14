export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'p3-blue-dark': '#040D21',
        'p3-blue-base': '#0A1A3A',
        'p3-blue-light': '#00A9E0',
        'p3-gold': '#F7B733',
        'p3-white': '#f0f0f0',
        'p3-gray': '#a9a9a9'
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      keyframes: {
        // Keyframes yang sudah ada
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'text-focus-in': { '0%': { filter: 'blur(12px)', opacity: '0' }, '100%': { filter: 'blur(0px)', opacity: '1' } },
        'draw-circle': { 'to': { strokeDashoffset: 0 } },
        'slide-in-left': { '0%': { transform: 'translateX(-50%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        'slide-in-right': { '0%': { transform: 'translateX(50%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        'float-1': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        'float-2': { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(15px) rotate(3deg)' } },
        'blink': { '0%, 100%': { opacity: '0' }, '50%': { opacity: '1' } },

        'spin-fast': {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' }
        },
        'spin-medium': {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(-360deg)' }
        },
        'spin-slow': {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' }
        },

        // --- Keyframes BARU untuk tema P3R ---
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slash-enter': {
          '0%': { transform: 'translateX(-101%)' },
          '100%': { transform: 'translateX(0)' },
        },

        'text-glitch': {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        'nav-marker-appear': {
           '0%': { transform: 'translateY(-50%) scaleX(0)' },
           '100%': { transform: 'translateY(-50%) scaleX(1)' },
        },

      },
      animation: {
        // Animasi yang sudah ada
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'draw-circle': 'draw-circle 1.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards',
        'float-1': 'float-1 10s ease-in-out infinite',
        'float-2': 'float-2 12s ease-in-out infinite',
        'blink': 'blink 1.4s infinite both',

        // --- Animasi BARU untuk tema P3R ---
        'blink-caret': 'caret-blink 0.9s step-end infinite',
        'slash-enter': 'slash-enter 0.3s ease-in-out forwards',
        'nav-marker-appear': 'nav-marker-appear 0.3s ease forwards',
        'text-glitch': 'text-glitch 0.3s linear 2',
      },
    },
  },
  plugins: [],
}
