<template>
	<div class="homeCarousel">
		<div class="bg-mask" :style="getBackgroundImage" />
		<div class="block w">
			<el-carousel height="382px" :interval="2000" @change="handelCarouselChange">
				<el-carousel-item v-for="(item, index) in CarouselList" :key="index"  >
					<!-- <h3 class="small">{{ item }}</h3> -->
					<img :src="item.imgUrl" alt class="carousel-img" @click="link(item.id)"/>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	// import { GetCarouselInfo } from 'api/home/index';
import request from 'axios';

export default {
	props:{
		CarouselList:{
			type:Array,
			default:function(){
				return [];
			}
		}		
	},
	data() {
		return {
			// CarouselList: [], //轮播的数据
			currentCarousel: '' //当前轮播的图片
		};
	},
	created() {
		if(this.CarouselList==[])
		{
			this.GetCarousel();
		}		
		// console.log(this.CarouselList);
	},
	methods: {
		//获取轮播的数据
		async GetCarousel() {
			const { data: res } = await request({
				url: './mock/home/carousel.json',
				method: 'get'
			});
			this.CarouselList = res.data;
			// console.log(res);
		},
		handelCarouselChange(index) {
			this.currentCarousel = this.CarouselList[index].imgUrl;
		},
		link(id){
			this.$router.push({
			        name:'coursesdetail',
			　　　　 query:{id:id}
			}) 
		}
	},
	computed: {
		getBackgroundImage() {
			return {
				'background-image': `url(${this.currentCarousel})`
			};
		}
	}
};
</script>

<style type="text/css" scoped>
	.w {
		width: 1250px;
		margin: auto;
	}

	.bg-mask {
		position: absolute;
		margin-top: 80px;
		/* top:80px; */
		background-size: cover;
		transition: all 0.3s;
		width: 100%;
		height: 250px;
		opacity: 0.3;
		filter: blur(100px);
		/* display: flex; */
	}

	.carousel-img {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.homeCarousel {
		border-radius: 10px;
		padding-top: 20px;
	}

	.block {
		position: relative;
		border-radius: 10px;
	}

	.el-carousel {
		height: 382px;
		position: absolute;
		left: 0px;
		right: 0px;
		margin: auto;
		border-radius: 10px;
		box-shadow: 0px 10px 20px rgba(7, 17, 27, 0.1);
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 0.875rem;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
		border-radius: 10px;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
		border-radius: 10px;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
		border-radius: 10px;
	}
</style>
