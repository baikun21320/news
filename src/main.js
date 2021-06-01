import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueScroller from "vue-scroller/src";
import FastClick from 'fastclick'
import Vant from "vant"
import "vant/lib/index.css"
import ElementUI from 'element-ui';
import axios from "axios"
import 'swiper/dist/css/swiper.css'
import store from "./store";
Vue.use(VueAwesomeSwiper)
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.use(VueScroller)
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//解决移动端300ms延迟
FastClick.attach(document.body)

import APP from './network/apl/index'
Vue.prototype.$APP = APP;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
