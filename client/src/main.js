import { createApp } from 'vue'
import App from './App.vue'

import stateAPIService from '@/services/stateService'

let app = createApp(App)

app.config.globalProperties.$stateService = stateAPIService 

app.mount('#app')