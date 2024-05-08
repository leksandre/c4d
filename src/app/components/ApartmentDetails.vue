<template>
  <aside class="overflow-hidden contentFlat" v-if="!checkViewMode()"  :class="mq.mdAndUp ? asideClasses : ['full-height']">
    <div class="flat">



<!--    <div v-bind:class = "(isMobile())?'flat__media_mobile':'flat__media'">-->
<!--      <light-box :media="media" :closable="false"></light-box>-->
<!--    </div>-->

<!--    <div v-bind:class = "(isMobile())?'flat__media_mobile':'flat__media'">-->
    <div class = "flat__media" >
      <light-box :media="this.matched" :closable="false" :showCaption="true" :showThumbs="true"></light-box>

      <div class="vue-lb-info_bottom">
      <div class="vue-lb-info_Etag" v-on:click="showHide"><div>Наличие по этажам</div></div>
      </div>

    </div>
    <div class="flat__info">
<!--      <share />-->
    <div class="d-flex flex-column full-height" v-if="property">
      <div class="panelRight full-height  pb-10" :class="{'pt-5': mq.mdAndDown, 'pt-10': mq.mdAndUp}">

        <p id="tooltip-text">Добавлено в избранное</p>

        <div class="tooltip-container"



             style="
    position: absolute;
    right: 23px;
    cursor: pointer;
    top: 45px;

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
            <div class="title-copy1">{{ getName(property.type_apartment,property.kitchen_living) }} {{ property.area }} м²</div>
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

<!--          <div class="text-copy3">-->
<!--&lt;!&ndash;            В ипотеку:&ndash;&gt;-->
<!--          </div>-->

          <div class="mb-10">
            <div class="c-list text-body-2">
              <div class="c-list__item d-flex justify-space-between">
                <div>Скидки за наличный расчет</div>
              </div>
            </div>
          </div>

          <div class="flat__callback" v-on:click="setModalDialog(true,property)"  >
            <button class="buttonCopy2" style="  background-color: #e47554;"  >
              Забронировать
<!--              <span class="buttonCopy2span">Забронировать</span>-->
            </button>
          </div>

          <div class="text-copy4">
            Характеристики квартиры
          </div>
          <div class="mb-10">
            <div class="c-list text-body-2">


<!--              <div class="c-list__item d-flex justify-space-between">-->
<!--                <div>type_apartment</div>-->
<!--                <div>{{ property.type_apartment }}</div>-->
<!--              </div>-->

<!--              <div class="c-list__item d-flex justify-space-between">-->
<!--                <div>rooms</div>-->
<!--                <div>{{ property.rooms }}</div>-->
<!--              </div>-->

<!--              <div class="c-list__item d-flex justify-space-between">-->
<!--                <div>kitchen_living</div>-->
<!--                <div>{{ property.kitchen_living }}</div>-->
<!--              </div>-->

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

<!--              <div-->
<!--                class="c-list__item d-flex justify-space-between featuresSmall"-->
<!--                v-if="!['Прочее', 'Гараж/Паркоместо'].includes(property['type_object'])"-->
<!--              >-->
<!--                <div>{{ property['СовмещенныйСанУзел'] ? 'Совмещенный' : 'Раздельный' }} cан. узел</div>-->
<!--              </div>-->

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




        <button class="buttonCopy2" style="  position: relative; left: 20px;" v-if="webShareApiSupported"   v-on:click="shareViaWebShare" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  style="
    position: absolute;
    left: 20px;
" ><path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#fff"/></svg>
          <span class="buttonCopy2span" >Поделиться</span>
        </button>

        <button class="buttonCopy2" style="  position: relative; left: 20px;" v-else   v-on:click="saveToClipboard" >
