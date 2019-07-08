<template>
	<div class="footer-bar">
		<div class="label-layout">
			<ul class="label-list">
				<li class="label"> <img src="../assets/public/footer1.png" alt=""> 海外直邮</li>
				<li class="label"> <img src="../assets/public/footer2.png" alt=""> 品质保证</li>
				<li class="label"> <img src="../assets/public/footer3.png" alt=""> 售后保障</li>
			</ul>
		</div>
		<div class="content-list wrap">
			<div class="logo-wrap">
				<img src="../assets/public/logo2.png" alt="" class="logo2">
				<ul class="qrcode-list">
					<li class="qrcode">
						<i>
							<img src="../assets/public/weixing.png" alt="">

						</i>
						<img src="../assets/public/wechat.d59247a.jpg" alt="" class="ewimg">
					</li>
					<li><i><img src="../assets/public/weibo.png" alt=""></i></li>
				</ul>

			</div>
			<ul class="help-link-list">
				<li class="link">ceo邮箱</li>
				<li class="link">售后服务</li>
				<li class="link">常见问题</li>
				<li class="link">关税问题</li>
				<li class="link">物流配送</li>
			</ul>
			<div class="qrcode-wrap">
				<div class="title">移动走秀</div>
				<ul>
					<li> <img src="../assets/public/erwei.png" alt=""></li>
					<li> <img src="../assets/public/erwei.png" alt=""></li>
					<li> <img src="../assets/public/erwei.png" alt=""></li>
				</ul>
			</div>
			<div class="concat-wrap">
				<div class="title">联系我们</div>
				<a href="#" class="phone">400-888-4499 <span>(9:00~19:00)</span></a>
				<div class="btn-service">在线客服</div>
			</div>
		</div>
		<div class="copyright">
			Copyright © 2008-2018 Xiu.com深圳走秀网络科技有限公司版权所有 .粤ICP备07502993号 粤公网安备
        44030402000804号
		</div>
		<div class="service-list">
			<div class="service"><img src="../assets/public/f1.jpg" alt=""></div>
			<div class="service"><img src="../assets/public/f2.jpg" alt=""></div>
			<div class="service"><img src="../assets/public/f3.jpg" alt=""></div>
			<div class="service"><img src="../assets/public/f4.jpg" alt=""></div>
			<div class="service"><img src="../assets/public/f5.jpg" alt=""></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.footer-bar {
		position: relative;
		background: #111;

		.label-layout {
			background: #fff;

			.label-list {
				display: flex;
				justify-content: space-between;
				margin-left: auto;
				margin-right: auto;
				height: 100px;
				width: 856px;

				.label {
					display: flex;
					align-items: center;
					color: #666;
					font-size: 16px;

					img {
						width: 40px;
						height: 40px;
						margin-right: 16px;
					}
				}
			}
		}

		.content-list {
			box-sizing: border-box;
			display: flex;
			padding-top: 50px;
			padding-bottom: 43px;
			width: 1200px;
			margin-left: auto;
			margin-right: auto;

			.logo-wrap {
				border-right: 1px solid #aaa;
				padding-left: 50px;
				padding-right: 50px;
				height: 181px;

				.qrcode-list {
					display: flex;
					align-items: center;
					margin-top: 30px;

					.qrcode {
						position: relative;
						margin-right: 10px;
						cursor: pointer;

						.ewimg {
							display: none;
							position: absolute;
							left: 50%;
							transform: translateX(-50%);
							top: 50px;
							width: 160px;
							height: 160px;
						}
					}

					i {
						display: block;
						width: 30px;
						height: 30px;
						background-color: #fff;
						border-radius: 50%;


						img {
							width: 100%;

						}
					}
				}



			}

			.help-link-list {
				border-right: 1px solid #aaa;
				padding-left: 50px;
				padding-right: 50px;
				height: 181px;
				box-sizing: border-box;

				.link {
					padding-bottom: 23px;
					font-size: 14px;
					color: #ddd;
					cursor: pointer;
					box-sizing: border-box;
				}
			}

			.qrcode-wrap {
				padding-left: 50px;
				padding-right: 50px;
				border-right: 1px solid #aaa;
				height: 181px;

				.title {
					padding-bottom: 30px;
					font-size: 14px;
					color: #ddd;
				}

				ul {
					display: flex;
					align-items: center;
					justi margin-right: 30px;
					justify-content: space-between;

					li {
						margin-right: 30px;

						img {
							width: 82px;
							height: 82px
						}
					}
				}
			}

			.concat-wrap {
				padding-left: 50px;
				padding-right: 30px;

				.title {
					padding-bottom: 12px;
					font-size: 14px;
					color: #ddd;

				}

				.phone {
					display: block;
					font-size: 20px;
					color: #fff;
					cursor: pointer;

					span {
						font-size: 14px;
					}
				}

				.btn-service {
					margin-top: 20px;
					width: 80px;
					padding-top: 8px;
					padding-bottom: 8px;
					font-size: 14px;
					text-align: center;
					color: #fff;
					background: #111;
					border-radius: 15px;
					border: 1px solid #fff;
					cursor: pointer;
				}
			}

			
		}
		.copyright {
			padding-top: 27px;
			border-top: 1px solid #aaa;
			padding-bottom: 20px;
			color: #666;
			font-size: 12px;
			text-align: center;
		}
		.service-list{
			display: flex;
			align-items: center;
			justify-content: center;
			padding-bottom: 30px;
			.service{
				margin-right: 50px;
				
			}
		}
	}
</style>
