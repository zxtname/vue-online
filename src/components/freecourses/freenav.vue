<template>
	<div class="freenav">
		<div class="course center">
			<div class="title">
				<div class="freecourse-logo">
					<img :src="imgUrl">
				</div>
			</div>
		</div>

		<div>
			<div class="course-nav">
				<dl>
					<dt>分类：</dt>
					<dd v-for="(item,index) in items" :key="index" :class="{'active':Display==index}" @click="isActive(index)">
						{{item.text}}
					</dd>
				</dl>
			</div>
		</div>


	</div>
	</div>

</template>

<script>
	export default {
		name: 'freenav',
		data: function() {

			return {
				items: [
					{text: '全部'},
					{text: '临床医学'},
					{text: '药学'},
					{text: '护理'},
					{text: '中医药学'},
					{text: '基础医学'},
					{text: '公共卫生'},
					{text: '医学检验'},
					{text: '口腔医学'},
					{text: '疾病诊治'},
					{text: '实用技能'},
					{text: '用药经验'},
					{text: '指南解读'},
					{text: '辅助检查'},
					{text: '医学人文'},
					{text: '健康科普'},
					{text: '医患沟通'}
				],
				imgUrl: require("@/assets/freecourse-logo.png"),
				Display:0,
			}
		},
		methods:{
			isActive(index){
				this.Display=index;
			}
		}
	};
</script>

<style scoped>
	.freenav {
		display: block;
		-webkit-box-flex: 1;
		flex: 1;
		overflow: hidden;
		box-shadow: 0 4px 8px 0px #d1c7e7;
		background-color: #FAFAFA;
	}

	.course {
		padding-top: 30px;
	}

	.center {
		margin: 0 auto;
		padding-left: 64px;
	}

	.title {
		padding: 2px 0;
	}

	.freecourse-logo {
		display: inline-block;
		float: left;
	}


	/* .intnav {
		background-color: #FAFAFA;
		box-shadow: 0 4px 8px 0px #d1c7e7;
		height: 200px;
		padding-left: 58px;
	} */

	/* .intcourse-logo {
		padding-top: 35px;
		display: inline-block;
		padding-left: 6px;
	} */

	.course-nav {
		padding-left: 58px;
		padding-top: 40px;
	}

	.course-nav dl {
		position: relative;
		padding: 20px 200px 10px 52px;
		font-size: 20px;
	}

	.course-nav dl dt {
		position: absolute;
		left: 0;
		top: 22px;
		color: #30363B;
		font-weight: bold;
	}

	.course-nav dl dd {
		display: inline-block;
		padding: 0 20px;
		margin: 0 5px 10px 0;
		height: 30px;
		line-height: 30px;
		color: #30363B;
		cursor: pointer;
	}

	.course-nav dl dd.active{
		background-color: #6A8DC3;
		font-weight: bold;
		border-radius: 6px;
		color: #0F4C81;
	}
	
	.course-nav dl dd:visited {
		background-color: #6A8DC3;
		border-radius: 6px;
		color: #0F4C81;
		font-weight: bold;
	}

	.course-nav dl dd:hover {
		color: #0F4C81;
		background-color: #6A8DC3;
		border-radius: 6px;
		font-weight: bold;
	}

	.course-nav dl dd:active {
		background-color: #6A8DC3;
		border-radius: 6px;
		color: #0F4C81;
		font-weight: bold;
	}
</style>
