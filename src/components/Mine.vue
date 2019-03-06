<template>
  <div class="mine">
    <div class="mine-content">
      <div class="user">
        <div class="title-user">
          <h4>欧阳静</h4>
          <p>金杜事务所合伙人</p>
        </div>
        <div class="img">
          <img src="./../assets/images/avatar1.jpg" alt>
        </div>
      </div>
      <div class="platform" @click="change">
        <ul class="plat-list">
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe60a;</span>
                <span>发布项目</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe659;</span>
                <span>我的项目</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe646;</span>
                <span>我的收藏</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe681;</span>
                <span>我的分享</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe610;</span>
                <span>我的VIP</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe604;</span>
                <span>我的联系合伙人</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe657;</span>
                <span>申请VIP账号</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <div class="left">
                <span class="iconfont">&#xe70f;</span>
                <span>账号设置</span>
              </div>
              <div class="right">
                <span class="iconfont icon-right">&#xe637;</span>
              </div>
            </router-link>
          </li>
        </ul>
        <TabBar></TabBar>
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "./TabBar";
export default {
  name: "mine",
  components: {
    TabBar
  },
  methods: {
    change() {
      this.$store.dispatch("changeSelected", "home");
    }
  }
};
</script>

<style>
.user {
  display: flex;
  padding: 0.4rem;
  background: #fff;
  justify-content: space-between;
  align-items: center;
}
.user .img {
  width: 1.2rem;
  height: 1.2rem;
  overflow: hidden;
  border-radius: 50%;
}
.title-user {
  color: #444;
}
.title-user > p {
  line-height: 0.8rem;
  font-size: 15px;
}
</style>
