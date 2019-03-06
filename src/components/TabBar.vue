<template>
  <footer>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <router-link to="/">
          <span class="iconfont icon-foot" @click="changePage('home')">&#xe620;</span>
        </router-link>首页
      </mt-tab-item>
      <mt-tab-item id="pro">
        <router-link to="/pro">
          <span class="iconfont icon-foot" @click="changePage('pro')">&#xe64a;</span>
        </router-link>项目
      </mt-tab-item>
      <mt-tab-item id="plat">
        <router-link to="/plat">
          <span class="iconfont icon-foot" @click="changePage('plat')">&#xe625;</span>
        </router-link>平台
      </mt-tab-item>
      <mt-tab-item id="my">
        <router-link to="/my">
          <span class="iconfont icon-foot" @click="changePage('my')">&#xe636;</span>
        </router-link>我的
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>


<script>
export default {
  name: "bottom",
  methods: {
    changePage(mode) {
      this.$store.dispatch("changeSelected", mode);
    }
  },
  computed: {
    selected() {
      return this.$store.state.selected.selected;
    }
  }
};
</script>

<style>
footer .mint-tabbar {
  background: #f6f6f6;
  position: fixed;
}
footer .mint-tabbar > .mint-tab-item.is-selected {
  background-color: #f6f6f6;
  color: #007bff;
}
footer .mint-tab-item-label {
  font-size: 14px;
  color: #444;
}
footer .mint-tabbar > .mint-tab-item.is-selected .mint-tab-item-label {
  color: #007bff;
}
footer .mint-tabbar > .mint-tab-item.is-selected .icon-foot {
  color: #007bff;
}
footer .icon-foot {
  display: block;
  font-size: 26px;
  margin-bottom: 5px;
  color: #444;
}
</style>


