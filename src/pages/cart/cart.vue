<template>
	<div class="wrap cart">
		<div class="carCon">
			<h3>购物车({{cartNum}})</h3>
			
			<div :class="{tips:true,tipsShow:tipsShow}" v-show="tipsShow"><span><i></i>请选择商品</span></div>
			<ul class="list-header">
				<li class="column">
					<label for="" @click="allSelectFN()">
						<input id="" type="checkbox" name="checkbox"/>
						<span :class="{checkbox:true,checked:selectAll}"></span>
						<span class="txt">全选</span>
					</label>
				</li>
				<li class="column">商品</li>
				<li class="column">单价</li>
				<li class="column">数量</li>
				<li class="column">小计</li>
				<li class="column">操作</li>
			</ul>
			<div class="listBody" v-if="this.cartList.length>0">
				<ul v-for="(item,index) in cartList" :key='index'>
					<li class="column"><label for="" @click="item.checked=!item.checked"><input type="checkbox"><span :class="{'checkbox':true,'checked':item.checked==true}"></span></label></li>
					<li class="column">
						<img :src="item.proPictDir" alt="" class="goodsImg">
						 <div class="goodsDesc">
							 <div class="name">{{item.pname}}</div>
							 <p class="series">{{item.firstClassAttrName}},{{item.innerSize}}</p>
						 </div>
					</li>
					<li class="column"><span class="symbol">￥</span><span>{{item.price}}</span></li>
					<li class="column">
						<div class="numbox">
							<div :class="{minus:true,isDisable:item.count==1}" @click="minus(index)">
								<i>-</i>
							</div>
							<input type="text" :value="item.count">
							<div class="add" @click="add(index)">
								<i>+</i>
							</div>
						</div>
					</li>
					<li class="column"><span class="symbol">￥</span><span>{{item.price*item.count|numFilter}}</span></li>
					<li class="column">
						<button class="deleteBtn" @click="deleteCur(index)">删除</button>
						<button class="starBtn">加入收藏</button>
					</li>
				<div class="confirmDialog" v-if="confirmShow">
					<h4>确认要删除商品？</h4>
					<div class="btnZone">
						<button type='button' @click="confirm('yes',index)" class="yes">确定</button>
						<button type='button' @click="confirm('no',index)" class="no">取消</button>
					</div>
				</div>
				</ul>
			</div>			
			<div class="listBottom" v-if="this.cartList.length>0">
				<ul>
					<li >
						<label for="" @click="allSelectFN()">
							<input id="" type="checkbox" name="checkbox"/>
							<span :class="{checkbox:true,checked:selectAll}"></span>
							<span class="txt">全选</span>
						</label>
					</li>
					<li>
						<button @click="deleteChoose()">删除</button>
					</li>
					<li>
						<button>加入收藏</button>
					</li>
					<li>
						<button>清楚失效商品</button>
					</li>
				</ul>
				<div class="countInfo">
					已选商品：<span>{{choosePro}}</span>件，合计: <span><span class="symbol">￥</span>{{totalPrice|numFilter}}</span>
				</div>
				<button class="accountBtn" @click="account()">
					去结算
				</button>
			</div>
		</div>
		<div class="empty" v-if="this.cartList.length==0">
			<img src="../../assets/public/gouwuchekong.png" alt="">
			<p>您还没有选购商品</p>
			<button @click="goPick()" type="button">去挑选</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				allSelect: true,//是否全选
				cartList:this.$store.state.shopCarList,
				tipsShow:false,
				confirmShow:false,
			};
		},
		filters: {
		  numFilter (value) {
			// 截取当前数据到小数点后三位
			let tempVal = parseFloat(value).toFixed(3)
			let realVal = tempVal.substring(0, tempVal.length - 1)
			return realVal
		  }
		},
		beforeCreate(){
			window.scroll(0,0)
		},
		computed: {
			selectAll(){
					var temp=0;
					for(var i=0;i<this.cartList.length;i++){			
						this.cartList[i].checked==true?temp++:temp--;
					}
					if(this.cartList.length==0)return false;
					if(temp==this.cartList.length){
						this.allSelect=true;
						return true;
					}else{
						this.allSelect=false;
						return false;
					}
			},
			choosePro(){
				var num=0;
				for(let item of this.cartList){
					if(item.checked==true)num+=Number(item.count)
				}
				return num
			},
			cartNum(){
				var num=0;
				for(let item of this.cartList){
					num+=Number(item.count)
				}
				return num
			},
			totalPrice(){
				var total=0;			
				for(let item of this.cartList){
					if(item.checked==true)total+=Number(item.count)*Number(item.price);
				}
				return total;
			}
		},
		methods: {
			add(index){
				this.cartList[index].count++
				console.log(this.$store.state.shopCartList)
			},
			minus(index){				
				this.cartList[index].count==1?this.cartList[index].count=1:this.cartList[index].count--
			},
			allSelectFN(){
					this.allSelect=!this.allSelect
					for(let item of this.cartList){				
						item.checked=this.allSelect==true?true:false;
					}				
			},
			confirm(yN,index){
				if(yN=='yes'){
					this.confirmV=true;
					this.cartList.splice(index,1);
					this.confirmShow=false;
				}else{
					this.confirmShow=false
				}
			},
			deleteCur(index){			
				// if(confirm('确定删除？'))this.cartList.splice(index,1);
				this.confirmShow=true;
				// if(this.confirmV)this.cartList.splice(index,1)
			},
			deleteChoose(){
				var arr=[];
				for(let item of this.cartList){
					if(item.checked==false)arr.push(item);						
				}
				this.cartList=arr;
			},
			account(){
				var num=0;
				for(let item of this.cartList){
					if(item.checked)num+=Number(item.number)
				}
				if(num==0){
					this.tipsShow=true;
					setTimeout(()=>{
						this.tipsShow=false
					},2000)
				}else{
					this.$router.push('/checkout');
					for(let item of this.cartList){
						if(item.checked)this.$store.state.checkoutList.push(item)
					}
				}
			},
			goPick(){
				this.$router.push('/new');
			}
		}
	};
