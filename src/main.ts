import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"
import { Button } from 'ant-design-vue'

const app = createApp(App).use(store).use(router)

app.use(Button)


app.mount('#app');
