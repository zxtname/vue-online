<template>
	<div class="phone-login" v-show="phoneStatus">
		<inputGroup
			type="number"
			v-model="phone"
			placeholder="请输入手机号"
			:btnTitle="btnTitle"
			:disabled="disabled"
			:error="errors.phone"
			@btnClick="getVerifyCode()"
		></inputGroup>

		<!-- 验证码 -->
		<inputGroup type="number" v-model="verifyCode" placeholder="请输入验证码" :error="errors.code"></inputGroup>

		<!-- 登录按钮 -->
		<div class="login-btn" @click="phoneLogin()"><button>立即登录</button></div>

		<div class="others">
			<span class="psw-login" @click="$emit('showLogin')">账号密码登录</span>
			|
			<span class="alipay-login">支付宝登录</span>
		</div>
	</div>
</template>

<script>
import inputGroup from '@/components/login/inputGroup.vue';
import { GetLoginVerifyCode, LoginByVerifyCode } from 'api/login';
export default {
	props: {
		phoneStatus: Boolean
	},
	components: {
		inputGroup
	},
	inject: ['reload'],
	data() {
		return {
			phone: '',
			verifyCode: '',
			errors: {},
			btnTitle: '获取验证码',
			disabled: false
		};
	},
	methods: {
		async phoneLogin() {
			if (this.validateCode()) {
				//验证手机号是否注册
				//验证验证码是否正确
				var query = {};
				query.UserName = this.phone;
				query.Validate = this.verifyCode;
				let { data: res } = await LoginByVerifyCode(query);
				// console.log(res);
				if (res.code == 1) {
					this.$message.success('登录成功');
					var userbarsStatus = true;
					var currentUser={};
					currentUser.userimg = res.data.userImg;
					currentUser.userid = res.data.userId;
					var lrBtnStatus = false;
					sessionStorage.setItem('sta', JSON.stringify(userbarsStatus));
					sessionStorage.setItem('bsta', JSON.stringify(lrBtnStatus));
					let str1 = JSON.stringify(currentUser);
					sessionStorage.setItem('token', str1);
					sessionStorage.setItem('auth', res.data.token);
					this.reload();
				}
				this.reload();
			}
		},

		//获取验证码
		getVerifyCode() {
			if (this.validatePhone()) {
				GetLoginVerifyCode(this.phone).then(res => {					
					if (res.data.code == 1 || res.data.code == 0) {
						this.$message.success('验证码已发送到您手机号');
					} else {
						this.$message.error(res.data.msg);
					}
				});
				// this.reload();
			}
		},
		validateBtn() {
			let time = 60;
			let timer = setInterval(() => {
				if (time == 0) {
					clearInterval(timer);
					this.btnTitle = '获取验证码';
					this.disabled = false;
				} else {
					// 倒计时
					this.btnTitle = time + '秒后重试';
					this.disabled = true;
					time--;
				}
			}, 1000);
		},
		validatePhone() {
			//验证验证码
			if (!this.phone) {
				this.errors = {
					phone: '手机号码不能为空'
				};
				return false;
			} else if (!/^1[345678]\d{9}$/.test(this.phone)) {
				this.errors = {
					phone: '请填写正确的手机号码'
				};
				return false;
			} else {
				this.errors = {};
				return true;
			}
		},
		validateCode() {
			//验证手机号码
			if (!this.verifyCode) {
				this.errors = {
					code: '验证不能为空'
				};
				return false;
			} else if (!/^\d{6}$/.test(this.verifyCode)) {
				this.errors = {
					code: '请填写正确的验证码'
				};
				return false;
			} else {
				this.errors = {};
				return true;
			}
		}
	}
};
</script>

<style scoped>
.login-btn button {
	font-family: 'Microsoft YaHei';
	width: 100%;
	height: 40px;
	background-color: #6a8dc3;
	color: white;
	font-size: 16px;
	border: none;
	outline: none;
	border-radius: 50px;
	cursor: pointer;
	font-weight: 400;
}

.login-btn button[disabled] {
	background-color: #9aaec7;
}

.text-group,
.login-btn {
	margin-top: 25px;
}

.others {
	padding-top: 10px;
	display: flex;
}

.alipay-login {
	display: inline-block;
	vertical-align: right;
	margin-left: 12px;
	padding-left: 24px;
	padding-right: 24px;
	border-right: 1px solid #1a1c1f21;
	line-height: 24px;
	font-size: 14px;
	color: #0f4c81;
	cursor: pointer;
}

.psw-login {
	display: inline-block;
	vertical-align: left;
	margin-right: 12px;
	padding-left: 24px;
	padding-right: 24px;
	border-right: 1px solid #1a1c1f21;
	line-height: 24px;
	font-size: 14px;
	color: #0f4c81;
	cursor: pointer;
}
</style>
