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
		<div class="acourses">
			<cards :dataList="dataList"></cards>
		</div>
		
		
	</div>
</template>

<script>
	import cards from '@/components/common/cards.vue';
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
	    dataList: Array,
	    default() {
	    	return [];
	    },
	    text: String,
	    default() {
	    	return '';
	    }
	  },
	  data () {
	    return {
	      currentTabIndex: 0, // 当前选项卡的索引
	      tabList: [] // 选项卡数据
	    }
	  },
	  created () {
	    // // 初始化选项卡数据
	    // this.tabList = [
	    //   { title: '慕课小课', type: 0 },
	    //   { title: '最近学习', type: 1 },
	    //   { title: '我的收藏', type: 2 }
	    // ]
	  },
	  methods: {
	    search() {
	    	this.$emit('search');
	    },
	    classfyClick(val) {
	    	this.$emit('classfyClick', val);
	    }
	  },
	  computed: {
	    // filterList () {
	    //   let currTab = this.tabList[this.currentTabIndex]
	    //   return this.list.filter(item => item.type === currTab.type)
	    // }
	  },
	  components:{
		  cards
	  }
	};
</script>

<style scoped>
	/* .personalbd{
		height: 600px;
		background-color: pink;
	} */
	.psearch{
	    border-bottom: 1px solid #d0d6d9;
	     } 
		 .palltxt{
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
	      color: #0F4C81;
	      cursor: pointer;}
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
				height: calc(1.5em + 0.5rem );
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
