
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'toast-slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'toast-slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'toast-slide-in': 'toast-slide-in-right 0.3s ease-out',
				'toast-slide-out': 'toast-slide-out-right 0.3s ease-in forwards',
				'fade-in': 'fade-in 0.2s ease-out',
				'fade-out': 'fade-out 0.2s ease-in forwards',
			},
			fontFamily: {
				'sans': ['Open Sans', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				// Type scale
				'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
				'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
				'base': ['1rem', { lineHeight: '1.5rem' }], // 16px
				'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
				'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
				'2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
				'5xl': ['3rem', { lineHeight: '1' }], // 48px
				'6xl': ['3.75rem', { lineHeight: '1' }], // 60px
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
