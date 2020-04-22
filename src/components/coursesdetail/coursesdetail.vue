<template>
<div class="coursesdetail">
	
	<!-- 课程页面固定头部 -->
	<div class="course-hd">
	<!-- <img src="../../assets/coursebg1.png" alt=""> -->
		<!-- 左上，分类小索引 -->
		<div class="sort w">
			<!-- <el-breadcrumb class="lilindex" separator="/">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item><a href="/">临床医学</a></el-breadcrumb-item>
			  <el-breadcrumb-item>医学统计学（高级）</el-breadcrumb-item>
			</el-breadcrumb> -->
			<h3>首页 / 临床医学 / 医学统计学（高级）</h3>
		</div>
		<!-- 索引完成 -->
		<!-- 中间 课程大标题 -->
		<div class="coursetitle w">
			<h1>用不同的抽样方法获得的样本信息对相应的总体参数进行估计</h1> 
			<p>阐述病例-对照研究及队列研究的基本概念，OR、RR及其假设检验的意义，并且能根据样本资料计算OR或RR并进行假设检验</p>
		</div>
		<!-- 大标题完成 -->
		<!-- banner下方，课程信息 -->
		<div class="infobox w">
			<div class="info1 ">
				<h3> ￥98 </h3></br>
			</div>
			<div class="info2">
					<ul>
					<!-- 	<li>
							<div class="info1 ">
								<h3> ￥98 </h3></br>
							</div>
						</li> -->
						<li>
							<p class="text"><b>开课时间</b>2020-02-10 00:00</p> 
						</li>
						<li><p>|</p></li>
						<li>
							<!-- <h5>时长</h5> -->
							<p class="text"><b>时长</b>17周</p>
						</li>
						<li><p>|</p></li>
						<li>
							<!-- <h5>学习人数</h5> -->
							<p class="text"><b>学习人数</b>451</p>
						</li>
						<li><p>|</p></li>
						<li>
							<!-- <h5>综合评分</h5> -->
							<p class="text"><b>综合评分</b>8.0</p>
						</li>
						<li><p>|</p></li>
					</ul>
			</div>
			<div class="buy">
				<a href="#">立即购买</a>
			</div>
		</div>
		<!-- 居中浮块课程信息完成 -->
		<!-- 分页小导航部分 -->
		<div class="detail-nav w">
			
			<el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="课程介绍" name="first">
					<!-- 视频 简介开始 -->
					<div class="video">
						<ul>
							<li><img src="../../assets/play.png" alt=""></li>
							<li><a href="# ">点击观看视频</a></li>
						</ul>
						<div class="intro">
							<p>关于此课程<br>      中山大学《医学统计学》已有40年历史，2008年获评国家级精品课程，2010年获评国家级双语示范课程，2011年获评广东省网络教育类精品课程，2012年获评国家精品资源共享课，2013年获评教育部来华留学生英语授课品牌课程。中山大学也是卫生部规划教材《卫生统计学》第五、六、七版的主编单位和中国高等教育学会医学教育专业委员会规划教材《医学统计学》的主编单位。针对不同医学专业的特点，中山大学《医学统计学》的教学时数为50-100学时。目前，包括成人教育及远程教育在内，课程每学年的授课对象超过3000人。<br>     《医学统计学（高级篇）》课程内容共8章，每章的课时安排如下：<br>（1）观察性研究的设计与分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。（2）实验研究的设计和分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。（3）临床试验的设计与分析，课程计划时长90分钟，包括6个微视频，每个微视频计划时长15分钟。（4）多重线性回归与相关，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。（5）Logistic回归分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。（6）寿命表，课程计划时长60分钟，包括4个微视频，每个微视频计划时长15分钟。（7）生存分析，课程计划时长75分钟，包括4个微视频，每个微视频计划时长15~20分钟。（8）Meta分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。
							</p>
						</div>
					</div>
					<div class="detailsintro">
						<img src="../../assets/details.png" alt="">
					</div>
				</el-tab-pane>
				<!-- 视频简介结束 -->
				<!-- 章节目录开始 -->
			    <el-tab-pane label="章节目录" name="second">
					<div class="chapters-list">
						<div class="chapter1">
							<ul>
								<li>
									<b>第一章  观察性研究的设计与分析（共5节，计划视频长度75分钟）</b>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第一节  观察性研究概述</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第二节  横断面研究设计与分析</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第三节  病例-对照研究设计与分析</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第四节  队列研究设计与分析</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第五节  观察性研究报告规范（STROBE）</a>
								</li>
							</ul>
						</div>
						<div class="chapter1">
							<ul>
								<li>
									<b>第二章  实验研究的设计与分析（共5节，计划视频长度75分钟）</b>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第一节  实验研究设计的三要素</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第二节  实验研究设计的四原则</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第三节  病例-对照研究设计与分析</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第四节  随机区组设计、析因设计及对应的统计分析方法</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第五节  交叉设计、重复测量设计及对应的统计分析方法</a>
								</li>
							</ul>
						</div>
						<div class="chapter1">
							<ul>
								<li>
									<b>第三章  临床试验的设计与分析（共6节，计划视频长度90分钟）</b>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第一节  临床试验概述与对照的选择</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第二节  随机化与盲法</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第三节  样本含量估计与多中心临床试验</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第四节  统计分析数据集与有效性评价</a>
								</li>
								<li>
									<img src="../../assets/play-small.png" alt=""><a href="">第五节  安全性评价与数据管理</a>
								</li>
							</ul>
						</div>
					</div>
				</el-tab-pane>
				<!-- 章节目录结束 -->
				<!-- 教师团队模块开始 -->
			    <el-tab-pane label="教师团队" name="third">
					<div class="teainfo">
						<ul>
							<li><img src="../../assets/tea1.jpg" alt=""></li>
							<li>DellLeebr <br>
							Web前端工程师</li>
						</ul>
						<div class="intro">
							<p>BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！</p>
						</div>
					</div>
				</el-tab-pane>
				<!-- 教师团队模块结束 -->
				<!-- 用户评价模块开始 -->
			    <el-tab-pane label="用户评价" name="fourth">
					<div class="commentbox">
						<div class="icon">
							<img src="../../assets/img/user05.jpeg" alt="">
						</div>
						<div class="comment">
							
							<h4>七号同学</h4>
							<p>非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。</p>
						</div>
						<div class="score">
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span>10分</span>
						</div>
						<div class="date">
							时间：2019-08-01
						</div>
					</div>
					<div class="commentbox">
						<div class="icon">
							<img src="../../assets/img/user05.jpeg" alt="">
						</div>
						<div class="comment">
							
							<h4>七号同学</h4>
							<p>非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。</p>
						</div>
						<div class="score">
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span>10分</span>
						</div>
						<div class="date">
							时间：2019-08-01
						</div>
					</div>
					<div class="commentbox">
						<div class="icon">
							<img src="../../assets/img/user01.jpg" alt="">
						</div>
						<div class="comment">
							
							<h4>七号同学</h4>
							<p>非常适合入门了，没有上来就搭环境，而是深入浅出的结合小demo，把Vue的基础知识结构快速搭建起来，让入学者没有负担，还能有所收获。</p>
						</div>
						<div class="score">
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span><img src="../../assets/star.png" alt=""></span>
							<span>10分</span>
						</div>
						<div class="date">
							时间：2019-08-01
						</div>
					</div>
				</el-tab-pane>
				<!-- 用户评价模块结束 -->
			</el-tabs>
			
		</div>
		<!-- 分页小导航完成 -->
	
	</div>
