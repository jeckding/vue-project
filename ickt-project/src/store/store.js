// 引入模块
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 第一步 安装vuex
Vue.use(Vuex);

// 第二步 创建store并传递各个模块
export default new Store({
	// 数据
	state: {
		search: ''
	},
	// 同步消息
	mutations: {
		// 更新search的方法
		updateSearch(state, value) {
			state.search = value;
		}
	}
})
