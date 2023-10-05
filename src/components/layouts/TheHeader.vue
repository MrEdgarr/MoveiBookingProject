<template>
	<v-app-bar :elevation="5" class="px-sm-5">
		<template v-slot:prepend>
			<v-app-bar-nav-icon
				class="hidden-md-and-up"
				@click="drawer = !drawer"
			></v-app-bar-nav-icon>
		</template>
		<v-spacer class="hidden-md-and-up"></v-spacer>
		<router-link to="/">
			<v-img
				src="../../../public/images/1.png"
				height="50"
				min-width="150"
				max-width="150"
				class="text-center"
			>
			</v-img>
		</router-link>

		<v-spacer></v-spacer>
		<v-btn-group class="hidden-sm-and-down" color="transparent">
			<v-btn v-for="[icon, text] in links" :key="text">
				{{ text }}
			</v-btn>
		</v-btn-group>
		<v-spacer class="hidden-sm-and-down"></v-spacer>

		<v-btn variant="outlined"> SIGN IN</v-btn>
	</v-app-bar>
	<v-navigation-drawer v-model="drawer" temporary>
		<v-sheet color="grey-lighten-4" class="pa-4 text-center">
			<v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

			<div>john@google.com</div>
		</v-sheet>

		<v-divider></v-divider>

		<v-list>
			<v-list-item v-for="[icon, text] in links" :key="icon" link>
				<template v-slot:prepend>
					<v-icon>{{ icon }}</v-icon>
				</template>

				<v-list-item-title>{{ text }}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
import { ref } from "vue"

export default {
	data: () => ({
		drawer: null,
		links: ["Lịch chiếu", "Cụm rạp", "Tin Tức"],
		items: [
			{ title: "Dang nhap", icon: "mdi-account-plus" },
			{ title: "Dang ky", icon: "mdi-login" },
		],
		cards: ["Today", "Yesterday"],
		links: [
			["mdi-inbox-arrow-down", "Lịch chiếu"],
			["mdi-send", "Cụm rạp"],
			["mdi-delete", "Tin Tức"],
		],
	}),
}
</script>
<style lang="scss"></style>
