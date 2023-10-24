// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'chart.js'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(VueApexCharts)

app.use(router)

app.mount('#app')
