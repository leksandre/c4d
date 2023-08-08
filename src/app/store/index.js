import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import chess from './chess'
import infoPanel from './info-panel'

Vue.use(Vuex)

export default new Vuex.Store({
  state, getters, actions, mutations,
  modules: {
    chess,
    infoPanel
  },
  strict: process.env.NODE_ENV !== 'production',
})
