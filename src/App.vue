<template>
	<div id="app">
		<homeHeader v-if="isRouterAlive"/>
		<router-view></router-view>
		<homefooter />
		<sidebar></sidebar>
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'
	import homeHeader from '@/components/common/homeHeader.vue';
	// import test from '@/components/common/test.vue';
	import homefooter from '@/components/common/homefooter.vue';
	import sidebar from '@/components/common/sidebar.vue';

	export default {
		name: 'app',
		components: {
			homeHeader,
			homefooter,
			sidebar,
			//test,
		},
		provide(){
			return{
				reload:this.reload
			}
		},
		data(){
			return{
				isRouterAlive:true
			}
		},
		methods:{
			reload(){
				this.isRouterAlive=false;
				this.$nextTick(function(){
					this.isRouterAlive=true;
				})
			}
		}
		// mounted() {
		// 	window.addEventListener('unload', this.saveState)
		// },
		// methods: {
		// 	saveState() {
		// 		sessionStorage.setItem('state', JSON.stringify(this.$store.state))
		// 	}
		// }
	}
</script>

<style>
	#app {
		font-family: 'Avenir', "Microsoft YaHei", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;

		/* display: flex; */
	}

	a {
		text-decoration: none;
	}
</style>
