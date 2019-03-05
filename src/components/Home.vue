<template>
  <div class="home">
    <Search></Search>
    
    <!-- banner部分 -->
    <div class="banner">
      <div class="img">
        <img src="../assets/images/banner.jpg" alt="">
      </div>
      <p>金杜投资平台2.0正式上线</p>
    </div>
    <!-- banner部分 -->

    <!-- service部分 -->
    <div class="service">
      <ul class="service-type">
         <li>项目收购</li>
         <li>项目转让</li>
         <li>项目合作</li>
         <li>项目融资</li>
      </ul>
      <div class="real-type">
        <ul class="type-content">
          <li>
            <div class="icon">
              <span class="iconfont">&#xe643;</span>
            </div>
            <p>不良资产</p>
          </li>
          <li>
            <div class="icon">
              <span class="iconfont">&#xe802;</span>
            </div>
            <p>不良资产</p>
          </li>
          <li>
            <div class="icon">
              <span class="iconfont">&#xe790;</span>
            </div>
            <p>破产重组</p>
          </li>
           <li>
            <div class="icon">
              <span class="iconfont">&#xe760;</span>
            </div>
            <p>股权投资</p>
          </li>
           <li>
            <div class="icon">
              <span class="iconfont">&#xe6c8;</span>
            </div>
            <p>境外投资</p>
          </li>
        </ul>
        <ul class="type-content">
          <li>
            <div class="icon">
              <span class="iconfont">&#xe662;</span>
            </div>
            <p>外商投资</p>
          </li>
          <li>
            <div class="icon">
              <span class="iconfont">&#xe64b;</span>
            </div>
            <p>政府投资</p>
          </li>
          <li>
            <div class="icon">
              <span class="iconfont">&#xe618;</span>
            </div>
            <p>信托资管</p>
          </li>
           <li>
            <div class="icon">
              <span class="iconfont">&#xe62f;</span>
            </div>
            <p>股权投资</p>
          </li>
           <li>
            <div class="icon">
              <span class="iconfont">&#xe62c;</span>
            </div>
            <p>壳资源</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- service部分 -->
    <div class="projects" v-if="all.length">
      <mt-navbar v-model="option">
        <mt-tab-item id="news">最新项目</mt-tab-item>
        <mt-tab-item id="recommands">推荐项目</mt-tab-item>
        <mt-tab-item id="hots">最热项目</mt-tab-item>
      </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="option" >
          <mt-tab-container-item id="news">
            <ProList :prolist="news"></ProList>
          </mt-tab-container-item>
          <mt-tab-container-item id="recommands">
            <ProList :prolist="recommands"></ProList>            
          </mt-tab-container-item>
          <mt-tab-container-item id="hots">
            <ProList :prolist="hots"></ProList>            
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Search from "./Search";
import ProList from './ProList'
import TabBar from './TabBar'

export default {
  name:'home',
  components:{
    Search,ProList,TabBar
  },
  data:()=>({
    option:"news"
  }),
  computed:{
    all(){
      return [...this.$store.state.projects.projects]
    },
    news(){
      return [...this.$store.state.projects.projects].filter(ele=>ele.new)
    },
    recommands(){
      return [...this.$store.state.projects.projects].filter(ele=>ele.recommand)
    },
    hots(){
      return [...this.$store.state.projects.projects].filter(ele=>ele.hot)
    },
  }
}
</script>

<style>
/* // home整体样式 */
.home{

}
/* // home整体样式 */


/* banner样式 */
.banner{
  position: relative;
  margin-bottom: 10px;
}
.banner>p{
  font-size: 15px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 10px;;
  color: #f2f2f2;
  line-height: 1rem;
}
/* banner样式 */


/* service的服务 */
.service{
  border-bottom: 10px solid #f6f6f6;
}
.service-type{
   display: flex;
   background: #007bff;
   line-height: 32px;
}
.service-type>li{
  width: 25%;
  border-left: 1px solid #f2f2f2;
  text-align: center;
  color: #f2f2f2;
}
.real-type{
  padding: 10px 0;
}
.type-content{
  display: flex;
  justify-content: space-around;
}
.type-content>li{
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.type-content .icon{
  background: #007bff;
  border-radius: 50%;
  width: 0.9rem;
  height: 0.9rem;
  text-align: center;
  line-height: 1rem;
}
.type-content .icon>.iconfont{
  font-size: 24px;
  color: #f2f2f2;
}
.icon+p{
  color: #444;
  font-size: 13px;
  line-height: 24px;;
}
.real-type>.type-content:nth-child(1)>li:nth-child(1) .icon{
  background: #ff0762;
}
.real-type>.type-content:nth-child(1)>li:nth-child(2) .icon{
  background: #fa464d;
}
.real-type>.type-content:nth-child(1)>li:nth-child(3) .icon{
  background: #379dff;
}
.real-type>.type-content:nth-child(1)>li:nth-child(4) .icon{
  background: #feaa33;
}
.real-type>.type-content:nth-child(1)>li:nth-child(5) .icon{
  background: #8a6dfb;
}
.real-type>.type-content:nth-child(2)>li:nth-child(1) .icon{
  background: #0acf97;
}
.real-type>.type-content:nth-child(2)>li:nth-child(2) .icon{
  background: #777edd;
}
.real-type>.type-content:nth-child(2)>li:nth-child(3) .icon{
  background: #ff679b;
}
.real-type>.type-content:nth-child(2)>li:nth-child(4) .icon{
  background: #02c0ce;
}
.real-type>.type-content:nth-child(2)>li:nth-child(5) .icon{
  background: #4eb7eb;
}
/* service的服务 */

/* 项目部分样式 */

.projects .mint-navbar .mint-tab-item.is-selected{
  color: #007bff;
  border-bottom: 3px solid #007bff;
}
.projects .mint-tab-item-label{
  font-size: 15px;
  color: #444;
}

/* 项目部分样式 */


</style>
