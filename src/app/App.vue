<template>
  <div class="b-page d-flex flex-column full-height overflow-hidden pos-r">
    <header
      class="flex-grow-0 pr-4 pos-rel disNone"
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
                <option value="tile">Компактная</option>
              </select>
            </div>
          </div>
        </div>
        <a v-if="isWidget" href="#" class="crm4dev-close" @click.prevent="onCloseWidget"><i></i></a>
      </div>
    </header>
    <div class="maincontent_parent" id="maincontent_parent1">
    <main class="d-flex flex-grow-1 pos-rel maincontent" id="main">
      <div
        v-if="!isLoading" class="content flex-grow-1 overflow-x-auto "
      >






        <section id="tiles" :class="{ 'is-simple': view === 'tile' }" class="py-10 c-building text-body-2">
<!--          <div class="tableWithFloor"    v-bind:class = "(isMobile())?'tableWithFloor_mobile':'tableWithFloor'"  >-->
            <div class="tableWithFloor" >
            <div class="tittleForBarFloor">
<!--              выберите ваш<br>этаж-->
              >>>>>
            </div>
            <div >














              <div>
                <div class="c-modal" v-show="modal_3">
                  <span>modal_3</span>
                </div>

<!--                v-on:click="setModal"-->

                <div class="bg" id="bg_fav_window" v-show="modal_3"     >
                  <div class="close" v-on:click="setModal" >
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <svg viewBox="0 0 36 36" class="circle" >
                      <path
                            stroke-dasharray="100, 100"
                            d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>

                  <div class="favwindowFlatParent">
                    <div class="favwindowFlat" v-for=" (idhash, idxf) in favCoocies()" >
  <!--                                           {{idhash}}-->
  <!--                                           {{idxf}}-->
  <!--                                           {{propertyGet(idhash)}}-->
                      <apartment-card-fav
                          :key="idhash"
                          :property="propertyGet(idhash)"
                      />
                    </div>
                  </div>



<!--                  вариант с разбивокй по этажам-->
<!--                          <div class="c-building__floor just_building__floor" v-for=" (floor, idxfloor) in reverseKeys(floorsCount)"    >-->
<!--&lt;!&ndash;                            :class="{ 'nowInSale': hasChildWithClassFav(floor, 'c-building__flat-type') }"&ndash;&gt;-->
<!--                            <div :key="`floor-${floor}`" :id="`floorViewFav-${floor}`" class="floorViewSection1"-->
<!--                                 v-if="((floor+1) % 2 == 0) && hasChildWithClassFav(floor-1, 'c-building__flat-type') ">-->
<!--                              <div class="buttonFloor" @click="floorClick(floor, 'c-building__flat-type')">{{ floor + 1 }}</div>-->
<!--                              <div v-for="(section, sectionId) in board" :key="sectionId" class="disNone1">-->
<!--                                <div class="c-building__section">-->
<!--                                  <apartment-card-fav-->
<!--                                      v-for="property in section.propertiesOnFloor[`floor_${floor + 1}`]"-->
<!--                                      :key="property.id"-->
<!--
<!--                                  />-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--&lt;!&ndash;                            :class="{ 'nowInSale': hasChildWithClassFav(floor-1, 'c-building__flat-type') } "&ndash;&gt;-->
<!--                            <div :key="`floor-${floor-1}`" :id="`floorViewFav-${floor-1}`"  class="floorViewSection2"-->
<!--                                 v-if="((floor-1) % 2 == 0) && hasChildWithClassFav(floor-1, 'c-building__flat-type') ">-->
<!--                              <div class="buttonFloor"  @click="floorClick(floor-1, 'c-building__flat-type')">{{ floor }}</div>-->
<!--                              <div v-for="(section, sectionId) in board" :key="sectionId" class="disNone1">-->
<!--                                <div class="c-building__section">-->
<!--                                  <apartment-card-fav-->
<!--                                      v-for="property in section.propertiesOnFloor[`floor_${floor}`]"-->
<!--                                      :key="property.id"-->
<!--                                      :property="property"-->
<!--                                  />-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                  -->




                </div>
              </div>
























              <div class="c-building__floor just_building__floor" v-for=" (floor, idxfloor) in reverseKeys(floorsCount)"    >

                <div :key="`floor-${floor}`" :id="`floorView-${floor}`" :class="{ 'nowInSale': hasChildWithClass(floor, 'c-building__flat-type') }" class="floorViewSection1"
                     v-if="((floor+1) % 2 == 0)">
                  <div class="buttonFloor" @click="floorClick(floor, 'c-building__flat-type')">{{ floor + 1 }}</div>
                  <div v-for="(section, sectionId) in board" :key="sectionId" class="disNone">
                    <div class="c-building__section">
                      <apartment-card
                          v-for="property in section.propertiesOnFloor[`floor_${floor + 1}`]"
                          :key="property.id"
                          :property="property"
                      />
                    </div>
                  </div>
                </div>

                <div :key="`floor-${floor-1}`" :id="`floorView-${floor-1}`" :class="{ 'nowInSale': hasChildWithClass(floor-1, 'c-building__flat-type') } " class="floorViewSection2"
                     v-if="((floor-1) % 2 == 0)">
                  <div class="buttonFloor"  @click="floorClick(floor-1, 'c-building__flat-type')">{{ floor }}</div>
                  <div v-for="(section, sectionId) in board" :key="sectionId" class="disNone">
                    <div class="c-building__section">
                      <apartment-card
                          v-for="property in section.propertiesOnFloor[`floor_${floor}`]"
                          :key="property.id"
                          :property="property"
                      />
                    </div>
                  </div>
                </div>



              </div>



            </div>



















          </div>
        </section>
      </div>

