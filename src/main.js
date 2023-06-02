import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import { menuLanguage, labelLanguage, butonLanguage, descriptionLanguage } from './language.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const app = createApp(App)

app.config.globalProperties.$hostname = "http://192.168.10.226:1880"
app.config.globalProperties.$menuLanguage = menuLanguage
app.config.globalProperties.$labelLanguage = labelLanguage
app.config.globalProperties.$butonLanguage = butonLanguage
app.config.globalProperties.$descriptionLanguage = descriptionLanguage
app.config.globalProperties.$languageCode = "TR"

app.config.globalProperties.$duruslar = [
    // Stop For Turkish -> Array ID:0
    [
        ["Çalıştır","10000"],
        ["Mola","150000"],
        ["Model Değişim","100000"],
        ["Arıza","220000"],
        ["Malzeme Yok","90000"],
        ["Sipariş Yok","170000"],
        ["Diğer Duruşlar","40000"]
    ],

    // Stop For English -> Array ID:1
    [
        ["Product","10000"],
        ["Break","150000"],
        ["Change Over","100000"],
        ["Technical Problem","220000"],
        ["No Material","90000"],
        ["No Order","170000"],
        ["Other Stops","40000"]
    ],
    
]


//app.config.globalProperties.$hostname = "http://localhost:1880"
app.use(router)

app.mount('#app')

  
