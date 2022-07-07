import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './APP.vue'

createApp(App).use(router).use(createPinia()).mount('#app')
