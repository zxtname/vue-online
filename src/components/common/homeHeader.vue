<template>
	<div class="head">
		<div class="w">
			<div class="homeHeader w">
				<router-link tag="a" :to="{ name: 'home' }" class="homeA">
					<img src="../../assets/logo.png" class="jianhui-logo">
				</router-link>
			
				<div class="navSelection">
					<router-link tag="a" :to="{ name: 'intcourses' }" class="allCoursesA">
						<div class="navSelectionItem navSelectionItem-int">
							推荐课程
						</div>
					</router-link>
			
					<div class="navSelectionItem navSelectionItem-all">
						<!-- 这个里面有一个子菜单 -->
						所有课程
						<div class="subNavSelection">
			
							<router-link tag="a" :to="{ name: 'medcourses' }" class="medcoursesA">
								<div class="subNavSelectionItem">
									医学专区
								</div>
							</router-link>
			
							<router-link tag="a" :to="{ name: 'nmedcourses' }" class="nmedcoursesA">
								<div class="subNavSelectionItem">
									非医学专区
								</div>
							</router-link>
						</div>
					</div>
			
					<router-link tag="a" :to="{ name: 'freecourses' }" class="freecoursesA">
						<div class="navSelectionItem navSelectionItem-free">
							免费课程
						</div>
					</router-link>
				</div>
			
				<div class="searchInput">
					<input type="text" name="search" placeholder="搜索 课程" class="searchInputItem">
					<i class="fas fa-search"></i>
				</div>
			
				<div style="flex-grow: 2">
				</div>
				
				<!-- //占位符 -->
				
				<login></login>
				
			</div>
		</div>
		
	</div>
	
	
</template>

<script>
	import login from '@/components/common/login.vue'
	
	export default{
		// name:'header',
		components:{
			login,
		},
	}
</script>

<style type="text/css" scoped>
	.w{
		width: 1250px;
		margin: auto;
	}
	.head {
		background-color: #FAF4FE;
		width: 100%;
		height: 80px;
		margin: -60px auto 0px auto;
		box-shadow: 0 4px 8px 0px #d1c7e7;
		display: flex;
		align-items: center;
		z-index: 999;
		position: relative;
	}

	.homeHeader {
		margin: 0px;
		display: flex;
		align-items: center;
	}

	.jianhui-logo {
		color: #0F4C82;
		height: 40px;
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
		padding: 20px 150px 20px 15px;
	}

	.navSelectionItem:hover {
		cursor: pointer;
		color: #0F4C81;
		/* font-weight: bold; */
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
		color: #0F4C81;
		/* font-weight: bold; */
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
		border-color: #0F4C81;
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
