<template>
  <div @click.stop="closeLightBox">
    <transition
      mode="out-in"
      name="vue-lb-content-transition"
      @afterEnter="enableImageTransition"
      @beforeLeave="disableImageTransition"
    >
      <div
        v-if="media"
        v-show="lightBoxOn"
        ref="container"
        class="vue-lb-container"
      >
        <div class="vue-lb-content">
          <div class="vue-lb-header">
            <span />
            <button
              v-if="closable"
              type="button"
              :title="closeText"
              class="vue-lb-button-close"
            >
              <slot name="close">
                <CloseIcon />
              </slot>
            </button> <!-- .vue-lb-button-close -->
          </div> <!-- .vue-lb-header -->
          <div
            class="vue-lb-figure"
            @click.stop
          >
            <transition
              mode="out-in"
              :name="modalImageTransitionName"
            >
              <img
                v-if="!media[select].type"
                :key="media[select].src"
                :src = "media[select].src"

                :srcset="media[select].srcset || ''"
                class="vue-lb-modal-image"
                :alt="media[select].caption"
              >

              <video
                v-if="media[select].type == 'video'"
                ref="video"
                :key="media[select].sources[0].src"
                :width="media[select].width"
                :height="media[select].height"
                :autoplay="media[select].autoplay"
                controls
              >
                <source
                  v-for="source in media[select].sources"
                  :key="source.src"
                  :src="source.src"
                  :type="source.type"
                >
              </video>

<!--              <span-->
<!--                v-if="media[select].type == '3d'"-->
<!--                ref="video"-->
<!--                :key="media[select].src"-->
<!--                :width="media[select].width"-->
<!--                :height="media[select].height"-->
<!--                :autoplay="media[select].autoplay"-->
<!--                controls-->
<!--              >-->
<!--                <source-->
<!--                  v-for="source in media[select].sources"-->
<!--                  :key="source.src"-->
<!--                  :src="source.src"-->
<!--                  :type="source.type"-->
<!--                >-->
<!--              </span>-->

              <div class="iframe-loading"
                  v-if="media[select].type == '3d'"
              >
                <div  v-on:click="setModal" class="i3dTourModalButton">открыть во весь экран</div>
                <br/>
              <iframe

                  :src="media[select].src"
                  width="612px"
                  height="612px"

              >
                Пожалуйста подождите, 3д модель загружается на ваше устройство
              </iframe>


                <div>
                  <div class="c-modal" v-show="modal_1">
                    <span>modal_1</span>
                  </div>
                  <div class="bg" id="bg_3d_tout" v-show="modal_1" v-on:click="setModal">
                    <div class="close" v-on:click="setModal">
                      <span v-on:click="setModal"></span>
                      <span v-on:click="setModal"></span>
                      <span v-on:click="setModal"></span>
                      <span v-on:click="setModal"></span>
                      <svg viewBox="0 0 36 36" class="circle" v-on:click="setModal">
                        <path v-on:click="setModal"
                            stroke-dasharray="100, 100"
                            d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                    </div>
                    <iframe
                        class = "ifarameFullScreen"
                        :src="media[select].src"
                        width="90%%"
                        height="90%"

                    >
                      Пожалуйста подождите, 3д модель загружается на ваше устройство
                    </iframe>
                  </div>
                </div>
              </div>



            </transition>

<!--            <slot name="customCaption">-->
<!--              <div-->
<!--                v-show="showCaption"-->
<!--                class="vue-lb-info"-->
<!--                v-html="media[select].caption"-->
<!--              />-->
<!--            </slot>-->

            <div class="vue-lb-footer">
              <div class="vue-lb-footer-info" />
              <div
                class="vue-lb-footer-count"
                v-show="showFooterCount"
              >
                <slot
                  name="footer"
                  :current="select + 1"
                  :total="media.length"
                >
                  {{ select + 1 }} / {{ media.length }}
                </slot>
              </div>
            </div>
          </div>
        </div> <!-- .vue-lb-content -->
        <div class="vue-lb-thumbnail-wrapper">
          <div
            v-if="showThumbs"
            class="vue-lb-thumbnail"
          >
            <button
              v-if="media.length > 1"
              type="button"
              class="vue-lb-thumbnail-arrow vue-lb-thumbnail-left"
              :title="previousThumbText"
              @click.stop="previousImage()"
            >
              <slot name="previousThumb">
                <LeftArrowIcon />
              </slot>
            </button>




