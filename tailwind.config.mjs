/** @type {import('tailwindcss').Config} */
export default {
	
	content: [
		'./node_modules/flowbite/**/*.js',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue }'
	],
	
	theme: {
		extend: {
			fontFamily : {
				"myriad" : ["Myriad-pro", "sans-serif"],
				"lato" : ["Lato", "sans-serif"]
			},
			colors : {
				"naranja" : "#f2790c",
				"azul" : "#04297e"
			},
			screens :{
				"sm" : "360px",
				"md" : "640px",
				"lg" : "768px",
				"xl" : "1080px",
				"2xl" : "1536px",
			},
			letterSpacing : {
				"wider" : "10px"
			},
			
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}