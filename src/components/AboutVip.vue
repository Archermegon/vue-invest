<template>
  <div class="about-vip">
    <Header path="/vip" title="vip详情"></Header>
    <div class="about-content">
      <ul class="about-list">
        <li>vip全称：北京XX科技股份有限公司</li>
        <li>vip简称：XX科技</li>
        <li>行业：法律</li>
        <li>地区：北京</li>
        <li>投融资领域：房地产交易</li>
      </ul>
      <ul class="about-list contact-list">
        <li>联系人：刘海涛</li>
        <li>职位：律师</li>
        <li>手机：13293939330</li>
        <li>邮箱：15076073321@qq.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "vip",
  components: {
    Header
  }
};
</script>

<style>
.about-list {
  padding: 0.4rem;
  border-top: 0.1rem solid #f6f6f6;
  background: #fff;
  color: #222;
  line-height: 0.6rem;
  font-size: 14px;
}
.contact-list {
  color: #666;
}
</style>
