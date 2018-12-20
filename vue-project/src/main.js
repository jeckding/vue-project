import Vue from 'vue'
// 引入路由
import router from './router/router.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	// 第六步 注册路由
	router,
	render: h => h(App)
}).$mount('#app')
