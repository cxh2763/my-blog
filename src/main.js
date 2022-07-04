// 入口文件
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less"
import router from "./router";
import { showMessage } from "./views/utils";
import "./mock";
import * as Api from "./api";

Vue.prototype.$showMessage = showMessage;

Api.getBanners().then((r) => {
  if (r) {
    console.log(r)
  }
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
