// 入口文件
import Vue from "vue";
import App from "./App";
import "./styles/global.less"
import router from "./router";
import { showMessage } from "./views/utils";
import "./mock";

Vue.prototype.$showMessage = showMessage;

//注册全局指令
import VLoading from "@/directives/loading"
Vue.directive("loading", VLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
