<template>
	<div>
		<!-- 顶部开始 -->
		<nav>
			<div class="navConent clear">
				<ul class="navBarLeft">
					<li><span></span><a href="">首页</a></li>
					<li><span></span><a href="">创业指南</a></li>
					<li><a href="">商务合作(QQ):123456</a></li>
				</ul>
				<p><span></span>24小时咨询电话: 123456789121</p>
				<div class="navBarRight">
					<button><a href="">登录</a></button>
					<button><a href="">注册</a></button>
					<span></span><a href="">网站导航</a>
				</div>
			</div>
		</nav>
		<!-- 顶部结束 -->

		<!-- logo和搜索开始 -->
		<header class="clear">
			<!-- logo -->
			<div class="logo">
				<img src="../../static/images/logo.png" alt="我的图片">
				<p>招商招人快快过来吧</p>
			</div>
			<!-- 搜索 -->
			<div class="headerSearch">
				<div class="clear search">
					<input type="text" placeholder="输入查找的信息">
					<a href="#">搜索</a href="#">
				</div>
				<ul class="clear">
					<li><a href="">投资金额:</a></li>
					<li><a href="">1-3w</a></li>
					<li><a href="">3-5w</a></li>
					<li><a href="">5-10w</a></li>
					<li><a href="">1-3w</a></li>
					<li><a href="">3-5w</a></li>
					<li><a href="">5-10w</a></li>
				</ul>
			</div>
			<!-- 排行榜 -->
			<div class="headerPhb clear">
				<ul class="clear">
					<li><a href=""><span></span>
							<p>项目库</p>
						</a></li>
					<!-- <li>
						<router-link :to="{name: 'text2'}"><span></span>
							<p>测试1</p>
						</router-link>
					</li>
					<li>
						<router-link :to="{name: 'text'}"><span></span>
							<p>测试2</p>
						</router-link>
					</li> -->
				</ul>
			</div>
		</header>
		<!-- logo和搜索结束 -->

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
	
	.clear::after {
		content: '';
		clear: both;
		display: block;
		height: 0;
		visibility: hiddeh;
	}

	// nav开始
	nav {
		width: 100%;
		background: #d6d6d6;
		height: 30px;
		line-height: 30px;

		.navConent {
			min-width: $main-width;
			width: $main-width;
			height: 30px;
			line-height: 30px;
			margin: 0 auto;

			p {
				margin-left: 180px;
				font-size: 14px;
				float: left;

				span {
					background: url(../../static/images/bg.png) no-repeat;
					display: inline-block;
					width: 16px;
					height: 16px;
					background-position: -69px 1px;
				}
			}

			a {
				font-size: 14px;
			}

			.navBarLeft {
				li {
					float: left;
					margin-right: 15px;
					line-height: 30px;
					height: 30px;

					span {
						background: url(../../static/images/bg.png) no-repeat;
						width: 16px;
						height: 16px;
						display: inline-block;
					}

					&:nth-child(1) {
						span {
							background-position: 0 2px;
						}
					}

					&:nth-child(2) {
						span {
							background-position: -20px 2px;
						}
					}

					a {
						color: #6f6f6f;
					}
				}
			}

			.navBarRight {
				float: right;
				background: pink;
				height: 30px;
				line-height: 30px;

				button {
					&:nth-child(1) {
						background: #fa431b;
					}

					&:nth-child(2) {
						background: #17a3fb;
					}

					a {
						color: #fff;
					}

					+a {
						padding-left: 33px;
					}
				}
			}
		}

	}

	// nav结束

	// header开始
	header {
		min-width: $main-width;
		width: $main-width;

		margin: 0 auto;
		padding-top: 26px;
		margin-bottom: 26px;
		;

		.logo {
			float: left;

			img {
				display: inline-block;
				width: 200px;
				height: 50px;
			}
		}

		.headerSearch {
			float: left;
			margin-left: 122px;

			.search {

				input,
				>a {
					background: #fff;
					border: 1px solid $main-color;
					height: 40px;
					line-height: 40px;
					display: inline-block;
					padding: 0;
					float: left;
				}

				input {
					width: 360px;
					padding-left: 105px;
				}

				>a {
					border: 1px solid $main-color;
					width: 104px;
					background: $main-color;
					color: #fff;
					text-align: center;
				}
			}

			ul {
				background: #fff;
				margin-top: 10px;

				li {
					float: left;
					margin-right: 12px;

					a {
						color: #737373;
					}
				}
			}
		}

		.headerPhb {
			float: right;
			// background: yellow;

			ul {

				li {
					float: left;

					a {
						display: inline-block;
						margin-right: 12px;

						span {
							width: 31px;
							height: 31px;
							display: inline-block;
							background: green;
							margin: 0 12px;
						}

						p {
							text-align: center;
							font-size: 14px;
							color: $main-color;
						}
					}

					&:nth-child(1) {
						span {
							background: url(../../static/images/bg.png) no-repeat;
							background-position: 0 -53px;
						}
					}

					&:nth-child(2) {
						span {
							background: url(../../static/images/bg.png) no-repeat;
							background-position: 0 -60px;
						}
					}

					&:nth-child(3) {
						span {
							background: url(../../static/images/bg.png) no-repeat;
							background-position: 0 -53px;
						}
					}
				}

			}
		}
	}

	// header结束
</style>
