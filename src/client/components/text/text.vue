<template>
	<div>
		<!-- 用来测试和写demo的 -->
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">1</el-menu-item>
			<el-submenu index="2">
				网站导航
				<ul class="netNavLists">
					<li class="netNavList">
						<div class="netNavListDiv">
							<span></span>
							<h2>餐饮</h2>
							<span></span>
						</div>
						<div class="smallList">
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
							<a href="" title="帽">火锅</a>
						</div>
					</li>
				</ul>
			</el-submenu>
		</el-menu>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" menu-trigger="click">
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

<style>
	.el-menu.el-menu--popup-bottom-start {
		/*ul层*/
		min-width: 1200px;
		margin: 0 auto;
		background: yellow;

		/* li {
		background: green;
	} */
		ul.netNavLists {
			width: 264px;
			background: pink;
		}
	}
</style>
