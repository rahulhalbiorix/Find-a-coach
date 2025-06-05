<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>


<script>
import { RouterView } from 'vue-router';
import Header from './components/TheHeader/Navbar.vue'

export default{
  components:{
    Header
  }
}

</script>

<style scoped>
header{
  height: 10vh;
}

</style>
