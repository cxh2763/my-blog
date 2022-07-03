<template>
  <nav class="Menu-container">
    <a
      v-for="(item, index) in items"
      :key="index"
      :class="{
        selected: isSelected(item),
      }"
      :href="item.link"
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      const link = item.link.toLowerCase(); //菜单的地址链接
      const curPathname = location.pathname.toLowerCase(); //当前地址链接
      if (item.exact) {
        return link === curPathname;
      } else {
        return curPathname.startsWith(link);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Menu-container {
  padding: 24px 0;
  color: @gray;
  a {
    display: block;
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 8%);
    }
  }
}
</style>