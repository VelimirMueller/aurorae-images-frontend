import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/tailwind.css'
import './assets/keyframes.scss'
// Add more globally available css files here ...

const app = createApp(App)

app.use(createPinia())
// Add more plugins here ...
app.mount('#app')
