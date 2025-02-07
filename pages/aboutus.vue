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
                  南京奥鼎机械设备有限公司成立以来一直秉承“创新、品质、服务、节约、敬业、感恩”的理念，通过吸收新技术、新工艺、新材料、新创意，不断改善 品质、外观，赢得了全国各地客户的青睐和首肯，始终走在刚也最前列。在内部管理上，本着“追求、员工、技术、精神、利益”的宗旨，先后引进了大批拥有专业技术和丰富管理经验的人才。公司始终坚持“以质量求生存，以生存求发展”的经营信念，致力于打造成为权威微波设备、干燥设备、混合设备、粉碎设备产品的标杆性企业。
                </p>
              </div>
            </div>

            <!-- 公司图片 -->
            <div class="company-pictures">
              <img src="../assets/images/about/about_us.jpg" />
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
                    南京市栖霞区龙潭街道飞花工业园
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
                    18651833658
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
      title: "关于我们_大巴租赁_商务车租赁_大巴车租赁平台-奥鼎机械",
      meta: [
        {
          name: "keywords",
          content: "奥鼎机械,大巴租赁,商务车租赁,大巴车租赁平台"
        },
        {
          name: "description",
          content:
            "奥鼎机械，隶属于南京奥鼎机械设备有限公司，专注于团体社交出行服务，通过互联网+ 的手段，创新繁琐的传统用车模式，为广大用户提供一站式的包车服务。奥鼎机械服务平台所有的车辆为国家正式运营车辆，各类型车辆齐全，司机均拥有多年行驶经验。"
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
  margin-top: 56px;
  font-family: '微软雅黑';
  line-height: 28px;
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
  margin-top: 40px;
  display: flex;
  justify-content: center;
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
