<template>
	<div class="wrap">
		<div class="pay_layout">
			<!--头部支付时间-->
			<div class="pay_time">
                <i class="iconfont clock">&#xe624;</i>
                <div class="tip">
                	<p class="title">请尽快完成支付</p>
                	<p class="countdown">订单将在<span>{{countTime|hour}}小时{{countTime|minute}}分{{countTime|second}}秒</span>后关闭</p>
                </div>
			</div>
			<!--订单信息-->
			<div class="order_info">
				<p class="order_price">应付：<span><span class="unit">¥</span>{{price}}</span></p>
				<p class="detail_info">收货信息<span>{{userInfo.nameV}}</span><span>{{userInfo.numV}}</span><span>{{userInfo.selected}}{{userInfo.detailV}}</span></p>
			</div>
			
			<!--支付信息-->
			<div class="pay_wrap">
				<p class="title">选择支付方式</p>
				<ul class="pay_list">
					<li class="pay_type">
						<label role='radio' @click="checked=true" class="radio">
							<span class="input">
								<span :class="{inner:true,active:checked}"></span>
								<input type="radio"  class="origin"/>
							</span>
							<span class="label"><img src="../../assets/pay/alipay.png" class="img"/></span>
						</label>
					</li>
					<li class="pay_type">
						<label role='radio' @click="checked=false" class="radio">
							<span class="input">
								<span :class="{inner:true,active:checked==false}"></span>
								<input type="radio"  class="origin"/>
							</span>
							<span class="label"><img src="../../assets/pay/wechat.png" class="img"/></span>
						</label>
					</li>
				</ul>				
				<!--支付按钮-->
				<button type="button" @click="pay()" class="btn_pay">去支付</button>
				<payment :checked='checked'></payment>
			</div>
		</div>
	</div>
</template>

<script>
	import payment from './payment'
	export default {
		data() {
			return {
				countTime:1800,
				checked:true,
				userInfo:this.$store.state.dliverTo,
				
			};
		},
		beforeCreate(){
			window.scroll(0,0)
		},
		components:{
			payment
		},
		computed:{
			price(){
				var total =0;
				for(let item of this.$store.state.checkoutList){
					total+=Number(item.count)*Number(item.price)
				}
				return total;
			}
		},
		mounted() {
			this.countDown()
		},
		filters:{
			hour(val){
				return Math.floor(val/3600)
			},
			minute(val){
				return Math.floor(val/60)
			},
			second(val){
				return Math.floor(val%60)
			}
		},
		methods:{
			countDown(){
				setInterval(()=>{
					this.countTime--
				},1000)
			},
			pay(){
				this.$store.state.paymentPage=true
				console.log(this.userInfo)
			}
		}
	}
</script>

<style lang="less">
	/*字体图标引入开始*/
	@font-face {
		font-family: 'iconfont';
		src: url('//at.alicdn.com/t/font_1267571_4v2n8ul2bdh.eot');
		src: url('//at.alicdn.com/t/font_1267571_4v2n8ul2bdh.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1267571_4v2n8ul2bdh.woff2') format('woff2'), url('//at.alicdn.com/t/font_1267571_4v2n8ul2bdh.woff') format('woff'), url('//at.alicdn.com/t/font_1267571_4v2n8ul2bdh.ttf') format('truetype'), url('//at.alicdn.com/t/font_1267571_4v2n8ul2bdh.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	/*字体图标引入结束*/
	.clock{
		font-size: 48px;
		color: #111;
	}
	.pay_layout {
		margin: 40px auto 68px;
		width: 1200px;
		background-color: #fff;
		padding: 56px 40px 176px;
		box-sizing: border-box;
		.pay_time {
			display: flex;
			align-items: center;
			justify-content: center;
			.tip{
				width: 224px;
				text-align: center;
				.title{
					font-size: 20px;
				}
				.countdown{
					padding-top: 16px;
					font-size: 15px;
				}
			}
		}
		.order_info{
			margin-top: 31px;
			height: 120px;
			background-color: #ecefef;
			text-align: center;
			.order_price{
				padding-top: 36px;
				>span{
					margin-left: 16px;
					color: #111;
					font-weight: 700;
					font-size: 24px;
					.unit{
						margin-right: 2px !important;
					}
				}
			}
			.detail_info{
				padding-top: 13px;
				font-size: 13px;
				>span{
					margin-left: 12px;
				}
			}
		}
		.pay_wrap{
			margin-top: 30px;
			.title{
				padding-bottom: 16px;
				font-size: 15px;
			}
			.pay_list{
				display: flex;
				align-items: center;
				border: 1px solid #f7f7f7;
				.pay_type{
					display: flex;
					align-items: center;
					padding-top: 20px;
					padding-bottom: 20px;
					margin-left: 40px;
					margin-right: 40px;
					.radio{
						font-weight: 500;
						cursor: pointer;
						font-size: 14px;
						outline: none;
						color: #606266;
						white-space: nowrap;
						position: relative;
						display: flex;
						align-items: center;
						.input{
							white-space: nowrap;
							cursor: pointer;
							outline: none;
							display: inline-block;
							vertical-align: middle;
							.inner{
								width: 18px;
								height: 18px;
								border: solid 1px #dcdfe6;
								cursor: pointer;
								display: inline-block;
								box-sizing: border-box;
								border-radius: 50%;
								position: relative;
							}
							.active{
								border-color: #111;
								background-color: #111;
								&:after{
									content:'';
									border-radius: 100%;
									position: absolute;
									z-index: 1;
									left: 50%;
									top: 50%;
									transform: translate(-50%,-50%);
									transition: transform .15s ease-in;
									width: 6px;
									height: 6px;
									background-color: #fff;
									display: block;
								}
							}
							.origin{
								position: absolute;
								z-index: -1;
								left: 0;
								top: 0;
								right: 0;
								bottom: 0;
								margin: 0;
								opacity: 0;
							}
						}
						.label{
								font-size: 14px;
								padding-left: 10px;
								.img{
									margin-left: 8px;
									height: 34px !important;
									
								}
							}
					}
				}
			}
		}
	}
	/*支付按钮*/
	.btn_pay{
		border: none;
		display: block;
		margin: 48px auto 0;
		width: 192px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-color: #111;
		color: #fff;
		font-size: 21px;
		cursor: pointer;
	}
</style>