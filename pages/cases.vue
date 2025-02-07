<template>
  <client-only>
    <div class="container pt30">
      <div class="order-container">
        <el-breadcrumb class="mb30" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }"
            >安昇租车首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>订单参考</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="order-list mb30">
          <div class="w-100" v-for="item in orderList" :key="item.mainPicture">
            <NuxtLink :to="'/case/' + item.index">
              <div class="order-card">
                <div class="order-info">
                  <div class="car-img mr18">
                    <img :src="item.mainPicture" />
                  </div>
                  <div class="car-body">
                    <span class="mb18 font-18">{{ item.orderTitle }}</span>
                    <div class="mb15">
                      <span class="car-label mb18 font-16">行程安排：</span>
                      <span class="font-16">{{ item.scheduling }}</span>
                    </div>
                    <div class="mb15">
                      <span class="car-label mb18 font-16">车型：</span>
                      <span class="font-16">{{ item.carType }}</span>
                      <span class="car-label font-16 ml35">用车时间：</span>
                      <span class="font-16">{{ item.drivingTime }}</span>
                    </div>
                    <div class="mb15">
                      <span class="car-label mb18 font-16">客户：</span>
                      <span class="font-16">{{ item.customerName }}</span>
                    </div>
                    <!-- <div class="mb15">
                      <span class="car-label font-16">服务车队：</span>
                      <span class="font-16">{{ item.serviceFleet }}</span>
                    </div> -->
                  </div>
                </div>
                <div class="order-price">
                  <span class="font-16 mb15">车辆报价</span>
                  <span class="price font-20">{{ item.amount }}</span>
                </div>
              </div>
              <el-divider v-show="item.index != orderList.length - 1"></el-divider>
            </NuxtLink>
          </div>
        </div>
        <!-- <div class="order-list-page pb30">
          <el-pagination background layout="prev, pager, next" :total="10">
          </el-pagination>
        </div> -->
      </div>
      <foot></foot>
    </div>
  </client-only>
</template>

<script>
import { orderList } from "~/js/mock.js";
import foot from "~/components/Footer.vue";

let orderListTmp = JSON.parse(JSON.stringify(orderList));
orderListTmp.forEach(item => {
  item.mainPicture = require("~/assets/images/order/" + item.mainPicture);
});

export default {
  components: {
    foot
  },
  data() {
    return {
      orderList:orderListTmp,
    };
  },
  mounted() {
    // document.getElementById("newBridge") ? document.getElementById("newBridge").remove() : "";
  },
  head() {
    return {
      title: "订单参考_旅游包车_商务租车_会议租车_大巴租赁价格—安昇租车",
      meta: [
        {
          name: "keywords",
          content: "旅游包车,商务租车,会议租车,大巴包车价格,商务车租赁价格"
        },
        {
          name: "description",
          content:
            "安昇租车专注于团体社交出行服务，为广大用户提供旅游包车、市内包车、企业用车、商务接待等快速、便捷的订车服务体验，目前已经为上千家企业单位提供快捷订车服务，服务人数达到10万+。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #f7f7f7;
  margin-top: 128px;
}

.order-container {
  width: 68%;
  margin: auto;
}

.order-list {
  border: 1px solid #e1e1e1ff;
  margin: auto;
  padding: 20px 22px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}

/* 车辆卡片 */
.order-info {
  display: flex;
}

.order-card {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.car-img img {
  height: 170px;
}

.car-body {
  display: flex;
  flex-direction: column;
}

.order-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.order-price .price {
  color: #cb0909ff;
}

.car-label {
  font-family: Source Han Sans CN;
  color: #999999ff;
}
.car-value {
  font-family: Source Han Sans CN;
  color: #333333ff;
}

.title {
  font-size: 14px;
  line-height: 14px;
}

.order-list-page {
  display: flex;
  justify-content: center;
}
</style>
