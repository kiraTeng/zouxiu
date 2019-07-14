<template>
	<div class="wrap checkout">
		<div class="backToCart" @click="backToCart()">返回购物车</div>
		<div :class="{tips:true,tipsShow:tipsShow}" v-show="tipsShow"><span><i></i>请填入收货地址信息</span></div>
		<div class="address">
			<div class="title">选择收货地址</div>
			<div class="more">
				<span v-show="!selectAddressShow">暂无收货地址</span>
				<div v-show="selectAddressShow">
					<selectaddress></selectaddress>
				</div>
				<button @click="addAddress()">
					<span>+</span>
					使用新地址
				</button>
			</div>
			<newaddress></newaddress>
		</div>
		<div class="checkoutCon">
			<div class="title">确认商品清单</div>
			<ul class="column-ul list-header">
				<li class="column">商品</li>
				<li class="column">单价</li>
				<li class="column">数量</li>
				<li class="column">小计</li>
			</ul>
			<div class="listBody">
				<ul class="column-ul" v-for="(item,index) in checkoutList" :key='index'>
					<li class="column">
						<img class="productImg" :src="item.proPictDir" alt="" />
						<div class="proInfo">
							<div class="proName">{{item.pname}}</div>
							<div class="proSeries">{{item.firstClassAttrName}},{{item.innerSize}}</div>
						</div>
					</li>
					<li class="column">
						<span class="unit">￥</span>
						{{item.price}}
					</li>
					<li class="column">1件</li>
					<li class="column">
						<span class="unit">￥</span>
						{{item.count*item.price}}
					</li>
				</ul>
				<div class="remark">
					备注留言：
					<input type="text" placeholder="最多50字" maxlength="50" />
				</div>
				<div class="coupon">
					<span>优惠券：</span>
					<div @click="arrowDirection = !arrowDirection">
						<input type="text" :value="couponV" readonly="readonly" @blur="arrowDirection = !arrowDirection" />
						<i :class="{ up: arrowDirection }"></i>
					</div>
					<ul class="couponSelect" v-show="arrowDirection">
						<li>无可用优惠券</li>
					</ul>
					<p class="accountInfo">
						优惠：
						<span>
							<span class="unit">￥</span>
							0
						</span>
						<br />
						运费：
						<span>
							<span class="unit">￥</span>
							0
						</span>
						<br />
						共&nbsp;
						<span>{{allNum}}</span>
						件&nbsp;&nbsp;&nbsp;小计：
						<span>
							<span class="unit">￥</span>
							{{sumAll}}
						</span>
					</p>
				</div>
			</div>
			<div class="invoice">
				<label for="" @click="wantInvoice = !wantInvoice">
					<input id="" type="checkbox" name="checkbox" />
					<span :class="{ checkbox: true, checked: wantInvoice }"></span>
					<span class="txt">索要发票</span>
				</label>
				<invoice :invoiceShow="wantInvoice"></invoice>
			</div>
			<div class="checkFooter">
				<div class="cost">
					应付金额：&nbsp;&nbsp;
					<span>
						<span class="unit">￥</span>
						{{sumAll}}
					</span>
				</div>
				<button @click="confirmOrder()">确认订单</button>
			</div>
		</div>
	</div>
</template>

<script>
	import newaddress from '../../components/newAddress.vue';
	import selectaddress from '../../components/selectAddress.vue';
	import invoice from './invoice.vue';
	export default {
		data() {
			return {
				arrowDirection: false,
				couponV: '不使用',
				wantInvoice: false,
				checkoutList: this.$store.state.checkoutList,
				tipsShow:false
			};
		},
		beforeCreate() {
			window.scroll(0, 0)
		},
		computed: {
			selectAddressShow() {
				if (this.$store.state.userAddress.length == 0) {
					return false;
				} else {
					return true;
				}
				// return true
			},
			allNum() {
				var num = 0;
				for (let item of this.checkoutList) {
					num += Number(item.count)
				}
				return num;
			},
			sumAll() {
				let sum = 0;
				for (let item of this.checkoutList) {
					sum += Number(item.count) * Number(item.price)
				}
				return sum
			}
		},
		components: {
			newaddress,
			selectaddress,
			invoice
		},
		methods: {
			addAddress() {
				this.$store.commit('newAddCon');
				console.log(this.$store.state.dliverTo)
			},
			backToCart() {
				this.$router.push('../../cart');
			},
			confirmOrder() {
				if (this.$store.state.userAddress.length == 0) {
					this.tipsShow=true
					setTimeout(()=>{
						this.tipsShow=false
					},2000)
					return;
				} else {
					this.$router.push('../../pay')
				}
			}
		}
	};
</script>

