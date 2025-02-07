<template>
  <client-only>
    <div class="container">
      <div v-html="content" class="main"></div>
      <foot></foot>
    </div>
  </client-only>
</template>

<script>
import foot from "~/components/Footer.vue";
import axios from "axios";
export default {
  components: {
    foot
  },
  data() {
    return {
      content: ""
    };
  },
  async mounted() {
    // document.getElementById("newBridge") ? document.getElementById("newBridge").remove() : "";
    // let res = await axios.get(
    //   "https://ho.haioucx.com/haiou/api/help-information/queryHelpInformationById?id=40"
    // );
    // this.content = res.data.data.content;
  },
  head() {
    return {
      title:
        "奥鼎机械",
      meta: [
        {
          name: "keywords",
          content:
            "奥鼎机械,旅游包车,大巴租赁,大巴包车,大巴出租,商务车租赁,商务车出租,包车平台"
        },
        {
          name: "description",
          content:
            "奥鼎机械专注于团体社交出行服务，通过互联网+大巴车租赁模式，为广大用户提供旅游包车、市内包车、企业用车、婚礼包车、商务接待、会展会务等便捷的订车服务。奥鼎机械，让集体出行更美好，服务热线025-51197773。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 128px;
}
.main {
  width: 68%;
  margin: 0 auto;
  margin-top: 148px;
}
</style>
