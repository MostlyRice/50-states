import { createApp } from 'vue'
import App from './App.vue'

import stateAPIService from '@/services/stateService'

import router from '@/router'

import 'leaflet/dist/leaflet.css'

let app = createApp(App)

app.config.globalProperties.$stateService = stateAPIService 

app.use(router)

app.mount('#app')