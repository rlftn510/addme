<template>
  <div>
    Home
    <div>
      Board List : 
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">
          {{ b }}
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/b/1">board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {board} from '../api/index.js'


export default {
  data() {
    return {
      loading : false,
      boards : [],
      error : ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.loading = true;
      // axios의 메소드인 then을 쓸수 있는것은 import 한 board 에 
      //board.fetch 가 axios 를 return 해주기 때문
      board.fetch().then(data => {  
        this.boards = data
      })
      .finally(() => {
        this.loading = false
      })
     
    }
  },
}
</script>

<style>

</style>
