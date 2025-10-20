import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at center, hsl(var(--primary) / 0.1), transparent 50%)"
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: "0.75rem",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px hsl(var(--primary)), 0 0 16px hsl(var(--primary)), 0 0 24px hsl(var(--primary)), 0 0 12px hsl(var(--accent)) inset' },
          '50%': { boxShadow: '0 0 20px hsl(var(--primary)), 0 0 35px hsl(var(--primary)), 0 0 50px hsl(var(--primary)), 0 0 18px hsl(var(--accent)) inset' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-node': {
            '0%': { opacity: '0', transform: 'scale(0.9) translate(-50%, -50%)' },
            '100%': { opacity: '1', transform: 'scale(1) translate(-50%, -50%)' },
        },
        'fade-and-move': {
            '0%': { opacity: '0', transform: 'translateY(0)' },
            '50%': { opacity: '0.3' },
            '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        'spin-slow': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
        },
        revealGlow: {
          '0%': { textShadow: '0 0 5px hsla(var(--primary), 0)', color: 'transparent' },
          '50%': { textShadow: '0 0 15px hsl(var(--primary)), 0 0 5px rgba(255,255,255,0.3)', color: 'white' },
          '100%': { textShadow: '0 0 10px hsl(var(--primary)), 0 0 25px hsl(var(--primary)), 0 0 5px rgba(255,255,255,0.5)', color: 'white' },
        },
        ripple: {
          '0%': { width: '0', height: '0', opacity: '1'},
          '100%': { width: '100%', height: '100%', opacity: '0'}
        },
        unfurl: {
            '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
            '100%': { transform: 'scaleY(1)', transformOrigin: 'top' }
        },
        loadingBar: {
            '0%': { width: '0%' },
            '100%': { width: '100%' }
        },
        'scroll-left': {
            'from': { transform: 'translateX(0)' },
            'to': { transform: 'translateX(-50%)' }
        },
        'subtle-parallax': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-5px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0, 0) skew(0deg)' },
          '2%': { transform: 'translate(-2px, 2px) skew(-2deg)' },
          '4%': { transform: 'translate(2px, -2px) skew(2deg)' },
          '6%': { transform: 'translate(-1px, 1px) skew(-1deg)' },
          '8%': { transform: 'translate(1px, -1px) skew(1deg)' },
          '10%': { transform: 'translate(0, 0) skew(0deg)' },
          '60%': { transform: 'translate(2px, 1px) skew(-5deg)' },
          '62%': { transform: 'translate(-2px, -1px) skew(5deg)' },
          '64%': { transform: 'translate(0, 0) skew(0deg)' },
        },
        'glitch-anim-1': {
          '0%': { clipPath: 'polygon(0 2%, 100% 2%, 100% 20%, 0 20%)', transform: 'translate(-3px, 1px)' },
          '10%': { clipPath: 'polygon(0 45%, 100% 45%, 100% 55%, 0 55%)', transform: 'translate(2px, -1px)' },
          '20%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)', transform: 'translate(-2px, 2px)' },
          '30%': { clipPath: 'polygon(0 25%, 100% 25%, 100% 35%, 0 35%)', transform: 'translate(3px, -2px)' },
          '40%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 70%, 0 70%)', transform: 'translate(-1px, 1px)' },
          '50%': { clipPath: 'polygon(0 5%, 100% 5%, 100% 15%, 0 15%)', transform: 'translate(1px, -1px)' },
          '60%': { clipPath: 'polygon(0 90%, 100% 90%, 100% 100%, 0 100%)', transform: 'translate(-2px, 1px)' },
          '70%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 50%, 0 50%)', transform: 'translate(2px, -2px)' },
          '80%': { clipPath: 'polygon(0 75%, 100% 75%, 100% 85%, 0 85%)', transform: 'translate(-3px, 2px)' },
          '90%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)', transform: 'translate(3px, -1px)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 10%)', transform: 'translate(-1px, 1px)' },
        },
        'glitch-anim-2': {
          '0%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)', transform: 'translate(2px, -2px)' },
          '10%': { clipPath: 'polygon(0 5%, 100% 5%, 100% 15%, 0 15%)', transform: 'translate(-3px, 1px)' },
          '20%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 50%, 0 50%)', transform: 'translate(1px, -1px)' },
          '30%': { clipPath: 'polygon(0 85%, 100% 85%, 100% 95%, 0 95%)', transform: 'translate(-2px, 2px)' },
          '40%': { clipPath: 'polygon(0 20%, 100% 20%, 100% 30%, 0 30%)', transform: 'translate(3px, -1px)' },
          '50%': { clipPath: 'polygon(0 65%, 100% 65%, 100% 75%, 0 75%)', transform: 'translate(-1px, 2px)' },
          '60%': { clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 10%)', transform: 'translate(2px, -1px)' },
          '70%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 60%, 0 60%)', transform: 'translate(-2px, 1px)' },
          '80%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 25%, 0 25%)', transform: 'translate(1px, -2px)' },
          '90%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 80%, 0 80%)', transform: 'translate(-3px, 2px)' },
          '100%': { clipPath: 'polygon(0 30%, 100% 30%, 100% 40%, 0 40%)', transform: 'translate(3px, -2px)' },
        },
        'glow-line-anim': {
          '0%': { left: '-150%', width: '50%' },
          '50%': { width: '100%' },
          '100%': { left: '150%', width: '50%' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'reveal-glow': 'revealGlow 2.5s ease-out forwards',
        'ripple': 'ripple 1s ease-out forwards',
        'unfurl': 'unfurl 0.5s ease-in-out',
        'loading-bar': 'loadingBar 3s ease-in-out forwards',
        'scroll-left': 'scroll-left 30s linear infinite',
        'subtle-parallax': 'subtle-parallax 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/container-queries')],
} satisfies Config;
