<template>
  <div class="post-con">
    <Header path="/plat" title="投融资讯"></Header>
    <Search></Search>
    <ul class="post-list">
      <li>
        <router-link to="/postcon">
          <div class="img">
            <img src="../assets/images/bg1.jpg" alt>
          </div>
          <div class="post-li">
            <h4>金杜国家中心重大交易</h4>
            <p>真正的朋友，总是投桃报李，饮水思源。他会记住你一丁一点的好，把往事珍藏。</p>
            <ul class="scan">
              <li>
                <span class="iconfont">&#xe72d;</span>
                <span>2018-01-20</span>
              </li>
              <li>
                <span class="iconfont">&#xe661;</span>
                <span>45</span>
              </li>
            </ul>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/postcon">
          <div class="img">
            <img src="../assets/images/bg2.jpg" alt>
          </div>
          <div class="post-li">
            <h4>金杜国家中心重大交易</h4>
            <p>真正的朋友，总是投桃报李，饮水思源。他会记住你一丁一点的好，把往事珍藏。</p>
            <ul class="scan">
              <li>
                <span class="iconfont">&#xe72d;</span>
                <span>2018-01-20</span>
              </li>
              <li>
                <span class="iconfont">&#xe661;</span>
                <span>45</span>
              </li>
            </ul>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/postcon">
          <div class="img">
            <img src="../assets/images/bg3.jpg" alt>
          </div>
          <div class="post-li">
            <h4>金杜国家中心重大交易</h4>
            <p>真正的朋友，总是投桃报李，饮水思源。他会记住你一丁一点的好，把往事珍藏。</p>
            <ul class="scan">
              <li>
                <span class="iconfont">&#xe72d;</span>
                <span>2018-01-20</span>
              </li>
              <li>
                <span class="iconfont">&#xe661;</span>
                <span>45</span>
              </li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./Header";
import Search from "./Search";
export default {
  name: "post",
  components: {
    Header,
    Search
  }
};
</script>

<style>
.post-list {
  padding: 0.4rem;
  background: #fff;
}
.post-list > li > a {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  font-size: 13px;
  padding: 10px 0;
  color: #666;
}
.post-list .img {
  width: 35%;
}
.post-list h4 {
  font-size: 14px;
  color: #444;
}
.post-li {
  width: 60%;
  margin-left: 5%;
}
.post-li > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scan {
  display: flex;
}
</style>
