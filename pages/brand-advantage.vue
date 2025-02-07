<template>
  <client-only>
    <div class="container">
      <!-- 头部背景图 -->
      <div class="top-banner">
        <img src="../assets/images/banner/brand_banner.png" />
      </div>

      <!-- 主题内容 -->
      <div class="main">
        <img src="../assets/images/advantage.png" />
        <img src="../assets/images/advantage_2.png" />
        <img src="../assets/images/advantage_3.png" />
        <img src="../assets/images/advantage_4.png" />
        <img src="../assets/images/advantage_5.png" />
      </div>
      <foot></foot>
    </div>
  </client-only>
</template>

<script>
import foot from "~/components/Footer.vue";
export default {
  components: {
    foot
  },
  data() {
    return {};
  },
  mounted() {
    // document.getElementById("newBridge") ? document.getElementById("newBridge").remove() : "";
  },
  head() {
    return {
      title: "品牌优势_大巴租赁_商务车租赁_大巴车租赁平台—奥鼎机械",
      meta: [
        {
          name: "keywords",
          content: "大巴租赁,商务车租赁,大巴租赁平台"
        },
        {
          name: "description",
          content:
            "奥鼎机械依托移动互联网、大数据和人工智能技术，整合、优化巴士租赁市场，打破用户与车辆单位之间信息不对称的现状，实现用户与车辆单位无缝对接，打造出行行业透明化网约巴士平台。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 128px;
  width: auto;
}
.top-banner {
  height: 300px;
}
.top-banner img {
  width: 100%;
}
.main {
  width: 68%;
  margin: 80px auto 45px;
}
</style>
