<template>
	<!-- 被遗弃的代码 -->
		<div class="nmednav">
			<el-col :span="9">
				<el-menu default-active="1" class="el-menu-vertical-demo" background-color="#FAF5FF" text-color="#303133" active-text-color="#6A8DC3">
					
					<el-menu-item index="1" style="padding-left: 40px;" >
							<span slot="title">全部</span>
					</el-menu-item>
					<el-menu-item index="2" style="padding-left: 40px;">
							<span slot="title">疾病诊治</span>
					</el-menu-item>
					<el-menu-item index="3" style="padding-left: 40px;">
							<span slot="title">实用技能</span>
					</el-menu-item>
					<el-menu-item index="4" style="padding-left: 40px;">
							<span slot="title">用药经验</span>
					</el-menu-item>
					<el-menu-item index="5" style="padding-left: 40px;">
							<span slot="title">指南解读</span>
					</el-menu-item>
					<el-menu-item index="6" style="padding-left: 40px;">
							<span slot="title">辅助检查</span>
					</el-menu-item>
					<el-menu-item index="7" style="padding-left: 40px;">
							<span slot="title">医学人文</span>
					</el-menu-item>
					<el-menu-item index="8" style="padding-left: 40px;">
							<span slot="title">健康科普</span>
					</el-menu-item>
					<el-menu-item index="9" style="padding-left: 40px;">
							<span slot="title">医患沟通</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			
			<div class="nmedcourselist">
				<div class="nmed-search">
					<div class="nmednavtext">
						全部
					</div>
					
					
					<div class="searchInput">
						<input type="text" name="search" placeholder="搜索课程名/教师名" class="searchInputItem">
						<i class="fas fa-search"></i>
					</div>
				</div>
				
				<div class="nmedcards">
					<mdcards></mdcards>
				</div>
			</div>
			
		</div>
</template>

<script type="text/javascript">
	import mdcards from '@/components/common/mdcards.vue'
	export default{
		components:{
			mdcards,
		},
	}
</script>

<style scoped>
	.nmednav{
		padding-left:64px ;
		display: flex;
	}
	.el-menu-item{
		font-size: 1.125rem;
		border-bottom:  1px solid #eceeef;
		text-align: left;
	}
	
	.el-menu-item:hover{
		background-color: #6A8DC3;
	}
	
	.nmedcourselist{
		padding-left: 50px;
	}
	
	.nmednavtext{
		font-weight: bold;
		font-size: 1.375rem;
		padding-top: 20px;
	}
	
	.nmed-search{
		display: flex;
		padding-left: 20px;
	}
	
	.searchInputItem {
		display: block;
		width: auto;
		border: 0;
		/* border-bottom: 1px solid rgb(128, 125, 125); */
		border-radius: 5px;
		vertical-align: middle;
		margin-right: 0.5rem;
		height: calc(1.5em + 0.5rem + 2px);
		padding: 0.25rem 1.4375rem;
		font-size: 1rem;
		line-height: 1.5;
		background-color: #FAF4FE;
		/* color: #495057; */
		background-color: #fff; 
		background-clip: padding-box;
		border: 1px solid #ced4da;
		font-weight: 400;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
	
	.searchInputItem:focus {
		border-color: #0F4C81;
		outline: 0;
	}
	
	.searchInput {
		position: relative;
		display: flex;
		align-items: center;
		padding-left: 450px;
		padding-top: 10px;
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
	
	el-col{
		float: none;
	}
</style>
