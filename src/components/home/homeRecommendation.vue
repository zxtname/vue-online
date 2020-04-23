<template>
	<div class="homeRecommendation w">
		<div class="rectitle">
			<img :src="imgUrl" class="int-logo">

			<span style="font-size: 1.5rem;font-weight: bold;color: 10375C;">  - = 热门推荐 = -  </span>

			<img :src="imgUrl2" class="int-logo">
		</div>
		
		<div class="homeredcardslist">
			<cards :dataList="dataList"></cards>
		</div>
		
		
	</div>
</template>

<script>
	import cards from '../common/cards.vue'
	
	export default {
		name: 'homeRecommendation',
		props: {
			dataList: {
				type: Array,
				default: function() {
					return null;
				}
			}
		},
		components:{
			cards,
		},
		data() {
			return {
				imgUrl: require("../../assets/intl.png"),
				imgUrl2: require("../../assets/intr.png")				
			}
		}
	};
</script>

<style>
	.w {
		width: 1250px;
		margin: auto;
	}
	.homeredcardslist{
		height: 18.125rem;
	}
	.homeRecommendation {
		padding: 450px 0px 88px 0px;
		/* z-index: -1; */
		position: relative;
	}
	.rectitle{
		display: flex;
		/* align-items: center; */
		justify-content:center;
		position: absolute;
		Width:100%;
		Height:37px;		
		Margin: 0 auto;
	}
	.int-logo{
		padding: 0px 20px;
	}
</style>
