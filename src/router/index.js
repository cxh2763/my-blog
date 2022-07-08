import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";
Vue.use(VueRouter); //使用一个vue插件，路由


const router = new VueRouter({
  //配置
  routes,  //路由配置规则
  mode: "history", //配置路由模式
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
})

export default router;