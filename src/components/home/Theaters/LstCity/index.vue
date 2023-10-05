<template>
	<v-list
		density="compact"
		class="py-0"
		@update:selected="selectedCitys"
		mandatory
	>
		<v-list-subheader class="bg-bglight pa-5 text-body-2">
			Khu vực
		</v-list-subheader>
		<v-list-item
			v-for="(item, i) in citys"
			:key="i"
			:active="item.city_id === selectedCity"
			:value="item"
		>
			<div class="py-3 text-subtitle-2">
				{{ item.city_name }}
			</div>
			<template v-slot:append>
				<v-chip class="bg-primaryBlue">
					{{ item.results.length }}
				</v-chip>
			</template>
		</v-list-item>
	</v-list>
</template>
<script>
export default {
	props: {
		citys: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		selectedCity: 1,
	}),

	methods: {
		selectedCitys(val) {
			this.selectedCity = val[0]?.city_id
			this.$emit("lst-cinema", val)
		},
	},
}
</script>
<style lang="scss"></style>
