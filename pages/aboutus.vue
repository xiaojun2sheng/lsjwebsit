<template>
  <client-only>
    <div>
      <div class="container">
        <!-- 头部横幅 -->
        <div class="top-banner">
          <img src="../assets/images/about/about_banner.png" />
        </div>
        <!-- 主体 -->
        <div class="main">
          <!-- 公司介绍 -->
          <div class="introduce">
            <div class="introduce-top">
              <div class="introduce-lf">
                <p>
                  一站式包车服务平台“安昇租车”隶属于江苏萌车网络科技有限公司。安昇租车专注于团体社交出行业务，专业为旅行社、企业用户、拓展公司、会务公司、酒店、OTA平台等用户群体提供智能快速线上报价与快速匹配车辆服务，并同时为用户提供行车途中的行程安全监测、服务质量跟踪、客服在线咨询等丰富功能，致力于让集体出行更美好。
                </p>
                <p>
                </p>
              </div>
              <!-- <div class="introduce-rt">
                <img src="../assets/images/about/about_us.png" />
              </div> -->
            </div>

            <p>
              公司以“平等、尊重、勤勉、诚实”为企业文化，始终坚持以客户为中心、以客户满意为目
              标，注重员工培训教育。每一名员工需经过严格的培训通过相应的职业资格考试选拔后方可
              任用。客服专员熟悉专业知识，对客户反应的问题能礼貌用语、耐心解答；调度经理熟悉交
              通地理、车型报价，客户用车咨询能收获有所裨益的答复，用车过程突发状况能稳妥处理；
              司机驾驶技术娴熟，服务客户过程能热情周到、不厌其烦；市场监督员熟悉公司规章制度及
              当地城市场风俗人情行使市监管职责，急客户之所急，高效处理客户投诉及反馈的意见。
              我们正以统一、高效标准化的管理，在每个环节为您提供快速便捷的服务，我们用心做好每
              一个细节，只为带给您非凡的出行享受。
            </p>

            <p>
              经过多年的发展，公司赢得了良好的口碑，被业内人士广泛推崇，公司逐渐成为国内大型活
              动、商务会议首选的车辆服务提供商，不断为社会各界提供高品质的用车服务。遍布在中国
              大陆各主要城市的服务网点团结协作，不仅可随时随地满足客户的用车需求，更为客户用车
              过程排忧解难、杜绝后顾之忧。
            </p>

            <!-- 公司图片 -->
            <div class="company-pictures">
              <div>
                <img src="../assets/images/cars/ho_car_20.png" />
              </div>
              <div>
                <img src="../assets/images/cars/ho_car_46.png" />
              </div>
              <div>
                <img src="../assets/images/cars/ho_car_55.png" />
              </div>
            </div>
          </div>

          <!-- 联系我们 -->
          <div class="contact-us">
            <div>
              联系我们
            </div>
            <div class="contact-list">
              <div class="contact-item">
                <!-- 图标 -->
                <div class="img">
                  <img src="../assets/images/about/about_city.png" />
                </div>
                <div class="contact-content">
                  <div>
                    公司地址
                  </div>
                  <span>
                    南京市栖霞区马群街道紫东路2号57栋
                  </span>
                </div>
              </div>
              <div class="contact-item">
                <!-- 图标 -->
                <div class="img">
                  <img src="../assets/images/about/about_phone.png" />
                </div>
                <div class="contact-content">
                  <div>
                    联系电话
                  </div>
                  <span>
                    13951636244
                  </span>
                </div>
              </div>
              <div class="contact-item">
                <!-- 图标 -->
                <div class="img">
                  <img src="../assets/images/about/about_time.png" />
                </div>
                <div class="contact-content">
                  <div>
                    客服时间
                  </div>
                  <span>
                    7*24小时
                  </span>
                </div>
              </div>
            </div>
          </div>
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
  data() {
    return {};
  },
  mounted() {
    document.getElementById("newBridge") ? document.getElementById("newBridge").remove() : "";
  },
  head() {
    return {
      title: "关于安昇_大巴租赁_商务车租赁_大巴车租赁平台-安昇租车",
      meta: [
        {
          name: "keywords",
          content: "安昇租车,大巴租赁,商务车租赁,大巴车租赁平台"
        },
        {
          name: "description",
          content:
            "安昇租车，隶属于江苏萌车网络科技有限公司，专注于团体社交出行服务，通过互联网+ 的手段，创新繁琐的传统用车模式，为广大用户提供一站式的包车服务。安昇租车服务平台所有的车辆为国家正式运营车辆，各类型车辆齐全，司机均拥有多年行驶经验。"
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
.top-banner {
  width: auto;
  min-width: 1300px;
  height: 380px;
}

.main {
  width: 68%;
  min-width: 1300px;
  margin: 0 auto;
  height: 1345px;
  margin-bottom: 65px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333;
}
.introduce-top {
  display: flex;
  justify-content: space-between;
}
.introduce-top .introduce-lf {
  margin-right: 20px;
  /* width: 671px;
  height: 184px; */
  margin-top: 56px;
}
.introduce-top .introduce-lf p:nth-child(2) {
  margin-top: 25px;
}
.introduce-top .introduce-rt {
  width: 609px;
  height: 298px;
  position: relative;
  top: -48px;
}
.introduce p:nth-child(2) {
  margin-bottom: 47px;
}
.company-pictures {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.company-pictures div {
  width: 420px;
  height: 254px;
  margin-right: 21px;
}
.company-pictures div:nth-child(3) {
  margin-right: 0;
}
.contact-us {
  margin-top: 72px;
  text-align: center;
}
.contact-list {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.contact-list .contact-item {
  width: 435px;
  height: 412px;
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-list .contact-item:nth-child(1),
.contact-list .contact-item:nth-child(2) {
  border-right: 0;
}
.contact-list .contact-item .contact-content div {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #333333;
  margin-bottom: 20px;
}
.contact-list .contact-item .img {
  margin-bottom: 64px;
}
.contact-list .contact-item .contact-content span {
  font-size: 16px;
  font-family: SourceHanSansCN-Regular;
  color: #333333;
}
</style>
