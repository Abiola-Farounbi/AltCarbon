import { createApp } from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'




window.axios = axios,
// axios.defaults.baseURL = 'http://127.0.0.1:3333'
AOS.init()


createApp(App).use(router).use(store).mount('#app')
