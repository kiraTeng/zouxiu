import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
	//登录的时候首页存储用户名
	state: {
       phones:'',
       login:''
	}
	/*mutations: {
		getUser(state,usrname) {
			state.usrname = usrname
		}
	}*/
})