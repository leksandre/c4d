/* global crm4dev  */
import App from './App'

// import Vue from 'vue'
// import VueLazyLoad from 'vue-lazyload'


// Vue.use(VueLazyLoad)

;((w, d) => {

  const init = async () => {
    crm4dev.root = new App({
      target: document.body,
    })

    crm4dev.showWidget = crm4dev.root.showWidget
    crm4dev.closeWidget = crm4dev.root.closeWidget
    crm4dev.VERSION = '1.0.0'
  }

  d.readyState === 'complete' ?
    init() :
    w.addEventListener('load', init)

})(window, document)
