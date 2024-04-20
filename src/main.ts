import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Svg 插件配置代码
import 'virtual:svg-icons-register'

// 注册Svg为全局组件
// import SvgIcon from './components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)

// 使用批量注册全局组件的插件
import globalComponents from './components/index'
app.use(globalComponents)

app.mount('#app')
