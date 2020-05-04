<template>
	<div class="introduction">
		<div class="video">
			<!-- <div class="test">
				<videoplay></videoplay>
			</div> -->
			<ul>
				<li><img src="../../assets/play.png" alt=""></li>
				<li><el-button type="text" @click="dialogVisible = true">点击播放视频</el-button></li>
				<el-dialog
				  class="playbox"
				  title="课程视频"
				  :visible.sync="dialogVisible"
				  width="60%"
				  :before-close="handleClose">
				  <span><videoplay></videoplay></span>
				  <span class="coursetitle">这是课程标题</span>
				  <span slot="footer" class="dialog-footer">
					<el-button type="primary" @click="dialogVisible = false">下 载</el-button>
					<el-button @click="dialogVisible = false">关 闭</el-button>
				  </span>
				</el-dialog>
				
			</ul>
			<div class="intro">
				<p>关于此课程<br>
		
		      中山大学《医学统计学》已有40年历史，2008年获评国家级精品课程，2010年获评国家级双语示范课程，2011年获评广东省网络教育类精品课程，2012年获评国家精品资源共享课，2013年获评教育部来华留学生英语授课品牌课程。中山大学也是卫生部规划教材《卫生统计学》第五、六、七版的主编单位和中国高等教育学会医学教育专业委员会规划教材《医学统计学》的主编单位。针对不同医学专业的特点，中山大学《医学统计学》的教学时数为50-100学时。目前，包括成人教育及远程教育在内，课程每学年的授课对象超过3000人。
		<br>
		     《医学统计学（高级篇）》课程内容共8章，每章的课时安排如下：<br>
		（1）观察性研究的设计与分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。
		（2）实验研究的设计和分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。
		（3）临床试验的设计与分析，课程计划时长90分钟，包括6个微视频，每个微视频计划时长15分钟。
		（4）多重线性回归与相关，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。
		（5）Logistic回归分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。
		（6）寿命表，课程计划时长60分钟，包括4个微视频，每个微视频计划时长15分钟。
		（7）生存分析，课程计划时长75分钟，包括4个微视频，每个微视频计划时长15~20分钟。
		（8）Meta分析，课程计划时长75分钟，包括5个微视频，每个微视频计划时长15分钟。
									</p>
								</div>
			</div>
			<div class="detailsintro">
				<img src="../../assets/details.png" alt="">
			</div>
	</div>
</template>

<script>
	import videoplay from '@/components/common/videoplay.vue'
	export default {
		props: {
		  list: {
		    type: [Object],
		    default () {
		      return {}
		    }
		  }
		},
		components:{
			
			videoplay,
			
		},
	    data() {
	      return {
	        activeName: 'first',
			dialogVisible: false,
			
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
		  handleClose(done) {
		          this.$confirm('确认关闭？')
		            .then(_ => {
		              done();
		            })
		            .catch(_ => {});
		        }
	    }
	  };
</script>

<style>
	li{
		list-style: none;
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
	.el-dialog{
		width: 2000px;
	}
	.coursetitle{
		line-height: 40px;
	}
</style>
