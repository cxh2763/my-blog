<template>
  <div class="site-aside-container">
    <Avatar v-if="data" :url="data.avatar"></Avatar>
    <h1 class="title">{{ data && data.siteTitle }}</h1>
    <Menu></Menu>
    <Content v-if="data"></Content>
    <footer class="footer">{{ data && data.icp }}</footer>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Content from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Content,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
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