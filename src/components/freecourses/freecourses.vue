<template>
	<div class="freecourses">
		<freenav></freenav>
		<cards></cards>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
	</div>
</template>

<script>
	import freenav from '@/components/freecourses/freenav.vue'
	import cards from '@/components/common/cards.vue'
	import tabPage from '@/components/common/tabPage.vue'
	
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
				currentPage: 1
			}
		},
		methods: {
		        routerTo() {
		            this.$router.push({
		                name: 'freecourses',
		                query: {
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
		        this.totalPage = Math.ceil(resTwo.data.count / resTwo.data.page_size)
		    }
	}
</script>

<style scoped>
</style>
