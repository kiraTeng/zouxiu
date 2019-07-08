// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import VueLazyload from 'vue-lazyload'  //图片懒加载
Vue.use(VueLazyload, {
  preload:1.3,//预加载的宽高
  loading:require('./assets/female/1548324684777.jpg'),
  error:"img加载失败时现实的图片的路径",
})

/*瀑布流*/
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

/*绘制验证码*/
import SIdentify from './components/identify'
Vue.use(SIdentify)
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
