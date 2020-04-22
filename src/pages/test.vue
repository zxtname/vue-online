<template>
	<div class="login_box">
		<!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
			<span>
				<el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="60px" class="login_form">
					<el-form-item label="账号" prop="username"><el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input></el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-3702mima"></el-input>
					</el-form-item>
					<el-form-item class="btns">
						<el-button type="primary" @click="login">登录</el-button>
						<el-button type="info" @click="resetLoginForm">重置</el-button>
					</el-form-item>
				</el-form>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog> -->
		<!-- <login></login> -->
		<span>{{require(`@/assets/img/${this.userName}.jpg`)}}</span>
	</div>
</template>

<script>
	// import login from './test2.vue'
export default {
	components:{
		// login
	},
	data() {
		return {
			imgUrl:312321,
			userName:"user01",
			centerDialogVisible:false,
			loginForm: {
				username: 'admin',
				password: '123456'
			},
			// 表单验证
			loginFormRules: {
				username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }],
				password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }, { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }]
			}
		};
	},
	methods: {
		// 表单重置按钮
		resetLoginForm() {
			// console.log(this)
			// resetFields：element-ui提供的表单方法
			this.$refs.loginFormRef.resetFields();
		},
		login() {
			// 表单预验证
			// valid：bool类型
			this.$refs.loginFormRef.validate(async valid => {
				// console.log(valid)
				if (!valid) return false;
				// this.$http.post('login', this.loginForm): 返回值为promise
				// 返回值为promise，可加await简化操作 相应的也要加async
				// const { data: res } = await this.$http.post('login', this.loginForm)
				// // console.log(res)
				// if (res.meta.status !== 200) return this.$message.error('登录失败')
				this.$message.success('登录成功');
				// 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
				//   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
				//   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
				// window.sessionStorage.setItem('token', res.data.token)
				// 2、通过编程式导航跳转到后台主页, 路由地址为：/home
				// this.$router.push('/home')
			});
		}
	}
};
</script>

<style scoped>
.login_box {
	width: 100%;
	height: 360px;
	background-color: #fff;
	display: flex;
	/* border-radius: 3px; */
	/* position: absolute; */
	/* background-color: #fff; */
}
.login_form {
	position: absolute;
	bottom: 60px;
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
}
</style>
