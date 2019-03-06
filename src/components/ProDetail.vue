<template>
  <div class="pro-detail" v-if="pro">
    <Header title="项目详情" path="/"></Header>
    <article>
      <h3>
        <span>[{{pro.mPath}}]</span>
        {{pro.title}}
      </h3>
      <div class="article-detail">
        <ul class="pro-list-button">
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
        <p>{{pro.content}}</p>
      </div>
    </article>
    <div class="type-detail">
      <ul class="type-list">
        <li>意向金额：{{pro.subTitle}}</li>
        <li>项目编号： {{pro.id}}</li>
        <li>项目类型： {{pro.pro_type}}</li>
        <li>
          <span>项目分类：{{pro.orderBy}}</span>
          <span>所属行业：{{pro.mPath}}</span>
        </li>
        <li>
          <span>所属地区：{{pro.position}}</span>
          <span>
            项目状态：
            <span class="state">{{pro.isActive}}</span>
          </span>
        </li>
        <li>项目有效期：{{pro.time}}</li>
      </ul>
    </div>
    <div class="contact">
      <p>联系方式</p>
      <div class="contact-deta" v-if="user">
        <div class="user-img">
          <img :src="user.avtarurl" alt>
        </div>
        <p class="name">{{user.name}}</p>
        <p class="name">{{user.state}}</p>
        <p>邮箱：{{user.phone}}</p>
        <p>手机：{{user.mail}}</p>
      </div>
    </div>
    <div class="comments">
      <p>评论</p>
      <ul class="comment-list" v-if="comments.length">
        <li v-for="com in comments" :key="com.id">
          <div class="avatar-com">
            <img :src="com.avtarurl" alt>
          </div>
          <div class="content-com">
            <p class="del">
              <span>{{com.name}}</span>
              <span class="iconfont" @click="del(com.id)">&#xe608;</span>
            </p>
            <p>{{com.txt}}</p>
          </div>
        </li>
      </ul>
      <p v-else>暂无评论，快来支持吧</p>
    </div>
    <div class="input-com">
      <div class="img">
        <img src="./../assets/images/avatar1.jpg" alt>
      </div>
      <div class="txt">
        <input type="text" v-model="txt">
      </div>
      <button @click="add">发送</button>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "detail",
  components: {
    Header
  },
  data: () => ({
    txt: ""
  }),
  created() {
    this.$store.dispatch("getPro", this.id);
    this.$store.dispatch("getUser", this.id);
    this.$store.dispatch("getComments", this.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    pro() {
      return this.$store.state.projects.pro;
    },
    user() {
      if (this.$store.state.user.user) {
        return this.$store.state.user.user[0];
      }
    },
    comments() {
      return this.$store.state.comments.comments;
    }
  },
  methods: {
    add() {
      if (this.txt.trim()) {
        const com = {
          id: Date.now(),
          proId: this.id,
          name: "欧阳静",
          avtarurl: "./../assets/images/avatar1.jpg",
          txt: this.txt
        };
        this.$store.dispatch("addComment", com);
      }
    },
    del(id) {
      this.$store.dispatch("delComment", id);
    }
  }
};
</script>

<style>
.pro-detail {
  color: #444;
  font-size: 15px;
  line-height: 0.4rem;
}
article {
  padding: 0.4rem;
  margin-bottom: 0.1rem;
  background: #fff;
}
article > h3 {
  color: #444;
}
article > h3 > span {
  color: #007bff;
}
.pro-list-button {
  display: flex;
  justify-content: flex-end;
  line-height: 1.1rem;
  font-size: 15px;
  color: #777;
}
.pro-list-button .iconfont {
  margin-left: 30px;
}
.type-detail,
.contact,
.comments {
  background: #fff;
  padding: 0.4rem;
  line-height: 0.6rem;
  margin-bottom: 0.1rem;
}
.type-detail > .type-list > li {
  display: flex;
  justify-content: space-between;
}
.money {
  font-size: 16px;
}
.contact {
  text-align: center;
}
.user-img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid #f6f6f6;
  overflow: hidden;
  margin: 0 auto;
}
.avatar-com {
  border-radius: 50%;
  margin: 0 0.4rem;
  border: 1px solid #f6f6f6;
  width: 0.8rem;
  height: 0.8rem;
}
.comment-list > li {
  display: flex;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f6f6f6;
}
.del {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
}
.content-com {
  width: 80%;
}
.input-com {
  position: fixed;
  bottom: 0;
  background: #f6f6f6;
  display: flex;
  width: 100%;
  padding: 0.15rem 0.4rem;
  align-items: center;
}
.input-com .img {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  overflow: hidden;
}
.txt {
  margin-left: 10px;
  width: 67%;
}
.input-com input {
  height: 0.6rem;
  width: 100%;
}
.input-com button {
  margin-left: 10px;
  background: #007bff;
  color: #fff;
  border-radius: 3px;
  padding: 3px 12px;
}
</style>
