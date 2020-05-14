<template>
	<div class="s-search">
		<div class="search-header">
			<div class="search-form">				
				<input type="text" class="search-form-ipt" placeholder="请输入想搜索的内容" v-model="query.courseName" />
				<button class="search-form-btn" @click="search">搜索</button>
			</div>
		</div>

		<div class="search-body">
			<div class="search-content">
				<div class="search-all">
					<a style="margin-left: 50px;">
						全站结果
						<span>({{count}})</span>
					</a>
				</div>
				<searchcourses :dataList="coursesContent"></searchcourses>
				<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
			</div>
		</div>
	</div>
</template>

<script>
	import searchcourses from '@/components/search/searchcourses.vue'
	import tabPage from '@/components/common/tabPage.vue' 
	import { GetCourseInfo } from 'api/medcourses';
	
	export default {
		components: {
			searchcourses,
			tabPage,
		},
		data() {
			return {
				count:10,
				totalPage: 1,
				coursesContent: [],
				query: {
					pageNum: 1,
					courseName:'',
					classfyName:''
				},
			};
		},
		created() {
			this.GetData();
		},
		methods:{
			search(){
				this.GetData();
			},
			changePage(page) {
				this.query.pageNum = page;
				// this.routerTo();
				this.GetData();
			},
			async GetData() {
				//获取数据信息
				const { data: res2 } = await GetCourseInfo(this.query);
				if (res2.code !== 1) {
					this.$message.error('获取数据失败');
				}
				this.coursesContent = res2.data;
				this.totalPage = res2.totalPage;
				this.count=res2.count;
				// console.log(res2)
			},
		},
	}
</script>

<style scoped>
	
	.s-search {
		min-height: 600px;
		background: #FAFAFA;
		overflow: hidden;
	}

	.search-header {
		height: 88px;
		width: 100%;
		padding-top: 24px;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(28, 31, 33, .06);
	}

	.search-form {
		height: 48px;
		width: 840px;
		margin: 0 auto;
		position: relative;
	}

	.search-form-ipt {
		font-size: 16px;
		color: #93999f;
		width: 736px;
		line-height: 48px;
		height: 48px;
		padding: 12px;
		background: #FAFAFA;
		box-sizing: border-box;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		float: left;
	}

	.search-form-btn {
		float: right;
		background: #0F4C81;
		width: 104px;
		height: 48px;
		line-height: 48px;
		font-size: 16px;
		color: #fff;
		cursor: pointer;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		-webkit-transition: all .3s;
	}

	input,
	button {
		outline: 0;
		border: 0;
	}

	.search-body {
		margin: 0 auto;
		width: 1168px;
		padding-top: 16px;
		box-sizing: border-box;
	}

	.search-content {
		float: left;
		width: 1168px;
		/* padding-bottom: 20px; */
	}

	.search-all {
		background: #fff;
		font-size: 0;
		padding: 20px 32px;
		border-bottom: 1px solid #f3f5f6;
		height: 41px;
	}

	.search-all a {
		display: inline-block;
		font-size: 16px;
		color: #0F4C81;
		text-align: center;
		line-height: 40px;
		font-weight: 700;
		float: left;
	}

	.search-all a span {
		font-size: 12px;
		color: #9199a1;
		text-align: center;
		line-height: 40px;
		font-weight: 700;
	}
</style>
