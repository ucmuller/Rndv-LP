<template>
<div>
    <div class="row users-voice" id="users-voice">
        <div class="container">
            <div class="section-title">
                <h1 class="text-center"><strong><span class="under-line">ユーザーの声</span></strong></h1>
            </div>
            <div data-v-0cf9c13e="" class="users_voice_content">
              <div id="users-voice" class="row users-voice-card">
                <div class="row row">
                  <a class="users_voice_contents" href="https://blog.rndv.jp/intervew-anpool/" target="_blank">
                    <div class="users_voice_contents_img_wrapper">
                      <img class="users_voice_contents_img" src="@/assets/img/voice_img_1.jpg" width="310" height="227" alt="">
                    </div>
                    <div class="users_voice_contents_txts">
                      <h3 class="users_voice_contents_txts_ttl">【ANPOOLs導入】スタッフを評価するのは「お客さん」であるべき</h3>
                      <p class="users_voice_contents_txts_txt">今回は、RNDV（ランデブ）を一番最初に導入して、お店で利用してくれているオーナー兼店長の髙田裕也さんにインタビューさせて頂きました。…</p>
                      <p class="users_voice_contents_txts_more">more</p>
                    </div>
                  </a>
                  <a class="users_voice_contents" href="https://blog.rndv.jp/case_startbar/" target="_blank">
                    <div class="users_voice_contents_img_wrapper">
                      <img class="users_voice_contents_img" src="@/assets/img/voice_img_2.jpg" width="310" height="227" alt="">
                    </div>
                    <div class="users_voice_contents_txts">
                      <h3 class="users_voice_contents_txts_ttl">【招待文例付き】2019年ラグビーW杯で集客に成功した飲食店の招待例</h3>
                      <p class="users_voice_contents_txts_txt">2019年はラグビー元年と言えるでしょう。本当に大きな感動を与えてくれました。ありがとう日本代表！！第一戦から積極的にラグビー観戦で招待を…</p>
                      <p class="users_voice_contents_txts_more">more</p>
                    </div>
                  </a>
                  <a class="users_voice_contents" href="https://blog.rndv.jp/interview_startbar/" target="_blank">
                    <div class="users_voice_contents_img_wrapper">
                      <img class="users_voice_contents_img" src="@/assets/img/voice_img_3.jpg" width="310" height="227" alt="">
                    </div>
                    <div class="users_voice_contents_txts">
                      <h3 class="users_voice_contents_txts_ttl">初心者向けのハウトー開催で上手に集客しているお店に潜入してみた</h3>
                      <p class="users_voice_contents_txts_txt">ランデブを利用しているスタッフから招待されたら、空いてる以上は必ず足を運ぶ企画「We are a STARTUP」のVol,3。ランデブをうまく活用し…</p>
                      <p class="users_voice_contents_txts_more">more</p>
                    </div>
                  </a>
                </div>
                <div class="common_btns users_voice_content_btns">
                  <button class="common_btn btn_more" @click="ankerLink('https://blog.rndv.jp')">もっと見る</button>
                </div>
              </div>
            </div>
        </div>
    </div>
    <!-- <div class="interview-pcbn" v-if="width>768">
        <a href="https://blog.rndv.jp" target="_blank">
          <img src="@/assets/img/pcbn_interview.jpg" width="100%" style="" height="">
        </a>
    </div>
    <div class="interview-spbn" v-if="width<=768">
        <a href="https://blog.rndv.jp" target="_blank">
          <img src="@/assets/img/spbn_interview.jpg" width="100%" style="" height="">
        </a>
    </div> -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Slick from 'vue-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
