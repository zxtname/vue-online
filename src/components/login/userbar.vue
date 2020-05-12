<template>
	<div class="userbar" v-show="userbarsStatus">

		<div class="info">
			<span class="loginout" @click="loginout()">退出登录</span>
		</div>

		<div class="pertitle">
			<router-link tag="a" :to="{ name: 'personal' }" class="personalA">
				<img :src="this.currentUser.userimg" class="userimg" />
			</router-link>
		</div>

	</div>
</template>

<script>
	export default{
		inject:['reload'],
		data:function(){
			return{
				userbarsStatus:false,
				currentUser: {
					userimg: '',
					userid:'',
					userphone:'',
					password:''
				},
			}
		},
		created() {
			const dataA = JSON.parse(sessionStorage.getItem('sta'));
			var obj=JSON.parse(sessionStorage.getItem("token"));
			if (dataA == undefined) {
				this.userbarsStatus = false
			} else {
				this.userbarsStatus = dataA
				this.currentUser=obj
			}
		},
		methods:{
			loginout:function(){
				this.currentUser=''
				
				this.$message.info('退出成功！')
				this.userbarsStatus=false
				this.lrBtnStatus = true;
				
				sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
				sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));
				
				let str1 = JSON.stringify(this.currentUser);
				sessionStorage.setItem("token", str1)
				
				this.reload();
				
			},
		}
	}
</script>

<style scoped>
	.userbar {
		display: flex;
		height: 70px;
		font-size: 14px;
	}
	
	.userimg {
		height: 32px;
		width: 32px;
		padding: 0px 0;
		border-radius: 50%;
		cursor: pointer;
	}
	
	.loginout {
		display: block;
		padding: 5px 5px;
		cursor: pointer;
		height: 22px;
	}
	
	.pertitle {
		padding-left: 18px;
		padding-top: 20px;
	}
	
	.info {
		padding-left: 25px;
		padding-top: 22px;
		display: flex;
	}
</style>
