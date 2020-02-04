<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img width="100%" :src="pic.img_1" alt="スライド1"></swiper-slide>
      <swiper-slide><img width="100%" :src="pic.img_2" alt="スライド2"></swiper-slide>
      <swiper-slide><img width="100%" :src="pic.img_3" alt="スライド2"></swiper-slide>
      <swiper-slide><img width="100%" :src="pic.img_4" alt="スライド2"></swiper-slide>
      <swiper-slide><img width="100%" :src="pic.img_5" alt="スライド2"></swiper-slide>
      <swiper-slide><img width="100%" :src="pic.img_6" alt="スライド2"></swiper-slide>
      <swiper-slide><img width="100%" :src="pic.img_7" alt="スライド2"></swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <div class="btns_bar fv_info">
      <p class="btns_bar_txt">今すぐ使ってみる</p>
      <div class="btns_bar_body">
        <a class="common_btn btn_2" href="https://apps.apple.com/jp/app/id1485140161" target="_blank"><img src="@/assets/img/btn_app.png" width="148" height="40" alt="Download on the App Sttore"></a>
        <a class="common_btn btn_3" href="https://twitter.com/rndv_ceo" target="_blank">twitterの<br>DMへ</a>
      </div>
    </div>
  </div>
</template>

<script>
import ImagePc1 from '@/assets/img/mv1_pc.png'
import ImagePc2 from '@/assets/img/mv2_pc.png'
import ImagePc3 from '@/assets/img/mv3_pc.png'
import ImagePc4 from '@/assets/img/mv4_pc.png'
import ImagePc5 from '@/assets/img/mv5_pc.png'
import ImagePc6 from '@/assets/img/mv6_pc.png'
import ImagePc7 from '@/assets/img/mv7_pc.png'
import ImageSp1 from '@/assets/img/mv1_sp.png'
import ImageSp2 from '@/assets/img/mv2_sp.png'
import ImageSp3 from '@/assets/img/mv3_sp.png'
import ImageSp4 from '@/assets/img/mv4_sp.png'
import ImageSp5 from '@/assets/img/mv5_sp.png'
import ImageSp6 from '@/assets/img/mv6_sp.png'
import ImageSp7 from '@/assets/img/mv7_sp.png'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'FirstView',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 7500,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      width: window.innerWidth,
      pic: {}
    }
  },
  mounted () {
    // this.logoAnime()
  },
  watch: {
    width: function (val) {
      this.setCarouselImage()
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.setCarouselImage()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    },
    ankerLink (link) {
      location.hash = ''
      location.hash = link
    },
    setCarouselImage () {
      if (this.width >= 768) {
        this.pic = {
          img_1: ImagePc1,
          img_2: ImagePc2,
          img_3: ImagePc3,
          img_4: ImagePc4,
          img_5: ImagePc5,
          img_6: ImagePc6,
          img_7: ImagePc7
        }
      } else {
        this.pic = {
          img_1: ImageSp1,
          img_2: ImageSp2,
          img_3: ImageSp3,
          img_4: ImageSp4,
          img_5: ImageSp5,
          img_6: ImageSp6,
          img_7: ImageSp7
        }
      }
    }
  }
}
</script>

<style scoped>
.first-view{
  position: relative;
  margin: auto;
  background-color: #FFD428;
}

.swiper-container {
  background-color: #FFD428;
}

.subscribe-button-pc {
  border-radius: 25px;
  color: #FFF;
  background-image: url(../assets/img/btn/movecta.png);
  background-repeat:no-repeat;
  background-size: cover;
  transition: .4s;
  width: 200px;
  margin: auto;
  height: 50px;
  position: relative;
  z-index: 10;
}

