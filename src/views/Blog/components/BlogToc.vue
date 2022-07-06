<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
      console.log(item);
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
  .right-list-container {
    margin-top: 15px;
  }
}
</style>
