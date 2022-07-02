<template>
  <div class="image-loader-container">
    <!--  一切尘埃落定后消失，加载动画完成 -->
    <img :src="placeholder" class="placeholder" v-if="!everythingDone">
    <img
        @load="handleLoad"
        :src="src" 
        class="origin" 
        :style="{
        opacity:this.originLoaded ? 1 : 0,
        transition: `${duration}ms`
      }"
      >
    <!-- img图片自带的load事件 -->
  </div>
</template>

<script>
export default {
  props:{
    src:{
      type:String,
      required:true
    },
    placeholder:{
      type:String,
      required:true
    },
    duration:{
      type:Number,
      default:3000,
    } 
  },
  data(){
    return {
      originLoaded:false,// 原图是否加载完成
      everythingDone:false,//是否一切都完成了
    }
  },
  methods:{
    handleLoad() {
      this.originLoaded = true;
      setTimeout(()=>{
        this.everythingDone = true;
        this.$emit("load");
      },this.duration)
    },
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
  .image-loader-container { 
    position: relative;
    width: 100%;
    height: 100%;
    img{
      .self-fill();
      object-fit: cover;
    }
    .placeholder {
      filter: blur(1.8vw);
    }
  }
</style>