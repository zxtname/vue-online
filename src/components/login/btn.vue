<template>
	<div class="btn">
		<div class="dlzc">
			<a class="buttons buttons-log" @click="showLogin()" v-show="lrBtnStatus">
				登录
			</a>
			<a class="buttons buttons-log" @click="showRegister()" v-show="lrBtnStatus">
				注册
			</a>
		</div>

		<wrapper 
			:wrapperStatus="wrapperStatus" 
			@on-wSta-closeClick="onwStaChange" 
			:loginStatus="loginStatus" 
			:registerStatus="registerStatus"
			@on-lsta-click="onlstaChange" 
			@on-rsta-click="onwrstaChange" 
			@on-mci-click="onmciclick" 
			:currentTabIndex="currentTabIndex"
			></wrapper>
	</div>
</template>

<script>
	import wrapper from '@/components/login/wrapper.vue'

	export default {
		components: {
			wrapper,
		},
		data: function() {
			return {
				lrBtnStatus: true,
				wrapperStatus: false,
				loginStatus:false,
				registerStatus:false,
				currentTabIndex:0,
				// phoneStatus:false
			}
		},
		created() {
			const dataB = JSON.parse(sessionStorage.getItem('bsta'));
			if (dataB == undefined) {
				this.lrBtnStatus = true
			} else {
				this.lrBtnStatus = dataB
			}
		},
		methods: {
			showLogin: function() {
				this.wrapperStatus = !this.wrapperStatus;
				this.loginStatus=true;
				this.registerStatus=false;
				this.currentTabIndex = 0;
			},
			showRegister: function() {
				this.wrapperStatus = !this.wrapperStatus;
				this.registerStatus=true;
				this.loginStatus=false;
				this.currentTabIndex = 1;
			},
			onwStaChange(val) {
				this.wrapperStatus = val; 
			},
			onlstaChange(val) {
				this.loginStatus = val; 
			},
			onwrstaChange(val) {
				this.registerStatus = val; 
			},
			onmciclick(val){
				this.currentTabIndex=val;
			}
		}
	}
</script>

<style scoped>
	.buttons {
		display: flex;
		padding: 12px 12px;
		border-radius: 8px;
		font-size: 1rem;
	}

	.dlzc {
		display: flex;
		padding-left: 100px;
		float: right;
	}

	.buttons-log {
		color: #fff;
		background: #0F4C82;
		font-size: 1rem;
		margin: auto 5px;
		cursor: pointer;
	}
</style>
