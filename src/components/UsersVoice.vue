<template>
    <div class="row users-voice" id="users-voice">
        <b-container class="container">
            <div class="section-title">
                <h1 class="text-center"><strong><span class="under-line">ユーザーの声</span></strong></h1>
            </div>
            <b-row class="row">
                <b-col cols="1" id="arrows" class="arrows">
                  <div v-on:click="prev" class="back-page-button">
                    <img src="@/assets/img/backpage.png" width="100%" alt="">
                  </div>
                </b-col>
                <b-col cols="10" class="">
                <slick ref="slick" :options="slickOptions">
                      <div class="users-voice-detail">
                        <h5><strong>友人来店が増えて、店が盛り上がってます！</strong></h5>
                        <div class="detail-1-text">
                          <p>
                            可視化されたことで競争力が生まれて、先月、また前年と比較しても友人経由の売上が伸びてて助かってます!
                          </p>
                        </div>
                        <div class="detail-1-icon">
                          <img src="@/assets/img/user-3_modify.png" width="80px" alt="">
                          <p class="">
                            カフェバー オーナー
                            <br>
                            高田さん
                          </p>
                        </div>
                      </div>
                      <div class="users-voice-detail">
                        <h5><strong>店長に感謝される回数増えたのが嬉しい！</strong></h5>
                        <div class="detail-1-text">
                          <p>
                            お金もらえるのは嬉しいけど、店長や同僚スタッフに「お前すげーな」って褒められるのが嬉しい!
                          </p>
                        </div>
                        <div class="detail-1-icon">
                          <img src="@/assets/img/user-2_modify.png" width="80px" alt="">
                          <p class="">
                            カフェバー 本職役者
                            <br>
                            原さん
                          </p>
                        </div>
                      </div>
                    <div class="users-voice-detail">
                      <h5><strong>最初だけ手間取ったけど、すぐに慣れた！</strong></h5>
                      <div class="detail-1-text">
                        <p>
                          シンプルで余計な機能がなくて迷わず使える。新しい手間がほとんどないのがすぐに使えた！
                        </p>
                      </div>
                      <div class="detail-1-icon">
                        <img src="@/assets/img/user-1_modify.png" width="80px" alt="">
                        <p class="">
                          カフェバー ヘルプスタッフ
                          <br>
                          諸橋さん
                        </p>
                      </div>
                    </div>
                    <div class="users-voice-detail">
                        <h5><strong>店長に相談して、報酬はスタッフで均等分けにした。</strong></h5>
                        <div class="detail-1-text">
                          <p>
                            全員で大切にしたいお客さんなので、誰が呼んでも同じ対応を出来るようにスタッフ全員で分けるようにしました。
                          </p>
                        </div>
                        <div class="detail-1-icon">
                          <img src="@/assets/img/user-4_modify.png" width="80px" alt="">
                          <p class="">
                            居酒屋 スタッフ
                            <br>
                            増井さん
                          </p>
                        </div>
                    </div>
                </slick>
                </b-col>
                <b-col cols="1" id="arrows" class="arrows">
                  <div v-on:click="next" class="next-page-button">
                    <img src="@/assets/img/nextpage.png" width="100%" alt="">
                  </div>
                </b-col>
            </b-row>
        </b-container>

    </div>
              <!-- <div class="container user-voice" id="user-voice">
                  <div class="section-title">
                      <h1 class="text-center"><strong><span style="border-bottom: solid 5px #ffcf07">ユーザーの声</span></strong></h1>
                  </div>
                  <div class="row">
                      <div class="card user-card col-md-4">
                        <img class="card-img-top" src="@/assets/img/user-3.png" alt="画像">
                        <div class="card-body">
                          <h5 class="card-title">友人来店が増えて店が盛り上がってます！</h5>
                          <br>
                          <p class="card-text">可視化されたことで競争力が生まれて、<br>前年と比較しても友人経由の売上が伸びてて助かってます。</p>
                        </div>
                      </div>
                      <div class="card user-card col-md-4">
                        <img class="card-img-top" src="@/assets/img/user-2.png" alt="画像">
                        <div class="card-body">
                          <h5 class="card-title">店長に感謝される回数が増えたのが嬉しい!</h5>
                          <br>
                          <p class="card-text">お金もらえるのは嬉しいけど、<br>店長や同僚スタッフに「お前すげーな」って褒められるのが嬉しい</p>
                        </div>
                      </div>
                      <div class="card user-card col-md-4">
                        <img class="card-img-top" src="@/assets/img/user-1.png" alt="画像">
                        <div class="card-body">
                          <h5 class="card-title">最初だけ手間取ったけど、<br>すぐに慣れた!</h5>
                          <br>
                          <p class="card-text">シンプルで余計な機能がなくて迷わず使える。<br>新しい手間がほとんどないのがすぐに使えた！</p>
                        </div>
                      </div>
                  </div>
              </div> -->
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
      }
    }
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
    }
  }
}
</script>

<style scoped>
.section-title{
  margin-bottom: 70px;
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
  background-color: #FFF8EA;
  font-weight: bold;
  padding-top: 80px;
}

.users-voice-detail{
  width: 100%;
  height: 300px;
  /* background: #FFF8EA; */
  /* margin-bottom: 48px; */
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

.arrows{
  text-align: center;
  padding-top: 2%;
}

/* .next-page-button{
  width: 100px;
  height: 100px;
}
.back-page-button{
  width: 100px;
  height: 100px;
} */
/* .carousel-control-next, .carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 10%;
  color: #fff;
  text-align: center;
  opacity: .5;
  transition: opacity .15s ease;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 30px;
  width: 30px;
  outline: black;
  background-size: 30%, 30%;
  border-radius: 50%;
  background-color: gray;
} */

@media screen and (max-width: 768px) {
.section-title h1{
  margin-top: 48px;
  font-size: 25px;
}

.section-title h1:after {
  /* position: absolute; */
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
  background-color: #FFF8EA;
  font-weight: bold;
  padding-top: 60px;
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
}
</style>