// import '../../node_modules/slick-carousel/slick/slick-theme.css'
export default {
  name: 'UsersVoice',
  components: {
    Carousel,
    Slide,
    Slick
  },
  data () {
    return {
      slickOptions: {
        arrows: false
      },
      width: window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
    handleResize () {
      this.width = window.innerWidth
    },
    ankerLink (link) {
      location.href = ''
      location.href = link
    }
  }
}
</script>

<style scoped>
.section-title{
  margin-bottom: 70px;
  margin-top: 48px;
}

.section-title h1{
  font-size: 34px;
}

.section-title h1:after {
  /* position: absolute; */
  content: " ";
  display: block;
  border-bottom: solid 7px #ffcf07;
  width: 250px;
  margin: auto;
  margin-top: 15px;
}

.slick-next{
  width: 10%;
}

.users-voice{
  width: 100%;
  margin: auto;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-top: 48px;
  background-color: #ffcf07;
  font-weight: bold;
}

.users-voice-detail{
  width: 100%;
  height: 300px;
  text-align: center;
  font-family: "TsukuBRdGothic-Regular";
}

.detail-1-text {
  position: relative;
  display: inline-block;
  width: 85%;
  margin: auto;
  padding: 10px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #FFF;
  border: solid 1px #D8D8D8;
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: normal;
}

.detail-1-text:before {
  content: "";
  position: absolute;
  bottom: -24px;
  left: 85%;
  margin-left: -15px;
  border: 12px solid transparent;
  border-top: 12px solid #FFF;
  z-index: 2;
}

.detail-1-text:after {
  content: "";
  position: absolute;
  bottom: -28px;
  left: 85%;
  margin-left: -17px;
  border: 14px solid transparent;
  border-top: 13px solid #D8D8D8;
  z-index: 1;
}

.detail-1-text p {
  width: 90%;
  text-align: start;
  margin: auto;
}

.detail-1-icon{
  text-align: end;
  text-align: -webkit-right;
  margin-right: 15%;
  margin-top: 2%;
}

.users-voice-detail{
  width: 100%;
  height: 350px;
  /* background: #FFF8EA; */
  /* margin-bottom: 48px; */
  text-align: center;
  font-family: "TsukuBRdGothic-Regular";
}
.users-voice-detail h5{
  font-size: 15px;
}
.users-voice-detail p{
  font-size: 13px;
}

.users_voice_content .users-voice{
  padding-bottom: 100px;
}
.users_voice_content .section-title h1:after{
  border-bottom: none;
  background: #000;
  width: 168px;
  height: 6px;
  border-radius: 10px;
  margin-top: 20px;
}
.users_voice_contents{
  display: inline-block;
  background: #fff;
  width: 30%;
  margin-left: 5%;
  border-radius: 25px;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  box-shadow: 0 8px 14px rgba(211,141,0,0.2);
}
.users_voice_contents:first-child{
  margin-left: 0;
}
.users_voice_contents:hover{
  text-decoration: none;
  opacity: 0.7;
}

.users_voice_contents_img_wrapper{
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  margin: auto 0;
  overflow: hidden;
  border-radius: 25px 25px 0 0;
  height: auto;
  padding-top: 73.225806%;
  opacity: 1;
  transform: scale(1);
}
.users_voice_contents_img{
  position: absolute;
  left: -500px;
  top: -500px;
  bottom: -500px;
  right: -500px;
  display: block;
  margin: auto;
  width: 100%;
  height: auto;
}

.users_voice_contents_img{
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.users_voice_contents:hover .users_voice_contents_img{
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  transform: scale(1.1);
}

.users_voice_contents_txts{
  color: #000;
  padding: 20px;
}
.users_voice_contents_txts_ttl{
  font-size: 16px;
  font-weight: 900;
  margin: 0 auto;
  line-height: 1.6;
  overflow: hidden;
  height: 50px;
  max-height: 50px;
}
.users_voice_contents_txts_txt{
  font-size: 13px;
  margin: 10px auto 0;
}
.users_voice_contents_txts_more{
  position: relative;
  font-size: 20px;
  font-weight: 900;
  margin: 0 auto;
  text-align: right;
  margin-right: 20px;
}
.users_voice_contents_txts_more:after{
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  right: -15px;
  width: 4px;
  height: 4px;
  border-top: 4px solid #000;
  border-right: 4px solid #000;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  box-sizing: content-box;
}

.users_voice_content_btns{
  text-align: center;
  margin: 50px auto 0;
  width: 100%;
}

.btn_more{
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  background: #000;
  padding: 20px;
  width: 90%;
  max-width: 390px;
  border-radius: 35px;
  border-color: #ffcf07;
}

.arrows{
  text-align: center;
  padding-top: 2%;
}

.interview-pcbn{
  width: 70%;
  margin: auto;
  margin-top: 100px;
}

.interview-pcbn a:hover{
  opacity: 0.7;
}

@media screen and (max-width: 768px) {
.section-title h1{
  margin-top: 48px;
  font-size: 25px;
}

.section-title h1:after {
  content: " ";
  display: block;
  border-bottom: solid 4px #ffcf07;
  width: 180px;
  margin: auto;
  margin-top: 5px;
}

.users-voice{
  width: 100%;
  margin: auto;
  margin-top: 48px;
  background-color: #ffcf07;
  font-weight: bold;
  padding-top: 60px;
}

.users_voice_content .users-voice[data-v-7371a323]{
}

.users_voice_content .section-title h1[data-v-7371a323]:after{
  margin-top: 15px;
  height: 4px;
  width: 100px;
}
.users_voice_contents{
  display: block;
  width: 90%;
  max-width: 314px;
  margin: 30px auto 0;
}
.users_voice_contents:first-child{
  margin: 0 auto;
}

.arrows{
  width: 100%;
  margin-top: 20%;
  padding: 0;
}
.next-page-button{
  width: 100%;
  /* height: 50px; */
}
.back-page-button{
  width: 100%;
  /* height: 50px; */
}
.interview-spbn{
  width: 100%;
  margin: auto;
  margin-top: 100px;
}
.interview-spbn a:hover{
  opacity: 0.7;
}
}
</style>
