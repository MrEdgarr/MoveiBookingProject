// Composables
import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		component: () => import("@/layouts/default/Default.vue"),
		children: [
			{
				path: "",
				name: "Home",
				component: () => import("@/views/Home.vue"),
				// meta: {
				// 	title: "Trang chủ",
				// },
			},
			{
				path: "/movie/:id/:name",
				name: "movie.detail",
				component: () => import("@/views/movie-detail/MovieDetail.vue"),
				// meta: {
				// 	title: "Chi tiết phim",
				// },
			},
			{
				path: "/seat-booking",
				name: "seat.booking",
				component: () => import("@/views/seat-booking/index.vue"),
				// meta: {
				// 	title: "",
				// },
				children: [
					{
						path: "",
						name: "ORDER.BOOKING",
						component: () =>
							import("@/components/seat-booking/Seats.vue"),
					},
					{
						path: "/seat-checkout",
						name: "CHECKOUT.BOOKING",
						component: () =>
							import("@/components/seat-booking/Checkout.vue"),
					},
					{
						path: "/seat-information",
						name: "INFORMATION.BOOKING",
						component: () =>
							import("@/components/seat-booking/Information.vue"),
						meta: {
							Layout: () => import("@/layouts/default/View.vue"),
						},
					},
				],
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

//Tiêu đề trang động với Bộ định tuyến Vue 3
router.beforeEach((to, from, next) => {
	console.log(document.title)
	// document.title = `${to.meta.title}`
	document.title = "Cinema"
	next()
})
export default router
