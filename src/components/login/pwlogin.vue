<template>
	<div class="pw-login" v-show="wologinStatus" id="login">
		<!-- 手机号 -->
		<inputGroup type="number" v-model="phone" placeholder="请输入手机号" :error="errors.phone"></inputGroup>

		<!-- 密码 -->
		<inputGroup type="password" v-model="password" placeholder="请输入密码" :error="errors.psw"></inputGroup>

		<!-- 登录按钮 -->
		<div class="login-btn" @click="pwlogin()"><button>立即登录</button></div>

		<div class="others">
			<span class="phone-login" @click="$emit('showPhone')">手机短信登录</span>
			|
			<span class="alipay-login">支付宝登录</span>
		</div>

		<!-- <phonelogin :phoneStatus="phoneStatus"></phonelogin> -->
	</div>
</template>

<script>
import inputGroup from '@/components/login/inputGroup.vue';
import { Login } from 'api/login';
// import phonelogin from '@/components/login/phonelogin.vue'

export default {
	props: {
		loginStatus: Boolean
	},
	components: {
		inputGroup
	},
	inject: ['reload'],
	data() {
		return {
			phone: '',
			password: '',
			errors: {},
			users: [
				{
					userphone: '13600000000',
					password: '123456',
					userimg: 'user01.jpg',
					userid: 'tao12345678'
				},
				{
					userphone: '13500000000',
					password: '123456',
					userimg: 'user02.jpg',
					userid: 'tao12345677'
				},
				{
					userphone: '13400000000',
					password: '123456',
					userimg: 'user03.jpg',
					userid: 'tao12345676'
				}
			],
			currentUser: {
				userimg: '',
				userid: '',
				userphone:'',
				password:''
			},
			wologinStatus: this.loginStatus
		};
	},
	watch: {
		loginStatus(val) {
			this.wologinStatus = val;
		},
		wologinStatus(val) {
			this.$emit('on-wlsta-click', val);
		}
	},
	methods: {
		async pwlogin() {
			if (this.validatePhone()) {
				if (this.validatePasw()) {
					var query = {};
					query.Name = this.phone;
					query.Password = this.password;
					var { data: res } = await Login(query);
					// console.log(res);
					if (res.code == 1) {
						this.$message.success('登录成功');
						this.userbarsStatus = true;
						this.currentUser.userimg = res.data.userImg;
						this.currentUser.userid = res.data.userId;
						this.lrBtnStatus = false;
						sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
						sessionStorage.setItem('uimg', JSON.stringify(this.currentUser.userimg));
						sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));
						sessionStorage.setItem('uid', JSON.stringify(this.currentUser.userid));
						this.reload();
					} else {
						// 下面的是静态的方法;
						var userphone = this.phone;
						var psw = this.password;
						var flag = false;
						for (var i = 0; i < this.users.length; i++) {
							if (this.users[i].userphone === userphone && this.users[i].password === psw) {
								flag = true;
								this.$message.success('登录成功');
								this.userbarsStatus = true;
								this.currentUser.userimg = 'img/' + this.users[i].userimg;
								this.currentUser.userid = this.users[i].userid;
								this.currentUser.userphone=this.phone;
								this.currentUser.password=this.password;
								this.lrBtnStatus = false;

								sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
								sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));
								
								let str1 = JSON.stringify(this.currentUser);
								sessionStorage.setItem("token", str1)

								this.reload();

								break;
							}
						}

						if (!flag) {
							this.$message.error('输入的手机号密码不正确');
						}
					}
				}
			}
		},
		validatePhone() {
			//验证手机号码
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
		validatePasw() {
			//验证密码
			if (!this.password) {
				this.errors = {
					psw: '密码不能为空'
				};
				return false;
			} else if (!/^(\w){6,20}$/.test(this.password)) {
				this.errors = {
					psw: '只能输入6-20个字母、数字、下划线'
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

.phone-login {
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
