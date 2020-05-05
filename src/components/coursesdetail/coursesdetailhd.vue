<template>
	<div class="coursesdetailhd" v-if="dataList.course!=undefined">
		<!-- 左上，分类小索引 -->
		<div class="sort w">			
			<span><h3>首页 / {{dataList.course.classfyName}} / {{dataList.course.courseName}} 高级</h3></span>
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
				<h3>￥{{dataList.course.price}}</h3>
				<br />
			</div>
			<div class="info2">
				<ul>
					<li>
						<p class="text">
							<b>开课时间</b>
							{{dataList.course.creatTime|dataFormat}}
						</p>
					</li>
					<li><p>|</p></li>
					<li>
						<!-- <h5>时长</h5> -->
						<p class="text">
							<b>时长</b>
							17周
						</p>
					</li>
					<li><p>|</p></li>
					<li>
						<!-- <h5>学习人数</h5> -->
						<p class="text">
							<b>学习人数</b>
							451
						</p>
					</li>
					<li><p>|</p></li>
					<li>
						<!-- <h5>综合评分</h5> -->
						<p class="text">
							<b>综合评分</b>
							8.0
						</p>
					</li>
					<li><p>|</p></li>
				</ul>
			</div>
			<div class="buy">
				<router-link tag="a" :to="{ name: 'pay' }" class="payA"><a>立即购买</a></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		dataList: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
li {
	list-style: none;
}
.w {
	width: 1250px;
	margin: auto;
}
.sort h3 {
	float: left;
	height: 80px;
	margin-left: 50px;
	margin-top: 30px;
	font-size: 14px;
	font-weight: 400;
	color: #e2e2e2;
}
.coursetitle {
	clear: both;

	color: #fff;
	text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.coursetitle h1 {
	height: 40px;
	text-align: center;
	font-size: 40px;
	line-height: 40px;
	font-weight: bold;
}
.coursetitle p {
	margin-top: 0;
	text-align: center;
	font-size: 18px;
	line-height: 18px;
}
.infobox {
	/* float: left; */
	/* margin-top: 10px; */
	/* clear: both; */
	position: relative;
	height: 185px;
	width: 1200px;
	margin-top: 100px;
	border-radius: 30px;
	background-color: #ffffff;
	/* 利用行高可继承的特性 */
	line-height: 60px;
	box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}
.infobox li {
	height: 20px;

	float: left;
	margin-right: 10px;
}
.infobox h3 {
	position: absolute;
	float: left;
	margin-top: 50px;
	margin-left: 80px;
	height: 40px;
	line-height: 36px;
	font-size: 36px;
	color: #f01414;
}
.info2 {
	/* float:left; */
	/* display:flex; */
	position: absolute;
	margin: 20px 35px;
	height: 16px;
}
.info2 p {
	line-height: 20px;
}
.info2 b {
	padding: 0 10px;
}
.buy a:-webkit-any-link {
	color: #ffffff;
}
.buy {
	display: block;
	float: right;
	margin-right: 100px;
	width: 150px;
	color: #ffffff;
	border-radius: 30px;
	border: 1px solid #1985dd;
	margin-top: 10px;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	height: 45px;
	line-height: 45px;

	background-image: linear-gradient(-90deg, #0c4875 0%, #276ace 100%);
}
</style>
