<template>
	<v-card class="bg-bglight text-body-2 mb-3" height="60">
		<v-btn-toggle
			v-model="toggle"
			mandatory
			variant="text"
			class="w-100 h-100"
		>
			<v-col cols="2" v-for="n in dtData" class="pa-0" :key="n">
				<v-btn
					block
					height="100%"
					class="text-sliver btn-showtime-dates"
					@click="isShowDate(n)"
				>
					<div>
						<h4>{{ n.dayNumber }}</h4>
						<span class="text-caption">{{ n.dayToday }}</span>
					</div>
				</v-btn>
			</v-col>
		</v-btn-toggle>
	</v-card>
	<div class="scrolling">
		<div v-for="item in 10" :key="item">
			<v-card class="bg-bglight pa-5 text-body-2 mb-3">
				<h3>name</h3>
				<small>address</small>
			</v-card>
			<v-card class="mb-1">
				<div class="pa-5">
					<v-row>
						<v-col cols="3" sm="2">
							<v-img
								src="https://i.pinimg.com/736x/61/87/c3/6187c38d47dd897af5b77e50f4f19875.jpg"
								lazy-src="https://i.pinimg.com/736x/61/87/c3/6187c38d47dd897af5b77e50f4f19875.jpg"
								cover
								class="bg-grey-lighten-2 rounded-lg"
								height="auto"
								max-height="125"
								width="100%"
							></v-img>
						</v-col>
						<v-col>
							<div>
								<div class="text-subtitle-2">
									Thanh Gươm Diệt Quỷ Đường Đến Làng Rèn Gươm
								</div>

								<span class="text-greyDark text-body-2">
									<span>1h50'</span>
								</span>
								<div>
									<v-btn
										v-for="item in 6"
										:key="item.id"
										variant="outlined"
										class="pa-0 mr-1 my-1 btn-showtimes"
									>
										123
									</v-btn>
								</div>
							</div>
						</v-col>
					</v-row>
				</div>
			</v-card>
		</div>
	</div>
</template>
<script>
import { formatDate, urlencode } from "@/utils/date.js"
import { useScheduleStore } from "@/store/schedules"
import { mapStores } from "pinia"
export default {
	data: () => ({
		dtData: formatDate(),
		toggle: 0,
	}),

	computed: {
		...mapStores(useScheduleStore),
	},

	methods: {
		isDataMovie(value) {},
		async isShowDate(value) {
			try {
				await this.scheduleStore.fetchList({
					id: 6,
					numberDay: urlencode(value.dayNumber + "/" + "2023"),
				})
			} catch (error) {}
		},
	},
}
</script>
<style lang=""></style>
