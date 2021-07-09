import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import 'eva-icons/style/eva-icons.css'
// import * as eva from 'eva-icons'
// import installElementPlus from './plugins/element'

const app = createApp(App)
// installElementPlus(app)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')