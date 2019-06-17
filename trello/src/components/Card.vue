<template>
  <div>
    Card
    <div v-if="loading">loading Card....</div>
    <div v-else>
      <p>cid : {{cid}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid : 0,
      loading : false
    }
  },
  watch: {
    $route : {
      handler : 'fetchData',
      immediate : true
    }
  },
  // created() {
  //   this.fetchData()
  //   console.log(this.$route)
  // },
  methods: {
    fetchData(){
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  },
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;  
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>
