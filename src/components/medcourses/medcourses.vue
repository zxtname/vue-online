<template>
	<div class="medcourses">
		<img :src="imgUrl" />
		<mednav 
		:classfyList="classfyList" 
		:dataList="coursesContent" 
		@search="search"
		@classfyClick="classfyClick"		
		v-model="query.courseName">			
		</mednav>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>		
	</div>
</template>

<script>
import tabPage from '@/components/common/tabPage.vue';
import mednav from '@/components/medcourses/mednav.vue';
import { GetClassfy, GetCourseInfo } from 'api/medcourses';

export default {
	name: 'medcourses',
	components: {
		mednav,
		tabPage
	},
	data() {
		return {
			imgUrl: require('@/assets/bluebg.png'),
			totalPage: 1,			
			coursesContent: [],
			query: {
				pageNum: 1,
				courseName:'',
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
		search(){
			this.GetData();
		},
		classfyClick(val){
			this.query.classfyName=val;
			this.GetData();
			console.log(val);
		}
	}
};
</script>

<style scoped>
.nmedcourses {
	min-height: 600px;
}
img {
	width: 100%;
}
</style>
