<template>
	<div class="freenav">
		<div class="course center">
			<div class="title">
				<div class="freecourse-logo">
					<img :src="imgUrl">
				</div>
			</div>
		</div>		
			<div class="course-nav">
				<dl>
					<dt>分类：</dt>
					<dd 
					v-for="(item,index) in classfyList" 
					:key="item.id" 
					:class="{'active':Display==index}" 
					@click="isActive(index,item.classfyName)">
						{{item.classfyName}}
					</dd>
				</dl>
			</div>		
	</div>
</template>

<script>	
	export default {
		props:{
			classfyList:Array,
			default(){
				return []
			}
		},
		name: 'freenav',
		data() {
			return {
				imgUrl: require("@/assets/freecourse-logo.png"),
				Display:0,
			}
		},
		methods:{
			isActive(index,val){
				this.Display=index;
				this.$emit('classfyClick',val)
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
