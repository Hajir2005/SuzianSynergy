import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'


// Router
import { Router } from './router';


const app = createApp(App);
app.use(Vue3Lottie);
app.use(Router);

app.mount('#app');

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LottieAnimation: typeof import('vue3-lottie')['Vue3Lottie']
  }
}
export {}
