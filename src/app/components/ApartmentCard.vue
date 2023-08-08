<template>
  <a
    href="#" class="c-building__flat"
    :class="{'is-active': property.isSelected, 'is-not-filtred': !property.isFiltred }"
    @click.prevent="onViewApartment"

  >
    <div
      class="c-building__flat-type"
    >
      <div v-if="property.isFiltred"
           :style="{'border-color': color, 'background-color': color, 'border-width':'9px', 'border-style':'inset', 'width':'100%', 'height':'100%',    'align-items': 'center',  'display': 'flex',  'justify-content': 'center', 'border-radius':'13px'}"
      >
      {{KKS}}
    </div>
    </div>
    <div class="c-building__flat-inner pa-2" :style="{'min-height':'240px'}">
      <div v-if="property.isFiltred">
      <div class="d-flex align-center">
        <div
          class="c-building__flat-type"
          :style="{'background-color': color}"
        >
          {{ property['КоличествоКомнатСтрокой'] }}
        </div>
        <div class="ml-2 has-opacity-65">{{ property['ТипНедвижимости'] }}</div>
        <div class="ml-auto has-opacity-65">№{{ property.number }}</div>
      </div>
      <div class="font-weight-bold text-body-1 mt-2">{{ property.price | num }} ₽</div>
      <div class="has-opacity-65 mt-1">{{ property['ПлощадьОбщая'] | num }} м² - {{ property.priceM2 | num }} ₽/м²</div>

      <div class="mb-10">
        <a class="c-image-property image-link"  @click="onOpenImage">
          <img :src="property.plan" alt="">
        </a>
      </div>

    </div>
    </div>
  </a>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: {
      property: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      free: '#02C39E',
      reserved: '#F5AF05',
      sold: '#DC3545'
    }),
    computed: {
      ...mapGetters([ 'mq' ]),
      color: vm => {
        let color
        switch (vm.property.status) {
          case 'Свободна':
            color = vm.free
            break
          case 'Бронь':
            color = vm.reserved
            break
          case 'Договор':
            color = vm.sold
            break
          case 'Выданы ключи':
            color = vm.sold
            break
          default:
            color = '#ccc'
        }
        return color
      },
      KKS: vm => {
        let KKS
        switch (vm.property.КоличествоКомнатСтрокой) {
          case '1':
            KKS = '1комнатная'
            break
          case '2':
            KKS = '2конатная'
            break
          case '3':
            KKS = '3комнатная'
            break
          case 'С':
            KKS = 'Студия'
            break
          case '2С':
            KKS = 'ЕвроДвушка'
            break
          default:
            KKS = ''
        }
        return KKS
      }
    },

    methods: {
      // TODO: copypaste to App.vue method setFilter()
      onViewApartment() {
        if (this.$config.mode === 'api') {
          this.$parent.postMessage({
            method: '_$is_dispatchEvent',
            payload: {
              type: 'selectedProperty',
              detail: {
                property: this.property
              }
            }
          })
          return
        }

        this.$store.dispatch('chess/selectPropterty', this.property.id)
        this.$store.commit('infoPanel/set', {
          path: 'property',
          payload: this.property
        })

        if (this.mq.mdAndDown)
          this.$modal.show('info')

        this.$store.commit('infoPanel/set', {
          path: 'isOpen',
          payload: true
        })
      },

      onOpenImage() {
        // this.$store.commit('set', {
        //   path: 'imageIndex',
        //   payload: 0
        // })
      },

      onViewApartment2ghost() {
        if (this.$config.mode === 'api') {
          this.$parent.postMessage({
            method: '_$is_dispatchEvent',
            payload: {
              type: 'selectedProperty',
              detail: {
                property: this.property
              }
            }
          })
          return
        }

        this.$store.dispatch('chess/selectPropterty', this.property.id)
        this.$store.commit('infoPanel/set', {
          path: 'property',
          payload: this.property
        })

        if (this.mq.mdAndDown)
          this.$modal.show('info')

        this.$store.commit('infoPanel/set', {
          path: 'isOpen',
          payload: true
        })
      }

    }
  }
</script>

<style lang="scss" scoped>
  .is-not-filtred {
    filter: grayscale(0.9);
  }
</style>
