<template>
	<div class="teachersinfo">
		<!-- 教师团队模块开始 -->
		
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
		
		<!-- 教师团队模块结束 -->

	</div>
	
</template>

<script>
	export default {
		props: {
		  list: {
		    type: [Object],
		    default () {
		      return {}
		    }
		  }
		},
		
	    data() {
	      return {
	        activeName: 'first',
			
	      };
	    },
	   
	  };
</script>

<style scoped>
	.teachersinfo{
		width: 1250px;
		margin: 0;
	}
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
	.intro {
		float: right;
		width: 700px;
		font-size: 14px;
		text-align: left;
		color: #eceeef;
		margin-top: 70px;
		margin-right: 100px;
	}
</style>
