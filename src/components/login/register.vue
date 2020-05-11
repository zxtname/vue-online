<template>
	<div class="register" v-show="registerStatus">
		<inputGroup type="number" v-model="phone" placeholder="请输入手机号" :btnTitle="btnTitle" :disabled="disabled" :error="errors.phone"
		 @btnClick="getVerifyCode()"></inputGroup>
		<inputGroup type="number" v-model="verifyCode" placeholder="请输入验证码" :error="errors.code"></inputGroup>
		<inputGroup type="password" v-model="password" placeholder="请输入密码" :error="errors.psw"></inputGroup>
		<div class="register-btn" @click="register()">
			<button>立即注册</button>
		</div>

		<div class="others">
			<span class="othersway">其他注册方式：</span>
			<span class="alipay-login" style="margin-left: 50px;">支付宝注册</span>
		</div>
	</div>
</template>

<script>
	import inputGroup from '@/components/login/inputGroup.vue'
	export default {
		props: {
			registerStatus: Boolean
		},
		components: {
			inputGroup,
		},
		inject:['reload'],
		data() {
			return {
				phone: "",
				password: "",
				verifyCode: "",
				errors: {},
				btnTitle: "获取验证码",
				disabled: false,
				users: [{
						userphone: '13600000000',
						userid: 'tao12345678',
						password: '123456',
						userimg: 'user01.jpg'
					},
					{
						userphone: '13500000000',
						userid: 'tao12345677',
						password: '123456',
						userimg: 'user02.jpg'
					},
					{
						userphone: '13400000000',
						userid: 'tao12345676',
						password: '123456',
						userimg: 'user03.jpg'
					}
				],
				currentUser: {
					userimg: '',
					userid:'',
				},
			}
		},
		methods: {
			register: function() {
				if (this.validateCode()) {
					if (this.validatePasw()) {
						var obj = {};
						var flag = false;
						var userphone = this.phone;
						var psw = this.password;
						for (var i = 0; i < this.users.length; i++) {
							if (this.users[i].userphone === userphone) {
								flag = true;
								this.$message.error('该手机号已被注册')
								break;
							}
						}
						if (!flag) {
							//验证验证码是否正确
							
							//生成随机id以及随机头像 并放入用户信息内
							var randomNum = Math.floor(Math.random() * 5) + 1;
							var randomImg = 'user0' + randomNum + '.jpg';
							//var ran = Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
							var ran=Date.now();
							var ranid='tao'+ran;
							obj.userphone = userphone;
							obj.password = psw;
							obj.userimg = randomImg;
							obj.userid=ranid;

							this.users.push(obj)
							this.$message.success('注册成功')
							this.userbarsStatus = true;

							this.currentUser.userid = obj.userid;
							this.currentUser.userimg = "img/" + obj.userimg;

							sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
							sessionStorage.setItem('uid', JSON.stringify(this.currentUser.userid));
							sessionStorage.setItem('uimg', JSON.stringify(this.currentUser.userimg));

							this.lrBtnStatus = false;

							sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));
							
							this.reload();

						}
					}
				}
			},
			
			//获取验证码
			getVerifyCode() {
				if (this.validatePhone()) {
					this.validateBtn();
					//发送网络请求


					this.$message.success('验证码已发送到您手机号');
				}
			},
			validateBtn() {
				let time = 60;
				let timer = setInterval(() => {
					if (time == 0) {
						clearInterval(timer);
						this.btnTitle = "获取验证码";
						this.disabled = false;
					} else {
						// 倒计时
						this.btnTitle = time + "秒后重试";
						this.disabled = true;
						time--;
					}
				}, 1000);
			},
			validatePhone() {
				//验证验证码
				if (!this.phone) {
					this.errors = {
						phone: "手机号码不能为空"
					};
					return false;
				} else if (!/^1[345678]\d{9}$/.test(this.phone)) {
					this.errors = {
						phone: "请填写正确的手机号码"
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
						code: "验证不能为空"
					};
					return false;
				} else if (!/^\d{6}$/.test(this.verifyCode)) {
					this.errors = {
						code: "请填写正确的验证码"
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
						psw: "密码不能为空"
					};
					return false;
				} else if (!/^(\w){6,20}$/.test(this.password)) {
					this.errors = {
						psw: "只能输入6-20个字母、数字、下划线"
					};
					return false;
				} else {
					this.errors = {};
					return true;
				}
			},
		}
	}
</script>

<style scoped>
	.register-btn button {
		font-family: "Microsoft YaHei";
		width: 100%;
		height: 40px;
		background-color: #6A8DC3;
		color: white;
		font-size: 16px;
		border: none;
		outline: none;
		border-radius: 50px;
		cursor: pointer;
		font-weight: 400;
	}

	.register-btn button[disabled] {
		background-color: #9aaec7;
	}

	.text-group,
	.register-btn {
		margin-top: 18px;
	}

	.othersway {
		display: inline-block;
		vertical-align: right;
		margin-left: 30px;
		border-right: 1px solid #1a1C1F21;
		line-height: 24px;
		font-size: 14px;
		color: #717a84;
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
		border-right: 1px solid #1a1C1F21;
		line-height: 24px;
		font-size: 14px;
		color: #0f4c81;
		cursor: pointer;
	}
</style>
