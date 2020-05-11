<template>
	<div class="homefooter">
		
			<a class="link" @click="aboutus()">关于我们 |</a>
		
			<a class="link" @click="contact()">联系方式 |</a>
			<a class="link" @click="joinus()">加入我们 |</a>
			<a class="link" @click="help()">帮助中心</a>
	</div>
</template>

<script type="text/javascript">
		  
	export default {
		data() {
			return {

			}
		},
		methods:{
			aboutus(){
				this.$router.push({
					path:'/aboutus',
				})
			},
			contact(){
				this.$router.push({
					path:'/contact',
				})
			},
			joinus(){
				this.$router.push({
					path:'/joinus',
				})
			},
			help(){
				this.$router.push({
					path:'/help',
				})
			},
		}
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
