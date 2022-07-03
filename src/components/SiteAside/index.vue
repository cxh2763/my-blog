<template>
  <div class="site-aside-container">
    <Avatar></Avatar>
    <h1 class="title">瓜皮的博客</h1>
    <Menu></Menu>
    <Content></Content>
    <footer class="footer">京ICP证030173号</footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Content from "./Contact";
import Menu from ".//Menu";
export default {
  components: {
    Avatar,
    Content,
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; //隐藏滚动栏，不兼容火狐
  }
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  text-align: center;
  color: #fff;
  font-size: 1.2em;
}
</style>