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
				},
			}
		},
		created() {
			const dataA = JSON.parse(sessionStorage.getItem('sta'));
			const dataB = JSON.parse(sessionStorage.getItem('uid'));
			const dataC = JSON.parse(sessionStorage.getItem('uimg'));
			if (dataA == undefined) {
				this.userbarsStatus = false
			} else {
				this.userbarsStatus = dataA
				this.currentUser.userimg = dataC
				this.currentUser.userid = dataB
			}
		},
		methods:{
			loginout:function(){
				this.currentUser.userimg = ''
				this.currentUser.userid=''
				this.$message.info('退出成功！')
				this.userbarsStatus=false
				this.lrBtnStatus = true;
				
				// this.currentUser.userbarsStaus=this.userbarsStaus
				// let str1=JSON.stringify(this.currentUser);
				// sessionStorage.setItem("token",str1)
				sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
				sessionStorage.setItem('uimg', JSON.stringify(this.currentUser.userimg));
				sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));
				sessionStorage.setItem('uid', JSON.stringify(this.currentUser.userid));
				
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
