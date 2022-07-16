import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Particles from 'particles.vue3'
import router from './router'
import App from './APP.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { registerIcon, importAllSvg } from '@/icons'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
importAllSvg()
registerIcon(app)
app.use(Particles)
app.use(router).use(createPinia()).mount('#app')
