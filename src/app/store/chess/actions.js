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

    payload['data'].map(num => {
      let images1 = (num.floor_planes)
      let images2 = (num.object_planes)
      let images3 = (num.tour_3d)
      // let images3 (num.tour3d)

      var copy = [];


      if (typeof num.prices != "undefined")
        if (num.prices.length > 0) {
          if (num.cost === 0 || true) {//task from 27.10.2023
            num.cost = num.prices[0].cost
          }
          if (num.priceM2 === 0 || true) {//task from 27.10.2023
            num.priceM2 = num.prices[0].price
          }
        }

      var add_capt = "";
      for (let i = 0; i < images2.length; i++) {
        copy.push( {
          thumb: images2[i],
          src: images2[i],
          caption: 'план квартиры'+add_capt, // Optional
          srcset: images2[i] // Optional for displaying responsive images
        } );
        add_capt = " v"+(i+2);
      }
      add_capt = "";
      for (let i = 0; i < images1.length; i++) {
        copy.push( {
          thumb: images1[i],
          src: images1[i],
          caption: 'на этаже'+add_capt, // Optional
          srcset: images1[i] // Optional for displaying responsive images
        } );
        add_capt = " v"+(i+2);
      }
      add_capt = "";
      for (let i = 0; i < images3.length; i++) {
        copy.push( {
          thumb: images3[i],
          src: images3[i],
          type:'3d',
          caption: '3D тур'+add_capt, // Optional
          srcset: images3[i] // Optional for displaying responsive images
        } );
        add_capt = " v"+(i+2);
      }
      // let images = (num.object_planes).concat(num.floor_planes)

      num.images = copy
      return num ;
    });

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
