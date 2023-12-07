<template>
	<div class="main-content" id="movie-main-content">
		<v-container>
			<v-row class="">
				<v-col lg="8">
					<div class="selection">
						<v-row>
							<v-col cols="12" sm="6">
								<v-select
									v-model="select"
									:items="items"
									item-title="state"
									item-value="abbr"
									return-object
									single-line
									variant="solo"
								></v-select>
							</v-col>
							<v-col cols="12" sm="6">
								<v-select
									v-model="select"
									:items="items"
									item-title="state"
									item-value="abbr"
									return-object
									single-line
									variant="solo"
								></v-select
							></v-col>
						</v-row>
					</div>
					<v-card class="bg-bglight text-body-2 mb-3" height="60">
						<v-btn-toggle
							v-model="toggle_one"
							mandatory
							variant="text"
							class="w-100 h-100"
						>
							<v-col cols="2" v-for="n in 6" class="pa-0">
								<v-btn
									block
									height="100%"
									class="text-sliver btn-showtime-dates"
								>
									<div>
										<h4>22/9</h4>
										<span class="text-caption">thu 4</span>
									</div>
								</v-btn>
							</v-col>
							<!-- <v-row>
							</v-row> -->
						</v-btn-toggle>
					</v-card>
					<v-expansion-panels variant="accordion" multiple>
						<v-expansion-panel v-for="i in 3" :key="i">
							<v-expansion-panel-title color="bglight">
								<v-row>
									<v-col cols="2" sm="1">
										<v-avatar>
											<v-img
												src="https://i.pinimg.com/564x/70/53/cb/7053cb0e928b35216203e31f0442ee36.jpg"
												lazy-src="https://i.pinimg.com/564x/70/53/cb/7053cb0e928b35216203e31f0442ee36.jpg"
												alt="John"
												cover
											></v-img>
										</v-avatar>
									</v-col>
									<v-col class="ml-2">
										<h4 class="pb-1">Cinemas</h4>
										<span class="text-greyDark text-body-2"
											>1 rap</span
										>
									</v-col>
								</v-row>
							</v-expansion-panel-title>
							<v-expansion-panel-text class="ticketing-cinema">
								<v-expansion-panels
									variant="accordion"
									multiple
									selected-class="bg-primaryBlue"
								>
									<v-expansion-panel
										elevation="0"
										hide-actions="false"
									>
										<v-expansion-panel-title>
											<v-row>
												<v-col>
													<h4 class="pb-1">
														Cinemas
													</h4>
												</v-col>
											</v-row>
										</v-expansion-panel-title>

										<v-expansion-panel-text>
											<span
												class="text-body-1 ma-0 text-greyDark text-caption"
											>
												Tầng 2 Tòa nhà HHA, Khu Đô Thị
												XPHomes (Tân Tây Đô), Xã Tân
												Lập, Huyện Đan Phượng, TP Hà Nội
												- Thông tin rạp - Bản đồ - Giá
												vé
											</span>
											<div class="showtimes">
												<label
													class="text-body-2 font-weight-bold"
												>
													2D Phụ Đề Việt
												</label>
												<div>
													<router-link
														to="/seat-booking"
													>
														<v-btn
															v-for="n in 5"
															:key="n"
															variant="outlined"
															class="pa-0 mr-1 my-1 btn-showtimes"
														>
															12:30
														</v-btn>
													</router-link>
												</div>
											</div>
										</v-expansion-panel-text>
									</v-expansion-panel>
								</v-expansion-panels>
							</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			select: { state: "Florida", abbr: "FL" },
			items: [
				{ state: "Florida", abbr: "FL" },
				{ state: "Georgia", abbr: "GA" },
				{ state: "Nebraska", abbr: "NE" },
				{ state: "California", abbr: "CA" },
				{ state: "New York", abbr: "NY" },
			],
			toggle_one: 0,
			loading: false,
		}
	},
	watch: {
		select(val, aldVal) {
			console.log(val)
		},
	},
}
</script>
<style lang="scss"></style>
