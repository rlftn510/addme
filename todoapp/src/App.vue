<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- v-on:하위 컨포넌트에서 발생시긴 이벤트 이름="현재 컴퍼넌트의 메서드 명" -->
    <todo-input></todo-input>
    <!-- v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성" -->
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
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
