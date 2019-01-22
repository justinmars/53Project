<template>
	
	<!-- 这是菜单组件 -->
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

	.topBarList {
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: $main-color;

		.topBarListContainer {
			width: 1200px;
			min-width: 1200px;
			height: 100%;
			margin: 0 auto;
			background: $main-color;
			border-bottom: none;

			li {
				width: 130px;
				height: 40px;
				line-height: 40px;
				font-size: 16px;
				color: #fff;
				border-bottom: none;

				&:hover {
					background: #eb0505;
					color: #fff;
				}
			}
		}
	}
</style>
