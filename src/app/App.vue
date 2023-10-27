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

<!--                  в избранном пусто-->

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

















              <div class="tittleForBarFloor" style="display: none">
                <!--              выберите ваш<br>этаж-->
<!--                >>>>>-->

<div style="
    color: #000;
    position: absolute;
    font-size: 9px;
    left: 10px;
    top: 14px;
">На этаже</div>


                <svg data-v-7e7f006c="" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="140" viewBox="0 0 283.000000 569.000000" preserveAspectRatio="xMidYMid meet" style="
    position: absolute;
    left: 12px;
    top: 6px;
    /*pointer-events: auto;*/
"><g data-v-7e7f006c="" transform="translate(0.000000,569.000000) scale(0.100000,-0.100000)" fill="#727272" stroke="none"><path data-v-7e7f006c="" d="M79 5673 l-66 -4 -7 -52 c-8 -68 -8 -5476 0 -5544 l7 -52 71 -5 c39 -3 673 -8 1409 -11 l1337 -6 -2 2830 c-2 1556 -7 2833 -11 2838 -8 8 -2601 13 -2738 6z m2621 -2828 l0 -2705 -395 0 -395 0 0 323 c-1 386 -8 483 -44 560 -53 112 -160 214 -282 269 -42 19 -67 22 -170 23 l-121 0 -87 -44 c-115 -58 -184 -127 -241 -240 l-43 -86 -7 -402 -7 -403 -389 0 -389 0 0 2705 0 2705 1285 0 1285 0 0 -2705z m-1159 -1684 c74 -28 149 -99 194 -183 l37 -68 5 -385 6 -385 -366 0 -367 0 0 318 c0 342 9 472 35 523 10 18 38 54 63 81 112 120 248 154 393 99z"></path><path data-v-7e7f006c="" d="M500 5191 c-35 -10 -39 -42 -39 -342 -1 -284 4 -345 27 -354 9 -3 159 -9 333 -12 l317 -6 18 34 c17 31 19 60 19 314 0 316 -4 351 -41 365 -29 11 -595 12 -634 1z m530 -346 l0 -225 -220 0 -220 0 0 225 0 225 220 0 220 0 0 -225z"></path><path data-v-7e7f006c="" d="M1697 5193 c-42 -11 -47 -47 -47 -340 0 -308 6 -349 48 -360 33 -10 587 -9 624 0 15 4 30 17 34 30 4 12 8 160 8 330 0 278 -2 309 -17 325 -16 15 -49 17 -325 19 -169 0 -315 -1 -325 -4z m533 -348 l0 -225 -225 0 -225 0 0 183 c0 220 5 254 34 260 11 2 110 5 219 6 l197 1 0 -225z"></path><path data-v-7e7f006c="" d="M505 4262 c-23 -6 -31 -14 -36 -37 -12 -53 -10 -600 2 -633 10 -29 13 -31 84 -37 41 -4 187 -6 325 -4 252 4 252 4 271 28 19 23 20 40 17 342 -2 244 -6 321 -16 331 -10 10 -83 13 -315 15 -166 1 -315 -2 -332 -5z m525 -352 l0 -230 -220 0 -220 0 0 230 0 230 220 0 220 0 0 -230z"></path><path data-v-7e7f006c="" d="M1693 4260 c-36 -15 -43 -68 -43 -350 0 -293 6 -335 48 -351 17 -7 138 -9 329 -7 274 3 304 5 320 21 17 16 18 44 18 337 0 293 -1 321 -18 337 -16 16 -45 18 -325 20 -172 2 -317 -1 -329 -7z m537 -351 l0 -231 -217 7 c-120 4 -220 9 -222 11 -2 2 -6 102 -9 224 l-5 220 227 0 226 0 0 -231z"></path><path data-v-7e7f006c="" d="M588 3331 c-58 -3 -110 -10 -115 -14 -4 -5 -8 -157 -8 -337 0 -256 3 -332 13 -342 10 -10 83 -14 310 -16 163 -2 312 0 330 3 23 4 36 14 44 33 7 18 12 129 12 322 1 265 -1 298 -17 328 l-18 32 -222 -2 c-122 -1 -270 -4 -329 -7z m442 -356 l0 -225 -220 0 -220 0 0 225 0 225 220 0 220 0 0 -225z"></path><path data-v-7e7f006c="" d="M1775 3334 c-95 -6 -103 -10 -114 -52 -12 -40 -15 -570 -5 -610 13 -48 41 -52 353 -52 160 0 301 4 315 10 18 6 27 20 33 47 9 48 9 590 -1 620 -4 11 -13 24 -22 27 -18 7 -478 15 -559 10z m455 -360 l0 -227 -216 5 c-118 3 -218 8 -221 11 -3 3 -8 103 -11 221 l-5 216 227 0 226 0 0 -226z"></path><path data-v-7e7f006c="" d="M488 2393 c-13 -3 -18 -22 -23 -88 -9 -108 -2 -581 8 -592 10 -9 596 -17 644 -8 56 10 58 21 58 335 0 157 -4 298 -8 313 -4 16 -18 32 -33 37 -25 10 -611 12 -646 3z m542 -343 l0 -220 -220 0 -220 0 0 220 0 220 220 0 220 0 0 -220z"></path><path data-v-7e7f006c="" d="M1675 2386 c-19 -14 -20 -26 -20 -336 0 -310 1 -322 20 -336 28 -20 661 -16 674 4 13 21 22 318 14 491 -3 88 -10 166 -14 173 -13 20 -646 24 -674 4z m555 -336 l0 -220 -225 0 -225 0 0 220 0 220 225 0 225 0 0 -220z"></path></g></svg>
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


    <div class="mobile__flat__callback" v-on:click="gotoHome"  >
      <button class="buttonCopy2" style="  background-color: #e47554; "  >
        Вернуться к выбору планировки
      </button>
    </div>

    <!--   was here hided element -->
    <div class="maincontent_parentBottom">
              <div class="galTitle text-copy4">

              </div>


      <div class="galTitle text-copy4">
        Не хотите заниматься отделкой?
      </div>

