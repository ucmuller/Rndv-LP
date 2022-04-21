<template>
  <div class="wrap">
        <first-view/>
        <service-section/>
        <howto-section/>
        <div class="subscribe-button" v-on:click="ankerLink('subscribe')"></div>
        <over-view/>
        <information-section/>
        <users-voice/>
        <referral-subscribe/>

        <div class="scroll-top" id="js-button" v-on:click="scrollTop('js-button', 500)"><img src="@/assets/img/angle-up.png" alt="" width="100%"></div>
  </div>
</template>

<script>
import FirstView from '@/components/FirstView'
import ServiceSection from '@/components/ServiceSection'
import HowtoSection from '@/components/HowtoSection'
import OverView from '@/components/OverView'
import InformationSection from '@/components/InformationSection'
import UsersVoice from '@/components/UsersVoice'
import ReferralSubscribe from '@/components/ReferralSubscribe'
export default {
  name: 'TopPage',
  components: {
    FirstView,
    ServiceSection,
    HowtoSection,
    OverView,
    InformationSection,
    UsersVoice,
    ReferralSubscribe
  },
  methods: {
    ankerLink (link) {
      location.hash = ''
      location.hash = link
    },
    scrollTop (elem, duration) {
      let target = document.getElementById(elem)
      target.addEventListener('click', function () {
        let currentY = window.pageYOffset
        let step = duration / currentY > 1 ? 10 : 100
        let timeStep = duration / currentY * step
        let intervalID = setInterval(scrollUp, timeStep)
        function scrollUp () {
          currentY = window.pageYOffset
          if (currentY === 0) {
            clearInterval(intervalID)
          } else {
            scrollBy(0, -step)
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
.wrap{
  width: 85%;
  overflow: hidden;
  margin: auto;
  margin-top: 80px;
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
  opacity: 0.7;
}

.scroll-top {
  position: fixed;
  right: 0px;
  bottom: 80px;
  z-index: 100;
  opacity: .3;
  width: 50px;
}
.scroll-top:hover {
  cursor: pointer;
  opacity: .7;

}

@media screen and (max-width: 769px) {

.wrap{
  width: 90%;
  overflow: hidden;
  margin: auto;
  margin-top: 60px;
}

h1{
  font-size: 27px;
}
h2{
  font-size: 22px;
}

p{
  font-size: 13px;
}

.logo_a{
  width:60%;
}

.navbar-brand{
  width: 30%;
  padding-left: -20px;
}

.first-view h1 {
  position: absolute;
  width: 100%;
  top: 13%;
  left: 60%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;
  z-index: 1;
  text-align: left;
}

.first-view{
  position: relative;
  margin: auto;
  background-color: #FFD428;
  padding-top: 93%;
}

video {
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
}

.service{
  margin-top: 48px;

}

.detail{
  padding-top: 48px;
}

.section-title{
  margin-top: 48px;
  margin-bottom: 56px;
}

.step-1 h5 {
  margin-bottom: 32px;
}
.step-1{
  margin-bottom: 56px;
}
.step-1 p {
  font-size: 15px;
  width: 80%;
  margin: auto;
  margin-bottom: 32px;
}

.install-url-card{
  width: 90%;
  margin: auto;
}

.install-url-card h3{
  font-size: 22px;
}

.install-url-card-body{
  padding-top: 40px;
}
.detail_pc{
  display: none;
}
.detail{
  display: contents;
  width: 100%;
}

.user-card{
  width: 80%;
  margin: auto;
  background: #ffcf07;
  margin-bottom: 24px;
  padding: 0;
  height: auto;

}
.user-card h5{
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: .16em;
  text-align: left;
  cursor: pointer;
  font-weight: bold;
}
.user-card p{
  letter-spacing: 0;
  font-weight: bold;
}

.subscribe {
  padding-top: 48px;
  width: 100%;
  /* height: 200px; */
  margin: auto;
  margin: auto;
}

.subscribe-title h5{
  line-height: 1.5;
}

.form-group {
  margin:auto;
  width: 70%;
}

.subscribe-button-area{
  text-align: center;
  margin-top: 24px;
  margin-bottom: 8px;
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

.first-view-button-area{
  text-align: center;
  position: absolute;
  width: 100%;
  top: 95%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
}

.bottom-section{
  background-size: cover;
  background-repeat: no-repeat;
}

}

</style>
