<template>
	<div class="box">
		<div class="product_box">
		<!--头部导航盒子-->
			<ul class="nav_header">
				<li>走秀首页</li>
				<li class="right_icon">></li>
				<li>{{dispName}}</li>
				<li class="right_icon">></li>
				<li>{{obj.pname}}</li>
			</ul>
			<!--产品详细信息-->
			<div class="product_describe">
				<div class="product_img">
					<div class="big_img"">
						<pic-zoom :url='imgUrlList[indexImg] ' :scale="3"></pic-zoom>
					</div>
					<div class="small_img">
						<span class="before"  ><img src="../../assets/detail/before.png"/></span>
						<div class="box">
						<ul>
							<li v-for="(item,index) in imgUrlList" :key="index" @mouseover="showImg(index)" :class="{border:index==isBorder}"><img :src='item'></li>
						</ul>
						</div>
						<span class="after"  ><img src="../../assets/detail/after.png"/></span>
					</div>
				</div>
				<div class="product_info">
					<!--头部标题-->
				   <p class="product_name">{{obj.pname}}</p>
				  <!-- 品牌和商品编号-->
				  <ul class="brand">
				  	<li>品牌： &nbsp;{{brandName}}</li>
				  	<li class="code">商品编号：&nbsp;{{productId}}</li>
				  </ul>
				  <!--产品价格显示-->
				   <div class="price"><span class="symbol">￥</span>{{obj.price}}<span class="discount">￥{{originPrice}}</span></div>
                  <!--产品具体细节-->
				  <ul class="product_detail">
				  	<li>
				  		<p class="title send">发货地:</p>
				  		<p class="region"><span>{{region}}</span><span>预计7-14个工作日送达</span></p>
				  	</li>
				  	<li>
				  		<p class="title">税&nbsp;&nbsp;&nbsp;费:</p>
				  		<p class="shop">商家承担</p>
				  	</li>
				  	<li>
				  		<p class="title">颜色:</p>
				  		<p><span :class="{parent:true,choose:true}">{{obj.firstClassAttrName}}</span></p>
				  	</li>
				  	<li>
				  		<p class="title">尺码:</p>
				  		<p><span :class="{parent:index==isBlack,choose:true}" v-for="(item,index) in skuAndPriceList" @click="black(index)" ref="menuItem" >{{item.subClassAttrName}}</span></p> 
				  </li>
				  	<li>
				  		<p class="title">购买数量:</p>
				  		<div :class="{black:isEnter,input:true}">
				  			<input type="text" v-model="count" @focus="enterFocus()" @blur="enterBlur()"/>
				  			<div @click="reduce"  @mouseenter="mouseEnter()"  @mouseleave="mouseLeave()"  :class="{reduce:true,disable:isDisable}">-</div>
				  			<div class="add" @click="add"  @mouseenter="mouseEnter()"  @mouseleave="mouseLeave()">+</div>
				  		</div>
				  	</li>
				  </ul>
				 <!-- 售后服务-->
				 <ul class="service">
				 	<li><img src="../../assets/detail/shop.png" class="store"/>由提供</li>
				 	<li><i class="fa fa-user-o"></i>由走秀网提供售后服务</li>
				 </ul>
				 <!--购买和购物车-->
				 <div class="shopcar">
				 	<button>立即购买</button>
				 	<button @click="shopcar">加入购物车</button>
				 </div>
				 <!--电话订购-->
				 <p class="phone"><span>电话订购: 400-888-4499</span>(9:00~19:00)</p> 
				<!-- 正品保证-->
				<ul class="shou">
					<li><img src="../../assets/detail/1.png"/>正品保障</li>
					<li><img src="../../assets/detail/2.png"/>七天退货</li>
					<li><img src="../../assets/detail/3.png"/>权威质检</li>
					<li><img src="../../assets/detail/4.png"/>收藏商品</li>
					<li><img src="../../assets/detail/4.png"/>收藏品牌</li>
				</ul>
				</div>
			</div>
				<ul class="nav_detail">
					<li :class="{tab:index==!isShow}" @click="show(index)">商品详情
					</li>
					<li :class="{tab:index==isShow}" @click="show(index)">商品评价
					</li>
			   </ul>
				<!--产品细节图-->
				<div class="showdetail" v-show="isActive">
					<!--产品参数-->
					<div class="title_product">商品参数</div>
			            <ul class="one">
							<li>材质(主面料):棉</li>
							<li>规范颜色：{{obj.firstClassAttrName}}</li>
							<li>领型: 圆领</li>
							<li>衣门襟: 套头</li>
		                </ul>
		               <ul class="one">
							<li>衣长: 标准</li>
							<li>服装风格: 休闲</li>
							<li>服装流行元素: 纯色</li>
							<li>服装厚薄: 薄款</li>
		                </ul>
		                <ul class="one">
							<li>服装版型: 常规型</li>
							<li>袖长: 短袖</li>
		                </ul>
					<productdetail></productdetail>
					  <div v-html="productDetail" class="detailImg"></div>
					<Customer title='发票说明:'>
				    	<div class="content" slot='customer'>
				    		<p>1. 若您购买的是【国内发货】商品，商家有义务按照买家实际支付现金，开具正规发票，相关税收应按国家相关规定由商家自行承担。</p>
				    		<p>2. 若您购买的是【海外直邮】、【海外发货】或【国内保税仓发货】商品，商家均为海外商家，暂时无法按照国内法律规定提供购物发票。</p>
				    	</div>
				    </Customer>
				    <Customer title='价格说明:'>
				    	<div class="content" slot='customer'>
				    		<p>走秀价：指商家在走秀网开放平台销售商品时的售价。</p>
				    		<p>限时抢购价、特卖价：指商家在促销活动中的售价。</p>
				    		<p></p>
				    	</div>
				    </Customer>
				</div>
				<!--商品评价-->
				<div class="judgedetail" v-show="!isActive"></div>	
		</div>
	</div>
