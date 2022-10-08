import { getProjects } from "@/api";

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
      state.data = payload;
    },
  },
  actions: {
    async fetchProject(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      for (const item of resp) {
        let { thumb } = item;
        thumb = `http://159.75.17.167:7001${thumb}`;
        item = Object.assign(item, { thumb });
      }
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
