<template>
  <div class="new-container">
    <div class="layout-left">
      <div class="img-box">
        <el-image
          style="width: 300px; height: 200px"
          :src="newInfo.image"
          fit="cover"
        ></el-image>
      </div>
    </div>
    <div class="layout-right">
      <div class="item-body">
        <p class="title">{{ newInfo.title }}</p>
        <div class="item-content">
          {{ newInfo.assistantTitle }}
        </div>
        <div class="footer">
          <span>{{ newInfo.createTime }}</span>
          <div style="display: flex;align-items: center;">
            <el-image
              style="width: 12px; height: 12px;margin-right: 10px;"
              :src="readingImg"
              fit="cover"
            ></el-image>
            <span>{{ newInfo.clickRate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newItem",
  props: ["newInfo"],
  data() {
    return {
      img: require("~/assets/images/order/ho_info_05.jpeg"),
      readingImg: require("~/assets/images/news/reading.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.new-container:hover {
  background-color: #fff;
}
.new-container {
  display: flex;
  height: 200px;
  cursor: pointer;
  padding: 10px;
  .img-box {
    margin-right: 20px;
    height: 200px;

    img {
      width: auto;
      height: auto;
      max-width: 90%;
      max-height: 90%;
    }
  }
  .item-body {
    display: flex;
    height: 200px;
    flex-direction: column;
    .title {
      font-size: 18px;
      font-weight: 600;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .item-content {
      font-size: 14px;
      height: 135px;
      overflow: hidden;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .footer {
      display: flex;
      flex: 0 0 auto;
      justify-content: space-between;
      font-size: 12px;
      padding-top: 25px;
    }
  }
  .layout-right {
    width: 100%;
    overflow: hidden;
  }
}
</style>
