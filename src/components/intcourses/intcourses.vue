<template>
	<div class="intcourses">
		<intnav></intnav>
		<cards></cards>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
		<!-- <text></text> -->
	</div>
</template>

<script>
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
			}
		},
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
	}
</script>

<style scoped>
	.intcourses{
		min-height: 600px;
	}
</style>
