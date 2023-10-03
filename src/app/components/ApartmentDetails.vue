<template>
  <aside class="overflow-hidden contentFlat" :class="mq.mdAndUp ? asideClasses : ['full-height']">
    <div class="flat">



<!--    <div v-bind:class = "(isMobile())?'flat__media_mobile':'flat__media'">-->
<!--      <light-box :media="media" :closable="false"></light-box>-->
<!--    </div>-->
    <div v-bind:class = "(isMobile())?'flat__media_mobile':'flat__media'">
      <light-box :media="this.matched" :closable="false" :showCaption="true" :showThumbs="true"></light-box>
    </div>
    <div class="flat__info">
<!--      <share />-->
    <div class="d-flex flex-column full-height" v-if="property">
      <div class="panelRight full-height  pb-10" :class="{'pt-5': mq.mdAndDown, 'pt-10': mq.mdAndUp}">
<!--        overflow-x-auto-->
        <div :class="{'px-5': mq.mdAndDown, 'px-10': mq.mdAndUp}">
<!--          <div class="text-body-1 font-weight-500 mb-5">{{ title }}</div>-->

          <div class="mb-5 ">
            <div class="title-copy1">{{ getName(property.type_apartment) }} {{ property.area }} м²</div>
          </div>

          <div class="mb-10">
<!--            <a class="c-image-property image-link" @click="onOpenImage">-->
<!--              <img :src="property.plan" alt="">-->
<!--            </a>-->
          </div>
          <div class="mb-5">
<!--            <div class="text-body-2 mb-1">Стоимость</div>-->
            <div class="title-copy2">{{ property['cost'] | num }} ₽</div>
          </div>
          <div class="text-copy3">
<!--            В ипотеку:-->
          </div>



          <div class="flat__callback">
            <a href="/kvartiry/flat-291/pdf" class="buttonCopy2" style="  background-color: #e47554;">
             &nbsp&nbspЗабронировать
            </a>
          </div>

          <div class="text-copy4">
            Характеристики квартиры
          </div>
          <div class="mb-10">
            <div class="c-list text-body-2">


              <div class="c-list__item d-flex justify-space-between">
                <div>type_apartment</div>
                <div>{{ property.type_apartment }}</div>
              </div>

              <div class="c-list__item d-flex justify-space-between">
                <div>rooms</div>
                <div>{{ property.rooms }}</div>
              </div>

              <div class="c-list__item d-flex justify-space-between">
                <div>Статус</div>
                <div>{{ property.status }}</div>
              </div>
              <div class="c-list__item d-flex justify-space-between">
                <div>Цена, м²</div>
                <div>{{ property.priceM2 | num }} ₽</div>
              </div>
              <div class="c-list__item d-flex justify-space-between">
                <div>Площадь</div>
                <div>{{ property['area'] }} м²</div>
              </div>
              <div
                v-if="!['Прочее', 'Гараж/Паркоместо'].includes(property['type_object'])"
                class="c-list__item d-flex justify-space-between"
              >
                <div>Площадь кухни</div>
                <div>{{ property['area_kitchen'] }} м²</div>
              </div>
              <div class="c-list__item d-flex justify-space-between">
                <div>Этаж</div>
                <div>{{ property.floor }}</div>
              </div>
              <div class="c-list__item d-flex justify-space-between" v-for="(b, i) in property['Balconies']" :key="`p${i}`">
                <div>{{ b['type'] }}</div>
                <div>{{ b['square_meters'] }} м²</div>
              </div>

