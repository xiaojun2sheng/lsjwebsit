<template>
  <div>
    <headr v-if="isMobild"></headr>
    <Nuxt />
  </div>
</template>

<script>
import headr from "~/components/Header.vue";
import foot from "~/components/Footer.vue";
export default {
  components: {
    headr,
    foot
  },
  data() {
    return {
      isMobild: false
    }
  },
  methods:{
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  mounted() {
    this.isMobild = false
    if (this._isMobile()) {
      if (this.$route.name == 'mBossAdmin') {
        this.$router.replace('/mBossAdmin');
      } else {
        this.$router.replace('/mhome');
      }
      this.isMobild = false
    } else {
      this.$router.replace('/');
      this.isMobild = true
    }
  }
};
</script>
<style scoped>
img {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
