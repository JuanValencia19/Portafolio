import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import emailjs from '@emailjs/browser'

const app = createApp(App)
app.use(router)
app.mount('#app')

emailjs.init("m2aIH9pUMDWzvc1w9")