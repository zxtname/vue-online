<template>
	<div class="pay">
		<div class="pay-header">
			<div class="pay-header-warp">
				<div class="pay-title">
					<h1 class="left">
						确认订单
					</h1>
				</div>
			</div>
		</div>
		<div class="pay-body">
			<div class="title-box">
				<p class="l goods-info-title">课程信息</p>
			</div>
			<div class="detail-box">
				<ul>
					<li class="item-cart">
						<img class="l" src='https://szimg.mukewang.com/5ea0118b0948c90a12000676-160-90.jpg' />
						<div class="text-info-box l">
							<p class="package-title"></p>
							<router-link tag="a" :to="{ name: 'coursesdetail' }" class="coursesdetail">
								<p class="package-info-title">(毕设项目)Vue+Go前端后端一体化 企业级微服务网关项目</p>
							</router-link>
						</div>
						<div class="info-price l">
							<em>￥</em>
							<span class="pay-price">298.00</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="pay-box">
				<div class="pay-title-box">
					<p class="p-price">
						<em>￥</em>
						<span class="p-pay-price">298.00</span>
					</p>
					<p class="price-text">商品总金额：</p>
				</div>
				<div class="pay-btn">
					<a>确认支付</a>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.l {
		float: left;
	}

	.pay {
		min-height: 600px;
	}

	.pay-header {
		height: 160px;
		background-color: #e3e6e9;
		background: url(../../assets/cart-header-bg.jpg) repeat-x left bottom;
	}

	.pay-header-warp {
		width: 1104px;
		height: 120px;
		line-height: 120px;
		margin-left: auto;
		margin-right: auto;
		font-size: 14px;
	}

	.pay-title {
		color: #4d555d;
		font-weight: 200;
		font-size: 14px;
		float: left;
	}

	.left {
		float: left;
		font-size: 32px;
		line-height: 115px;
		margin-right: 25px;
		color: #07111b;
		font-weight: 200;
	}

	.pay-body {
		width: 1152px;
		padding: 0 36px 32px;
		background-color: #fff;
		margin-top: -40px;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .1);
		border-radius: 8px;
		box-sizing: border-box;
	}

	.title-box {
		padding-top: 36px;
		padding-bottom: 24px;
	}

	.title-box:after {
		content: '\0020';
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.goods-info-title {
		margin-left: 12px;
		color: #07111b;
		font-size: 16px;
		line-height: 16px;
		margin-top: 0;
		margin-bottom: 0;
		padding-right: 1000px;
	}

	.detail-box {
		width: 100%;
	}

	.detail-box ul {
		width: 100%;
		padding-bottom: 36px;
		border-bottom: 1px solid #d9dde1;
		list-style: none;
		padding-left: 0px;
		margin: 0;
	}

	.detail-box ul li:last-child {
		margin-bottom: 0;
	}

	.detail-box ul li {
		padding: 24px;
		box-sizing: border-box;
		background: #f3f5f7;
		display: list-item;
		text-align: -webkit-match-parent;
	}

	.detail-box ul li:after {
		content: '\0020';
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.detail-box ul li img {
		width: 160px;
		height: 90px;
		margin-right: 24px;
		border: 0;
	}

	.text-info-box {
		width: 462px;
		height: 90px;
		margin-right: 96px;
	}

	.package-info-title {
		margin: 0;
		font-size: 16px;
		color: #07111b;
		line-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.info-price {
		position: relative;
		margin-top: 35px;
		width: 286px;
		font-size: 16px;
		color: #f01414;
	}

	em {
		font-style: normal;
	}

	.pay-price {
		display: inline-block;
		width: 85px;
	}

	.package-title {
		margin-top: 8px;
		font-size: 12px;
		color: #07111b;
		line-height: 24px;
	}

	.pay-btn {
		display: block;
		width: 150px;
		color: #FFFFFF;
		border-radius: 30px;
		border: 1px solid #1985DD;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		height: 45px;
		line-height: 45px;
		background-image: linear-gradient(-90deg, #0c4875 0%, #276ace 100%);
		margin-top: 25px;
		margin-left: 700px;
	}

	.pay-btn a {
		text-decoration: none;
		cursor: pointer;
	}

	.pay-box {
		border-bottom: 1px solid #d9dde1;
		display: flex;
	}

	.pay-title-box {
		margin: 0px 0 0 12px;
		height: 100px;
	}

	.pay-title-box:after {
		content: '\0020';
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.p-price {
		line-height: 80px;
		text-align: left;
		width: auto;
		position: relative;
		color: #f01414;
		font-size: 24px;
		font-weight: 700;
		box-sizing: border-box;
		float: right;
		margin-top: 10px;
		
	}

	.p-pay-price {
		float: none;
		font-weight: 700;
	}

	.price-text {
		line-height: 80px;
		float: right;
		margin-top: 10px;
	}
</style>
