<template>
	<div class="loginmain">
		<!-- 个人用户展示导航 -->
		<div class="userbar" v-show="userbarsStatus" style="display: none;">

			<div class="info">
				<!-- <span class="mycourses">我的课程</span> -->
				<span class="loginout" @click="loginout()">退出登录</span>
			</div>

			<div class="pertitle">
				<router-link tag="a" :to="{ name: 'personal' }" class="personalA">
					<img :src="this.currentUser.userimg" class="userimg" />
				</router-link>

				<!-- <span class="username" v-text="currentUser.username"></span> -->
			</div>

		</div>

		<div class="dlzc">
			<a class="buttons buttons-log" @click="showLogin()" v-show="lrBtnStatus">
				登录
			</a>
			<a class="buttons buttons-log" @click="showregister()" v-show="lrBtnStatus">
				注册
			</a>
		</div>

		<!-- 账号登录 -->
		<div class="loginbox" v-show="loginStatus" @click="loginboxClick()" style="display: none;top: 0;">
			<div class="box" @click="stopProp()">
				<div class="login-tab">
					<span v-for="(item,index) in loginTabs" :key="index" class="login-tab-item" :class="{active: index==currentTabIndex}"
					 @click="handleLoginTabClick(index);">
						{{ item }}
					</span>
					<span class="login-colse" @click="closeClick()">
						<i class="el-icon-close"></i>
					</span>
				</div>

				<form name="login" id="login">
					<input type="text" placeholder="    请输入手机号" class="username" style="padding-top: 1px;padding-bottom: 1px;font-size: 15px;" />
					<input type="password" placeholder="    请输入密码" class="psw" style="font-size: 15px;" />
					<input type="button" value="立即登录" @click="login()" class="blueBtn" style="border: none;border-radius: 50px;color: #FFFFFF;" />
				</form>

				<div class="others">
					<span class="phone-login" @click="showPhone()">手机短信登录</span>
					|
					<span class="alipay-login">支付宝登录</span>
				</div>

				<div class="privacy">
					登录即同意淘课盟
					<router-link tag="a" :to="{ name: 'privacy' }" class="privacyA">
						<a @click="closeClick()">
							<<隐私政策>>
						</a>
					</router-link>
				</div>

			</div>
		</div>

		<!-- 注册 -->
		<div class="loginbox registerbox" v-show="registerStatus" @click="registerboxClick()" style="display: none;top: 0;">
			<div class="box" @click="stopProp()" style="height: 330px;">
				<div class="login-tab">
					<span v-for="(item,index) in loginTabs" :key="index" class="login-tab-item" :class="{active: index==currentTabIndex}"
					 @click="handleLoginTabClick(index);">
						{{ item }}
					</span>
					<span class="login-colse" @click="closeClick()">
						<i class="el-icon-close"></i>
					</span>
				</div>

				<form name="register" id="register">
					<input type="text" placeholder="    请输入手机号" class="username" style="padding-top: 1px;padding-bottom: 1px;font-size: 15px;" />
					<input type="password" placeholder="    请输入密码" class="psw" style="font-size: 15px;" />

					<div class="input-div" v-show="formData.phone">
						<input type="text" class="input code" name="code" v-model.trim="formData.code" placeholder="    请输入验证码">
						<button @click="getCode(formData)" class="code-btn" :disabled="!show">
							<span v-show="show">获取验证码</span>
							<span v-show="!show" class="count">{{count}} s</span>
						</button>
					</div>

					<input type="button" value="立即注册" @click="register()" class="blueBtn" style="border: none;border-radius: 50px;color: #FFFFFF;" />
				</form>

				<div class="others" style="padding-top: 0;">
					<span class="othersway">其他注册方式：</span>
					<span class="alipay-login" style="margin-left: 50px;">支付宝注册</span>
				</div>

				<div class="privacy" style="padding-top: 10px;">
					登录即同意淘课盟
					<router-link tag="a" :to="{ name: 'privacy' }" class="privacyA">
						<a @click="closeClick()">
							<<隐私政策>>
						</a>
					</router-link>
				</div>

			</div>
		</div>

		<!-- 手机登录 -->
		<div class="loginbox phonebox" v-show="phoneStatus" @click="phoneboxClick()" style="display: none;top: 0;">
			<div class="box" @click="stopProp()">
				<div class="login-tab">
					<span v-for="(item,index) in loginTabs" :key="index" class="login-tab-item" :class="{active: index==currentTabIndex}"
					 @click="handleLoginTabClick(index);">
						{{ item }}
					</span>
					<span class="login-colse">
						<i class="el-icon-close" @click="closeClick()"></i>
					</span>
				</div>

				<form name="phone" id="phone">
					<input type="text" placeholder="    请输入手机号" class="username" style="padding-top: 1px;padding-bottom: 1px;font-size: 15px;" />
					<div v-if="error" class="invalid-feedback">{{error}}</div>
					<div class="input-div" v-show="formData.phone" v-model="tphone">
						<input type="text" class="input code" name="code" v-model.trim="formData.code" placeholder="    请输入验证码">
						<button @click="getCode(formData)" class="code-btn" :disabled="!show">
							<span v-show="show">获取验证码</span>
							<span v-show="!show" class="count">{{count}} s</span>
						</button>
					</div>

					<input type="button" value="立即登录" @click="phone()" class="blueBtn" style="border: none;border-radius: 50px;color: #FFFFFF;" />
				</form>

				<div class="others">
					<span class="phone-login" @click="showLogin()">账号密码登录</span>
					|
					<span class="alipay-login">支付宝登录</span>
				</div>

				<div class="privacy">
					登录即同意淘课盟
					<router-link tag="a" :to="{ name: 'privacy' }" class="privacyA">
						<a @click="closeClick()">
							<<隐私政策>>
						</a>
					</router-link>
				</div>

			</div>
		</div>
	</div>

