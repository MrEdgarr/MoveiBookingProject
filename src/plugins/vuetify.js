/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

// Composables
import { createVuetify } from "vuetify"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: "#1867C0",
					secondary: "#5CBBF6",
					primaryBackground: "#212222",
					secondaryBackground: "#2f3030",
					primaryColor: "#e0a80d",
					greyDark: "#7d8792",
					headingColor: "#2d2e2e",
					white: "#fff",
					black: "#000",
					sliver: "#bac8d3",
					bglight: "#edf2f9",
					primaryBlue: "#2c7be5",
					btnActive: "#c7d6ec",
					blueDarken1: "#1E88E5",
				},
			},
		},
	},
})
