<template>
  <nav class="Menu-container">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="{
        name: item.name,
      }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
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
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
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