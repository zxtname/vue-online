<template>
	<!-- 用于首页、推荐课程及免费课程的课程卡片 -->
	<div class="cards">
		<ul class="course-list" style="padding-left: 0px;">
			<li v-for="(item, index) in dataList == null ? defaultData : dataList" :key="index" class="course-item">
				<!-- <router-link tag="a" :to="`/coursesdetail/${item.id}`" class="coursesdetail"> -->
				<router-link tag="a" :to="{ name: 'coursesdetail', query: { id: item.id } }" class="coursesdetail">
					<div class="img-box">
						<img :src="item.imgUrl" />
						<div class="tags">
							<span class="tag-item">{{ item.classfyName }}</span>
						</div>
					</div>
				</router-link>
				<p class="course-name">{{ item.courseName }}</p>
				<p class="course-teacher">主讲人：{{ item.courseAudit }}</p>
				<p class="price">
					<span>价格：￥{{ item.price }}</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
// import {GetRecommendInfo} from '@/api/mock/home/index'
import request from 'axios';
export default {
	props: {
		dataList: {
			type: Array,
			default: function() {
				return null;
			}
		}
	},
	data() {
		return {
			defaultData: ''
		};
	},
	created() {
		this.GetRecommendData();
	},
	methods: {
		async GetRecommendData() {
			try {
				const { data: res } = await request({
					url: './mock/home/recommend.json',
					method: 'get'
				});
				// console.log(res);
				if (res.code !== 1) {
					console.log('获取信息失败');
				}
				this.defaultData = res.data;
			} catch {
				this.$message.error('默认信息获取失败');
			}
		}
	}
};
</script>

<style>
.cards {
	/* height: 314px;
		width: 100%;
		margin: 70px 0px 0px 0px; */
	margin-top: 70px;
}

.course-list {
	margin: 0px;
	display: flex;
	-webkit-box-align: start;
	align-items: flex-start;
	justify-content: space-around;
	flex-wrap: wrap;
}

.course-item {
	display: block;
	position: relative;
	-webkit-box-flex: 0;
	flex: 0 0 20%;
	cursor: pointer;
	padding-bottom: 50px;
}

.course-item:hover .course-name {
	color: #0f4c81;
}

.img-box {
	position: relative;
	margin: 0 5px 16px 5px;
	width: 300px;
	height: 200px;
}

.img-box > img {
	display: inline-block;
	width: 100%;
	height: 100%;
	background-color: #eee;
	border-radius: 8px;
}

.course-item:hover .img-box > img {
	box-shadow: 0px 15px 30px rgba(7, 17, 27, 0.2);
}

.tags {
	position: absolute;
	bottom: 12px;
	left: 8px;
}

.tag-item {
	margin-right: 10px;
	padding: 6px 10px;
	border-radius: 6px;
	color: #fff;
	font-size: 1.125rem;
	background-color: rgba(28, 31, 33, 0.5);
}

.course-name {
	margin: 0px;
	height: 24px;
	word-break: break-all;
	font-size: 1.25rem;
	font-weight: bold;
	line-height: 24px;
	color: #1c1f21;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	overflow: hidden;
}

.course-item > p {
	padding: 0 5px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

.course-teacher {
	margin: 0px 2px 2px 2px;
	font-size: 1rem;
	color: #9199a1;
	line-height: 24px;
}

.course-teacher > span {
	padding: 10px;
}

.price {
	margin: 0px;
}

.price span {
	color: #4d555d;
	font-size: 1.125rem;
	line-height: 24px;
	letter-spacing: 0.5px;
}

p {
	text-align: left;
}

li {
	list-style: none;
	display: list-item;
	text-align: -webkit-match-parent;
}

ul {
	list-style-type: disc;
	-webkit-margin-before: 1em;
	-webkit-margin-after: 1em;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
	/* -webkit-padding-start: 40px; */
}
</style>
