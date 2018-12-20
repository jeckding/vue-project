<template>
<div>
	<!-- 定义头部 -->
	<header>
		<div class="nav">
			<div class="goback" @click="goBack">
				<span class="arrow">
					<span class="arrow green"></span>
				</span>
			</div>
			<h1>爱创课堂团购网站</h1>
			<div class="login">登录</div>
		</div>
		<!-- 不是详情页显示搜索框 -->
		<div class="search" v-show="$route.fullPath.indexOf('/detail/') != 0">
			<input type="text" @keyup.enter="searchValue" v-model="search" placeholder="请输入搜索关键字">
		</div>
	</header>
	<!-- {{$store.state.search}} -->
	<!-- 第二步 定义路由渲染位置 -->
	<router-view></router-view>
</div>
</template>
<style type="text/css" lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
// 引入公用样式
@import './base.scss';
// 导航部分
.nav {
	background: $navColor;
	color: #fff;
	display: flex;
	height: 60px;
	line-height: 60px;
	text-align: center;
	.goback {
		width: 50px;
	}
	.login {
		width: 50px;
		font-size: 14px;
	}
	h1 {
		flex: 1;
		font-size: 24px;
	}
	.arrow {
		@include arrow(10px, #fff, right);
		position: relative;
		top: -3px;
		left: -10px;
		.green {
			position: absolute;
			top: -10px;
			left: -7px;
			border-right-color: $navColor;
		}
	}
}
// 搜索框
.search {
	background: #fff;
	padding: 10px 20px;
	display: flex;
	input {
		flex: 1;
		padding: 8px 20px;
		height: 20px;
		line-height: 20px;
		background: #efefef;
		border-radius: 18px;
		border: none;
		outline: none;
	}
}
</style>
<script>

export default {
	// 绑定数据
	data() {
		return {
			search: ''
		}
	},
	// 定义方法
	methods: {
		// 开始搜索
		searchValue() {
			// 发布消息
			this.$store.commit('updateSearch', this.search)
			// 清空输入框
			this.search = '';
		},
		// 返回上一个页面
		goBack() {
			history.go(-1)
		}
	}
	// 创建完成
	// mounted() {
	// 	console.log(this)
	// }
}
</script>

