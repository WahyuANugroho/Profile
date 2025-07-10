import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import animateOnScroll from './directives/animateOnScroll'

const app = createApp(App)
app.use(router)
app.directive('animate-on-scroll', animateOnScroll)
app.mount('#app')
