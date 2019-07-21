import Vue from 'vue';
import Vuex from 'vuex';
import {store} from './utils/utils';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    accessToken: store.getStore('accessToken') || null,
    refreshToken: store.getStore('refreshToken') || null,
    appId: store.getStore('appId') || null,
    userId: store.getStore('userId') || null,
    userInfo: store.getStore('userInfo') || {}
  },
  getters: {
    accessToken: state => {
      return state.accessToken;
    },
    userInfo: state => {
      return state.userInfo;
    },
    userId: state => {
      return state.userId;
    }
  },
  mutations: {
    SET_APP_ID: (state, appId) => {
      store.setStore({
        name: 'appId',
        content: appId
      });
    },
    SET_ACCESS_TOKEN: (state, accessToken) => {
      store.setStore({
        name: 'accessToken',
        content: accessToken
      });
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
      store.setStore({
        name: 'userInfo',
        content: state.userInfo
      });
    },
    SET_REFRESH_TOKEN: (state, refreshToken) => {
      store.setStore({
        name: 'refreshToken',
        content: refreshToken
      });
    },
    SET_USER_ID: (state, userId) => {
      store.setStore({
        name: 'userId',
        content: userId
        // type: 'session'
      });
    },

  },
  actions: {},
});
