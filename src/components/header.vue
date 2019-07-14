<template>
	<div>
		<div class="header wrap">
			<div class="left">
				<button @click='toRegis()'>注册</button>
				<button @click='toLogin()'>登录</button>
				<img @click='toCart()' src="../assets/public/gouwuchekong.png" alt="" >
				<span :class="{shopnum:this.$store.state.isNum}" v-show="isShow">{{allCount}}</span>
			</div>
			<img  src="../assets/public/logo.png" class="logo" alt="">
			<div class="right">
				<input type="text" placeholder="搜索商品">
				<i><img src="../assets/public/sousuo.png" alt=""></i>
			</div>
		</div>
		<div class="tab-bar-layout">
			<div class="tab-bar wrap">
				<ul class="tabs-list">
					<item title='首页' mark='home' :selected='selected' @change='getVal' class='tab'></item>
					<item title='新品' mark='new' :selected='selected' @change='getVal' class='tab'></item>
					<item title='女士' mark='female' :selected='selected' @change='getVal' class='tab'></item>
					<item title='男士' mark='male' :selected='selected' @change='getVal' class='tab'></item>
					<item title='品牌' mark='brand' :selected='selected' @change='getVal' class='tab'></item>
					<item title='走秀移动版' mark='yidong' :selected='selected' @change='getVal' class='tab'></item>
				</ul>
			</div>
			<div class="category-list-wrap">
				<div class="category-list wrap">
					<div class="category">
						<div class="category-name">女装</div>
						<ul class="sub-list">
							<li class="sub-cate  block" v-for="(item,index ) in msg" :key="index">
								<div class="sub-cate-title cate-title">{{item.title}}</div>
								<ul class="third-level-list">
									<li class="third-level" v-for="(item2,index) in item.arr" :key="index">{{item2.con}}</li>
									<!-- <li class="third-level">吊带/背心</li>
									<li class="third-level">雪纺衫</li>
									<li class="third-level">上衣</li>
									<li class="third-level">露肩衫</li>
									<li class="third-level">POLO衫</li>
									<li class="third-level">卫衣</li>
									<li class="third-level">衬衫</li>
									<li class="third-level">毛衣/针织衫</li> 
									<li class="third-level">羊绒衫</li>
									<li class="third-level">皮衣</li>
									<li class="third-level">皮草</li>
									<li class="third-level">大衣</li>
									<li class="third-level">风衣</li>
									<li class="third-level">羽绒服</li>
									<li class="third-level">棉服</li>
									<li class="third-level">西装</li>
									<li class="third-level">马甲</li>
									<li class="third-level">牛仔外套</li>
									<li class="third-level">棒球夹克</li>
									<li class="third-level">外套	</li> -->
								</ul>
							</li>
						</ul>
					</div>
					<div class="category">
						<div class="category-name">男装</div>
					</div>
					<div class="category">
						<div class="category-name">女包</div>
					</div>
					<div class="category">
						<div class="category-name">男包</div>
					</div>
					<div class="category">
						<div class="category-name">女鞋</div>
					</div>
					<div class="category">
						<div class="category-name">男鞋</div>
					</div>
					<div class="category">
						<div class="category-name">妆品</div>
					</div>
					<div class="category">
						<div class="category-name">女士配饰</div>
					</div>
					<div class="category">
						<div class="category-name">男士配饰</div>
					</div>
					<div class="category">
						<div class="category-name">腕表</div>
					</div>
					<div class="category">
						<div class="category-name">生活</div>
					</div>
					<div class="category">
						<div class="category-name">婴童</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import item from './item';
	export default {
		data() {

			return {
				msg: [],
				isNum:false,
				selected:'home' //当前选中 current
			};
		},
		components: {
			item
		},
		methods: {
            getVal(val){
            	this.selected = val;
            },
            toCart(){
            	this.$router.push('../../cart')
            },
            toRegis(){
            	this.$router.push('../../register')
            },
            toLogin(){
            	this.$router.push('../../login')
            }
		},
		computed:{
			allCount(){
				var count = 0
				this.$store.state.shopCarList.forEach((item,index)=>{
					count += item.count
					console.log(count)
				})
				return count
			},
			isShow(){
				if(this.$store.state.shopCarList.length==0){
					return false;
				}else{
					return true;
				}
			}
		}
	};
