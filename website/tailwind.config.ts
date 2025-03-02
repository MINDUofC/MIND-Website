import { type Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		backgroundImage: {
			'allfour': "url('/images/allfour.png')",
			'right-left': "url('/images/allfour(right-left).png')",
			'blue': "url('/images/blue.png')",
			'dark-blue': "url('/images/dark-blue.png')",
			'light-blue': "url('/images/light-blue.png')",
			'grey-blue': "url('/images/grey-blue.png')",
			'grey': "url('/images/grey.png')",
			'light-blue(u-d)': "url('/images/light-blue(upsidedown).png')",
			'plain-grey': "url('/images/gradient.png')",
			'dark-grey': "url('/images/drak-grey.png')",
		},
		fontFamily: {
			myFont: ['var(--font-myFont)'],
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
			"apper": {
				from: {
					opacity: "0",
				},
				to: {
					opacity: "1",
				}
				},
				"slide": {
					from: {
						"transform": "translateX(100%)",
					},
					to: {
						"transform": "translateX(0%)",
					}
				}
			}
		},
		animation: {
			"appear": "appear 1s ease-in-out",
			"slide": "slide 750ms ease-in-out",
		},
	},
	plugins: [tailwindcssAnimate],
};

export default config;
