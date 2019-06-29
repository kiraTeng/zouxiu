<template>
	<form action="#" v-show="isShow">
		<div>
			<span>发票抬头</span>
			<div class="radioZone">
				<label for="personal" @click="personal = true">
					<input type="radio" id="personal" name="invioceUnit" value="个人" />
					<span :class="{ radioBox: true, checked: personal }"></span>
					<span class="txt">个人</span>
				</label>
				<label for="unit" @click="personal = false">
					<input type="radio" id="unit" name="invioceUnit" value="单位" />
					<span :class="{ radioBox: true, checked: personal == false }"></span>
					<span class="txt">单位</span>
				</label>
			</div>
		</div>
		<div>
			<span>发票内容</span>
			<div class="radioZone">
				<label v-for="(item, index) in invoiceCon" :key="index" @click="invoiceConChecked = index">
					<input type="radio" name="invoiceCon" :value="item" />
					<span :class="{ radioBox: true, checked: index == invoiceConChecked }"></span>
					<span class="txt">{{ item }}</span>
				</label>
			</div>
		</div>
		<div class="personal invoiceDetail" v-show="personal">
			<div>
				<label for="whosNum">收票人手机号</label>
				<input type="text" id="whosNum" />
			</div>
			<div>
				<label for="whosEmail">收票人邮箱</label>
				&nbsp;&nbsp;
				<input type="text" id="whosEmail" />
			</div>
		</div>
		<div class="unit invoiceDetail" v-show="personal==false">
			<div>
				<label for="whosUnit">纳税单位名称</label>
				<input type="text" id="whosUnit" />
			</div>
			<div>
				<label for="whosCode">纳税识别号</label>
				&nbsp;&nbsp;
				<input type="text" id="whosCode" />
			</div>
			<div>
				<label for="whosNumUnit">收票人手机号</label>
				<input type="text" id="whosNumUnit" />
			</div>
			<div>
				<label for="whosEmailUnit">收票人邮箱</label>
				&nbsp;&nbsp;
				<input type="text" id="whosEmailUnit" />
			</div>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			invoiceCon: ['体育用品', '服装', '包', '鞋', '礼品', '明细'],
			invoiceConChecked: 5,
			personal: true
		};
	},
	props: ['isShow'],
	methods: {}
};
</script>

<style lang="less" scoped>
form {
	padding-top: 10px;
	> div {
		margin: 20px 0 24px;
		display: flex;
		align-items: center;
		> span {
			font-size: 13px;
			line-height: 32px;
			padding-right: 12px;
			color: #606266;
		}
	}
	div.radioZone {
		display: flex;
		width: 80%;
		label {
			display: flex;
			align-items: center;
			position: relative;
			&:not(:first-of-type) {
				margin-left: 30px;
			}
			span.txt {
				padding-left: 10px;
				font-size: 14px;
				line-height: 14px;
			}
			span.radioBox {
				position: absolute;
				left: 0;
				width: 18px;
				height: 18px;
				border: 1px solid #dcdfe6;
				border-radius: 100%;
				background-color: #fff;
				cursor: pointer;
				display: inline-block;
				box-sizing: border-box;
			}
			span.checked {
				border-color: #111;
				background: #111;
				&:after {
					border-radius: 100%;
					background-color: #fff;
					content: '';
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					width: 6px;
					height: 6px;
				}
			}
		}
	}
	div.invoiceDetail {
		display: block;
		margin: 0;
		> div {
			display: flex;
			margin: 20px 0 24px;
		}
		label {
			display: inline-block !important;
			font-size: 13px;
			line-height: 32px;
			padding-right: 12px;
			color: #606266;
		}
		input[type='text'] {
			width: 300px;
			font-size: 13px;
			line-height: 1;
			background-color: #fff;
			border: 1px solid #dcdfe6;
			box-sizing: border-box;
			color: #606266;
			outline: none;
			padding: 0 15px;
			&:focus {
				border-color: black;
			}

			&:hover {
				border-color: #c0c4cc;
			}
		}
	}
}
</style>
