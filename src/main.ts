import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Svg 插件配置代码
import 'virtual:svg-icons-register'

// 注册Svg为全局组件
import SvgIcon from './components/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)

app.mount('#app')