<!--        <br/>-->
<!--        <br/>-->
<!--        <br/>-->

      <div class="galTitle text-body-21">
          Вы можете приобрести квартиру с готовой отделкой и даже с мебелью. Заезжай и живи. Дизайны ниже нам очень нравятся, надеемся что и вам они будут по душе.
      </div>

      <main class="dflexContent flex-grow-1 pos-rel maincontentBottom" >



        <div class="exampleGal">
          <div class="galTitle text-body-21" style="margin-left: 15px;">Светлый «осовременненый» минимализм</div>
          <photo-collage-wrapper
              gapSize="6px"
              @itemClick="itemClickHandlerW"
              v-bind="collageWtmb"></photo-collage-wrapper>
        </div>

        <div class="exampleGal">
          <div class="galTitle text-body-21" style="margin-left: 15px;">Темный «оклассиченный» лофт</div>
          <photo-collage-wrapper
              gapSize="6px"
              @itemClick="itemClickHandlerD"
              v-bind="collageDtmb"></photo-collage-wrapper>
        </div>
      </main>
    </div>


    <!--   show modal window with galary -->
    <div>
      <div class="c-modal" v-show="modal_5">
        <span>modal_5</span>
      </div>
      <div class="bg" id="bg_fav_window5" v-show="modal_5" >
        <div class="close" v-on:click="setModal5" >
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

        <light-box :media="this.matched_all" :closable="false" :showCaption="false" :showThumbs="false"></light-box>

      </div>
    </div>






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



  // import rokka from './rokka_gallery/components/Gallery.vue'
  // import rokka from './rokka_gallery/Export.vue'
  import { PhotoCollageWrapper } from 'vue-photo-collage'
  import LightBox from './components/vue-image-lightbox/components/LightBox.vue'

  import ApartmentCard from './components/ApartmentCard'
  import ApartmentCardFav from './components/ApartmentCardFav'
  import ApartmentDetails from './components/ApartmentDetails'
  import { mapState, mapGetters } from 'vuex'
  import debounce from 'lodash/debounce'

  export default {
    components: { PhotoCollageWrapper, LightBox, ApartmentCard, ApartmentDetails, ApartmentCardFav },

    data: () => ({
      modal_3: false,
      modal_5: false,

      collageChoise: 'W',

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
      },

      collageW: {
        width: "700px",
        height: ["200px", "200px"],
        layout: [1, 9],
        photos: [
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/1.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/2.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/3.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/4.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/5.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/6.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/8.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/9.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/10.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g/11.jpg",
          },
        ],
        showNumOfRemainingPhotos: true,
      },

      collageD: {
        width: "700px",
        height: ["200px", "200px"],
        layout: [1, 9],
        photos: [
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/2.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/1.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/3.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/4.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/5.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/6.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/8.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/9.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g/10.jpg",
          },
        ],
        showNumOfRemainingPhotos: true,
      },







      collageWtmb: {
        width: "700px",
        height: ["200px", "200px"],
        layout: [1, 9],
        photos: [
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/1.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/2.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/3.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/4.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/5.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/6.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/8.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/9.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/10.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/white_g_tmb/11.jpg",
          },
        ],
        showNumOfRemainingPhotos: true,
      },

      collageDtmb: {
        width: "700px",
        height: ["200px", "200px"],
        layout: [1, 9],
        photos: [
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/2.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/1.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/3.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/4.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/5.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/6.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/8.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/9.jpg",
          },
          {
            source:
                "https://xn--d1acscjb2a6f.xn--p1ai/images/dark_g_tmb/10.jpg",
          },
        ],
        showNumOfRemainingPhotos: true,
      }





    }),

    computed: {
      matched_all(){
        if (this.collageChoise == 'D')
          return this.collageD.photos.map(({source}) => ({
            src: source,
            caption: '',
            thumb: source,
          }))
        // else
        // if (this.collageChoise == 'W')
          return this.collageW.photos.map(({source}) => ({
            src: source,
            caption: '',
            thumb: source,
          }))
      },
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

      if(false)
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

      itemClickHandlerW(data, i) {
        // click event
        // console.log('i',i)
        this.collageChoise = 'W'
        this.modal_5 = true
        window.parent.scrollTo({ top: 0, behavior: 'smooth' });
      },

      itemClickHandlerD(data, i) {
        // click event
        // console.log('i',i)
        this.collageChoise = 'D'
        this.modal_5 = true
        window.parent.scrollTo({ top: 0, behavior: 'smooth' });
      },


      setModal() {
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


      setModal5() {
        this.modal_5 = !this.modal_5
        // console.log(this.modal_3 , 'this.modal_3 ')
        let elBg  = document.getElementById('bg_fav_window5')
        let testParent  = document.getElementById('maincontent_parent1')

        if(elBg && testParent){
          // console.log(elBg)
          // console.log(testParent)
          testParent.appendChild(elBg)
        }

      },

      gotoHome() {
        // window.parent.location.href  =  'https://xn--d1acscjb2a6f.xn--p1ai/'+'#:~:text=%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C-,%D0%B2%D1%81%D0%B5,-%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8';
        window.parent.location.href  =  'https://xn--d1acscjb2a6f.xn--p1ai/'+'/#:~:text=отделки%20с%20мебелью-,или%20без!%20Все.,-Студия';
      },
      floorClick(itemId, className){
        const itemElement = document.getElementById(`floorView-${itemId}`);
        if (itemElement) {
          let childElements = itemElement.getElementsByClassName(className);
          // console.log('childElements1',childElements)
          let foundEl = (childElements.length > 0)
          if(foundEl){
            childElements[0].click()

            var FlatChooosed = document.getElementsByClassName("choosedFloor");
            if (typeof FlatChooosed !== "undefined")
              for (var i = 0; i < FlatChooosed.length; i++) {
                FlatChooosed.item(i).classList.remove('choosedFloor')
              }
            itemElement.classList.add('choosedFloor');

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
            main.style.minHeight = `${tiles.scrollHeight+1000}px`
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

        //console.log('---start----urlparent',urlparent)
        var typedefault = getParameterByName('typedefault',urlparent);
        //console.log('---start----typedefault',typedefault)
          if (typedefault) {
                  // let typedefault = parseInt(typedefault, 10)
                  // defaultTypes.push(typedefault)

            //console.log('---start----defaultTypes',defaultTypes)
            defaultTypes.push(typedefault.toString())
        }




        var wordsSqr = []
        var sqr = getParameterByName('sqr',urlparent);
        if (sqr) {
          // console.log('---start----sqr',sqr)
          let wordsSqr1 = sqr.split('_');
          wordsSqr[0] = parseFloat(wordsSqr1[0])
          wordsSqr[1] = parseFloat(wordsSqr1[1])
          // console.log('---start----wordsSqr',wordsSqr)
        }
        if(wordsSqr.length==0){
          wordsSqr = ([(byArea||[])[0] || this.minArea, (byArea||[])[1] || this.maxArea])
        }




        const filters = {
          bySection: sectionId || null,
          byLayout: byLayout || [],
          byType: byType || defaultTypes,
          byArea:  wordsSqr ,
          byFloor: [(byFloor||[])[0] || 1 , (byFloor||[])[1] || this.floorsCount],
          byPrice: [(byPrice||[])[0] || this.minPrice, (byPrice||[])[1] || this.maxPrice]
        }

        // if(byArea){
        //   console.log('---start----byArea',byArea)
        // }
        // console.log('---start----setFilter',filters)

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
        setTimeout(_ => {

          // let arrcards = document.getElementsByClassName('c-building__flat-type');//берем доступную к прдаже квартиру
          let arrcards = document.getElementsByClassName('nowInSale');// берем первый из этажей с квартирой доступной к продаже
          // if (arrcards.length > 0) {
          //   arrcards[0].click()
          // }

          // console.log('arrcards',arrcards)
          if (arrcards.length > 0) {
            arrcards[0].click()
            arrcards[0].querySelectorAll('.buttonFloor')[0].click();



            // let itemElement = document.getElementById("floorView-"+0);
            // if (typeof itemElement !== "undefined")
            // {
            //   var FlatChooosed = document.getElementsByClassName("choosedFloor");
            //   if (typeof FlatChooosed !== "undefined")
            //     for (var i = 0; i < FlatChooosed.length; i++) {
            //       FlatChooosed.item(i).classList.remove('choosedFloor')
            //     }
            // }
            // itemElement.classList.add('choosedFloor');


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
  //min-height: 1000px;
  //min-height: 1200px;
  //border: 2px dashed;
}
.maincontent_parentBottom {
  max-width: 100%;
  min-height: 400px;
  //max-width: 1600px;
  margin: 0px auto 0px auto;
}



.maincontent{
  max-width: 1600px;

  //height: 1000px;
  //height: 1400px;
  //height: 100%;
  //max-height: 2160px;
  //border: 5px solid;
  margin: 0px auto 0px auto;
}
.maincontentBottom{
  max-width: 1600px;
  height: 400px;
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
  .choosedFloor .buttonFloor {
    background-color: #e47554;
    color: black;
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
