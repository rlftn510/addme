<template>
  <div>
    <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
      <i class="checkBtn fas fa-check" v-on:click="toggleCompleted(todoItem, index)" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
    </li>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index){
      this.$store.commit('removeOneItem', {todoItem, index})
    },
    toggleCompleted(todoItem, index){
      this.$store.commit('toggleOneItem', {todoItem, index})
    }
  },  
  
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>