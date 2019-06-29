import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
			state:{
				newAdd:false,
				userAddress:[],
				dliverTo:{}
			},
			mutations:{
				newAddCon(state){
					state.newAdd=!state.newAdd
				}
			}
		})