</div>
	
</template>

<script>
	// data () {
	//   return {
	//     currentNavIndex: 0, // 当前导航的索引
	//     navList: [] // 导航数据
	//   }
	// },
	// created () {
	//   // 初始化导航数据
	//   this.navList = [
	//     { title: '课程', code: 0, componentName: 'chapter', key: 'chapter', show: true },
	//     { title: '问答', code: 1, componentName: 'comment', key: 'comment', show: true },
	//     { title: '同学', code: 2, componentName: 'classmate', key: 'classmate', show: false }
	//   ]
	// },
	export default {
	    data() {
	      return {
	        activeName: 'first'
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      }
	    }
	  };
	

	
</script>

<style scoped>
	@import url("//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css");
/* 	a{
		text-decoration: none;
	} */
	li{
		list-style: none;
	}
	.body{
		background-color: #f0f0f0;
		/* height: 3000px; */
	}
	.w{
		width: 1200px;
		margin: auto;
	}
	.w2{
		width: 800px;
		margin: auto;
	}
	/* .body{
		min-height: 600px;
	} */
	.course-hd{
		display: block;
		margin-top: 30px;
		height: 2200px;
		background:#F0F0F0 url(../../assets/coursebg1.png) no-repeat top center;
	}
	.sort h3{
		float: left;
		height: 80px;
		margin-left: 50px;
		margin-top: 30px;
		font-size: 14px;
		font-weight: 400;
		color: #e2e2e2;
	}
