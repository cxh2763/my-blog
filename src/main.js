// 入口文件
import Vue from "vue";
import App from "./App";
import "./styles/global.less"
import router from "./router";
import { showMessage } from "./utils";
import "./mock";
import eventBus from "./eventBus";

Vue.prototype.$bus = eventBus;
Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "@/directives/loading"
import vLazy from "./directives/lazy"
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy)

//测试接口
import * as Api from "./api";
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
