<template>
	<div class="searchcourses">
		<div class="search-item clearfix" v-for="(item, index) in dataList" :key=item.id>
			<a class="item-img l">
				<img :src="item.imgUrl" />
				<p class="s-type">{{ item.classfyName }}</p>
			</a>
			<div class="item-detail l">
				<router-link tag="a" :to="{ name: 'coursesdetail', query: { id: item.id } }" class="coursesdetailA">
					<a class="item-title">{{ item.courseName }}</a>
				</router-link>
				<p class="item-desc">{{ item.remark }}</p>
				<div class="item-classify">
					<span>讲师：{{ item.courseAudit }}</span>
					<i class="el-icon-user"></i>
					<span>36</span>
					<span>￥{{ item.price }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { GetCourseInfo } from 'api/medcourses';
export default {
	props: {
		dataList: {
			type: Array,
			default: function() {
				return null;
			}
		}
	},
	data: function() {
		return {			
		};
	}
};
</script>

<style scoped>
a {
	outline: 0;
}

.l {
	float: left;
}

.clearfix:after {
	content: '\0020';
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

.searchcourses {
	width: 1168px;
	box-sizing: border-box;
	background: #fff;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	overflow: hidden;
	padding-bottom: 16px;
}

.search-item {
	width: 1000px;
	margin: 0 auto;
	background: #fff;
	padding-top: 16px;
	padding-bottom: 16px;
	box-sizing: border-box;
	position: relative;
	border-bottom: 1px solid rgba(43, 51, 59, 0.1);
	line-height: 1;
}

.item-img {
	display: inline-block;
	width: 180px;
	height: 135px;
	margin-right: 32px;
	border-radius: 6px;
	position: relative;
	overflow: hidden;
}

.item-img img {
	width: 180px;
	height: 135px;
	border-radius: 6px;
	border: 0;
}

.s-type {
	position: absolute;
	top: 0;
	left: 0;
	width: 64px;
	height: 24px;
	line-height: 22px;
	font-size: 14px;
	color: #fff;
	text-align: center;
	background: #545c63;
	border-radius: 0 0 6px 0;
	margin-top: 0px;
}

.item-detail {
	width: 750px;
	margin-top: 15px;
	/* overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis; */
}

.item-title {
	cursor: pointer;
	width: 750px;
	font-size: 16px;
	line-height: 32px;
	font-weight: 700;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: inline-block;
	float: left;
	text-align: left;
	color: black;
}

.item-title :link {
	color: #5e5e5e;
}

.item-title :visited {
	color: #5e5e5e;
}

.item-desc {
	width: 750px;
	color: #4d555d;
	font-size: 12px;
	line-height: 24px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	float: left;
	text-align: left;
}

.item-classify {
	margin-top: 4px;
	float: left;
}

.item-classify span {
	line-height: 24px;
	color: #4d555d;
	font-size: 12px;
	padding-right: 24px;
	vertical-align: middle;
}

.item-classify i {
	vertical-align: middle;
	font-size: 12px;
	color: rgba(77, 85, 93, 0.6);
}

.el-icon-user {
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	letter-spacing: 0;
}
</style>
