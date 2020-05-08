<template>
	<div class="suggestion">
		<div class="suggestion-title">
			<span>
				意见反馈
			</span>
		</div>

		<el-input type="textarea" :rows="10" placeholder="请输入反馈" v-model="textarea" maxlength="500" show-word-limit>
		</el-input>

		<input class="subbtn" type="submit" value="发送反馈" @click="subComment()" />

	</div>
	</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				textarea: '',
			}
		},
		methods:{
			subComment:function(){
				this.$message.success('评论成功');
				$('.el-textarea textarea').val('');
			}
		}
	}
</script>

<style scoped>
	.suggestion {
		width: 1000px;
		margin: 24px auto;
		min-height: 400px;
	}

	>>>.el-textarea__inner:focus {
		border-color: #0F4C81;
	}

	>>>.el-textarea__inner {
		resize: none;
	}

	.subbtn {
		margin-top: 20px;
		padding: 11px 32px;
		font-size: 16px;
		line-height: 24px;
		border-radius: 24px;
		border-style: solid;
		border-width: 1px;
		cursor: pointer;
		transition: all .3s;
		background-color: #0f4c81;
		color: #fff;
		font-family: "Microsoft YaHei";
		outline: none;
		float: right;
	}

	.suggestion-title {
		font-size: 16px;
		font-weight: bold;
		color: #1c1f21;
		display: inline-block;
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #d8d8d8;
		width: 1000px;
		margin-bottom: 25px;
	}

	.suggestion-title span {
		float: left;
	}
</style>
