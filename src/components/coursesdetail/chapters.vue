<template>
	<div class="chapters">
		<!-- 视频播放 -->
		<div class="videocontainer">
			<div class="lessonvideo">
				<videoplay></videoplay>
			</div>
		</div>
		<!-- 章节目录开始 -->
		<div class="chapters-list">
			<div class="chapter1">
				<ul>
					<li>
						<b>第一章  观察性研究的设计与分析（共5节，计划视频长度75分钟）</b>
					</li>
					<li><i class="el-icon-video-play"><a href="">  第一节  观察性研究概述</a></i>
						
					</li>
					<li>
						<i class="el-icon-video-play"><a href="">  第二节  横断面研究设计与分析</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href="">  第三节  病例-对照研究设计与分析</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href="">  第四节  队列研究设计与分析</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href="">  第五节  观察性研究报告规范（STROBE）</a></i>
					</li>
				</ul>
			</div>
			<div class="chapter1">
				<ul>
					<li>
						<b>第二章  实验研究的设计与分析（共5节，计划视频长度75分钟）</b>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第一节  实验研究设计的三要素</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第二节  实验研究设计的四原则</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第三节  病例-对照研究设计与分析</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第四节  随机区组设计、析因设计及对应的统计分析方法</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第五节  交叉设计、重复测量设计及对应的统计分析方法</a></i>
					</li>
				</ul>
			</div>
			<div class="chapter1">
				<ul>
					<li>
						<b>第三章  临床试验的设计与分析（共6节，计划视频长度90分钟）</b>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第一节  临床试验概述与对照的选择</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第二节  随机化与盲法</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第三节  样本含量估计与多中心临床试验</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第四节  统计分析数据集与有效性评价</a></i>
					</li>
					<li>
						<i class="el-icon-video-play"><a href=""> 第五节  安全性评价与数据管理</a></i>
					</li>
				</ul>
			</div>
		</div>
		
		<!-- 章节目录结束 -->

	</div>
	
</template>

<script>
	import videoplay from '@/components/common/videoplay.vue';
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
			// dialogVisible: false,
			
	      };
	    },
	   //  methods: {
	   //    handleClick(tab, event) {
	   //      console.log(tab, event);
	   //    },
		  // handleClose(done) {
		  //         this.$confirm('确认关闭？')
		  //           .then(_ => {
		  //             done();
		  //           })
		  //           .catch(_ => {});
		  //       }
	   //  }
	  };
</script>

<style scoped>
	.chapters{
		margin-left: -35px;
	}
	.videocontainer{
		
		background: linear-gradient(to bottom, #7d9bc8 0%,#5163a1 100%);
	}
	.lessonvideo{
		width: 800px;
		margin: auto;
		
	}
	.chapters-list{
		margin:0 40px;
	}
	.chapter1{
		margin-top: 10px;
		padding-bottom: 10px;
		height: 300px;
		border-bottom: 2px  solid #9199A1;
	}
	.chapter1 ul{
		float: left;
		flex-direction: row;
		height: 30px;
		width: 1200px;
		padding: 0 20px;
		
		/* justify-content: left; */
	}
	
	.chapter1 li{
		position: relative;
		flex-direction: row;
		padding: 10px 60px;
		border-top: 1px  solid #dfe6e6;
		height: 25px;
		line-height: 25px;
		font-size: 16px;
		text-align:-webkit-left;
	}
	.chapter1 b{
		height: 25px;
		line-height: 25px;
		font-size: 18px;
		border: none;

	}
	.el-icon-video-play{
		
		padding-right: 10px;
		padding-top: 5px;
		font-size: 16px;
		vertical-align: middle;
		
		}
	/* a:-webkit-any-link {
		display: inline-block;
		margin-top: -20px;
		height: 32px;
		line-height: 32px;
	    color: #4d555d;
		
		} */
	.el-icon-video-play a{
		vertical-align: middle;
		
		font-size: 16px;
		color: #4d555d;
	}
</style>
