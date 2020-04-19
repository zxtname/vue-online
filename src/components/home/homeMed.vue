<template>
	<div class="homeMed">
		<div class="medtitle">
			<img :src="imgUrl" class="med-logo">

			<span style="font-size: 1.5rem;font-weight: bold;color: 10375C;">  - = 医学专区 = -  </span>

			<img :src="imgUrl2" class="med-logo">
		</div>
		<cards></cards>
		<cards></cards>
	</div>
</template>

<script>
	import cards from'../common/cards.vue'
	
	export default {
		name: 'homeMed',
		components:{
			cards,
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
		/* justify-content:center; */
		position: relative;
	}
	.medtitle{
		display: flex;
		/* align-items: center; */
		justify-content:center;
		position: absolute;
		Width:100%;
		Height:37px;		
		Margin: 0 auto;
	}
	.med-logo{
		padding: 0px 20px;
	}
</style>
