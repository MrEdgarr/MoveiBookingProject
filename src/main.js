/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue"
import "swiper/css"
import "./assets/index.scss"
// Composables
import { createApp } from "vue"

// Plugins
import { registerPlugins } from "@/plugins"

const app = createApp(App)

registerPlugins(app)

app.mount("#app")
