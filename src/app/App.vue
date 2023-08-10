<template>
  <div class="b-page d-flex flex-column full-height overflow-hidden pos-r">
    <header
      class="flex-grow-0 pr-4 pos-rel"
      :class="{'py-12': mq.mdAndUp, 'py-4': mq.mdAndDown, 'pl-10': mq.mdAndUp, 'pl-6': mq.mdAndDown}"
    >
      <div class="d-flex align-center">
        <div class="d-flex align-center flex-grow-1 pr-5" >
          <a v-if="mq.mdAndDown && modelDistrict" href="#" @click.prevent="$modal.show('filters')">
            <i class="e-icon is-menu"></i>
          </a>
          <div v-if="mq.mdAndDown && modelDistrict" class="ml-6 text-subtitle-2 font-weight-500">{{ modelDistrict.name }}</div>

          <div style="justify-content: center; width: 100%; padding: 22px;" class="d-flex align-center flex-wrap align-center-inner" v-if="mq.mdAndUp" >
            <div class="select" >
              <div class="e-select text-body-1">
                <select name="district" id="district" v-model="modelDistrict">
                  <option
                    v-for="district in districts"
                    :key="district.id"
                    :value="district"
                  >{{ district.name }}</option>
                </select>
              </div>
            </div>
            <div class="select ml-5">
              <div class="e-select text-body-1">
                <select name="object" id="object" v-model="modelObject">
                  <option
                    v-for="object in objects"
                    :key="object.id"
                    :value="object"
                  >{{ object.name }}</option>
                </select>
              </div>
            </div>
            <div class="ml-10">
              <div class="text-body-2 has-opacity-65 mb-2">Кол-во комнат</div>
              <div class="e-checkboxes-group py-2">
                <div class="e-checkbox-btn" v-for="(type, ind) in allTypes" :key="`type${ind}`">
                  <input
                    type="checkbox" v-model="filters.byType"
                    :value="type" name="type" :id="`type${ind}`"
                    @change="onChangeFilter"
                  >
                  <label :for="`type${ind}`">{{ getName(type) }}</label>
                </div>
              </div>
            </div>
            <div class="ml-15 mr-20 pr-10 pb-8" v-if="!isLoading && floorsCount > 1">
              <div class="text-body-2 has-opacity-65">Этаж</div>
              <vue-slider
                v-model="filters.byFloor"
                :width="sliderWidth"
                :min="1"
                :max="floorsCount"
                tooltip="always"
                tooltip-placement="bottom"
                lazy contained
                @change="onChangeFilter"
              />
            </div>
            <div class="mr-20 pr-10 pb-8" v-if="!isLoading && maxPrice > minPrice">
              <div class="text-body-2 has-opacity-65">Стоимость, ₽</div>
              <vue-slider
                v-model="filters.byPrice"
                :width="sliderWidth"
                :min="minPrice"
                :max="maxPrice"
                tooltip="always"
                tooltip-placement="bottom"
                :tooltip-formatter="priceFormatter"
                lazy contained
                @change="onChangeFilter"
              />
            </div>
            <div class="pb-8 mr-10" v-if="!isLoading && maxArea > minArea">
              <div class="text-body-2 has-opacity-65">Площадь, м²</div>
              <vue-slider
                v-model="filters.byArea"
                :width="sliderWidth"
                :min="minArea"
                :max="maxArea"
                tooltip="always"
                tooltip-placement="bottom"
                lazy contained
                @change="onChangeFilter"
              />
            </div>
            <a href="#" @click.prevent="setFilter(true)" class="text-body-2">очистить</a>
          </div>

          <div class="select ml-auto flex-shrink-0" style="width: 100px" v-if="mq.mdAndUp">
            <div class="e-select text-body-1">
              <select name="district" id="view" v-model="view">
                <option value="tilePlus">Плитка+</option>
                <option value="mobile">Мобильный</option>
                <option value="tile">Компактная</option>
              </select>
            </div>
          </div>
        </div>
        <a v-if="isWidget" href="#" class="crm4dev-close" @click.prevent="onCloseWidget"><i></i></a>
      </div>
    </header>
    <main class="d-flex flex-grow-1 pos-rel" id="main">
      <div
        v-if="!isLoading"
        class="content flex-grow-1 overflow-x-auto"
        :class="{'px-8': mq.mdAndUp, 'px-4': mq.mdAndDown}"
      >
        <section id="tiles" :class="{ 'is-simple': view === 'tile' }" class="py-10 c-building text-body-2">
          <table>
            <thead>
            <tr>
              <td></td>
              <td
                v-for="(section, sectionId) in board"
                :key="`head_${sectionId}`"
                class="has-text-primary font-weight-bold text-h3"
              >{{ section.name }}</td>
            </tr>
            </thead>
            <tfoot>
            <tr>
              <td></td>
              <td
                v-for="(section, sectionId) in board"
                :key="`foot_${sectionId}`"
                class="has-text-primary font-weight-bold text-h3"
              >{{ section.name }}</td>
            </tr>
            </tfoot>
            <tbody>
            <tr class="c-building__floor" v-for="floor in reverseKeys(floorsCount)" :key="`floor-${floor}`" :id="`floorView-${floor}`"  :class="{ 'hidden': !hasChildWithClass(floor, 'c-building__flat-type') }" >
              <td class="c-building__floor-number text-right px-5">{{ floor + 1 }}</td>
              <td v-for="(section, sectionId) in board" :key="sectionId">
                <div class="c-building__section">
                  <apartment-card
                    v-for="property in section.propertiesOnFloor[`floor_${floor + 1}`]"
                    :key="property.id"
                    :property="property"
                  />
                </div>
              </td>
              <td class="c-building__floor-number pl-0">{{ floor + 1 }}</td>
            </tr>
            </tbody>
          </table>
        </section>
      </div>

      <apartment-details v-if="mq.mdAndUp" />
    </main>
    <footer :class="{'pa-2': mq.mdAndDown}">
      <div class="l-row" :class="{'flex-column-reverse': mq.mdAndDown}">
        <div class="l-col py-0 text-body-2 has-text-primary">&copy; CRM4DEV {{ new Date().getFullYear() }}</div>
        <div class="l-col py-0">
          <div class="d-flex text-body-2" :class="{'justify-center': mq.mdAndUp}">
            <div class="legend" :class="{'flex-wrap': mq.mdAndDown}">
              <div class="legend__item is-free"><span></span>Свободно</div>
              <div class="legend__item is-reserved"><span></span>Бронь</div>
              <div class="legend__item is-sold"><span></span>Продано</div>
              <div class="legend__item is-disabled"><span></span>Недоступно</div>
            </div>
          </div>
        </div>
        <div class="l-col py-0"></div>
      </div>
    </footer>

    <CoolLightBox
      :items="imageItems"
      :index="imageIndex"
      @close="$store.commit('set', {path: 'imageIndex', payload: null})"
    />

    <modal name="filters" width="100%" height="100%" adaptive>
      <div class="d-flex flex-column overflow-hidden full-height">
        <div class="text-subtitle-2 font-weight-500 py-4 px-5 box-shadow-bottom">Фильтры</div>
        <div class="d-flex flex-column flex-grow-1 overflow-x-auto px-5 pt-10 pb-20">
          <div class="select full-width">
            <div class="e-select text-body-1">
              <select name="district" id="m-district" v-model="modelDistrict">
                <option
                  v-for="district in districts"
                  :key="district.id"
                  :value="district"
                >{{ district.name }}</option>
              </select>
            </div>
          </div>
          <div class="select full-width mt-5">
            <div class="e-select text-body-1">
              <select name="object" id="m-object" v-model="modelObject">
                <option
                  v-for="object in objects"
                  :key="object.id"
                  :value="object"
                >{{ object.name }}</option>
              </select>
            </div>
          </div>
          <div class="mt-8">
            <div class="text-body-2 has-opacity-65 mb-2">Кол-во комнат</div>
            <div class="e-checkboxes-group py-2">
              <div class="e-checkbox-btn is-lg d-flex justify-center" v-for="(type, ind) in allTypes" :key="`type${ind}`">
                <input
                  type="checkbox" v-model="filters.byType"
                  :value="type" name="type" :id="`m-type${ind}`"
                  @change="onChangeFilter"
                >
                <label :for="`m-type${ind}`">{{ type }}</label>
              </div>
            </div>
          </div>
          <div class="mt-8 pb-12" v-if="!isLoading && floorsCount > 1">
            <div class="text-body-2 has-opacity-65">Этаж</div>
            <div class="d-flex justify-center">
              <vue-slider
                v-model="filters.byFloor"
                width="200px"
                dot-size="30"
                height="6px"
                :min="1"
                :max="floorsCount"
                tooltip="always"
                tooltip-placement="bottom"
                lazy contained
                @change="onChangeFilter"
              />
            </div>
          </div>
          <div class="mt-8 pb-12" v-if="!isLoading && maxPrice > minPrice">
            <div class="text-body-2 has-opacity-65">Стоимость, ₽</div>
            <div class="d-flex justify-center">
              <vue-slider
                v-model="filters.byPrice"
                width="200px"
                dot-size="30"
                height="6px"
                :min="minPrice"
                :max="maxPrice"
                tooltip="always"
                tooltip-placement="bottom"
                :tooltip-formatter="priceFormatter"
                lazy contained
                @change="onChangeFilter"
              />
            </div>
          </div>
          <div class="mt-8 pb-12" v-if="!isLoading && maxArea > minArea">
            <div class="text-body-2 has-opacity-65">Площадь, м²</div>
            <div class="d-flex justify-center">
              <vue-slider
                v-model="filters.byArea"
                width="200px"
                dot-size="30"
                height="6px"
                :min="minArea"
                :max="maxArea"
                tooltip="always"
                tooltip-placement="bottom"
                lazy contained
                @change="onChangeFilter"
              />
            </div>
          </div>
          <div class="mt-8 text-center">
            <a href="#" @click.prevent="setFilter(true)" class="d-block text-body-1">очистить</a>
          </div>
        </div>
        <div>
          <button class="e-btn is-primary full-width is-tile" @click="$modal.hide('filters')">Показать</button>
        </div>
      </div>
    </modal>

    <modal name="info" width="100%" height="100%" adaptive>
      <apartment-details />
    </modal>

    <modal
      name="modal"
      @before-open="onOpenModal" @closed="onCloseModal"
      adaptive width="100%" :max-width="340" height="auto"
    >
      <div v-if="!!sentResult" class="d-flex flex-column align-center pa-15 pb-10">
        <svg v-if="sentResult === 'success'" style="width: 35%;fill: #02C39E;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path d="M248 0C111.033 0 0 111.033 0 248s111.033 248 248 248 248-111.033 248-248C495.841 111.099 384.901.159 248 0zm0 480C119.87 480 16 376.13 16 248S119.87 16 248 16s232 103.87 232 232c-.141 128.072-103.928 231.859-232 232z"/><path d="M370.344 158.344L208 320.688l-82.344-82.344a8 8 0 00-11.312 11.312l88 88a8 8 0 0011.312 0l168-168a8 8 0 00-11.312-11.312z"/></svg>
        <svg v-else style="width: 35%;fill: #DC3545;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path d="M248 0C111.033 0 0 111.033 0 248s111.033 248 248 248 248-111.033 248-248C495.841 111.099 384.901.159 248 0zm0 480C119.87 480 16 376.13 16 248S119.87 16 248 16s232 103.87 232 232c-.141 128.072-103.928 231.859-232 232z"/><path d="M361.136 134.864a8 8 0 00-11.312 0L248 236.688 146.176 134.864a8 8 0 10-11.312 11.312L236.688 248 134.864 349.824a8 8 0 00-.196 11.312 8 8 0 0011.508 0L248 259.312l101.824 101.824a8 8 0 0011.312-.196 8 8 0 000-11.116L259.312 248l101.824-101.824a8 8 0 000-11.312z"/></svg>
        <div class="text-subtitle-2 font-weight-400 mt-15">
          {{ sentResult === 'success' ? 'Запрос успешно отправлен' : 'Неудалось отправить запрос' }}
        </div>
        <a
          @click.prevent="$modal.hide('modal')" href="#"
          class="d-block text-body-2 tt-uppersace has-opacity-65 has-text-primary text-center mt-15"
        >закрыть</a>
      </div>
      <form v-else @submit.prevent="onSendRequest" class="pa-15 pb-10">
        <div class="text-h3 mb-15">{{ requestType == 'chessres' ? 'Забронировать' : 'Задать вопрос' }}</div>
        <div class="mb-5">
          <label class="d-block text-body-2 has-opacity-65 mb-2" for="name">Ф.И.О.*</label>
          <input
            type="text" id="name"
            v-model="contacts.name"
            class="e-input-field full-width"
            required
          >
        </div>
        <div class="mb-5">
          <label class="d-block text-body-2 has-opacity-65 mb-2" for="phone">Номер телефона*</label>
          <input
            type="tel" id="phone"
            v-mask="'+7 (###) ###-##-##'"
            v-model="contacts.phone"
            class="e-input-field full-width"
            required
          >
        </div>
        <div class="mb-8">
          <label class="d-block text-body-2 has-opacity-65 mb-2" for="email">Email</label>
          <input type="tel" id="email" v-model="contacts.email" class="e-input-field full-width">
        </div>

        <button
          class="e-btn is-primary full-width mb-5"
          :class="{'is-loading': isSending}"
          @submit="onSendRequest" :disabled="isSending || !contacts.phone || !contacts.name"
        >Отправить</button>
        <div class="text-body-2 has-opacity-45">Нажимая «Отправить», Вы соглашаетесь предоставить Вашу информацию на обработку</div>

        <a
          @click.prevent="$modal.hide('modal')" href="#"
          class="d-block text-body-2 tt-uppersace has-opacity-65 has-text-primary text-center mt-15"
        >закрыть</a>
      </form>
    </modal>

    <div class="loader" v-if="isLoading" :class="loadingClasses">
      <div>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 137.7 46.56" xml:space="preserve"><path class="st0" d="M126.49 3.07l-11.54 28.37-11.48-28.37h-8.95l16.55 39.63h7.66l16.54-39.63zM103.27 35.33H78.85V25.2h20.19l-2.99-7.15h-17.2v-7.6h14.03l-3.03-7.26H66.69v.57c1.14.72 2.22 1.53 3.23 2.45 4.72 4.33 7.12 9.94 7.12 16.68 0 6.78-2.4 12.41-7.12 16.73-1.01.92-2.09 1.72-3.23 2.45v.52h39.61l-3.03-7.26z"/><path d="M22.68 34.96H3.72L2.34 28.8 23.63 3.66h7.21V27.9h12.91v7.06H30.83v8.53h-8.15v-8.53zm0-7.06V15.58L12.37 27.9h10.31z" fill="#32addf"/><path class="st0" d="M65.79 8.7c-4-3.66-9.23-5.52-15.59-5.52H35.46v21.54h8.11V10.45h5.97c8.78 0 13.96 4.62 13.96 12.44 0 7.82-5.18 12.44-13.96 12.44H47.7v7.26h2.52c6.36 0 11.6-1.8 15.59-5.46 4-3.66 6.02-8.44 6.02-14.24-.01-5.8-2.04-10.53-6.04-14.19z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
  import ApartmentCard from './components/ApartmentCard'
  import ApartmentDetails from './components/ApartmentDetails'
  import { mapState, mapGetters } from 'vuex'
  import debounce from 'lodash/debounce'

  export default {
    components: { ApartmentCard, ApartmentDetails },

    data: () => ({
      view: 'tilePlus',
      timerForShowPanel:false,
      properties: [],
      isLoading: true,
      isSending: false,
      sentResult: null,
      loadingClasses: [],
      sliderWidth: '260px',
      filters: {
        byType: [],
        byArea: [0, 0],
        byFloor: [1, 1],
        byPrice: [0, 0],
        byLayout: [],
      },

      requestType: 'chessres',
      contacts: {
        name: '',
        phone: '',
        email: ''
      }
    }),

    computed: {
      ...mapState({
        isOpen: state => state.infoPanel.isOpen,
        defaultFilters: state => state.chess.defaultFilters,
        outsideFilters: state => state.chess.filters,
        districts: state => state.chess.districts,
        objects: state => state.chess.objects,
        sections: state => state.chess.sections,
        flatIdC: state => state.infoPanel.property.id,
        imageItems: state => [(state.infoPanel.property||{}).plan],
        imageIndex: state => state.imageIndex,
        parentLocation: state => state.parentLocation,
      }),
      ...mapGetters('chess', [
        'board',
        'allTypes',
        'floorsCount',
        'minPrice',
        'maxPrice',
        'minArea',
        'maxArea',
      ]),
      ...mapGetters([
        'mq'
      ]),
      modelDistrict: {
        get: vm => vm.districts.find(district => district.selected),
        async set(district) {
          this.isLoading = true
          this.closeInfoPanel()
          this.$store.commit('infoPanel/set', {
            path: 'property',
            payload: {}
          })
          const { id } = district
          await this.$store.dispatch('chess/selectDistrict', id)
          await this.setFilter(true)
          this.isLoading = false
        }
      },
      modelObject: {
        get: vm => vm.objects.find(object => object.selected),
        async set(object) {
          this.isLoading = true
          this.closeInfoPanel(true)
          this.$store.commit('infoPanel/set', {
            path: 'property',
            payload: {}
          })
          const { id } = object
          await this.$store.dispatch('chess/selectObject', id)
          await this.setFilter(true)
          this.isLoading = false
        }
      },
      isWidget: vm => !!vm.$config.type
    },

    watch: {
      async outsideFilters() {
        await this.setFilter()
      },

      isLoading: {
        handler(value) {
          if (value)
            setTimeout(_ => this.loadingClasses.push('is-loading'), 50)
          else this.loadingClasses = []
        },
        immediate: true
      },

      mq: {
        async handler(bp) {
          if (bp.mdAndUp) {
            if (this.isOpen) {
              this.$modal.hide('info')
              this.$store.commit('infoPanel/set', {
                path: 'isOpen',
                payload: false
              })
              await this.$nextTick()
              this.$store.commit('infoPanel/set', {
                path: 'isOpen',
                payload: true
              })
            }
          }

          if (bp.mdAndDown)
            if (this.isOpen)
              this.$modal.show('info')
        }
      }
    },

    async created() {
      try {
        /**
         * Получение данных со скрипта вставки (App.svelte)
         * namespace: _$is_{methodName} - from InsertScript
         * namespace: _$ws_{methodName} - to WidgetScript
         */
        window.addEventListener('message', this.messageListener)
        window.addEventListener('resize', debounce(this.resizeListener, 100, { trailing: true }))
        this.postMessage({ method: '_$is_appCreated' })
        this.resizeListener()

        await this.init()
      }
      catch (e) {
        console.error(e)
      }
    },

    beforeDestroy() {
      window.removeEventListener('message', this.messageListener)
      window.removeEventListener('resize', this.resizeListener)
    },

    methods: {
      /**
       * Отправка данных с виджета на сайт (скрипт вставку)
       * @param payload
       * @param origin
       */
      hasChildWithClass(itemId, className) {

        const itemElement = document.getElementById(`floorView-${itemId}`);
        // console.log(itemElement,itemId, className)

        if (itemElement) {
          let childElements = itemElement.getElementsByClassName(className);
          let foundEl = (childElements.length > 0)

          // console.log(itemId,foundEl)
          return foundEl
        } else {
          // console.log('elem not exist')
          return true;
        }
        // console.log('return false;')
        return false;
      },
      postMessage(payload, origin = '*') {
        try {
          if (!parent) throw new Error('nu pizdec')
          parent.postMessage(payload, origin)
        }
        catch (e) {
          console.error(e)
        }
      },
      getName(name){
        if(name=='1'){
          return "1комнатная"
        }
        if(name=='2'){
          return "2комнатная"
        }
        if(name=='3'){
          return "3комнатная"
        }
        if(name=='С'){
          return "Студия"
        }
        if(name=='2С'){
          return "ЕвроДвушка"
        }
        return name
      },
      async resizeListener() {
        this.$store.commit('set', {
          path: 'windowWidth',
          payload: window.innerWidth
        })
        await this.setInjectFrameSizes()
      },

      async setInjectFrameSizes() {
        await this.$forceNextTick()
        if (!this.isWidget) {
          const tiles = document.getElementById('tiles')
          const main = document.getElementById('main')
          if (tiles && main)
            main.style.minHeight = `${tiles.scrollHeight}px`
        }
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0],
            x = win.innerWidth || docElem.clientWidth || body.clientWidth,
            y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;


        const page = document.querySelector('.b-page')
        y = Math.max(y,page.scrollHeight,document.body.scrollHeight)
        this.postMessage({
          method: '_$is_setFrameSize',
          payload: {
            // height: page ? page.scrollHeight : document.body.scrollHeight,
            height: y,
          }
        })
      },

      async messageListener(event) {
        // if (IS_DEV) console.log('WIDGET: ', event)
        try {
          // const { protocol, host } = parse(this.siteUrl)
          // if (process.env.NODE_ENV === 'production')
          //   if (this.siteUrl && event.origin != `${protocol}//${host}`)
          //     throw new Error('blocked cross origin')

          const { method, payload } = event.data
          await this.$store.dispatch(method, payload)
        }
        catch (e) {
          // console.warn(e)
        }
      },

      async init() {
        try {
          this.isLoading = true
          await this.$store.dispatch('chess/selectObject', this.$config.objectId)
          await this.setFilter(true)
        }
        catch(e) {
          console.error(e)
        }
        finally {
          this.isLoading = false
          await this.setInjectFrameSizes()
        }
      },

      async setFilter(isReset) {

        const {
          byArea, byType,
          byPrice, byFloor,
          byLayout, byObject,
          bySection, byProperty
        } = !isReset ? this.outsideFilters : this.defaultFilters || {}

        const propertyId = (byProperty||[])[0]
        const objectId = (byObject||[])[0]
        const sectionId = (bySection||[])[0]

        if (objectId && this.modelObject !== objectId) {
          this.isLoading = true
          await this.$store.dispatch('chess/selectObject', objectId)
          this.isLoading = false
        }

        // TODO: copypaste from ApartmentCard.vue method onViewApartment()
        if (propertyId) {
          const property = this.$store.getters['chess/propertyById'](propertyId)
          if (property) {
            this.$store.dispatch('chess/selectPropterty', propertyId)
            this.$store.commit('infoPanel/set', {
              path: 'property',
              payload: property
            })

            if (this.mq.mdAndDown)
              this.$modal.show('info')

            this.$store.commit('infoPanel/set', {
              path: 'isOpen',
              payload: true
            })
          }
        }

        function getParameterByName(name, url = window.location.href) {
          name = name.replace(/[\[\]]/g, '\\$&');
          var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
              results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }


        var defaultTypes = []
        var urlparent = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
        var typedefault = getParameterByName('typedefault',urlparent);
          if (typedefault) {
            defaultTypes.push(typedefault)
        }


        const filters = {
          bySection: sectionId || null,
          byLayout: byLayout || [],
          byType: byType || defaultTypes,
          byArea: [(byArea||[])[0] || this.minArea, (byArea||[])[1] || this.maxArea],
          byFloor: [(byFloor||[])[0] || 1 , (byFloor||[])[1] || this.floorsCount],
          byPrice: [(byPrice||[])[0] || this.minPrice, (byPrice||[])[1] || this.maxPrice]
        }

        // if(byType){
        //   console.log('---start----byType',byType)
        // }
        // console.log('---start----setFilter')


        this.filters = filters
        await this.$nextTick()
        this.onChangeFilter()
      },

      reverseKeys: n => [...Array(n).keys()].slice().reverse(),

      closeInfoPanel() {
        this.$store.commit('infoPanel/set', {
          path: 'isOpen',
          payload: false
        })
        this.$store.dispatch('chess/selectPropterty', null)
        this.$store.commit('infoPanel/set', {
          path: 'property',
          payload: {}
        })
      },

      async onCloseWidget() {
        this.postMessage({
          method: '_$is_closeWidget'
        })
        await this.setFilter(true)
        this.closeInfoPanel(true)
      },

      onChangeFilter() {
        this.$store.commit('chess/changeFilters', this.filters)
        this.closeInfoPanel(true)
        setTimeout(_ => {let arrcards = document.getElementsByClassName('c-building__flat-type'); arrcards[0].click(); /*обработать ситуацию когда фильтры не вернули ничего*/ },500);
      },

      priceFormatter(value) {
        return value.toLocaleString('ru-RU')
      },

      onOpenModal({ params }) {
        this.requestType = params.requestType
      },

      async onSendRequest() {
        try {
          this.isSending = true
          const {
            requestType,
            contacts: rawContacts,
            flatIdC,
          } = this

          const contacts = {
            ...rawContacts,
            phone: rawContacts.phone.replace(/[^\d]/g, '')
          }

          const url = this.parentLocation.href
          const urlSplit = new URL(url).host.split('.')
          let utms = {}

          if (urlSplit.length > 2) {
            const developer = urlSplit[0]
            utms['utm_google'] = `google_ads_${developer}`
            utms['utm_yandex'] = `yandex_ads_${developer}`
          }

          const res = await this.$http.$post('order', {
            requestType,
            dateTime: Date.now(),
            contacts,
            data: { flatIdC, comment: '', comaigicid: '' },
            referer: { url, ...utms },
          })

          if (res !== 'Success') throw new Error(res)
          this.sentResult = 'success'
        }
        catch (error) {
          this.sentResult = 'failure'
          console.warn(error)
        }
        finally {
          this.isSending = false
        }
      },

      onCloseModal() {
        this.sentResult = null
        this.isLoading = false
        this.contacts = {
          name: '',
          phone: '',
          email: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .st0 {
    fill: #18214b;
  }
  .loader {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(white, .85);

    svg {
      width: 100px;
      filter: grayscale(1);
      transform: scale(1.15);
      transition: all .5s ease-in-out;
    }

    &.is-loading svg {
      filter: grayscale(0);
      transform: scale(1);
    }
  }

  .select {
    width: 200px;
  }

  header, .box-shadow-bottom {
    box-shadow: 0 1px 10px 0px rgba(darken(#F8FAFC, 50),.09);
  }
  footer {
    padding: 8px;
    box-shadow: 0 -1px 10px 0px rgba(darken(#F8FAFC, 50),.09);
  }

  .legend {
    display: flex;
    align-items: center;

    &__item {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 15px;
      }

      span {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 5px;
      }
      &.is-free span {
        background-color: #02C39E;
      }
      &.is-reserved span {
        background-color: #F5AF05;
      }
      &.is-sold span {
        background-color: #DC3545;
      }
      &.is-disabled span {
        background-color: #CCCCCC;
      }
    }
  }

  .crm4dev-close {
    text-decoration: none;
    transform: rotate(0);
    transform-origin: 50% 50%;
    transition: all .225s ease-in-out;
    line-height: 0;
    padding: 5px;

    &:hover {
      transform: rotate(180deg);
    }

    i {
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      width: 14px;
      height: 14px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 409.806 409.806'%3E%3Cpath d='M228.929 205.01L404.596 29.343c6.78-6.548 6.968-17.352.42-24.132-6.548-6.78-17.352-6.968-24.132-.42-.142.137-.282.277-.42.42L204.796 180.878 29.129 5.21c-6.78-6.548-17.584-6.36-24.132.42-6.388 6.614-6.388 17.099 0 23.713L180.664 205.01 4.997 380.677c-6.663 6.664-6.663 17.468 0 24.132 6.664 6.662 17.468 6.662 24.132 0l175.667-175.667 175.667 175.667c6.78 6.548 17.584 6.36 24.132-.42 6.387-6.614 6.387-17.099 0-23.712L228.929 205.01z'/%3E%3C/svg%3E");
    }
  }
  .mobile-menu {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .hidden {
    display: none;
  }
</style>
