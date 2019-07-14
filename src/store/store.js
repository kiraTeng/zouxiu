import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({

			state:{ 
				 phones:'',
                login:'',
				shopCarList:[],
				checkoutList:[],
				newAdd:false,
				userAddress:[],
				dliverTo:{},
				paymentPage:false,
				zhuce:'注册',
				denglu:'登录',
				isClick:true,
				showIt:false,
				pwd:''
			},
			mutations:{
				newAddCon(state){
					state.newAdd=!state.newAdd
				}
			}
		})

