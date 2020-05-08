<template>
	<div class="cdetailcontent">
		<!-- 导航部分 -->
		<div class="detail-nav">
		  <ul class="m-center">
		    <li
		      v-for="(nav,index) in navList"
		      :key="index"
		      class="nav-item"
		      :class="{active: index==currentNavIndex}"
		      @click="currentNavIndex = index"
		    >
		      {{ nav.title }}
		      <span v-if="nav.number" class="nav-number">{{ nav.number }}</span>  
		    </li>
		  </ul>
		</div>
		<!-- 内容部分 -->
		<div class="detail-information m-center cw">
		  <div class="introduction">
		    <component :is="componentName" :list="content" />
			<!-- <introduction></introduction> -->
		  </div>
		</div>
		
	</div>
</template>

<script>
	import introduction from '@/components/coursesdetail/introduction.vue'
	import chapters from '@/components/coursesdetail/chapters.vue'
	import teachersinfo from '@/components/coursesdetail/teachersinfo.vue'
	export default {
	  props: {
	    data: {
	      type: Object,
	      default () {
	        return {}
	      }
	    }
	  },
	  data () {
	    return {
	      currentNavIndex: 0, // 当前导航的索引
	      navList: [] ,// 导航数据
		  
	    }
	  },
	  created () {
	    // 初始化导航数据
	    this.navList = [
	      { title: '课程详情', number: 0, componentName: 'introduction', key: "introduction" },
	      { title: '章节目录', number: 0, componentName: 'chapters', key: 'chapters' },
	      { title: '教师团队', number: 0, componentName: 'teachersinfo', key: 'teachersinfo' },
	      { title: '用户评价', number: 0, componentName: 'comment', key: 'comment' },
	    ]
		// this.getClassfy();
		// this.GetData();
	  },
	  
	  computed: {
	    componentName () {
	      return this.navList[this.currentNavIndex].componentName
	    },
	    content () {
	      const key = this.navList[this.currentNavIndex].key
	      return this.data[key] || {}
	    },
	    
	  },
	  components: {
	    introduction,
		chapters,
		teachersinfo,
	    // Introduction: () => import('./introduction.vue'),
	    // Chapters: () => import('./chapters.vue'),
	    Teachers: () => import('./teachersinfo.vue'),
	    Comment: () => import('@/components/common/comment.vue'),
	  },
	 }
	
</script>

<style scoped>
	li{
		list-style: none;
	}
	.cw{
		width: 1250px;
		margin: auto;
	}
	  .detail-nav{
	    position: relative;
	    height: 68px;
	    line-height: 68px;
	    box-shadow: 0 4px 8px 0 rgba(7,17,20,0.15);
		}
	    .nav-item{
	      position: relative;
	      display: inline-block;
	      margin-right: 80px;
	      font-size: 16px;
	      color: #1c1f21;
	      font-weight: 700;
	      cursor: pointer;
		  }
		  .m-center li:hover{
			  color: #0F4C81;
		  }
	      .active{
	        color: #0F4C81;
			}
	       .active::after {
	          content: '';
	          display: block;
	          margin: -15px auto 0px;
	          width: 40px;
	          height: 3px;
	          border-radius: 15px;
	          background-color: #0F4C81;
	        }
	      .nav-number{
	        display: inline-block;
	        position: absolute;
	        top: 10px;
	        right: -20px;
	        font-size: 12px;
	        line-height: 1;
	        color: #9199a1;
			}
	  .detail-information{
	    margin-top: 36px;
	    margin-bottom: 36px;
	    display: flex;
	    align-items: top;}
	    .information-left{
	      flex: 1;}
	    .information-right{
	      /* margin-left: 32px; */
	      flex: 0 0 320px;
	      width: 320px;}
	      /* & > div
	        margin-bottom: 36px */;
			
</style>
