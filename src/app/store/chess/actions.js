export default {
  // async getAll({ commit }, { applicationId = null, params = { page: 1, pageSize: 100 } }) {
  //   try {
  //     if (!applicationId) applicationId = this.app.$config.projectId
  //     const payload = await this.app.$http.$get('/widget/type', {
  //       params: { applicationId, ...params }
  //     })
  //     const isOk = (payload.data && payload.meta)
  //     if (!isOk) throw new Error('Не удалось получить данные')
  //     commit('set', { path: 'response', payload })
  //     return Promise.resolve(payload)
  //   }
  //   catch (e) {
  //     return Promise.reject(e)
  //   }
  // },
  async selectDistrict({ dispatch }, id) {
    try {
      const res = await this.app.$http.$get(this.app.$config.chessSrc, {
        params: { type: 'Район', id }
      })
      dispatch('setDate', res)
    }
    catch(error) {
      console.warn(error)
    }
  },

  async selectObject({ dispatch }, id) {
    try {
      const res = await this.app.$http.$get(this.app.$config.chessSrc, {
        params: { type: 'ОбъектСтроительства', id }
      })
      dispatch('setDate', res)
    }
    catch(error) {
      console.warn(error)
    }
  },

  setDate({ commit }, payload) {
    const districts = payload['Районы'] || []
    const objects = payload['ОбъектыСтроительства'] || []
    const sections = payload['Секции'] || []
    const properties = payload['ОбъектыНедвижимости'] || []
    commit('set', { districts, objects, sections, properties })
  },

  selectPropterty({ commit, rootState }, id) {
    const oldId = (rootState.infoPanel.property || {}).id
    commit('selectProperty', { id, oldId })
  },
}
