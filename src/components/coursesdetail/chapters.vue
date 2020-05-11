<template>
	<div class="chapters">
		<!-- 视频播放 -->
		<div class="videocontainer">
			<div class="lessonvideo"><videoplay :source="videoUrl"></videoplay></div>
			<!-- {{videoUrl}} -->
		</div>
		<!-- 章节目录开始 -->
		<div class="chapters-list" v-for="items in chapterList" :key="items.id">
			<div class="chapter1">
				<ul>
					<li>
						<b>{{ items.chapterHeader.introduce }}</b>
					</li>
					<li v-for="item2 in items.chapterContent" :key="item2.id">
						<i class="el-icon-video-play" @click="clickEvent(item2.videoId)">
							<a style="cursor:pointer">{{ item2.introduce }}</a>
						</i>
					</li>
				</ul>
			</div>
		</div>
		<!-- 章节目录结束 -->
	</div>
</template>

<script>
import videoplay from '@/components/common/videoplay.vue';
import { GetCourseDetailById, GetVideoById } from 'api/intCourse';
export default {
	props: {
		list: {
			type: [Object],
			default() {
				return {};
			}
		}
	},
	components: {
		videoplay
	},
	data() {
		return {
			activeName: 'first',
			chapterList: [],
			dataList: [],
			videoUrl: {
				type: 'video/mp4',
				src: 'http://v.pmphmooc.com/data/mp4/1372/2017/12/22/99199313-aec4-4509-a530-bc77597264d0.mp4' //你的m3u8地址（必填）
			}
			// dialogVisible: false,
		};
	},
	created() {
		let res = this.$route.query.id;
		if (res == null) {
			this.$message.error('获取信息错误xxx');
			return;
		}
		this.getData(res);
	},
	methods: {
		getData(id) {
			GetCourseDetailById(id).then(p => {
				if (p.data.code != 1) this.$message.error('获取信息失败');
				this.dataList = p.data.data;
				this.chapterList = p.data.data.chapterlist;
			});
		},
		clickEvent(id) {
			GetVideoById(id)
				.then(res => {
					if (res.data.code != 1) this.$message.error('视频加载失败');
					else this.videoUrl.src = res.data.data;
				})
				.catch(err => this.$message.error('视频加载失败'));
		}
	}
};
</script>

<style scoped>
.chapters {
	margin-left: -35px;
}
.videocontainer {
	background: linear-gradient(to bottom, #7d9bc8 0%, #5163a1 100%);
}
.lessonvideo {
	width: 800px;
	margin: auto;
}
.chapters-list {
	margin: 0 40px;
}
.chapter1 {
	margin-top: 10px;
	padding-bottom: 10px;
	height: 300px;
	border-bottom: 2px solid #9199a1;
}
.chapter1 ul {
	float: left;
	flex-direction: row;
	height: 30px;
	width: 1200px;
	padding: 0 20px;

	/* justify-content: left; */
}

.chapter1 li {
	position: relative;
	flex-direction: row;
	padding: 10px 60px;
	border-top: 1px solid #dfe6e6;
	height: 25px;
	line-height: 25px;
	font-size: 16px;
	text-align: -webkit-left;
}
.chapter1 b {
	height: 25px;
	line-height: 25px;
	font-size: 18px;
	border: none;
}
.el-icon-video-play {
	padding-right: 10px;
	padding-top: 5px;
	font-size: 16px;
	vertical-align: middle;
}
/* a:-webkit-any-link {
		display: inline-block;
		margin-top: -20px;
		height: 32px;
		line-height: 32px;
	    color: #4d555d;
		
		} */
.el-icon-video-play a {
	vertical-align: middle;

	font-size: 16px;
	color: #4d555d;
}
</style>
