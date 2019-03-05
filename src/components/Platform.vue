<template>
  <div class="platform">
    <ul class="plat-list">
      <li>
        <router-link to='/'>
        <div class="left">
          <span class="iconfont">&#xe61f;</span>
          <span>
              所有VIP
          </span>
        </div>
         <div class="right">
          <span class="iconfont icon-right">&#xe637;</span>
        </div>
        </router-link>
      </li>
      <li>
        <router-link to='/'>
        <div class="left">
          <span class="iconfont">&#xe619;</span>
          <span>
              投融资讯
          </span>
        </div>
        <div class="right">
          <span class="iconfont icon-right">&#xe637;</span>
        </div>
        </router-link>
      </li>
      <li>
        <router-link to='/'>
        <div class="left">
          <span class="iconfont">&#xe603;</span>
          <span>
              关于平台
          </span>
        </div>
         <div class="right">
          <span class="iconfont icon-right">&#xe637;</span>
        </div>
        </router-link>
      </li>
      <li>
        <router-link to='/'>
        <div class="left">
          <span class="iconfont">&#xe604;</span>
          <span>
              合作机构
          </span>
        </div>
         <div class="right">
          <span class="iconfont icon-right">&#xe637;</span>
        </div>
        </router-link>
      </li>
    </ul>
    <TabBar></TabBar>
  </div>
</template>

<script>

import TabBar from './TabBar'

export default {
  name:'plat',components:{
    TabBar
  }
}
</script>

<style>
  /* platform的样式 */
  .platform{
    background: #f8f8f8;
    padding-top: 10px;
  }
  .plat-list{
    background: #fff;
    padding: 0.45rem;
    line-height: 1.26rem;
  }
  .plat-list>li>a{
    border-bottom: 1px solid #f8f8f8;
    display: flex;
    justify-content: space-between;
  }
  .plat-list>li .iconfont{
      color: #007bff;
      font-size: 24px;
      margin-right: 10px;;
  }
  .plat-list>li .icon-right{
    color: #444;
    font-size: 20px;
  }
</style>
