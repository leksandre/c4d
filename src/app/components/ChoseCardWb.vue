<template>
  <a
    href="#" class="c-building__flat"
    :class="{'is-active': property.isSelected, 'is-not-filtred': !property.isFiltred }"
    @click.prevent="onViewApartment"
    :id="property.id"
  >

<!--    v-if="property.isFiltred"-->
<!--    v-if="this.inFav"-->
    {{  }}
    <div
      class="c-building__flat-type"
    >

<!--      v-if="property.isFiltred"-->
<!--      v-if="this.inFav"-->
      <div
           :style="{'border-color': color, 'background-color': color, 'border-width':'9px', 'border-style':'inset', 'width':'100%', 'height':'100%',    'align-items': 'center',  'display': 'flex',  'justify-content': 'center', 'border-radius':'13px'}"
      >
      {{KKS}}
    </div>
    </div>
    <div class="c-building__flat-inner pa-2" >

<!--      :style="{'min-height':'250px', 'max-height':'250px', 'min-height':'250px'}"-->
      
<!--      v-if="property.isFiltred"-->
<!--      v-if="this.inFav"-->
      <div      >
      <div class="d-flex ">
<!--        <div-->
<!--          class="c-building__flat-type"-->
<!--          :style="{'background-color': color}"-->
<!--        >-->
<!--          {{ property['rooms'] }}-->
<!--        </div>-->
        <div class="ml-2 has-opacity-65" style="font-size: small">{{ KKS }}</div>
<!--        <div class="ml-auto has-opacity-65">№{{ property.number }}</div>-->
      </div>
      <div class="font-weight-bold text-body-1 mt-2">Цена на "white box"  {{ property.cost | num }} ₽</div>
      <div class="font-weight-bold text-body-1 mt-2">Цена с полной чистовой отделкой {{ priceWhiteBox() }} ₽</div>
      <div class="has-opacity-65 mt-1">{{ property['area'] | num }} м² - <br> {{ property.priceM2 | num }} ₽/м²</div>

      <div class="mb-10">
        <a class="c-image-property image-link"  @click="onOpenImage">
          <img :src="property.images[0].src" alt="">
        </a>
      </div>

    </div>

<!--      <svg  @click="removeFromFav(property?property.id:null)" xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="26" viewBox="0 0 1200.000000 1200.000000" preserveAspectRatio="xMidYMid meet" class="trash_building_flat"><g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M4815 11295 c-211 -39 -475 -195 -605 -359 -83 -103 -114 -168 -359 -754 l-243 -582 -1067 -2 -1066 -3 -45 -25 c-49 -28 -84 -73 -100 -129 -13 -48 -13 -505 1 -554 13 -49 63 -105 114 -128 36 -17 73 -19 387 -19 l348 0 3 -3302 3 -3303 21 -95 c40 -178 100 -337 170 -454 170 -283 388 -461 652 -535 l96 -26 2910 0 2910 0 96 26 c166 46 293 122 425 254 225 225 373 533 413 860 8 63 11 1051 11 3333 l0 3242 344 0 c236 0 354 4 377 12 54 18 87 48 114 102 25 49 25 53 25 305 0 145 -5 272 -10 293 -14 49 -52 93 -104 121 l-41 22 -1065 3 -1065 2 -139 333 c-402 959 -389 933 -525 1067 -130 129 -310 235 -479 283 l-77 22 -1180 2 c-931 1 -1195 -1 -1250 -12z m2333 -859 c15 -8 37 -25 48 -38 17 -18 334 -771 334 -792 0 -3 -673 -6 -1496 -6 -1193 0 -1495 3 -1491 13 121 296 323 767 335 781 10 10 31 27 47 37 29 18 76 19 1113 19 911 0 1087 -2 1110 -14z m1892 -4868 c0 -1940 -4 -3208 -10 -3263 -16 -150 -76 -299 -153 -380 l-44 -45 -2798 0 -2799 0 -42 45 c-43 47 -99 151 -130 245 -18 53 -19 171 -22 3313 l-2 3257 3000 0 3000 0 0 -3172z"/><path d="M4020 7434 c-19 -8 -50 -29 -68 -47 -66 -64 -62 70 -62 -2077 0 -2172 -5 -2016 69 -2083 61 -55 85 -59 388 -55 l271 3 43 30 c23 17 52 48 63 70 l21 40 0 1995 0 1995 -21 40 c-11 22 -40 54 -63 70 l-43 30 -281 2 c-236 2 -288 0 -317 -13z"/><path d="M5720 7428 c-26 -14 -57 -41 -75 -66 l-30 -44 0 -2008 0 -2008 30 -44 c18 -25 49 -52 75 -65 43 -22 54 -23 312 -23 220 0 275 3 306 15 47 20 79 50 103 97 18 36 19 91 19 2028 0 1937 -1 1992 -19 2028 -24 47 -56 77 -103 97 -31 12 -86 15 -306 15 -258 0 -269 -1 -312 -22z"/><path d="M7439 7430 c-48 -25 -96 -81 -108 -127 -15 -53 -15 -3933 0 -3986 13 -47 60 -102 110 -128 35 -17 61 -19 312 -19 267 0 275 1 318 23 29 16 54 40 74 72 l30 48 0 1997 0 1997 -30 48 c-20 32 -45 56 -74 72 -43 23 -50 23 -320 23 -252 -1 -279 -3 -312 -20z"/></g></svg>-->


    </div>
  </a>
