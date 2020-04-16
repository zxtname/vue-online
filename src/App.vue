<template>
  <div id="app">
	 <homeHeader/>
    <router-view></router-view>
	<homefooter/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import homeHeader from '@/components/common/homeHeader.vue';
import homefooter from '@/components/common/homefooter.vue';
export default {
  name: 'app',
  components: {
    homeHeader,
	homefooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir','SimHei', Helvetica, Arial, sans-serif;
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
