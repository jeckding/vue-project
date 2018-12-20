// 引入vue和路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 第一步 安装
Vue.use(VueRouter);

// 第三步 定义页面组件
let Home = { template: '<h1>home page</h1>' }
let List = { template: '<h1>list page</h1>' }
let Detail = { template: '<h1>detail page</h1>' }

// 第四步 定义路由规则
let routes = [
	{ path: '/list/:id', component: List },
	{ path: '/detail/:id', component: Detail },
	{ path: '*', component: Home }
]

// 第五步 实例化路由
export default new VueRouter({ routes })