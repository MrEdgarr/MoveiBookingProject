// Utilities
import { defineStore } from "pinia"
import AuthServices from "../api/modules/theater"

export const useTheaterStore = defineStore("theater", {
	state: () => ({
		cinemas: [],
		citys: [],
		cinemaDetail: [],
		cinemasByCity: [],
	}),
	actions: {
		async getCinemas() {
			try {
				const { data } = await AuthServices.getAll()
				this.cinemas = data
			} catch (error) {
				console.log(error)
			}
		},
		async getCitys() {
			try {
				const { data } = await AuthServices.getCitys()
				this.citys = data
			} catch (error) {}
		},
		// async getCinemasByCity() {
		// 	try {
		// 		await this.getCinemas()
		// 		await this.getCitys()

		// 		if (this.cinemasByCity.length === 0) {
		// 			this.citys.map((value) => {
		// 				return (this.cinemasByCity = [
		// 					...this.cinemasByCity,
		// 					{
		// 						...value,
		// 						results: this.cinemas.filter((item) => {
		// 							return value.city_id == item.city_id
		// 						}),
		// 					},
		// 				])
		// 			})
		// 		} else {
		// 			return false
		// 		}
		// 	} catch (error) {
		// 		console.log(error)
		// 	}
		// },
	},
})
