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
			},
			animation: {
				"pulse-color": "pulse-color 8s infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
