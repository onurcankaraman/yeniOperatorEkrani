import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)

//app.config.globalProperties.$hostname = "http://192.168.10.226:1880"
app.config.globalProperties.$hostname = "http://localhost:1880"
app.use(router)

app.mount('#app')

  
