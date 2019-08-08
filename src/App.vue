<template>
  <div id="app">
    <div class = "app-content">
        <Top v-if = "$route.meta.top"></Top>
        <Nav v-if="$route.meta.tabBar"></Nav>
        <router-view></router-view>
    </div>
      
  </div>
</template>
<script>
import Top from "common/top";
import Nav from "common/tableBar"
export default{
  name:"App",
  components:{
    Nav,
    Top
  }
}
</script>
<style lang="scss">
#app{
  font-size:.12rem;
  height: 100%;
}
.app-content{
    height: 100%;
    overflow: auto
}
</style>
