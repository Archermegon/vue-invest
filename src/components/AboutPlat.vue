<template>
  <div class="rule-con">
    <Header path="/plat" title="关于平台"></Header>
    <div class="rule-container">
      <h4>关于平台</h4>
      <div class="img">
        <img src="../assets/images/plat-position.jpg" alt>
      </div>
      <p>金杜是一家新型的律师事务所，根植本土，业务范围覆盖全球，致力于为客户提供独到的商业见解和与众不同的客户体验。每天有超过30多个国际办公机构，2700多名律师为客户保驾护航，在日趋复杂的各地区环境中把握商机并降低风险。得益于全球化网络，金杜为客户提供优质的商业解决方案，并改变着传统的法律服务模式。</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "rule",
  components: {
    Header
  }
};
</script>

<style>
.rule-con {
  background: #fff;
  padding: 0.4rem;
}
.rule-con h4 {
  font-weight: normal;
  text-align: center;
  color: #222;
}
.rule-con p {
  text-indent: 20px;
  font-size: 14px;
  color: #666;
  padding-top: 5px;
  line-height: 0.5rem;
}
</style>
