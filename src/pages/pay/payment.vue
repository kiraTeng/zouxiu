<template>
	<div class="paymentWrap" v-show="pageShow" @click.self="closePage()">
		<div class="paymentCon">
			<div class="paymentConHeader">
				<span v-show="checked==false">微信扫码支付</span>
				<span v-show="checked==true">支付宝扫码支付</span>
				<i @click="closePage()"></i>
			</div>
			<div class="paymentConBody">
				<div class="orWrap">
					<img v-show="checked==false" src="../../assets/pay/wechatOrcode.png" alt="">
					<img v-show="checked==true" src="../../assets/pay/alipayOrcode.jpg" alt="">
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props:['checked',],
		computed:{
			pageShow(){
				return this.$store.state.paymentPage
			}
		},
		methods:{
			closePage(){
				this.$store.state.paymentPage=false
			}
		}
	}
</script>

<style lang="less">
	div.paymentWrap {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
		margin: 0;
		background: rgba(0,0,0,.4);
		div.paymentCon{
			width: 500px;
			position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
	background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
	div.paymentConHeader{
		padding: 20px 20px 10px 20px ;
		display: flex;
		justify-content: space-between;
		align-items: center;
		>span{
			line-height: 24px;
    font-size: 18px;
    color: #303133;
		}
		i{
			width: 25px;
			height: 25px;
			background-image: url(../../assets/pay/close.png);
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			cursor: pointer;
			&:hover{
				background-image: url(../../assets/pay/closeActive.png);
			}
		}
	}
	div.paymentConBody{
		padding: 40px 20px 70px;
		div.orWrap{
			width: 252px;
			height: 252px;
			margin: 0 auto;
			position: relative;
		}
		img{
			display: block;
			margin: 0 auto;
			width: 300px;
			height: 300px;
			    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    
		}
	}
		}
	}
</style>
