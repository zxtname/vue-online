<template>
	<div class="header-right">
		<btn></btn>
		<userbar></userbar>
	</div>
</template>

<script>
	import btn from '@/components/login/btn.vue'
	import userbar from '@/components/login/userbar.vue'
	
	export default{
		components:{
			btn,
			userbar
		}
	}
</script>

<style scoped>
</style>
