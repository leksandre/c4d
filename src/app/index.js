import Vue from 'vue'
import App from './App'
import store from './store'
import CoolLightBox from 'vue-cool-lightbox'
import VModal from 'vue-js-modal'
import VueSlider from 'vue-slider-component'
import VueForceNextTick from 'vue-force-next-tick'
import { VueMaskDirective } from 'v-mask'
import { MakeHttp } from './utils/http'
import { getUrlParams } from './utils/helpers'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/index.scss'
// import VueLazyLoad from 'vue-lazyload'
// import VueResizeText from 'vue-resize-text';

Vue.config.productionTip = false

// Vue.use(VueLazyLoad)
// Vue.use(VueResizeText)
Vue.use(CoolLightBox)
Vue.use(VModal)
Vue.use(VueForceNextTick)
Vue.component('VueSlider', VueSlider)
Vue.directive('mask', VueMaskDirective)

Vue.filter('num', value => {
  if (value >= 0) {
    return value.toLocaleString('ru-RU')
  }
  return null
})

let config = getUrlParams(location.search)
config.chessSrc = config.chessSrc || '/chess.json'
const $http = MakeHttp(config)

store.app = store.app || {}
store.app.$http = Vue.prototype.$http = $http
store.app.$config = Vue.prototype.$config = config

new Vue({
  store,
  el: '#app',
  render: h => h(App),
})
