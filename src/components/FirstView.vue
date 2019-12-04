<template>
    <div v-if="width >= 768" class="first-view">
      <!-- <img class="header-body" src="@/assets/img/first_view_bg.png" width="100%" alt=""> -->
        <div class="logo-R" id="logo-R"></div>
        <div class="logo-N" id="logo-N"></div>
        <div class="logo-D" id="logo-D"></div>
        <div class="logo-V" id="logo-V"></div>

        <div class="first-view-heading">
            <div class="first-view-heading-section-left" >
              <h1>
                <span class="first-view-heading-top">かんたん飲食店招待サービス[ランデブ]</span>
                <br>
                <strong><span class="first-view-heading-middle">大事な人をお店に招待して</span></strong>
                <br>
                <strong><span class="first-view-heading-middle">喜んでもらおう。</span></strong>
              </h1>
            </div>
            <transition appear>
                <div class="first-view-heading-section-right" >
                  <div class="first-view-image-area"></div>
                </div>
            </transition>
        </div>
        <!-- <div class="float"><img src="@/assets/img/scroll.png" height="30px" alt=""></div> -->
         <div class="subscribe-button-pc" v-on:click="ankerLink('subscribe')"></div>
    </div>

    <div v-else-if="width < 768" class="first-view-mobile">
      <!-- <img class="header-body" src="@/assets/img/first_view_bg.png" width="100%" alt=""> -->
        <div class="logo-R" id="logo-R"></div>
        <div class="logo-N" id="logo-N"></div>
        <div class="logo-D" id="logo-D"></div>
        <div class="logo-V" id="logo-V"></div>

        <div class="first-view-heading-mobile">
            <div class="first-view-mobile-section-top" >
              <h1 class="first-view-heading-top" >かんたん飲食店招待サービス[ランデブ]</h1>
              <h1 class="first-view-heading-middle">大事な人をお店に招待して</h1>
              <h1 class="first-view-heading-middle">喜んでもらおう。</h1>
            </div>
            <transition appear>
                <div class="first-view-mobile-section-bottom" >
                  <img src="@/assets/img/LP_capture1.gif" width="80%" alt="">
                </div>
            </transition>
            <div class="subscribe-button" v-on:click="ankerLink('subscribe')"></div>
        </div>

      <!-- <video src="@/assets/img/rndv_movie_0813.mp4" controls playsinline autoplay muted></video> -->
    </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'FirstView',
  components: {
    anime // animeという名前でコンポーネント登録
  },
  data () {
    return {
      width: window.innerWidth
    }
  },
  mounted () {
    this.logoAnime()
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    },
    logoAnime () {
      if (this.width >= 768) {
        let elementArray = ['logo-R', 'logo-N', 'logo-D', 'logo-V']
        // let translateXArray = [-500, -340, -180, -40]
        let translateXArray2 = [0.35, 0.45, 0.555, 0.65]
        let percent = this.width / 1440
        let width = this.width

        elementArray.forEach(function (element, i) {
          setTimeout(function () {
            let elem = document.getElementById(element)
            elem.style.display = 'block'
            anime({
              targets: '.' + element,
              translateX: -1 * (width * 0.7 - width * translateXArray2[i]),
              translateY: -50 * percent,
              scale: 9,
              rotate: 360,
              duration: 5000,
              delay: 400
            })
          }, 2000 * (i + 1))
        })
      } else if (this.width < 768) {
        let elementArray = ['logo-R', 'logo-N', 'logo-D', 'logo-V']
        // let translateXArray = [-50, 10, 70, 130]
        let translateXArray2 = [0.25, 0.42, 0.59, 0.75]
        let width = this.width
        elementArray.forEach(function (element, i) {
          setTimeout(function () {
            let elem = document.getElementById(element)
            elem.style.display = 'block'
            anime({
              targets: '.' + element,
              // translateX: translateXArray[i] - 40,
              translateX: -1 * (width * 0.5 - width * translateXArray2[i]),
              translateY: -150,
              scale: 15,
              rotate: 360,
              duration: 5000,
              delay: 400
            })
          }, 2000 * (i + 1))
        })
      } else if (this.width < 376) {
        let elementArray = ['logo-R', 'logo-N', 'logo-D', 'logo-V']
        // let translateXArray = [-50, 10, 70, 130]
        let translateXArray2 = [0.25, 0.42, 0.59, 0.75]
        let width = this.width
        elementArray.forEach(function (element, i) {
          setTimeout(function () {
            let elem = document.getElementById(element)
            elem.style.display = 'block'
            anime({
              targets: '.' + element,
              // translateX: translateXArray[i] - 40,
              translateX: -1 * (width * 0.5 - width * translateXArray2[i]),
              translateY: -150,
              scale: 17,
              rotate: 360,
              duration: 5000,
              delay: 400
            })
          }, 2000 * (i + 1))
        })
      }
    },
    ankerLink (link) {
      location.hash = ''
      location.hash = link
    }
  }
}
</script>

<style scoped>
.first-view{
  position: relative;
  margin: auto;
  background-color: #FFD428;
  padding-top: 56.25%;
  /* content: url(../img/first_view_bg.png) */
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

.logo-R{
  background-image: url(../assets/img/anime1.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
}
.logo-N{
  background-image: url(../assets/img/anime2.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
    display: none;

}
.logo-D{
  background-image: url(../assets/img/anime3.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  /* margin: auto; */
  display: none;

}
.logo-V{
  background-image: url(../assets/img/anime4.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
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
.first-view-heading-section-left {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
  margin-left: 10%;
  margin-right: -20%;
}

.first-view-heading-section-right {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
  margin-right: 10%;
}
.first-view-heading-top {
  font-size: 22px;
  color: #18C0C1;
}
.first-view-heading-middle {
  font-size: 40px;
}
.first-view-heading h1 {
  line-height: 1.5;
  letter-spacing: 0.1em;
}

.first-view-image-area{
  background-image: url(../assets/img/LP_capture1.gif);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 77%;
  margin-top: 15%;
  margin-left: 26%;
  /* margin-top: 30%; */
}

.float {
  animation: float_9350 3s linear infinite;
  transform-origin: 50% 50%;
  width: 10px;
  margin: auto;
}

@keyframes float_9350 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-6px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
}

/* video {
  position: absolute;
  width: 100%;
  top: 42%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  height: auto;
  z-index: 1;
} */

@media screen and (max-width: 1280px) {
.logo-R{
  background-image: url(../assets/img/anime1.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  /* width: 2%; */
  /* height: 2%; */
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
  margin: auto;
}
.logo-N{
  background-image: url(../assets/img/anime2.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  /* width: 2%; */
  /* height: 2%; */
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
    display: none;

}
.logo-D{
  background-image: url(../assets/img/anime3.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  /* width: 2%;
  height: 2%; */
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  /* margin: auto; */
  display: none;

}
.logo-V{
  background-image: url(../assets/img/anime4.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  /* width: 2%; */
  /* height: 2%; */
  top: 30%;
  left: 70%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
}

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
.first-view-mobile {
  position: relative;
  margin: auto;
  background-color: #FFD428;
  height: 500px;
  text-align: center;
  /* content: url(../img/first_view_bg.png) */
}

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

.first-view-mobile-section-bottom {

}

.logo-R{
  background-image: url(../assets/img/anime1.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
}
.logo-N{
  background-image: url(../assets/img/anime2.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
    display: none;

}
.logo-D{
  background-image: url(../assets/img/anime3.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin: auto;
  display: none;

}
.logo-V{
  background-image: url(../assets/img/anime4.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 1%;
  height: 2%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
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
