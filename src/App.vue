<template>
  <header>
    <Header></Header>
  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>


<script>

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

main{
  border: 2px solid red;
}

</style>
