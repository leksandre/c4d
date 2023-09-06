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



  // config.object = config.object || '/estate_object'
  // config.building = config.building || '/building'
  // config.district = config.district || '/district'
  // config.section = config.section || '/section'


  async selectObject({ dispatch }, id) {
    try {
      const res = await this.app.$http.$get(this.app.$config.object, {
        params: { filter_type: 'building', id , additional_info:'true', status:'true'}
      })
      dispatch('setDate1', res)
    }
    catch(error) {
      console.warn(error)
    }
    try {
      const res = await this.app.$http.$get(this.app.$config.building, {
        params: {}
      })
      dispatch('setDate2', res)
    }
    catch(error) {
      console.warn(error)
    }
    try {
      const res = await this.app.$http.$get(this.app.$config.district, {
        params: {}
      })
      dispatch('setDate3', res)
    }
    catch(error) {
      console.warn(error)
    }
    try {
      const res = await this.app.$http.$get(this.app.$config.section, {
        params: {}
      })
      dispatch('setDate4', res)
    }
    catch(error) {
      console.warn(error)
    }
  },

  setDate1({ commit }, payload) {
    const properties = payload['data'] || []
    commit('set', { properties })
  },
  setDate2({ commit }, payload) {
    const objects = payload['data'] || []
    commit('set', { objects})
  },
  setDate3({ commit }, payload) {
    const districts = payload['data'] || []
    commit('set', { districts})
  },
  setDate4({ commit }, payload) {
    const sections = payload['data'] || []
    commit('set', { sections})
  },

  selectPropterty({ commit, rootState }, id) {
    const oldId = (rootState.infoPanel.property || {}).id
    commit('selectProperty', { id, oldId })
  },
}
