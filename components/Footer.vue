<template>
	<div class="container-footer">
		<div class="footer">
			<!-- 左侧公司信息 -->
			<div class="footer-lf">
				<!-- 路由列表 -->
				<div class="footer-list">
					<ul>
						<li>
							<router-link to="/cars">优选车型</router-link>
						</li>|
						<li>
							<router-link to="/cases">订单参考</router-link>
						</li>|
						<!-- <li>
							<router-link to="/convoy-in">车队入驻</router-link>
						</li>| -->
						<li>
							<router-link to="/brand-advantage">品牌优势</router-link>
						</li>|
						<li>
							<router-link to="/aboutus">关于安昇</router-link>
						</li>|
						<!-- <li>
							<router-link to="/privacy-agreement">隐私政策</router-link>
						</li>|
						<li>
							<router-link to="/user-rights">用户协议</router-link>
						</li>|
						<li>
							<a>APP版本：2.0.0</a>
						</li> -->
					</ul>
				</div>
				<!-- 公司信息 -->
				<div class="footer-info">
					<!-- <p>开发者：江苏萌车网络科技有限公司</p> -->
					<p>咨询电话：13951636244</p>
					<p>客服工作时间：7*24小时</p>
					<p>公司地址：南京市栖霞区马群街道紫东路2号57栋</p>
					<p>Copyright © 2020 江苏萌车网络科技有限公司. 版权所有. 苏ICP备2022035508号</p>
				</div>
			</div>

			<!-- 右侧 APP二维码 公众号二维码 -->
			<div class="footer-rt">
				<!-- 下单小程序 -->
				<!-- <div class="qr-code">
					<img src="~/assets/haio-vx.jpg" />
					<div>
						安昇租车小程序
					</div>
				</div> -->
				<!-- APP -->
				<!-- <div class="qr-code">
					<img src="~/assets/APP.jpg" />
					<div>
						安昇租车APP
					</div>
				</div> -->
				<!-- 公众号 -->
				<div class="qr-code">
					<img src="~/assets/gzh.jpg" />
					<div>
						添加微信，获取报价
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.container-footer {
		width: auto;
		background-color: #E8E8E8;
		height: 188px;
		padding: 31px 0 0;
		font-size: 14px;
		box-sizing: content-box;
	}

	.footer {
		width: 68%;
		min-width: 1300px;
		height: 100%;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}

	.footer-list ul {
		display: flex;
	}

	.footer-list ul li {
		padding: 0 15px;
	}

	.footer-list ul li:nth-child(1) {
		padding-left: 0;
	}

	.footer-info {
		margin-top: 21px;
	}

	.footer-info p {
		margin-bottom: 10px;
	}

	.footer-info p:nth-child(4) {
		margin-bottom: 0;
	}

	.footer-rt {
		display: flex;
	}

	.footer-rt img {
		width: 120px;
		height: 120px;
	}

	.qr-code {
		/* margin-right: 27px; */
		text-align: center;
		position: fixed;
		right: 0px;
		top: 65%;
		background: #fff;
		padding: 20px;
		z-index: 999;
	}
	.qr-code:nth-child(3){
		margin-right: 0;
	}

	.qr-code div {
		margin-top: 7px;
	}
</style>
