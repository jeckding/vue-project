// 引入vue和路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 页面组件
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Detail from '../components/Detail.vue';
import pay from '../components/pay.vue';

// 第一步 安装
Vue.use(VueRouter);

// 第三步 定义页面组件
// let Home = { template: '<h1>home page</h1>' }
// let List = { template: '<h1>list page</h1>' }
// let Detail = { template: '<h1>detail page</h1>' }

// 第四步 定义路由规则
let routes = [
	{ path: '/list/:id', component: List },
	{ path: '/detail/:id', component: Detail },
	{ path: '/pay/:id', component: pay },
	{ path: '*', component: Home }
]

// 第五步 实例化路由
// export default new VueRouter({ routes })
let router = new VueRouter({ routes })

// 全局监听路由的变化
// router.beforeEach((route, oldRoute, next) => {
// 	// console.log(arg)
// 	// 执行next方法。进入新的页面
// 	next();
// })

export default router;