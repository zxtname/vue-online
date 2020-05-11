<template>
		<!-- 遮罩+登录注册框 -->
		<div class="wrapper" v-show="mywrapperStatus" @click="wrapperClick()" style="top: 0;">
			<div class="box" @click="stopProp()" :class="{'is-register':registerStatus}">

				<div class="login-tab">
					<span v-for="(item,index) in loginTabs" :key="index" class="login-tab-item" :class="{active: index==mcurrentTabIndex}"
					 @click="handleLoginTabClick(index);">
						{{ item }}
					</span>
					<span class="login-colse" @click="closeClick()">
						<i class="el-icon-close"></i>
					</span>
				</div>
				
				<pwlogin :loginStatus="myloginStatus" @showPhone="showPhone()" @on-wlsta-click="onwlstaChange"></pwlogin>
				<register :registerStatus="myregisterStatus"></register>
				<phonelogin :phoneStatus="phoneStatus" @showLogin="showLogin()"></phonelogin>

				<div class="privacy" :class="{'is-register-p':registerStatus}">
					登录即同意淘课盟
					<router-link tag="a" :to="{ name: 'privacy' }" class="privacyA">
						<a @click="closeClick()">
							<<隐私政策>>
						</a>
					</router-link>
				</div>

			</div>
		</div>
</template>

<script>
	import pwlogin from '@/components/login/pwlogin.vue'
	import phonelogin from '@/components/login/phonelogin.vue'
	import register from '@/components/login/register.vue'
	
	export default {
		components:{
			pwlogin,
			register,
			phonelogin,
		},
		props: {
			wrapperStatus: Boolean,
			loginStatus:Boolean,
			registerStatus:Boolean,
			currentTabIndex:Number,
			// phoneStatus:Boolean
		},
		inject:['reload'],
		data: function() {
			return {
				loginTabs: ['登录', '注册'],
				//currentTabIndex: 0,
				mywrapperStatus: this.wrapperStatus,
				myloginStatus:this.loginStatus,
				myregisterStatus:this.registerStatus,
				mcurrentTabIndex:this.currentTabIndex,
				phoneStatus:false
			}
		},
		watch: {
			wrapperStatus(val) {
				this.mywrapperStatus = val;
			},
			mywrapperStatus(val) {
				this.$emit("on-wSta-closeClick", val); 
			},
			loginStatus(val){
				this.myloginStatus=val;
			},
			myloginStatus(val){
				this.$emit("on-lsta-click",val);
			},
			registerStatus(val){
				this.myregisterStatus=val;
			},
			myregisterStatus(val){
				this.$emit("on-rsta-click",val);
			},
			currentTabIndex(val){
				this.mcurrentTabIndex=val;
			},
			mcurrentTabIndex(val){
				this.$emit("on-mci-click",val);
			}
		},
		methods: {
			wrapperClick: function() {
				this.mywrapperStatus = !this.mywrapperStatus;
				this.myloginStatus = false
				this.myregisterStatus = false
				this.phoneStatus=false
				this.reload()
			},
			stopProp: function(e) {
				e = e || event;
				e.stopPropagation()
			},
			handleLoginTabClick: function(index) {
				this.mcurrentTabIndex = index;
				
				if (this.mcurrentTabIndex === 0) {
					this.myloginStatus = true
					this.myregisterStatus = false
					this.phoneStatus=false
				}
				if (this.mcurrentTabIndex === 1) {
					this.myloginStatus = false
					this.myregisterStatus = true
					this.phoneStatus=false
				}
			},
			closeClick: function() {
				this.mywrapperStatus = !this.mywrapperStatus;
				this.myloginStatus = false
				this.myregisterStatus = false
				this.phoneStatus=false
				this.reload()
			},
			showPhone(){
				this.myloginStatus = false
				this.phoneStatus=true
				this.myregisterStatus = false
			},
			showLogin(){
				this.myloginStatus = true
				this.phoneStatus=false
				this.myregisterStatus = false
			},
			onwlstaChange(val){
				this.loginStatus=val
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		left: 0;
	}

	.is-register{
		height: 330px !important;
		width: 300px !important;
		padding: 20px 20px 20px 20px;
		margin: 100px auto;
		background: #fff;
		border-radius: 10px;
	}
	
	.box {
		height: 300px;
		width: 300px;
		padding: 20px 20px 20px 20px;
		margin: 100px auto;
		background: #fff;
		border-radius: 10px;
	}

	.login-tab {
		position: relative;
		display: flex;
	}

	.login-tab-item {
		display: inline-block;
		width: 50px;
		font-size: 16px;
		line-height: 30px;
		color: #787d82;
		text-align: center;
		font-weight: 700;
		cursor: pointer;
	}

	.login-tab-item.active {
		color: #0f4c81;
	}

	.login-tab-item.active:after {
		content: "";
		display: block;
		margin: 0 auto;
		width: 16px;
		height: 4px;
		border-radius: 4px;
		background-color: #0f4c81;
	}

	.login-colse {
		float: right;
		display: inline-block;
		padding: 5px 0px 0px 175px;
		line-height: 30px;
		color: #787d82;
	}

	.privacy {
		padding-top: 15px;
		font-size: 12px;
		color: #717a84;
		text-align: center;
	}

	.is-register-p{
		padding-top: 10px !important;
	}

	.privacy a:visited {
		font-size: 12px;
		color: #37f;
	}

	.privacy a {
		font-size: 12px;
		color: #37f;
	}

	.el-icon-close {
		font-size: 24px;
		cursor: pointer;
		font-weight: bold;
	}

	.el-icon-close:hover {
		transform: scale(1.2);
		color: #0F4C82;
	}
</style>
