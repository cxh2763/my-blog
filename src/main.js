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

//测试接口
// import * as Api from "./api";
// Api.getBlog("asdsa").then((r) => {
//   console.log(r);
// })
// Api.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: "123",
// }).then(r => {
//   console.log(r)
// })
// Api.getComments("123").then((r) => {
//   console.log(r)
// })

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
