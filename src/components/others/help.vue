<template>
	<div class="help">
		<div class="help-title w clearfix">
			<h2>帮助中心</h2>
		</div>

		<div class="help-body clearfix">
			<div class="help-main">
				<!-- v-for="(item,index) in helpInfo -->
				<div class="help-detail" v-for="(item,index) in helpInfo">
					<div class="detail-title">
						<div class="h-logo">
							<img src="../../../public/tkmicon.png" />
						</div>
						<span class="helpt">
							{{item.helptitle}}
						</span>
					</div>
					<p>
						<span class="helpcontent">
							{{item.helpcontent}}
						</span>
						<br>
					</p>
				</div>
				<div class="feedback-tip show">
					<h5>:) 非常感谢您的支持，我们会努力为您提供更好的服务和帮助</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				helpInfo: [{
						helptitle: '视频有声音无图像',
						helpcontent: '此问题一般是处在flash播放模式下。解决方法：播放页右键→设置，弹出的窗口中去掉启用硬件加速。'
					},
					{
						helptitle: '视频播放卡顿',
						helpcontent: '请清除你浏览器中的缓存，重新访问淘课盟。注：强烈建议使用最新版本的Chrome和Firefox，保持最好的观看体验。'
					},
					{
						helptitle: '学习过程中，遇到不会的问题怎么办？',
						helpcontent: '学习过程中遇到困难，可以把你的问题发到所学小节的“评价”区，一起学习的同学或老师会帮你回复解决。'
					},
					{
						helptitle: '成功购买课程后能退款吗？',
						helpcontent: '为了维护淘课盟用户的正当权益并且保障淘课盟业务的顺利开展，特对退课规定如下：依照网络课堂服务条款的要求：淘课盟所提供的实战课程属于虚拟商品，原则上一经付款购买都不允许任何形式的退换。'
					},
				]
			}
		}
	}
</script>

<style scoped>
	.help{
		background-color: #FAFAFA;
	}
	
	.help-title {
		width: 100%;
		height: 115px;
		background: url(../../assets/help-bg.png) no-repeat;
		background-size: cover;
		background-position: top center;
	}

	.w {
		padding-top: 33px;
	}

	.help-title h2 {
		font-size: 32px;
		color: #fff;
		line-height: 48px;
		margin: 0 auto 33px;
		text-align: center;
		font-weight: 400;
		padding-top: 15px;
	}

	.help-body {
		width: 1152px;
		margin: 24px auto;
	}

	.clearfix:after {
		content: '\0020';
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.help-main {
		width: 1000px;
		background: #fff;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
		border-radius: 12px;
		display: inline-block;
		padding: 10px 32px;
		box-sizing: border-box;
		min-height: 700px;
	}

	.help-detail {
		color: #14191e;
		line-height: 1.76em;
		font-size: 14px;
		word-break: break-all;
		white-space: normal;
		border-bottom: 1px solid #d8d8d8;
		padding: 24px 0;
		word-wrap: break-word;
	}
	
	.help-detail img{
		height: 18px;
		width: 18px;
	}
	
	.h-logo{
		padding: 3px;
	}
	
	.detail-title{
		display: flex;
	}

	.helpt {
		font-size: 16px;
		color: #1c1f21;
		line-height: 22px;
		margin: 0 0 16px 0;
		font-weight: 700;
	}

	.help-detail p {
		padding: 0px;
		box-sizing: border-box;
		word-break: break-all;
		word-wrap: break-word;
		font-size: 16px;
		line-height: 28px;
		white-space: normal;
		color: rgb(101, 110, 115);
		background-color: rgb(255, 255, 255);
		text-indent: 0;
		margin: 15px 0 !important;
		overflow-x: auto;
		text-align: justify;
	}

	.helpcontent{
		color: rgb(0, 0, 0);
	}

	.show {
		display: block;
	}

	.feedback-tip h5 {
		margin-top: 24px;
		font-size: 16px;
		color: #1c1f21;
		line-height: 24px;
	}
</style>