<!--          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="52" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"  style="-->
<!--    position: absolute;-->
<!--    left: 20px;-->
<!--" ><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -961 -490 -2237 274 -3068 425 -462 951 -737 1583 -827 119 -17 512 -16 635 1 562 77 1067 321 1454 699 432 424 681 920 768 1527 17 118 17 512 0 630 -71 496 -262 943 -557 1300 -418 506 -982 825 -1630 921 -123 18 -478 26 -600 13z m1100 -1250 c103 -19 148 -50 316 -218 195 -195 214 -229 214 -371 0 -158 2 -155 -409 -566 -376 -378 -397 -394 -512 -413 -107 -17 -216 14 -293 84 l-42 38 -34 -33 -34 -33 35 -40 c115 -127 123 -317 18 -455 -23 -31 -188 -202 -366 -379 -295 -294 -330 -325 -393 -355 -60 -28 -80 -32 -150 -32 -70 0 -90 4 -150 32 -59 28 -91 55 -225 190 -196 196 -215 229 -215 372 0 153 -6 145 422 571 341 340 372 368 426 388 123 45 269 21 362 -61 l46 -41 35 34 34 33 -34 36 c-105 107 -124 301 -41 429 13 20 182 194 377 388 369 368 386 382 491 402 59 12 57 12 122 0z" /><path d="M2978 3262 c-334 -333 -338 -338 -338 -378 0 -27 7 -51 21 -69 l22 -27 93 93 94 94 95 -95 95 -95 -91 -91 c-53 -53 -89 -97 -85 -103 4 -6 21 -18 38 -27 63 -33 69 -28 420 323 180 181 332 341 337 356 18 46 -7 82 -151 225 -126 124 -137 132 -174 132 -38 0 -48 -10 -376 -338z" /><path d="M2115 2390 c-33 -14 -663 -652 -674 -683 -18 -46 7 -82 151 -224 126 -125 137 -133 174 -133 38 0 48 10 376 338 334 333 338 338 338 378 0 27 -7 51 -21 68 l-22 28 -61 -61 -61 -61 -95 95 -94 95 57 58 c31 32 57 61 57 65 0 12 -64 47 -85 46 -11 0 -29 -4 -40 -9z" /></g></svg>-->
<!--          <span class="buttonCopy2span" >Скопировать url</span>-->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  style="
    position: absolute;
    left: 20px;
" ><path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#fff"/></svg>
          <span class="buttonCopy2span" >Поделиться</span>
        </button>



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


        <button type="button" v-on:click="setModalDialogBySelectFalt" class="buttonCopy2" data-callback="true" data-href="chosePlan" aria-label="Выбрать планировку" data-init="true"  style="  position: relative; left: 21px;">
          <span style="position: absolute;
    left: 26px;
    font-size: 20px;
    font-weight: 900;
    font-style: normal;
    font-stretch: ultra-condensed;">&</span>
          <span class="buttonCopy2span" >Выбрать планировку</span>
        </button>

<!--            <div  v-on:click="setModal9" class="buttonCopy2" style="-->
<!--            max-width: 1600px;-->
<!--            margin: 0px auto 0px auto;-->
<!--        " v-show="!modal_9" >показать калькулятор иппотеки Сбербанка</div>-->
<!--            modal_9-->


        <button v-if="false && !isMobile()" type="button" class="buttonCopy2" v-on:click="goToChess" aria-label="Выбор с помощью фильтров" style="position: relative; left: 21px;">

          <svg fill="#fff" style="
    position: absolute;
    left: 20px;
