<template>
	<swiper
		class="parallax-slider"
		:navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
		parallax
		grabCursor
		@swiper="onSwiperInitialized"
		:modules="modules"
		:loop="true"
		:autoplay="{
			speed: 3000,
			disableOnInteractions: false,
		}"
	>
		<div class="parallax-slider-navigation slide-navigation">
			<div class="nav-indicator prevArrow">
				<v-icon icon="mdi-chevron-left" />
			</div>
			<div class="nav-indicator nextArrow">
				<v-icon icon="mdi-chevron-right" />
			</div>
		</div>
		<swiper-slide
			class="parallax-slide"
			v-for="(item, index) in slides"
			:key="item.movie_id"
		>
			<div
				class="parallax-slide__image"
				:data-swiper-parallax="parallaxAmount"
				:data-swiper-parallax-opacity="0.5"
			>
				<v-img
					gradient="to top right, rgba(19,84,122,.2),
		rgba(128,208,199,0.2)"
					:src="item.movie_backdrop"
					aspect-ratio="1"
					cover
					max-height="800"
				/>
				<div class="parallax-slide__wrap">
					<div class="watch-trailer">
						<v-icon
							icon="mdi-motion-play-outline"
							size="x-large"
							@click="openModalTrailer(item, index)"
						></v-icon>
					</div>
				</div>
			</div>
			<modal-trailer ref="modalTrailer" />
		</swiper-slide>
	</swiper>
</template>

<script>
import { Parallax, Autoplay, Navigation } from "swiper"
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"
import ModalTrailer from "@/components/ModalTrailer/ModalTrailer.vue"

export default {
	props: {
		slides: {
			type: Object,
			required: true,
		},
	},
	components: {
		Swiper,
		SwiperSlide,
		ModalTrailer,
	},
	data: () => ({
		modules: [Parallax, Autoplay, Navigation],
		loading: false,
		parallaxSwiperWidth: 0,
	}),
	watch: {
		loading(val) {
			if (!val) return

			setTimeout(() => (this.loading = false), 2000)
		},
	},
	computed: {
		parallaxAmount() {
			return this.parallaxSwiperWidth * 0.5
		},
	},
	methods: {
		onSwiperInitialized(swiper) {
			this.parallaxSwiperWidth = swiper.width
		},

		openModalTrailer(item, index) {
			this.$refs.modalTrailer.map((value, indexTrailer) => {
				if (index == indexTrailer) {
					value.open(item)
				}
			})
		},
	},
}
</script>

<style lang="scss"></style>