</template>
productParameter
<script>
	import PicZoom from 'vue-piczoom'
	import productdetail from '../../components/productDetail'
	import Customer from '../../components/customer'
	export default{
		components:{
			PicZoom,Customer,productdetail	
		},
		data () {
	      return {
	      	isDisable:true, //产品数量为1时 不可点击
	      	isEnter:false,//数量点击加减
	      	isBorder:0,
	      	indexImg:0,//大图索引
	      	index:0,
	      	isShow:true,
	      	isActive:true,
	      	arr:[],
	      	obj:{
	      		innerSize:'', //选中尺寸内容
	      		count:1,//购物车数量
	      		pname: '',
	            price:'',
	            firstClassAttrName:'',//颜色
	            proPictDir:''
	      	},
	      	isBlack:0, //尺寸被选中
	      	count:1,//购物车数量
	        dispName:'',
	        proPictDir:'',
	        region:'',
	        brandName:'',
	        firstClassAttrName:'',//颜色
	        skuAndPriceList:'',//产品尺寸
	        imgUrlList:'',//轮播动态细节图
	        productDetail:''  //产品详情图
	      }
    },
		mounted(){
			this.getData()
		},
		methods:{
			getData(){
				 this.obj.pname=this.$route.query.pname; //商品名称
				 this.obj.price=this.$route.query.price; //商品折扣价
				 this.originPrice= this.$route.query.originPrice; //商品原价
				 this.productId = this.$route.query.productId;//商品编码
				 this.region = this.$route.query.region;//发货地
				 this.brandName = this.$route.query.brandName;//商品名称
				 this.obj.proPictDir = this.$route.query.proPictDir;//商品主图片
				 this.dispName = this.$route.query.dispName;//商品分类
				 this.obj.firstClassAttrName = this.$route.query.firstClassAttrName;//颜色
				 this.skuAndPriceList = this.$route.query.skuAndPriceList;//产品尺寸
				 this.imgUrlList = this.$route.query.imgUrlList;//轮播动态细节图
				 this.productDetail = this.$route.query.productDetail;//产品详情图
			},
			shopcar(){
				var listdetail = this.arr.push(this.obj)
				console.log(listdetail,this.obj)
				window.localStorage.setItem('listdetail',JSON.stringify(listdetail))
				
				/*this.obj={
	      		innerSize:'', //选中尺寸内容
	      		count:1,//购物车数量
	      		pname: '',
	            price:'',
	            firstClassAttrName:'',//颜色
	            proPictDir:''
	      	}*/
				/*var obj = {'name':this.pname,'price':this.price,'imgUrl':this.proPictDir,'color':this.firstClassAttrName,'count':this.count,'size':this.innerSize,'checked':true}
				window.localStorage.setItem('detailData1',JSON.stringify(obj))*/
			},
			reduce(count){
				this.count--
				if(this.count<=1){
					this.count=1
				}
			},
			add(count){
				this.count++
			},
			black(index){//获取点击尺码选项时的文字内容
				this.isBlack=index
				let getMenuText = this.$refs.menuItem[index].innerText;
				this.innerSize=getMenuText
			},
			show(index){//商品详情和商品评价切换
				this.isShow = !this.isShow //详情和切换样式
				this.isActive = !this.isActive //详情和评价切换内容
			},
			showImg(index){ //移入小图 显示大图
				this.indexImg = index
				this.isBorder = index
			},
			mouseEnter(){
				this.isEnter=true
				if(this.count=1){
					console.log(1)
					this.isDisable = false
				}
			},
			mouseLeave(){
				this.isEnter=false
			},
			enterFocus(){
				this.isEnter=true
			},
			enterBlur(){
				this.isEnter=false
			}
		}
	}
