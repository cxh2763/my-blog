const listeners = {};
//事件总线
export default {
  //监听某一个事件
  $on(eventName, handler) {
    if (!listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler);
  },
  //取消监听
  $off(eventName, handler) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName].delete(handler);
  },
  //触发事件
  $emit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    for (const handler of listeners[eventName]) {
      handler(...args);
    }
  },
}

// import Vue from "vue";
// export default new Vue({}) //也是一个事件总线

/**
 * 事件名称：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 */