<template>
  <div class="help">
    <Header path="/plat" title="使用帮助"></Header>
    <ul class="help-list">
      <li>
        <h4>一、如何使用平台进行注册</h4>
        <p>进度员工无需注册，在内网即可登录，但在App内登录时需要时输入用户名密码</p>
      </li>
      <li>
        <h4>二、如何获得平台VIP账号</h4>
        <p>平台VIP系统有待管理层决定后，在进行公告。
          <br>VIP用户可以通过员工给的VIP账号密码在此APP上登录
        </p>
      </li>
      <li>
        <h4>三、如何在网上发布项目</h4>
        <p>1.进入平台，进行登录
          <br>2.点击发布项目进行项目发布
          <br>3.根据提示进行内容填写，注意：带星号的为必填项
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "help",
  components: {
    Header
  }
};
</script>

<style>
.help-list {
  padding: 0.4rem;
  background: #fff;
}
.help-list > li {
  border-bottom: 1px solid #f6f6f6;
  padding: 10px 0;
}
.help-list > li h4 {
  color: #444;
}
.help-list > li p {
  color: #666;
  line-height: 0.5rem;
}
</style>
