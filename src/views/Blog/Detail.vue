<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail
        :blog="data"
        v-if="JSON.stringify(data) !== '{}'"
      ></BlogDetail>
      <BlogComment v-if="!isLoading"></BlogComment>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="JSON.stringify(data) !== '{}'"></BlogToc>
      </div>
    </template>
  </Layout>
</template> 

<script>
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import { getBlog } from "@/api";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
import BlogComment from "./components/BlogComment.vue";
import { titleController } from "@/utils";

export default {
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  mixins: [fetchData({}), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if (!resp) {
        //文章不存在
        this.$router.push("404");
        return;
      }
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
}
</style>  