<!--   !!!!!!!fix1  v-if="mq.mdAndUp" -->
      <apartment-details  v-if="mq.mdAndUp" @changemode="modal_3 = $event" />
    </main>
    </div>
    <footer :class="{'pa-2': mq.mdAndDown}" v-if="false">
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
      </div>
    </div>

    <!--   was here hided element -->

  </div>

</template>

<script>


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie(cname) {
  let user = getCookie(cname);
  if (user != "") {
    return true
  } else {
    return false
  }
}



  import ApartmentCard from './components/ApartmentCard'
  import ApartmentCardFav from './components/ApartmentCardFav'
  import ApartmentDetails from './components/ApartmentDetails'
  import { mapState, mapGetters } from 'vuex'
  import debounce from 'lodash/debounce'

  export default {
    components: { ApartmentCard, ApartmentDetails, ApartmentCardFav },

    data: () => ({
      modal_3: false,
      view: 'tilePlus',
      testData: ' <pre> </pre> ',
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
    mounted: function() {
      //console.log('!!!!!!!!!!!!!!!! mounted')

      if (this.isMobile()) {
        let interval1 = setInterval(_ => {
          var panel = document.getElementsByClassName("tableWithFloor")[0];
          var FlatInfo = document.getElementsByClassName("flat__info")[0];
          if (typeof panel !== "undefined")
            if (typeof FlatInfo !== "undefined") {
              FlatInfo.appendChild(panel);
              clearInterval(interval1)
            }
        }, 50)
      }

    },
    methods: {
      /**
       * Отправка данных с виджета на сайт (скрипт вставку)
       * @param payload
       * @param origin
       */
      isMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      setModal() {//almost same function from ApartmentDetails
        this.modal_3 = !this.modal_3
        // console.log(this.modal_3 , 'this.modal_3 ')
        let elBg  = document.getElementById('bg_fav_window')
        let testParent  = document.getElementById('maincontent_parent1')

        if(elBg && testParent){
          // console.log(elBg)
          // console.log(testParent)
          testParent.appendChild(elBg)
        }

      },

      floorClick(itemId, className){
        const itemElement = document.getElementById(`floorView-${itemId}`);
        if (itemElement) {
          let childElements = itemElement.getElementsByClassName(className);
          // console.log('childElements1',childElements)
          let foundEl = (childElements.length > 0)
          if(foundEl){
            childElements[0].click()
          }
          return foundEl
        } else {
          return true;
        }
        return false;

      },
      hasChildWithClass(itemId, className) {

        const itemElement = document.getElementById(`floorView-${itemId}`);
        // console.log(itemElement,itemId, className)

        if (itemElement) {
          let childElements = itemElement.getElementsByClassName(className);
          // console.log('childElements1',childElements)
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
      hasChildWithClassFav(itemId, className) {

        const itemElement = document.getElementById(`floorViewFav-${itemId}`);
        // console.log(itemElement,itemId, className)

        if (itemElement) {
          let childElements = itemElement.getElementsByClassName(className);
          // console.log('childElements1',childElements)
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
        if(name=='0'){
          return "0"
        }
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

        // console.log('win.innerHeight',win.innerHeight)
        // console.log('docElem.clientHeight',docElem.clientHeight)
        // console.log('body.clientHeight',body.clientHeight)
        // console.log('document.body.scrollHeight',document.body.scrollHeight)
        // console.log('page.clientHeight',page.clientHeight)
        // console.log('page.scrollHeight',page.scrollHeight)
        // console.log('y',y)



        y = Math.max(y,page.scrollHeight,document.body.scrollHeight)
        // console.log('y result',y)
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

        console.log('---start----urlparent',urlparent)
        var typedefault = getParameterByName('typedefault',urlparent);
        console.log('---start----typedefault',typedefault)
          if (typedefault) {
            // let typedefault = parseInt(typedefault, 10)
            // defaultTypes.push(typedefault)
            defaultTypes.push(typedefault.toString())
        }

        console.log('---start----defaultTypes',defaultTypes)
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

      favCoocies() {
        let cookieName = "favItemsAppartament"
        if (checkCookie(cookieName)) {
          let json1 = getCookie(cookieName);
          let fav = JSON.parse(json1);
          return fav
        }
      },

      propertyGet(hash){
        // console.log('this.$store.state.chess',this.$store.state.chess)
        // console.log('this.$store.state.chess.properties[0]',this.$store.state.chess.properties[0])
        let filterCriteria = [hash];
        let filteredData = this.$store.state.chess.properties.filter(item => filterCriteria.includes(item.id));
        // console.log('filteredData',filteredData);
        return filteredData[0]
      },

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
        setTimeout(_ => {let arrcards = document.getElementsByClassName('c-building__flat-type');
          // console.log('arrcards',arrcards)
          if (arrcards.length > 0) {
            arrcards[0].click()

            /// action after load and fix all transformations

          } else {
            console.log('по данному запросу объекты недвижимости недоступны')
            // alert('по данному запросу объекты недвижимости недоступны')
          }
          ;
          /*обработать ситуацию когда фильтры не вернули ничего*/
        },500);
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
          // console.log('urlSplit',urlSplit)
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

.maincontent_parent {
  width: 100%;
  min-height: 1200px;
  //border: 2px dashed;
}
.maincontent{
  max-width: 1600px;
  height: 1200px;

  //height: 100%;
  //max-height: 2160px;

  //border: 5px solid;
  margin: 0px auto 0px auto;
}
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
  .nowInSale .buttonFloor {
    cursor: pointer;
    background-color: #219794;
    color: white;
    border: 2px #219794 solid;
  }
  .scaling07 {
    transform: scale(0.7); /* Equal to scaleX(0.7) scaleY(0.7) */
  }

  .disNone{//!!!!!!!fix2
    display:none;
  }



  .just_building__floor{
    display: flex;
  }


  .buttonFloor {
    cursor: not-allowed;
    background-color: #fff;
    border: none;
    color: #CCCDCF;
    padding-top: 14px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 8px 8px;
    border-radius: 100px;
    width: 50px;
    height: 50px;
    border: 2px #D7E6E2 solid;
  }

</style>
