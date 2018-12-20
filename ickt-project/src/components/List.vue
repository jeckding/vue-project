<template>
<div>
	<ul class="list-orders">
		<li v-for="(item, index) in orders" :key="index" @click="listOrder(item.id)">
			<span class="title">{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<!-- 创建商品 -->
	<Item v-for="(item, index) in dealList" :key="index" :data="item"></Item>
	<!-- 加载更多 -->
	<div class="list-loadmore" @click="showOther" v-show="others.length">
		<span class="title">查看其它{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
@import '../base.scss';
.list-orders {
	display: flex;
	text-align: center;
	background: #fff;
	li {
		flex: 1;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		height: 30px;
		line-height: 30px;
		&:last-child {
			border-right: none;
		}
	}
	.title {
		font-size: 12px;
		color: #666;
	}
	.arrow {
		@include arrow(4px);
		position: relative;
		top: -2px;
		left: 2px;
	}
}
.list-loadmore {
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-bottom: 1px solid #ccc;
	background: #fff;
	.title {
		color: $navColor;
		font-size: 16px;
	}
	.arrow {
		@include arrow(8px, $navColor);
		position: relative;
			top: 0px;
			left: 6px;
		.white {
			border-top-color: #fff;
			position: absolute;
			top: -10px;
			left: -8px;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Item from './Item.vue';
// 组件
export default {
	// 注册组件
	components: { Item },
	// 绑定的数据
	data() {
		return {
			// 排序按钮
			orders: [
				{ text: '价格排序', id: 'price' },
				{ text: '销量排序', id: 'sales' },
				{ text: '好评排序', id: 'evaluate' },
				{ text: '优惠排序', id: 'discount' }
			],
			list: [],
			// 备份数据
			others: []
		}
	},
	// 计算属性数据
	computed: {
		// 用搜索词过滤列表
		dealList() {
			// return this.list.filter(item => {
			// 	return item.title.indexOf(this.$store.state.search) >= 0;
			// })
			// 只有一句话省略函数体
			return this.list.filter(item => item.title.indexOf(this.$store.state.search) >= 0)
		}
	},
	// 定义方法
	methods: {
		// 展示其它数据
		showOther() {
			// 拼凑数据
			this.list = this.list.concat(this.others);
			// 清空备份数据
			this.others = [];
		},
		// 列表排序
		listOrder(id) {
			// 优惠是原价减去现价
			if (id === 'discount') {
				return this.list.sort((a, b) => {
					// 优惠是原价减去现价
					// a的优惠 a.originPrice - a.price
					// b的优惠 b.originPrice - b.price
					// return (a.originPrice - a.price) - (b.originPrice - b.price)
					// 降序
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				})
			} 
			// else {
			// 	// console.log(id)
			// 	// 根据id，对list数据排序
			// 	this.list.sort((a, b) => {
			// 		// 根据a与b两个数据中，id字段排序
			// 		// return a[id] - b[id]
			// 		// 倒序
			// 		return b[id] - a[id]
			// 	})
			// }
			// console.log(id)
			// 根据id，对list数据排序
			this.list.sort((a, b) => {
				// 根据a与b两个数据中，id字段排序
				// return a[id] - b[id]
				// 倒序
				return b[id] - a[id]
			})
		}
	},
	// 请求数据
	created() {
		// 发送get请求
		this.$http
			.get(`/data/list.json?id=${this.$route.params.id}`)
			// 监听返回
			.then(({ data }) => {
				// this.list = data
				// 默认存储3条数据
				this.list = data.slice(0, 3);
				// 剩下的备份
				this.others = data.slice(3);
			})
		// console.log(this)
	}
}
</script>