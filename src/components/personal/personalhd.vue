<template>
	<div class="personalhd">
		<div class="pcenter">
			<div class="left">
				<!-- 文字提示 -->
				<!-- <el-tooltip class="item" effect="dark" content="点击更改头像" placement="top"> -->
				    <!-- 图片回显 -->
					<div class="useravatar">
						<img width="100%" height="100%" img src="../../assets/img/user01.jpg" alt="">
					</div> 
				<!-- </el-tooltip> -->
				
			
				<div class="userinfo">
					<p class="pname">张三呀</p>
					<p class="pid">ID:3278639</p>
				</div>
			</div>
			<div class="right">
				<div class="bt-setting">
					<i class="el-icon-edit"> </i>
					
					<!-- <span>资料编辑</span> -->
					
					<el-button type="text" class="pedit" @click="dialogFormVisible = true">资料编辑</el-button>
					
					<el-dialog title="资料编辑" :visible.sync="dialogFormVisible" class="peditcontent">
					  <el-form :model="form">
						<el-form-item label="头像上传" :label-width="formLabelWidth">
						  <el-upload
						    class="avatar-uploader"
						    action="https://jsonplaceholder.typicode.com/posts/"
						    :show-file-list="false"
						    :on-success="handleAvatarSuccess"
						    :before-upload="beforeAvatarUpload">
						    <img v-if="imageUrl" :src="imageUrl" class="avatar">
						    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
						  </el-upload>
						  
						  <!-- 图片回显示  比如它回显在顶部头像，我放在这里是方便演示-->
						  <!-- <div class="avatar">
							<img width="100%" height="100%" :src="avatarUrl" alt />
						  </div> -->
						  
						</el-form-item>
					    <el-form-item label="用户昵称" :label-width="formLabelWidth">
					      <el-input v-model="form.name" autocomplete="off"></el-input>
					    </el-form-item>
					    <el-form-item label="性别" :label-width="formLabelWidth">
					      <el-select v-model="form.region" placeholder="请选择性别">
					        <el-option label="女" value="nv"></el-option>
					        <el-option label="男" value="nan"></el-option>
					      </el-select>
					    </el-form-item>
						
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogFormVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
					  </div>
					</el-dialog>
					
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	  export default {
	    data() {
	      return {
			
			
	        // gridData: [{
	        //   date: '2016-05-02',
	        //   name: '王小虎',
	        //   address: '上海市普陀区金沙江路 1518 弄'
	        // }, {
	        //   date: '2016-05-04',
	        //   name: '王小虎',
	        //   address: '上海市普陀区金沙江路 1518 弄'
	        // }, {
	        //   date: '2016-05-01',
	        //   name: '王小虎',
	        //   address: '上海市普陀区金沙江路 1518 弄'
	        // }, {
	        //   date: '2016-05-03',
	        //   name: '王小虎',
	        //   address: '上海市普陀区金沙江路 1518 弄'
	        // }],
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
		methods: {
		      handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		      },
		      beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;
		
		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		      },
			  
			  // upLoad(file) {
			  //       const formData = new FormData();
			  //       formData.append('file', file.file);
			  //       console.log(file);
			  //       this.$http.uploadHttp('/udb/api/v1/oss/fileUpload', formData).then((res) => {
			  //         console.log(res);
			  //         console.log('上传成功');
			  //         if (res.data.code === 0) {
			  //           this.successUrl = res.data.response; // 请求之后将返回的URL给修改的接口在进行一次修改请求
			  //           this.headUrl = res.data.response; // 请求成功之后赋给头像的URL
			  //           this.$message('头像上传成功');
			  //           this.$store.dispatch('person/setAvatar', this.successUrl);
			  //           const obj = {
			  //             headUrl: this.successUrl
			  //           };
			  //           this.edit(obj);
			  //           // this.getAccount();
			  //         } else {
			  //           this.$message('头像上传失败');
			  //         }
			  //       });
			  //     },
			  
			  // getAvatar() {
			  //       this.req
			  //         .get("/login/getavatar")
			  //         .then(response => {
			  //           let data = response.data;
			  //           this.avatarUrl =
			  //             "http://127.0.0.1:666" + data[data.length - 1].imgUrl;
			            
			  //         })
			  //         .catch(err => {
			  //           console.log(err);
			  //         });
			  //     }
		    },
			created() {
			    // 获取头像
			    this.getAvatar();
			}
	  };
</script>

<style scoped>
	.pcenter{
		width: 1250px;
		margin: auto;
	}
	.personalhd{
	  padding-top: 80px;
	  width: 100%;
	  height: 200px;
	  background: url(../../assets/personalbg.png) no-repeat center top;
	  background-size: cover;
	  box-sizing: border-box;
	  color: #fff;
	  }
		.useravatar{
		margin-left: 40px;
	    flex: 0 0 140px;
	    width: 140px;
	    height: 140px;
	    border-radius: 50%;
	    box-sizing: border-box;
	    border: 2px solid #fff;
	    cursor: pointer;
		}
		
		.useravatar img{
			display: block;
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		.userinfo{
			/* display: inline-block; */
			margin-top: -120px;
		}
	
		.pname{
			position:absolute;
			float: left;
			margin-top: 20px;
			margin-left: 220px;
			height: 40px;
			line-height: 36px;
			font-size: 24px;
		}
		.pid{
			position:absolute;
			margin: 70px 220px;
			height: 16px;
		}

		.bt-setting{
			display: block;
			float: right;
			margin-right: 150px;
			margin-top: 30px;
			width: 150px;
			color: #FFFFFF;
			border-radius: 26px;
			border: 1px solid #ececec;
			text-align: center;
			font-size: 20px;
			height: 40px;
			line-height: 40px;
			cursor: pointer;
		}
		.pedit{
			font-size: 20px;
			height: 20px;
			line-height: 20px;
			color: #FFFFFF;
		}
			
		.el-input{
			width: 400px;
			padding-right: 80px;
		}
		.el-select{
			width: 400px;
			padding-right: 80px;
		}
		.el-option{
			width: 200px;
			padding-right: 100px;
		}
	.avatar-uploader{
		width: 300px;
		padding-left: 70px;
	}
	.avatar-uploader  el-upload{
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #0F4C81;
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