<style lang="less">
	div.tips{
		width: 1200px;
		text-align: center;
		position: fixed;
		z-index: 10;
		top: 50px;
		transition: all .5s;
		i{
			background-image: url(../../assets/public/warning.png);
			width: 16px;
			height: 16px;
			background-position: center;
			display: inline-block;
			position: relative;
			top: 3px;
			margin-right: 8px;
			background-repeat: no-repeat;
		}
		span{
			background: #fff;
			box-shadow: inset 0px 0px 10px coral;
			padding: 20px 40px;
			font-size: 14px;
			color: coral;
			
		}
	}
	div.tipsShow{
		animation: fade 1s linear both;
	}
	@keyframes fade{
		from{
			top: 50px;
		}
		to{
			top: 120px;
		}
	}
	div.checkout {
		padding-top: 40px;

		div.backToCart {
			font-size: 13px;
			cursor: pointer;
			text-decoration: underline;
			margin-bottom: 40px;
		}

		div.address {
			div.title {
				padding-bottom: 16px;
				font-size: 18px;
			}

			div.more {
				>span {
					margin-right: 32px;
					display: inline-block;
					font-size: 13px;
					background-color: transparent;
					cursor: pointer;
				}

				button {
					>span {
						font-size: 18px;
					}

					width: 120px;
					height: 28px;
					text-align: center;
					font-size: 15px;
					background-color: #f7f7f7;
					border: 1px solid #d3d3d3;
					cursor: pointer;
					outline: none;
				}
			}
		}

		div.checkoutCon {
			margin-top: 24px;
			padding-bottom: 112px;

			div.title {
				padding-top: 24px;
				font-size: 18px;
			}

			ul.list-header {
				margin-top: 16px;
				background-color: #f7f7f7;
				border: 1px solid #f7f7f7;
			}

			ul.column-ul {
				display: flex;

				li.column {
					width: 164px;
					height: 32px;
					line-height: 32px;
					font-size: 13px;
					color: #111;
					text-align: center;

					&:first-of-type {
						width: 468px;
					}
				}
			}

			div.listBody {
				padding-top: 16px;

				>ul {
					display: flex;
					align-items: center;

					li {
						border-left: 1px solid #f7f7f7;
						box-sizing: border-box;
						font-size: 12px !important;
						height: 120px !important;
						padding: 24px 0;
						display: flex;
						align-items: center;

						&:first-of-type {
							padding: 24px 16px;
							height: 120px;
						}

						&:not(:first-of-type) {
							justify-content: center;
						}

						img.productImg {
							width: 74px;
							height: 67px;
							padding: 3px 0;
							margin-right: 8px;
							display: inline-block;
						}

						div.proInfo {
							line-height: 1;

							div.proName {
								padding-top: 7px;
								font-size: 12px;
							}

							div.proSeries {
								padding-top: 12px;
								font-size: 10px;
								color: #a9b1bb;
								text-align: left;
							}
						}
					}
				}

				div.remark {
					padding: 24px 16px;
					position: relative;
					padding: 24px 16px;
					font-size: 13px;
					border: 1px solid #f7f7f7;
					margin-top: 10px;

					input {
						width: 600px;
						height: 32px;
						box-sizing: border-box;
						padding: 0 15px;
						-webkit-appearance: none;
						background-color: #fff;
						border: 1px solid #dcdfe6;
						color: #606266;
						outline: none;
						transition: color 0.2s;

						&:focus {
							border-color: black;
						}

						&:hover {
							border-color: #c0c4cc;
						}
					}
				}

				div.coupon {
					padding: 24px 16px;
					font-size: 13px;
					border: 1px solid #f7f7f7;
					margin-top: 10px;
					display: flex;
					align-items: center;
					position: relative;

					div {
						padding-left: 13px;
						position: relative;

						input {
							height: 32px;
							width: 250px !important;
							border: 1px solid #dcdfe6;
							box-sizing: border-box;
							color: #a9b1bb;
							outline: none;
							padding: 0 30px 0 15px;
							width: 100%;
							user-select: none;
							cursor: pointer;

							&:focus {
								border-color: black;
							}

							&:hover {
								border-color: #c0c4cc;
							}
						}

						i {
							height: 32px;
							width: 25px;
							position: absolute;
							top: 0;
							right: 5px;
							background-image: url(../../assets/public/arrow_down.png);
							background-size: 12px;
							background-repeat: no-repeat;
							background-position: center;
							cursor: pointer;
						}

						.up {
							background-image: url(../../assets/public/arrow_up.png);
						}
					}

					ul.couponSelect {
						position: absolute;
						top: 57px;
						margin-top: 12px;
						left: 80px;
						border: 1px solid #e4e7ed;
						border-radius: 4px;

						li {
							border-bottom: 1px solid #e4e7ed;
							width: 248px;
							height: 14px;
							padding: 10px 0;
							text-align: center;
							color: #999;
							font-size: 14px;

							&:last-of-type {
								border: none;
							}
						}
					}

					p.accountInfo {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						right: 16px;
						text-align: right;
						line-height: 1.5;
						font-size: 11px;

						span {
							margin-left: 8px;
							font-size: 12px;
							color: #111;
							font-weight: 700;

							&.unit {
								margin-right: 2px;
							}
						}
					}
				}
			}

			div.invoice {
				padding-left: 10px;
				margin-top: 10px;

				label {
					display: flex;
					align-items: center;
					cursor: pointer;

					.checkbox {
						width: 15px;
						height: 15px;
					}

					.txt {
						padding-left: 10px;
						font-size: 14px;
					}
				}
			}

			div.checkFooter {
				margin-top: 24px;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				div.cost {
					display: flex;
					align-items: center;
					font-size: 13px;
					color: #111;
					margin-right: 16px;

					.unit {
						margin-right: 2px;
					}

					span {
						color: #111;
						font-size: 18px;
						font-weight: 700;
					}
				}

				button {
					height: 56px;
					width: 148px;
					font-size: 18px;
					letter-spacing: 2px;
					font-weight: 700 !important;
					color: #fff;
					background: #111;
					border: none;
					cursor: pointer;
				}
			}
		}

		input[type='checkbox'] {
			width: 0;
			height: 0;
		}

		span.checkbox {
			display: inline-block;
			width: 15px;
			height: 15px;
			border: 1px solid #dcdfe6;
			box-sizing: border-box;
			border-radius: 2px;
			background-color: #fff;
			position: relative;
			transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
				background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);

			&:after {
				height: 8px;
				width: 3px;
				position: absolute;
				top: 1px;
				left: 4.5px;
				border: 1px solid #fff;
				border-top: none;
				border-left: none;
				content: '';
				transform: rotate(45deg) scaleY(1);
			}
		}

		.checked {
			background-color: #111 !important;
			border-color: #111 !important;
		}
	}
</style>
