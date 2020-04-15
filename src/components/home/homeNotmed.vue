<template>
	<div class="homeNotmed">
		<div class="notmedtitle">
			<img :src="imgUrl" class="nmd-logo">

			<span style="font-size: 1.5rem;font-weight: bold;color: 10375C;">  - = 非医学专区 = -  </span>

			<img :src="imgUrl2" class="nmd-logo">
		</div>
		<nmdcards></nmdcards>
	</div>
</template>

<script>
	import nmdcards from '../common/nmdcards.vue'
	export default {
		name: 'homeNotmed',
		components:{
			nmdcards,
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
	.homeNotmed {
		padding: 54px 0px 65px 0px;
		/* z-index: -1; */
		position: relative;
	}
	.notmedtitle{
		display: flex;
		align-items: center;
		position: absolute;
		Width:auto;
		Height:37px;
		Left: 456px;
		Right: 0px;
		Margin: auto;
	}
	.nmd-logo{
		padding: 0px 20px;
	}
</style>
