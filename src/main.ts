// import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createSSRApp } from "vue";
import App from './App.vue'
import createRouter from './router';

export default function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    app.use(router)
    return { app, router }
}