<!--              <div class="c-list__item d-flex justify-space-between" v-for="(b, i) in property['images']" :key="`p${i}`">-->
<!--                <div>{{ i }}</div>-->
<!--                <div>{{ b }} м²</div>-->
<!--              </div>-->

              <div
                class="c-list__item d-flex justify-space-between"
                v-if="!['Прочее', 'Гараж/Паркоместо'].includes(property['type_object'])"
              >
                <div>{{ property['СовмещенныйСанУзел'] ? 'Совмещенный' : 'Раздельный' }} cан. узел</div>
              </div>
            </div>
          </div>

          <div class="mb-10" v-if="property.description">
            <div class="text-body-2 mb-1">Описание</div>
            <div class="text-body-1 font-weight-500 mb-5">{{ title }}</div>
            <div class="c-collapsible text-body-1" :class="{'is-open': descriptionLenght < 1220 || descriptioOpened }" v-if="property.description">
              <div class="c-collapsible__content" :style="collapseStyle" ref="description">{{ property.description }}</div>
              <div v-if="(descriptionLenght > 1220)">
                <a href="#" class="c-collapsible__trigger" @click="onToggleCollapse">{{ collapseTriggerText }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

<!--      <a href="#" @click="onClose" class="close d-flex align-center justify-center px-10 py-5">-->
<!--        <span class="text-body-1">Закрыть</span><i class="e-icon is-close ml-5"></i>-->
<!--      </a>-->
    </div>




      <div class="flat__callback">

        <a href="/kvartiry/flat-291/pdf" class="buttonCopy2" style="  position: relative; left: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  style="
    position: absolute;
    left: 20px;
" ><path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#fff"/></svg>
          &nbsp&nbsp Поделиться
        </a>

<!--        <div class="pa-5 l-row">-->
<!--          <div class="l-col py-0">-->
<!--            <a-->
<!--                href="#" @click="onPopQuestion"-->
<!--                class="e-btn e-btn2 full-width full-height is-primary"-->
<!--            >Задать вопрос</a>-->
<!--          </div>-->
<!--        </div>-->


        <button type="button" class="buttonCopy2" data-callback="true" data-href="zabronirovat-kvartiru" aria-label="Задать вопрос" data-init="true"  style="  position: relative; left: 20px;">
          <span style="position: absolute; left:20px;">?</span>
          <span>Задать вопрос</span>
        </button>

      </div>





    </div>
    </div>

<!--    <vue-iframe-->
<!--        src="https://google.com"-->
<!--        allow="camera *; geolocation *; microphone *; autoplay *"-->
<!--        frame-id="my-ifram"-->
<!--        name="my-frame"-->
<!--        width="150px"-->
<!--        height="200px"-->
<!--    />-->
<!--    import VueIframe from 'vue-iframes'-->
<!--    Vue.use(VueIframe)-->

  </aside>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  // import LightBox from './vue-image-lightbox/src/App.vue'
  import LightBox from './vue-image-lightbox/components/LightBox.vue'

  // import {media} from "vue-image-lightbox/src/dummy";
  // require('vue-image-lightbox/dist/vue-image-lightbox.min.css')//original style


  export default {
    data: () => ({
      asideClasses: ['c-aside'],
      descriptioOpened: false,
      collapseTriggerText: 'Развернуть',
      collapseStyle: {},
      media:[
        { // For image
          thumb: 'https://dummyimage.com/800/ffffff/000000',
          src: 'https://dummyimage.com/1600/ffffff/000000',
          caption: '1caption111', // Optional
          srcset: 'https://dummyimage.com/800/ffffff/000000' // Optional for displaying responsive images
        },
        { // For image
          thumb: 'https://dummyimage.com/1280/000000/ffffff',
          src: 'https://dummyimage.com/400/000000/ffffff',
          caption: '<tag>2caption111</tag>', // Optional
          srcset: 'https://dummyimage.com/1280/000/fff' // Optional for displaying responsive images
        }
      ]
    }),

    components: {
      LightBox,
    },
    computed: {

      matched(){
        // return this.media
        if (this.property) {
          if (this.property.hasOwnProperty("images")) {
            // console.log(this.property['images'])
            // console.log(this.property.images)
            // console.log(this.property)
            // console.log(this.media)
            return this.property['images']
          }
        }

        if (typeof this.media != "undefined")
          if (this.hasOwnProperty("media"))
            if (this.media)
              return this.media

        return []
        // return  this.property['images']?this.property['images']:this.media

      },
      ...mapState({
        isOpen: state => state.infoPanel.isOpen,
        property: state => state.infoPanel.property
      }),
      ...mapGetters('infoPanel', [
        'title',
      ]),
      ...mapGetters(['mq']),
      descriptionLenght: vm => vm.property.description.length,
    },

    watch: {
      isOpen(value) {
        // console.log(this.property)
        if (value) {
          this.asideClasses.push('is-open')
          setTimeout(_ => this.asideClasses.push('is-opened'), 250)
          this.$parent.postMessage({
            method: '_$is_getLocationParam',
            payload: 'href'
          })
        } else {
          this.asideClasses = ['c-aside']
        }
      }
    },

    methods: {
      getName(name){
        if(name=='0'){
          return "Студия"
        }
        if(name=='1'){
          return "1"
        }
        if(name=='2'){
          return "2"
        }
        if(name=='3'){
          return "3"
        }
        if(name=='С'){
          return "Студия"
        }
        if(name=='2С'){
          return "2С"
        }
        return name
      },
      onOpenImage() {
        this.$store.commit('set', {
          path: 'imageIndex',
          payload: 0
        })
      },
      isMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // console.log('navigator.userAgent',navigator.userAgent)
          return true
        } else {
          // console.log('!navigator.userAgent',navigator.userAgent)
          return false
        }
      },
      onClose() {
        if (this.mq.mdAndDown)
          this.$modal.hide('info')

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

      onToggleCollapse() {
        if (this.descriptioOpened) {
          this.descriptioOpened = false
          this.collapseTriggerText = 'Развернуть'
          this.collapseStyle = {}
        }
        else {
          this.descriptioOpened = true
          this.collapseTriggerText = 'Свернуть'
          const height = this.$refs.description.scrollHeight
          this.collapseStyle = { 'max-height': `${height}px`}
        }
      },

      onPopQuestion() {
        if (this.$config.mode === 'api') {
          this.$parent.$parent.postMessage({
            method: '_$is_dispatchEvent',
            payload: {
              type: 'popQuestionProperty',
              detail: {
                property: this.property
              }
            }
          })
          return
        }

        this.$modal.show('modal', {
          requestType: 'chesscall'
        })
      },

      onBook() {
        if (this.$config.mode === 'api') {
          this.$parent.$parent.postMessage({
            method: '_$is_dispatchEvent',
            payload: {
              type: 'bookProperty',
              detail: {
                property: this.property
              }
            }
          })
          return
        }

        this.$modal.show('modal', {
          requestType: 'chessres'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close {
    color: white;
    background-color: rgba(#e73232, .5);
  }
</style>
