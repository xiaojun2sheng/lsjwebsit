<template>
  <client-only>
    <div>
      <div class="container">
        <!-- swiper -->
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/images/banner/banner1.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/banner/banner2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/banner/banner3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/banner/banner4.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/banner/banner5.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/banner/banner6.jpg" />
            </div>
          </div>
          <div slot="pagination" class="swiper-pagination"></div>
        </div>

        <!-- banner 图标 -->
        <!-- <div class="ho_banner">
          <ul>
            <li class="active">
              <img src="../assets/images/banner/ho_banner_1.jpg" />
            </li>
          </ul>
        </div> -->

        <div class="rt-block">
          <img src="~/assets/images/rt-block.png" />
        </div>
        <div class="lf-block">
          <img src="~/assets/images/lf-block.png" />
        </div>
        <div class="home_body">
          <!-- 需求发布 -->
          <div class="demand content">
            <div class="demand-top">
              提交需求，在线报价
            </div>
            <div class="demand-list">
              <ul>
                <li>
                  <img src="~/assets/images/datetime.png" />

                  <div class="item datetime">
                    <p>用车时间</p>
                    <el-date-picker
                      format="yyyy-MM-dd"
                      v-model="user.transportTime"
                      type="date"
                      placeholder="选择日期"
                      style="width:125px"
                    >
                    </el-date-picker>
                  </div>
                </li>
                <li>
                  <img src="~/assets/images/person.png" />
                  <div class="item">
                    <p>人数</p>
                    <el-input
                      style="width:70px"
                      v-model="user.number"
                      placeholder="请输入人数"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <img src="~/assets/images/phone.png" />

                  <div class="item">
                    <p>
                      电话
                      <span>
                        (必填项)
                      </span>
                    </p>
                    <el-input
                      type="tel"
                      maxlength="11"
                      style="width:100px"
                      v-model="user.phone"
                      placeholder="请输入电话"
                    ></el-input>
                  </div>
                </li>
                <li>
                  <img src="~/assets/images/city.png" />

                  <div class="item">
                    <p>城市</p>
                    <el-input
                      style="width:70px"
                      v-model="user.city"
                      placeholder="请输入城市"
                    ></el-input>
                  </div>
                </li>
              </ul>
              <div class="demand-btn submit">
                <el-button type="primary" @click="orderSubmit">提交</el-button>
              </div>
            </div>
          </div>
          <!-- 服务客户  -->
          <div class="customer content">
            <div class="customer-item">
              <div>
                1357896
              </div>
              <div>
                服务客户
              </div>
            </div>
            <div class="customer-item">
              <div>
                127
              </div>
              <!-- <div>
                车队入驻平台
              </div> -->
            </div>
            <div class="customer-item">
              <div>
                480+
              </div>
              <div>
                品牌数量
              </div>
            </div>
          </div>

          <!-- 车型优选 -->
          <div class="model content">
            <div class="top">
              <div class="top-title">
                业务类型多样化
              </div>
              <div class="model-top-list">
                <div class="model_block" v-for="item in [modelTopList[0],modelTopList[1],modelTopList[2],modelTopList[3]]" :key="item.name">
                  <img src="~/assets/images/identification.png" />
                  <div>
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div class="model-top-list">
                <div  class="model_block" v-for="item in [modelTopList[4],modelTopList[5],modelTopList[6],modelTopList[7]]" :key="item.name">
                  <img src="~/assets/images/identification.png" />
                  <div>
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="model-car-list">
              <div class="model-car-content" v-for="item in modelCarList" :key="item.carTitle" @click="imagePre(item.id)">
                <div class="model-car-item">
                  <div class="model-car-item-lf">
                    <img :src="item.mainPicture" />
                  </div>
                  <div class="model-car-item-rt">
                    <p>{{ item.carTitle }}</p>
                    <span>上牌时间：{{ item.licensingTime }}</span>
                    <span>成交量：{{ item.dealNums }}</span>
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/cars">
              <div class="more-btn">
                <span>查看更多</span>
              </div>
            </router-link>
          </div>

          <!-- 订单参考 -->
          <div class="order content">
            <div class="order-item-container content">
              <div class="order-content">
                <div class="top">
                  <div class="top-title">订单参考</div>
                  <div class="introduce">倾听用户的声音,作出最好的选择</div>
                </div>
              </div>

              <div class="order-item-center">
                <div class="order-list-previous arrow" @click="orderNext('prev')">
                  <img src="~/assets/images/cursor-prev.png.png" />
                </div>
                <div class="order-container">
                  <div
                    class="order-list"
                    ref="order-list"
                    :style="{ right: orderStepDistance + 'px' }"
                  >
                    <div
                      class="order-item"
                      v-for="item in orderList"
                      :key="item.id"
                      :id="item.id"
                    >
                      <NuxtLink :to="'/case/' + item.index">
                        <div class="order-item-title">
                          {{ item.orderTitle }}
                        </div>
                        <div class="order-item-img">
                          <img :src="image" v-for="image in item.displayPhotos" :key="image"/>
                        </div>
                        <div class="order-item-info">
                          <div class="order-item-info-lf">
                            <img :src="item.customerPhotos" />
                          </div>
                          <div class="order-item-info-rt">
                            <div class="order-item-info-rt-tp">
                              {{ item.customerPhone }}
                            </div>
                            <div class="order-item-info-rt-bt">
                              {{ item.drivingTime }}
                            </div>
                          </div>
                        </div>
                        <div class="order-item-price">
                          报价：<span>{{ item.amount }}</span>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="order-list-next arrow" @click="orderNext('next')">
                  <img src="~/assets/images/cursor-next.png" />
                </div>
              </div>
              <NuxtLink to="/cases">
                <div class="more-btn">
                  <span>查看更多</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- 合作流程 -->
          <div class="process content">
            <div class="top">
              <div class="top-title">
                合作流程
              </div>
              <div class="introduce">
                如何一键订车？两分钟在线搞定一切琐事
              </div>
            </div>
            <div class="howcatchCar">
              电话咨询 <label class="howcatchCarlabel">-></label> 车队报价 <label class="howcatchCarlabel">-></label> 拟定合同 <label class="howcatchCarlabel">-></label> 支付定金 <label class="howcatchCarlabel">-></label> 安排车辆
            </div>
          </div>

          <!-- 我们的优势 -->
          <div class="advantage content">
            <div class="top">
              <div class="top-title">
                我们的优势
              </div>
              <div class="introduce">
                在线看车、选车、定车
              </div>
            </div>
            <div class="img">
              <img src="~/assets/images/advantage.png" />
              <img src="~/assets/images/advantage_2.png" />
              <img src="~/assets/images/advantage_3.png" />
              <img src="~/assets/images/advantage_4.png" />
              <img src="~/assets/images/advantage_5.png" />
            </div>
          </div>

          <!-- 关于萌车 -->
          <div class="about content">
            <div class="top">
              <div class="top-title">
                关于安昇
              </div>
              <div class="introduce">
                一站式包车服务平台“安昇租车”隶属于江苏萌车网络科技有限公司。安昇租车专注于团体社交出行业务，专业为旅行社、企业用户、拓展公司、会务公司、酒店、OTA平台等用户群体提供智能快速线上报价与快速匹配车辆服务，并同时为用户提供行车途中的行程安全监测、服务质量跟踪、客服在线咨询等丰富功能，致力于让集体出行更美好。
              </div>
            </div>
            <!-- <div class="company-pictures">
              <div>
                <img src="~/assets/images/ho_1.png" />
              </div>
              <div>
                <img src="~/assets/images/ho_2.png" />
              </div>
              <div>
                <img src="~/assets/images/ho_3.png" />
              </div>
            </div> -->
            <NuxtLink to="/aboutus">
              <div class="more-btn">
                <span>查看更多</span>
              </div>
            </NuxtLink>
          </div>

          <!-- 免费填写需求 -->
          <div class="demand-btm">
            <div class="content">
              <div class="top-title">
                免费填写需求 多种车型 系统自动实时报价
              </div>
              <div class="demand-btm-list">
                <ul>
                  <li>
                    <span class="label">
                      城市：
                    </span>
                    <el-input
                      v-model="buttomUser.city"
                      placeholder="请输入城市"
                    ></el-input>
                  </li>
                  <li>
                    <span class="label">
                      姓名：
                    </span>
                    <el-input
                      v-model="buttomUser.name"
                      placeholder="请输入姓名"
                    ></el-input>
                  </li>
                  <li>
                    <span class="label">
                      人数：
                    </span>
                    <el-input
                      v-model="buttomUser.number"
                      placeholder="请输入人数"
                    ></el-input>
                  </li>
                  <li>
                    <span class="label">
                      电话：
                    </span>
                    <el-input
                      v-model="buttomUser.phone"
                      placeholder="请输入电话"
                    ></el-input>
                  </li>
                  <li @click="orderSubmit('buttom')">
                    <span>确定</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 弹框展示具体车型 -->
        <el-dialog width="80%" title="车辆照片" :visible.sync="dialogCarImgVisible">
          <div class="imageList_box">
            <span v-for="img in carImageList" :key="img">
              <img :src="img" />
            </span>
          </div>
        </el-dialog>

        <foot></foot>
      </div>
    </div>
  </client-only>
