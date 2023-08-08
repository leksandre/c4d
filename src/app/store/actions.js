export default {
  _$ws_setLocationParam({ commit }, payload) {
    commit('merge', { parentLocation: payload })
  },

  _$ws_setFilters({ commit }, payload) {
    commit('chess/setByPath', {
      path: 'filters',
      payload
    })
  },

  _$ws_setDefaultFilters({ commit }, payload) {
    commit('chess/setByPath', {
      path: 'defaultFilters',
      payload
    })
  }
}
