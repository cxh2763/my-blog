// 入口文件
import Vue from "vue";
import App from "./App";
import "./styles/global.less"
import router from "./router";
import { showMessage } from "./views/utils";
import "./mock";
import * as Api from "@/api";

Vue.prototype.$showMessage = showMessage;

//注册全局指令
import VLoading from "@/directives/loading"
Vue.directive("loading", VLoading);

//测试接口
Api.getBlogs(2, 20, 3).then((r) => {
  console.log("博客", r)
})

Api.getBlogTypes().then((r) => {
  console.log("博客分类", r)
})
//
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
