// 入口文件
import Vue from "vue";
import App from "./App";
import "./styles/global.less"
import router from "./router";
import { showMessage } from "./views/utils";
import "./mock";

Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
