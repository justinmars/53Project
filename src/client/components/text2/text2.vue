<template>
	<div>
		<!-- 用来测试和写demo的 -->
		<h1>注册组件</h1>
		<!-- <telBar></telBar>
		<div class="topBarList">
			<el-menu :default-active="activeIndex" class="el-menu-demo topBarListContainer" mode="horizontal" @select="handleSelect"
			 menu-trigger="click">
				<el-menu-item index="1">处理中心</el-menu-item>
				<el-menu-item index="2">我的工作台</el-menu-item>
				<el-menu-item index="3">消息中心</el-menu-item>
				<el-menu-item index="4">订单管理</el-menu-item>
				<el-menu-item index="5">我的工作台</el-menu-item>
				<el-menu-item index="6">我的工作台</el-menu-item>
				<el-menu-item index="7">我的工作台</el-menu-item>
			</el-menu>
		</div> -->
		
		<div class="box upward">
			<p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
		</div>
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
	@import '../../static/css/main.scss'; //导入scss样式文件
	.box {
		background: green;
		width: 500px;
		height: 300px;
		margin: 50px auto;
		border: 2px solid yellow;
	}
	.upward {
		transition: all 0.3s linear;
		-webkit-transition: all 0.3s linear;
	}
	.upward:hover{
		box-shadow: 5px 5px 5px #d4d4d4;
		-webkit-box-shadow: 5px 5px 5px #d4d4d4;
		transform: translateY(-5px);
		-webkit-transform: translateY(-5px);
	}
// 	.topBarList {
// 		width: 100%;
// 		height: 40px;
// 		line-height: 40px;
// 		background: $main-color;
// 
// 		.topBarListContainer {
// 			width: 1200px;
// 			min-width: 1200px;
// 			height: 100%;
// 			margin: 0 auto;
// 			background: $main-color;
// 			border-bottom: none;
// 
// 			li {
// 				height: 40px;
// 				line-height: 40px;
// 				font-size: 16px;
// 				color: #fff;
// 				border-bottom: none;
// 
// 				&:hover {
// 					background: #eb0505;
// 					color: #fff;
// 				}
// 			}
// 		}
// 	}
</style>
