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
}
