<template>
	<div class="section">
		<one>
			
			
	     <img  v-for="(item,index) in arr0"  v-lazy='item.image' class="bannner" slot='one'/>
		
		</one>
		<h1 class="mytitle">女士精选</h1>
		<two>
			
			<img v-for="(item,index) in arr.group_list" v-lazy='item.cover_url' slot='two'/>
		</two>
		<three >
			
			<li  v-for="(item,index) in arr2.group_list"  slot='three' >
				<img v-lazy='item.cover_url' />
			</li>
		
		</three>
		<four >
			<li  v-for="(item,index) in arr3.group_list" slot='four'>
				<img v-lazy='item.cover_url' />
			</li>
		</four>
		<five>
			<li v-for="(item,index) in arr4.group_list"  slot='five'>
				<img v-lazy='item.cover_url' />
			</li>
		</five>
		<six>
			<li v-for="(item,index) in arr5.group_list" slot='six'>
				<img v-lazy='item.cover_url'/>
				
			</li>
		</six>
	</div>
</template>

<script>
	import one from '../../components/clobanner'
	import two from '../../components/woman-two'
	import three from '../../components/woman-three'
	import four from '../../components/woman-four'
	import five from '../../components/woman-five'
	import six from '../../components/woman-six'
    
	
	
	
	export default {
		data() {
			return {
				arr0:[],
				arr:[],
				arr2:[],
				arr3:[],
				arr4:[],
				arr5:[]
			};
		},
		components:{
			one,two,three,four,five,six
			
		},
		mounted(){
			this.getData(),
			this.getData2()
		
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/Data/creat.json')
				.then(res=>{
					console.log(res.data.group[3])

					this.arr=res.data.group[0];
					this.arr2=res.data.group[2];
					this.arr3=res.data.group[3];
					this.arr4=res.data.group[4];
					this.arr5=res.data.group[5];
					console.log(this.arr5)
					
				})
			},
			getData2(){
				this.$axios.get('../../../static/Data/xiu.json')
				.then(res=>{
					this.arr0=res.data.layout[0]
					
				})
				
			}
		}
		
	}
</script>

<style lang="less" scoped>
.section{
	background:rgb(246, 234, 218);
	.mytitle{
		padding: 10px 0;
		text-align: center;
		font-weight: normal;
		font-size: 28px;
	}
}
img{
			cursor: pointer;
			transition: all 1s;
	
}
img:hover{
	transform: scale(1.05);
}

</style>
