<template>
  <div class="post-content">
    <Header path="/post" title="资讯详情"></Header>
    <div class="content-container">
      <h4>金杜国家中心重大交易</h4>
      <div class="img">
        <img src="./../assets/images/bg1.jpg" alt>
      </div>
      <p>曲曲折折的荷塘上面，弥望旳是田田的叶子。叶子出水很高，像亭亭旳舞女旳裙。层层的叶子中间，零星地点缀着些白花，有袅娜(niǎo,nuó)地开着旳，有羞涩地打着朵儿旳；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉(mò)的流水，遮住了，不能见一些颜色；而叶子却更见风致了。</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "post-con",
  components: {
    Header
  }
};
</script>

<style>
.content-container {
  background: #fff;
  padding: 0 0.4rem;
}
.content-container h4 {
  text-align: center;
  color: #444;
  line-height: 1rem;
}
.content-container p {
  color: #666;
  padding-top: 10px;
  line-height: 0.5rem;
  text-indent: 20px;
}
</style>
