<template>
	<div class="wrap">
		<ul class="listFour">
			<slot name='four'></slot>
		</ul>
		
	</div>
</template>

<script>
	export default {
		 props:['url']
		
	}
</script>

<style lang="less">
.listFour{
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex: 1;
	li{
		list-style: none;
		margin-bottom: 30px;
		img{
			width: 585px;
			height: 500px;
		}
	}
}
</style>
