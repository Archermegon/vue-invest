<template>
  <div class="vip-container">
    <Header path="/plat" title="所有vip"></Header>
    <Search></Search>
    <ul class="vip-list rule">
      <li>
        <router-link to="/rule">
          <span>vip规则</span>
          <span class="iconfont icon-right">&#xe637;</span>
        </router-link>
      </li>
      <li>
        <router-link to="/rule">
          <span>申请vip账号</span>
          <span class="iconfont icon-right">&#xe637;</span>
        </router-link>
      </li>
    </ul>
    <ul class="vip-list company">
      <li>
        <router-link to="/detailvip">
          <h3>北京XXX技术有限公司</h3>
          <div class="tag">
            <p>
              <span>
                <span class="iconfont icon-right">&#xe794;</span>
                法律
              </span>
              <span>
                <span class="iconfont icon-right">&#xe663;</span>
                北京市
              </span>
              <span>
                <span class="iconfont icon-right">&#xe636;</span>
                张建火
              </span>
            </p>
            <p>
              <span>
                <span class="iconfont icon-right">&#xe62f;</span>
                房地产交易
              </span>
            </p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/detailvip">
          <h3>北京XXX技术有限公司</h3>
          <div class="tag">
            <p>
              <span>
                <span class="iconfont icon-right">&#xe794;</span>
                法律
              </span>
              <span>
                <span class="iconfont icon-right">&#xe663;</span>
                北京市
              </span>
              <span>
                <span class="iconfont icon-right">&#xe636;</span>
                张建火
              </span>
            </p>
            <p>
              <span>
                <span class="iconfont icon-right">&#xe62f;</span>
                房地产交易
              </span>
            </p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/detailvip">
          <h3>北京XXX技术有限公司</h3>
          <div class="tag">
            <p>
              <span>
                <span class="iconfont icon-right">&#xe794;</span>
                法律
              </span>
              <span>
                <span class="iconfont icon-right">&#xe663;</span>
                北京市
              </span>
              <span>
                <span class="iconfont icon-right">&#xe636;</span>
                张建火
              </span>
            </p>
            <p>
              <span>
                <span class="iconfont icon-right">&#xe62f;</span>
                房地产交易
              </span>
            </p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/detailvip">
          <h3>北京XXX技术有限公司</h3>
          <div class="tag">
            <p>
              <span>
                <span class="iconfont icon-right">&#xe794;</span>
                法律
              </span>
              <span>
                <span class="iconfont icon-right">&#xe663;</span>
                北京市
              </span>
              <span>
                <span class="iconfont icon-right">&#xe636;</span>
                张建火
              </span>
            </p>
            <p>
              <span>
                <span class="iconfont icon-right">&#xe62f;</span>
                房地产交易
              </span>
            </p>
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
  name: "vip-con",
  components: {
    Search,
    Header
  }
};
</script>

<style>
.vip-list {
  padding: 0.4rem;
  background: #fff;
  border-top: 0.1rem solid #f6f6f6;
}
.vip-list > li {
  border-bottom: 1px solid #f6f6f6;
}
.rule {
  padding-top: 0;
  padding-bottom: 0;
}
.rule a {
  display: flex;
  justify-content: space-between;
  line-height: 1.2rem;
}
.company > li {
  padding: 0.1rem 0;
}
.company h3 {
  line-height: 0.8rem;
  font-size: 15px;
}
.company > li span {
  font-size: 14px;
  color: #666;
  line-height: 0.4rem;
}
.tag > p > span {
  margin-right: 20px;
}
</style>
