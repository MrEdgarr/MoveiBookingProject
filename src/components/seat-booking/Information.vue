<template>
	<v-row>
		<v-col cols="12">
			<div class="text-center pb-5">
				<v-icon class="mdi-check-circle">mdi-check-circle</v-icon>
				<p class="text-h5">
					Payment of <strong> Rs 373.00 </strong> Complete successfull
				</p>
			</div>
			<v-divider></v-divider>
		</v-col>
		<v-col cols="12">
			<v-card class="ma-auto overflow-visible" max-width="500">
				<v-card-text>
					<div class="float-md-left mr-5">
						<v-img
							width="100"
							src="https://i.pinimg.com/564x/9b/c8/52/9bc852d2b9e4602f6de977fa67611d93.jpg"
							class="rounded-lg"
						></v-img>
					</div>
					<div class="booking-content pt-5 pa-md-0">
						<div>
							<h3>U/A, 2D, ENGLISH lore</h3>
							<h2>Zero</h2>
							<h3>inbox: R-City, Ghatkoper</h3>
							<h3>Fri, 25 Oct | 10:15PM</h3>
						</div>
						<div class="ticket-icons">
							<v-icon>mdi-star</v-icon>
							<span>M-TICKET</span>
						</div>
					</div>
				</v-card-text>
				<v-card-text>
					<v-row>
						<v-col
							cols="4"
							style="border-right: 1px dashed #979797"
						>
							<span>SCREEN : </span>
							<h2>Audi 1</h2>
						</v-col>
						<v-col cols="6">
							<span>SEATS : </span>
							<h2>A1, A2, A3, A4</h2>
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-text class="text-center">
					<v-img
						src="https://www.webstrot.com/html/moviepro/html/images/content/qr.png"
						width="200"
						class="ma-auto"
					></v-img>
					<span class="text-grey-lighten-1">SSST0000310644</span>
				</v-card-text>
			</v-card>
			<v-row justify="center" align="center" class="mt-5">
				<v-col cols="auto">
					<router-link to="/seat-booking">
						<v-btn> Mua thêm vé </v-btn>
					</router-link>
				</v-col>
				<v-col cols="auto">
					<router-link to="/">
						<v-btn> Trang chủ </v-btn>
					</router-link>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>
<script>
export default {
	layout: "auth",
	data: () => ({}),
}
</script>
<style lang="scss" scoped>
// @import "@/assets/seat-booking/_Information.scss";
</style>
