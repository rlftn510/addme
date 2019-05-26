<template>
  <div id="app">
    <todoheader></todoheader>
    <todoinput></todoinput>
    <todolist></todolist>
    <todofooter></todofooter>
  </div>
</template>

<script>

import todoheader from './components/todoheader.vue';
import todoinput from './components/todoinput.vue';
import todolist from './components/todolist.vue';
import todofooter from './components/todofooter.vue';


export default {
  components : {
    todoheader,
    todoinput,
    todolist,
    todofooter
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
