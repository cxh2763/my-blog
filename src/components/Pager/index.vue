<template>
  <!-- 只有总页数大于1的时候才显示 -->
  <div class="pager-container" v-if="PageNumber > 1">
    <a
      :class="{
        disabled: current === 1,
      }"
      @click="handClick(1)"
      >|&lt;&lt;</a
    >
    <a
      :class="{
        disabled: current === 1,
      }"
      @click="handClick(current - 1)"
      >&lt;&lt;</a
    >
    <a
      @click="handClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{
        active: n === current,
      }"
    >
      {{ n }}
    </a>
    <a
      :class="{
        disabled: current === PageNumber,
      }"
      @click="handClick(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{
        disabled: current === PageNumber,
      }"
      @click="handClick(PageNumber)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      //当前页
      type: Number,
      default: 1,
    },
    total: {
      //总共有多少条数据
      type: Number,
      default: 0,
    },
    limit: {
      //每页显示几个数据
      type: Number,
      default: 10,
    },
    visibleNumber: {
      //可见页码数
      type: Number,
      default: 10,
    },
  },
  mounted() {},
  computed: {
    //总页数
    PageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    //得到显示的最小数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    //得到显示最大的数字
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.PageNumber) {
        max = this.PageNumber;
      }
      return max;
    },
    numbers() {
      const numbers = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
  methods: {
    handClick(newCurrent) {
      if (newCurrent < 1) newCurrent = 1;
      if (newCurrent > this.PageNumber) newCurrent = this.PageNumber;
      this.$emit("pageChange", newCurrent);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    margin: 0 8px;
    color: @primary;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font: bold;
      cursor: text;
    }
  }
}
</style>