import Vue from 'vue'
// 引入路由
import router from './router/router.js'
// 引入store
import store from './store/store.js';
// 引入axios
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false

// 安装axios
Vue.prototype.$http = axios;

new Vue({
	// 第六步 注册路由
	router,
	// 第三步 注册store
	store,
	render: h => h(App)
}).$mount('#app')
