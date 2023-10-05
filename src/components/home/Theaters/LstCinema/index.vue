<template>
	<v-list
		density="compact"
		class="py-0"
		@update:selected="selectedCinemas"
		mandatory
	>
		<v-list-subheader class="bg-bglight pa-5 text-body-2">
			{{ cinemas.city_name }}
		</v-list-subheader>
		<v-list-item
			v-for="item in cinemas.results"
			:key="item.cinema_id"
			:value="item"
		>
			<div class="py-3 text-subtitle-2">{{ item.cinema_name }}</div>
		</v-list-item>
	</v-list>
</template>
<script>
export default {
	props: {
		cinemas: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		selectedCinema: 1,
	}),

	methods: {
		async selectedCinemas(val) {
			this.selectedCinema = val[0]?.cinema_id
			this.$emit("lst-schedule", val)
		},
	},
}
</script>
<style lang=""></style>
