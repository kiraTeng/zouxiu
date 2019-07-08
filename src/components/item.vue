<template>
	<div @click.prevent="fn" :class="{'active':bol}" >
		
			<div >{{title}}</div>
		
	</div>
</template>

<script>
	export default {
		//接收父传递过来的标题
		props: ['title', 'mark', 'selected'],
		computed: {
			bol() {
				if (this.mark == this.selected) {
					return true
				}
				return false
			}
		},
		methods: {
			fn() {
				this.$emit('change', this.mark);
				this.$router.push('/' + this.mark);
			}
		}

	}
</script>

<style lang="less">
.active{
	   
		color: #c39a58 !important;
		border-bottom: 2px solid #c39a58 !important;
	}
</style>
