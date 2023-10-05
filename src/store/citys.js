// Utilities
import { defineStore } from "pinia"
import AuthServices from "../api/modules/citys"

export const useCityStore = defineStore("city", {
	state: () => ({
		citys: [],
	}),
	actions: {
		async fetchAll() {
			try {
				const { data } = await AuthServices.getAll()
				this.citys = data
			} catch (error) {
				console.log(error)
			}
		},
		async fetchDetail(itemId) {
			try {
				const { data } = await AuthServices.getDetail(itemId)
				this.movieDetail = data
			} catch (error) {
				console.log(error)
			}
		},
	},
})
