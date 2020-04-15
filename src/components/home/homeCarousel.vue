<template>
	<div class="homeCarousel">
		<div class="block">
			<el-carousel height="382px">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3 class="small">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script type="text/javascript">

</script>

<style type="text/css" scoped>
	.homeCarousel{
		border-radius: 10px;
		/* z-index: -1; */
	}
	
	.block {
		position: relative;
		border-radius: 10px;
	}

	.el-carousel {
		Width:93%;
		Height:382px;
		Position: absolute;
		Left: 0px;
		Right: 0px;
		Margin: auto;
		border-radius: 10px;
		box-shadow:0px 10px 20px rgba(7,17,27,0.1) ;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 0.875rem;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
		border-radius: 10px;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
		border-radius: 10px;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
		border-radius: 10px;
	}
</style>
