<template>
	<div class="homefooter">
		<a class="link">关于我们 |</a>
		<a class="link">联系方式 |</a>
		<a class="link">加入我们 |</a>
		<a class="link">帮助中心</a>
	</div>
</template>

<script type="text/javascript">
		  
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style scoped>
	.homefooter {
		justify-content: center;
		background-color: #FAF4FF;
		height: 110px;
		display: flex;
		padding: 0px 487px;
		box-sizing: border-box;
		/* position:absolute;
		bottom:0; */
	}

	.link {

		font-size: 1.125rem;
		color: #4D555D;
		padding: 46px 4px 46px 4px;
		cursor: pointer;
	}

	.link:hover {
		color: #0F4C82;
	}
	

</style>
