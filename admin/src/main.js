import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import http from './http' //封装http请求
Vue.prototype.$http = http;

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Avue)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')