/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Minimal Accent (use sparingly for CTAs and key features)
        'accent': '#2563eb', // Clean blue for primary actions
        'accent-hover': '#1d4ed8',

        // Neutral Palette
        'black': '#000000',
        'near-black': '#0a0a0a',
        'darker': '#1a1a1a',
        'dark': '#2d2d2d',
        'slate': '#3f3f46',
        'grey': '#71717a',
        'grey-light': '#a1a1aa',
        'grey-lighter': '#d4d4d8',
        'grey-subtle': '#e4e4e7',
        'off-white': '#fafafa',
        'white': '#ffffff',

        // Semantic colors (minimal usage)
        'border-default': '#e5e7eb',
        'border-subtle': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        'glass': '10px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'morph': 'morph 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(179, 64, 217, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(179, 64, 217, 0.8), 0 0 40px rgba(179, 64, 217, 0.3)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '24px' },
          '50%': { borderRadius: '16px' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #FA73A6 0%, #B340D9 50%, #8C26F2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #38B06A 0%, #3890F0 50%, #667DEB 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(179, 64, 217, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
