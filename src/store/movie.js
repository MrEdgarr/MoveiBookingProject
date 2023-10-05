// Utilities
import { defineStore } from "pinia"
import AuthServices from "../api/modules/movie"

export const useMovieStore = defineStore("movie", {
	state: () => ({
		movies: [],
		movieDetail: [],
	}),
	actions: {
		async fetchAll() {
			try {
				const { data } = await AuthServices.getAll()
				this.movies = data
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
