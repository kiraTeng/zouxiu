<template>
	<div class="wrap">
		
		
			<div   class="listOne">
			<!--<img  :src="url"/>-->
			
			<slot name='two'></slot>
		    </div>
	
	
	
		
	</div>
</template>

<script>
	export default {
		 props:['url']
		
	}
</script>

<style lang="less">
	.title{
		width: 1200px;
		margin: 0 auto;
		text-align: center;
		font-size: 36px;
		padding: 20px 0;
		background: #fff;
		font-weight: normal;
	}
.listOne{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	img{
		width: 585px;
		height: 500px;
	}
}
</style>
