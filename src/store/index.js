import Vue from "vue";
import Vuex from "vuex";
import { getItem, setItem } from "@/utils/storage";

Vue.use(Vuex);

const TOKEN_KEY = "vue_m_3";
export default new Vuex.Store({
  state: {
    // 定义初始值，用来接收传过来的用户信息
    // 数据持久化，先去本地获取用户信息
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser(state, data) {
      // 将初始值修改为用户传过来的信息
      state.user = data;
      // 数据持久化
      setItem(TOKEN_KEY, state.user);
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user));
    }
  },
  actions: {},
  modules: {}
});
