<template>
	<div v-show="invoiceShow" class="invoiceCon">
		<p class="invoiceKind">
			<button :class="{active:chooseInvoice}" @click="chooseInvoice=!chooseInvoice">电子发票</button>
			<button :class="{active:!chooseInvoice}" @click="chooseInvoice=!chooseInvoice">增值税专用发票</button>
		</p>
		<electricinvoice :isShow='chooseInvoice'></electricinvoice>
		<taxinvoice :isShow='chooseInvoice'></taxinvoice>
	</div>
</template>

<script>
	import electricinvoice from './electricInvoice.vue'
	import taxinvoice from './taxinvoice.vue'
export default {
	data() {
		return {
			chooseInvoice:true,
		};
	},
	props: ['invoiceShow'],
	components:{
		electricinvoice,
		taxinvoice
	}
};
</script>

<style lang="less">
div.invoiceCon {
	padding-top: 20px;
	p.invoiceKind {
		display: flex;
		button.active{
			color: #fff;
    background-color: #111;
    border-color: #111;
		}
		button {
			line-height: 1;
			white-space: nowrap;
			vertical-align: middle;
			background: #fff;
			border: 1px solid #dcdfe6;
			font-weight: 500;			
			color: #606266;
			-webkit-appearance: none;
			text-align: center;
			box-sizing: border-box;
			margin: 0;
			cursor: pointer;
			padding: 7px 15px;
			border-radius: 4px 0 0 4px;
    font-size: 12px;
	outline: none;
	&:last-of-type{
		border-left: none;
		border-radius: 0 4px 4px 0;
	}
		}
	}
}
</style>
