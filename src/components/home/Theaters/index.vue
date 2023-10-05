<template>
	<div class="theaters">
		<v-container>
			<v-row>
				<v-col cols="12" sm="6" md="3">
					<div class="scrolling">
						<v-card>
							<LstCity :citys="byCitys" @lst-cinema="lstCinema" />
						</v-card>
					</div>
				</v-col>
				<v-col cols="12" sm="6" md="3">
					<div class="scrolling">
						<v-card v-if="byCitys != 0">
							<LstCinema
								:cinemas="byCitys[selectedCinema]"
								@lst-schedule="lstSchedule"
							/>
						</v-card>
					</div>
				</v-col>
				<v-col cols="12" md="6">
					<LstMovie ref="refLstMovie" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import LstCity from "./LstCity"
import LstCinema from "./LstCinema"
import LstMovie from "./LstMovie"
import { mapStores } from "pinia"
import { useCinemaStore } from "@/store/cinemas"
import { useCityStore } from "@/store/citys"
export default {
	components: {
		LstCity,
		LstCinema,
		LstMovie,
	},

	data: () => ({
		byCitys: [],
		selectedCinema: 0,
	}),

	watch: {
		selectedCinema(newValue, oldValue) {},
	},

	computed: {
		...mapStores(useCityStore, useCinemaStore),
	},
	methods: {
		async fetchData() {
			try {
				await this.cityStore.fetchAll()
				await this.cinemaStore.fetchAll()

				await this.cityStore.citys.map((value) => {
					return (this.byCitys = [
						...this.byCitys,
						{
							...value,
							results: this.cinemaStore.cinemas.filter(
								(item) => value.city_id === item.city_id
							),
						},
					])
				})
			} catch (error) {}
		},

		lstCinema(value) {
			this.selectedCinema = value[0]?.city_id - 1
		},
		lstSchedule(value) {
			console.log(value)
		},
	},
	mounted() {
		this.fetchData()
	},
}
</script>
<style lang="scss"></style>
