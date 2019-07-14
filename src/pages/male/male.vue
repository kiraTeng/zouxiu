<template>
	<div class="wrap male">
		<one>
			 <img  v-for="(item,index) in arr.group_list"  v-lazy='item.cover_url' class="bannner" slot='one'/>
		</one>
		<h1 class="mytitle">男士精选</h1>
		<two  >
			<img v-for="(item,index) in arr2.group_list" v-lazy='item.cover_url' slot='two'/>
			
		</two>
		<three >
			<li  v-for="(item,index) in arr3.group_list"  slot='three' >
				<img v-lazy='item.cover_url' />
			</li>
		</three>
		<four >
			<li  v-for="(item,index) in arr4.group_list" slot='four'>
				<img v-lazy='item.cover_url' />
			</li>
		</four>
		<three >
			<li  v-for="(item,index) in arr5.group_list"  slot='three' >
				<img v-lazy='item.cover_url' />
			</li>
		</three>
		
	</div>
</template>

<script>
	import one from '../../components/clobanner'
	import two from '../../components/woman-two'
	import three from '../../components/woman-three'
	import four from '../../components/woman-four'
	
    
	
	
	
	export default {
		data() {
			return {
				arr:[],
				arr2:[],
				arr3:[],
				arr4:[],
				arr5:[]
			};
		},
		components:{
			one,two,three,four
			
		},
		mounted(){
			this.getData()
		
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/Data/creatMan.json')
				.then(res=>{
					console.log(res.data.group[3])
					this.arr=res.data.group[0];
					this.arr2=res.data.group[1];
					
					this.arr3=res.data.group[2];
					this.arr4=res.data.group[4];
					this.arr5=res.data.group[5];
					
					
					
				})
			}
		}
		
	}
</script>

<style lang="less">
.male{
	background:#F2F9FE;
	.two{
		padding-top: 20px;
	}
	.mytitle{
		padding: 10px 0;
		text-align: center;
		font-weight: normal;
		font-size: 28px;
	}
}
img{
			cursor: pointer;
	
}
</style>
