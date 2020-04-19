<template>
	<div class="head">
		<div class="homeHeader">
			<router-link tag="a" :to="{ name: 'home' }" class="homeA">
				<img src="../../assets/logo.png" class="jianhui-logo">
			</router-link>

			<div class="navSelection">
				<router-link tag="a" :to="{ name: 'intcourses' }" class="allCoursesA">
					<div class="navSelectionItem navSelectionItem-int">
						推荐课程
					</div>
				</router-link>

				<div class="navSelectionItem navSelectionItem-all">
					<!-- 这个里面有一个子菜单 -->
					所有课程
					<div class="subNavSelection">

						<router-link tag="a" :to="{ name: 'medcourses' }" class="medcoursesA">
							<div class="subNavSelectionItem">
								医学专区
							</div>
						</router-link>

						<router-link tag="a" :to="{ name: 'nmedcourses' }" class="nmedcoursesA">
							<div class="subNavSelectionItem">
								非医学专区
							</div>
						</router-link>
					</div>
				</div>

				<router-link tag="a" :to="{ name: 'freecourses' }" class="freecoursesA">
					<div class="navSelectionItem navSelectionItem-free">
						免费课程
					</div>
				</router-link>
			</div>

			<div class="searchInput">
				<input type="text" name="search" placeholder="搜索 课程" class="searchInputItem">
				<i class="fas fa-search"></i>
			</div>

			<div style="flex-grow: 2">
			</div>
			
			<!-- //占位符 -->
			
			<!-- 个人用户展示导航 -->
			<div class="userbar" v-show="userbarsStatus" style="display: none;">
				<div class="pertitle">
					<img :src="'@/assets/img/'+currentUser.userimg" class="userimg"/>
					<span class="username" v-text="currentUser.username"></span>
				</div>
				
				<div class="info">
					<span class="mycourses" >我的课程</span>
					<span class="loginout" @click="loginout()">退出登录</span>
					
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
		</div>
		
		<!-- 登录 -->
		<div class="loginbox" v-show="loginStatus" @click="loginboxClick()" style="display: none;top: 0;">
			<div class="box" @click="stopProp()">
				<h3>用户登录</h3>
				<form name="login" id="login">
					<input type="text" placeholder="请输入姓名" class="username" style="padding-top: 1px;padding-bottom: 1px;"/>
					<input type="password" placeholder="请输入密码" class="psw" />
					<input type="button" value="立即登录" @click="login()" class="grayBtn" style="border: none;border-radius: 50px;"/>
					<input type="button" value="立即注册" @click="showregister()" class="blueBtn" style="border: none;border-radius: 50px;"/>
				</form>
			</div>
		</div>
		
		<!-- 注册 -->
		<div class="loginbox registerbox" v-show="registerStatus" @click="registerboxClixk()" style="display: none;top: 0;">
			<div class="box" @click="stopProp()">
				<h3>用户注册</h3>
				<form name="register" id="register">
					<input type="text" placeholder="请输入姓名" class="username" style="padding-top: 1px;padding-bottom: 1px;"/>
					<input type="password" placeholder="请输入密码" class="psw" />
					<input type="button" value="立即注册" @click="register()" class="grayBtn" style="border: none;border-radius: 50px;"/>
					<input type="button" value="立即登录" @click="showLogin()" class="blueBtn" style="border: none;border-radius: 50px;"/>
				</form>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	export default{
		name:'test',
		data:function(){
			//原始用户信息
			return{
				users:[
					{
						username:'zhangsan',
						password:'123456',
						userimg:'user01.jpg'
					},
					{
						username:'lisin',
						password:'123456',
						userimg:'user02.jpg'
					},
					{
						username:'admin',
						password:'123456',
						userimg:'user03.jpg'
					}
				],
				currentUser:{
					username:'',
					userimg:''
				},
				loginStatus:false,
				registerStatus:false,
				userbarsStatus:false,
				lrBtnStatus:true
			}
		},
		methods:{
			showLogin:function(){
				document.getElementById("login").reset()
				this.loginStatus=true
				this.registerStatus=false
			},
			showregister:function(){
				document.getElementById("register").reset()
				this.loginStatus=false
				this.registerStatus=login
			},
			loginout:function(){
				this.currentUser.username=''
				this.currentUser.userimg=''
				alert('退出成功！');
				this.userbarsStatus=false;
				this.lrBtnStatus=true;
			},
			//遮罩层
			loginboxClick:function(){
				this.loginStatus=false
			},
			registerboxClixk:function(){
				this.registerStatus=false
			},
			stopProp:function(e){
				e=e||event;
				e.stopPropagation()
			},
			login:function(){
				var username=$('.loginbox').find('.username').val();
				var psw=$('.loginbox').find('.psw').val();
				var flag=false;
				for (var i=0;i<this.users.length;i++){
					if(this.users[i].username===username && this.users[i].password===psw){
						flag=true;
						alert('登录成功')
						this.loginStatus=false;
						this.userbarsStatus=true;
						this.currentUser.username=this.users[i].username;
						this.currentUser.userimg=this.users[i].userimg;
						this.lrBtnStatus=false;
						break;
					}
				}
				
				if(!flag){
					alert('输入的账号密码不正确')
					document.getElementById("login").reset()
				}
			},
			register:function(){
				var obj={};
				var flag=false;
				var username=$('.registerbox').find('.username').val();
				var psw=$('.registerbox').find('.psw').val();
				for(var i=0;i<this.users.length;i++){
					if(this.users[i].username === username){
						flag=true;
						alert('该用户名已被注册')
						break;
					}
				}
				if(!flag){
					if(username==''||psw==''){
						alert('账号密码不能为空')
					}else{
						var randomNum=Math.floor(Math.random()*5)+1;
						var randomImg='user0'+randomNum+'.jpg';
						obj.username=username;
						obj.password=psw;
						obj.userimg=randomImg;
						
						this.users.push(obj)
						alert('注册成功')
						this.userbarsStatus=true;
						
						this.currentUser.username=obj.username;
						this.currentUser.userimg=obj.userimg;
						
						this.lrBtnStatus=false;
						document.getElementById("register").reset();
						this.registerStatus=false;
					}
				}
			},
		}
	}
