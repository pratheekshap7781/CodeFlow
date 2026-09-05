/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--cf-bg) / <alpha-value>)',
        surface: 'rgb(var(--cf-surface) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--cf-surface-elevated) / <alpha-value>)',
        border: {
          DEFAULT: 'rgb(var(--cf-border) / <alpha-value>)',
          strong: 'rgb(var(--cf-border-strong) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--cf-text) / <alpha-value>)',
          muted: 'rgb(var(--cf-text-muted) / <alpha-value>)',
          faint: 'rgb(var(--cf-text-faint) / <alpha-value>)',
        },
        mint: {
          DEFAULT: 'rgb(var(--cf-mint) / <alpha-value>)',
          deep: 'rgb(var(--cf-mint-deep) / <alpha-value>)',
        },
        lavender: 'rgb(var(--cf-lavender) / <alpha-value>)',
        danger: 'rgb(var(--cf-danger) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        panel: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '10px',
        xl: '14px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
}
