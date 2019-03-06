<template>
  <header>
    <router-link :to="path">
      <span class="iconfont">&#xe682;</span>
      <span>{{title}}</span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "headline",
  props: ["title", "path"]
};
</script>

<style>
header {
  line-height: 1.3rem;
  padding-left: 0.1rem;
  background: #fff;
}
header .iconfont {
  margin-right: 10px;
}
</style>
