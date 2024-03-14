<template>
  <a
    href="#" class="c-building__flat"
    :class="{'is-active': property.isSelected, 'is-not-filtred': !property.isFiltred }"
    @click.prevent="onViewApartment"

  >
    <div  v-if="property.isFiltred"
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
          {{ property['rooms'] }}
        </div>
        <div class="ml-2 has-opacity-65">{{ property['type_object'] }}</div>
        <!--        <div class="ml-auto has-opacity-65">№{{ property.name }}</div>-->
      </div>

        <div class="ml-auto has-opacity-65">{{ property.name }}</div>

        <div class="font-weight-bold text-body-1 mt-2">{{ property.cost | num }} ₽</div>
      <div class="has-opacity-65 mt-1">{{ property['area'] | num }} м² - {{ property.priceM2 | num }} ₽/м²</div>
      <div class="mt-1 has-opacity-65">Статус квартиры - {{ property.status }}</div>
      <div class="mb-10">
        <a class="c-image-property image-link"  @click="onOpenImage">
<!--          <img :src="property.plan" alt="">-->
          <img :src="property.images[0].src" alt="">
        </a>
      </div>

    </div>

    </div>
  </a>
</template>

<script>

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
        switch (vm.property.rooms) {
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

      checkViewMode() {
        var field = 'manager_mode';
        var url = window.parent.location.href;
        if (url.indexOf('?' + field + '=') != -1)
          return true;
        else if (url.indexOf('&' + field + '=') != -1)
          return true;
        return false
      },

      onViewApartmentGoTo() {
        //https://xn--d1acscjb2a6f.xn--p1ai/index.html?sqr=26.41_26.43
        let value1 = parseFloat((""+this.property.area).replace(",", "."));
        //console.log('value1', value1);
        let value2 = value1-0.01
        let value3 = value1+0.01
        let addstr1 = '?sqr='+ value2.toFixed(2) + '_' + value3.toFixed(2)

        setCookie('floorAppartament', this.property.floor, 1)

        window.parent.location.href = '/index.html'+ addstr1;
        window.parent.location.replace('/index.html'+ addstr1);

        // window.parent.location.href = 'https://xn--d1acscjb2a6f.xn--p1ai/index.html'+ addstr1;
        // window.parent.location.replace('https://xn--d1acscjb2a6f.xn--p1ai/index.html'+ addstr1);

        // window.location.href = 'https://xn--d1acscjb2a6f.xn--p1ai/index.html'+ addstr1;
        // window.location.replace('https://xn--d1acscjb2a6f.xn--p1ai/index.html'+ addstr1);
      },


      onViewApartment() {

       if(this.checkViewMode()) this.onViewApartmentGoTo()

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
