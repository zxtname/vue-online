<template>
	<div class="homeNotmed">
		<div class="notmedtitle">
			<img :src="imgUrl" class="nmd-logo">

			<span style="font-size: 1.5rem;font-weight: bold;color: 10375C;">  - = 非医学专区 = -  </span>

			<img :src="imgUrl2" class="nmd-logo">
		</div>
		
		<div class="homenmedcardslist">
			<cards :dataList="dataList"></cards>
		</div>
		
		<!-- <cards></cards> -->
	</div>
</template>

<script>
	import cards from '../common/cards.vue'
	export default {
		props:{
			dataList:{
				type:Array,
				default:function(){
					return null;
				}
			}
		},
		name: 'homeNotmed',
		components:{
			cards,
		},
		data() {
			return {
				imgUrl: require("../../assets/nmdl.png"),
				imgUrl2: require("../../assets/nmdr.png")
				
			}
		}
	};
</script>

<style>
	.homenmedcardslist{
		height: 36.25rem;
	}
	.homeNotmed {
		padding: 54px 0px 65px 0px;
		/* z-index: -1; */
		position: relative;
	}
	.notmedtitle{
		display: flex;
		/* align-items: center; */
		justify-content:center;
		position: absolute;
		Width:100%;
		Height:37px;
		/* Left: 456px;
		Right: 0px; */
		Margin:0 auto;
	}
	.nmd-logo{
		padding: 0px 20px;
	}
</style>
