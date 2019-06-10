<template>
  <div>
    Home
    <div>
      Board List : 
      <div v-if="loading">Loading...</div>
      <div v-else>
        Api result : {{apiRes}}
      </div>
      <div v-if="error"><pre>{{error}}</pre></div>
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
import axios from 'axios'

export default {
  data() {
    return {
      loading : false,
      apiRes : '',
      error : ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.loading = true;
      axios.get('http://localhost:3000/health').then(res => {
        this.apiRes = res.data
      }).catch(res => {
        this.error = res.response.data
      }).finally(() => {
        this.loading = false
      })
      // const req = new XMLHttpRequest()

      // req.open('GET', 'http://localhost:3000/health')

      // req.send() // 클라이언트 서버에서 백엔드 서버로 요청

      // req.addEventListener('load', () => {
      //   this.loading = false;
      //   this.apiRes = {
      //     status : req.status,
      //     statusText : req.statusText,
      //     response : JSON.parse(req.response)
      //   }
      // })
    }
  },
}
</script>

<style>

</style>
