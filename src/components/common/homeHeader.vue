<template>
	<div class="head">
		<div class="homeHeader">
			<!--
            先把所有的组件罗列到里面之后再搞定样式
        -->
			<img src="../../assets/logo.png" class="jianhui-logo">

			<div class="navSelection">
				<div class="navSelectionItem navSelectionItem-int">
					推荐课程
				</div>
				<div class="navSelectionItem navSelectionItem-all">
					<!-- 这个里面有一个子菜单 -->
					所有课程
					<div class="subNavSelection">
						<div class="subNavSelectionItem">
							医学专区
						</div>
						<div class="subNavSelectionItem">
							非医学专区
						</div>
					</div>
				</div>
				<div class="navSelectionItem navSelectionItem-free">
					免费课程
				</div>
			</div>

			<div class="searchInput">
				<input type="text" name="search" placeholder="搜索 课程" class="searchInputItem">
				<i class="fas fa-search"></i>
			</div>

			<div style="flex-grow: 2">
			</div>

			<!-- //占位符 -->
			<!--
          本次实验不包含 企业版与学校版的页面。
         -->


			<a href="javascript:;" class="buttons buttons-log">
				登录/注册
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style type="text/css" scoped>
	.head {
		background-color: #FAF4FE;
		width: 100%;
		height: 80px;
		margin: -60px auto 20px auto;
		box-shadow: 0 4px 8px 0px #d1c7e7;
		display: flex;
		align-items: center;
		z-index: 999;
	}

	.homeHeader {
		padding: 0px 48px;
		margin: 0px;
		display: flex;
		align-items: center;
	}

	/* .jianhui-logo {
		height: 50px;
	} */

	.buttons {
		display: block;
		padding: 12px 12px;
		border-radius: 8px;
		font-size: 1rem;
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
		background: #0C4165;
		font-size: 1rem;
		margin-left: 191px;
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
		padding: 20px 220px 20px 15px;
	}

	.navSelectionItem:hover {
		cursor: pointer;
		color: #1A50EA;
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
		color: #1A50EA;
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
		border-color: #1A50EA;
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
</style>
