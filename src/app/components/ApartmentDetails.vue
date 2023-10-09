<template>
  <aside class="overflow-hidden contentFlat" :class="mq.mdAndUp ? asideClasses : ['full-height']">
    <div class="flat">

      <p id="tooltip-text">Добавить в избранное</p>

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



        <div class="tooltip-container"
             onmouseleave=" document.getElementById('tooltip-text').style.display = 'none'; "
             onmouseout=" document.getElementById('tooltip-text').style.display = 'none'; "

             onmouseover=" document.getElementById('tooltip-text').style.display = 'block'; "
             onmousemove=" document.getElementById('tooltip-text').style.display = 'block'; "
             style="
    position: absolute;
    right: 23px;
    cursor: pointer;
    top: 12px;

    width: 40px;
    height: 40px;
                       "
        >


        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="36" height="42"
             viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"
             title="Добавить в избранное"
             id="tooltip-button"
             style="
    position: absolute;
    /*right: 23px;*/
    cursor: pointer;
    /*top: 12px;*/
                       "
             @click="saveToFav(property?property.id:null)"
        >
          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
             :fill="getColor" stroke="orange" stroke-width="240"
             stroke-dasharray="5,5" stroke-linecap="round">
            <path
                d="M2496 4968 c-28 -29 -61 -126 -311 -895 l-279 -863 -919 0 c-611 0 -925 -3 -938 -10 -23 -13 -49 -61 -49 -93 0 -13 9 -36 20 -50 11 -14 346 -262 745 -552 398 -289 727 -530 730 -535 3 -4 -121 -396 -275 -870 -154 -474 -280 -873 -280 -887 0 -36 60 -93 98 -93 37 0 -26 -43 812 565 l710 516 710 -516 c838 -608 775 -565 812 -565 37 0 98 57 98 92 0 12 -126 414 -281 891 -155 477 -280 869 -278 871 2 1 331 240 731 530 400 290 737 539 748 553 11 14 20 37 20 50 0 32 -26 80 -49 93 -13 7 -327 10 -938 10 l-919 0 -279 863 c-249 767 -283 866 -311 895 -23 23 -41 32 -64 32 -23 0 -41 -9 -64 -32z"/>
          </g>
        </svg>

        </div>


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
              Забронировать
<!--              <span class="buttonCopy2span">Забронировать</span>-->
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
          <span class="buttonCopy2span" >Поделиться</span>
        </a>





        <button type="button" v-on:click="setModalDialog" class="buttonCopy2" data-callback="true" data-href="zabronirovat-kvartiru" aria-label="Задать вопрос" data-init="true"  style="  position: relative; left: 21px;">
          <span style="position: absolute;
    left: 26px;
    font-size: 20px;
    font-weight: 900;
    font-style: normal;
    font-stretch: ultra-condensed;">?</span>
          <span class="buttonCopy2span" >Задать вопрос</span>
        </button>






        <button type="button" class="buttonCopy2" v-on:click="setModal" :value="property?property.id:null" data-callback="true" data-href="zabronirovat-kvartiru" aria-label="В избранное" data-init="true"  style="  position: relative; left: 21px;">

<!--          <span style="position: absolute;-->
<!--    left: 20px;-->
<!--    font-size: 20px;-->
<!--    font-weight: 900;-->
<!--    font-style: normal;-->
<!--    font-stretch: ultra-condensed;"></span>-->

