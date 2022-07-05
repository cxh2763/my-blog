<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{
        marginTop: marginTop,
      }"
      @transitionend="
        () => {
          this.switching = false;
        }
      "
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item"></CarouselItem>
      </li>
    </ul>
    <div class="icon icon-up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div
      class="icon icon-down"
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{
          active: i === index,
        }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api";
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  data() {
    return {
      banners: [],
      index: 0, //当前显示的是第几章轮播图
      containerHeight: 0, //整个容器的高度
      switching: false,
    };
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return; //翻页中什么也不做
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.index--;
        this.switching = true;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        this.index++;
        this.switching = true;
      }
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script> 
<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden; //触发bfc属性，防止公用子元素的margin
}
.carousel-container {
  width: 100%;
  height: 100%;
  li {
    width: 100%;
    height: 100%;
  }
  transition: 500ms;
}
.icon {
  .self-center();
  transform: translateY(0);
  font-size: 30px;
  @gap: 15px;
  color: @gray;
  cursor: pointer;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-up 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
}
.indicator {
  .self-center();
  left: auto;
  transform: translate(0, -50%);
  right: 25px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transform: 0.5;
    &.active {
      background: #fff;
    }
  }
}
</style>