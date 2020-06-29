// import {
//   lazyAxFactory,
// } from '@/utils';
import types from '@/store/mutation-types';
import axios from "~/.nuxt/axios";

// const ax = axios.create();

const getters = {
  townsList: state => state.getTowns,
};

const actions = {
  async getTowns({ commit }) {
    commit(types.REQUEST_TOWN_LIST);
    const url = `towns`;
    const { data } = await ax.get(url);
    const result = data;
    commit(types.RECEIVE_TOWN_LIST, { result });
  },
};

const mutations = {
  [types.REQUEST_TOWN_LIST](state) {
    state.townListRequestStatus = 'pending';
  },
  [types.RECEIVE_TOWN_LIST](state, { result }) {
    state.townList = result;
    state.townListRequestStatus = 'success';
  },
};
const state = {
  townList: null,
  townListRequestStatus: null,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