<!--          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="14" height="18" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" style="-->
<!--    position: absolute;-->
<!--    left: 20px;-->
<!--" ><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M2496 4968 c-28 -29 -61 -126 -311 -895 l-279 -863 -919 0 c-611 0 -925 -3 -938 -10 -23 -13 -49 -61 -49 -93 0 -13 9 -36 20 -50 11 -14 346 -262 745 -552 398 -289 727 -530 730 -535 3 -4 -121 -396 -275 -870 -154 -474 -280 -873 -280 -887 0 -36 60 -93 98 -93 37 0 -26 -43 812 565 l710 516 710 -516 c838 -608 775 -565 812 -565 37 0 98 57 98 92 0 12 -126 414 -281 891 -155 477 -280 869 -278 871 2 1 331 240 731 530 400 290 737 539 748 553 11 14 20 37 20 50 0 32 -26 80 -49 93 -13 7 -327 10 -938 10 l-919 0 -279 863 c-249 767 -283 866 -311 895 -23 23 -41 32 -64 32 -23 0 -41 -9 -64 -32z"/></g></svg>-->

          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="19" height="24" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"  style="
    position: absolute;
    left: 20px;
" ><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M2496 4968 c-28 -29 -61 -126 -311 -895 l-279 -863 -919 0 c-611 0 -925 -3 -938 -10 -23 -13 -49 -61 -49 -93 0 -13 9 -36 20 -50 11 -14 346 -262 745 -552 398 -289 727 -530 730 -535 3 -4 -121 -396 -275 -870 -154 -474 -280 -873 -280 -887 0 -36 60 -93 98 -93 37 0 -26 -43 812 565 l710 516 710 -516 c838 -608 775 -565 812 -565 37 0 98 57 98 92 0 12 -126 414 -281 891 -155 477 -280 869 -278 871 2 1 331 240 731 530 400 290 737 539 748 553 11 14 20 37 20 50 0 32 -26 80 -49 93 -13 7 -327 10 -938 10 l-919 0 -279 863 c-249 767 -283 866 -311 895 -23 23 -41 32 -64 32 -23 0 -41 -9 -64 -32z"/></g></svg>
          <span class="buttonCopy2span">В избранное</span>
        </button>

      </div>





      <div>
        <div class="c-modal" v-show="modal_2">
          <span>modal_2</span>
        </div>
        <div class="bg" id="bg_fav_window_dialog" v-show="modal_2" v-on:click="setModalDialog">
          <div class="close" v-on:click="setModalDialog">
            <span v-on:click="setModalDialog"></span>
            <span v-on:click="setModalDialog"></span>
            <span v-on:click="setModalDialog"></span>
            <span v-on:click="setModalDialog"></span>
            <svg viewBox="0 0 36 36" class="circle" v-on:click="setModalDialog">
              <path v-on:click="setModalDialog"
                    stroke-dasharray="100, 100"
                    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>

          <div class="favwindowFlatParent">
            <div class="favwindowFlat" style="    width: 500px;    height: 550px;" >
<!--              {{property.id}}-->



              <div class="dialogAsc-mask" onclick="event.stopPropagation();">
                <div class="dialogAsc-wrapper">
                  <div class="dialogAsc-container">
                    <div class="dialogAsc-header">
<!--                      <h6 name="header">Укажите пожалуйста ваши данные и номер телефона </h6>-->
<!--                      <h6 name="header">Укажите пожалуйста ваши данные </h6>-->
                      <h6 name="header">Заполните</h6>
                    </div>

                    <div class="dialogAsc-body">

<!--                      <input-->
<!--                          :value="text"-->
<!--                          @input="event => text = event.target.value">-->



                      <form
                          :action="FORM_ENDPOINT"
                          @submit="handleSubmit"
                          method="POST"
                      >
                        <div>
                          <input type="text" placeholder="Имя" name="name" required />
                        </div>

<!--                        <div>-->
<!--                          <input type="email" placeholder="Email" name="email" required />-->
<!--                        </div>-->

                        <div>
                          <input type="phone" placeholder="Номер телефона" name="phone" required />
                        </div>

                        <h6 name="body">Ваш вопрос</h6>
                        <div>
                          <textarea placeholder="Ваше сообщение" name="message" required />
                        </div>
<br>
                        <div>
                          <a class="buttonCopy2">Отправить сообщение</a>
                        </div>
                      </form>

                      <div v-if="submitted">
                        <h2>Спасибо!</h2>
                        <div>Мы ответим, как только рассмотрим ваше обращение.</div>
                      </div>



                    </div>

                    <div class="dialogAsc-footer">
                      <slot name="footer">
