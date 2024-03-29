import { getSetting } from "@/api";
import { titleController } from "@/utils"
export default {
  namespaced: true,
  state: {
    loading: false,
    data: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchSetting(ctx) {
      ctx.commit("setLoading", true)
      let resp = await getSetting();
      let { avatar, qqQrCode, weixinQrCode } = resp;
      avatar = `http://159.75.17.167:7001${avatar}`;
      qqQrCode = `http://159.75.17.167:7001${qqQrCode}`;
      weixinQrCode = `http://159.75.17.167:7001${weixinQrCode}`;
      resp = Object.assign(resp, { avatar, qqQrCode, weixinQrCode });
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
      if (resp.favicon) {
        // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
        let link = document.querySelector("link[ref='shortcut icon']");
        if (link) {
          return;
        }
        link = document.createElement("link");
        link.rel = "shortcut icon";
        link.type = "images/x-icon";
        link.href = resp.favicon;
        document.querySelector("head").appendChild(link);
      }
      if (resp.siteTitle) {
        titleController.setSiteTitle(resp.siteTitle);
      }
    }
  }
}