</template>

<script>
	import commentevent from '@/commentevent.js';
	const TIME_COUNT = 60;
	export default {
		name: 'test',
		data: function() {
			//原始用户信息
			return {
				loginTabs: ['登录', '注册'],
				currentTabIndex: 0,
				imgUrl: require("@/assets/close.png"),
				formData: {
					phone: '',
					code: '',
				},
				tphone:'',
				show: true,
				count: '',
				timer: null,
				users: [{
						username: 'zhangsan',
						password: '123456',
						userimg: 'user01.jpg'
					},
					{
						username: 'lisin',
						password: '123456',
						userimg: 'user02.jpg'
					},
					{
						username: 'admin',
						password: '123456',
						userimg: 'user03.jpg'
					}
				],
				currentUser: {
					username: '',
					userimg: ''
				},
				loginStatus: false,
				registerStatus: false,
				userbarsStatus: false,
				phoneStatus: false,
				lrBtnStatus: true,
				error: ''
			}
		},
		created() {
			const dataA = JSON.parse(sessionStorage.getItem('sta'));
			const dataB = JSON.parse(sessionStorage.getItem('bsta'));
			const dataC = JSON.parse(sessionStorage.getItem('uimg'));
			if (dataA == undefined && dataB == undefined) {
				this.userbarsStatus = false
				this.lrBtnStatus = true
			} else {
				this.userbarsStatus = dataA
				this.lrBtnStatus = dataB
				this.currentUser.userimg = dataC
			}
		},
		methods: {
			showPhone: function() {
				document.getElementById("phone").reset()
				this.loginStatus = false
				this.registerStatus = false
				this.phoneStatus = true
			},
			showLogin: function() {
				document.getElementById("login").reset()
				this.loginStatus = true
				this.registerStatus = false
				this.phoneStatus = false
				this.currentTabIndex = 0
			},
			showregister: function() {
				document.getElementById("register").reset()
				this.loginStatus = false
				this.registerStatus = true
				this.phoneStatus = false
				this.currentTabIndex = 1
			},
			loginout: function() {
				this.currentUser.username = ''
				this.currentUser.userimg = ''
				this.$message.info('退出成功！')
				this.userbarsStatus = false;
				this.lrBtnStatus = true;

				// this.currentUser.userbarsStaus=this.userbarsStaus
				// let str1=JSON.stringify(this.currentUser);
				// sessionStorage.setItem("token",str1)
				sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
				sessionStorage.setItem('uname', JSON.stringify(this.currentUser.username));
				sessionStorage.setItem('uimg', JSON.stringify(this.currentUser.userimg));
				sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));
			},
			//遮罩层
			loginboxClick: function() {
				this.loginStatus = false
			},
			registerboxClick: function() {
				this.registerStatus = false
			},
			phoneboxClick: function() {
				this.phoneStatus = false
			},
			stopProp: function(e) {
				e = e || event;
				e.stopPropagation()
			},
			closeClick: function() {
				this.loginStatus = false;
				this.registerStatus = false;
				this.phoneStatus = false
			},
			login: function() {
				var username = $('.loginbox').find('.username').val();
				var psw = $('.loginbox').find('.psw').val();
				var flag = false;
				for (var i = 0; i < this.users.length; i++) {
					if (this.users[i].username === username && this.users[i].password === psw) {
						flag = true;
						this.$message.success('登录成功')
						this.loginStatus = false;
						this.userbarsStatus = true;
						this.currentUser.username = this.users[i].username;
						this.currentUser.userimg = "img/" + this.users[i].userimg;
						this.lrBtnStatus = false;
						// this.currentUser.userbarsStaus=this.userbarsStaus
						// let str1=JSON.stringify(this.currentUser);
						// sessionStorage.setItem("token",str1)
						sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
						sessionStorage.setItem('uname', JSON.stringify(this.currentUser.username));
						sessionStorage.setItem('uimg', JSON.stringify(this.currentUser.userimg));
						sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));

						break;
					}
				}

				if (!flag) {
					// alert('输入的账号密码不正确')
					this.$message.error('输入的用户名密码不正确')
					document.getElementById("login").reset()
				}
			},
			register: function() {
				var obj = {};
				var flag = false;
				var username = $('.registerbox').find('.username').val();
				var psw = $('.registerbox').find('.psw').val();
				for (var i = 0; i < this.users.length; i++) {
					if (this.users[i].username === username) {
						flag = true;
						// alert('该用户名已被注册')
						this.$message.error('该用户名已被注册')
						break;
					}
				}
				if (!flag) {
					if (username == '' || psw == '') {
						// alert('账号密码不能为空')
						this.$message.warning('账号密码不能为空')
					} else {
						var randomNum = Math.floor(Math.random() * 5) + 1;
						var randomImg = 'user0' + randomNum + '.jpg';
						obj.username = username;
						obj.password = psw;
						obj.userimg = randomImg;

						this.users.push(obj)
						// alert('注册成功')
						this.$message.success('注册成功')
						this.userbarsStatus = true;

						this.currentUser.username = obj.username;
						this.currentUser.userimg = "img/" + obj.userimg;

						// this.currentUser.userbarsStaus=this.userbarsStaus
						// let str1=JSON.stringify(this.currentUser);
						// sessionStorage.setItem("token",str1)
						sessionStorage.setItem('sta', JSON.stringify(this.userbarsStatus));
						sessionStorage.setItem('uname', JSON.stringify(this.currentUser.username));
						sessionStorage.setItem('uimg', JSON.stringify(this.currentUser.userimg));

						this.lrBtnStatus = false;
						document.getElementById("register").reset();
						this.registerStatus = false;

						sessionStorage.setItem('bsta', JSON.stringify(this.lrBtnStatus));

					}
				}
			},
			handleLoginTabClick: function(index) {
				this.currentTabIndex = index;

				if (this.currentTabIndex === 0) {
					document.getElementById("login").reset()
					this.loginStatus = true
					this.registerStatus = false
					this.phoneStatus = false
				}
				if (this.currentTabIndex === 1) {
					document.getElementById("register").reset()
					this.loginStatus = false
					this.registerStatus = true
					this.phoneStatus = false
				}
			},
			getCode(formData) {
				if (this.validatePhone()) {
					if (!this.timer) {
						this.count = TIME_COUNT;
						this.show = false;
						this.timer = setInterval(() => {
							if (this.count > 0 && this.count <= TIME_COUNT) {
								this.count--;
							} else {
								this.show = true;
								clearInterval(this.timer);
								this.timer = null;
							}
						}, 1000)
					}
				}
			},
			validatePhone(){
				//验证手机号码
				if(!this.tphone){
					this.error={
						tphone:"手机号码不能为空"
					};
					return false;
				}else if(!/^1[3456789]\d{9}$/.test(this.tphone)){
					this.error={
						tphone:"请填写正确的手机号码"
					};
					return false;
				}else{
					this.error={};
					return true
				}
			}
		},

	};