" width="19" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 297 297">
            <g>
              <path d="M148.51,117.216c32.317,0,58.608-26.291,58.608-58.608S180.827,0,148.51,0c-32.317,0-58.608,26.291-58.608,58.608   S116.193,117.216,148.51,117.216z"/>
              <path d="m227.154,145.618c-0.025-0.008-0.073-0.026-0.098-0.032-7.631-1.864-30.999-5.133-30.999-5.133-2.638-0.812-5.457,0.585-6.406,3.188l-35.174,96.509c-2.029,5.567-9.903,5.567-11.932,0l-35.174-96.509c-0.766-2.102-2.75-3.42-4.876-3.42-0.504,0-24.531,3.369-32.53,5.358-21.858,5.435-35.645,26.929-35.645,49.329v80.302c0,12.034 9.756,21.79 21.79,21.79h184.782c12.034,0 21.79-9.756 21.79-21.79v-80.569c-0.001-22.303-14.328-42.096-35.528-49.023z"/>
              <path d="m161.775,138.613c-1.404-1.53-3.456-2.299-5.532-2.299h-15.485c-2.076,0-4.129,0.77-5.532,2.299-2.173,2.368-2.489,5.789-0.946,8.462l8.278,12.479-3.875,32.69 7.631,20.3c0.744,2.042 3.631,2.042 4.375,0l7.631-20.3-3.875-32.69 8.278-12.479c1.541-2.673 1.225-6.094-0.948-8.462z"/>
            </g>
          </svg>

  <span class="buttonCopy2span">К фильтрам</span>
        </button>



        <div v-if="!isMobile()" type="button" v-on:click="goToChess" aria-label="Выбор с помощью фильтров" style="position: relative;
    left: 53px;
    cursor: pointer;
    width: 200px;
    font-size: 9px;">
          <span class="buttonCopy2span" style="text-decoration: underline">К фильтрам</span>
        </div>

      </div>





      <div>
        <div class="c-modal" v-show="modal_12">
          <span>modal_12</span>
        </div>
        <div class="bg" id="switcher_window_dialog" v-show="modal_12" v-on:click="setModalDialogBySelectFalt">
          <div class="close" v-on:click="setModalDialogBySelectFalt">
            <span v-on:click="setModalDialogBySelectFalt"></span>
            <span v-on:click="setModalDialogBySelectFalt"></span>
            <span v-on:click="setModalDialogBySelectFalt"></span>
            <span v-on:click="setModalDialogBySelectFalt"></span>
            <svg viewBox="0 0 36 36" class="circle" v-on:click="setModalDialogBySelectFalt">
              <path v-on:click="setModalDialogBySelectFalt"
                    stroke-dasharray="100, 100"
                    d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>

          <div class="favwindowFlatParent">
            <div class="favwindowFlat" style="    width: 166px;    height: 160px;" v-for=" (idhash, idxf) in boardUniq" >
<!--              {{property.id}}-->


              <chose-card
                  :key="idhash"
                  :property="propertyGet(idhash)"
              />











            </div>
          </div>

        </div>
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
                          <input v-model="name1"  type="text" placeholder="Имя" name="name" required />
                        </div>

<!--                        <div>-->
<!--                          <input type="email" placeholder="Email" name="email" required />-->
<!--                        </div>-->

                        <div>
                          <input v-model="phone1"  type="phone" placeholder="Номер телефона" name="phone" required />
                        </div>

                        <h6 name="body">Ваш вопрос</h6>
                        <div>
                          <textarea id="yourMessage" v-model="message1" placeholder="Ваше сообщение" name="message" required />
                        </div>
<br>
                        <div>
                          <a class="buttonCopy2"  v-on:click="sendMessage1">Отправить сообщение</a>
                        </div>
                      </form>

