<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove($event)"
    @mouseleave="resizeMouse"
  >
    <div class="carousel-img" ref="img" :style="imagePosition">
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
    this.setSize();
    this.resizeMouse();
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器size
      innerSize: null, //内层图片size
      mouseX: 0, //鼠标的横坐标
      mouseY: 0, //鼠标的纵坐标
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
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.img.clientWidth,
        height: this.$refs.img.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    resizeMouse() {
      this.mouseX = this.centor.x;
      this.mouseY = this.centor.y;
    },
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return {};
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = -(extraWidth / this.containerSize.width) * this.mouseX;
      const top = -(extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    centor() {
      if (this.containerSize) {
        return {
          x: this.containerSize.width / 2,
          y: this.containerSize.height / 2,
        };
      }
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
  overflow: hidden;
}
.carousel-img {
  left: 0;
  top: 0;
  width: 110%;
  height: 110%;
  position: absolute;
  transition: 0.15s;
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