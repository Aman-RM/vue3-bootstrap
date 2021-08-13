import { createApp } from 'vue'
import router from '../src/router/index.js'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/sass/app.scss"

createApp(App).use(router).mount('#app')

