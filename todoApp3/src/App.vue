<template>
  <div id="app">
    <todoheader></todoheader>
    <todoinput v-on:addItem="addOneItem"></todoinput>
    <todolist 
    v-bind:propsdata="todoItems"
    v-on:removeItem="removeOneItem"
    v-on:toggleItem="toggleOneItem"
    ></todolist>
    <todofooter v-on:clearAll="removeAllItem"></todofooter>
  </div>
</template>

<script>

import todoheader from './components/todoheader.vue';
import todoinput from './components/todoinput.vue';
import todolist from './components/todolist.vue';
import todofooter from './components/todofooter.vue';


export default {
  data() {
    return {
      todoItems : []
    }
  },
  methods: {
    addOneItem(todoItem){
      let obj = {completed : false, item : todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem, index){
      this.todoItems.splice(index, 1)
      localStorage.removeItem(todoItem.item)
    },
    toggleOneItem(todoItem, index){
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    removeAllItem(){
      localStorage.clear();
      this.todoItems = []
    }
  },
  created() {
    if(localStorage.length > 0){
      for(let i = 0;i < localStorage.length; i++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },
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
