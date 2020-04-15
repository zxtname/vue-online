<template>
	<div class="homeMed">
		<div class="medtitle">
			<img :src="imgUrl" class="med-logo">

			<span style="font-size: 1.5rem;font-weight: bold;color: 10375C;">  - = 医学专区 = -  </span>

			<img :src="imgUrl2" class="med-logo">
		</div>
		<mdcards></mdcards>
	</div>
</template>

<script>
	import mdcards from'../common/mdcards.vue'
	
	export default {
		name: 'homeMed',
		components:{
			mdcards,
		},
		data() {
			return {
				imgUrl: require("../../assets/mdl.png"),
				imgUrl2: require("../../assets/mdr.png")
				
			}
		}
	};
</script>

<style>
	.homeMed {
		/* z-index: -1; */
		position: relative;
	}
	.medtitle{
		display: flex;
		align-items: center;
		position: absolute;
		Width:auto;
		Height:37px;
		Left: 470px;
		Right: 0px;
		Margin: auto;
	}
	.med-logo{
		padding: 0px 20px;
	}
</style>
