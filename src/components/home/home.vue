<template>
    <div class="home">
		<!-- <homeHeader></homeHeader> -->
		<homeCarousel :CarouselList="carouselData"></homeCarousel>
		<homeRecommendation :dataList="recommendData"></homeRecommendation>
		<homeMed :dataList="medicalData"></homeMed>
		<homeNotmed :dataList="nMedicalData"></homeNotmed>
		<!-- <homefooter></homefooter> -->
		<!-- <homeNav></homeNav> --><!-- 3.放置 -->
    </div>
</template>

<script>
	import homeCarousel from './homeCarousel.vue'
	import homeRecommendation from './homeRecommendation.vue'
	import homeMed from './homeMed.vue'
	import homeNotmed from './homeNotmed.vue'
	import {GetHomeInfo} from 'api/home/index'

	
	export default{
		components:{
			homeCarousel,
			homeRecommendation,
			homeMed,
			homeNotmed,
			// homeNav,//2.注册
		},
		data(){
			return{
				carouselData:[],
				recommendData:[],
				medicalData:[],
				nMedicalData:[]				
			}
		},
		created(){
			this.GetHomeList();
		},
		methods:{
			async GetHomeList(){
				try{
					const {data:res}=await GetHomeInfo();
					if(res.code!==1)
					{
						this.$message.error("获取信息失败")
					}
					this.carouselData=res.data.carouselCourse;
					this.recommendData=res.data.recommendCourse;
					this.medicalData=res.data.medicalCourse;
					this.nMedicalData=res.data.noMedical;
					// this.$message.success("获取信息成功")
				}
				catch{
					this.$message.error("获取信息失败")
				}
				
				// console.log(res);
				
				
				// console.log(this.carouselData);
			}
		}
		
	}
</script>

<style scoped>
	.home{
		display: flex;
		flex-direction: column;
		background-color: #F0F0F0;
	}
</style>