</script>

<style type="text/css" scoped>
	.head {
		background-color: #FAF4FE;
		width: 100%;
		height: 80px;
		margin: -60px auto 0px auto;
		box-shadow: 0 4px 8px 0px #d1c7e7;
		display: flex;
		align-items: center;
		z-index: 999;
		position: relative;
	}

	.homeHeader {
		padding: 0px 48px;
		margin: 0px;
		display: flex;
		align-items: center;
	}

	.jianhui-logo {
		color: #0F4C82;
		height: 40px;
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

	/* .buttons-shop{
		display:block;
		color: #F0F0F0;
		border: #0C4165;
		background: #FFFFFF;
	}
 */
	.buttons-log {
		color: #fff;
		background: #0F4C82;
		font-size: 1rem;
		margin: auto 5px;
		cursor: pointer;
	}

	.navSelection {
		display: flex;
	}

	.navSelectionItem {
		font-size: 1.125rem;
		color: #4D555D;
		position: relative;
	}

	.navSelectionItem-int {
		padding: 20px 45px 20px 60px;
	}

	.navSelectionItem-all {
		padding: 20px 40px 20px 15px;
	}

	.navSelectionItem-free {
		padding: 20px 150px 20px 15px;
	}

	.navSelectionItem:hover {
		cursor: pointer;
		color: #0F4C81;
		/* font-weight: bold; */
	}

	.navSelectionItem:hover .subNavSelection {
		position: absolute;
		left: 0;
		top: 60px;
		display: flex;
	}

	.subNavSelection {
		display: none;
		flex-direction: column;
		width: 115%;
	}

	.subNavSelectionItem {
		padding: 15px 0px 15px 15px;
		color: #3a3a3a;
		text-align: left;
		background: #FAF4FF;
		border-radius: 5px;
		box-shadow: 0 4px 8px 0px #d1c7e7;
	}

	.subNavSelectionItem:hover {
		cursor: pointer;
		color: #0F4C81;
		/* font-weight: bold; */
	}

	.searchInputItem {
		display: block;
		width: auto;
		border: 0;
		border-bottom: 1px solid rgb(128, 125, 125);
		/* border-radius: 5px; */
		vertical-align: middle;
		margin-right: 0.5rem;
		height: calc(1.5em + 0.5rem + 2px);
		padding: 0.25rem 1.4375rem;
		font-size: 0.875rem;
		line-height: 1.5;
		background-color: #FAF4FE;
		/* color: #495057;
		background-color: #fff; */
		background-clip: padding-box;
		/* border: 1px solid #ced4da; */
		font-weight: 400;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	.searchInputItem:focus {
		border-color: #0F4C81;
		outline: 0;
	}

	.searchInput {
		position: relative;
		display: flex;
		align-items: center;
	}

	.fa-search {
		position: absolute;
		right: 12px;
		color: #333;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.5;
		border-radius: 0.2rem;
	}
	
	.loginbox{
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	
	.box{
		height: 300px;
		width: 300px;
		padding: 20px 20px 20px 20px;
		margin: 100px auto;
		background: #fff;
		border-radius: 10px;
	}
	
	.box h3{
		font-size: 16px;
		text-align: center;
	}
	
	.box input{
		height: 40px;
		width: 100%;
		border: 1px solid #0F4C82;
		margin: 10px 0;
		border-radius: 5px;
		font-size: 14px;
		font-family: "Microsoft YaHei";
		font-weight: 400;
	}
	
	.box input[type='botton']{
		color: #fff;
	}
	
	.blueBtn{
		background: #6A8DC3;
		border: none;
		border-radius: 50px;
	}
	
	.grayBtn{
		background: #D1C7E7;
		border: none;
		border-radius: 50px;
	}
	
	.userbar{
		display: flex;
		height: 70px;
	}
	
	.userimg{
		height: 46px;
		width: 46px;
		padding: 0px 0;
		border-radius: 50%;
		cursor: pointer;
	}
	
	.username{
		display: block;
		padding: 0px 0;
		font-size: 16px;
		color: #0F4C82;
		font-weight: bolder;
	}
	
	.mycourses{
		display: block;
		padding: 5px 5px;
		cursor: pointer;
	}
	
	.mycourses:hover{
		color: #FFFFFF;
		background-color: #6A8DC3;
		border-radius: 3px;
	}
	
	.loginout:hover{
		color: #FFFFFF;
		background-color: #6A8DC3;
		border-radius: 3px;
	}
	
	.loginout{
		display: block;
		padding: 5px 5px;
		cursor: pointer;
	}
	
	.pertitle{
		padding-left: 70px;
	}
	
	.info{
		padding-left: 25px;
		padding-top: 5px;
	}
</style>
