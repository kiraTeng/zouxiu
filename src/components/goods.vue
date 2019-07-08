<template>
	<div>
		<section class="layout-section">
			<div class="title wrap">发现好货</div>
		</section>
		<section class="layout-section2">
			<div class="wrap">
				<div class="van-list">
					<ul class="ltem-list" v-for="(item,index) in commodity">
						<li class="item" v-for="(item2,index2) in item.item">
							<div class="item-logo">
								<img :src="item2.img" alt="">
							</div>
							<div class="item-point">{{item2.title}}</div>
							<div class="item-name">{{item2.pinpai}}</div>
							<div class="item-price">
								<span class="price-unit">¥</span>
								{{item2.value}}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				commodity: [{

						item: [{
								img: 'http://img.cms.xiu.com/1562049829776.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Polo Ralph Lauren',
								pinpai: '男士纯棉T恤',
								value: '159.0'

							},
							{
								img: 'http://img.cms.xiu.com/1562049389249.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Polo Ralph Lauren',
								pinpai: '男士纯棉T恤',
								value: '159.0'

							},
							{
								img: 'http://img.cms.xiu.com/1562048206244.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Polo Ralph Lauren',
								pinpai: '男士纯棉T恤',
								value: '159.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20180801/62057140/620571400001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Saint Laurent',
								pinpai: 'YSL方管口红 纯口红  3.8g  多色可选',
								value: '278.0'

							}
						]
					},

					{
						item: [{
								img: 'http://img.cms.xiu.com/1559789636878.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Champion',
								pinpai: '女士短袖全棉T恤19年春夏新款',
								value: '430.0'

							},
							{
								img: 'http://img.cms.xiu.com/1553952621507.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Fila',
								pinpai: '男士时尚休閒褲',
								value: '199.0'

							},
							{
								img: 'http://img.cms.xiu.com/1553950877916.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Champion',
								pinpai: '男士时尚休閒褲',
								value: '199.0'

							},
							{
								img: 'http://img.cms.xiu.com/1554101833363.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Fila',
								pinpai: '男士时尚休閒褲',
								value: '290.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.sku.xiu.com/upload/goods20150703/11510549/115105490001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Love Moschino',
								pinpai: '女士短袖卡通T恤',
								value: '798.0'

							},
							{
								img: 'http://img.cms.xiu.com/1560224520278.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Champion',
								pinpai: '男士运动休闲短裤沙滩裤19年夏季新款',
								value: '715.0'

							},
							{
								img: 'http://img.cms.xiu.com/1560236030755.png?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'EA7',
								pinpai: '男士全棉短袖T恤19夏季款',
								value: '643.0'

							},
							{
								img: 'http://img.cms.xiu.com/1560226146482.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Champion',
								pinpai: '男女时尚可调节太阳帽鸭舌帽19年夏季新款',
								value: '615.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1560241278206.png?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Gcds',
								pinpai: '休闲双肩包背包19年新款',
								value: '1312.0'

							},
							{
								img: 'http://img.cms.xiu.com/1554777611220.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Cle de Peau Beaute',
								pinpai: '钻石光感清爽型隔离霜30ml',
								value: '406.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20170227/82258060/822580600002/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Holster',
								pinpai: '女士镶饰平底人字拖 透明午夜蓝 HST205CMB',
								value: '299.0'

							},
							{
								img: 'http://img.cms.xiu.com/1555299988797.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Tom Ford',
								pinpai: '黑金黑管唇膏 10号色 cherry lush 58g',
								value: '369.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1556242638226.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Tom Ford',
								pinpai: '女士时尚银色太阳眼镜   60mm     FT0653-16Z',
								value: '2199.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20190118/62057492/620574920001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Cle de Peau Beaute',
								pinpai: '无瑕遮瑕膏 #OCHER 5G 国际版 SPF25 PA+++新版',
								value: '438.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20180801/61044950/610449500001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'SK-II',
								pinpai: 'SKII大眼眼霜 微辑因修护焕彩眼霜',
								value: '607.0'

							},
							{
								img: 'http://img.cms.xiu.com/1554974283986.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'La Mer',
								pinpai: '精华面霜soft cream 30ml',
								value: '1161.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1554862871250.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Gucci',
								pinpai: '男士时尚经典飞行员眼镜 60mm GG0014S',
								value: '2799.0'

							},
							{
								img: 'http://img.cms.xiu.com/1554966290694.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Tom Ford',
								pinpai: '女士复古个性太阳眼镜  51mm  TF541-K-55Q',
								value: '2199.0'

							},
							{
								img: 'http://img.cms.xiu.com/1554967150397.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Tom Ford',
								pinpai: '女士一体式立体鼻托太阳眼镜  53mm  TF0542-K-01A',
								value: '1999.0'

							},
							{
								img: 'http://img.cms.xiu.com/1553922699137.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Calvin Klein Jeans',
								pinpai: '男士绿色平角内裤',
								value: '205.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1556250872474.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Sulwhasoo',
								pinpai: '采淡致美气垫粉底液BB霜 #15 粉白色 SPF50+ PA+++ 2*15G',
								value: '263.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20150819/11522948/115229480001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'MaxMara Studio',
								pinpai: '植物散摆半身裙',
								value: '1823.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20171019/29000097/290000970001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: '得丽',
								pinpai: '特浓3合1白咖啡 900g 速溶咖啡粉 条装',
								value: '46.0'

							},
							{
								img: 'http://img.cms.xiu.com/1561000538073.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'VVC',
								pinpai: '防晒冰袖',
								value: '24.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.sku.xiu.com/upload/goods20171106/24020147/240201470001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Tasaisikyo',
								pinpai: '日本美浓烧赤土吹付中碟6.3英寸',
								value: '69.0'

							},
							{
								img: 'http://img.cms.xiu.com/1560323062158.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Marc Jacobs',
								pinpai: 'MARC JACOBS/马克雅克布 女士皮质红色挎包 M0013613-686',
								value: '1660.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20180801/61044937/610449370001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Guerlain',
								pinpai: 'Guerlain帝皇蜂姿赋黄金抗皱精华露50ml',
								value: '1210.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20160625/11633977/116339770001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'MaxMara',
								pinpai: '女士直筒纯棉休闲裤',
								value: '2512.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1554870284683.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Axelledesoie',
								pinpai: '深蓝色v领修身多荷叶裙摆边连衣裙',
								value: '799.0'

							},
							{
								img: 'http://img.cms.xiu.com/1555406000398.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'KOSE',
								pinpai: '抽取式玻尿酸面膜 30回',
								value: '81.0'

							},
							{
								img: 'http://img.cms.xiu.com/1559629124968.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Miu Miu',
								pinpai: '女士时尚无框云朵太阳镜MU56US',
								value: '1899.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20180801/61044951/610449510001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'SK-II',
								pinpai: 'SKII前男友面膜 十片装',
								value: '754.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1554271250849.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Levi s',
								pinpai: '男士501直筒牛仔裤复古怀旧款',
								value: '289.0'

							},
							{
								img: 'http://img.cms.xiu.com/1555486317154.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'L.K.Bennett',
								pinpai: '【EU37.5】 粗跟高跟鞋',
								value: '945.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20171215/24020334/240203340001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'LOCK&LOCK',
								pinpai: '绮丽保温杯 340ml LHC4018  黑色',
								value: '65.0'

							},
							{
								img: 'http://img.cms.xiu.com/1554692835539.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'KOSE',
								pinpai: '抽取式Q10紧致面膜 30抽 358ml',
								value: '76.0'

							}
						]
					}

					,
					{
						item: [{
								img: 'http://img.cms.xiu.com/1554189286771.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Swisse',
								pinpai: '护肝保肝片奶蓟草 解酒排毒120粒',
								value: '116.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20140523/82154135/821541350001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Holster',
								pinpai: '午夜 女凉鞋 果冻鞋 Hst110c',
								value: '229.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20171009/3I122256/3I1222560001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'VVC',
								pinpai: '女士户外遮阳帽',
								value: '91.0'

							},
							{
								img: 'http://img.sku.xiu.com/upload/goods20160108/24016918/240169180001/ori1.jpg?x-image-process=image/resize,w_750/format,webp/interlace,1',
								title: 'Fackelmann',
								pinpai: '不锈钢苹果定时器',
								value: '51.0'

							}
						]
					}



				]


			};
		}
	}
</script>

<style lang="less">
	.layout-section {
		.title {
			font-size: 36px;
			line-height: 1.5;
			padding: 10px 0px;
			text-align: center;
			color: rgb(0, 0, 0);
			background: rgb(255, 255, 255);
		}
	}

	.layout-section2 {
		.van-list {

			.ltem-list {
				display: flex;
				align-content: space-between;
				background: #fff;

				.item {
					position: relative;
					width: 300px;
					padding: 20px;
					margin-bottom: 15px;
					margin-right: 15px;
					box-sizing: border-box;
					cursor: pointer;
					&:hover{
						box-shadow: 0 5px 20px 0 hsla(0,0%,74%,.4);
					}

					.item-logo {
						img {
							width: 248px;
							height: 298px;
							margin-bottom: 20px;
						}


					}

					.item-point {
						margin-bottom: 10px;
						font-size: 18px;
						color: #111;
						box-sizing: border-box;
					}

					.item-name {
						margin-bottom: 20px;
						font-size: 16px;
						line-height: 1.4;
						color: #6d6c6c;
					}

					.item-price {
						font-size: 20px;

						.price-unit {
							margin-right: 2px !important;
						}

					}
				}
			}
		}
	}
</style>
