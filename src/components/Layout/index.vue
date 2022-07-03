<template>
  <div class="layout-container">
    <div class="left">
      <!--宽度让插槽的内容撑开 -->
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto; //不可以伸缩
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto; //可以伸缩
    overflow: hidden;
  }
}
</style>