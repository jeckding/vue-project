<template>
<router-link class="item" tag="div" :to="'/detail/' + data.id">
	<div class="item-container">
		<img :src="'/img/list/' + data.img" alt="">
		<div class="content">
			<h2>{{data.title}}</h2>
			<p>
				<span class="price">{{data.price + '元'}}</span>
				<span class="origin-price">门市价:{{data.originPrice}}元</span>
				<span class="sales">销量{{data.sales}}</span>
			</p>
		</div>
	</div>
</router-link>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
// 引入库文件
@import '../base.scss';
.item {
	padding: 10px;
	padding-bottom: 0;
	background: #fff;
	.item-container {
		border-bottom: 1px solid #ccc;
		display: flex;
		padding-bottom: 10px;
		img {
			width: 100px;
			height: 60.5px;
		}
		.content {
			flex: 1;
			padding-left: 10px;
			height: 60.5px;
		}
		h2 {
			height: 44px;
			font-size: 14px;
		}
		p {
			font-size: 12px;
			color: #666;
		}
		.sales {
			float: right;
		}
		.price {
			color: $navColor;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	// 子组件接收数据
	props: ['data'],
	// 数据
	// data() {
	// 	return {}
	// },
	// created() {
	// 	console.log(this)
	// }
}
</script>