import { createApp } from 'vue'
import router from '../src/router/index.js'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
// import '../node_modules/bootstrap/scss/_variables.scss'
import "bootstrap"

createApp(App).use(router).mount('#app')