<!--            <div-->
<!--              v-for="(image, index) in imagesThumb"-->
<!--              v-show="index >= thumbIndex.begin && index <= thumbIndex.end"-->
<!--              :key="typeof image.src === 'string' ? `${image.src}${index}` : index"-->
<!--              v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }"-->
<!--              :class="'vue-lb-modal-thumbnail' + (select === index ? '-active' : '')"-->
<!--              @click.stop="showImage(index)"-->
<!--            >-->
<!--_{{image.caption}}_-->
<!--_{{image.src}}_-->

<!--              <slot-->
<!--                v-if="image.type"-->
<!--                name="videoIcon"-->
<!--              >-->
<!--                <VideoIcon />-->
<!--              </slot>-->
<!--            </div>-->







            <div
              v-for="(image, index) in imagesThumb"
              v-show="index >= thumbIndex.begin && index <= thumbIndex.end"
              :key="typeof image.src === 'string' ? `${image.src}${index}` : index"
              :class="'vue-lb-info_gal' + (select === index ? '-active' : '')"
              @click.stop="showImage(index)"
            >
<!--_{{image.caption}}_-->
<!--_{{image.src}}_-->

<!--              <slot-->
<!--                v-if="image.type"-->
<!--                name="videoIcon"-->
<!--              >-->
<!--                <VideoIcon />-->
<!--              </slot>-->


<!--              <slot-->
<!--                v-if="image.type=='3d'"-->
<!--                name="videoIcon"-->
<!--              >-->
<!--                <VideoIcon />-->
<!--              </slot>-->


              <div
                  v-html="media[index].caption"
              >
              </div>


            </div>







            <button
              v-if="media.length > 1"
              type="button"
              class="vue-lb-thumbnail-arrow vue-lb-thumbnail-right"
              :title="nextThumbText"
              @click.stop="nextImage()"
            >
              <slot name="nextThumb">
                <RightArrowIcon />
              </slot>
            </button>
          </div> <!-- .vue-lb-thumbnail -->
        </div>
        <button
          v-if="media.length > 1"
          type="button"
          class="vue-lb-arrow vue-lb-left"
          :title="previousText"
          @click.stop="previousImage()"
        >
          <slot name="previous">
            <LeftArrowIcon />
          </slot>
        </button>

        <button
          v-if="media.length > 1"
          type="button"
          class="vue-lb-arrow vue-lb-right"
          :title="nextText"
          @click.stop="nextImage()"
        >
          <slot name="next">
            <RightArrowIcon />
          </slot>
        </button>
      </div> <!-- .vue-lb-container -->
    </transition>
  </div>
</template>

<script>
import LeftArrowIcon from './LeftArrowIcon.vue'
import RightArrowIcon from './RightArrowIcon.vue'
import CloseIcon from './CloseIcon.vue'
import VideoIcon from './VideoIcon.vue'

let Hammer

if (typeof window !== 'undefined') {
  Hammer = require('hammerjs')
}

