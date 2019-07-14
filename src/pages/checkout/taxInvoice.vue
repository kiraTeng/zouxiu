<template>
	<form v-show="isShow==false">
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
		<div>
			<label for="taxUnit">
				纳税单位名称
			</label>
			<input type="text" id="taxUnit">
		</div>
		<div>
			<label for="taxName">
				纳税识别号
			</label>
			<input type="text" id="taxName">
		</div>
		<div>
			<label for="taxAddr">
				纳税单位注册地址
			</label>
			<input type="text" id="taxAddr" placeholder="请输入纳税单位注册地址">
		</div>
		<div>
			<label for="taxPhone">
				纳税单位注册地址
			</label>
			<input type="text" id="taxPhone" placeholder="请输入纳税单位电话号码">
		</div>
		<div>
			<label for="taxPhone">
				纳税单位开户行名称
			</label>
			<input type="text" id="taxPhone" placeholder="请输入纳税单位开户行名称">
		</div>
		<div>
			<label for="taxPhone">
				纳税单位开户账号
			</label>
			<input type="text" id="taxPhone" placeholder="请输入纳税单位开户账号">
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				invoiceCon: ['体育用品', '服装', '包', '鞋', '礼品', '明细'],
				invoiceConChecked: 5,
			};
		},
		props:['isShow']
	}
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
	div{
		>label{
			font-size: 13px; 
    line-height: 32px;
	color: #606266;
	padding-right: 12px;
		}
		input[type=text]{
			width: 300px;
			font-size: 13px;
			line-height: 1;
			height: 32px;
			background-color: #fff;
			border: 1px solid #dcdfe6;
			box-sizing: border-box;
			color: #606266;
			outline: none;
			padding: 0 15px;
			&::-webkit-input-placeholder{
				color: #dcdfe6;
			}
			&:focus {
				border-color: black !important;
			}
		
			&:hover {
				border-color: #c0c4cc;
			}
		}
	}
}
</style>
