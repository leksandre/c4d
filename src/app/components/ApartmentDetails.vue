<template>
  <aside class="overflow-hidden contentFlat" :class="mq.mdAndUp ? asideClasses : ['full-height']">
    <div class="flat">
    <div class="flat__info">
<!--      <share />-->
    <div class="d-flex flex-column full-height" v-if="property">
      <div class="full-height overflow-x-auto pb-10" :class="{'pt-5': mq.mdAndDown, 'pt-10': mq.mdAndUp}">
        <div :class="{'px-5': mq.mdAndDown, 'px-10': mq.mdAndUp}">
<!--          <div class="text-body-1 font-weight-500 mb-5">{{ title }}</div>-->

          <div class="mb-5">
            <div class="text-copy1">{{ property.ТипПланировки }}</div>
          </div>

          <div class="mb-10">
<!--            <a class="c-image-property image-link" @click="onOpenImage">-->
<!--              <img :src="property.plan" alt="">-->
<!--            </a>-->
          </div>
          <div class="mb-5">
<!--            <div class="text-body-2 mb-1">Стоимость</div>-->
            <div class="text-copy2">{{ property['price'] | num }} ₽</div>
          </div>
          <div class="text-copy3">
<!--            В ипотеку:-->
          </div>

          <div class="flat__callback">
            <button type="button" class="buttonCopy" data-callback="true" data-href="zabronirovat-kvartiru" aria-label="Забронировать" data-init="true"><span>Забронировать</span></button>
            <a href="/kvartiry/flat-291/pdf" class="buttonCopy2">
              <svg width="24" height="25" viewBox="0 0 24 25"  xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.19165C3.86193 7.19165 3.75 7.30358 3.75 7.44165V15.4417C3.75 15.5797 3.86197 15.6917 4 15.6917H6.5V17.1917H4C3.03347 17.1917 2.25 16.4081 2.25 15.4417V7.44165C2.25 6.47516 3.03351 5.69165 4 5.69165H20C20.9665 5.69165 21.75 6.47517 21.75 7.44165V15.4417C21.75 16.4081 20.9666 17.1917 20 17.1917H17.5V15.6917H20C20.138 15.6917 20.25 15.5797 20.25 15.4417V7.44165C20.25 7.30357 20.1381 7.19165 20 7.19165H4Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3.19165C8.30964 3.19165 7.75 3.75129 7.75 4.44165V5.69165H16.25V4.44165C16.25 3.75129 15.6904 3.19165 15 3.19165H9ZM6.25 4.44165C6.25 2.92287 7.48122 1.69165 9 1.69165H15C16.5188 1.69165 17.75 2.92287 17.75 4.44165V7.19165H6.25V4.44165Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 13.1917V21.6916L16.25 21.6917V13.1917H7.75ZM6.25 12.9417C6.25 12.2512 6.80971 11.6917 7.5 11.6917H16.5C17.1902 11.6917 17.75 12.2512 17.75 12.9417V21.9417C17.75 22.632 17.1903 23.1917 16.5 23.1917L7.5 23.1916C6.80971 23.1916 6.25 22.6321 6.25 21.9416V12.9417Z"></path>
                <path d="M16 10.4417C15.4477 10.4417 15 9.99394 15 9.44165C15 8.88937 15.4477 8.44165 16 8.44165C16.5523 8.44165 17 8.88937 17 9.44165C17 9.99394 16.5523 10.4417 16 10.4417Z"></path>
              </svg>
              Распечатать PDF
            </a>
          </div>

          <div class="text-copy4">
            Характеристики квартиры
          </div>
          <div class="mb-10">
            <div class="c-list text-body-2">
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
                <div>{{ property['ПлощадьОбщая'] }} м²</div>
              </div>
              <div
                v-if="!['Прочее', 'Гараж/Паркоместо'].includes(property['ТипНедвижимости'])"
                class="c-list__item d-flex justify-space-between"
              >
                <div>Площадь кухни</div>
                <div>{{ property['ПлощадьКухни'] }} м²</div>
              </div>
              <div class="c-list__item d-flex justify-space-between">
                <div>Этаж</div>
                <div>{{ property.floor }}</div>
              </div>
              <div class="c-list__item d-flex justify-space-between" v-for="(b, i) in property['Балконы']" :key="`p${i}`">
                <div>{{ b['Тип'] }}</div>
                <div>{{ b['Площадь'] }} м²</div>
              </div>
              <div
                class="c-list__item d-flex justify-space-between"
                v-if="!['Прочее', 'Гараж/Паркоместо'].includes(property['ТипНедвижимости'])"
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
      <div class="pa-5 l-row">
        <div
          class="l-col l-col-6 py-0"
          v-if="!['Бронь', 'Договор', 'Выданы ключи', 'Не для продажи', 'На расторжении'].includes(property.status)"
        >
          <a
            href="#" @click="onBook"
            class="e-btn full-width full-height is-primary"
          >Забронировать</a>
        </div>
        <div class="l-col py-0">
          <a
            href="#" @click="onPopQuestion"
            class="e-btn full-width full-height is-primary"
          >Задать вопрос</a>
        </div>
      </div>
<!--      <a href="#" @click="onClose" class="close d-flex align-center justify-center px-10 py-5">-->
<!--        <span class="text-body-1">Закрыть</span><i class="e-icon is-close ml-5"></i>-->
<!--      </a>-->
    </div>
    </div>
    </div>
  </aside>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    data: () => ({
      asideClasses: ['c-aside'],
      descriptioOpened: false,
      collapseTriggerText: 'Развернуть',
      collapseStyle: {},
    }),

    computed: {
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
      onOpenImage() {
        this.$store.commit('set', {
          path: 'imageIndex',
          payload: 0
        })
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
