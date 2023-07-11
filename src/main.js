import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tw-elements'
import axios from 'axios'
import VueAxios from 'vue-axios'

import '../node_modules/leaflet/dist/leaflet.css'
import '../node_modules/leaflet/dist/leaflet.js'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:8000/api' : 'https://api.rwsapuluhcipagalo.com/api'

app.mount('#app')
