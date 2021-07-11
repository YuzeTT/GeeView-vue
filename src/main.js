import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import 'eva-icons/style/eva-icons.css'
// import * as eva from 'eva-icons'
// import installElementPlus from './plugins/element'
import geeviewConfig from './geeview.config';
import axios from 'axios'

const app = createApp(App)
axios.defaults.baseURL = geeviewConfig.api.baseURL
app.config.globalProperties.$gwConfig = geeviewConfig
app.config.globalProperties.$axios = axios

// installElementPlus(app)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')