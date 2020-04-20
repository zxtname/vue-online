<template>
	<div class="intcourses">
		<intnav></intnav>
		<cards :dataList="dataList"></cards>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
		<!-- <text></text> -->
	</div>
</template>

<script>
import intnav from '@/components/intcourses/intnav.vue';
// import text from '@/components/intcourses/text.vue'
import cards from '@/components/common/cards.vue';
import tabPage from '@/components/common/tabPage.vue';
import {GetCourseInfo} from 'api/intCourse'

export default {
	components: {
		intnav,
		cards,
		tabPage
		// text,
	},
	data() {
		return {
			totalPage: 1,
			currentPage: 1,
			dataList: [],
			query:{
				pageNum:1,
				field:"id"
			}
		};
	},
	methods: {
		async GetData(){
			const {data: res}= await GetCourseInfo(this.query)
			console.log(res)			
		},		
		routerTo() {
			this.$router.push({
				name: 'intcourses',
				query: {
					page: this.currentPage
				}
			});
		},
		changePage(page) {
			this.currentPage = page;
			this.routerTo();
		}
	},
	created() {
		this.GetData();
		// this.totalPage = Math.ceil(resTwo.data.count / resTwo.data.page_size);
	}
};
</script>

<style scoped></style>
