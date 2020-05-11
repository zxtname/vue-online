<template>
	<div id="comment" style="margin-left: 27px;">

		<!--评论-->
		<div class="wcommentbox">

			<div class=" commemtlist ">
				<div class="btncom">
					<el-button round @click="showWordsbox()">我要评价</el-button>
				</div>


				<div class="wordsbox" v-show="wordsboxStatus" @click="wordsboxClick()" style="display: none;top: 0;">
					<div class="box" @click="stopProp()">
						<div class="words-tab">
							<span class="wordstitle">
								我要评价
							</span>
							<span class="login-colse">
								<i class="el-icon-close" @click="closeClick()"></i>
							</span>
						</div>

						<el-input type="textarea" :rows="5" placeholder="请输入评价" v-model="textarea" maxlength="150" show-word-limit>
						</el-input>

						<input type="submit" value="发表评价" @click="subComment()" />

					</div>
				</div>

				<dl class="commentbox" v-for="(value, index) in comments">
					<dt>
						<img class="icon" :src="value.userimg ">
						<h4>
							<span class="username ">{{value.username}}</span>
						</h4>
					</dt>
					<dd class="comment">{{value.words}}</dd>
					<dd class="btbar ">
						<span class="date">时间:{{value.time}}</span>
					</dd>
				</dl>

			</div>
		</div>
		<!--评论-->

	</div>

</template>

<script type="text/javascript">
	//日期格式化函数
	Date.prototype.format = function(fmt) {
		var o = {
			'M+': this.getMonth() + 1, // 月份
			'd+': this.getDate(), // 日
			'h+': this.getHours(), // 小时
			'm+': this.getMinutes(), // 分
			's+': this.getSeconds(), // 秒
			'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
			'S': this.getMilliseconds() // 毫秒
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return fmt;
	};



	export default {
		name: 'comment',
		data: function() {
			return {
				textarea: '',
				// textsum: 0,
				comments: [{
						username: '张三',
						userimg: 'img/user01.jpg',
						words: '不错',
						time: "2020-02-17 09:15:25"
					},
					{
						username: 'lisi',
						userimg: 'img/user02.jpg',
						words: '不错棒棒棒',
						time: "2020-02-22 09:39:25"
					},
					{
						username: 'www',
						userimg: 'img/user03.jpg',
						words: '有效，良心',
						time: "2020-04-17 15:15:25"
					},
				],
				value: {
					username: '',
					userimg: '',
					words: '',
					time: ''
				},
				currentUser: {
					username: '',
					userimg: ''
				},
				wordsboxStatus: false,
			}
		},

		methods: {
			showWordsbox: function() {
				this.wordsboxStatus = true
			},
			wordsboxClick: function() {
				this.wordsboxStatus = false
			},
			stopProp: function(e) {
				e = e || event;
				e.stopPropagation()
			},
			closeClick: function() {
				this.wordsboxStatus = false
			},
			subComment: function() {
				const dataB = JSON.parse(sessionStorage.getItem('sta'));
				const dataC = JSON.parse(sessionStorage.getItem('uid'));
				const dataD = JSON.parse(sessionStorage.getItem('uimg'));
				if (!dataB) {
					this.$message.error('登录后才能评论')
				} else {
					if ($('.el-textarea textarea').val() == "") {
						this.$message.warning('请先评论内容')
					} else {
						var obj = {};
						obj.username = dataC;
						obj.userimg = dataD;
						obj.words = $('.el-textarea textarea').val();
						obj.time = new Date().format('yyyy-MM-dd hh:mm:ss');

						this.comments.unshift(obj);
						this.$message.success('评论成功');
						$('.el-textarea textarea').val('');
						this.wordsboxStatus = false;
					}
				}
			},

		},
		// watch: {
		// 	textarea() {
		// 		this.textsum = this.textarea.length;
		// 	}
		// }
	}
</script>

<style scoped>
	.wordsbox {
		position: fixed;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		left: 0;
	}

	.box {
		height: 260px;
		width: 560px;
		padding: 20px 20px 20px 20px;
		margin: 100px auto;
		background: #fff;
		border-radius: 10px;
	}

	.words-tab {
		margin: 0px;
		padding: 0px 32px 0;
		line-height: 20px;
		position: relative;
		display: flex;
	}

	.wordstitle {
		font-size: 16px;
		font-weight: bold;
		color: #1c1f21;
		display: inline-block;
		line-height: 50px;
		text-align: center;
		padding-right: 405px;
	}

	.el-icon-close {
		font-size: 24px;
		cursor: pointer;
		font-weight: bold;
		float: right;
		display: inline-block;
		line-height: 50px;
		color: #787d82;
	}

	.el-icon-close:hover {
		color: #0F4C82;
	}
	
	>>>.el-textarea__inner:focus{
		border-color: #0F4C81;
	}
	
	>>>.el-textarea__inner{
		resize: none;
	}

	dt {
		float: left;
		text-align: center;
		margin-right: 15px;
	}

	.username {
		display: block;
		text-align: center;
	}

	.w {
		width: 1200px;
		margin: auto;
	}

	.commentbox {
		margin: 20px 0;
		height: 200px;
		width: 1195px;
		border-radius: 40px;
		background-color: #fff;
		box-shadow: 3px 3px 4px rgba(0, 0, 0, .2);
	}

	.icon {
		float: left;
		margin: 40px 50px 20px 50px;
		height: 70px;
		width: 70px;
		border-radius: 10px;
	}

	.comment {
		float: left;
		margin-top: 50px;
		width: 800px;
		text-align: left;
		line-height: 30px;
		min-height: 99px;
	}

	.date {
		float: right;
		margin-right: 60px;
		margin-top: 0px;
		font-size: 14px;
		color: #cccccc;
	}

	.wordsbox textarea {
		height: 100px;
		width: 99%;
		margin-top: 20px;
		margin-bottom: 10px;
		resize: none;
	}

	.wordsbox input {
		margin-top: 10px;
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
		margin-left: 350px;
		outline: none;
	}

	.wordsbox {
		margin-bottom: 50px;
	}

	.el-textarea {
		margin-top: 20px;
		width: 500px;
	}

	>>>.el-button {
		float: right;
		margin-right: 20px;
		border: 0;
		font-family: "microsoft yahei";
	}
	
	>>>.el-button:hover{
		color: #fff;
		background: #0F4C81;
	}
	
	>>>.el-button:active{
		color: #fff;
		background: #0F4C81;
	}
	
	>>>.el-button:focus{
		color: #fff;
		background: #0F4C81;
	}

	.btncom {
		height: 35px;
	}
</style>