</template>

<script>
import axios from "axios";
import { orderList, carTypeList } from "@/js/mock.js";
import foot from "~/components/Footer.vue";
import Validator from "~/js/validator.js";
import moment from 'moment'

let car71 = require('~/assets/images/preView/7-1.jpeg')
let car72 = require('~/assets/images/preView/7-2.jpeg')
let car73 = require('~/assets/images/preView/7-3.jpeg')
let car171 = require('~/assets/images/preView/17-1.jpeg')
let car172 = require('~/assets/images/preView/17-2.jpeg')
let car191 = require('~/assets/images/preView/19-1.jpeg')
let car192 = require('~/assets/images/preView/19-2.jpeg')
let car193 = require('~/assets/images/preView/19-3.jpeg')
let car194 = require('~/assets/images/preView/19-4.jpeg')
let car195 = require('~/assets/images/preView/19-5.jpeg')
let car461 = require('~/assets/images/preView/46-1.jpeg')
let car462 = require('~/assets/images/preView/46-2.jpeg')
let car463 = require('~/assets/images/preView/46-3.jpeg')
let car481 = require('~/assets/images/preView/48-1.jpeg')
let car482 = require('~/assets/images/preView/48-2.jpeg')
let car483 = require('~/assets/images/preView/48-3.jpeg')
let car484 = require('~/assets/images/preView/48-4.jpeg')
let car561 = require('~/assets/images/preView/56-1.jpeg')
let car562 = require('~/assets/images/preView/56-2.jpeg')
let car563 = require('~/assets/images/preView/56-3.jpeg')
let car564 = require('~/assets/images/preView/56-4.jpeg')
let car565 = require('~/assets/images/preView/56-5.jpeg')

