<template>
  <div class="pro-detail" v-if="pro">
     <Header title='项目详情' path='/'></Header>
     <article>
         <h3><span>[{{pro.mPath}}]</span> {{pro.title}}</h3>
         <div class="article-detail">
           <ul class="pro-list-btn">
                        <li>
                          <span class="iconfont">&#xe632;</span>
                          <span>{{pro.url}}</span>
                        </li>
                        <li>
                          <span class="iconfont">&#xe661;</span>
                          <span>{{pro.visit}}</span>
                        </li>
                        <li>
                          <span class="iconfont">&#xe646;</span>
                          <span>{{pro.fav}}</span>
                        </li>
                        <li>
                          <span class="iconfont">&#xe60a;</span>
                        </li>
          </ul>
          <p>
            {{pro.content}}
          </p>
         </div>
     </article>
     <div class="type-detail">
       <ul class="type-list">
         <li>意向金额：{{pro.subTitle}}
            </li>
         <li>项目编号： {{pro.id}}</li>
         <li>项目类型： {{pro.pro_type}}</li>
         <li> <span>项目分类：{{pro.orderBy}}</span><span>所属行业：{{pro.mPath}}</span></li>
         <li> <span>所属地区：{{pro.position}}</span><span>项目状态：<span class="state">
           {{pro.isActive}}
         </span>
           </span></li>
         <li>项目有效期：{{pro.time}}</li>
       </ul>
     </div>
     <div class="contact">
        <p>联系方式</p>
        <div class="contact-deta" v-if="user">
            <div class="img">
              <img :src="user.avtarurl" alt="">
            </div>
            <p class="name">{{user.name}}</p>
            <p class="name">{{user.state}}</p>
             <p> 邮箱：{{user.phone}}</p>
             <p> 手机：{{user.mail}}</p>

        </div>
     </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
   name:'detail',
    
   components:{
     Header
   },
   created(){
     this.$store.dispatch("getPro",this.id)
     this.$store.dispatch('getUser',this.id)
   },
   computed:{
     id(){
       return this.$route.params.id
     },
     pro(){
       return this.$store.state.projects.pro
     },
     user(){
       return this.$store.state.user.user[0]
     }
   }
}
</script>

<style>
.pro-detail{
  color: #444;
  font-size: 15px;
  line-height: 0.4rem;
}
article{
  padding: 0.4rem;
  margin-bottom: 0.1rem;
  background: #fff;
}
article>h3{
  color: #444;
}
article>h3>span{
  color: #007bff
}
.pro-list-btn{
   justify-content: flex-end;
   line-height: 1.1rem;
   font-size: 15px;
   color: #777;
}
.pro-list-btn .iconfont{
  margin-left: 30px;;
}
.type-detail,.contact{
  background: #fff;
  padding: 0.4rem;
  line-height: 0.6rem;
  margin-bottom: 0.1rem;
}
.type-detail>.type-list>li{
  display: flex;
  justify-content: space-between;
}
.money{
  font-size: 16px;
}
</style>
