<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogTypes } from "@/api";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => {
        console.log(a, b.articleCount);
        return a + b.articleCount;
      }, 0);
      const result = [
        {
          name: "全部",
          id: -1,
          articleCount: totalArticleCount,
        },
        ...this.data,
      ];
      console.log(totalArticleCount);
      return result;
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  position: relative;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2em;
    margin: 0;
  }
}
</style>