<template>
	<div class="pallcourse">
		<div class="psearch">
			<div class="palltxt">全部课程</div>
			<div class="p-searchInput">
				<input
					type="text"
					name="search"
					placeholder="搜索课程名/教师名"
					:value="text"
					@input="$emit('change', $event.target.value)"
					@keyup.enter="search"
					class="p-searchInputItem"
				/>
				<i class="fas fa-search" @click="search"></i>
			</div>
		</div>
		<div class="acourses" style="margin-top: 60px;" v-if="dataList.length==0"><span >该用户还没有课程</span></div>
		<div class="acourses" v-if><cards :dataList="dataList"></cards></div>
	</div>
</template>

<script>
import cards from '@/components/common/cards.vue';
import { GetUserCourse } from 'api/login';
export default {
	model: {
		prop: 'text',
		event: 'change'
	},
	props: {
		classfyList: Array,
		default() {
			return [];
		},		
		text: String,
		default() {
			return '';
		}
	},
	data() {
		return {
			currentTabIndex: 0, // 当前选项卡的索引
			tabList: [] ,// 选项卡数据
			dataList: [],			
		};
	},
	created() {
		this.getData();
	},
	methods: {
		async getData() {
			var { data: res } = await GetUserCourse();
			if(res.code!=1){
				this.$message.error("获取信息失败");
			}
			console.log(res.data)
			this.dataList=res.data
		},
		search() {
			this.$emit('search');
		},
		classfyClick(val) {
			this.$emit('classfyClick', val);
		}
	},
	computed: {},
	components: {
		cards
	}
};
</script>

<style scoped>
/* .personalbd{
		height: 600px;
		background-color: pink;
	} */
.psearch {
	border-bottom: 1px solid #d0d6d9;
}
.palltxt {
	/* margin-right: 900px;
	      display: inline-block;
	      vertical-align: middle;
	      height: 48px;
	      line-height: 48px;
	      box-sizing: border-box; */
	position: relative;
	display: flex;
	padding-top: 20px;
	padding-left: 40px;
	font-size: 18px;
	font-weight: bold;
	color: #0f4c81;
	cursor: pointer;
}
.p-searchInput {
	position: relative;
	display: flex;
	align-items: center;
	padding-left: 700px;
	padding-bottom: 10px;
	margin-top: -30px;
}
.p-searchInputItem {
	display: block;
	width: auto;
	border: 0;
	border-radius: 5px;
	vertical-align: middle;
	margin-right: 0.5rem;
	height: calc(1.5em + 0.5rem);
	padding: 0.25rem 1.4375rem;
	font-size: 16px;
	line-height: 20px;
	background-color: #faf4fe;
	/* color: #495057; */
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	font-weight: 400;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.p-searchInputItem:focus {
	border-color: #0f4c81;
	outline: 0;
}
.fa-search {
	position: absolute;
	right: 90px;
	color: #333;
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	line-height: 1.5;
	border-radius: 0.2rem;
}
</style>
