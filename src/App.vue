<template>
  <div class="container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template #default>
        <RouterView></RouterView>
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  mounted() {
    // this.$showMessage({
    //   content: "评论成功",
    //   type: "success",
    //   callback: () => {
    //     console.log("callback");
    //   },
    // });
  },
  data() {
    return {};
  },
  methods: {
    pageChange(newCurrent) {
      this.current = newCurrent;
    },
    load() {
      console.log("图片加载完成");
    },
  },
};
</script>

<style scoped>
.icon-container {
  font-size: 24px;
}
.container {
  width: 100%;
  height: 100vh;
}
.aside {
  width: 250px;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  background: lightseagreen;
}
</style>