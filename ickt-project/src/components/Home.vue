<template>
<div>
	<!-- icons模块 -->
	<ul class="home-icons">
		<router-link v-for="(item, index) in icons" :key="index" tag="li" :to="'/list/' + item.id">
			<img :src="'/img/icon/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 广告模块 -->
	<ul class="home-ad">
		<router-link v-for="(item, index) in ad" :key="index" :to="'/detail/' + item.id" tag="li">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'/img/ad/' + item.url" alt="">
		</router-link>
	</ul>
	<!-- 猜你喜欢 -->
	<div class="home-guess">
		<div class="guess-title">猜你喜欢</div>
		<!-- 循环创建组件 -->
		<Item v-for="(item, index) in list" :key="index" :data="item"></Item>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
@import '../base.scss';
.home-icons {
	@include clearfix;
	padding: 10px 0;
	background: #fff;
	li {
		float: left;
		width: (100%/5);
		text-align: center;
		img {
			width: 60%;
		}
		p {
			font-size: 12px;
			padding: 5px 0 10px;
		}
	}
}
.home-ad {
	display: flex;
	text-align: center;
	background: #fff;
	margin-top: 10px;
	li {
		flex: 1;
		border-right: 1px solid #ccc;
		padding: 15px 0;
		&:last-child {
			border-right: none;
		}
	}
	h3 {
		font-size: 14px;
	}
	p {
		color: #666;
		font-size: 12px;
		padding: 4px 0 8px;
	}
	img {
		width: 60%;
	}
	$i: 0;
	@each $item in red, green, purple {
		.color-#{$i} {
			color: $item;
		}
		// 更改索引值
		$i: $i + 1;
	}
}
.home-guess {
	background: #fff;
	margin-top: 10px;
	.guess-title {
		padding: 0 10px;
		border-bottom: 1px solid #ccc;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Item from './Item.vue';
export default {
	// 注册组件
	components: { Item },
	// 数据
	data() {
		return {
			icons: [
				{ img: '01.png', text: '美食', id: '1' },
				{ img: '02.png', text: '电影', id: '2' },
				{ img: '03.png', text: '酒店', id: '3' },
				{ img: '04.png', text: '休闲', id: '4' },
				{ img: '05.png', text: '外卖', id: '5' },
				{ img: '06.png', text: 'ktv', id: '6' },
				{ img: '07.png', text: '周边游', id: '7' },
				{ img: '08.png', text: '丽人', id: '8' },
				{ img: '09.png', text: '小吃', id: '9' },
				{ img: '10.png', text: '火车票', id: '10' }
			],
			// 预定义数据
			ad: [],
			list: []
		}
	},
	// 组件创建完成时候，请求数据
	created() {
		// 请求数据
		this.$http
			.get('/data/home.json')
			// 监听返回
			.then(({ data }) => {
				// console.log(data)
				// 存储数据
				this.ad = data.ad;
				this.list = data.list;
				// console.log(this)
			})
	}
}
</script>