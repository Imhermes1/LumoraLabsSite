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
        // Clean Lumora Colors
        'lumora-purple': '#7c3aed',
        'lumora-pink': '#ec4899',
        'accent-light': '#a855f7',
        // Clean Neutrals
        'text-primary': '#1f2937',
        'text-secondary': '#6b7280',
        'background-light': '#ffffff',
        'background-subtle': '#f9fafb',
        'border-light': '#e5e7eb',
        'shadow-light': 'rgba(0, 0, 0, 0.05)',
        'shadow-medium': 'rgba(0, 0, 0, 0.1)',
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
