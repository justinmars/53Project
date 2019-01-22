<template>
	<div>
		<!-- 头部区域 -->
		<header-bar></header-bar>
		
		<!-- 主导航开始 -->
		<div class="topBar">
			<div class="topBarContainer">
				<el-menu :default-active="activeIndex" class="el-menu-demo topBarTop" mode="horizontal" @select="handleSelect" menu-trigger="click">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-menu-item index="2">我的工作台</el-menu-item>
					<el-menu-item index="3">消息中心</el-menu-item>
					<el-menu-item index="4">订单管理</el-menu-item>
					<el-menu-item index="5">我的工作台</el-menu-item>
					<el-menu-item index="6">我的工作台</el-menu-item>
					<el-menu-item index="7">我的工作台</el-menu-item>
				</el-menu>
				<el-menu :default-active="activeIndex" class="el-menu-demo topBarMine">
					<el-menu-item index="1"><router-link :to="{name: 'tradeListBar'}" tag="a">餐饮</router-link></el-menu-item>
					<el-menu-item index="2">母婴</el-menu-item>
					<el-menu-item index="3">零售</el-menu-item>
					<el-menu-item index="4">服装</el-menu-item>
					<el-menu-item index="5">教育</el-menu-item>
					<el-menu-item index="6">建材</el-menu-item>
					<el-menu-item index="7">服务</el-menu-item>
					<el-menu-item index="2">游乐</el-menu-item>
					<el-menu-item index="3">珠宝礼品</el-menu-item>
					<el-menu-item index="4">美容</el-menu-item>
					<el-menu-item index="5">家居</el-menu-item>
					<el-menu-item index="6">环保</el-menu-item>
					<el-menu-item index="7">金融</el-menu-item>
				</el-menu>
			</div>
		</div>
		<!-- 主导航结束 -->

		<!-- 轮播图区域开始 -->
		<div class="lbBar">
			<!-- 分类 -->
			<div></div>
			<!-- 轮播图 -->
			<el-carousel indicator-position="inside" height="468px">
				<el-carousel-item v-for="item in 4" :key="item">
					<img src="../../static/images/baojia_banner.jpg" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 轮播图区域结束 -->
		
		<!-- 广告区域开始 -->
		<div class="adv clear">
			<div class="advBox clear">
				<div class="advLeft">
					<h2>25世纪学习吧</h2>
					<p>20-50w</p>
					<p>诚邀加盟共赢未来</p>
				</div>
				<div class="advRight enlarge">
					<img src="../../static/images/bady.jpg" alt="">
				</div>
			</div>
			<div class="advBox clear">
				<div class="advLeft">
					<h2>25世纪学习吧</h2>
					<p>20-50w</p>
					<p>诚邀加盟共赢未来</p>
				</div>
				<div class="advRight enlarge">
					<img src="../../static/images/bady.jpg" alt="">
				</div>
			</div>
			<div class="advBox clear">
				<div class="advLeft">
					<h2>25世纪学习吧</h2>
					<p>20-50w</p>
					<p>诚邀加盟共赢未来</p>
				</div>
				<div class="advRight enlarge">
					<img src="../../static/images/bady.jpg" alt="">
				</div>
			</div>
		</div>
		<!-- 广告区域结束 -->
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import '../../static/css/main.scss';//导入scss样式文件

	//主导航开始
	.el-menu.el-menu--horizontal {
		border-bottom: solid 2px $main-color;
	}

	.topBar {
		width: 100%;
		background: $main-color;
		position: relative;
		
		.topBarContainer {
			width: $main-width;
			height: 40px;
			line-height: 40px;
			margin: 0 auto;
			background-color: $main-color;
			
			.topBarTop {
				background-color: $main-color;
				border-bottom: none;
				
				li {
					width: 130px;
					height: 40px;
					line-height: 40px;
					border-bottom: 0;
					text-align: center;
					color: #fff;
					&:hover	{
						background-color: #eb0505;
					}
					&:nth-child(1) {
						background-color: #333;
					}
				}
			}
			
			.topBarMine {
				clear: both;
				background: #666;
				width: 130px;
				position: absolute;
				border-right: none;
				z-index: 999;
				
				li {
					height: 36px;
					line-height: 36px;
					color: #fff;
					
					&:hover	{
						background-color: #919191;
					}
					a {
						color: #fff;
					}
				}
			}
		}
// 		
// 		.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
// 				outline: 0;
// 				color: #fff;
// 				background: #919191;
// 		}
	}

	//主导航结束

	//轮播开始
	el-carousel {
		el-carousel-item {
			text-align: center;
			transform: translateX(50%);

			img {
				width: 100%;
				height: 468px;
				display: inline-block;
			}
		}
	}

	//轮播结束
	
	// 广告区域开始
	.adv {
		width: $main-width;
		min-width: $main-width;
		margin: 20px auto;
		background: pink;
		
		.advBox {
			float: left;
			width: 390px;
			height: 140px;
			margin-right: 15px;
			background-color: pink;
			
			&:last-child {//最后一块，去掉右边的外边距
				background-color: yellow;
				margin-right: 0;
			}
			.advLeft{
				float: left;
				width: 140px;
				height: 100%;
				text-align: center;
				color: #fff;
				
				h2 {
					margin: 20px 7px 0 7px;
					font-size: 16px;
					height: 32px;
					line-height: 32px;
				}
				p {
					&:nth-child(2) {
						height: 32px;
						line-height: 32px;
						margin: 0 7px;
						border-bottom: 2px solid #fff;
					}
					&:nth-child(3) {
						height: 32px;
						line-height: 32px;
						margin: 0 7px;
						font-size: 14px;
					}
				}
			}
			.advRight {
				float: left;
				width: 250px;
				height: 100%;
				overflow: hidden;
				
				img {
					width: 100%;
					height: 100%;
					display: inline-block;
				}
			}
			&:nth-child(1) {
				.advLeft {
					background: #1b328d;
				}
			}
			&:nth-child(2) {
				.advLeft {
					background: #ef7d05;
				}
			}
			&:nth-child(3) {
				.advLeft {
					background: #06a7e2;
				}
			}
		}
	}
	// 广告区域结束
</style>
