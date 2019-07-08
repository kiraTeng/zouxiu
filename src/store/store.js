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
			},
			mutations:{
				newAddCon(state){
					state.newAdd=!state.newAdd
				}
			}
		})

