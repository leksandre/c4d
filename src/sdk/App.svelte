<script>
  const IS_DEV = process.env.NODE_ENV === 'development'
  const url = IS_DEV ?
    'http://localhost:8080/app/' :
    'https://chess.4dev.app/app/' //'https://crm4dev-widget.netlify.app/app/'
  
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
        frame.style.height = `${height}px`
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
  <a href="/" style="width: {btnSize}; height: {btnSize}; background: {btnBg}; color: {btnColor}; font-size: {`${fontSize}px`}" class="crm4dev-btn" on:click|preventDefault={() => isShow = true} >
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480'><path fill='#fff' d='M472 440h-48V144a8 8 0 00-8-8H280V32a8 8 0 00-8-8H64a8 8 0 00-8 8v408H8a8 8 0 000 16h464a8 8 0 000-16zm-208 0H72V40h192v400zm144 0H280V152h128v288z'/><path fill='#fff' d='M320 232h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM320 312h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM320 392h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM184 232h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM184 152h48a8 8 0 008-8V96a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM184 312h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM184 392h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM104 232h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM104 152h48a8 8 0 008-8V96a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM104 312h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32zM104 392h48a8 8 0 008-8v-48a8 8 0 00-8-8h-48a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h32v32h-32v-32z'/></svg>
    <span>{@html btnCaption }</span>
  </a>
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
  #crm4dev-app .crm4dev-btn svg {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    height: 50%;
    opacity: .75;
  }
  #crm4dev-app .crm4dev-btn span {
    font-size: 1em;
    text-transform: uppercase;
    margin-top: 3%;
    letter-spacing: .05em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  #crm4dev-app .crm4dev-btn {
    text-align: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 990;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: rgba(255, 82, 82, 1);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
    animation: pulse 2s infinite;
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
