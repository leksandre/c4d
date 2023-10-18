<script>
  const IS_DEV = process.env.NODE_ENV === 'development'
  const url = IS_DEV ?
    'http://localhost:8080/app/' :
    'https://xn--d1acscjb2a6f.xn--p1ai/app/'
  
  // Omit defaultFilters from config
  const { defaultFilters, ...config } = crm4dev.config
  const queryForInjected = new URLSearchParams(config)
  
  config.type = 'widget'
  const query = new URLSearchParams(config)

  let isShow = false //IS_DEV

  const isWidget = !!config.btn
  const btnCaption = (config.btn||{}).caption || `Квартиры в наличии`
  const btnSize = `${(config.btn||{}).size}px`
  const btnBg = (config.btn||{}).background || '#FF5252'
  const btnColor = (config.btn||{}).color || '#FFFFFF'
  const fontSize = (config.btn||{}).fontSize || 10

  let iframeHeight

  const htmlInjectedEl = document.querySelector('[c4d-widget]')
  const frameIn = document.createElement('iframe')
  frameIn.src = `${url}?${queryForInjected}`
  frameIn.name = 'C4DWidgetInject'
  frameIn.id= 'idC4DWidgetInject'
  frameIn.width = '100%'
  frameIn.frameBorder = 'none'
  if (htmlInjectedEl && htmlInjectedEl.innerHTML === '') {
    htmlInjectedEl.appendChild(frameIn)
  }

  export const showWidget = (filters = {}) => {
    postMessage({
      method: '_$ws_setFilters',
      payload: filters
    })
    isShow = true
  }
  export const closeWidget = _ => methods._$is_closeWidget()

  /**
   * Получение данных из виджета (../app/App.vue)
   */
  window.addEventListener('message', async event => {
    try {
      // if (IS_DEV) console.log('Recieve postmessage to insert script SITE: ', event)
      const { method, payload } = event.data
      if (methods[method]) await methods[method](payload)
    }
    catch (e) {
      console.error(e)
    }
  })

  /**
   * Отправка данных в виджет
   * @param payload
   * @param origin
   */
  const postMessage = (payload, origin = '*') => {
    try {
      if (window.frames.C4DWidgetInject) window.frames.C4DWidgetInject.postMessage(payload, origin)
      if (window.frames.crm4devFrame) window.frames.crm4devFrame.postMessage(payload, origin)

      if (!window.frames.crm4devFrame && !window.frames.C4DWidgetInject) throw new Error('фрейм виджета еще не создан')
    }
    catch (e) {
      console.error(e);
    }
  }

  const methods = {
    _$is_dispatchEvent({ type, detail }) {
      document.dispatchEvent(
        new CustomEvent(type, { detail })
      )
    },
    _$is_appCreated() {
      postMessage({
        method: '_$ws_setDefaultFilters',
        payload: defaultFilters
      })
    },
    _$is_setFrameSize({ height }) {
      const frame = (document.getElementsByName('C4DWidgetInject')||[])[0]
      if (frame){
        if(height>parseInt(frame.clientHeight,10)){
        frame.style.height = `${height*1.6}px`
        frame.style.overflowY = 'scroll'
        }}
    },
    _$is_closeWidget() {
      isShow = false
    },
    _$is_getLocationParam(key) {
      postMessage({
        method: '_$ws_setLocationParam',
        payload: {
          [key]: location[key]
        }
      })
    }
  }

  document.addEventListener('click', event => {
    const a = event.target.closest('a')

    if (!a) return

    const { href } = a

    if (!href || href.indexOf('crm4dev?') == -1) return

    const url = new URL(href)
    const filtersStr = url.searchParams.get('filters')

    if (!filtersStr) return

    const splitFilters = filtersStr.split(';').map(filter => filter.split(':'))
    const filters = {}

    for (const filter of splitFilters) {
      const [ filterName, filterProps ] = filter
      filters[filterName] = filterProps.split(',')
    }

    showWidget(filters)

    event.preventDefault()
  })
</script>
{#if isWidget}
<div id="crm4dev-app">
  <div class="crm4dev-modal {isShow && 'is-opened'}">
    <div class="crm4dev__content" bind:clientHeight={iframeHeight}>
      <iframe
        src="{`${url}?${query}`}" name="crm4devFrame" width="100%" height="{iframeHeight}"
        frameborder="0" allowtransparency="true" allow="autoplay" title="CRM4DEV"
      ></iframe>
    </div>
  </div>
</div>
{/if}

<style>
  #crm4dev-app {
    line-height: normal;
  }
  #crm4dev-app *,
  #crm4dev-app *::before,
  #crm4dev-app *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #crm4dev-app .crm4dev-modal {
    position: fixed;
    z-index: 9999999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(2px);
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    transition: all .225s ease-in-out;
    will-change: opacity, visibility, transform;
    padding: 10px;
  }
  #crm4dev-app .crm4dev-modal.is-opened {
    visibility: visible;
    pointer-events: initial;
    opacity: 1;
  }
  #crm4dev-app .crm4dev__content {
    overflow: hidden;
    width: 100%;
    flex-grow: 1;
    border-radius: 10px;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
    }

    70% {
      box-shadow: 0 0 0 20px rgba(255, 82, 82, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    }
  }

  #crm4dev-app iframe {
    width: 1px;
    min-width: 100%;
    *width: 100%;
  }

  @media screen and (min-width: 960px) {
    #crm4dev-app .crm4dev-modal {
      padding: 18px;
    }
  }

  @media screen and (max-width: 960px) {
    #crm4dev-app .crm4dev-btn {
      font-size: 8px !important;
      width: 80px !important;
      height: 80px !important;
    }
  }
</style>
