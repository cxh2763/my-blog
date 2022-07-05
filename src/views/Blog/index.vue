<template>
  <Layout>
    <BlogList></BlogList>
    <template #right>
      <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
import Layout from "@/components/Layout";
export default {
  created() {
    console.log(this.$route);
  },
  components: {
    BlogCategory,
    BlogList,
    Layout,
  },
};
</script>

<style lang="less" scoped>
</style>