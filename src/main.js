// 入口文件
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less"
import router from "./router";
import showMessage from "./views/utils/showMessage";

//  向实例注入成员
// Vue.prototype.$sayHello = function () {
//   console.log('Hello!!!!!');
// }

window.showMessage = showMessage;
showMessage('123123', "info", 2000)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
