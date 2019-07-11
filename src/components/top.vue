<template>
	<div>
		<span v-show="btnflag" @click="backTop">
			<img src="../assets/public/top.png" alt="">
		</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				btnflag: false
			};
		},
		mounted() {
				window.addEventListener('scroll', this.scrollToTop)
			},
			destroyed() {
				window.removeEventListener('scroll', this.scrollToTop)
			},
		methods: {
			backTop() {
				let that = this
				let timer = setInterval(() => {
					let ispeed = Math.floor(-that.scrollTop / 5)
					document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
					console.log(ispeed)
					if (that.scrollTop === 0) {
						clearInterval(timer)
					}
				}, 16)
			},
			scrollToTop() {
				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 800) {
					that.btnflag = true
				} else {
					that.btnflag = false
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	span {
		background: #000;
		position: fixed;
		bottom: 30px;
		right: 50px;
		z-index: 999;
		width: 45px;
		height: 46px;
		border-radius: 50%;

		img {
			width: 39px;
			height: 36px;
			padding-left: 7px;
			padding-top: 9px;
			box-sizing: border-box;
		}
	}
</style>
