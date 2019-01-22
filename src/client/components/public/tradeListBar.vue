<template>
	<div>
		<!-- 这是品牌列表的组件 -->

		<header-bar></header-bar>
		<!--公共头部-->
		<top-list></top-list>
		<!--与首页不同的导航-->
		<!-- 面包屑导航开始 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">加盟网</el-breadcrumb-item>
			<el-breadcrumb-item>加盟项目</el-breadcrumb-item>
			<el-breadcrumb-item>餐饮加盟</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 面包屑导航结束 -->

		<!-- 行业分类  自己写的问题： 1.根据路由进入时，怎么选择相应的选项？ -->
		<div class="classNav">
			<div class="classNavItem clear">
				<div class="name">行业分类:</div>
				<ul class="clear">
					<li><a href="#">不限</a></li>
					<li class="active"><a href="#">餐饮</a></li>
					<li><a href="#">母婴</a></li>
					<li><a href="#">零食</a></li>
					<li><a href="#">服装</a></li>
					<li><a href="#">教育</a></li>
					<li><a href="#">建材</a></li>
					<li><a href="#">服务</a></li>
					<li><a href="#">游乐</a></li>
					<li><a href="#">珠宝礼品</a></li>
					<li><a href="#">美容</a></li>
					<li><a href="#">家居</a></li>
					<li><a href="#">环保</a></li>
					<li><a href="#">金融</a></li>
				</ul>
			</div>
			<div class="classNavItem clear">
				<div class="name">行业子分类:</div>
				<ul class="clear">
					<li><a href="#">西餐</a></li>
					<li><a href="#">火锅</a></li>
					<li><a href="#">烧烤</a></li>
					<li><a href="#">甜品</a></li>
					<li><a href="#">火锅鱼</a></li>
					<li><a href="#">蟹煲</a></li>
					<li><a href="#">奶茶</a></li>
					<li><a href="#">牛排杯</a></li>
					<li><a href="#">烤鱼</a></li>
					<li><a href="#">酸菜鱼</a></li>
					<li><a href="#">炸鸡</a></li>
					<li><a href="#">小吃</a></li>
					<li><a href="#">饮品</a></li>
					<li><a href="#">快餐</a></li>
					<li><a href="#">麻辣烫</a></li>
					<li><a href="#">米粉米线</a></li>
					<li><a href="#">茶馆</a></li>
					<li><a href="#">馄饨</a></li>
					<li><a href="#">冒菜</a></li>
					<li><a href="#">汉堡</a></li>
					<li><a href="#">外卖便当</a></li>
					<li><a href="#">西餐</a></li>
					<li><a href="#">火锅</a></li>
					<li><a href="#">烧烤</a></li>
					<li><a href="#">甜品</a></li>
					<li><a href="#">火锅鱼</a></li>
					<li><a href="#">蟹煲</a></li>
					<li><a href="#">奶茶</a></li>
					<li><a href="#">牛排杯</a></li>
					<li><a href="#">烤鱼</a></li>
					<li><a href="#">酸菜鱼</a></li>
					<li><a href="#">炸鸡</a></li>
					<li><a href="#">小吃</a></li>
					<li><a href="#">饮品</a></li>
					<li><a href="#">快餐</a></li>
					<li><a href="#">麻辣烫</a></li>
					<li><a href="#">米粉米线</a></li>
					<li><a href="#">茶馆</a></li>
					<li><a href="#">馄饨</a></li>
					<li><a href="#">冒菜</a></li>
					<li><a href="#">汉堡</a></li>
					<li><a href="#">外卖便当</a></li>
				</ul>
			</div>
			<div class="classNavItem clear">
				<div class="name">投资金额:</div>
				<ul class="clear">
					<li><a href="#">不限</a></li>
					<li><a href="#">1万以下</a></li>
					<li><a href="#">1-3万</a></li>
					<li><a href="#">5-10万</a></li>
					<li><a href="#">10-20万</a></li>
					<li><a href="#">20万-50万</a></li>
					<li><a href="#">50万-100万</a></li>
				</ul>
			</div>
		</div>
		
		<!-- 热门推荐开始 -->
		<div class="main">
			<div class="mainTit">
				<span></span>
				<h2>餐饮热门推荐排行榜</h2>
			</div>
			<div class="mainBox clear">
				<div class="mainBoxLeft">
					<div class="mainAdv">
						<ul class="clear">
							<li><a href=""><img src="../../static/images/adv2.jpg" alt=""><p>西餐厅</p></a></li>
							<li><a href=""><img src="../../static/images/adv1.jpg" alt=""><p>咖啡</p></a></li>
							<li><a href=""><img src="../../static/images/adv2.jpg" alt=""><p>西餐厅</p></a></li>
							<li><a href=""><img src="../../static/images/adv1.jpg" alt=""><p>咖啡</p></a></li>
							<li><a href=""><img src="../../static/images/adv2.jpg" alt=""><p>西餐厅</p></a></li>
						</ul>
					</div>
					<div class="hotLists">
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
						<div class="hotList upward clear">
							<div class="hotImg"><a href=""><img src="../../static/images/hot2.jpg" alt=""></a></div>
							<div class="hotIntro">
								<div class="hotTit"><h2><a href="">大盘鸡</a></h2></div>
								<p>功夫大盘(北京)餐饮有限公司</p>
								<div class="hotItem clear">
									<p>行业：餐饮-中餐</p>
									<p>门店：123家</p>
									<p>意向加盟：123家</p>
									<p>申请加盟：123家</p>
								</div>
								<p class="des">介绍：功夫大盘鸡项目是以特色大盘鸡为主打菜品的快捷中式餐饮项目，是在传统新疆大盘鸡口味的基础上融合了四川风味，经过两年多的研发和改良，终于研制而成的功夫大盘鸡。项目除了主打功夫大盘鸡以外，还有十余种精美凉菜、功夫烤串、特制饮品等共三十余种菜品。  　　同时选用上等原料，运用秘方精心烹制，口味麻辣鲜香，酸甜适口。肉质细嫩，秘制入味。食之唇齿留香，回味无穷。搭配劲道宽面，入口爽滑有嚼劲。更难得是“功夫大盘鸡”将健康、美味、品质有机的结合在一起，有养生大盘鸡之称。</p>
							</div>
							<div class="hotPrice">
								投资额：
								<p>3-5万</p>
							</div>
							<div class="hotJoin">
								<a href="">申请加盟</a>
							</div>
						</div>
					</div>
					<!-- 分页开始 -->
					<el-pagination
						background
						layout="prev, pager, next"
						:total="1000">
					</el-pagination>
					<!-- 分页结束 -->
				</div>
				<div class="mainBoxRight">这里是右边广告和实时排行区域</div>
			</div>
		</div>
		<!-- 热门推荐结束 -->
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
        created () {

            this.$axios.get('http://localhost:4000/tradeListBar').then(res=>{
                this.cateringList=res.data;
                console.log(res);
            }).catch(err=> console.log('catering 数据获取异常',err))
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

	/* 面包屑导航开始 */
	.el-breadcrumb {
		width: 1200px;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		background: #f0f0f0;
		color: #666;

		el-breadcrumb-item {

			&:first-child {

				span {
					font-weight: normal;
					color: #666;
				}
			}
		}
	}

	/* 面包屑导航结束 */

	/* 行业分类开始 */
	.classNav {
		width: 100%;
		margin-bottom: 40px;
		
		.classNavItem {
			width: 1200px;
			margin: 0 auto;
			background: #f3f3f3;
			
			&:nth-child(1) {
				padding-top: 20px;
			}
			&:nth-child(3) {
				padding-bottom: 20px;
			}
			.name {
				float: left;
				height: 34px;
				line-height: 34px;
				width: 90px;
				text-align: right;
				font-size: 14px;
			}
			ul {
				margin-bottom: 2px;
				float: left;
				width: 1070px;
				
				li {
					float: left;
										
					a {
						height: 34px;
						line-height: 34px;
						padding: 0 12px;
						display: block;
						color: #333;
						font-size:14px;
						
						&:hover {
							color: $main-color;
						}
					}
				}
				.active {//选中的样式
					background: $main-color;
					
					a {
						color: #fff;
					}
				}
			}
		}
	}

	/* 行业分类结束 */
	
	/*热门推荐开始*/
	.main {
		width: 1200px;
		min-width: 1200px;
		margin: 0 auto;
		
		.mainTit {
			width: 100%;
			
			span {
				width: 33px;
				height: 33px;
				display: inline-block;
				background: url(../../static/images/bg.png) no-repeat;
				background-position: -174px -53px;
				margin-right: 20px;
				vertical-align: bottom;
			}
			h2 {
				font: bold 26px/30px 微软雅黑;
				display: inline-block;
			}
		}
		.mainBox {
			
			.mainBoxLeft {
				float: left;
				width: 850px;
				
				.mainAdv {
					border: 1px solid #dcdcdc;
					margin-top: 27px;
					width:100%;
					background: #f3f3f3;
					
					ul {
						
						li {
							float: left;
							margin: 20px 0 20px 20px;
							
							a {
								text-align: center;
								color: #0f0f0f;
								img {
									width:146px;
									height: 105px;
									border: 1px solid #dcdcdc;
									display: inline-block;
								}
								p {}
							}
						}
					}
				}
				.hotLists {
					width: 100%;
					height: auto;
					margin-top: 30px;
					
					.hotList {
						width: 100%;
						height: 148px;
						border: 1px solid #dcdcdc;
						margin-bottom: 10px;
						background: #fff;
						
						.hotImg {
							float: left;
							a {
								display: block;
								width: 128px;
								height: 103px;
								border: 1px solid #DCDCDC;
								margin: 22px 14px 0 20px;
								overflow: hidden;
								
								img {
									width: 128px;
									height: 103px;
									display: inline-block;
								}
							}
						}
						.hotIntro {
							float: left;
							width:420px;
							margin-top:22px;
							font-size: 12px;
							
							& > p {
								&:nth-child(2) {
									padding-bottom: 8px;
								}
							}
							
							.hotTit {
								a {
									display: block;
									font-size: 16px;
									color: #000000;
									max-width: 350px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									padding-bottom:8px;
								}
							}
							.hotItem {
								padding-bottom: 8px;
								
								p {
									float:left;
									margin-right: 15px;
								}
							}
							.des {
								height: 40px;
								line-height: 20px;
								overflow: hidden;
								font-weight: 20px;
							}
						}
						.hotPrice {
							float: left;
							padding-top: 22px;
							
							p {
								color: $main-color;
							}
						}
						.hotJoin {
							float: right;
							padding: 22px 40px 0 0;
							
							a {
								width: 120px;
								height: 30;
								line-height: 30px;
								background: $main-color;
								text-align: center;
								display: inline-block;
								color: #fff;
							}
						}
					}
					
				}
			}
			.mainBoxRight {
				float: right;
				background: pink;
				width: 330px;
				margin-top:27px;
				height: 500px;
			}
		}
	}
	/*热门推荐结束*/
</style>
