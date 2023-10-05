// Utilities
import { defineStore } from "pinia"
import AuthServices from "../api/modules/showtime"

export const useShowTimeStore = defineStore("showtime", {
	state: () => ({
		movieBySchedule: [],
		cinemasBySchedule: [],
		cityByCinema: [],
		getAll: [],
		lstMovieSchedule: [],
	}),
	actions: {
		async fetchAll() {
			try {
				const { data } = await AuthServices.getCityByCinema()
				this.cityByCinema = data
			} catch (error) {
				console.log(error)
			}
		},
		// async getCinemasBySchedule() {
		// 	try {
		// 		await this.getCityByCinema()
		// 		await this.getMovieBySchedule()
		// 		const { data } = await AuthServices.getCinemasBySchedule()
		// 		this.cinemasBySchedule = data

		// 		this.cityByCinema.map((value) => {
		// 			value.cinemas.map((c) => {
		// 				return (this.getAll = [
		// 					...this.cityByCinema,
		// 					{
		// 						// ...this.cinemasBySchedule.find((item) => {
		// 						// 	if (c.id == item.id) {
		// 						// 		return item.schedules
		// 						// 	}
		// 						// }),
		// 					},
		// 				])
		// 			})
		// 		})
		// 		// console.log(this.getAll)
		// 	} catch (error) {
		// 		console.log(error)
		// 	}
		// },
		// async getMovieBySchedule() {
		// 	try {
		// 		const { data } = await AuthServices.getMovieBySchedule()
		// 		this.movieBySchedule = data
		// 	} catch (error) {
		// 		console.log(error)
		// 	}
		// },
	},
})
