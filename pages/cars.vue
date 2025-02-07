<template>
  <client-only>
    <div class="container pt30">
      <div class="car-container">
        <el-breadcrumb class="mb30" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            >安昇租车首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>优选车型</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="car-list mb30">
          <div class="model-car-list mt0">
            <div class="model-car-content" v-for="item in carTypeList" :key="item.carTitle"  @click="imagePre(item.id)">
              <div class="model-car-item">
                <div class="model-car-item-lf">
                  <img :src="item.mainPicture" />
                </div>
                <div class="model-car-item-rt">
                  <p>{{ item.carTitle }}</p>
                  <span>上牌时间：{{ item.licensingTime }}</span>
                  <span>成交量：{{ item.dealNums }}</span>
                  <!-- <span>车队：{{ item.serviceFleet }}</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="car-list-page pb30">
          <el-pagination background layout="prev, pager, next" :total="10">
          </el-pagination>
        </div> -->
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
  </client-only>
</template>

<script>
import foot from "~/components/Footer.vue";
import { carTypeList } from "~/js/mock.js";

let carTypeListTmp = JSON.parse(JSON.stringify(carTypeList));
carTypeListTmp.forEach(item => {
  item.mainPicture = require("~/assets/images/cars/" + item.mainPicture);
});

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

export default {
  components: {
    foot
  },
  data() {
    return {
      carTypeList: carTypeListTmp,
      dialogCarImgVisible: false,
      carImageList: []
    };
  },
  mounted() {
    // document.getElementById("newBridge") ? document.getElementById("newBridge").remove() : "";
  },
  head() {
    return {
      title: "优选车型_大巴包车_考斯拉租赁_客车租赁_商务车租赁—安昇租车",
      meta: [
        {
          name: "keywords",
          content: "大巴包车,大巴租赁,考斯拉租赁,客车包车,商务车租赁"
        },
        {
          name: "description",
          content:
            "安昇租车为广大用户提供7-54座多种车型选择服务，安昇租车服务网点遍布全国主要城市，拥有上万台车型车辆，为您提供旅游、商务洽谈等多重包车出行解决方案，保证您旅程出行的舒适、便捷。"
        }
      ]
    };
  },
  methods: {
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
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 128px;
}

.car-container {
  width: 68%;
  min-width: 1300px;
  margin: auto;
}

.car-list {
  border: 1px solid #e1e1e1ff;
  margin: auto;
  padding: 20px 22px;
  background-color: #fff;
}

/* 车辆卡片 */
.car-card {
  display: flex;
}

.car-img img {
  width: 220px;
}

.car-info {
  display: flex;
  flex-direction: column;
}

.car-text {
  line-height: 12px;
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}

.title {
  font-size: 14px;
  line-height: 14px;
}

.car-list-page {
  display: flex;
  justify-content: center;
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