<!--                        default footer    -->
                        <a
                            class="dialogAsc-default-button"
                            @click="setModalDialog"
                        >Закрыть</a>




                      </slot>
                    </div>








                  </div>
                </div>
              </div>














            </div>
          </div>

        </div>
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

function scrollTop(){
  window.parent.scrollTo({ top: 0, behavior: 'smooth' });
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




  import { mapState, mapGetters } from 'vuex'
  // import LightBox from './vue-image-lightbox/src/App.vue'
  import LightBox from './vue-image-lightbox/components/LightBox.vue'

  // import {media} from "vue-image-lightbox/src/dummy";
  // require('vue-image-lightbox/dist/vue-image-lightbox.min.css')//original style


  export default {
    data: () => ({

      submitted: false,
      FORM_ENDPOINT: "endpointUrl",

      modal_2: false,
      inFavCustom:false,
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
      getColor() {
        // this.inFavCustom = this.inFav

        let v1 = this.inFav

        // console.log('-0')
        // console.log('this.inFav',this.inFav)
        // console.log('this.inFavCustom',this.inFavCustom)
        // console.log('-1')

        return (this.inFavCustom) ? '#e47554' : '#ffffff';
      },
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
        property: state => state.infoPanel.property,
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

      handleSubmit() {
        setTimeout(() => {
          this.submitted = true;
        }, 100);
      },

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

      setModalDialog() {
        scrollTop();
        let elBg  = document.getElementById('bg_fav_window_dialog')
        let testParent  = document.getElementById('maincontent_parent1')

        if(elBg && testParent){
          // console.log(elBg)
          // console.log(testParent)
          testParent.appendChild(elBg)
        }

        this.modal_2 = !this.modal_2



      },

      setModal() {
        this.$emit("changemode", "True");
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

      saveToFav(uuid){
        let cookieName = "favItemsAppartament"


        let fav = []
        if (checkCookie(cookieName)) {
          let json1 = getCookie(cookieName);
          fav = JSON.parse(json1);
          let index = fav.indexOf(uuid)
          if( index != -1)
          {
            fav.splice(index, 1);
            this.inFavCustom = false
          }else{
            fav.push(uuid);
            this.inFavCustom = true
          }
        } else {
          fav.push(uuid);
          this.inFavCustom = true
        }

        // console.log('uuid--',uuid)
        // console.log('fav--',fav)
        console.log('--')
        console.log('--')
        setCookie(cookieName, fav, 365)
// setTimeout(    this.$nextTick(), 500)
// setTimeout(    this.$forceNextTick(), 500)

        this.$nextTick()
        this.$forceNextTick()

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



  .dialogAsc-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .dialogAsc-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .dialogAsc-container {

    width: 500px;
    height: 550px;

    //width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    border-radius: 20px;
  }

  .dialogAsc-header h6 {
    margin-top: 0;
    //color: #42b983;
  }

  .dialogAsc-body {
    margin: 20px 0;
  }

  .dialogAsc-default-button {
    float: right;
    cursor: pointer;
  }
  .dialogAsc-default-button:hover {
  text-decoration: underline;
  }

  .dialogAsc-enter-from {
    opacity: 0;
  }

  .dialogAsc-leave-to {
    opacity: 0;
  }

  .dialogAsc-enter-from .dialogAsc-container,
  .dialogAsc-leave-to .dialogAsc-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }




 textarea{
   width: 300px;
   height: 150px;
 }
  h6 {
    font-size: 1.1rem;
    line-height: initial;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .form-fields {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 0.9rem;
  }
  input[type="text"], input[type="email"], input[type="phone"], textarea {
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 4px;
    margin: 10px;
  }
  body { display: block }
  button[type="submit"] {
    background-color: rgb(67 56 202);
    color: white;
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
  }
  
</style>
