<template>
	<div class="movie_detail">
		<v-img
			gradient="to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px)
		- 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84)
		100%"
			:src="movieDetail.movie_backdrop"
			height="auto"
			max-height="500"
			cover
			class="img-detail"
		>
			<div class="movie_detail_content">
				<v-container>
					<v-row>
						<v-col sm="3" class="hidden-sm-and-down">
							<v-img
								:src="movieDetail.movie_poster"
								width="100%"
								max-height="450"
								max-width="300"
								cover
								class="rounded-lg"
							></v-img>
						</v-col>
						<v-col md="9">
							<div class="mb-3 text-center text-md-left">
								<h1 class="mb-0 text-h5">
									{{ movieDetail.movie_name }}
								</h1>
								<h5
									class="mb-0 text-truncate text-greyDark text-subtitle-2"
								>
									{{
										movieDetail.movie_name +
										" - " +
										movieDetail.movie_genres
									}}
								</h5>
							</div>
							<div>
								<div class="text-center text-md-left">
									<v-btn
										class="mr-1 my-1"
										variant="outlined"
										size="small"
									>
										<template v-slot:prepend>
											<v-icon size="smail">
												mdi-cards-heart</v-icon
											>
										</template>
										Thích
									</v-btn>
									<v-btn
										class="mr-1 my-1"
										variant="outlined"
										size="small"
									>
										<template v-slot:prepend>
											<v-icon size="smail">
												mdi-star
											</v-icon>
										</template>
										Đánh giá
									</v-btn>
									<v-btn
										class="mr-1 my-1"
										variant="outlined"
										size="small"
									>
										Trailer
									</v-btn>
									<v-btn
										class="mr-1 my-1"
										variant="outlined"
										size="small"
									>
										Mua vé
									</v-btn>
								</div>
								<p class="my-5 text-justify text-white">
									{{ movieDetail.movie_description }}
								</p>
								<v-row>
									<v-col
										class="text-center text-md-left text-caption"
									>
										<strong>
											<v-icon class="mr-1">
												mdi-thumb-up-outline
											</v-icon>
										</strong>
										<span class="d-none d-sm-inline-block">
											Hài lòng
										</span>
										<br />
										<span>
											{{
												Math.round(
													movieDetail.movie_vote_average *
														10 ** 1
												)
											}}%
										</span>
									</v-col>
									<v-col
										class="text-center text-sm-left text-caption"
									>
										<strong>
											<v-icon class="mr-1">
												mdi-calendar-blank
											</v-icon>
										</strong>
										<span class="d-none d-sm-inline-block">
											Khởi chiếu
										</span>
										<br />
										<span>
											{{
												convertDate(
													movieDetail.movie_release
												)
											}}
										</span>
									</v-col>
									<v-col
										class="text-center text-sm-left text-caption"
									>
										<strong>
											<v-icon class="mr-1">
												mdi-clock-time-three-outline
											</v-icon>
										</strong>
										<span class="d-none d-sm-inline-block">
											Thời lượng
										</span>
										<br />
										<span>
											{{ movieDetail.movie_lenght }} phút
										</span>
									</v-col>
									<v-col
										class="text-center text-sm-left text-caption"
									>
										<strong>
											<v-icon class="mr-1">
												mdi-account-check-outline
											</v-icon>
										</strong>
										<span class="d-none d-sm-inline-block">
											Giới hạn tuổi
										</span>
										<br />
										<span>
											{{ movieDetail.movie_cens }}
										</span>
									</v-col>
								</v-row>
							</div>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</v-img>
	</div>
</template>
<script>
import { useMovieStore } from "@/store/movie"
import { mapState } from "pinia"

export default {
	data() {
		return {
			voteFormart: "",
		}
	},
	computed: {
		...mapState(useMovieStore, ["movieDetail", "getMovieDetail"]),
	},
	methods: {
		async fetchAll() {
			try {
				await this.getMovieDetail(this.$route.params.id)
			} catch (error) {}
		},
		handleChart(chart) {
			let base = 10 ** 1
			this.voteFormart = Math.round(chart * base)

			return `conic-gradient(
                  rgba(30, 213, 169) ${chart * 36}deg,
                  rgba(30, 213, 169, 0.2) 0deg
                )`
		},
		convertDate(inputFormat) {
			function pad(s) {
				return s < 10 ? "0" + s : s
			}
			var d = new Date(inputFormat)
			return [
				pad(d.getDate()),
				pad(d.getMonth() + 1),
				d.getFullYear(),
			].join("/")
		},
	},
	mounted() {
		this.fetchAll()
	},
}
</script>
<style lang="scss">
@import "../../assets/movie-detail/Detail.scss";
</style>
<!-- <div class="canvas">
	<div
		class="progress-circular"
		:style="{
			background: handleChart(5),
		}"
	>
		<span class="value">
			{{ voteFormart }} <small>%</small>
		</span>
	</div>
</div> -->
