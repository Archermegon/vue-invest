<template>
  <ul class="pro-list">
              <li v-for="one in prolist" :key="one.id">
                <router-link :to="`/detail/${one.id}`">
                    <div class="list-item">
                      <h3 class="pro-title"> <span>[ {{one.mPath}} ] </span>{{one.title}}</h3>
                      <div class="pro-content">
                        {{one.content}}
                      </div>
                      <div class="pro-list-btn">
                        <li>
                          <span class="iconfont">&#xe632;</span>
                          <span>{{one.url}}</span>
                        </li>
                        <li>
                          <span class="iconfont">&#xe661;</span>
                          <span>{{one.visit}}</span>
                        </li>
                        <li>
                          <span class="iconfont">&#xe646;</span>
                          <span>{{one.fav}}</span>
                        </li>
                        <li class="state">
                          {{one.isActive}}
                        </li>
                      </div>
                    </div>
                </router-link>
               
              </li>
            </ul>
</template>

<script>
export default {
   name:"pro-list",
   props: ['prolist']
}
</script>

<style>
.pro-list{
  padding: 0 0.45rem;
  background: #fff;
}
.pro-list>li{
  padding-top: 0.4rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #f8f8f8;
}
.pro-list-btn{
  display: flex;
  justify-content: space-between;
  align-items: center
}
.pro-list-btn .iconfont{
  margin-right: 5px;
  font-size: 20px;
}
.state{
   background: #007bff;
   color: #f1f1f1;
   border-radius: 3px;
   padding: 3px 10px;
}
.pro-title{
  font-size: 15px;
  color: #444;
}
.pro-title>span{
  color: #007bff;
}
.pro-content{
  padding: 0.45rem 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
