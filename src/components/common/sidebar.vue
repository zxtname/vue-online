<template>
	<div class="sidebar">
		<ul class="sidebar-list">
			<li class="sidebar-item">
				<img :src="imgUrl" width="34" height="34" class="sidebar-item-img" />
				<span class="sidebar-text">意见反馈</span>
			</li>
			<li class="sidebar-item">
				<img :src="imgUrl2" width="34" height="34" class="sidebar-item-img" />
				<span class="sidebar-text">帮助中心</span>
			</li>
			<li class="sidebar-item wechat">
				<img :src="imgUrl3" width="34" height="34" class="sidebar-item-img" />
				<span class="sidebar-text">官方微信</span>
				<div class="wechat-code"></div>
			</li>
			<li class="sidebar-item" id="gototop" @click="backtop">
				<img :src="imgUrl4" width="34" height="34" class="sidebar-item-img" />
				<span class="sidebar-text">返回顶部</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		mounted() {
			window.addEventListener("scroll", this.showbtn, true);
		},
		name: 'sidebar',
		data() {
			return {
				imgUrl: require("@/assets/adv.png"),
				imgUrl2: require("@/assets/help.png"),
				imgUrl3: require("@/assets/wechat.png"),
				imgUrl4: require("@/assets/top.png"),
			}
		},
		methods: {
			backtop() {
				var timer = setInterval(function() {
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;
					let ispeed = Math.floor(-osTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
					this.isTop = true;
					if (osTop === 0) {
						clearInterval(timer);
					}
				}, 30)
			}
		}
	};
</script>

<style scoped>
	li{
		list-style-type: none;
	}
	
	.sidebar {
		z-index: 66;
		position: fixed;
		right: 0;
		padding: 0 16px;
		top: 50%;
		transform: translateY(-50%);
		background-color: #fff;
		box-shadow: 0 4px 12px rgba(7, 17, 27, .1);
		border-radius: 5px;
	}

	.sidebar-list {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.sidebar-item {
		padding: 16px 0;
		width: 36px;
		height: 60px;
		box-sizing: border-box;
		border-bottom: 1px solid #edf1f2;
		text-align: center;
		cursor: pointer;
	}

	.sidebar-text {
		display: none;
		font-size: 0.875rem;
		line-height: 16px;
		color: #1c1f21;
	}

	.sidebar-item:hover .sidebar-text {
		display: block;
	}

	.sidebar-item:hover .sidebar-item-img {
		display: none;
	}

	.wechat-code {
		position: absolute;
		right: 64px;
		bottom: -4px;
		width: 172px;
		height: 212px;
		opacity: 0;
		transform-origin: 100% 100%;
		transform: scale(0);
		transition: all .3s ease-in-out;
		background: url(https://www.imooc.com/static/img/common/elevator.png?t=2) no-repeat 0 0;
	}

	.wechat:hover .wechat-code {
		display: block;
		visibility: visible;
		opacity: 1;
		max-width: none;
		transform: scale(1);
	}
</style>
