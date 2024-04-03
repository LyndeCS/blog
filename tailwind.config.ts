import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#E36036",
				secondary: "#15DFB6",
				tertiary: "",
			},
			boxShadow: {
				glass: "inset 2px rgb(255, 255, 255)",
			},
			keyframes: {
				"pulse-color": {
					"0%, 100%": { color: "#F4EEE4" },
					"50%": { color: "#FF753A" },
				},
				"fade-in": {
					"0%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
				"fade-in-up": {
					"0%": { transform: "translateY(2rem)", opacity: "0%" },
					"100%": { transform: "translateY(0)", opacity: "100%" },
				},
				"fade-in-down": {
					"0%": { transform: "translateY(-4rem)", opacity: "0%" },
					"100%": { transform: "translateY(0)", opacity: "100%" },
				},
				"bounce-arrow": {
					"0%, 100%": {
						transform: "translateY(0)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					},
					"50%": {
						transform: "translateY(-25%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
				},
			},
			animation: {
				"pulse-color": "pulse-color 8s infinite",
				"fade-in": "fade-in 0.5s",
				"fade-in-up": "fade-in-up 0.5s",
				"fade-in-down": "fade-in-down 1s 1s",
				"bounce-arrow": "bounce-arrow, fade-in-down 1s 1s",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
