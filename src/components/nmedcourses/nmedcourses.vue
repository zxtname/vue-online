<template>
	<div class="nmedcourses">
		<img :src="imgUrl" />
		<nmednav></nmednav>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
	</div>
</template>

<script>
	import nmednav from '@/components/nmedcourses/nmednav.vue'
	import tabPage from '@/components/common/tabPage.vue'
	import coursesApi from '@/api/mock/home/index.js'
	
	export default{
		components:{
			nmednav,
			tabPage,
		},
		data(){
			return{
				imgUrl:require("@/assets/redbg.png"),
				totalPage: 1,
				currentPage: 1,
				coursesContent: [],
			}
		},
		methods: {
		        routerTo() {
		            this.$router.push({
		                name: 'nmedcourses',
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
	}
</script>

<style scoped>
	.nmedcourses{
		min-height: 600px;
	}
	img{
		width: 100%;
	}
</style>