const car8List = [car71, car72, car73]
const car17List = [car171, car172]
const car19List = [car191, car192, car193, car194, car195]
const car46List = [car461, car462, car463]
const car48List = [car481, car482, car483, car484]
const car56List = [car561, car562, car563, car564, car565]

let modelCarList = JSON.parse(JSON.stringify(carTypeList));
modelCarList = modelCarList.slice(0, 8);
modelCarList.forEach(item => {
  item.mainPicture = require("~/assets/images/cars/" + item.mainPicture);
});

let orderListTmp = JSON.parse(JSON.stringify(orderList));
orderListTmp.forEach(item => {
  item.displayPhotos = [];
  item.customerPhotos = require("~/assets/images/order/" + item.customerPhotos);
  item.carPhotos.forEach(cp => {
    item.displayPhotos.length < 2
      ? item.displayPhotos.push(require("~/assets/images/order/" + cp))
      : "";
  });
});
export default {
  components: {
    foot,
  },
  data() {
    return {
      swiperOption: { // 配置说明直接看官网
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOption1: { // 配置说明直接看官网
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 30,
        pagination1: {
          el: ".swiper-pagination1",
          clickable: true
        }
      },
      showCouponSlide: false,
      bannerSwitch: true,
      orderStep: 0,
      orderStepDistance: 0,
      orderList: orderListTmp,
      user: {
        city: "",
        name: "",
        transportTime: "",
        phone: "",
        number: ""
      },
      buttomUser: {
        city: "",
        name: "",
        transportTime: "",
        phone: "",
        number: ""
      },
      city: "",
      name: "",
      person: "",
      phone: "",
      bannerList: [
        require("~/assets/images/banner/ho_banner.jpg"),
        require("~/assets/images/banner/ho_banner_1.jpg")
      ],
      modelTopList: [
        {
          name: "旅游用车"
        },
        {
          name: "团建用车"
        },
        {
          name: "商务接待"
        },
        {
          name: "演唱会"
        },
        {
          name: "会议用车"
        },
        {
          name: "企业班车"
        },
        {
          name: "婚礼包车"
        },
        {
          name: "接机送站"
        },
      ],
      modelCarList,
      dialogCarImgVisible: false,
      carImageList: []
    };
  },
  methods: {
    orderNext(type) {
      // 容器宽度 订单总数 10
      let cw = this.$refs["order-list"].offsetWidth;
      // 子项宽度
      let iw = 331;
      // 完整展示的子项数量
      let displayCount = parseInt(cw / iw);
      if (type == "next") {
        // 是否为最后一个
        if (displayCount + this.orderStep >= 10) {
          return;
        }
        this.orderStep++;
      } else {
        this.orderStep > 0 ? this.orderStep-- : "";
      }
      this.orderStepDistance = 331 * this.orderStep;
    },
    orderSubmit(type) {
      let attrKey = type != "buttom" ? "user" : "buttomUser";
      if (!this[attrKey].phone) {
        this.$message.error("请输入电话号码");
        return;
      }

      let validator = new Validator();
      validator.add(this[attrKey].name, "checkChinese", "姓名只能输入中文");
      validator.add(this[attrKey].city, "checkChinese", "城市只能输入中文");
      validator.add(this[attrKey].number, "checkNumber", "人数格式非法");
      validator.add(this[attrKey].phone, "checkPhone", "电话号码格式非法");
      if (!validator.check()) {
        return;
      }

      this.$axios
        .post(
          "http://39.106.84.29:6266/mcb/api/questionnaire/save",
          type == "buttom" ? this.buttomUser : Object.assign({}, this.user, {transportTime: this.user.transportTime ? moment(this.user.transportTime).format('YYYY-MM-DD') : ''})
        )
        .then(e => {
          this.$message.success("发布成功！");
        });
    },
    imagePre (itemId) {
      let imageList = []
      if (itemId == 8) {
        imageList = car8List
      } else if (itemId == 5 || itemId == 10) {
        imageList = car17List
      } else if (itemId == 6 || itemId == 7 || itemId == 11) {
        imageList = car19List
      } else if (itemId == 8) {
        imageList = car46List
      } else if (itemId == 3 || itemId == 4 || itemId == 9) {
        imageList = car48List
      } else if (itemId == 1 || itemId == 2 || itemId == 12) {
        imageList = car56List
      }
      this.dialogCarImgVisible = true
      this.carImageList = imageList
    }
  },
  mounted() {
    // 图片切换
    setInterval(() => {
      this.bannerSwitch = !this.bannerSwitch;
    }, 3000);
    // 爱翻翻
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?a4798a129d7d923b54c584d7a0a999ed";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  },
  head() {
    return {
      title:
        "安昇租车_7-54座大巴配驾租车_旅游包车_大巴租赁_商务车出租_一站式包车平台",
      meta: [
        {
          name: "keywords",
          content:
            "安昇租车,旅游包车,大巴租赁,大巴包车,大巴出租,商务车租赁,商务车出租,包车平台"
        },
        {
          name: "description",
          content:
            "安昇租车专注于团体社交出行服务，通过互联网+大巴车租赁模式，为广大用户提供旅游包车、市内包车、企业用车、婚礼包车、商务接待、会展会务等便捷的订车服务。安昇租车，让集体出行更美好，服务热线025-51197773。"
        }
      ]
    };
  }
};
</script>
<style scoped>
.swiper-wrapper {
  margin-top: 100px;
}
.swiper-container{
  width:100%;
  overflow: hidden;
  height: auto;
}
/* 每个轮播图占比大小，100%则整个屏幕铺满 */
.swiper-slide{
    /* width: 100%; */
    height: auto;
    display: flex;
}
/* 滑动到当前轮播图的样式 */
/* .swiper-slide-active{
  color:#fff;
} */


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/deep/ .el-carousel__item {
  display: flex;
  justify-content: center;
  width: 100%;
}
.home_body {
  position: relative;
  width: 100%;
}
.demand {
  width: 90%;
  height: 105px;
  background: #ffffff;
  box-shadow: 0px 2px 5px 0px rgba(152, 152, 152, 0.80);
  border-radius: 10px;
  text-align: center;
  padding: 30px 25px 45px 25px;
  /* margin-top: -100px; */
  position: relative;
  margin-top: 20px;
}

.demand-top {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #333333;
}

.demand-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demand-list ul {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 5;
}

.demand-list ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 25px; */
  padding-left: 2%;
  border-left: 1px solid #999999;
}

.demand-list ul li i {
  width: 1px;
  height: 30px;
  border: 1px solid #999999;
}

.demand-list ul li:nth-child(1) {
  margin-left: 0;
  padding-left: 0;
  border-left: none;
}

.demand-list ul li:nth-last-child(1) {
  margin-right: 0;
}

.demand-list ul li .item {
  margin-left: 15px;
  text-align: left;
  margin-right: 45px;
}

.demand-list ul li .item p {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  line-height: 40px;
}

.demand-list ul li .item /deep/ .ivu-input-suffix {
  display: none;
}
.demand-btm ul li /deep/ .el-input input,
.demand-list ul li .item /deep/ .el-input input {
  padding: 0;
  height: 14px;
  line-height: 14px;
  border: none;
}

.demand-list ul li .item.datetime /deep/ .el-input input {
  padding-left: 20px !important;
}
.demand-list ul li .item /deep/ .el-input .el-input__icon {
  width: unset;
  line-height: 14px;
}

.demand-list ul li .item p span {
  color: #d83535;
}

.demand-list .demand-btn {
  margin-top: 35px;
  flex-grow: 1;
}

.demand-list .demand-btn button {
  width: 140px;
  height: 50px;
  background: linear-gradient(269deg, #14a8ff, #48bdff);
  border-radius: 24px;
  font-size: 18px;
  font-weight: 500;
}

/* 优惠券 */
.home-coupon {
  position: fixed;
  /* left: 50%; */
  bottom: 0px;
  /* margin-left: -650px; */
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: center;
}
.home-coupon img.coupon {
  width: 1200px;
}
.coupon-close {
  display: block;
  /* position: absolute; */
  right: 60px;
  bottom: 40px;
  margin-bottom: 30px;
  width: 28px;
  height: 28px;
  z-index: 9999;
  cursor: pointer;
  position: relative;
  top: 105px;
  right: 80px;
}
.coupon-slide {
  position: fixed;
  bottom: 10%;
  z-index: 9999;
}
.coupon-slide img {
  width: 100px;
}
.howcatchCar {    
  font-size: 30px;
  text-align: center;
  padding: 40px;
  font-family: cursive;
}

.howcatchCarlabel {
  color: #409EFF;
  font-family: auto;
  padding: 0 20px;
}
.imageList_box {
  width: 100%;
  height: 90%;
  overflow: auto;
}
.imageList_box img{
  width: 70%;
  display: inline-flex;
  margin-left: 15%;
  margin-top: 20px;
}
</style>
