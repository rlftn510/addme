<template>
  <div>
    Card
    <p>cid : {{cid}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid : 0
    }
  },
  watch: {
    '$route'(){
      this.cid = this.$route.params.cid
    }    
  },
  created() {
    this.cid = this.$route.params.cid
    console.log(this.$route)
  },
}
</script>

<style>

</style>