<!--                      <div>-->
<!--                        {{ name1 }} {{ phone1 }}  {{ message1 }}-->
<!--                      </div>-->

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
!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){e(1),t.exports=e(4)},function(t,n,e){"use strict";var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};e(2);var o=e(3);!function(t){function n(t){return t=i({},c,t),function(t){return["nfc-top-left","nfc-top-right","nfc-bottom-left","nfc-bottom-right"].indexOf(t)>-1}(t.positionClass)||(console.warn("An invalid notification position class has been specified."),t.positionClass=c.positionClass),t.onclick&&"function"!=typeof t.onclick&&(console.warn("Notification on click must be a function."),t.onclick=c.onclick),"number"!=typeof t.showDuration&&(t.showDuration=c.showDuration),(0,o.isString)(t.theme)&&0!==t.theme.length||(console.warn("Notification theme must be a string with length"),t.theme=c.theme),t}function e(t){return t=n(t),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.title,i=n.message,c=r(t.positionClass);if(!e&&!i)return console.warn("Notification must contain a title or a message!");var a=(0,o.createElement)("div","ncf",t.theme);if(!0===t.closeOnClick&&a.addEventListener("click",function(){return c.removeChild(a)}),t.onclick&&a.addEventListener("click",function(n){return t.onclick(n)}),t.displayCloseButton){var s=(0,o.createElement)("button");s.innerText="X",!1===t.closeOnClick&&s.addEventListener("click",function(){return c.removeChild(a)}),(0,o.append)(a,s)}if((0,o.isString)(e)&&e.length&&(0,o.append)(a,(0,o.createParagraph)("ncf-title")(e)),(0,o.isString)(i)&&i.length&&(0,o.append)(a,(0,o.createParagraph)("nfc-message")(i)),(0,o.append)(c,a),t.showDuration&&t.showDuration>0){var l=setTimeout(function(){c.removeChild(a),0===c.querySelectorAll(".ncf").length&&document.body.removeChild(c)},t.showDuration);(t.closeOnClick||t.displayCloseButton)&&a.addEventListener("click",function(){return clearTimeout(l)})}}}function r(t){var n=document.querySelector("."+t);return n||(n=(0,o.createElement)("div","ncf-container",t),(0,o.append)(document.body,n)),n}var c={closeOnClick:!0,displayCloseButton:!1,positionClass:"nfc-top-right",onclick:!1,showDuration:3500,theme:"success"};t.createNotification?console.warn("Window already contains a create notification function. Have you included the script twice?"):t.createNotification=e}(window)},function(t,n,e){"use strict";!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}if(!(void 0===window.Element||"classList"in document.documentElement)){var n=Array.prototype,e=n.push,i=n.splice,o=n.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);i.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,function(t,n,e){Object.defineProperty?Object.defineProperty(t,n,{get:e}):t.__defineGetter__(n,e)}(Element.prototype,"classList",function(){return new t(this)})}}()},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=n.partial=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return t.apply(void 0,e.concat(i))}},o=(n.append=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];return e.forEach(function(n){return t.appendChild(n)})},n.isString=function(t){return"string"==typeof t},n.createElement=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];var o=document.createElement(t);return e.length&&e.forEach(function(t){return o.classList.add(t)}),o}),r=function(t,n){return t.innerText=n,t},c=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),c=1;c<n;c++)e[c-1]=arguments[c];return i(r,o.apply(void 0,[t].concat(e)))};n.createParagraph=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return c.apply(void 0,["p"].concat(n))}},function(t,n){}]);

const myNotification = window.createNotification({
  // options here
});


