<template>
  <div class="blog-list-container" v-loading="isLoading" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论: {{ item.commentNumber }}</span>
            <a href="/article/cate/8" class="">{{ item.category.name }}</a>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :total="Number(data.total)"
      :current="Number(routeInfo.page)"
      :limit="Number(routeInfo.limit)"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    ></Pager>
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import { getBlogs } from "@/api";
import { formatDate } from "@/views/utils";
export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },
  mounted() {
    console.log(this.routeInfo);
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      ); //获取数据
    },
    handlePageChange(newPage) {
      if (newPage === this.routeInfo.page) {
        return;
      }
      console.log(newPage);
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      //需要跳转到 当前分类 当前的页容量 newPage的页码
      if (this.routeInfo.categoryId === -1) {
        //当前没有分类
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: {
            categoryId: this.routeInfo.categoryId,
          },
          query,
        });
      }
    },
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1; //分类Id
      const page = this.$route.query.page || 1;
      const limit = this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  watch: {
    $route: {
      //vueRoute如果改变时之间重置了对象，如果改属性则监控不到
      async handler() {
        console.log("路由变化了");
        this.isLoading = true;
        //滚动高度为0
        this.$refs.container.scrollTop = 0;
        this.data = await this.fetchData();
        this.isLoading = false;
      },
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
