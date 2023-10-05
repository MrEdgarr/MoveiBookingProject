<template>
	<v-dialog v-model="dialog" persistent width="auto">
		<v-card>
			<iframe
				allowFullScreen
				frameBorder="0"
				allow="autoplay"
				title="trailer movie"
				:src="movieDetail.movie_trailer"
				width="898px"
				height="505px"
			></iframe>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					color="blue-darken-1"
					variant="text"
					@click="dialog = false"
				>
					Close
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script>
import { mapStores } from "pinia"

import { useMovieStore } from "@/store/movie"
export default {
	data() {
		return {
			dialog: false,
			movieDetail: [],
		}
	},
	computed: {
		...mapStores(useMovieStore),
	},
	methods: {
		open(index) {
			this.dialog = true
			return (this.movieDetail = index)
		},

		close() {
			this.dialog = false
		},
	},
}
</script>
<style lang=""></style>
