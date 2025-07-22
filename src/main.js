import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())  // Pinia 등록
app.use(router)

app.mount('#app')
// mount(): 생성된 인스턴스를 화면에 부착
