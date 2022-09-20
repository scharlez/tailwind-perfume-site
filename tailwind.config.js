/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					'dark-cyan': 'hsl(158, 36%, 37%)',
					'cream': 'hsl(30, 38%, 92%)'
				},
				neutral: {
					'very-dark-blue': 'hsl(212, 21%, 14%)',
					'dark-grayish-blue': 'hsl(228, 12%, 48%)', 
			
				}
			}
		},
		fontSize: {
			'xs': '0.75rem',
			'3xl':'1.875rem',
		}, 
		screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
		// backgroundImage: {
		// 	'test-device-lg': './images/image-product-desktop.jpg',
	// },
	},
	plugins: [],
};

// const defaultTheme = require('tailwindcss/defaultTheme')

// module.exports = {
//   theme: {
//     screens: {
//       'xs': [{'min':'375px','max':'950'}],
//       ...defaultTheme.screens,
//     },
//   },
// 	variants: {},
//   plugins: [],
// }