import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    accessToken: null,
    userInfo: {}
  },
  mutations: {
    setAccessToken(state,token){
      state.accessToken = token
    }
  },
  actions: {

  },
});
