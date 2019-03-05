<template>
  <div class="wrapper">
    <div class="con">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/css/index.css"

document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';

export default {
  name:'app',
  created(){
    this.$store.dispatch("getProjects")
  },
}
</script>

<style>
*{
  box-sizing: border-box;
}
.wrapper{
  width: 7.5rem;
  background: #f8f8f8;
}
.con{
  padding-bottom: 100px;
}
</style>


