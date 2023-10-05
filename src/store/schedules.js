// Utilities
import { defineStore } from "pinia"
import AuthServices from "../api/modules/schedules"

export const useScheduleStore = defineStore("schedule", {
	state: () => ({
		schedules: [],
		schedulesByCinema: [],
		scheduleList: [],
	}),
	actions: {
		async fetchAll() {
			try {
				const { data } = await AuthServices.getAll()
				this.schedules = data
			} catch (error) {
				console.log(error)
			}
		},
		async fetchList(value) {
			try {
				const { data } = await AuthServices.getListByCinemas(value)
				this.scheduleList = data
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		},
	},
})
