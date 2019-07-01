import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import New from '@/pages/new/new'
import Female from '@/pages/female/female'
import Male from '@/pages/male/male'
import Brand from '@/pages/brand/brand'
import Register from '@/pages/register/register'
import Login from '@/pages/login/login'
import Cart from '@/pages/cart/cart'
import Checkout from '@/pages/checkout/checkout'
import Pay from '@/pages/pay/pay'
import Detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
		{
			path:'/home',
			name:'home',
			component:Home
		},
		{
			path:'/new',
			name:'new',
			component:New
		},
		{
			path:'/brand',
			name:'brand',
			component:Brand
		},
		{
			path:'/female',
			name:'female',
			component:Female
		},
		{
			path:'/male',
			name:'male',
			component:Male
		},
		{
			path:'/register',
			name:'register',
			component:Register
		},
		{
			path:'/login',
			name:'login',
			component:Login
		},
		{
			path:'/cart',
			name:'cart',
			component:Cart
		},
		{
			path:'/checkout',
			name:'checkout',
			component:Checkout
		},
		{
			path:'/pay',
			name:'pay',
			component:Pay
		},
		{
			path:'/detail',
			name:'detail',
			component:Detail
		}
  ]
})
