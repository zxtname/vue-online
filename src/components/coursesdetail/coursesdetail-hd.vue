<template>
	<!-- 课程页面固定头部 -->
	<div class="course-hd">
	<!-- <img src="../../assets/coursebg1.png" alt=""> -->
		<!-- 左上，分类小索引 -->
		<div class="sort w">
			<h4>首页/临床医学/医学统计学（高级）</h4>
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
		<div class="detail-nav">
			<div class="detail-intro">课程介绍</div>
			<div class="detail-list">章节目录</div>
			<div class="detail-teacher">教师团队</div>
			<div class="detail-comment">用户评价</div>
		</div>
	
	</div>
</template>

<script>
	
	
	
</script>

<style>
	a{
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	.w{
		width: 1200px;
		margin: auto;
	}
	.course-hd{
		display: block;
		margin-top: 30px;
		height: 500px;
		background:#F0F0F0 url(../../assets/coursebg1.png) no-repeat top center;
	}
	.sort h4{
		float: left;
		height: 80px;
		margin-left: 50px;
		font-weight: 400;
		color: #FAFAFA;
	}
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
		/* float: left;
		padding: 0 20px;
		height: 16px;
		line-height: 16px;
		font-size: 16px; */
		
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
	

	background-color: #F0F0F0;
</style>
