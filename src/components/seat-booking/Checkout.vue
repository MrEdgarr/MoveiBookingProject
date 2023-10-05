<template>
	<div>
		<v-card>
			<div class="bg-bglight pa-5 text-body-2">Tóm tắt đơn hàng</div>

			<v-table class="text-subtitle-2">
				<thead>
					<tr>
						<th class="text-left">MÔ TẢ</th>
						<th class="text-center">SỐ LƯỢNG</th>
						<th class="text-right">THÀNH TIỀN</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in desserts" :key="item.name">
						<td class="text-left">
							{{ item.name }}
						</td>
						<td class="text-center">
							{{ item.calories }}
						</td>
						<td class="text-right">
							{{ item.calories }}
						</td>
					</tr>
				</tbody>
			</v-table>
		</v-card>
		<v-card class="my-5">
			<v-list density="compact" class="py-0">
				<v-list-subheader class="bg-bglight pa-5 text-body-2">
					Hình thức thanh toán
				</v-list-subheader>
				<v-btn-toggle
					v-model="toggle"
					divided
					mandatory="force"
					class="flex-column w-100 h-auto"
				>
					<v-btn
						v-for="item in desserts"
						:key="item.name"
						:value="item.name"
						block
						height="40"
						class="justify-start"
					>
						<v-icon end class="mr-5">
							mdi-format-align-left
						</v-icon>
						{{ item.name }}
					</v-btn>
				</v-btn-toggle>
			</v-list>
		</v-card>
		<v-card class="my-5">
			<div class="bg-bglight pa-5 text-body-2">Thông tin cá nhân</div>
			<v-card-title>
				<v-text-field
					v-model="first"
					color="primary"
					label="Họ và tên"
					variant="underlined"
				></v-text-field>

				<v-text-field
					v-model="email"
					color="primary"
					label="Email"
					variant="underlined"
				></v-text-field>
				<v-text-field
					v-model="last"
					color="primary"
					label="Số điện thoại"
					variant="underlined"
				></v-text-field>
				<v-checkbox
					v-model="terms"
					color="secondary"
					label="Tạo tài khoản với email và số điện thoại này"
				></v-checkbox>
			</v-card-title>
		</v-card>
		<v-card>
			<v-card-text>
				Vé đã mua không thể đổi hoặc hoàn tiền.
				<br />
				Mã vé sẽ được gửi 01 lần qua số điện thoại và email đã nhập. Vui
				lòng kiểm tra lại thông tin trước khi tiếp tục.
			</v-card-text>
		</v-card>
		<router-link to="/seat-information">
			<v-btn block class="my-5" color="black"> Thanh toán </v-btn>
		</router-link>
	</div>
</template>
<script>
export default {
	data: () => ({
		terms: false,
		first: null,
		last: null,
		email: null,
		toggle: undefined,
		desserts: [
			{
				name: "Frozen Yogurt",
				calories: 159,
			},
			{
				name: "Ice cream sandwich",
				calories: 237,
			},
			{
				name: "Eclair",
				calories: 262,
			},
			{
				name: "Cupcake",
				calories: 305,
			},
			{
				name: "Gingerbread",
				calories: 356,
			},
		],
	}),
}
</script>
<style lang=""></style>
