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
				currentPage: 1
			}
		},
		methods: {
		        routerTo() {
		            this.$router.push({
		                name: 'intcourses',
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
