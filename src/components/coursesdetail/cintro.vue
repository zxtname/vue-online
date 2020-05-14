<template>
	<div class="cintro" v-if="dataList.course!=undefined">
		<div class="video">
					
					<ul>
						<li><img src="../../assets/play.png" alt="" /></li>
						<li><el-button type="text" @click="dialogVisible = true">点击播放视频</el-button></li>
						<el-dialog class="playbox" title="课程视频" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
							<span><videoplay></videoplay></span>
							<span class="coursetitle">这是课程标题</span>
							<span slot="footer" class="dialog-footer">
								<el-button type="primary" @click="dialogVisible = false">下 载</el-button>
								<el-button @click="dialogVisible = false">关 闭</el-button>
							</span>
						</el-dialog>
					</ul>
					<div class="intro">
						<p v-html='dataList.course.remark'></p>
						<!-- {{dataList.course.remark}} -->
					</div>
		</div>
		<div class="detailsintro"><img src="../../assets/details.png" alt="" /></div>
	</div>
</template>

<script>
	import videoplay from '@/components/common/videoplay.vue';
	import { GetCourseDetailById } from 'api/intCourse';
	export default {
		props: {
				list: {
					type: [Object],
					default() {
						return {};
					}
				},
				
			},
		components: {
				videoplay
			},
			data() {
				return {
					activeName: 'first',
					dialogVisible: false,
					dataList: {}
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
				handleClick(tab, event) {
					console.log(tab, event);
				},
				handleClose(done) {
					this.$confirm('确认关闭？')
						.then(_ => {
							done();
						})
						.catch(_ => {});
				},
				getData(id) {
					GetCourseDetailById(id).then(p => {
						if (p.data.code != 1) this.$message.error('获取信息失败');
						this.dataList = p.data.data;
					});
				}
			}	
	};
</script>

<style scoped>
	li{
		list-style: none;
	}
	.cintro{
		width: 1250px;
		/* margin-left: -50px; */
	}
	.video {
		display: block;
		height: 420px;
		background: url(../../assets/vedio-bg.png) no-repeat center top;
		/* background-image: linear-gradient(-90deg, #3f2e95 0%, #276ace 100%); */
		border-radius: 40px;
		box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
	}
	.video ul {
		float: left;
		margin-top: 140px;
		margin-left: 100px;
		color: #eceeef;
	}
	.intro {
		float: right;
		width: 700px;
		font-size: 16px;
		text-align: left;
		color: #eceeef;
		margin-top: 70px;
		margin-right: 100px;
	}
	.detailsintro {
		margin-top: 50px;
		height: 1250px;
	}
	.detailsintro img {
		width: 100%;
		
	}
	.blank {
		height: 2px;
	}
	.el-dialog {
		width: 2000px;
	}
	.coursetitle {
		line-height: 40px;
	}
</style>
