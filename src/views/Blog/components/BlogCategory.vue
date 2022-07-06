<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect"></RightList>
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
      return result.map((item) => {
        return {
          ...item,
          isSelect: item.id === this.categoryId,
          aside: `${item.articleCount}篇`,
        };
      });
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
  },
  methods: {
    handleSelect(item) {
      console.log(item);
      if (!item.isSelect) {
        const query = {
          page: 1,
          limit: this.limit,
        };
        //需要跳转到 当前分类 当前的页容量 newPage的页码
        if (item.id === -1) {
          //点击的是全部
          this.$router.push({
            name: "Blog",
            query,
          });
        } else {
          this.$router.push({
            name: "CategoryBlog",
            params: {
              categoryId: item.id,
            },
            query,
          });
        }
      }
    },
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
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 2em;
    margin: 0;
  }
}
</style>