<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
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
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  data() {
    return {
      activeAnchor: "",
      setSelectDebounce: null,
    };
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = ""; //清空之前的激活状态
      const range = 200;
      for (const dom of this.doms) {
        //看一下当前dom元素是否应该被选中
        if (dom) {
          const top = dom.getBoundingClientRect().top; //得到元素距离视口顶部的距离
          if (top >= 0 && top <= range) {
            //在规定的范围内 一定激活
            this.activeAnchor = dom.id;
            return;
          } else if (top > range) {
            //在规定范围的下方 一定不激活 并且他后面的也不用看了
            return;
          } else {
            //在规定范围的上方
            this.activeAnchor = dom.id; //先假设自己是激活的，然后继续看后面
          }
        }
      }
    },
  },
  computed: {
    //根据TOC属性以及article-md-title-1得到带有isSelected数组的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => {
          return {
            ...t,
            isSelect: t.anchor === this.activeAnchor,
            children: getTOC(t.children),
          };
        });
      };
      return getTOC(this.toc);
    },
    //根据toc得到他们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
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
