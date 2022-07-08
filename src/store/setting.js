import { getSetting } from "@/api";

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
      const resp = await getSetting();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}