<template>
<div class="coursesdetail">
	
	<!-- 课程页面固定头部 -->
	<div class="course-hd">
		<coursesdetailhd :dataList="dataList"></coursesdetailhd>
			
		<!-- 分页小导航部分 -->
		<div class="cnavmenu">
			<cdetailcontent :dataList="dataList"></cdetailcontent>
		</div>
		
		<!-- 分页小导航完成 -->
	
	</div>
</div>
	
</template>

<script>
	import coursesdetailhd from '@/components/coursesdetail/coursesdetailhd.vue'
	import cdetailcontent from '@/components/coursesdetail/cdetailcontent.vue'
	import comment from '@/components/common/comment.vue'
	import videoplay from '@/components/common/videoplay.vue'
	// import introduction from '@/components/coursesdetail/introduction.vue'
	
	export default {
		props: {
			dataList:{}
		},
		name: 'CourseDetail',
		components:{
			
			coursesdetailhd,
			cdetailcontent,
		},
	    data() {
	      return {
	        activeName: 'first',
			dialogVisible: false,
			courseDetail: {
			  base: {}
			}
			};
	      },
	    created () {
			// console.log(this.dataList)
			// console.log(this.$route.query.id)
	      // this.$nextTick(() => {
	      //   this.getCourseDetailData()
	      // })
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
	   methods: {
	     // 获取课程详情
	     // getCourseDetailData () {
	     //   const id = this.$route.params.id
	     //   getCourseDetail(id).then(res => {
	     //     let { code, data } = res
	     //     if (code === ERR_OK) {
	     //       this.courseDetail = data
	     //     }
	     //   })
	     // }
	   },
	  };
	

	
</script>

<style scoped>
	@import url("//unpkg.com/element-ui@2.13.1/lib/theme-chalk/index.css");

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

	.course-hd{
		display: block;
		margin-top: 30px;
		height: 2200px;
		background:#F0F0F0 url(../../assets/coursebg1.png) no-repeat top center;
	}




	
		
	
/* 	.el-tabs__nav is-top{
		color: pink;
	} */
	/* .tabs{
		padding-left: 80px;
	} */
	/* .el-tabs__active-bar {
	    position: absolute;
	 
	    height: 3px;
		width: 60px;
	    background-color: #0F4C81;
	   
		} */
/* 	div#tab-first :hover{
    color: #0F4C81;
    font-size: 20px;
    font-weight: bold;
	text-align: center;
	}
	div#tab-second :hover{
	color: #0F4C81;
	font-size: 20px;
	font-weight: bold;
	}
	div#tab-third :hover{
	color: #0F4C81;
	font-size: 20px;
	font-weight: bold;
	}
	div#tab-fourth :hover{
	color: #0F4C81;
	font-size: 20px;
	font-weight: bold;
	}
	.tabs el-tabs_nav is-top{
		justify-content: center;
	}
	.tabPageDiv{
		align-content: center;
	} */
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
