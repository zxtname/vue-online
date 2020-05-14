<template>
	<div class="personbox">
		<!-- 头部 -->
		<div class="phd"><personalhd /></div>
		<!-- 内容部分 -->
		<div class="pbd">
			<div class="pbdcontent">
				<!-- 左侧导航 -->
				<div class="pnavcontainer">
					<ul>
						<li v-for="(nav, index) in navList" :key="index" class="nav-item" :class="{ active: currentNavIndex == index }" @click="handleNavClick(nav, index)">
							{{ nav.title }}
						</li>
					</ul>
				</div>
				<!-- 左侧导航完成 -->
				<!-- 内容部分 -->
				<div class="pcontent"><component :is="componentName" :list="currentList" /></div>
			</div>
		</div>
		<!-- <tabPage :totalPage="totalPage" @changePage="changePage"></tabPage> -->
	</div>
</template>

<script>
import personalhd from './personalhd.vue';
import tabPage from '@/components/common/tabPage.vue';
export default {
	data() {
		return {
			currentNavIndex: 0, // 当前课程的导航索引
			userCourse: {}, // 用户课程信息
			navList: [
				{ title: '全部课程', code: 0, componentName: 'AllCourse', key: 'all' },
				{ title: '医学课程', code: 1, componentName: 'MedCourse', key: 'med' },
				{ title: '非医学课程', code: 2, componentName: 'NMedCourse', key: 'nmed' },
				{ title: '免费课程', code: 3, componentName: 'FreeCourse', key: 'free' }
			], // 导航数据
			totalPage: 1,
			coursesContent: [],
			query: {
				pageNum: 1,
				courseName: '',
				classfyName: ''
			}			
		};
	},
	created() {
		
	},
	mounted() {},
	methods: {
		// 导航点击
		handleNavClick(item, index) {
			this.currentNavIndex = index;
		}
	},
	computed: {
		componentName() {
			return this.navList[this.currentNavIndex].componentName;
		},
		base() {
			return this.userCourse.base || {};
		},
		currentList() {
			let currNav = this.navList[this.currentNavIndex];
			return this.userCourse[currNav.key] || [];
		}
	},
	components: {
		personalhd,
		tabPage,
		AllCourse: () => import('./pallcourse.vue'),
		MedCourse: () => import('./pmedcourse.vue'),
		NMedCourse: () => import('./pnmedcourse.vue'),
		FreeCourse: () => import('./pfreecourse.vue')
	}
};
</script>

<style scoped>
.li {
	list-style: none;
}
.personbox {
	height: 1200px;
}

.phd {
	margin-bottom: 50px;
}
.pbd {
	width: 1250px;
	margin: auto;
}
.pbdcontent {
	display: flex;
	align-items: flex-start;
	margin-top: 40px;
}
.pnavcontainer {
	flex: 0 0 172px;
	width: 172px;
}
.nav-item {
	position: relative;
	margin-bottom: 8px;
	/* padding-left: 10px; */
	height: 48px;
	line-height: 48px;
	font-size: 16px;
	color: #787d82;
	cursor: pointer;
}

.active {
	background-color: rgba(15, 76, 129, 0.8);
	border-radius: 4px;
	color: #fff;
}
::after {
	display: block;
	content: '';
	position: absolute;
	right: 0;
	top: 0;
	width: 0;
	height: 0;
	border-top: 24px solid #fff;
	border-bottom: 24px solid #fff;
	border-left: 15px solid transparent;
}

.pcontent {
	margin-left: 50px;
	flex: 1;
}
</style>
