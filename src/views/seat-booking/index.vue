<template>
	<div style="min-height: 100vh">
		<v-app-bar :elevation="5" class="px-sm-5">
			<v-container>
				<div class="text-h6 font-weight-regular justify-space-between">
					<v-row>
						<v-col
							v-for="(n, index) in ORDER_STEPPER_BOOKING"
							class="text-center text-greyDark text-subtitle-2 ticketing-step"
						>
							<div
								:class="n.name == $route.name ? 'text-red' : ''"
							>
								<v-icon class="d-block ma-auto">{{
									n.icon
								}}</v-icon>
								<span>
									{{ n.label }}
								</span>
							</div>
							<v-icon
								class="ticketing-step-icon"
								:class="index == 2 ? 'd-none' : ''"
							>
								mdi-chevron-right
							</v-icon>
						</v-col>
					</v-row>
				</div>
			</v-container>
		</v-app-bar>
		<v-container class="px-sm-16 mt-5">
			<v-row v-if="!$route.meta.Layout">
				<v-col cols="12" md="4" class="order-md-last">
					<Order />
				</v-col>
				<v-col cols="12" md="8">
					<router-view></router-view>
				</v-col>
			</v-row>
			<Information v-else />
		</v-container>
	</div>
</template>
<script>
import { ORDER_STEPPER_BOOKING } from "@/constants/order/stepper"
import Seats from "@/components/seat-booking/Seats.vue"
import CheckoutVue from "@/components/seat-booking/Checkout.vue"
import Order from "@/components/seat-booking/Order.vue"
import Information from "@/components/seat-booking/Information.vue"

export default {
	components: { Seats, CheckoutVue, Order, Information },
	data: () => ({
		ORDER_STEPPER_BOOKING,
		links: [
			["mdi-inbox-arrow-down", "Lịch chiếu"],
			["mdi-send", "Cụm rạp"],
			["mdi-delete", "Tin Tức"],
			["mdi-alert-octagon", "Log out"],
		],
		StepperData: [
			{
				text: "Chọn ghế",
				icon: "mdi-view-grid-outline",
			},
			{
				text: "Thanh toán",
				icon: "mdi-credit-card-outline",
			},
			{
				text: "Thông tin vé",
				icon: "mdi-inbox",
			},
		],
	}),
}
</script>
<style lang="scss">
.legend {
	text-align: center;
	div {
		display: inline-block;
		padding: 0 5px;
		margin-bottom: 10px;
		clear: both;
		span {
			background-color: #dfdfdf;
			position: relative;
			border-radius: 2px;
			width: 20px;
			height: 20px;
			display: block;
			float: left;
			&.seat-area-2 {
				background-color: #d4b15f;
			}
			&.seat-area-3 {
				background-color: #3b5998;
			}
			&.seat-area-4 {
				background-color: #00b300;
				color: #fff;
				box-shadow: 0 0 11px #00b300;
			}
			&.seat-area-5 {
				background-image: url("https://moveek.com/build/images/seat-unavailable.74bb3c1e.png");
				background-repeat: no-repeat;
				background-position: 50%;
			}
			&.seat-area-6 {
				background: repeating-linear-gradient(
					45deg,
					hsla(0, 0%, 60%, 0.4),
					hsla(0, 0%, 60%, 0.4) 10px,
					hsla(0, 0%, 60%, 0.6) 0,
					hsla(0, 0%, 60%, 0.6) 20px
				);
			}
		}
		p {
			float: left;
			margin: 0;
			font-size: 12px;
			padding: 3px 5px;
		}
	}
}
.seats-wrapper-parent {
	width: 100%;
	overflow: auto;
	.seats-wrapper {
		box-sizing: border-box;
		-webkit-overflow-scrolling: touch;
		display: table;
		.seats {
			text-align: center;
			position: relative;
			display: table-cell;
			vertical-align: top;
			ul.seat-row {
				list-style: none;
				margin: 0;
				padding: 0;
				white-space: nowrap;
				display: -webkit-box;
				display: -moz-box;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				justify-content: center;

				li {
					display: inline-block;
					width: 25px;
					height: 25px;
					background: #dfdfdf;
					margin: 3px;
					cursor: pointer;
					position: relative;
					box-sizing: border-box;
					text-align: center;
					padding: 7px 0;
					vertical-align: middle;
					font-size: 11px;
					font-weight: 700;
					border-radius: 2px;

					&.rowname {
						cursor: default;
						background: #727575;
						margin-right: 30px;
						text-align: center;
						color: #fff;
						font-weight: 700;
						width: 30px;
					}
					&:hover {
						background: #b6b6b3;
					}

					&.selected {
						color: #fff;
						background-color: #00b300 !important;
						box-shadow: 0 0 11px #00b300;
					}
					&.taken {
						cursor: not-allowed;
						color: #999;
						background: repeating-linear-gradient(
							45deg,
							hsla(0, 0%, 60%, 0.4),
							hsla(0, 0%, 60%, 0.4) 10px,
							hsla(0, 0%, 60%, 0.6) 0,
							hsla(0, 0%, 60%, 0.6) 20px
						);
					}
				}
			}
		}
	}
}

.ticketing-step {
	position: relative;

	&-icon {
		position: absolute !important;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
	}
}
</style>
