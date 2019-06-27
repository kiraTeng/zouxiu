<template>
	<div class="know">
		<p class="title">{{title}}</p>
		<slot name='customer'></slot>
	</div>
</template>

<script>
	export default{
		props:['title']
	}
</script>

<style lang="less">
	.know{
		margin-top: 35px;
		line-height: 25px;
		font-size: 14px;
		color: #111;
		.title{
		color: #c39a58;
		font-size: 18px;
		font-weight: 500;
	}
}
	
</style>