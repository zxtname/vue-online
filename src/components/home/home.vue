<template>
    <div class="home">
		<homeHeader></homeHeader>
		<homeCarousel></homeCarousel>
		<homeRecommendation></homeRecommendation>
		<homeMed></homeMed>
		<homeNotmed></homeNotmed>
		<homefooter></homefooter>
		<!-- <homeNav></homeNav> --><!-- 3.放置 -->
    </div>
</template>

<script>
	import homeHeader from '../common/homeHeader.vue'
	// import homeNav from './homeNav.vue'//1.导入
	import homeCarousel from './homeCarousel.vue'
	import homeRecommendation from './homeRecommendation.vue'
	import homeMed from './homeMed.vue'
	import homeNotmed from './homeNotmed.vue'
	import homefooter from '../common/homefooter.vue'
	// import homeCarousel2 from './homeCarousel2.vue'
	
	export default{
		components:{
			homeHeader,
			homeCarousel,
			homeRecommendation,
			homeMed,
			homeNotmed,
			homefooter,
			// homeCarousel2,
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