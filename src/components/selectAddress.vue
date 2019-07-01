<template>
	<ul>
		<li :class="{active:index==checked}" @click="select(item,index)" v-for="(item, index) in userInfo" :key="index">
			<div class="name">{{ item.nameV }}</div>
			<div class="num">{{ item.numV }}</div>
			<div class="address-detail">{{item.selected}}{{item.detailV}}</div>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:this.$store.state.userAddress,
				checked:0,
			};
		},
		computed:{
			
		},
		methods:{
			select(item,index){
				this.checked=index;
				this.$store.state.dliverTo=item;
				console.log(this.$store.state.dliverTo)
			}
		}
	}
</script>

<style lang="less" scoped>
	ul{
		display: flex;
	}
li {
	width: 280px;
	padding: 20px 16px;
	margin-right: 10px;
	margin-bottom: 16px;
	background-color: #fff;
	font-size: 13px;
	cursor: pointer;
	border: 2px solid transparent;
}
li.active {
	border-color: #111;
}
div.num {
	margin-top: 8px;
	margin-bottom: 16px;
}
div.address-detail {
	color: #a9b1bb;
	line-height: 1.5;
	overflow: hidden;
	white-space: nowrap;
	word-break: keep-all;
	text-overflow: ellipsis;
}
</style>