</script>
<style lang="less">
	div.tips{
		width: 1200px;
		text-align: center;
		position: fixed;
		z-index: 10;
		top: 50px;
		transition: all .5s;
		i{
			background-image: url(../../assets/public/warning.png);
			width: 16px;
			height: 16px;
			background-position: center;
			display: inline-block;
			position: relative;
			top: 3px;
			margin-right: 8px;
			background-repeat: no-repeat;
		}
		span{
			background: #fff;
			box-shadow: inset 0px 0px 15px coral;
			padding: 20px 40px;
			font-size: 14px;
			color: coral;
			
		}
	}
	div.tipsShow{
		animation: fade 1s linear both;
	}
	@keyframes fade{
		from{
			top: 50px;
		}
		to{
			top: 120px;
		}
	}
	div.confirmDialog{
		width: 400px;
		padding: 20px;
		position: fixed;
		top: 400px;
		left:50%;
		transform: translate(-50%,-50%);
		z-index: 100;
		box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #E4E7ED;
		box-shadow: 0 0 15px rgba(0,0,0,.5);
		h4{
			padding-left: 20px;
			font-size: 16px;
			font-weight: normal;
			text-align: left;
			margin-bottom: 40px;
		}
		div.btnZone{
			display: flex;
			justify-content: flex-end;
			button{
				outline: none;
				padding: 5px 10px;
				border: 1px solid #E0E0E0;
				cursor: pointer;
				border-radius: 5px;
			}
			.no{
				color: #fff;
				background: #111;
			}
			.yes{
				color: #fff;
				background-color: #409EFF;
				margin-right: 10px;
			}
		}
	}
	div.cart {
		.column {
			&:first-of-type {
				width: 80px;
			}

			&:nth-of-type(2) {
				width: 560px;
			}

			&:nth-of-type(3) {
				width: 128px;
			}

			&:nth-of-type(4) {
				width: 180px;
			}

			&:nth-of-type(5) {
				width: 108px;
			}

			&:nth-of-type(6) {
				width: 104px;
			}
		}
		h3 {
			font-size: 20px;
			padding-bottom: 40px;
			font-weight: normal;
			color: #111111;
		}
		.carCon {
			min-height: 300px;
			ul.list-header {
				display: flex;			
				border-bottom: 1px solid #f1f1f1;				
				padding-bottom: 16px;
				li {
					font-size: 14px;
					color: #606266;
					&:first-of-type {
						label {
							display: flex;
							align-items: center;
							justify-content: center;
							cursor: pointer;

							span.txt {
								cursor: pointer;
								user-select: none;
								padding-left: 10px;
							}
						}
					}

					&:not(:first-of-type) {
						text-align: center;
					}
				}
			}
			input[type='checkbox'] {
				width: 0;
				height: 0;
			}
			span.checkbox {
				display: inline-block;
				width: 15px;
				height: 15px;
				border: 1px solid #dcdfe6;
				box-sizing: border-box;
				border-radius: 2px;
				background-color: #fff;
				position: relative;
				transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
					background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);

				&:after {
					height: 8px;
					width: 3px;
					position: absolute;
					top: 1px;
					left: 5px;
					border: 1px solid #fff;
					border-top: none;
					border-left: none;
					content: '';
					transform: rotate(45deg) scaleY(1);
				}
			}
			.checked {
				background-color: #111 !important;
				border-color: #111 !important;
			}
			div.listBody {
				text-align: center;
				ul {
					display: flex;
					align-items: center;
					border-bottom: 1px solid #f1f1f1;
					.column {
						padding: 20px;
						box-sizing: border-box;
						font-size: 16px;
						display: flex;
						align-items: center;
						&:first-of-type {
							width: 40px;
							padding: 12px;
							position: relative;
							left: 2px;
						}
						&:nth-of-type(2) {																												
							overflow: hidden;
							box-sizing: content-box;
						}
						&:nth-of-type(3){
							justify-content: center;
						}
						&:nth-of-type(4){
							justify-content: center;
						}
						&:nth-of-type(5){
							justify-content: center;
						}
						&:nth-of-type(6){
							justify-content: center;
							flex-flow: wrap;
						}
						img.goodsImg {
							height: 160px;
							width: 118px;
							padding: 0 21px;
							margin-right: 80px;
							float: left;
						}
						span.symbol{
							position: relative;
							top:-2px;
						}
						div.goodsDesc{
							padding-top: 7px;							
							float: left;
							p.series{
								padding-top: 40px;
								text-align: left;
								font-size: 12px;
								color: #666;
							}
						}
						div.numbox{
							// display: flex;
							width: 128px;
							position: relative;
							>div{
								width: 34px;
								height: 38px;
								box-sizing: border-box;
								display: flex;
								border-right: 1px solid #dcdfe6;
								align-items: center;
								justify-content: center;
								user-select:none;
								position: absolute;
								cursor: pointer;
								top: 1px;
							}
							div.minus{
								left: 0;
							}
							div.add{
								right: 0;
								border-right: none;
								border-left: 1px solid #dcdfe6;
							}
							input{	
								width: 128px;
								text-align: center;
								border: 1px solid #dcdfe6;
								height: 40px;
								outline: none;
								color: #606266;
								box-sizing: border-box;
								&:focus{
									border-color: #000;
								}
								&:hover{
									border-color: gainsboro;
								}
							}
						}
						button.deleteBtn{
							    display: block;
								margin-left: auto;
								margin-right: auto;
								margin-top: 8px;
								padding-left: 8px;
								padding-right: 8px;
								font-size: 13px;
								color: #6d6c6c;
								text-decoration: underline;
								cursor: pointer;
								background-color: transparent;
								border: none;
								outline: none;
								line-height: 19px;
						}
						button.starBtn{
							    margin-top: 8px;
								width: 68px;
								height: 23px;
								line-height: 23px;
								text-align: center;
								background-color: #111;
								color: #fff;
								font-size: 13px;
								cursor: pointer;
								border: none;
								outline: none;
						}
						div.isDisable{
							color: #c0c4cc;
							cursor: not-allowed !important;
						}
					}
				}
			}
			div.listBottom{
				display: flex;
				position: relative;	
				align-items: center;
				margin-top: 24px;
				>ul{					    				
						display: flex;
						align-items: center;
						
						height: 40px;
						font-size: 14px;
					li{
						label{
							display: flex;
							align-items: center;
							margin-right: 80px;
							margin-left: 14px;
							span.txt{
								padding-left: 10px;
							}
						}
						&:not(:first-of-type){
							margin-right: 30px;
							margin-left: 10px;
						}
						&:nth-of-type(2){
							margin-left: 0;
						}
						button{
							outline: none;
							border: none;
							background: #fff;
							cursor: pointer;
							font-size: 14px;
						}
					}
				}
				div.countInfo{
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 225px;
					font-size: 12px;
					color: #333;
					span{
						margin-right: 5px;
						color: #111;
						font-size: 20px;
						span.symbol{
							display: inline-block;
							width: 11px;
						}
					}
				}
				button.accountBtn{
					position: absolute;
					right: 0;
					top: 0;
					height: 40px;
					line-height: 40px;
					width: 172px;
					font-size: 16px;
					letter-spacing: 2px;
					font-weight: 700!important;
					color: #fff;
					background: #111;
					border: none;
					cursor:pointer;
				}
			}
		}
		div.empty {
			padding-top: 48px;
			padding-bottom: 56px;
			text-align: center;
			img {
				height: 38px;
				width: 36;
				display: block;
				margin: 12px auto;
			}
			p {
				padding-top: 16px;
				font-size: 20px;
			}
			button {
				margin-top: 32px;
				width: 194px;
				height: 44px;
				line-height: 44px;
				font-size: 22px;
				color: #fff;
				text-align: center;
				background: #111;
				border: none;
				cursor: pointer;
			}
		}
	}
</style>
