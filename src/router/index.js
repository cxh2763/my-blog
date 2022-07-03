import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter); //使用一个vue插件，路由


const router = new VueRouter({
  //配置
  routes,  //路由配置规则
  mode: "history", //配置路由模式
})

export default router;