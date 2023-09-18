import Vue from 'vue'
import set from 'lodash/set'
import merge from 'lodash/merge'

export default {
  set(state, payload) {
    Object.assign(state, payload)
  },
  setByPath(state, { path, payload }) {
    set(state, path, payload)
  },
  merge(state, payload) {
    merge(state, payload)
  },

  selectProperty(state, { id, oldId }) {
    if (oldId)
      state.properties.find(property => property.id === oldId).isSelected = false

    if (!id) return

    const findedProperty = state.properties.find(property => property.id === id)
    if (findedProperty.hasOwnProperty('isSelected'))
      findedProperty.isSelected = true
    else
      Vue.set(findedProperty, 'isSelected', true)
  },

  changeFilters(state, filters) {
    let { byType, byArea, byFloor, byPrice, byLayout, bySection } = filters

    for (const property of state.properties) {
      let result = false
      const type = property['type_apartment'].toString()
      const rooms = property['rooms']
      const HomepEtaja = property['floor_number']
      const area = property['area']
      const layout = property['type_apartment']
      const { floor, cost:price, section_id: sectionId  } = property

      // console.log('---start----type',type,'-',byType)
      // console.log('---start----property',property)
      // console.log('---start----type_apartment',property['type_apartment'])
      // console.log('---start----floor_number',property['floor_number'])

      const toNumber = i => Number(i)
      byArea = byArea.map(toNumber)
      byFloor = byFloor.map(toNumber)
      byPrice = byPrice.map(toNumber)

      const minByArea = byArea[0]
      const maxByArea = byArea[1]
      const minByFloor = byFloor[0]
      const maxByFloor = byFloor[1]
      const minByPrice = byPrice[0]
      const maxByPrice = byPrice[1]

      const filtredBySection = bySection ? bySection === sectionId : true
      const filtredByType = byType.length > 0 ? byType.includes(type) : true
      const filtredByLayout = byLayout.length > 0 ? byLayout.includes(layout) : true
      const filtredByArea = maxByArea > minByArea ? (area >= byArea[0] && area <= byArea[1]) : true
      const filtredByFloor = maxByFloor > minByFloor ? (floor >= byFloor[0] && floor <= byFloor[1]) : true
      const filtredByPrice = maxByPrice > minByPrice ? (price >= byPrice[0] && price <= byPrice[1]) : true

      // console.log('---start----filtredByType',filtredByType)

      if (filtredBySection && filtredByType && filtredByArea && filtredByFloor && filtredByPrice && filtredByLayout)
        result = true

      // if(filtredByType){
      //   console.log('type!',type)
      // }
      // console.log('filters',filters.byType)

      Vue.set(property, 'isFiltred', result)
    }
  },

}
