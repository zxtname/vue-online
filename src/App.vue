<template>
  <div id="app">
	<homeHeader/>
    <router-view></router-view>
	<homefooter/>
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
}
</script>

<style>
#app {
  font-family: 'Avenir',"Microsoft YaHei", Helvetica, Arial, sans-serif;
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
