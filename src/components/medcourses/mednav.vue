<template>
	<div class="mednav w">
		<el-col :span="8">
			<el-menu default-active="0" class="el-menu-vertical-demo" background-color="#FAF5FF" text-color="#303133"
			 active-text-color="#6A8DC3">
				<el-menu-item index="0" @click="classfyClick('')" style="padding-left: 40px;"><span slot="title">全部</span></el-menu-item>
				<el-menu-item v-for="(item, index) in classfyList" :key="item.id" :index="item.id.toString()" @click="classfyClick(item.classfyName)"
				 style="padding-left: 40px;">
					<span slot="title">{{ item.classfyName }}</span>
				</el-menu-item>
			</el-menu>
		</el-col>

		<div class="medcourselist">
			<div class="med-search">
				<div class="mednavtext">全部</div>

				<div class="searchInput">
					<el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch"
					 placeholder="搜索 课程" @select="handleSelect" :value="text" @input="$emit('change', $event.target.value)"
					 @keyup.enter="search">
						<i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick">
						</i>
						<template slot-scope="{ item }">
							<div class="name">{{ item.value }}</div>
							<!-- <span class="addr">{{ item.address }}</span> -->
						</template>
					</el-autocomplete>
					<!-- <input
						type="text"
						name="search"
						placeholder="搜索课程名/教师名"
						:value="text"
						@input="$emit('change', $event.target.value)"
						@keyup.enter="search"
						class="searchInputItem"
					/>
					<i class="fas fa-search" @click="search"></i> -->
				</div>
			</div>

			<div class="medcards">
				<!-- <mdcards></mdcards> -->
				<cards :dataList="dataList"></cards>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import mdcards from '@/components/common/mdcards.vue'
	import cards from '@/components/common/cards.vue';
	export default {
		data() {
			return {
				courses: [],
				state: ''
			};
		},
		components: {
			// mdcards,
			cards
		},
		model: {
			prop: 'text',
			event: 'change'
		},
		props: {
			classfyList: Array,
			default () {
				return [];
			},
			dataList: Array,
			default () {
				return [];
			},
			text: String,
			default () {
				return '';
			}
		},
		created() {},
		mounted() {
			this.courses = this.loadAll();
			// console.log(this.classfyList)
		},
		methods: {
			search() {
				this.$emit('search');
			},
			classfyClick(val) {
				this.$emit('classfyClick', val);
			},
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

	.el-icon-search {
		padding-top: 2px;
		font-weight: bold;
		font-size: 16px;
		color: #000000;
		cursor: pointer;
	}

	.w {
		width: 1250px;
		margin: auto;
	}

	.mednav {
		padding-left: 15px;
		display: flex;
	}

	.el-menu-item {
		font-size: 1.125rem;
		border-bottom: 1px solid #eceeef;
		text-align: left;
	}

	.el-menu-item:hover {
		background-color: #6a8dc3;
	}

	.medcourselist {
		padding-left: 50px;
	}

	.mednavtext {
		font-weight: bold;
		font-size: 1.375rem;
		padding-top: 20px;
	}

	.med-search {
		display: flex;
		padding-left: 20px;
	}

	.searchInputItem {
		display: block;
		width: auto;
		border: 0;
		/* border-bottom: 1px solid rgb(128, 125, 125); */
		border-radius: 5px;
		vertical-align: middle;
		margin-right: 0.5rem;
		height: calc(1.5em + 0.5rem + 2px);
		padding: 0.25rem 1.4375rem;
		font-size: 1rem;
		line-height: 1.5;
		background-color: #faf4fe;
		/* color: #495057; */
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		font-weight: 400;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}

	.searchInputItem:focus {
		border-color: #0f4c81;
		outline: 0;
	}

	.searchInput {
		position: relative;
		display: flex;
		align-items: center;
		padding-left: 450px;
		padding-top: 10px;
	}

	.fa-search {
		position: absolute;
		right: 12px;
		color: #333;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.5;
		border-radius: 0.2rem;
		cursor: pointer;
	}

	el-col {
		float: none;
	}
</style>
