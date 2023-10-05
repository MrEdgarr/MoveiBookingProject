<template>
	<div>
		<v-card class="mx-auto mb-5">
			<v-card-text>
				<p class="text-truncate ma-0">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Animi repellat ipsam, sit commodi consequatur eveniet
					eligendi quisquam veritatis! Sint totam quisquam voluptate
					rem atque ipsum consequuntur aliquam, doloribus cumque
					placeat?
				</p>
				<p class="text-truncate ma-0">
					<strong>Beta Giải Phóng</strong>
				</p>
				<p class="text-truncate ma-0">
					Suat <strong>22:00</strong> - Hom nay,
					<strong>30/03</strong>
				</p>
				<p class="text-truncate ma-0">
					Phong chieu P3 - Ghe
					<span class="font-weight-bold">A1, A2, A2</span>
				</p>
			</v-card-text>
		</v-card>
		<v-card class="mx-auto mb-5">
			<v-card-text>
				<v-row>
					<v-col>
						<h6 class="text-greyDark text-uppercase mb-2">
							Tong don hang
						</h6>
						<span class="h2 mb-0 ticketing-total-amount text-h6">
							100.000 d
						</span>
					</v-col>
					<v-divider vertical class="my-5"></v-divider>
					<v-col
						class="text-right border-left ticketing-countdown-timer"
					>
						<h6 class="text-greyDark text-uppercase mb-2">
							Thời gian giữ ghế
						</h6>
						<span class="mb-0 text-red text-h6"> 00:00 </span>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		<div>
			<v-spacer></v-spacer>
			<router-link to="/seat-checkout">
				<v-btn
					v-if="$route.path == '/seat-booking'"
					block
					color="primary mb-2"
					variant="flat"
				>
					Tiếp tục
				</v-btn>
			</router-link>
		</div>
	</div>
</template>
<script>

export default {
	data: () => ({}),
}
</script>
<style lang=""></style>
