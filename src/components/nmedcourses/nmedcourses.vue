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
	export default{
		components:{
			nmednav,
			tabPage,
		},
		data(){
			return{
				imgUrl:require("@/assets/redbg.png"),
				totalPage: 1,
				currentPage: 1
			}
		},
		methods: {
		        routerTo() {
		            this.$router.push({
		                name: 'nmedcourses',
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
	img{
		width: 100%;
	}
</style>
