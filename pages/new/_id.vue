<template>
  <client-only>
    <div class="container pt30">
      <div class="news-container">
        <el-breadcrumb class="mb15" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            >安昇租车首页</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/news' }"
            >新闻中心</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ newInfo.displayTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="news-head mb10">
          <p class="title mb5">{{ newInfo.title }}</p>
          <div class="news-time">
            <span>{{ newInfo.createTime }}</span>
            <div class="read-count">
              <el-image
                style="width: 12px; height: 12px;margin-right: 10px;"
                :src="readingImg"
                fit="cover"
              ></el-image>
              <span>{{ newInfo.clickRate }}</span>
            </div>
          </div>
        </div>
        <div class="new-content" v-html="newInfo.content"></div>
      </div>
      <foot></foot>
    </div>
  </client-only>
</template>
<script>
import Foot from "~/components/Footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      readingImg: require("~/assets/images/news/reading.png"),
      newInfo: ""
    };
  },
  components: {
    Foot
  },
  async mounted() {
    // document.getElementById("newBridge")
    //   ? document.getElementById("newBridge").remove()
    //   : "";
    let res = await axios.get(
      "https://ho.haioucx.com/haiou/api/help-information/queryHelpInformationById?type=2&id=" +
        this.$route.params.id
    );
    if(!res || !res.data){
      return
    }
    this.newInfo = res.data.data;
    this.newInfo.displayTitle = this.newInfo.title;
    if (this.newInfo.title.length > 10) {
      this.newInfo.displayTitle = this.newInfo.title.substr(0, 11) + "...";
    }
  },
  head() {
    return {
      title: this.newInfo.title,
      meta: [
        {
          name: "keywords",
          content: this.newInfo.title
        },
        {
          name: "description",
          content: this.newInfo.title
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #fff;
  margin-top: 128px;
  .news-container {
    width: 68%;
    margin: auto;
    padding-bottom: 20px;
    min-height: calc(100vh - 400px);
    .news-head {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .news-time {
        display: flex;
        flex: 0 0 auto;
        font-size: 12px;
        .read-count {
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
      }
    }
  }
  
}
</style>
