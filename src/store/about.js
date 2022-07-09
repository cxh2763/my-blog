import { getAbout } from "@/api";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: "",
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    async fetchAbout(ctx) {
      if (!ctx.state.data) {//如果已经有数据就不要在拿去数据了 
        ctx.commit("setLoading", true);
        const resp = await getAbout();
        ctx.commit("setData", resp);
        ctx.commit("setLoading", false);
      }
    },
  }
}