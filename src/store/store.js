import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
			state:{ 
				shopNum:'',//购物车总数量
				isNum:false,//购物车数量显示隐藏
				phones:'',
                login:'',
                innersize:[],
				shopCarList:[],
				checkoutList:[],
				newAdd:false,
				userAddress:[],
				dliverTo:{},
				paymentPage:false,
			},
			mutations:{
				newAddCon(state){
					state.newAdd=!state.newAdd
				}
			}
		})

