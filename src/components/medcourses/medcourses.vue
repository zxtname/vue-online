<template>
	<div class="medcourses">
		<img :src="imgUrl" />
		<mednav></mednav>
		<tabPage :totalPage="totalPage" @changePage="changePage"></tabPage>
	</div>
</template>

<script>
	import tabPage from '@/components/common/tabPage.vue'
	import mednav from '@/components/medcourses/mednav.vue'
	
	export default {
		name: 'medcourses',
		components: {
			mednav,
			tabPage,
		},
		data() {
			return {
				imgUrl: require("@/assets/bluebg.png"),
				totalPage: 1,
				currentPage: 1
			}
		},
		methods: {
		        routerTo() {
		            this.$router.push({
		                name: 'medcourses',
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
	};
</script>

<style scoped>
	img{
		width: 100%;
	}
</style>
