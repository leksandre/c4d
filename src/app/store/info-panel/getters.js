export default {
  title: (state, getters, rootState, rootGetters) => {
    if (!state.property.id) return ''
    const { name: districtName } = rootGetters['chess/currentDistrict']
    const { name: objectName } = rootGetters['chess/currentObject']
    const { name: sectionName } = rootGetters['chess/sectionById'](state.property.id_entrance)
    return `${districtName}, ${objectName}, ${sectionName}, Этаж ${state.property.floor}, ${state.property['type_object']} №${state.property.number}`
  }
}

/**
 Свободно
 Бронь
 Договор      - Продано
 Выданы ключи - Продано
 Не для продажи - Пусто
 На расторжении - Пусто


 Коммерческая недвижимость
 Жилое помещение
 Апартаменты
 Гараж/Паркоместо
 Земельный участок
 Коттедж/Таунхаус
 Прочее
 Не для продажи
 */
