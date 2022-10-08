import { getBanners } from "@/api"

export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],

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
    async fetchBanner(ctx) {
      if (!ctx.state.data.length) {
        ctx.commit("setLoading", true)
        let resp = await getBanners();
        for (const item of resp) {
          let { bigImg, midImg } = item;
          bigImg = `http://159.75.17.167:7001${bigImg}`;
          midImg = `http://159.75.17.167:7001${midImg}`;
          item = Object.assign(item, { midImg, bigImg });
        }
        ctx.commit("setData", resp);
        ctx.commit("setLoading", false);
      }
    }
  }
}