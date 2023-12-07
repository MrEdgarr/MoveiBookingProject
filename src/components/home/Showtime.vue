<template>
	<swiper
		:slidesPerView="'auto'"
		:spaceBetween="15"
		:loop="true"
		:lazy="true"
		:modules="modules"
		class="showtimes"
	>
		<template v-for="i in 2">
			<swiper-slide v-for="item in movies" :key="item.movie_id">
				<div @click="handleClickDetail(item)">
					<v-img
						class="rounded-lg img-scale"
						height="300"
						width="200"
						:src="item.movie_poster"
						:lazy-src="item.movie_poster"
						aspect-ratio="1"
						cover
					>
					</v-img>
					<div
						class="swiper-lazy-preloader swiper-lazy-preloader-white"
					></div>
					<div class="canvas">
						<div
							class="progress-circular"
							:style="{
								background: `${
									handleChart(item.movie_vote_average).color
								}`,
							}"
						>
							<span>
								{{
									handleChart(item.movie_vote_average).medium
								}}%
							</span>
						</div>
					</div>
					<div class="title">
						<h5>{{ item.movie_name }}</h5>
						<div>
							<p class="my-0">{{ item.movie_release }}</p>
						</div>
					</div>
				</div>
			</swiper-slide>
		</template>
	</swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"
// import required modules
import { Navigation } from "swiper"
import "swiper/css/pagination"
import { handleChart } from "@/utils/chart"

export default {
	props: {
		movies: {
			type: Object,
			required: true,
		},
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	data: () => ({
		modules: [Navigation],
		handleChart: handleChart,
	}),
	methods: {
		// handleChart(chart) {
		// 	if (chart) {
		// 		let base = 10 ** 1
		// 		return Math.round(chart * base)
		// 	}
		// },

		handleClickDetail(value) {
			this.$router.push(`/movie/${value.movie_id}/${value.movie_name}`)
		},
	},
}
</script>
<style lang="scss"></style>
