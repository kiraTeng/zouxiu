<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	beforeCreate() {
		this.$router.push('../../brand')
	}
}
</script>

<style>
#app {
  font-family: arial,Microsoft YaHei,Hiragino Sans GB,u5b8bu4f53,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
	font-size: 12px;
	background: #fff;
	color: #111;
	min-width: 1280px;
}
.wrap{
	width: 1200px;
	margin: 0 auto;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
</style>
