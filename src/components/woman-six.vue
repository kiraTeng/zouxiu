<template>
	<div class="wrap">
		<ul class="listSix">
			<slot name='six'></slot>
		</ul>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
//		mounted(){
//			this.getData()
//		},
//		methods:{
//			getData(){
//				this.$axios.get('../../static/data/creat.json')
//				.then(res=>{
//					console.log(res.data.group[3])
//					this.arr=res.data.group[5]
//				})
//			}
//		}
	}
</script>

<style lang="less">
.listSix{
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
