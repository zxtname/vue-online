<template>
	<div class="contact">
		<div class="contacttil">
			<h2>联系我们</h2>
		</div>
		<div class="contactbd">
			<ul class="clist">
				<li>
					<h1>企业合作&讲师招募</h1>
					<h2>尾声同学</h2>
					<p>QQ 89987439</p>
				</li>
				<li class="cright">
					<h1>文章投稿&认证作者申请</h1>
					<h2>七号同学</h2>
					<p>QQ 86679439</p>
				</li>
				<li>
					<h1>人才招聘</h1>
					<h2>莱恩同学</h2>
					<p>QQ 26575439</p>
				</li>
				<li class="cright">
					<h1>市场合作</h1>
					<h2>白号同学</h2>
					<p>QQ 89987439</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	
	.contact{
		background-color: #FAFAFA;
		height: 800px;
	}
	
	.contacttil {
		width: 100%;
		height: 115px;
		background: url(../../assets/help-bg.png) no-repeat;
		background-size: cover;
		background-position: top center;
	}
	
	.cw {
		padding-top: 33px;
	}
	
	.contacttil h2 {
		font-size: 32px;
		color: #fff;
		line-height: 48px;
		margin: 0 auto 33px;
		text-align: center;
		font-weight: 400;
		padding-top: 15px;
	}
	.contactbd {
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
	.clist{
		width: 835px;
		padding-bottom: 100px;
		/* margin-right: -60px; */
		color: #60686b;
	}
	ul{
		list-style: none;
		display: block;
	}
	.clist li{
		display: inline-block;
		float: left;
		padding-bottom: 30px;
		width: 1100px;
		margin-right: 170px;
		border-bottom: 1px solid #d8d8d8;
	}
	.clist h1{
		text-align: left;
		font-size: 22px;
		line-height: 49px;
		color: #363d40;
	}
	/* h1{
		display: inline-block;
	} */
	.clist h2{
		text-align: left;
		padding: 0 10px 0;
		font-size: 18px;
		color: #1f2426;
	}
	h2{
		display: block;
	}
	.clist p{
		text-align: left;
		padding: 0 10px 32px;
		margin: 0;
		font-size: 14px;
		line-height: 30px;
		border-bottom: 1px solid #eceff0;
	}
	.cright{
		margin-right: 0;
		
	}
	.cright li{
		display: inline-block;
		float: left;
		padding-bottom: 30px;
		width: 300px;
	}
	
</style>
