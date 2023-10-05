<template>
	<Carousel :slides="movieStore.movies" />
	<div class="my-10 bg-selection">
		<v-container>
			<v-tabs v-model="tabShowtimes" show-arrows>
				<v-tab :value="1"> <h3>Đăng chiếu</h3></v-tab>
				<v-tab :value="2"><h3>Sắp chiếu</h3></v-tab>
			</v-tabs>
			<VDivider class="mb-5" />
			<v-window v-model="tabShowtimes" :disabled="true">
				<v-window-item v-for="n in 2" :key="n" :value="n">
					<Showtimes :movies="movieStore.movies" />
				</v-window-item>
			</v-window>
		</v-container>
	</div>
	<Theaters />
	<NewsBlog />
</template>

<script>
import Carousel from "@/components/home/Carousel.vue"
import Theaters from "@/components/home/Theaters"
import Showtimes from "@/components/home/Showtime.vue"
import NewsBlog from "@/components/home/News.vue"
import { mapStores } from "pinia"
import { useMovieStore } from "@/store/movie"

export default {
	components: {
		Carousel,
		Showtimes,
		Theaters,
		NewsBlog,
	},

	data: () => ({
		tabShowtimes: null,
		tab: null,
		loading: false,
	}),
	computed: {
		...mapStores(useMovieStore),
	},

	methods: {
		async fetchData() {
			try {
				this.loading = true
				await this.movieStore.fetchAll()
			} catch (error) {
				console.log(error)
			} finally {
				this.loading = false
			}
		},
	},
	mounted() {
		this.fetchData()
	},
}
</script>

<style lang="scss"></style>