</script>

<style lang="less">
	/*轮播图*/
	.swiper-slide{
		height: 110px !important;
  		width: 105px !important;
  		float: left;
  		img{
  			height: 110px;
  		width: 105px;
  		}
	}
	.black{
		border: solid 1px black !importamt;
	}
	.show{height: 900px;
		width: 100%;
		margin-bottom: 50px;
	}
	.detailImg{
		text-align: center;
		padding-top: 80px;
	}
 /*<!--头部导航盒子-->*/
   .box{
   	width: 100%;
   	.product_box{
   		width: 1200px;
   		margin: 0 auto;
   		.nav_header{
   			display: flex;
   			align-items: center;
   			font-size: 14px;
   			margin-top: 15px;
   			margin-bottom: 15px;
   			li{
   				list-style: none;
   				color: #333333;
   				margin-right: 10px;
   			}
   			.right_icon{
   				color: #CECBD7;
   			}
   		}
   	}
   }
   /*  产品信息具体细节-第二部分*/
 .product_describe{
 	width: 100%;
 	height: 800px;
 	>div{
 		float: left;
 		box-sizing: border-box;
 		margin-right: 30px;
 	}
 	.product_img{
 		width: 580px;
 		height: 700px;
 	}
 	.product_info{
 		width: 550px;
 		height: 610px;
 	}
 }
 /* 左盒子样式*/
  .product_img{
  	.big_img{
  		width: 580px;
  		height: 580px;
  		box-sizing: border-box;
  		text-align: center;
  		overflow: hidden;
  		img{
  			height: 580px;
  		  width: 580px;
  		}
  	}
  	.small_img{
  		margin-top: 10px;
  		width: 580px;
  		height: 110px;
  		box-sizing: border-box;
  		position: relative;
  		>span{
  			position: absolute;
  			top: 50%;
  			transform: translateY(-50%);
  		}
  		.after{
  			position: absolute;
  			right: 0;
  		}
  		ul{
  			overflow:hidden;
  			padding: 0 20px;
  			box-sizing: border-box;
  			li{
  				list-style: none;
  				float: left;
  				height: 90px;
  				width: 90px;
  				text-align: center;
  				margin-right: 5px;
  				box-sizing: border-box;
  				overflow: hidden;
  				img{
  					height: 85px;
  					width: 85px;
  					cursor: pointer;
  					vertical-align: middle;
  				}
  			}
  		}
  	}
  }


  /*右盒子样式*/
 /*颜色和尺寸被选中样式*/
     .parent{
     	color: #111111 !important;
        border: solid 1px #111111 !important;
        position: relative;
        &:after{
        	              content: '';
    					position: absolute;
    					right: -6px;
    					bottom: -6px;
    					width: 12px;
    					height: 12px;
    					background: #111111;
    					transform: rotate(-45deg);
        }
     }
  /*颜色尺寸被选中样式*/
    .product_info{
    	.product_name{
    		color: #111;
    		white-space: nowrap;
    		text-overflow: ellipsis;
    		word-break: keep-all;
    		font-size:16px;
    	}
    	.brand{
    		padding-top:20px;
    		padding-bottom: 10px;
    		border-bottom: 1px solid #d3d3d3;
    		cursor: pointer;
    		overflow: hidden;
    		font-size: 14px;
    		>li{
    			list-style: none;
    			float: left;
    			color: #646464;
    		}
    		.code{
    			float: right;
    		}
    	}
    	.price{
    		padding-bottom: 20px;
    		padding-top: 20px;
    		color: #111;
    		font-size: 22px;
    		.symbol{
    			font-size: 14px;
    		}
    		.discount{
    			color: #666;
    			font-size: 14px;
    			margin-left: 20px;
    			text-decoration: line-through;
    		}
    	}
    	.product_detail{
    		width: 100%;
    		>li{
    			list-style: none;
    			width: 100%;
    			height: 50px;
    			line-height: 50px;
    			display: flex;
    			font-size: 14px;
    			.title{
    				font-weight: 700;
    			}
    			.region{
    				color: #c39a58;
    				display: inline-block;
    				margin-left: 40px;
    				span:nth-child(2){
    					margin-left: 30px;
    				}
    			}
    			.shop{
    				color: #333;
    				margin-left: 45px;
    			}
    			.choose{
    				height: 30px;
    				width: 50px;
    				line-height: 30px;
    				display: block;
    				border: 1px solid #CDCDCD;
    				text-align: center;
    				cursor: pointer;
    				margin-top: 10px;
    				margin-right: 16px;
    				float: left;
    				position: relative;
    				overflow: hidden;
    				
    			}
    			.choose:first-child{
    				margin-left: 55px;
    			}
    		}
    		.input{
    			margin-left: 28px;
    			height: 40px;
    			line-height: 40px;
    			text-align: center;
    			width: 128px;
    			border: solid 1px #DCDFE6;
    			position: relative;
    			box-sizing: border-box;
    			overflow: hidden;
    			input{
    				position: absolute;
    				top: -1px;
    				left: 0;
    				height: 40px;
    				width: 128px;
    				border: none;
    				border: dashed 1px blue;
    				padding-left: 55px;
    				padding-right: 50px;
    				box-sizing: border-box;
    				outline:none;
    				overflow: hidden;
    			}
    		.reduce{
    			position: absolute;
    			left: 0;
    			top:0;	
    			width: 32px;
    			height: 40px;
    			line-height: 40px;
    			text-align: center;
    			color: #c0c4cc;
    			box-sizing: border-box;
    			font-size: 18px;
    			background-color: #f7f7f7;
    			border-right: solid 1px #dcdfe6;
    			cursor: pointer;
    		}
    		.add{
    			position: absolute;
    			right: 0;
    			top:0;
    			color: #959899;
    			width: 32px;
    			height: 40px;
    			line-height: 40px;
    			font-size: 18px;
    			background-color: #f7f7f7;
    			border-left: solid 1px #dcdfe6;
    			cursor: pointer;
    		}
    	}
      }
    }
    
    
    /*售后服务*/
   .service{
   	overflow: hidden;
   	margin-top: 15px;
   	li{
   		float: left;
   		list-style: none;
   		margin-right: 26px;
   		font-size: 14px;
   		i{
   			color: #c39a58;
   			font-size: 20px;
   			margin-right: 5px;
   			vertical-align: middle;
   		}
   	}
   }
   
  /* 立即购买和加入购物车*/
  .shopcar{
  	margin-top: 15px;
  	button{
  		height: 50px;
  		width: 200px;
  		border: none;
  		margin-right: 15px;
  		line-height: 50px;
  		text-align: center;
  		color: #fff;
  		font-size: 14px;
  	}
  	button:first-child{
  		background-color: #000;
  	}
  	button:last-child{
  		background-color: #c39a58;
  	}
  }
  
  /*电话订购*/
   .phone{
   	 margin-top: 20px;
   	 color: #333333;
   	 font-size: 14px;
   	 span{
   	 	color: #c39a58;
   	 	padding-right: 15px;
   	 }
   }
   
   /*收藏商品*/
  .shou{
  	overflow:hidden;
  	margin-top:25px;
  	font-size:14px;
  	li{
  		float:left;
  		list-style:none;
  		margin-right:25px;
  		img{
  			vertical-align:middle;
  			margin-right:8px;
  		}
  	}
  }
  
  /*商品详情和商品评价*/
  .nav_detail{
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	margin-bottom: 50px;
  	li{
  		list-style: none;
  		margin-right: 140px;
  		cursor: pointer;
  		font-size: 15px;
  		position: relative;
	  		padding-bottom: 15px;
	  		color: #666;
	  		
  		a{
  			color: #666;
	  		
	  		text-decoration: none;
  		}
  	}
  	li.tab{
  		font-size: 18px;
  		color: #111;
  		font-weight: 700;
  		&:before{
  			position: absolute;
  			content: '';
  			left: 10px;
  			right: 10px;
  			bottom: 0;
  			height: 2px;
  			background-color: #111;
  			z-index: 100;
  		}
  	}
  }
  
 /* 图片细节*/
  .imgDetail{
  	width: 100%;
  	margin-top: 30px;
  	text-align: center;
  }
  /*商品评价*/
 .judgedetail{
 	height: 300px;
 	width: 100%;
 	text-align: center;
 }
 /*鼠标移入数量加减input增加边框*/
  .black{
  	border: solid 1px #111 !important;
  }
/* 鼠标移入小图时边框样式*/
   .border{
   	  border: solid 1px #111111 ;
   }
  /*当产品数量等于1时减号不可添加*/
    .disable{
    	cursor: not-allowed;
    }
 /* 店铺图片大小设置*/
  .store{
  	width: 22px;
  	vertical-align: middle;
  	margin-right: 5px;
  }
  /*商品参数*/
 .title_product{
		padding-bottom: 45px;
		font-size: 16px;
		font-weight: 700;
	}
	.one{
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		>li{
			width: 275px;
			font-size: 14px;
			color: #333;
			list-style: none;
		}
	}
 </style>