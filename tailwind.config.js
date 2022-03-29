module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '-1rem 1rem 0.25rem rgba(0, 0, 0, 0.25)'
			},
			screens: {
				'desktop-sm': '800px',
				'desktop-md': '1500px',
				'desktop-lg': '2000px'
			},
			animation: {
				spin: 'spin 4s linear infinite'
			},
			colors: {
				gray: {
					DEFAULT: '#000000',
					50: '#5C5C5C',
					100: '#525252',
					200: '#3D3D3D',
					300: '#292929',
					400: '#141414',
					500: '#000000',
					600: '#000000',
					700: '#000000',
					800: '#000000',
					900: '#000000'
				},
				brand: {
					blue: {
						light: '#404cbf',
						medium: '#0A125C',
						dark: '#0B124E'
					},
					orange: {
						light: '#f09d3e',
						medium: '#F4890B'
					}
				}
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
				pacifico: "'Pacifico', cursive",
				satisfy: "'Satisfy', cursive"
			}
		}
	},

	plugins: []
};
