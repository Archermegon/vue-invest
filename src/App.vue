<template>
  <div class="wrapper">
    <div class="con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/css/index.css";

document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 7.5 + "px";

export default {
  name: "app",
  created() {
    this.$store.dispatch("getProjects");
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.wrapper {
  width: 7.5rem;
  background: #f6f6f6;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
.con {
  margin-bottom: 1.5rem;
}
</style>