function getUrl(){
 let ulr0 =  (window.location != window.parent.location)
      ? document.referrer
      : document.location.href
  return ulr0
}

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
  import ChoseCard from './ChoseCard'
  // import {media} from "vue-image-lightbox/src/dummy";
  // require('vue-image-lightbox/dist/vue-image-lightbox.min.css')//original style


  export default {
    data: () => ({

      message1:"",
      phone1:"",
      name1:"",

      submitted: false,
      FORM_ENDPOINT: "endpointUrl",

      modal_2: false,
      modal_12: false,
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
      LightBox, ChoseCard,
    },
    computed: {
      webShareApiSupported() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        try {
          return navigator.canShare()
        } catch (e) {
          // console.error(e)
        }
        return navigator.share
      },
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
      ...mapGetters('chess', [
        'boardUniq',
      ]),
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

      propertyGet(hash){
        // console.log('this.$store.state.chess',this.$store.state.chess)
        // console.log('this.$store.state.chess.properties[0]',this.$store.state.chess.properties[0])
        let filterCriteria = [hash];
        let filteredData = this.$store.state.chess.properties.filter(item => filterCriteria.includes(item.id));
        // console.log('filteredData',filteredData);
        return filteredData[0]
      },

      checkViewMode() {
        var field = 'manager_mode';
        var url = window.parent.location.href;
        if (url.indexOf('?' + field + '=') != -1)
          return true;
        else if (url.indexOf('&' + field + '=') != -1)
          return true;
        return false
      },

      showHide() {
        var panel1 = document.getElementById('idTableWithFloor')
        if (panel1) {
          // console.log('panel1.style.right');
          // console.log(panel1.style.right);
          if(panel1.style.right=='0px'){
            panel1.style.right = "-137px";
          } else {
            panel1.style.right = "0px";
          }
          // console.log('panel1.style.right');
          // console.log(panel1.style.right);
        }

        var panel1 = document.getElementById('closeArea')
        if (panel1) {
          panel1.style.width='100%';
          panel1.style.height = "100%";
        }

      },

      handleSubmit() {
        setTimeout(() => {
          this.submitted = true;
        }, 100);
      },

      getName(name,kitchen){
        if(name=='0'){
          return "Студия"
        }
        if (kitchen == 'true' | kitchen === true) {
          if (name === '1'| name === 1) {
            return "Евро 2-комнатная"
          }
          if (name === '2'| name === 2) {
            return "Евро 3-комнатная"
          }
        } else {
          if (name === '1'| name === 1) {
            return "1-комнатная"
          }
          if (name === '2'| name === 2) {
            return "2-комнатная"
          }
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

      shareViaWebShare() {
        var urlparent = String(getUrl())

        // let arStr = urlparent.split('/');
        // if(arStr.length>1){
        //   urlparent='https://домотель.рф/index.html?sqr='+arStr[1];
        // }

        try {
          navigator.share({
            title: 'Жизнь как в отпуске',
            text: 'Квартира в ДомОтель.РФ',
            url: urlparent
          })
        } catch (e) {
          // console.log('urlparent',urlparent)
          // alert(e)
          return this.saveToClipboard()
        }

      },

      saveToClipboard() {
        var urlparent = getUrl()
        console.log('urlparent',urlparent)
        navigator.clipboard.writeText(urlparent);


        window.createNotification({
          closeOnClick: true,
          // displays close button
          displayCloseButton: false,
          // nfc-top-left
          // nfc-bottom-right
          // nfc-bottom-left
          positionClass: 'nfc-top-right',
          // callback
          onclick: false,
          // timeout in milliseconds
          showDuration: 7500,
          // success, info, warning, error, and none
          theme: 'success'
        })({
          title: 'Скопировано!',
          message: 'Адрес текущей страницы был скопирован в ваш буффер обмена'
        });

      },

      sendMessage1() {
        console.log(this.message1)
        console.log(this.phone1)
        console.log(this.name1)
        var urlparent = getUrl()
        let res1 = fetch("https://do72.4dev.app/do72api/hs/extint/send", {
          method: "POST",
          body: JSON.stringify({
            requestType: "call",
            typeform: "01",
            dateTime: "112345678",
            contacts: {
              phone: this.phone1,
              name: this.name1
              // ,email: ""
            },
            data: {
              flatId: this.property.id,
              flatIdC: this.property.id,
              comment: this.message1,
              source: urlparent
              // ,roistatid: ""
            }
            // ,referrer: {
            //   url: urlparent,
            //   urlsite: urlparent
            // }
          }),
          headers: {
            "Content-type": "text/plain; charset=UTF-8"
          }
        });

        console.log(res1) // в случе успеха придет - success

        this.setModalDialog()

        window.createNotification({
          closeOnClick: true,
          // displays close button
          displayCloseButton: false,
          // nfc-top-left
          // nfc-bottom-right
          // nfc-bottom-left
          positionClass: 'nfc-top-right',
          // callback
          onclick: false,
          // timeout in milliseconds
          showDuration: 3500,
          // success, info, warning, error, and none
          theme: 'success'
        })({
          title: 'Отпарвлено!',
          message: 'Наш менеджер свяжется с вами в ближайшее время'
        });
      },


      setModalDialogBySelectFalt(isBron = false, propertyL = []) {
        scrollTop();
        let elBg = document.getElementById('switcher_window_dialog')
        let testParent = document.getElementById('maincontent_parent1')

        if (elBg && testParent) {
          // console.log(elBg)
          // console.log(testParent)
          testParent.appendChild(elBg)
        }

        this.modal_12 = !this.modal_12;
      },

      setModalDialog(isBron = false, propertyL = []) {
        scrollTop();
        let elBg  = document.getElementById('bg_fav_window_dialog')
        let testParent  = document.getElementById('maincontent_parent1')

        if(elBg && testParent){
          // console.log(elBg)
          // console.log(testParent)
          testParent.appendChild(elBg)
        }

        this.modal_2 = !this.modal_2;



          (function myLoop(i) {
            setTimeout(function () {
              //  your code here

              var messageChooosed = document.getElementById("yourMessage");
              if (typeof messageChooosed !== "undefined")
              {//getName(property.type_apartment,property.kitchen_living)
                messageChooosed.innerHTML=''
                if (isBron===true) {
                  messageChooosed.innerHTML='Прошу забронировать '+propertyL['rooms']+' комнатную квартиру, площадю '+propertyL['area']+' квадартных метра, на '+propertyL['floor']+' этаже'
                }
                else{
                  messageChooosed.innerHTML='';
                }
              }

              if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
            }, 500)
          })(10);








      },

      goToChess() {
        var url = window.parent.location.href.split('?')[0]+'?manager_mode=1';

        if ((window.parent.location.href.indexOf("localhost") != -1) | (window.parent.location.toString().indexOf("localhost") != -1)) {
          window.parent.location.href = url
          window.parent.location.replace(url);
        }

        window.open(
            url, "_blank");

        // window.parent.location.replace('https://xn--d1acscjb2a6f.xn--p1ai/manager/index.html');
        // window.parent.location.href = 'https://xn--d1acscjb2a6f.xn--p1ai/manager/index.html';
        // window.location.replace('https://xn--d1acscjb2a6f.xn--p1ai/manager/index.html');
        // window.location.href = 'https://xn--d1acscjb2a6f.xn--p1ai/manager/index.html';
      },

      setModal() {
        this.$emit("changemode", "True");

        console.log('set modal appartamentDetail Fav')
        // console.log(this.modal_3 , 'this.modal_3 ')
        // let elBg  = document.getElementById('bg_fav_window')
        // let testParent  = document.getElementById('maincontent_parent1')
        // console.log('elBg',elBg)
        // console.log('testParent',testParent)
        // if(elBg && testParent){
        //   console.log('elBg',elBg)
        //   console.log('testParent',testParent)
        //   testParent.appendChild(elBg)
        // }

        scrollTop();
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

        // onmouseover=" document.getElementById('tooltip-text').style.display = 'block'; "
        var elem1 =  document.getElementById('tooltip-text');

        let sttTooltip = 'Добавлено в избранное';
        let fav = []
        if (checkCookie(cookieName)) {
          let json1 = getCookie(cookieName);
          fav = JSON.parse(json1);
          let index = fav.indexOf(uuid)
          if( index != -1)
          {
            fav.splice(index, 1);
            this.inFavCustom = false
            sttTooltip = 'Удалено из избранного'
          }else{
            fav.push(uuid);
            this.inFavCustom = true
          }
        } else {
          fav.push(uuid);
          this.inFavCustom = true
        }

        elem1.innerHTML = sttTooltip;
        elem1.style.display = 'block';
        setTimeout(   ()=>{elem1.style.display = 'none';} , 2000)
        // console.log('uuid--',uuid)
        // console.log('fav--',fav)
        console.log('--')
        console.log('--')
        setCookie(cookieName, fav, 365)
// setTimeout(    this.$nextTick(), 500)
// setTimeout(    this.$forceNextTick(), 500)

        scrollTop();

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
    //background-color: rgba(#e73232, .5);// красный шедоу на кнопке
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

  @media (max-width: 500px) {
    .dialogAsc-container{
      max-width: 300px;
    }
    #yourMessage{
      max-width: 250px;
    }
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