</script>

<style scoped>
	.loginbox {
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		left: 0;
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
		padding: 5px 0px 0px 170px;
		line-height: 30px;
		color: #787d82;
	}

	.close-img {
		cursor: pointer;
		padding: 10px 10px;
		height: 15px;
	}


	.box input {
		height: 40px;
		width: 100%;
		border: 1px solid #0F4C82;
		margin: 10px 0;
		/* border-radius: 5px; */
		font-size: 14px;
		font-family: "Microsoft YaHei";
		font-weight: 400;
		border: none;
		border-radius: 8px;
		background-color: rgba(28, 31, 33, .06);
		font-size: 16px;
		color: #606266;
		outline: none;
	}

	.box input[type='botton'] {
		color: #fff;
	}

	.blueBtn {
		background: #6A8DC3 !important;
		border: none;
		border-radius: 50px;
		cursor: pointer;
	}

	.grayBtn {
		background: #D1C7E7 !important;
		border: none;
		border-radius: 50px;
	}

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

	.username {
		display: block;
		padding: 0px 0;
		font-size: 14px;
		color: #0F4C82;
		font-weight: bolder;
	}

	.mycourses {
		display: block;
		padding: 5px 5px;
		cursor: pointer;
		height: 25px;
	}

	.mycourses:hover {
		color: #FFFFFF;
		background-color: #6A8DC3;
		border-radius: 3px;
	}

	.loginout:hover {
		color: #FFFFFF;
		background-color: #0F4C82;
		border-radius: 3px;
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

	.phone-login {
		display: inline-block;
		vertical-align: left;
		margin-right: 12px;
		padding-left: 24px;
		padding-right: 24px;
		border-right: 1px solid #1a1C1F21;
		line-height: 24px;
		font-size: 14px;
		color: #0f4c81;
		cursor: pointer;
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
		padding-top: 5px;
		display: flex;
	}

	.privacy {
		padding-top: 15px;
		font-size: 12px;
		color: #717a84;
		text-align: center;
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

	.code-btn {
		height: 40px;
		font-size: 16px;
		border: 0;
		margin-left: 5px;
		margin-top: 10px;
		width: 150px;
		border-radius: 5px;
		background: #6A8DC3;
		color: #fff;
		font-family: "Microsoft YaHei";
		cursor: pointer;
	}

	>>>.input-div {
		display: flex !important;
	}

	#login {
		padding-top: 15px;
	}

	#phone {
		padding-top: 15px;
	}

	.invalid-feedback {
		font-size: 12px;
		height: 20px;
		color: #0F4C81;
	}
</style>
