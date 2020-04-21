<template>
	<div class="intcourses">
		<intnav @getActiveIndex="setField"></intnav>
		<cards :dataList="coursesContent"></cards>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
		<!-- <text></text> -->
	</div>
</template>

<script>
import intnav from '@/components/intcourses/intnav.vue';
// import text from '@/components/intcourses/text.vue'
import cards from '@/components/common/cards.vue';
import tabPage from '@/components/common/tabPage.vue';
import { GetCourseInfo } from 'api/intCourse';

export default {
	components: {
		intnav,
		cards,
		tabPage
		// text,
	},
	created() {
		this.GetData();
	},
	data() {
		return {
			totalPage: 1,
			coursesContent: [],
			query: {
				pageNum: 1,
				field: 'id'
			}
		};
	},
	methods: {
		async GetData() {
			try {
				let { data: res } = await GetCourseInfo(this.query);
				if (res.code !== 1) {
					this.$message.error('获取数据失败');
				}
				this.totalPage = res.totalPage;
				this.coursesContent = res.data;
			} catch {
				this.$message.error('接口异常');
			}
			// console.log(res);
		},
		routerTo() {
			this.$router.push({
				name: 'intcourses',
				query: {
					...this.$route.query,
					page: this.currentPage
				}
			});
		},
		changePage(page) {
			this.query.pageNum = page;
			this.GetData();
			// this.routerTo();
		},
		setField(val) {
			switch (val) {				
				case 1:
					this.query.field = 'price';
					break;
				case 2:
					this.query.field = 'clickCount';
					break;
				case 3:
					this.query.field = 'creatTime';
					break;
				default:
					this.query.field = 'id';
					break;
			}
			// console.log(this.field)
			this.GetData();
		}
	}
};
</script>

<style scoped>
.intcourses {
	min-height: 600px;
}
</style>
