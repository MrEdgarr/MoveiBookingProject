// Utilities
import { defineStore } from "pinia"
import AuthServices from "../api/modules/cinemas"

export const useCinemaStore = defineStore("cinema", {
	state: () => ({
		cinemas: [],
		cinema: [],
	}),
	actions: {
		async fetchAll() {
			try {
				const { data } = await AuthServices.getAll()
				this.cinemas = data
			} catch (error) {
				console.log(error)
			}
		},
		async fetchDetail(id) {
			try {
				const { data } = await AuthServices.getDetail(id)
				this.cinema = data
			} catch (error) {
				console.log(error)
			}
		},
	},
})