</script>

<style lang="less">
	.header {
		height: 78px;
		position: relative;


		.left {
			display: flex;
			align-items: center;
			position: absolute;
			left: ;
			top: 10px;
			box-sizing: border-box;
			img {
				width: 18px;
				height: 18px;
				margin-left: 16px;
				/*padding-right: 16px;*/
				box-sizing: border-box;
				position: relative;
				z-index: 10;
				cursor: pointer;
			}



			button {
				padding-left: 16px;
				padding-right: 16px;
				height: 16px;
				line-height: 16px;
				font-size: 14px;
				color: #333;
				box-sizing: border-box;
				background: transparent;
				cursor: pointer;
				outline: none;
				border: none;
				border-right: 1px solid #bbb;


			}
		}

		.right {
			position: absolute;
			right: 30px;
			top: 10px;
			border: 1px solid #c39a58;
			box-sizing: border-box;

			input {
				width: 300px;
				height: 28px;
				padding-left: 8px;
				font-size: 14px;
				box-sizing: border-box;
			}

			i {
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				font-size: 14px;
				width: 33px;
				line-height: 28px;
				background: #c39a58;
				text-align: center;
				color: #fff;
				cursor: pointer;

				img {
					width: 14px;
					height: 14px;

				}
			}
		}

		.logo {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			height: 36px
		}
	}

	.tab-bar-layout {
		background: #000000;

		.tab-bar {


			.tabs-list {
				display: flex;
				justify-content: center;
				align-items: center;

				.tab {
					position: relative;
					padding: 12px 15px;
					margin: 0 20px;
					cursor: pointer;
					color: #fff;
					font-size: 14px;
					border-bottom: 2px solid transparent;

					&:hover {
						color: #c39a58;
						border-bottom: 2px solid #c39a58;
					}
				}
			}

		}

		.category-list-wrap {
			background-color: #f7f7f7;
			border-bottom: 1px solid #fff;
			height: 45px;

			.category-list {
				height: 44px;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;

				.category {
					position: relative;

					.sub-list {

						position: absolute;
						left: 0;
						top: 44px;
						display: none;
						flex-wrap: wrap;
						align-content: baseline;
						background-color: #fff;
						z-index: 3;
						border: 1px solid #d7d7d7;
						width: 450px;
						padding: 20px 10px;
						min-height: 200px;

						/* opacity: 0;
						transform: translateY(-10000px);
						transition: opacity .3s ease-in-out; */
						.sub-cate {
							margin-right: 30px;

							.block {
								width: 100%;
							}

							.sub-cate-title {
								padding-top: 10px;
								padding-bottom: 10px;
								font-size: 14px;
								cursor: pointer;

								.cate-title {
									font-weight: 700;
								}
							}

							.third-level-list {
								display: flex;
								flex-wrap: wrap;
								width: 100%;
								padding-top: 10px;
								padding-bottom: 10px;

								.third-level {
									margin-bottom: 10px;
									font-size: 14px;
									color: #333;
									padding-right: 10px;
									margin-right: 10px;
									border-right: 1px solid #d7d7d7;
									cursor: pointer
								}
							}
						}
					}

					.category-name {
						box-sizing: border-box;
						height: 44px;
						line-height: 44px;
						font-size: 14px;
						color: #111;
						min-width: 60px;
						padding-right: 10px;
						padding-left: 10px;
						cursor: pointer;
						text-align: center;
					}
				}
			}
		}
	}
	
	/*购物车数量样式*/
	.left{
		position: relative;
		.shopnum{
			position: absolute;
			top: 0px;
			right: -30px;
		    height: 15px;
		    display: block;
		    text-align: center;
		    width: 20px;
		    font-size: 12px;
		    background-color: #e93b37;
		    color: #fff;
		    border-radius: 5px;
		    
	    }
	}
	
</style>
