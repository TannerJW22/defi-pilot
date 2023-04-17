/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue0: "#D6ECFB",
				blue1: "#BFE1F9",
				blue3: "#18A7D6",
				blue4: "#2B3F75",
				blue5: "#1D2B50",
				blue6: "#0F172A",
				common: "#A4B0BE",
				uncommon: "#1CBF6A",
				rare: "#159CFD",
				epic: "#A369FF",
				legendary: "#E67E22",
				mythic: "#FFD32A",
				exalted: "#EF5777",
			},
			fontFamily: {
				sans: [
					"Roboto",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Ubuntu",
					"Cantarell",
					"Oxygen",
					"Helvetica Neue",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
