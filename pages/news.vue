<template>
  <client-only>
    <div class="container pt30">
      <div class="news-container">
        <el-breadcrumb class="mb30" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            >安昇租车首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
        </el-breadcrumb>
        <ul>
          <li v-for="item in newList" :key="item.id">
            <NuxtLink :to="'/new/' + item.id">
              <new-item :new-info="item"></new-item>
              <el-divider v-show="item.showDivider"></el-divider>
            </NuxtLink>
          </li>
        </ul>
        <div class="news-list-page pb30 pt30">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.total"
            @current-change="handleCurrentChange"
            @prev-click="handlePrevClick"
            @next-click="handleNextClick"
          >
          </el-pagination>
        </div>
      </div>
      <foot></foot>
    </div>
  </client-only>
</template>
<script>
import Foot from "~/components/Footer.vue";
import newItem from "~/components/news/new-item";
import axios from "axios";
export default {
  data() {
    return {
      newList: [],
      queryNewsReq: {
        pageNum: 1,
        pageSize: 10,
        columnFilters: {
          type: {
            name: "type",
            value: "2"
          },
          state: {
            name: "state",
            value: "1"
          }
        }
      },
      total: 0,
      isInit: false
    };
  },
  components: {
    newItem,
    Foot
  },
  mounted() {
    // document.getElementById("newBridge")
    //   ? document.getElementById("newBridge").remove()
    //   : "";
    this.isInit = true;
    this.queryNews(this.queryNewsReq);
  },
  methods: {
    async queryNews(req) {
      let res = await axios({
        method: "post",
        url:
          "https://ho.haioucx.com/haiou/api/help-information/queryHelpInformation",
        data: req
      });
      this.isInit = false;
      if (res && res.data && res.data.data) {
        let rsp = res.data.data;
        this.total = rsp.total;
        this.newList = rsp.records;
        this.newList.forEach((item, index) => {
          item.showDivider = true;
          if ((index + 1) % 10 == 0 || index == this.newList.length - 1) {
            item.showDivider = false;
          }
        });
      }
    },
    handleCurrentChange(pageNum) {
      this.queryNewsReq.pageNum = pageNum;
      this.queryNews(this.queryNewsReq);
    },
    handlePrevClick() {
      this.queryNewsReq.pageNum--;
      this.queryNews(this.queryNewsReq);
    },
    handleNextClick() {
      this.queryNewsReq.pageNum++;
      this.queryNews(this.queryNewsReq);
    },
    async load() {
      if (!this.isInit) {
        this.queryNewsReq.pageNum++;
        this.queryNews(this.queryNewsReq);
      }
    }
  },
  head() {
    return {
      title: "新闻动态",
      meta: [
        {
          name: "keywords",
          content: "新闻动态"
        },
        {
          name: "description",
          content: "新闻动态"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 128px;
  .news-container {
    width: 68%;
    margin: auto;
  }
  ul {
    border: 1px solid rgba(225, 225, 225, 1);
    padding: 10px;
    background-color: #fff;
  }
  .news-list-page {
    display: flex;
    justify-content: center;
  }
}
</style>
