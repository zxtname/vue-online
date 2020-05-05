<template>
	<coursesdetail :dataList="courseData"></coursesdetail>
</template>

<script>
import coursesdetail from '@/components/coursesdetail/coursesdetail.vue';
import { GetCourseDetailById } from 'api/intCourse';

export default {
	data() {
		return {
			courseData: {}
		};
	},
	components: {
		coursesdetail
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
				this.courseData = p.data.data;
			});
		}
	}
};
</script>

<style></style>
