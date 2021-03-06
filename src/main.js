import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueWechatTitle from 'vue-wechat-title'

createApp(App).use(router).use(store).use(VueWechatTitle).mount('#app')
//路由守卫
