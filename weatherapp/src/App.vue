<template>
  <div id="app">
    <weatherHeader></weatherHeader>
  </div>
</template>

<script>
import weatherHeader from './components/weatherHeader.vue'

export default {
  components : {
    weatherHeader
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
