<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/car">car</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
