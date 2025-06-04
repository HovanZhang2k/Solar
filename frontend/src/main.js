import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入全局样式
import './assets/styles/global.css'

const app = createApp(App)

// 使用路由
app.use(router)
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
