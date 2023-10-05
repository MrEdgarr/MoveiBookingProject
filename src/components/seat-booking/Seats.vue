<template>
	<div>
		<div>
			<div class="legend">
				<div>
					<span class="seat-area-4"></span>
					<p>Ghế bạn chọn</p>
				</div>
				<div>
					<span class="seat-area-5"></span>
					<p>Không thể chọn</p>
				</div>
				<div>
					<span class="seat-area-6"></span>
					<p>Đã bán</p>
				</div>
			</div>
		</div>
		<span
			class="text-center text-subtitle-2 font-weight-bold bg-greyDark d-block py-1 ml-9 mb-2"
		>
			MÀN HÌNH
		</span>
		<div class="seats-wrapper-parent pb-2">
			<div class="seats-wrapper">
				<div class="seats">
					<ul
						class="seat-row"
						v-for="rowChair in rowChairs"
						::key="rowChair"
					>
						<li class="rowname">
							{{ rowChair }}
						</li>
					</ul>
				</div>
				<div class="seats w-100">
					<ul class="seat-row" v-for="n in 9">
						<li
							v-for="m in 12"
							@click="handleSelect($event)"
							:class="m > 4 ? 'taken' : ''"
						>
							{{ m }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		rowChairs: [],
	}),
	methods: {
		fromCharCode() {
			for (let i = 65; i <= 73; i++) {
				this.rowChairs = [...this.rowChairs, String.fromCharCode(i)]
			}
		},
		handleSelect(e, row, col) {
			if (e.target.classList == "taken") {
				return
			}
			e.target.classList.toggle("selected")
		},
	},
	mounted() {
		this.fromCharCode()
	},
}
</script>
<style lang="scss"></style>
