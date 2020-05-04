<template>
	<div class="userbar" v-show="userbarsStatus" style="display: none;">
		<router-link tag="a" :to="{ name: 'personal' }" class="personal">
		<span class="class" >我的课程</span>
		</router-link>
		<img :src="'@/assets/img/'+currentUser.userimg" class="userimg"/>
		
		<span class="loginout" @click="loginout()">退出登录</span>
		<span class="username" v-text="currentUser.username"></span>
	</div>
</template>

<script>
	export default{
		name:'userbar',
		data:{
			//原始用户信息
			users:[
				{
					username:'zhangsan',
					userimg:'user01.jpg',
				},
				{
					username:'lisi',
					userimg:'user02.jpg'
				},
				{
					username:'admin',
					userimg:'user03.jpg',
				}
			],
			currentUser:{
				username:'',
				userimg:'',
			},
			userbarsStatus:false,
		}
	}
</script>

<style scoped>
	.userbar{
		display: flex;
		height: 70px;
		
	}
	
	.userimg{
		height: 46px;
		width: 46px;
		padding: 16px 0;
		border-radius: 50%;
	}
	
	.username{
		display: block;
		padding: 20px 0;
		font-size: 18px;
		color: red;
		font-weight: bolder;
	}
</style>
