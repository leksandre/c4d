import uniq from 'lodash/uniq'

export default {
  currentDistrict: state => state.districts.find(district => district.selected),
  currentObject: state => state.objects.find(object => object.selected),
  sectionById: state => id => state.sections.find(section => section.id === id),
  floorsCount: state => Math.max(...state.sections.map(section => section.number_of_floors)) || 0,
  propertyById: state => id => state.properties.find(property => property.id === id),
  allTypes: state => uniq(state.properties.map(prop => prop['rooms'])).sort(),
  allPrices: state => uniq(state.properties.map(prop => prop.cost)),
  minPrice: (state, getters) => Math.min(...getters.allPrices),
  maxPrice: (state, getters) => Math.max(...getters.allPrices),
  allAreas: state => uniq(state.properties.map(prop => prop['area'])),
  minArea: (state, getters) => Math.floor(Math.min(...getters.allAreas)),
  maxArea: (state, getters) => Math.ceil(Math.max(...getters.allAreas)),

  boardUniq: state => {
    let propertiesOfArea = {}

    const properties = state.properties.slice().sort((a, b) => a.numberonfloor - b.numberonfloor)

    for (const prop of properties) {
      let area = prop.area
      if (prop.status=="Свободна" && !(area in propertiesOfArea)){
        propertiesOfArea[area] = prop.id
      }

    }


        // function getSortedKeys(obj) {
        //   var keys = Object.keys(obj);
        //   return keys.sort(function(a,b){return obj[b]-obj[a]});
        // }
        //
        // function getSortedKeysO(obj) {
        //   var keys = []; for(var key in obj) keys.push(key);
        //   return keys.sort(function(a,b){return obj[b]-obj[a]});
        // }

    // return propertiesOfArea.sort(function(a,b) {
    //   return a - b;
    // })

    return propertiesOfArea
  },

  board: state => {
    let chess = {}
    let propertiesOfSection = {}

    const sections = state.sections
    const properties = state.properties.slice().sort((a, b) => a.numberonfloor - b.numberonfloor)

    for (const section of sections) {
      propertiesOfSection[section.id] = []
    }

    for (const prop of properties) {
      if (!propertiesOfSection[prop.section_id])
        propertiesOfSection[prop.section_id] = []

      propertiesOfSection[prop.section_id].push(prop)
    }

    for (const idSection in propertiesOfSection) {
      const section = sections.find(sec => sec.id === idSection)
      chess[idSection] = {
        ...section,
        propertiesOnFloor: {}
      }
      for (const prop of propertiesOfSection[idSection]) {
        const key = `floor_${prop.floor}`
        if (!chess[idSection].propertiesOnFloor[key])
          chess[idSection].propertiesOnFloor[key] = []

        chess[idSection].propertiesOnFloor[key].push(prop)
      }
    }

    return chess
  }
}
