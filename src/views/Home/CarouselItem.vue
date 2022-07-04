<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader
        @load="showWords()"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      ></ImageLoader>
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: {
    carousel: {
      type: Object,
      required: true,
    },
  },
  components: {
    ImageLoader,
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    };
  },
  methods: {
    showWords() {
      const titleStyle = this.$refs.title.style;
      const descStyle = this.$refs.desc.style;
      //title
      titleStyle.opacity = 1;
      titleStyle.width = 0;
      //强制让浏览器渲染一次
      this.$refs.title.offsetHeight; //reflow
      titleStyle.transition = "1s";
      titleStyle.width = this.titleWidth + "px";

      //desc
      descStyle.opacity = 1;
      descStyle.width = 0;
      //强制让浏览器渲染一次
      this.$refs.desc.clientWidth; //reflow
      descStyle.transition = "2s 1s";
      descStyle.width = this.descWidth + "px";
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
}
.carousel-img {
  width: 100%;
  height: 100%;
}
.title,
.desc {
  position: absolute;
  left: 30px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%);
}
</style>