</template>

<script>

function numberWithSpaces(x) {
  if (typeof x === "undefined") return "";
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();

  console.log('--')
  console.log('--')
  // console.log('--',cname, cvalue)
  var unique = cvalue.filter((value, index, array) => array.indexOf(value) === index);
  cvalue = JSON.stringify(unique);
  // console.log('--',cname, cvalue)

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
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




import { mapGetters } from 'vuex'
  export default {
    props: {
      property: {
        type: Object,
        required: true
      },
      prices_finish: []
    },
    data: () => ({
      free: '#02C39E',
      reserved: '#F5AF05',
      sold: '#DC3545'
    }),
    computed: {
      ...mapGetters([ 'mq' ]),


      inFav(){

        if (this.property) {
          if (this.property.hasOwnProperty("id")) {
            // console.log(this.property['images'])
            // console.log(this.property.images)
            // console.log(this.property)
            // console.log(this.media)
            let uuid = this.property['id']

            // if (uuid===null)return false
            let cookieName = "favItemsAppartament"
            if (checkCookie(cookieName)) {
              let json1 = getCookie(cookieName);
              let fav = JSON.parse(json1);
              if(fav.indexOf(uuid) != -1)
              {
                return this.inFavCustom = true
              }
            }
            return this.inFavCustom = false

          }
        }


      },

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
        switch (vm.property.type_apartment) {




          // getName(name,kitchen){
          //   if(name=='0'){
          //     return "Студия"
          //   }
          //   if (kitchen == 'true' | kitchen === true) {
          //     if (name === '1'| name === 1) {
          //       return "Евро 2-комнатная"
          //     }
          //     if (name === '2'| name === 2) {
          //       return "Евро 3-комнатная"
          //     }
          //   } else {
          //     if (name === '1'| name === 1) {
          //       return "1-комнатная"
          //     }
          //     if (name === '2'| name === 2) {
          //       return "2-комнатная"
          //     }
          //   }


          case '1'|1:
            if (vm.property.kitchen_living == 'true' | vm.property.kitchen_living == true){
              KKS = 'Евро 2-комнатная'
            } else {
              KKS = '1-комнатная'
            }
            break
          case '2'|2:
            if (vm.property.kitchen_living == 'true' | vm.property.kitchen_living == true){
              KKS = 'Евро 2-комнатная'
            } else {
              KKS = '2-комнатнаяs'
            }
            break
          case '3'|3:
            KKS = 'Евро 3-комнатная'
            break
          case '4'|4:
            KKS = 'Евро 4-комнатная'
            break
          case '0'||0:
            KKS = 'Студия'
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

      priceWhiteBox(){
        try {

          let pricesForWhiteBox = this.prices_finish.цена.filter((num) => num.площадь.toString() === (this.property['area']).toString()) // ; console.log(num.площадь,arr1[0].replace(',','.'),num.площадь.toString(),num)

          if (typeof pricesForWhiteBox[0].цена_с_ремонтом_сбер !== "undefined")
            return numberWithSpaces(pricesForWhiteBox [0].цена_с_ремонтом_сбер)//.toString()

        } catch (e) {
          // console.log('urlparent',urlparent)
          // alert(e)
        }
        //prices_finish
        return false;
      },

      removeFromFav(uuid){
        let cookieName = "favItemsAppartament"

        // console.log('-- try removeFromFav',uuid)
        let fav = []
        if (checkCookie(cookieName)) {
          let json1 = getCookie(cookieName);
          fav = JSON.parse(json1);
          let index = fav.indexOf(uuid)
          // console.log('-- try removeFromFav index',index)
          // console.log('-- try removeFromFav fav',fav)
          if( index != -1)
          {
            fav.splice(index, 1);
            if (fav.length === 0) {
              fav = []

              setTimeout(
                  ()=>{
                    var FlatChooosed = document.getElementById("closeFavWindow");
                    if (typeof FlatChooosed !== "undefined")
                      FlatChooosed.click()
                  }
                  , 500)

            }
            this.inFavCustom = false
          }else{
            // console.log('-- try fav.push1 fav',fav)
            fav.push(uuid);
            this.inFavCustom = true
          }
        } else {
          // console.log('-- try fav.push2 fav',fav)
          fav.push(uuid);
          this.inFavCustom = true
        };






        (function myLoop(i) {
          setTimeout(function() {
            // console.log('uuid--',uuid)
            if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
          }, 500)
        })(10);

        setCookie(cookieName, fav, 365);//fu*g async part

        (function myLoop(i) {
          setTimeout(function() {
            // console.log('fav--',fav)
            if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
          }, 500)
        })(10);

        this.$nextTick()
        this.$forceNextTick()

      },


      // TODO: copypaste to App.vue method setFilter()
      onViewApartment() {

        if (this.property) {
          if (this.property.hasOwnProperty("area")) {
            let text1 = this.property['area'];
            // console.log('--text1',text1)
            // text1 = this.property.area;
            // console.log('--',text1)
            // let value1 = parseFloat(text1.replace(",", "."));
            let value1 = text1
            let value2 = value1-0.01
            let value3 = value1+0.01
            let addstr1 = '?sqr='+ value2.toFixed(2) + '_' + value3.toFixed(2)

            // let url = 'https://xn--h1alcedd.xn--d1aqf.xn--p1ai/calculators/kalkulyator-ipoteki/'

            // window.parent.location.href = url
            // window.parent.location.replace(url);

            // window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')

            // window.open(url, '_blank')

            window.parent.location.replace('/index.html'+ addstr1); window.location.href = '/index.html'+ addstr1;

          }
        }

        // if (this.$config.mode === 'api') {
        //   this.$parent.postMessage({
        //     method: '_$is_dispatchEvent',
        //     payload: {
        //       type: 'selectedProperty',
        //       detail: {
        //         property: this.property
        //       }
        //     }
        //   })
        //   return
        // }
        //
        // this.$store.dispatch('chess/selectPropterty', this.property.id)
        // this.$store.commit('infoPanel/set', {
        //   path: 'property',
        //   payload: this.property
        // })
        //
        // if (this.mq.mdAndDown)
        //   this.$modal.show('info')
        //
        // this.$store.commit('infoPanel/set', {
        //   path: 'isOpen',
        //   payload: true
        // })
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
