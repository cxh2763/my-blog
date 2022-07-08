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
        const resp = await getBanners();
        ctx.commit("setData", resp);
        ctx.commit("setLoading", false);
      }
    }
  }
}