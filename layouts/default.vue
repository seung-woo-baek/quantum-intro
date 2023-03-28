<template>
  <div class="wrap">
    <Header />
    <nuxt/>
  </div>
</template>

<script>
import Header from 'components/Header.vue'

export default {
  components:{
    Header
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Pretendard', sans-serif;
  .wrap{
    position: relative;
    width: 100%;
  }
}
</style>