/* 	.sort a{
		font-weight: 400;
		color: #d6d6d6;
	} */
/* 	.el-breadcrumb-item{
		font-weight: 400;
		color: #d6d6d6;
	} */

	
	.coursetitle{
		/* float: left; */
		clear: both;
		/* margin-top: 200px; */
		/* text-align: center; */
		color: #fff;
		text-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
	}
	.coursetitle h1{
		height: 40px;
		text-align: center;
		font-size: 40px;
		line-height: 40px;
		font-weight: bold;
		
	}
	.coursetitle p{
		margin-top: 0;
		text-align: center;
		font-size: 18px;
		line-height: 18px;
		/* font-weight: bold; */
	}
	.infobox{
		/* float: left; */
		/* margin-top: 10px; */
		/* clear: both; */
		position:relative;
		height: 185px;
		width: 1200px;
		margin-top: 100px;
		border-radius: 30px;
		background-color: #FFFFFF;
		/* 利用行高可继承的特性 */
		line-height: 60px;
		box-shadow: 3px 3px 4px rgba(0, 0, 0, .2);
	}
	.infobox li{
				
		height:20px;
		
		float:left;
		margin-right:10px;
		
	}
	.infobox h3{
		position:absolute;
		float: left;
		margin-top: 50px;
		margin-left: 80px;
		height: 40px;
		line-height: 36px;
		font-size: 36px;
		color: #f01414;
	}
	.info2{
		/* float:left; */
		/* display:flex; */
		position:absolute;
		margin: 20px 35px;
		height: 16px;
	}
	.info2 p{
		
		line-height: 20px;
	}
	.info2 b{
		padding: 0 10px;
	}
	.buy a:-webkit-any-link{
		color: #FFFFFF;
	}
	.buy{
		display: block;
		float: right;
		margin-right: 100px;
		width: 150px;
		color: #FFFFFF;
		border-radius: 30px;
		border: 1px solid #1985DD;
		margin-top: 10px;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		height: 45px;
		line-height: 45px;
	
		background-image: linear-gradient(-90deg, #0c4875 0%, #276ace 100%);
	}
	.detail-nav{
		/* display: flex; */
		position:relative;
		height: 185px;
		margin-top: 30px;
		
		/* line-height: 185px; */
		text-align: center;
	}
	.detail-nav el-tab-pane{
		font-size: 22px;
		font-weight: bold;
	}
/* 	.el-tabs__nav is-top{
		color: pink;
	} */
	/* .tabs{
		padding-left: 80px;
	} */
	.el-tabs__active-bar {
	    position: absolute;
	 /*   bottom: 0;
	    left: 0; */
	    height: 3px;
		width: 60px;
	    background-color: #0F4C81;
	   
		}
	div#tab-first {
    color: #0F4C81;
    font-size: 20px;
    font-weight: bold;
	text-align: center;
	}
	div#tab-second {
	color: #0F4C81;
	font-size: 20px;
	font-weight: bold;
	}
	div#tab-third {
	color: #0F4C81;
	font-size: 20px;
	font-weight: bold;
	}
	div#tab-fourth {
	color: #0F4C81;
	font-size: 20px;
	font-weight: bold;
	}
	.tabs el-tabs_nav is-top{
		justify-content: center;
	}
	.tabPageDiv{
		align-content: center;
	}
	.video
	{
		display: block;
		height: 420px;
		background:  url(../../assets/vedio-bg.png) no-repeat center top;
		/* background-image: linear-gradient(-90deg, #3f2e95 0%, #276ace 100%); */
		border-radius: 40px;
		box-shadow: 3px 3px 4px rgba(0, 0, 0, .2);
	}
	.video ul{
		float: left;
		margin-top: 140px;
		margin-left: 100px;
		color: #ECEEEF;
	}
	.intro{
		float: right;
		width: 700px;
		font-size: 14px;
		text-align: left;
		color: #ECEEEF;
		margin-top: 70px;
		margin-right: 100px;
	}
	.detailsintro{
		margin-top: 50px;
		height: 1250px;
		
	}
	.detailsintro img{
		width: 100%;
		/* height: 100%; */
	}
	.blank{
		height: 2px;
	}
	.chapters-list{
		height: 1200px;
	}
	.chapter1{
		margin-top: 10px;
		/* padding-top: 30px; */
		padding-bottom: 10px;
		height: 380px;
		/* border-top: 2px  solid #9199A1; */
		border-bottom: 2px  solid #9199A1;
	}
	.chapter1 ul{
		float: left;
		flex-direction: row;
		height: 68px;
		width: 1200px;
		padding: 0 20px;
		
		/* justify-content: left; */
	}

	.chapter1 li{
		position: relative;
		flex-direction: row;
		padding: 10px 60px;
		border-top: 1px  solid #dfe6e6;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-align:-webkit-left;
	}
	.chapter1 b{
		height: 40px;
		line-height: 40px;
		font-size: 18px;
		border: none;

	}
	.chapter1 li img{
		padding-right: 20px;
		vertical-align: middle;
		
		}
	a:-webkit-any-link {
		height: 40px;
		line-height: 40px;
	    color: #4d555d;
		}
		
	/* 教师模块样式 */
	.teainfo
	{
		display: block;
		height: 300px;
		/* background:  url(../../assets/vedio-bg.png) no-repeat center top; */
		background-image: linear-gradient(-90deg, #3f2e95 0%, #276ace 100%);
		border-radius: 40px;
		box-shadow: 3px 3px 4px rgba(0, 0, 0, .2);
	}
	.teainfo ul{
		float: left;
		margin-top: 80px;
		margin-left: 100px;
		color: #ECEEEF;
	}
	
	/* 评论模块样式 */
	.commentbox{
		margin: 20px 0;
		height: 300px;
		width: 1195px;
		border-radius: 40px;
		background-color: #fff;
		box-shadow:3px 3px 4px rgba(0, 0, 0, .2) ;
	}
	.icon{
		float: left;
		margin: 40px 50px;
		height: 70px;
		width: 70px;
		border-radius: 10px;
	}
	.icon img{
		width: 100%;
		height: 100%;
	}
	.comment{
		float: left;
		margin-top: 65px;
		width: 800px;
		text-align: left;
		line-height: 30px;
	}
	.score{
		float: right;
		margin-right: 60px;
		margin-top: 50px;
	}
	.date{
		float: right;
		margin-right: 60px;
		margin-top:160px ;
		font-size: 14px;
		color: #cccccc ;
	}
</style>
