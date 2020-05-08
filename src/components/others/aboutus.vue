<template>
	<div class="aboutus">
		<!-- <div class="testa">123</div> -->
		<div class="about-title aw clearfix">
			<h2>关于我们</h2>
		</div>
		
		<div class="about-body clearfix">
			<div class="about-main">
				<!-- v-for="(item,index) in helpInfo -->
				<div class="about-detail" v-for="(item,index) in aboutInfo">
					<div class="adetail-title">
						<div class="a-logo">
							<img src="../../../public/tkmicon.png" />
						</div>
						<span class="aboutt">
							{{item.abouttitle}}
						</span>
					</div>
					<p>
						<span class="aboutcontent">
							{{item.aboutcontent}}
						</span>
						<br>
					</p>
				</div>
				<div class="afeedback-tip show">
					<h5>:) 非常感谢您的支持，我们会努力为您提供更好的服务和帮助</h5>
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				aboutInfo: [{
						abouttitle: '关于我们团队',
						aboutcontent: '四个狼人是一支用心做毕设的队伍，来自广东医科大学信息管理与信息系统2016级1班。'
					},
					{
						abouttitle: '关于广东医科大学',
						aboutcontent: '广东医科大学的前身是中山医学院湛江分院，创建于1958年，1964年升格为五年制医学本科院校并更名为湛江医学院，1992年易名为广东医学院，2016年更名为广东医科大学。'
					},
					{
						abouttitle: '什么是慕课（MOOC）',
						aboutcontent: '源于国外，Massive（大规模）Open（开放）Online（在线）Course（课程）。'
					},
					{
						abouttitle: '为什么做淘课盟',
						aboutcontent: '淘课盟的小伙伴希望所有热爱学习的同学能更加便捷的获取学习资源，用互联网思维改变我们的学习。我们提供最新的知识，帮你应对变化的世界！'
					},
				]
			}
		}
	}
</script>

<style scoped>
	/* .testa{
		height: 1200px;
		color: pink;
	} */
	.aboutus{
		background-color: #FAFAFA;
	}
	
	.about-title {
		width: 100%;
		height: 115px;
		background: url(../../assets/help-bg.png) no-repeat;
		background-size: cover;
		background-position: top center;
	}
	
	.aw {
		padding-top: 33px;
	}
	
	.about-title h2 {
		font-size: 32px;
		color: #fff;
		line-height: 48px;
		margin: 0 auto 33px;
		text-align: center;
		font-weight: 400;
		padding-top: 15px;
	}
	
	.about-body {
		width: 1152px;
		margin: 24px auto;
	}
	
	.clearfix:after {
		content: '\0020';
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.about-main {
		width: 1000px;
		background: #fff;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
		border-radius: 12px;
		display: inline-block;
		padding: 10px 32px;
		box-sizing: border-box;
		min-height: 700px;
	}
	
	.about-detail {
		color: #14191e;
		line-height: 1.76em;
		font-size: 14px;
		word-break: break-all;
		white-space: normal;
		border-bottom: 1px solid #d8d8d8;
		padding: 24px 0;
		word-wrap: break-word;
	}
	
	.about-detail img{
		height: 18px;
		width: 18px;
	}
	
	.a-logo{
		padding: 3px;
	}
	
	.adetail-title{
		display: flex;
	}
	
	.aboutt {
		font-size: 16px;
		color: #1c1f21;
		line-height: 22px;
		margin: 0 0 16px 0;
		font-weight: 700;
	}
	
	.about-detail p {
		padding: 0px;
		box-sizing: border-box;
		word-break: break-all;
		word-wrap: break-word;
		font-size: 16px;
		line-height: 28px;
		white-space: normal;
		color: rgb(101, 110, 115);
		background-color: rgb(255, 255, 255);
		text-indent: 0;
		margin: 15px 0 !important;
		overflow-x: auto;
		text-align: justify;
	}
	
	.aboutcontent{
		color: rgb(0, 0, 0);
	}
	
	.show {
		display: block;
	}
	
	.feedback-tip h5 {
		margin-top: 24px;
		font-size: 16px;
		color: #1c1f21;
		line-height: 24px;
	}
</style>
