import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#0B2E23',
          'emerald-light': '#0F382B',
          'emerald-dark': '#071A14',
          gold: '#D4AF37',
          'gold-light': '#E8CF7A',
          'gold-dark': '#B89628',
          plum: '#7B1842',
          rose: '#E61E6E',
          cream: '#F8F5F0',
          ivory: '#FAF8F5',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
