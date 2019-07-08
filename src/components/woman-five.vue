<template>
	<div class="wrap">
		<ul class="listFive">
			<slot name='five'></slot>
		</ul>
		
	</div>
</template>

<script>
	export default {
		 props:['url']
		
	}
</script>

<style lang="less">
.listFive{
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex: 1;
	li{
		list-style: none;
		margin-bottom: 30px;
		img{
			width: 380px;
			height: 492px;
			cursor: pointer;
		}
	}
}
</style>