export default {
  components: {
    LeftArrowIcon,
    RightArrowIcon,
    CloseIcon,
    VideoIcon,
  },

  props: {
    media: {
      type: Array,
      required: true,
    },

    disableScroll: {
      type: Boolean,
      default: true,
    },

    showLightBox: {
      type: Boolean,
      default: true,
    },

    closable: {
      type: Boolean,
      default: true,
    },

    startAt: {
      type: Number,
      default: 0,
    },

    nThumbs: {
      type: Number,
      default: 7,
    },

    showThumbs: {
      type: Boolean,
      default: true,
    },

    showFooterCount: {
      type: Boolean,
      default: true,
    },

    // Mode
    autoPlay: {
      type: Boolean,
      default: false,
    },

    autoPlayTime: {
      type: Number,
      default: 3000,
    },

    siteLoading: {
      type: String,
      default: '',
    },

    showCaption: {
      type: Boolean,
      default: false,
    },

    lengthToLoadMore: {
      type: Number,
      default: 0,
    },

    closeText: {
      type: String,
      default: 'Close (Esc)',
    },

    previousText: {
      type: String,
      default: 'Previous',
    },

    nextText: {
      type: String,
      default: 'Next',
    },

    previousThumbText: {
      type: String,
      default: 'Previous',
    },

    nextThumbText: {
      type: String,
      default: 'Next',
    },
  },

  data() {
    return {
      modal_1: false,
      select: this.startAt,
      lightBoxOn: this.showLightBox,
      timer: null,
      modalImageTransitionName: 'vue-lb-modal-image-no-transition',
    }
  },

  computed: {
    thumbIndex() {
      const halfDown = Math.floor(this.nThumbs / 2)

      if (this.select >= halfDown && this.select < this.media.length - halfDown)
        return {
          begin: this.select - halfDown + (1 - (this.nThumbs % 2)),
          end: this.select + halfDown,
        }

      if (this.select < halfDown)
        return {
          begin: 0,
          end: this.nThumbs - 1,
        }

      return {
        begin: this.media.length - this.nThumbs,
        end: this.media.length - 1,
      }
    },

    imagesThumb() {
      if (this.siteLoading) {
        return this.media.map(({ thumb, type,caption }) => ({
          src: thumb,
          caption: caption,
          type,
          loading: this.siteLoading,
          error: this.siteLoading,
        }))
      }

      return this.media.map(({ thumb, type, caption }) => ({
        src: thumb,
        caption: caption,
        type,
      }))
    }
  },

  watch: {
    lightBoxOn(value) {
      if (document != null) {
        this.onToggleLightBox(value)
      }
    },

    select() {
      this.$emit('onImageChanged', this.select)

      if (this.select >= this.media.length - this.lengthToLoadMore - 1)
        this.$emit('onLoad')

      if (this.select === this.media.length - 1)
        this.$emit('onLastIndex')

      if (this.select === 0)
        this.$emit('onFirstIndex')

      if (this.select === this.startAt)
        this.$emit('onStartIndex')
    },
  },

  mounted() {
    if (this.autoPlay) {
      this.timer = setInterval(() => {
        this.nextImage()
      }, this.autoPlayTime)
    }

    this.onToggleLightBox(this.lightBoxOn)

    if (this.$refs.container) {
      const hammer = new Hammer(this.$refs.container)

      hammer.on('swiperight', () => {
        this.previousImage()
      })

      hammer.on('swipeleft', () => {
        this.nextImage()
      })
    }
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.addKeyEvent)

    if (this.autoPlay) {
      clearInterval(this.timer)
    }
  },

  methods: {
    onLightBoxOpen() {
      this.$emit('onOpened')

      if (this.disableScroll) {
        document.querySelector('html').classList.add('no-scroll')
      }
      document.querySelector('body').classList.add('vue-lb-open')
      document.addEventListener('keydown', this.addKeyEvent)

      if (this.$refs.video && this.$refs.video.autoplay) {
        this.$refs.video.play()
      }
    },
    setModal() {
     this.modal_1 = !this.modal_1
      let elBg  = document.getElementById('bg_3d_tout')
      let testParent  = document.getElementById('maincontent_parent1')

      if(elBg && testParent){
        // console.log(elBg)
        // console.log(testParent)
        testParent.appendChild(elBg)
      }

    },
    onLightBoxClose() {
      this.$emit('onClosed')

      if (this.disableScroll) {
        document.querySelector('html').classList.remove('no-scroll')
      }

      document.querySelector('body').classList.remove('vue-lb-open')
      document.removeEventListener('keydown', this.addKeyEvent)

      if (this.$refs.video) {
        this.$refs.video.pause()
        this.$refs.video.currentTime = 0
      }
    },

    onToggleLightBox(value) {
      if (value) {
        this.onLightBoxOpen()
      } else {
        this.onLightBoxClose()
      }
    },

    showImage(index) {
      this.$set(this, 'select', index)
      this.$set(this, 'lightBoxOn', true)
    },

    addKeyEvent(event) {
      if (event.keyCode === 37) this.previousImage() // left arrow
      if (event.keyCode === 39) this.nextImage() // right arrow
      if (event.keyCode === 27) this.closeLightBox() // esc
    },

    closeLightBox() {
      if (!this.closable) return
      this.$set(this, 'lightBoxOn', false)
    },

    nextImage() {
      this.$set(this, 'select', (this.select + 1) % this.media.length)
    },

    previousImage() {
      this.$set(this, 'select', (this.select + this.media.length - 1) % this.media.length)
    },

    enableImageTransition() {
      this.$set(this, 'modalImageTransitionName', 'vue-lb-modal-image-transition')
    },

    disableImageTransition() {
      this.$set(this, 'modalImageTransitionName', 'vue-lb-modal-image-no-transition')
    },
  },
}
</script>

<!--<style src="./style.css"></style>-->
