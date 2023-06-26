import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tw-elements'

import '../node_modules/leaflet/dist/leaflet.css'
import '../node_modules/leaflet/dist/leaflet.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
