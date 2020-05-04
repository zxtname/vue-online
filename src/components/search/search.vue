<template>
	<div class="s-search">
		<div class="search-header">
			<div class="search-form">
				<el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入想搜索的内容"
				 @select="handleSelect">
					<template slot-scope="{ item }">
						<div class="name">{{ item.value }}</div>
					</template>
				</el-autocomplete>
				<!-- <input type="text" class="search-form-ipt" placeholder="请输入想搜索的内容" /> -->
				<button class="search-form-btn">搜索</button>
			</div>
		</div>

		<div class="search-body">
			<div class="search-content">
				<div class="search-all">
					<a style="margin-left: 50px;">
						全站结果
						<span>(46)</span>
					</a>
				</div>
				<searchcourses></searchcourses>
			</div>
		</div>
	</div>
</template>

<script>
	import searchcourses from '@/components/search/searchcourses.vue'
	export default {
		components: {
			searchcourses,
		},
		data() {
			return {
				courses: [],
				state: ''
			};
		},
		methods:{
			querySearch(queryString, cb) {
				var courses = this.courses;
				var results = queryString ? courses.filter(this.createFilter(queryString)) : courses;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (courses) => {
					return (courses.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				// 热门课程
				return [{
						"value": "外科护理学"
					},
					{
						"value": "医学免疫学"
					},
					{
						"value": "病理学"
					},
					{
						"value": "分析医学"
					},
					{
						"value": "口腔学"
					},
				]
			},
			handleSelect(item) {
				console.log(item);
			},
			handleIconClick(ev) {
				console.log(ev);
			}
		},
		mounted() {
			this.courses = this.loadAll();
		},
	}
</script>

<style scoped>
	.my-autocomplete {
		li {
			line-height: normal;
			padding: 7px;
	
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
			}
	
			.addr {
				font-size: 12px;
				color: #b4b4b4;
			}
	
			.highlighted .addr {
				color: #ddd;
			}
		}
	}
	
	>>>.el-input__inner:focus {
		border-color: #0f4c81 !important;
		outline: 0;
	}
	
	>>>.el-input__inner{
		height: 48px;
	}
	
	.el-icon-search {
		font-weight: bold;
		font-size: 16px;
		color: #000000;
		cursor: pointer;
	}
	
	>>>.el-input{
		width: 736px;
		height: 48px;
	}
	
	.s-search {
		min-height: 600px;
		background: #FAFAFA;
		overflow: hidden;
	}

	.search-header {
		height: 88px;
		width: 100%;
		padding-top: 24px;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(28, 31, 33, .06);
	}

	.search-form {
		height: 48px;
		width: 840px;
		margin: 0 auto;
		position: relative;
	}

	.search-form-ipt {
		font-size: 16px;
		color: #93999f;
		width: 736px;
		line-height: 48px;
		height: 48px;
		padding: 12px;
		background: #FAFAFA;
		box-sizing: border-box;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		float: left;
	}

	.search-form-btn {
		float: right;
		background: #0F4C81;
		width: 104px;
		height: 48px;
		line-height: 48px;
		font-size: 16px;
		color: #fff;
		cursor: pointer;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		-webkit-transition: all .3s;
	}

	input,
	button {
		outline: 0;
		border: 0;
	}

	.search-body {
		margin: 0 auto;
		width: 1168px;
		padding-top: 16px;
		box-sizing: border-box;
	}

	.search-content {
		float: left;
		width: 1168px;
		padding-bottom: 20px;
	}

	.search-all {
		background: #fff;
		font-size: 0;
		padding: 20px 32px;
		border-bottom: 1px solid #f3f5f6;
		height: 41px;
	}

	.search-all a {
		display: inline-block;
		font-size: 16px;
		color: #0F4C81;
		text-align: center;
		line-height: 40px;
		font-weight: 700;
		float: left;
	}

	.search-all a span {
		font-size: 12px;
		color: #9199a1;
		text-align: center;
		line-height: 40px;
		font-weight: 700;
	}
</style>
