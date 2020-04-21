<template>
	<div class="freecourses">
		<freenav :classfyList="classfyList" @classfyClick="classfyClick"></freenav>
		<cards :dataList="coursesContent"></cards>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
	</div>
</template>

<script>
	import freenav from '@/components/freecourses/freenav.vue'
	import cards from '@/components/common/cards.vue'
	import tabPage from '@/components/common/tabPage.vue'
	// import coursesApi from '@/api/mock/home/index.js'
	import { GetClassfy, GetCourseInfo } from 'api/freecourse';
		
	export default {
		components: {
			freenav,
			cards,
			tabPage,
			// text,
		},
		data() {
			return {				
				totalPage: 1,			
				coursesContent: [],
				query: {
					pageNum: 1,	
					classfyName:''
				},
				classfyList: []
			};
		},
		created() {
			this.getClassfy();
			this.GetData();
		},
		methods: {
			async getClassfy() {
				//获取分类信息
				const { data: res } = await GetClassfy();
				if (res.code !== 1) {
					this.$message.error('分类获取信息失败');
				}
				this.classfyList = res.data.classfyList;
			},
			async GetData() {
				//获取数据信息
				const { data: res2 } = await GetCourseInfo(this.query);
				if (res2.code !== 1) {
					this.$message.error('获取数据失败');
				}
				this.coursesContent = res2.data;
				this.totalPage = res2.totalPage;
				// console.log(res2)
			},
			changePage(page) {
				this.query.pageNum = page;
				// this.routerTo();
				this.GetData();
			},
			classfyClick(val)
			{
				this.query.classfyName=val;
				this.GetData()
				// console.log(val)
			}
		}
	}
</script>

<style scoped>
	.freecourses{
		min-height: 600px;
	}
</style>
