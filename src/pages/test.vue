<template>
	<div>
		<h1>{{mes}}</h1>
	</div>
</template>

<script>
	
import { GetNotMedicalInfo } from 'api/home/index.js';

export default {
	data() {
		return {
			CarouselInfoList: '',
			mes:"23"
		}
	},
	created() {
		this.GetCarousel();
	},
	methods: {
		async GetCarousel() {
			const res = await GetNotMedicalInfo();
			console.log(res);
		}
	}
};
</script>

<style scoped></style>
