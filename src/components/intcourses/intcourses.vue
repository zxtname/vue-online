<template>
	<div class="intcourses">
		<intnav></intnav>
		<cards :dataList="dataList"></cards>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
		<!-- <text></text> -->
	</div>
</template>

<script>
<<<<<<< HEAD
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
=======
	import intnav from '@/components/intcourses/intnav.vue'
	// import text from '@/components/intcourses/text.vue'
	import cards from '@/components/common/cards.vue'
	import tabPage from '@/components/common/tabPage.vue'
	import coursesApi from '@/api/mock/home/index.js'

	export default {
		components: {
			intnav,
			cards,
			tabPage,
			// text,
		},
		data() {
			return {
				totalPage: 1,
				currentPage: 1,
				coursesContent: [],
>>>>>>> ea2fcf07979f2ca8cf63cdac0cebde03f75fcad8
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
<<<<<<< HEAD
		changePage(page) {
			this.currentPage = page;
			this.routerTo();
		}
	},
	created() {
		this.GetData();
		// this.totalPage = Math.ceil(resTwo.data.count / resTwo.data.page_size);
=======
		methods: {
		        routerTo() {
		            this.$router.push({
		                name: 'intcourses',
		                query: {
							...this.$route.query,
		                    page: this.currentPage
		                }
		            })
		        },
		        changePage(page) {
		            this.currentPage = page
		            this.routerTo()
		        }
		    },
		    async created () {
				let resTwo = await coursesApi.getCoursesContent(this.$route.query)
				this.coursesContent = resTwo.data		
		        this.totalPage = Math.ceil(resTwo.data.count / resTwo.data.page_size)
		    }
>>>>>>> ea2fcf07979f2ca8cf63cdac0cebde03f75fcad8
	}
};
</script>

<<<<<<< HEAD
<style scoped></style>
=======
<style scoped>
	.intcourses{
		min-height: 600px;
	}
</style>
>>>>>>> ea2fcf07979f2ca8cf63cdac0cebde03f75fcad8
