<template>
  <client-only>
    <div class="container">
      <div class="head" id="index">
        <div class="title">安昇租车</div>
      </div>
      <!-- 轮播图 -->
      <van-swipe class="topImgBox" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="~/assets/images/banner/banner1.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~/assets/images/banner/banner2.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~/assets/images/banner/banner3.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~/assets/images/banner/banner4.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~/assets/images/banner/banner5.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="~/assets/images/banner/banner6.jpg" />
        </van-swipe-item>
      </van-swipe>
      
      <!-- form表单 -->
      <div class="form_box">
        <van-divider :style="{ color: '#5ABDF1', borderColor: '#5ABDF1', padding: '0 16px' }">
          免费发需求   获取实时报价
        </van-divider>
        <van-field
          v-model="formState.transportTime"
          label="用车时间"
          @click="showDate(true)"
          left-icon="smile-o"
          placeholder="请选择用车时间"
        />
        <van-field
          v-model="formState.number"
          label="出行人数"
          type="number"
          left-icon="smile-o"
          placeholder="请输入乘车人数"
        />
        <van-field
          v-model="formState.phone"
          label="联系方式"
          type="number"
          left-icon="smile-o"
          placeholder="请输入联系方式"
        />
        <van-button type="primary" @click="orderSubmit" size="small" block>获取报价</van-button>
      </div>

      <van-divider :style="{ color: '#5ABDF1', borderColor: '#5ABDF1', padding: '0 16px' }">
        多种车型，适宜价位
      </van-divider>
      <van-tabs v-model="tabActive">
        <van-tab title="8-19座">
          <div 
            v-for="item in [carTypeList[0], carTypeList[1], carTypeList[2], carTypeList[3]]" 
            :key="item.carTitle"
            @click="imagePre(item.id)">
            <div class="model_car_item">
              <img :src="item.mainPicture" />
              <div class="model_car_item_desc">
                <p>{{ item.carTitle }}</p>
                <span>上牌时间：{{ item.licensingTime }}</span>
                <span>成交量：{{ item.dealNums }}</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="20-48座">
          <div 
            v-for="item in [carTypeList[4], carTypeList[5], carTypeList[6], carTypeList[7]]" 
            :key="item.carTitle"
            @click="imagePre(item.id)">
            <div class="model_car_item">
              <img :src="item.mainPicture" />
              <div class="model_car_item_desc">
                <p>{{ item.carTitle }}</p>
                <span>上牌时间：{{ item.licensingTime }}</span>
                <span>成交量：{{ item.dealNums }}</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="49-55座">
          <div 
            v-for="item in [carTypeList[8], carTypeList[9], carTypeList[10], carTypeList[11]]" 
            :key="item.carTitle"
            @click="imagePre(item.id)">
            <div class="model_car_item">
              <img :src="item.mainPicture" />
              <div class="model_car_item_desc">
                <p>{{ item.carTitle }}</p>
                <span>上牌时间：{{ item.licensingTime }}</span>
                <span>成交量：{{ item.dealNums }}</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>

      <van-divider :style="{ color: '#5ABDF1', borderColor: '#5ABDF1', padding: '0 16px' }">
        订单参考
      </van-divider>
      <div class="order_box">
        <div class="order_list" v-for="item in [orderList[0],orderList[1],orderList[2],orderList[3],orderList[4]]" :key="item.id">
          <span class="order_title">
            {{ item.orderTitle }}
            <label class="money">{{ item.amount }}</label>
          </span>
          <div class="order_desc_box">
            <div class="order_img">
              <img :src="item.mainPicture" />
            </div>
            <div class="order_info">
              <div>
                <span>行程安排：</span>
                <span>{{ item.scheduling }}</span>
              </div>
              <div>
                  <span>车型：</span>
                  <span>{{ item.carType }}</span>
              </div>
              <div>
                <span>客户：</span>
                <span>{{ item.customerName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <van-divider :style="{ color: '#5ABDF1', borderColor: '#5ABDF1', padding: '0 16px' }">
        关于我们
      </van-divider>
      <div class="about_us">
        <p>
        一站式包车服务平台“安昇租车”隶属于江苏萌车网络科技有限公司。安昇租车专注于团体社交出行业务，专业为旅行社、企业用户、拓展公司、会务公司、酒店、OTA平台等用户群体提供智能快速线上报价与快速匹配车辆服务，并同时为用户提供行车途中的行程安全监测、服务质量跟踪、客服在线咨询等丰富功能，致力于让集体出行更美好。
        </p><br/>
        <p>
          公司始终坚持以客户为中心、以客户满意为目 标，注重员工培训教育。每一名员工需经过严格的培训通过相应的职业资格考试选拔后方可 任用。客服专员熟悉专业知识，对客户反应的问题能礼貌用语、耐心解答；调度经理熟悉交 通地理、车型报价，客户用车咨询能收获有所裨益的答复，用车过程突发状况能稳妥处理； 司机驾驶技术娴熟，服务客户过程能热情周到、不厌其烦；市场监督员熟悉公司规章制度及 当地城市场风俗人情行使市监管职责，急客户之所急，高效处理客户投诉及反馈的意见。 我们正以统一、高效标准化的管理，在每个环节为您提供快速便捷的服务，我们用心做好每 一个细节，只为带给您非凡的出行享受。
        </p><br/>
        <p>
          经过多年的发展，公司赢得了良好的口碑，被业内人士广泛推崇，公司逐渐成为国内大型活 动、商务会议首选的车辆服务提供商，不断为社会各界提供高品质的用车服务。遍布在中国 大陆各主要城市的服务网点团结协作，不仅可随时随地满足客户的用车需求，更为客户用车 过程排忧解难、杜绝后顾之忧。
        </p>
      </div>

      <div class="foot">
        <van-button 
          icon="wechat" 
          v-clipboard:copy="'13951636244'" 
          v-clipboard:success="copyWeixin" 
          size="large" 
          type="primary" 
          block>
          复制微信
        </van-button>
        <span class="split">/</span>
        <van-button icon="phone" size="large" type="primary" block @click="cellPhone">
          联系客服
        </van-button>
      </div>

      <!-- 时间弹框选择器 -->
      <van-popup v-model="ifDateShow" position="bottom">
        <van-datetime-picker
          v-model="formState.transportTime"
          type="date"
          title="选择用车时间"
          :min-date="minDate"
          @confirm="confirmDate"
          @cancel="cancelDate"
          :formatter="formatter"
        />
      </van-popup>
    </div>
  </client-only>
</template>
<script>
import { Toast,Popup,DatetimePicker,ImagePreview, Field, Swipe, SwipeItem, Tab, Tabs } from 'vant';
import moment from 'moment'
import { carTypeList, orderList } from "~/js/mock.js";

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

let carTypeListTmp = JSON.parse(JSON.stringify(carTypeList));
carTypeListTmp.forEach(item => {
  item.mainPicture = require("~/assets/images/cars/" + item.mainPicture);
});

let orderListTmp = JSON.parse(JSON.stringify(orderList));
orderListTmp.forEach(item => {
  item.mainPicture = require("~/assets/images/order/" + item.mainPicture);
});

export default {
  name: 'MHome',
  data() {
    return {
      ifDateShow: false,
      minDate: new Date(),
      formState: {
        number: '',
        transportTime: '',
        name: '',
        phone: ''
      },
      carTypeList: carTypeListTmp,
      orderList:orderListTmp,
      tabActive: '1',
    }
  },
  components:{
  },
  methods: {
    formatter (type, val) {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      return val;
    },
    showDate(bol){
      this.ifDateShow=bol;
    },
    confirmDate(val){
      this.formState.transportTime = moment(this.formState.transportTime).format('YYYY-MM-DD')
      this.showDate(false)
    },
    cancelDate(){
      this.showDate(false)
    },
    orderSubmit(type) {
      if (!this.formState.phone) {
        return Toast('您好，请填写用车信息');
      }
      this.$axios
        .post(
          "http://39.106.84.29:6266/mcb/api/questionnaire/save",
          this.formState
        )
        .then(e => {
          Toast('您好，客服会尽快与您联系～');
        });
    },
    cellPhone () {
      window.location.href = 'tel:13951636244'
    },
    copyWeixin () {
      Toast('您已复制客服微信，请前往微信添加好友～');
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
      ImagePreview(imageList);
    }
  },
  mounted(){
  }
}
</script>
<style scoped lang="scss" type="text/css">
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  button {
    background: #5ABDF1;
    border: 1px solid #5ABDF1;
  }
  .head {
    position: fixed;
    width: 100%;
    height: 40px;
    z-index: 9999;
    .title{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #5ABDF1;
      text-align: center;
      font-size: 18px;
      color: #FFF;
    }
  }
  .topImgBox {
    width: 100%;
    height: 100%;
    margin-top: 40px;
    img {
      width: 100%;
      padding: 8px 8px 0 8px;
      border-radius: 10px;
    }
  }
  .van-swipe-item {
    display: inline-flex;
    justify-content: center;
}
  .foot {
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 9999;
    bottom: 0px;
    background: #5ABDF1;
    display: flex;
    align-items: center;
    .split {
      height: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
    }
    button {
      width: 48%;
    }
  }
  .form_box {
    text-align: center;
    button {
      background: #5ABDF1;
      width: 50%;
      margin: 10px auto;
      border: 1px solid #5ABDF1;
    }
  }

  .model_car_item {
    width: 100%;
    padding: 2%;
    display: flex;
    overflow: hidden;
    img {
      width: 45%;
      border-radius: 5px;
    }
    .model_car_item_desc {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      font-size: 12px;
      justify-content: space-around;
      color: #333;
    }
  }

  .about_us {
    padding: 0 16px 0 16px;
    color: #666;
    font-size: 12px;
    padding-bottom: 80px;
    color: #333;
    p {
      text-indent: 24px;
    }
  }
  .order_box {
    display: inline-flex;
    flex-direction: column;
    padding: 0 10px;
    .order_list {
      width: 100%;
      .order_title {
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        width: 100%;
        color: #333;
        display: inline-flex;
        justify-content: space-between;
        .money {
          color: red;
          font-weight: bolder;
          font-size: 14px;
        }
      }
      .order_desc_box {
        width: 100%;
        display: inline-flex;
        font-size: 12px;
        color: #333;
        margin-bottom: 10px;
        img {
          width: 150px;
          border-radius: 5px;
          margin-right: 5px;
        }
        .order_info {
          display: inline-flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }

  :deep(.van-picker__columns) {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    cursor: grab;
    width: 70%;
    flex-direction: row;
    justify-content: center;
    margin-left: 15%;
  }
}
</style>