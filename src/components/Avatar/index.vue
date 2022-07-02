<template>
<!-- style绑定的是对象 -->
    <img
      class="avater-img"
      :src="url" 
      alt="头像" 
      :style="{
        width:size + 'px',
        height:size + 'px'
      }"
    />
</template>

<script>
export default {
  props:{
    url:{
      type:String,
      default:"https://img1.baidu.com/it/u=4216761644,15569246&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1656867600&t=56dbc2b4c1fca47b5b1a07c27e9c8c2b",
    },
    size:{
      type:Number,
      default:150,
    },
  }
}
</script>

<style scoped>
  .avater-img{
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
</style>