.v-enter-active, .v-leave-active {
  transition: opacity 2s, transform 1s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.first-view{
  animation-name: fade-in1;
  animation-duration:4s;
  animation-timing-function: ease-out;
  /* animation-delay:1s; */
  animation-iteration-count:1;
  animation-direction:normal;
  animation-fill-mode: forwards;
}

@keyframes fade-in1 {
  0% {opacity: 0}
  100% {opacity: 1}
}

.float {
  animation: float_9350 3s linear infinite;
  transform-origin: 50% 50%;
  width: 10px;
  margin: auto;
}

.common_btn{
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.btn_2{
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: #242a37;
  padding: 15px 30px;
  border-radius: 10px;
}
.btn_3{
  font-size: 18px;
  font-weight: 900;
  color: #242a37;
  background: #fff;
  padding: 7px 30px;
  border: 1px solid #242a37;
  box-sizing: border-box;
  border-radius: 10px;
}

.btns_bar{
  text-align: center;
  padding: 20px 0;
  box-shadow: 0 1px 0 #000;
}
.btns_bar_txt{
  display: inline-block;
  font-size: 29px;
  font-weight: 900;
  margin-bottom: 0;
  line-height: 70px;
  height: 70px;
}
.btns_bar_body{
  display: inline-block;
  margin-left: 25px;
  vertical-align: top;
}
.btns_bar_body .common_btn{
  width: 200px;
  height:66px;
  box-sizing:border-box;
  border-radius:14px;
  position:relative;
  padding: 0;
}
.btns_bar_body .common_btn img{
  position:absolute;
  left:0;right:0;top:0;bottom:0;
  margin:auto;
}
.btns_bar_body .btn_3{
  font-size:16px;
  margin-left: 10px;
  line-height: 1.3;
  padding-top: 11px;
}

@keyframes float_9350 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-6px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
}

@media screen and (max-width: 1280px) {
.first-view-heading-top {
  font-size: 15px;
  color: #18C0C1;
}
.first-view-heading-middle {
  font-size: 30px;
}
.first-view-image-area {
  background-image: url(../assets/img/LP_capture1.gif);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 77%;
  margin-top: 5%;
  margin-left: 25%;
  /* margin-top: 30%; */
}
.first-view-heading h1 {
  line-height: 1.1;
  letter-spacing: 0.1em;
}
}
@media screen and (max-width: 768px) {
.first-view-heading-top {
  font-size: 13px;
  color: #18C0C1;
}
.first-view-heading-middle {
  font-size: 25px;
}
.first-view-image-area {
  background-image: url(../assets/img/LP_capture1.gif);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 90%;
  margin-top: 6%;
  margin-left: 22%;
  /* margin-top: 30%; */
}
.first-view-heading h1 {
  line-height: 1.1;
  letter-spacing: 0.1em;
}
}

@media screen and (max-width: 768px) {

.first-view-mobile-section-top{
  padding-top: 110px;
}

.first-view-heading-mobile {
  width: 100%;
  height: 100%;
  margin: auto;
}

.first-view-heading-top {
  font-size: 15px;
  color: #18C0C1;
  font-weight: bold;
}

.first-view-heading-middle {
  font-size: 18px;
  font-weight: bold;
}
.first-view-heading h1 {
  letter-spacing: 0.1em;
}

.first-view-heading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 55%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: auto;
  color: #000000;
}

.btns_bar{
  padding: 6px 0 13px;
  overflow:hidden;
}
.btns_bar_txt{
  font-size: 14px;
  display: block;
  line-height: 2;
  height: auto;
}
.btns_bar_body{
  margin: 2px auto 0;
  display: block;
  width: 90%;
  max-width: 420px;
}
.btns_bar .common_btn{
  width: 49%;
  height:50px;
  float:left;
  border-radius:10px;
}
.btns_bar .btn_2 img{
  width: auto;
  height: 60%;
}
.btns_bar .btn_3{
  padding-top:7px;
  font-size: 13px;
  margin-left:2%;
}

.btn_2{
  border-radius: 13px;
}
.btn_3{
  border-radius: 13px;
}
.first-view-mobile-section-bottom {

}

.subscribe-button {
  border-radius: 25px;
  color: #FFF;
  background-image: url(../assets/img/btn/movecta.png);
  background-repeat:no-repeat;
  background-size: cover;
  transition: .4s;
  width: 200px;
  margin: auto;
  height: 50px;
}

.subscribe-button:hover {
  opacity: 0.7
}

}
</style>
