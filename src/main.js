import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/styles/index.scss'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
app.use(VueAxios, axios)