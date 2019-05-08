<template>
  <div id="app">
    <h2 class="logo">Note</h2>
    <img src="./assets/wellcomefile.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.logo {
  text-align: left;
  margin-left: 5%;
}

.logo img {
  align: "left"
}
</style>
