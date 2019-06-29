<template>
	<div class="box" @click="showSetting">
        <div class="settingCon" @click="settingEvent($event)">
            <span @click="clickSetting">点击设置</span>
            <div v-show="showSettingCon">显示设置内容</div>
        </div>
    </div>
</template>

<script>
	export default {
		 data(){
           return{
               showSettingCon:false, 
           } 
       },
       methods:{
           showSetting(){
               this.$set(this, 'showSettingCon', false);
               //全局区域内点击时showSettingCon均为false
           },
           settingEvent(event){
               event.stopPropagation(); //此区域不受上面方法的影响
           },
           clickSetting(){
               this.$set(this, 'showSettingCon', !this.showSettingCon)
               //事件触发时showSettingCon显示隐藏状态互换
           }
       }
	}
</script>

<style scoped lang="scss">
  .box{
    width: 100%;
    height: 100%;
  }
  .settingCon{
    position: relative;
    b{
      width: 300px;
      height: 50px;
    }
    div{
      width: 500px;
      height: 300px;
      background: lightpink;
      position: absolute;
      top: 50px;
    }
  }
</style>
