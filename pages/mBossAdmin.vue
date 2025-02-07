<template>
  <div>
    <div class="list_content">
      <div v-for="item in list" :key="item.id" class="item_box">
        <label class="item">{{ configDate(item.createdDate) }}</label>
        <label class="item detail" @click="cellPhone(item.phone)">{{ item.phone }}</label>
        <label class="item"> {{ item.communicateFlag == 0 ? '未沟通' : '已沟通' }}</label>
        <label class="item detail" @click="detail(item)">详情</label>
      </div>
      <div class="more" >
        <label @click="more" v-if="!finished">加载更多</label>
        <label v-else>没有数据了</label>
      </div>
    </div>
    <van-overlay :show="dialogShow" @click="dialogShow = false">
      <div class="dialog_content" @click.stop>
        <div class="item">
          <label class="key">留言时间</label>
          <label class="value">{{ detailsDate(dialogInfo.createdDate) }}</label>
        </div>
        <div class="item">
          <label class="key">出发时间</label>
          <label class="value">{{ detailsDate(dialogInfo.transportTime) }}</label>
        </div>
        <div class="item">
          <label class="key">用户姓名</label>
          <label class="value">{{ dialogInfo.name ? dialogInfo.name : '- '}}</label>
        </div>
        <div class="item">
          <label class="key">出行人数</label>
          <label class="value">{{ dialogInfo.number ? dialogInfo.number + '人' : '-' }}</label>
        </div>
        <div class="item">
          <label class="key">是否沟通</label>
          <label class="value"> {{ dialogInfo.communicateFlag == 0 ? '未沟通' : '已沟通' }}</label>
        </div>
        <div class="item">
          <label class="key">用户联系方式</label>
          <label class="value detail" @click="cellPhone(dialogInfo.phone)">{{ dialogInfo.phone }}</label>
        </div>
        <div class="item">
          <label class="key">输入备注</label>
          <van-field
            v-model="message"
            rows="3"
            autosize
            type="textarea"
            placeholder="请输入留言"
          />
        </div>
        <van-button type="primary" class="btn" @click="updateOrder" block>标记已沟通</van-button>
        <van-button type="primary" class="btn" @click="dialogShow = false" block>关闭</van-button>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import { List, Switch, Overlay, Field, Button } from 'vant';
import moment from 'moment'

export default {
  name: 'mBossAdmin',
  data() {
    return {
      list: [],
      dialogShow: false,
      dialogInfo: {},
      message: '',
      pageNo: 1,
      finished: true
    }
  },
  components:{
  },
  methods: {
    featchData (pageNo = 1) {
      this.$axios
        .get(
          "http://39.106.84.29:6266/mcb/api/questionnaire/list?limit=10&pageNo=" + pageNo,
        )
        .then(res => {
          if (res.data.code !== 0) return 
          this.list.push(...res.data.data.result)
          this.loading = true
          this.finished = (this.list.length == res.data.data.total)
          console.log(this.finished)
        });
    },
    cellPhone (phone) {
      window.location.href = 'tel:' + phone
    },
    detail (info) {
      this.dialogShow = true
      this.dialogInfo = info
      this.message = this.dialogInfo.remark
    },
    configDate (date) {
      try {
        if (!date) return '-'
        return moment(date).format('M月DD号留言')
      } catch (error) {
        return '-'
      }
    },
    detailsDate (date) {
      try {
        if (!date) return '-'
        return moment(date).format('YYYY年MM月DD号')
      } catch (error) {
        return '-'
      }
    },
    more () {
      this.pageNo += 1
      this.featchData(this.pageNo)
    },
    updateOrder () {
      let params = {
        id: this.dialogInfo.id,
        remark: this.message
      }
      this.$axios
        .post(
          "http://39.106.84.29:6266/mcb/api/questionnaire/update",
          params
        )
        .then(res => {
          this.dialogInfo.communicateFlag = '1' 
          this.dialogShow = false
        });
    }
  },
  mounted(){
    this.featchData()
  }
}
</script>
<style scoped lang="scss" type="text/css">
.list_content {
  .more {
    width: 100%;
    text-align: center;
    padding: 8px 0;
    color: #409eff;
  }
  .item_box {
    border-bottom: 1px solid #409eff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .item {
      width: 25%;
      display: inline-block;
      text-align: center;
      font-size: 14px;
    }
    .detail {
      color: #409eff;
    }
  }

}
.dialog_content {
  background: #fff;
  width: 80%;
  margin: 0 auto;
  margin-top: 50%;
  height: 50%;
  border-radius: 5px;
  padding: 20px 15px 10px 15px;
  .item {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    line-height: 35px;
    .key {
      width: 100px;
      color: #999;
    }
    .detail {
      color: #409eff;
    }
  }
  .btn {
    margin-bottom: 8px;
  }
}
</style>