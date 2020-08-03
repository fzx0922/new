import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import ceshi from './modules/ceshi'

export default new Vuex.Store({
  state: {
    msg: 666
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ceshi
  }
})
