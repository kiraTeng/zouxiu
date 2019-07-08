<template>
	<div>
		<div>
			<div class="wrap tuijiantitle">尖货推荐</div>
		</div>
		<section class="layout-section">
			<div class="topic-image-list wrap">
				<ul class="img-list" v-for="(item,index) in datalist">
					<li class="img-wrap" v-for="(item2,index2) in item.item"> 
					<img :src="item2.img" alt="">
					</li>
					
				</ul>

			</div>
		</section>
		<div>
			<div class="wrap tuijiantitle2">特惠推荐</div>
					<section class="layout-section">
				<div class="topic-image-list wrap">
					<ul class="img-list" >
						<li class="img-wrap"> 
						 <img src="../assets/home/tuihui01.jpg" alt="" style="width: 585px; height: 292px;">
						</li>
						<li class="img-wrap" > 
						 <img src="../assets/home/tuihui02.jpg" alt=""  style="width: 585px; height: 292px;">
						</li>
						
					</ul>
			
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				datalist: [{
						item: [{
								img: 'http://img.cms.xiu.com/1562031214291.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1561517031128.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1561517046516.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							}
						]
					},
					{
						item: [{
								img: 'http://img.cms.xiu.com/1561517063576.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1561517086373.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1561517115296.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							}
						]
					},
					{
						item: [{
								img: 'http://img.cms.xiu.com/1557996385885.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1558079587376.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1559198658728.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							}
						]
					},
					{
						item: [{
								img: 'http://img.cms.xiu.com/1559198724908.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1556425688064.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1556432945616.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							}
						]
					},
					{
						item: [{
								img: 'http://img.cms.xiu.com/1556433404572.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1558079565103.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1556433455893.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							}
						]
					},
					{
						item: [{
								img: 'http://img.cms.xiu.com/1562037632121.jpg?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1559199251800.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							},
							{
								img: 'http://img.cms.xiu.com/1559199268118.png?x-image-process=image/resize,w_600/format,webp/interlace,1'
							}
						]
					}



				]
			};
		}
	}
</script>

<style lang="less">
	.tuijiantitle {
		text-align: center;
		font-size: 36px;
		line-height: 1.5;
		padding: 40px 0 10px 0;
		box-sizing: border-box;
	}
	.tuijiantitle2{
		text-align: center;
		font-size: 36px;
		line-height: 1.5;
		box-sizing: border-box;
		padding: 10px 0px;
	}

	.img-list {
		display: flex;
		align-content: space-between;
        
		.img-wrap {
			flex: 1;
			margin-right: 10px;
			margin-bottom: 10px;
			transition: all .3s ease-in-out;
			opacity: .8;
			&:hover{
				box-shadow: 0 5px 20px 0 hsla(0,0%,74%,.4);
				transform: scale(1.05);
				opacity: 1;
			}
		}
	}
	
</style>
