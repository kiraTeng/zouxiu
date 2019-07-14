<template>
	<div>

		
		
		<p>{{this.$store.state.phones}}</p>
		<p>{{this.$store.state.login}}</p>

		<Banner swiperid="homeswiper123" paginationtype="bullets" myEffect="slide">
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner1.jpg" alt=""></div>
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner2.jpg" alt=""></div>
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner3.jpg" alt="" /></div>
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner4.jpg" alt="" /></div>
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner5.jpg" alt="" /></div>
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner6.jpg" alt="" /></div>
				<div slot="swiper-con" class="swiper-slide"><img src="../../assets/home/banner7.jpg" alt="" /></div>
			</Banner>
			<Recommend></Recommend>
			<Goods></Goods>
			
			

		
	</div>
</template>

<script>

	import Banner from '../../components/banner.vue'
	import Recommend from '../../components/Recommend.vue'
	import Goods from '../../components/goods.vue'

	
	export default {
		data() {
			return {

			};
		},
		beforeCreate(){
			window.scroll(0,0)
		},
		components: {
			Banner,Recommend,Goods
		},
	}

</script>

<style>

</style>
