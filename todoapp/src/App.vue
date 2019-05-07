<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <!-- v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성" -->
    <todo-list v-bind:propsdata="todoItems"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  data() {
    return {
      todoItems : []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          // JSON.parse == 객체화
        }
      }
    }
  },
  components : {
    //컴포넌트 태그명 : 컴포넌트 내용
    'todo-header' : TodoHeader,
    'todo-list' : TodoList,
    'todo-input' : TodoInput,
    'todo-footer' : TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
