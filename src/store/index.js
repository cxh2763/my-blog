import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
if (!window.Vuex) { //生产环境cdn引入，会自动安装插件
  Vue.use(Vuex);
}

export default new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    project,
  },
  strict: true,
})