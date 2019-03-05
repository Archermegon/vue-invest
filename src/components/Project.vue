<template>
  <div class="project">
    <Search></Search>
    <ul class="pro-show-type">
      <li :class="ind===0?'active':''" @click="changeMode(0)">
        <span>类型</span> <span class="iconfont">&#xe771;</span>
      </li>
      <li :class="ind===1?'active':''" @click="changeMode(1)">
        <span>分类</span> <span class="iconfont">&#xe771;</span>
      </li>
      <li :class="ind===2?'active':''" @click="changeMode(2)">
        <span>行业</span> <span class="iconfont">&#xe771;</span>
      </li>
      <li :class="ind===3?'active':''" @click="changeMode(3)">
        <span>地区</span> <span class="iconfont">&#xe771;</span>
      </li>
      <li :class="ind===4?'active':''" @click="changeMode(4)">
        <span>排序</span>  <span class="iconfont">&#xe771;</span>
      </li>
    </ul>
    <ProList v-bind:prolist="pros"></ProList>
    <!-- projects的集合 -->
    <TabBar></TabBar>
  </div>
</template>

<script>
import Search from './Search'
import ProList from "./ProList";
import TabBar from './TabBar'
export default {
   name:"project",
   components:{
     Search,
     ProList,TabBar
   },
   data:()=>({
     ind:0
   }),
   computed:{
     pros(){
       return this.$store.state.projects.projects
     }
   },
   methods:{
     changeMode(ind){
        this.ind = ind
     }
   }
}
</script>

<style>
   /* project样式 */
   .project{

   }
   /* project样式 */
.pro-show-type{
  display: flex;
  padding: 0.45rem;
  color: #444;
  background: #fff;
  border-bottom: 2px solid #f6f6f6;
}
.pro-show-type>li{
  width: 25%;
  text-align: center
}
.pro-show-type>.active{
  color: #007bff;
}
</style>
