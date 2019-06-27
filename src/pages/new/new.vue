<template>
	<div class="wrap">
		<p class="topic_title">每日上新</p>
	<!--瀑布流开始-->
		<waterfall :width="itemWidth" :gutterWidth="gutterWidth"  :data="data"  @loadmore="loadmore">
		  <template >
				<div class="van_list" id="list">
					<ul class="item_list">
						<li v-for="(item,index) in data" :key='index' @click="toDetail(item)" :class="{item:true,shadow:index==isShadow}" @mouseover="enter(index)">
						    <img v-if="item.proPictDir" :lazy-src="item.proPictDir" alt="加载错误"  />
							<p class="point">{{item.brandNameEn}}</p>
							<p class="name">{{item.productName}}</p>
							<p class="price"><span>￥</span>{{item.cuPrice}}</p>
						</li>
					</ul>
				</div>
		   </template >
		</waterfall>
	<!--瀑布流结束-->
	</div>
</template>

<script>
   import waterfall from 'vue-waterfall2/waterfall'
	export default {
	    components:{
	    	waterfall
	    },
		data() {
			return {
				isShadow:-1,
				data:[]
			}
		},
		computed:{
          itemWidth(){  
                return  document.documentElement.clientWidth
          },
          gutterWidth(){
                return  document.documentElement.clientWidth
          }
        },
		mounted(){
			this.getData()
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/Data/detail/new.json')
				.then(res=>{
					this.data = res.data.data.esProducts
				}).catch(err=>{
					console.log(err)
				})
			},
			loadmore(index){//滚动底部触发
				console.log(333)
                this.data = this.data.concat(this.data)
          },
          enter(index){
          	 this.isShadow = index
          },
          toDetail(item){//列表数据传参到详情页
          	 this.$router.push({
          	 	path:'/detail',
          	 	query:{
          	 		pname: item.productName,
          	 		price: item.cuPrice,
          	 		originPrice: item.originalPrice,
          	 		productId: item.productId,
          	 		region: item.deliveryRegion,
          	 		brandName: item.brandName,
          	 		proPictDir: item.proPictDir,
          	 		dispName: item.dispNames[0],
          	 		firstClassAttrName:item.firstClassAttrName, //颜色
          	 		productDetail:item.productDetail, //产品详情细节图
          	 		imgUrlList:item.imgUrlList,//轮播动态细节图
          	 		skuAndPriceList:item.skuAndPriceList//产品尺寸
          	 	}
          	 })
          }
		}
	}
</script>

<style lang="less">
	/*盒子边框阴影*/
	.shadow{
		box-shadow: 5px 5px 7px 7px rgba(0,0,0,.05);
	}
   .topic_title{
	   	font-size: 30px;
	   	line-height: 1.5;
	   	padding: 20px;
	   	text-align: center;
	   	color: rgba(0,0,0);
	   	background: rgb(255,255,255);
   }
   .item_list{
   	overflow: hidden;
   	background-color: #fff;
   	width: 100%;
   	padding: 5px 10px;
   	box-sizing: border-box;
   	.item{
   		position: relative;
   		width: 290px;
   		height: 510px;
   		float: left;
   		padding: 20px;
   		margin-bottom: 5px;
   		margin-right: 5px;
   		box-sizing: border-box;
   		cursor: pointer;
   		list-style:none;
   		>img{
   			display: block;
   			width: 100%;
   			height: 350px !important;
   			margin-bottom: 20px;
            cursor: pointer;
   		}
   		.point{
   			margin-bottom: 10px;
   			font-size: 18px;
   			color: #111;
   		}
   		.name{
   			margin-bottom: 10px;
   			font-size: 16px;
   			line-height: 1.4;
   			color: #6d6c6c;
   		}
   		.price{
   			font-size: 20px;
   			span{
   				margin-right: 2px !important;
   			}
   		}
   	}
   }
</style>
