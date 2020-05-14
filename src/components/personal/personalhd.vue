<template>
	<div class="personalhd">
		<div class="pcenter">
			<div class="left">
				
				<div class="useravatar"><img width="100%" height="100%" img :src="userInfo.headUrl" /></div>				
				<div class="userinfo">
					<p class="pname">{{userInfo.realName}}</p>
					<p class="pid">账号:{{userInfo.userName}}</p>	
														<!-- {{uploadUrl}} -->
				</div>
			</div>
			<div class="right">
				<div class="bt-setting">
					<i class="el-icon-edit"></i>

					<!-- <span>资料编辑</span> -->

					<el-button type="text" class="pedit" @click="dialogFormVisible = true">资料编辑</el-button>

					<el-dialog title="资料编辑" :visible.sync="dialogFormVisible" class="peditcontent">
						<el-form :model="userInfo">
							<el-form-item label="头像上传" :label-width="formLabelWidth">
								<el-upload
									class="avatar-uploader"
									:action="uploadUrl"
									:show-file-list="false"
									:on-success="handleAvatarSuccess"
									:before-upload="beforeAvatarUpload"
								>
									<img v-if="imageUrl" :src="imageUrl" class="avatar" />
									<i v-else class="el-icon-plus avatar-uploader-icon"></i>
								</el-upload>
							</el-form-item>
							<el-form-item label="用户昵称" :label-width="formLabelWidth"><el-input v-model="userInfo.realName" autocomplete="off"></el-input></el-form-item>
							<el-form-item label="性别" :label-width="formLabelWidth">
								<el-select v-model="form.sex" :value="userInfo.sex" placeholder="请选择性别">
									<el-option label="女" value=true></el-option>
									<el-option label="男" value=false></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="邮箱" :label-width="formLabelWidth"><el-input v-model="userInfo.eMail" autocomplete="off"></el-input></el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="editInfo">确 定</el-button>
						</div>
					</el-dialog>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { GetUserInfo, EditInfo } from 'api/login';
export default {
	data() {
		return {
			userInfo:{
				realName:"张三",
				userCode:"00014",
				id:"00001",
				headUrl:"https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png",
				sex:true,
				eMail:"zxt_name@123.com"
			},			
			dialogTableVisible: false,
			dialogFormVisible: false,
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formLabelWidth: '120px',
			imageUrl: ''
		};
	},
	created() {		
		this.getuserinfo();
	},
	methods: {
		async editInfo(){
			var {data:res}  = await EditInfo(this.userInfo);
			if(res.code==1) this.$message.success("修改成功")
			else{
				this.$message.error("请重新登陆！")
			}
			
			this.dialogFormVisible = false;
		},
		async getuserinfo(){
			var {data:res}  = await GetUserInfo();
			// console.log(res)
			if(res.code==1) this.userInfo=res.data;
			else{
				this.$message.error("请重新登陆！")
			}
		},
		handleAvatarSuccess(res, file) {			
			var index=this.userInfo.headUrl.lastIndexOf("/");
			var str=this.userInfo.headUrl.substring(0,index);
			this.$message.info(res.Message);
			this.userInfo.headUrl=str+"/"+res.Data;
			this.imageUrl = this.userInfo.headUrl;
			// console.log(res)
		},
		beforeAvatarUpload(file) {
			// const isJPG = file.type === 'image/jpeg';
			// const isLt2M = file.size / 1024 / 1024 < 2;

			// if (!isJPG) {
			// 	this.$message.error('上传头像图片只能是 JPG 格式!');
			// }
			// if (!isLt2M) {
			// 	this.$message.error('上传头像图片大小不能超过 2MB!');
			// }
			// return isJPG && isLt2M;
		}
	},
	computed:{
		uploadUrl(){
			var index=this.userInfo.headUrl.lastIndexOf("/image");
			var str=this.userInfo.headUrl.substring(0,index);
			str=str+"/api/Video/UploadImg?SecretKey=123456"
			return str;
		},
		// sex:function(){
		// 	return this.userInfo.sex?"男":"女";
		// }
	}
};
</script>

<style scoped>
.pcenter {
	width: 1250px;
	margin: auto;
}
.personalhd {
	padding-top: 80px;
	width: 100%;
	height: 200px;
	background: url(../../assets/personalbg.png) no-repeat center top;
	background-size: cover;
	box-sizing: border-box;
	color: #fff;
}
.useravatar {
	margin-left: 40px;
	flex: 0 0 140px;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	box-sizing: border-box;
	border: 2px solid #fff;
	cursor: pointer;
}

.useravatar img {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.userinfo {
	/* display: inline-block; */
	margin-top: -120px;
}

.pname {
	position: absolute;
	float: left;
	margin-top: 20px;
	margin-left: 220px;
	height: 40px;
	line-height: 36px;
	font-size: 24px;
}
.pid {
	position: absolute;
	margin: 70px 220px;
	height: 16px;
}

.bt-setting {
	display: block;
	float: right;
	margin-right: 150px;
	margin-top: 30px;
	width: 150px;
	color: #ffffff;
	border-radius: 26px;
	border: 1px solid #ececec;
	text-align: center;
	font-size: 20px;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
}
.pedit {
	font-size: 20px;
	height: 20px;
	line-height: 20px;
	color: #ffffff;
}

.el-input {
	width: 400px;
	padding-right: 80px;
}
.el-select {
	width: 400px;
	padding-right: 80px;
}
.el-option {
	width: 200px;
	padding-right: 100px;
}
.avatar-uploader {
	width: 300px;
	padding-left: 70px;
}
.avatar-uploader el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}
.avatar-uploader .el-upload:hover {
	border-color: #0f4c81;
}
.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	line-height: 178px;
	text-align: center;
}
.avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
