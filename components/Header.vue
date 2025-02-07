<template>
  <div class="header">
    <!-- 顶部条 -->
    <div class="top_bar top_right">
      <ul class=" site-doc-icon site-doc-anim">
        <li class="hover_txt">
          <el-popover placement="bottom" width="200" trigger="hover">
            <div class="hover_item">
              <img src="~/assets/gzh.jpg" />
              <span>微信扫一扫，关注微信公众号</span>
            </div>
            <a slot="reference">微信公众号</a>
          </el-popover>
        </li>
        <li>服务热线：18651833658</li>
      </ul>
    </div>
    <!-- 导航条 -->
    <div class="nav">
      <div class="nav_bar_box">
        <!-- logo -->
        <img class="nav_logo_black" src="~/assets/images/logo.png" />
        <!-- 路由 -->
        <div class="nav_route">
          <ul>
            <li v-for="item in routes" :key="item.path" class="active">
              <router-link :to="item.path">{{ item.name }}</router-link>
              <span v-show="item.path == val"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="contact-box">
      <img style="width: 100px;" src="~/assets/images/contact-box.png" />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "优选车型",
          path: "/cars"
        },
        {
          name: "订单参考",
          path: "/cases"
        },
        // {
        //   name: "新闻中心",
        //   path: "/news"
        // },
        // {
        //   name: "车队入驻",
        //   path: "/convoy-in"
        // },
        {
          name: "品牌优势",
          path: "/brand-advantage"
        },
        {
          name: "关于我们",
          path: "/aboutus"
        }
      ],
      val: "",
      styleObject: false
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        // 获取当前路由
        this.val = to.path;
      },
      immediate: true
    }
  },
};
</script>

<style scoped>
.header {
  width: auto;
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}

.header-banner {
  background: url(~/assets/images/banner/ho_banner.jpg) no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  width: auto;
  height: 799px;
}

.top_bar {
  height: 30px;
  line-height: 30px;
  background-color: #f4fafe;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.top_bar ul {
  width: 68%;
  min-width: 1300px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
}

.hover_item {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.hover_item img{
 width: 200px;
}
.top_bar ul li {
  margin-left: 80px;
}

.nav {
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.21);
  z-index: 99;
}

.active_nav .nav_route ul li a {
  color: #333 !important;
}

.active a {
  font-size: 20px;
  font-weight: bold;
  color: #333 !important;
}

.nav_bar_box {
  height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 1300px;
  margin: 0 auto;
  font-size: 16px;
  overflow: hidden;
}

img.nav_logo_black {
    width: 160px;
}

.nav_route ul {
  display: flex;
  justify-content: space-between;
}

.nav_route ul li {
  margin-right: 80px;
}

.nav_route ul li span {
  display: block;
  height: 2px;
  background: #14a8ff;
  border-radius: 1px;
}

.nav_route ul li:nth-last-child() {
  margin-right: 0;
}

.code {
  width: 200px;
  height: 240px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.contact-box {
  position: fixed;
  top: 50%;
  right: 0px;
  z-index: 100;
}
</style>
