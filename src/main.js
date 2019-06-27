// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import VueLazyload from 'vue-lazyload'  //图片懒加载


/*瀑布流*/
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)


import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper) //插件图片左右滑动

Vue.config.productionTip = false
import {store} from '@/store/store.js'
/* eslint-disable no-new */
import axios from 'axios'
Vue.prototype.$axios=axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
	store
})
