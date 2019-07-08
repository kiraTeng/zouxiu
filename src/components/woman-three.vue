<template>
	<div class="wrap">
		<ul class="listThree" >
		<slot name='three'></slot>
		</ul>
	</div>
</template>

<script>
	export default {
	 props:['url']
		
	}
</script>

<style lang="less">
.listThree{
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	li{
		list-style: none;
		margin-bottom: 30px;
		img{
			width: 380px;
			height: 492px;
		}
	}
}
</style>
