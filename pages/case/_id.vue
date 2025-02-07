<template>
  <client-only>
	<div class="container pt30">
		<div class="haiocx-flex" style="justify-content: center;align-items: center;">
			<NuxtLink v-show="orderDetail.index != 1" :to="'/case/' + (+(orderDetail.index)-1)">
				<img class="mr40" src="~/assets/images/order/cursor-prev.png" alt="">
			</NuxtLink>
			<img v-show="orderDetail.index == 1" class="mr40" src="~/assets/images/order/cursor-prev.png" alt="">
			<div class="order-detail-container">
				<el-breadcrumb class="mb30" separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">安昇租车首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/cases' }">订单参考</el-breadcrumb-item>
					<el-breadcrumb-item>订单详情</el-breadcrumb-item>
				  </el-breadcrumb >

				<div class="order-info">
					<div class="order-heard mt35">
						<div class="order-title">
							<span class="title-bg">一车一价</span>
							<span class="ml25">{{orderDetail.orderTitle}}</span>
						</div>
						<div class="price font-24">
							<span>{{orderDetail.amount}}</span>
						</div>
					</div>
					<el-divider></el-divider>
					<div class="user-container">
						<div class="user-info-title ml35" style="margin-bottom: 42px;"><span>用户信息</span></div>
						<div class="user-info ml80">
							<el-row class="mb20">
								<el-col :span="8">
								<span class="order-text">客户名称：</span>
								<span class="order-text order-text-value">{{orderDetail.customerName}}</span>
								</el-col>
								<el-col :span="8">
								<span class="order-text">用车时间：</span>
								<span class="order-text order-text-value">{{orderDetail.drivingTime}}</span>
								</el-col>
								<el-col :span="8">
								<span class="order-text">车型：</span>
								<span class="order-text order-text-value">{{orderDetail.carType}}</span>
								</el-col>
							</el-row>
							<el-row class="">
								<el-col :span="16">
								<span class="order-text">行程安排：</span>
								<span class="order-text order-text-value">{{orderDetail.scheduling}}</span>
								</el-col>

							</el-row>
						</div>
					</div>
					<div class="fleet-container mt50">
						<div class="fleet-info-title ml35" style="margin-bottom: 42px;"><span>车队信息</span></div>
						<div class="fleet-info ml80">
							<div class="mb20">
								<span class="order-text order-label">报&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：
								</span>
								<span class="order-text price">{{orderDetail.amount}}</span>

							</div>
							<div class="mb20">
								<span class="order-text order-label">车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：
								</span>
								<span class="order-text order-text-value">{{orderDetail.carType}}</span>
							</div>
							<div class="mb20 haiocx-flex">
								<span class="order-text order-label">车辆照片：</span>
								<div class="car_details_box" v-for="carPhoto in orderDetail.displayPhotos" :key="carPhoto">
									<img class="mr20 car_details"  :src="carPhoto">
								</div>
							</div>
							<div class="mb20">

								<span class="order-text  order-label">持有证件：
								</span>
								<span class="order-text order-text-value">{{orderDetail.hasPapers}}</span>
							</div>
							<div class="mb20">

								<span class="order-text mb20 order-label">报价包含：
								</span>
								<span class="order-text order-text-value">{{orderDetail.priceInclude}}</span>
							</div>
							<div class="mb20">

								<span class="order-text mb20 order-label">报价不含：
								</span>
								<span class="order-text order-text-value">{{orderDetail.priceExclude}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NuxtLink v-show="orderList.length != orderDetail.index" :to="'/case/' + (+(orderDetail.index)+1)">
				<img class="ml40" src="~/assets/images/order/cursor-next.png" alt="">
			</NuxtLink>
			<img v-show="orderList.length == orderDetail.index" class="ml40" src="~/assets/images/order/cursor-next.png" alt="">
		</div>
		<div class="p30"></div>
		<foot></foot>
	</div>
  </client-only>
</template>

<script>
	import { orderList } from "~/js/mock.js"
	import foot from "~/components/Footer.vue";
	export default {
		components: {
			foot
		},
		data() {
			return {
				orderList,
				orderDetail: {}
			}
		},
		mounted() {
			this.orderDetail = orderList.filter(item => {
				return item.index == this.$route.params.id
			})[0];
			this.orderDetail.displayPhotos = [];
			this.orderDetail.preId = +(this.orderDetail.index) - 1
			this.orderDetail.nextId = +(this.orderDetail.index) + 1
			this.orderDetail.carPhotos.forEach(item => {
				this.orderDetail.displayPhotos.push(require("~/assets/images/order/" + item))
			})
		},
		head() {
    		return  {
				title: this.orderDetail.orderTitle + '_安昇租车—7-54座大巴配驾包车平台',
				meta: [{
					name: 'keywords',
					content: this.orderDetail.orderTitle + ',旅游包车,商务租车,会议租车,大巴包车价格,商务车租赁价格'
				}, {
					name: 'description',
					content: this.orderDetail.orderTitle
				}],
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		background-color: #f7f7f7;
		margin-top: 128px;
	}

	.order-detail-container {
		width: 68%;
	}

	.order-info {
		border: 1px solid #E1E1E1FF;
		margin: auto;
		padding: 10px 12px;
		background-color: #fff;
		/* margin-bottom: 20px; */
	}

	.order-heard {
		display: flex;
		justify-content: space-between;
	}

	.title-bg {
		background: url("~/assets/images/rectangle-bg.png") no-repeat;
		width: 125px;
		display: inline-block;
		height: 40px;
		line-height: 40px;
		color: #fff;
		padding-left: 5px;
	}

	.order-label {
		width: 100px;
		white-space: nowrap;
	}

	.order-text {
		line-height: 18px;
		font-size: 18px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #666666FF
	}

	.order-text-value {
		color: #333333FF;

	}

	.order-title {
		font-size: 24px;
		line-height: 24px;
	}

	.user-info-title,
	.fleet-info-title {
		display: flex;
		justify-content: center;
		width: 130px;
		font-size: 20px;
		line-height: 40px;
		background-color: #EEEEEE;
	}

	.fleet-info {
		display: flex;
		flex-direction: column;

	}

	.price {
		color: rgb(187, 41, 30);
		font-family: SourceHanSansCN-Medium;
		font-weight: 600;
	}
	
	.car_details_box {
		display: flex;
		flex-direction: row;
	}

	.car_details {
		width: 500px;
	} 
</style>