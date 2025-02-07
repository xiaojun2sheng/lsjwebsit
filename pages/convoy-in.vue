<template>
  <client-only>
    <div class="container">
      <!-- 占位图 -->
      <div class="main">
        <div class="img">
          <img src="../assets/images/convoyIn.png" />
        </div>
        <div class="item">
          更多功能正在开发中 ，敬请期待……
        </div>
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
  mounted() {
    // document.getElementById("newBridge") ? document.getElementById("newBridge").remove() : "";
  },
  head() {
    return {
      title: "奥鼎机械",
      meta: [
        {
          name: "keywords",
          content: "奥鼎机械"
        },
        {
          name: "description",
          content:
            "奥鼎机械专注于团体社交出行服务，通过互联网+大巴车租赁模式，为广大用户提供旅游包车、市内包车、企业用车、婚礼包车、商务接待、会展会务等便捷的订车服务。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 287px;
}
.main {
  width: 68%;
  min-width: 1300px;
  margin: 0 auto;
  text-align: center;
}
.img {
  width: 558px;
  height: 331px;
  margin: 168px auto 0;
}
.img img {
  width: 100%;
  height: 100%;
}
.item {
  margin-top: 41px;
  margin-bottom: 61px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
}
</style>
