<template>
    <div class="home">
		<!-- <homeHeader></homeHeader> -->
		<homeCarousel></homeCarousel>
		<homeRecommendation></homeRecommendation>
		<homeMed></homeMed>
		<homeNotmed></homeNotmed>
		<!-- <homefooter></homefooter> -->
		<!-- <homeNav></homeNav> --><!-- 3.放置 -->
    </div>
</template>

<script>

	import homeCarousel from './homeCarousel.vue'
	import homeRecommendation from './homeRecommendation.vue'
	import homeMed from './homeMed.vue'
	import homeNotmed from './homeNotmed.vue'

	
	export default{
		components:{
			homeCarousel,
			homeRecommendation,
			homeMed,
			homeNotmed,

			// homeNav,//2.注册
		}
	}
</script>

<style scoped>
	.home{
		display: flex;
		flex-direction: column;
		background-color: #F0F0F0;
	}
</style>